import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Grade } from '../types';
import { CONTENT, CONTENT_BY_ID } from '../data/content';
import { SYLLABUS } from '../data/syllabus';
import { buildBatch, eligibleItems, type Focus, type Reason } from '../engine/feed';
import { actions, dayKey, getState, liveStreak, useApp } from '../engine/store';
import { CardView } from './CardView';
import { Icon, type IconName } from './Icon';
import type { CardMem } from './cards/shared';

export type FeedFocus = Focus & { saved?: boolean; label?: string };

type Entry =
  | { key: string; kind: 'item'; itemId: string; reason: Reason }
  | { key: string; kind: 'goal' }
  | { key: string; kind: 'break'; count: number }
  | { key: string; kind: 'lap' };

let keySeq = 0;
const nextKey = () => `e${++keySeq}`;
const BREAK_EVERY = 30;
const RENDER_AHEAD = 2;

export function Feed({ focus, onFocus, onClearFocus, onOpenProgress }: {
  focus: FeedFocus | null; onFocus: (f: FeedFocus | null) => void; onClearFocus: () => void; onOpenProgress: () => void;
}) {
  const app = useApp();
  const { profile } = app;

  // Saved-cards mode uses a snapshot so unsaving a card doesn't reshuffle the feed under you.
  const pool = useMemo(() => {
    if (focus?.saved) {
      const ids = new Set(getState().bookmarks);
      return eligibleItems(CONTENT, profile).filter((i) => ids.has(i.id));
    }
    return eligibleItems(CONTENT, profile, focus ?? undefined);
  }, [profile, focus]);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [active, setActive] = useState(0);
  const [graded, setGraded] = useState<Set<string>>(new Set());
  const mems = useRef(new Map<string, CardMem>());
  const scroller = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const sessionCount = useRef(0);
  const goalShown = useRef(false);

  const makeBatch = useCallback((existing: Entry[], n: number): Entry[] => {
    const st = getState();
    const shown = existing.flatMap((e) => (e.kind === 'item' ? [e.itemId] : []));
    return buildBatch({ pool, states: st.items, now: Date.now(), recent: [...st.recent, ...shown] }, n)
      .map((p) => ({ key: nextKey(), kind: 'item' as const, ...p }));
  }, [pool]);

  // New pool (focus or subjects changed) → new feed.
  useEffect(() => {
    const st = getState();
    goalShown.current = (st.stats.days[dayKey(Date.now())]?.cards ?? 0) >= st.profile.dailyGoal;
    mems.current.clear();
    setGraded(new Set());
    setEntries(makeBatch([], 8));
    setActive(0);
    scroller.current?.scrollTo({ top: 0 });
  }, [makeBatch]);

  // Keep the selected subject chip visible in the strip.
  useEffect(() => {
    const el = strip.current, on = el?.querySelector<HTMLElement>('.chip-btn.active');
    if (!el || !on) return;
    const a = el.getBoundingClientRect(), b = on.getBoundingClientRect();
    el.scrollLeft += b.left - a.left - (a.width - b.width) / 2;
  }, [focus]);

  // Keep a few cards ready below the current one. In a small focused set, mark the
  // point where every card has been shown once so the student knows they've covered it.
  useEffect(() => {
    if (!entries.length || active < entries.length - 4) return;
    setEntries((es) => {
      const shown = new Set(es.flatMap((e) => (e.kind === 'item' ? [e.itemId] : [])));
      const lap = focus && !es.some((e) => e.kind === 'lap') && pool.every((i) => shown.has(i.id))
        ? [{ key: nextKey(), kind: 'lap' as const }] : [];
      return [...es, ...lap, ...makeBatch(es, 6)];
    });
  }, [active, entries.length, makeBatch, focus, pool]);

  // Track which card is on screen. Every slide is exactly one viewport tall.
  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const onScroll = () => setActive(Math.round(root.scrollTop / Math.max(1, root.clientHeight)));
    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, [pool.length]);

  // Leaving an unanswered card: note it so it isn't shown again straight away.
  const prevActive = useRef(0);
  useEffect(() => {
    const prev = entries[prevActive.current];
    if (prev && prev.kind === 'item' && prevActive.current !== active && !graded.has(prev.key)) actions.skipped(prev.itemId);
    prevActive.current = active;
  }, [active, entries, graded]);

  const goTo = useCallback((i: number) => {
    const root = scroller.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.scrollTo({ top: i * root.clientHeight, behavior: reduce ? 'auto' : 'smooth' });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, [role="dialog"]')) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'j') { e.preventDefault(); goTo(active + 1); }
      if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'k') { e.preventDefault(); goTo(Math.max(0, active - 1)); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, goTo]);

  const insertAfter = (index: number, entry: Entry) =>
    setEntries((es) => [...es.slice(0, index + 1), entry, ...es.slice(index + 1)]);

  const afterAnswer = (index: number, key: string) => {
    setGraded((g) => new Set(g).add(key));
    sessionCount.current += 1;
    const st = getState();
    const today = st.stats.days[dayKey(Date.now())]?.cards ?? 0;
    if (!goalShown.current && today >= st.profile.dailyGoal) {
      goalShown.current = true;
      insertAfter(index, { key: nextKey(), kind: 'goal' });
    } else if (sessionCount.current % BREAK_EVERY === 0) {
      insertAfter(index, { key: nextKey(), kind: 'break', count: sessionCount.current });
    }
  };

  const today = app.stats.days[dayKey(Date.now())];
  const todayCards = today?.cards ?? 0;
  const streak = liveStreak(app.stats);
  const goalPct = Math.min(1, todayCards / profile.dailyGoal);

  return (
    <div className="feed-wrap">
      {/* On wide screens the feed gets the same title header as every other screen. */}
      <header className="top feed-header">
        <div className="titles">
          <div className="title">Feed</div>
          <div className="sub">{focus ? `${focus.label ?? 'Focus'} only` : 'Mixed from all your subjects'} · {todayCards} of {profile.dailyGoal} cards today</div>
        </div>
      </header>
      <div className="feed-top">
        <div className="chips subject-strip" role="tablist" aria-label="Choose what to scroll" ref={strip}>
          {focus && !focus.subject && (
            <button className="chip-btn active" role="tab" aria-selected onClick={onClearFocus} aria-label={`${focus.label ?? 'Focus'}: tap to clear`}>
              {focus.label ?? 'Focus'} <Icon name="close" className="ic-inline" />
            </button>
          )}
          <button className={'chip-btn' + (!focus ? ' active' : '')} role="tab" aria-selected={!focus} onClick={onClearFocus}>For you</button>
          {profile.subjects.map(({ id }) => {
            const s = SYLLABUS[id];
            const on = focus?.subject === id && !focus.topic;
            return (
              <button key={id} className={'chip-btn' + (on ? ' active' : '')} role="tab" aria-selected={on}
                style={{ ['--c' as string]: s.color }}
                onClick={() => onFocus(on ? null : { subject: id, label: s.name })}>
                <i className="dot" aria-hidden /> {s.name}
              </button>
            );
          })}
        </div>
        <button className="hbtn wide" onClick={onOpenProgress} aria-label={`Streak ${streak} days. ${todayCards} of ${profile.dailyGoal} cards today`}>
          <span className={'streak' + (todayCards > 0 ? ' lit' : '')}><Icon name="flame" /> {streak}</span>
          <span className="ring" style={{ ['--p' as string]: goalPct }}><span>{todayCards}</span></span>
        </button>
      </div>

      {pool.length === 0 ? (
        <div className="empty-feed">
          <p>{focus?.saved ? 'No saved cards yet. Tap ☆ on any card to save it.' : 'No cards match this focus yet.'}</p>
          {focus && <button className="btn primary" onClick={onClearFocus}>Back to the full feed</button>}
        </div>
      ) : (
        <div className="feed" ref={scroller}>
          {entries.map((e, i) => (
            <section className="slide" key={e.key} data-index={i}>
              {Math.abs(i - active) <= RENDER_AHEAD && renderEntry(e, i)}
            </section>
          ))}
        </div>
      )}
    </div>
  );

  function renderEntry(e: Entry, i: number) {
    if (e.kind === 'goal') return <GoalCard onNext={() => goTo(i + 1)} onProgress={onOpenProgress} />;
    if (e.kind === 'break') return <BreakCard count={e.count} onNext={() => goTo(i + 1)} />;
    if (e.kind === 'lap') return <LapCard label={focus?.label ?? 'this set'} onNext={() => goTo(i + 1)} onExit={onClearFocus} />;
    const item = CONTENT_BY_ID.get(e.itemId)!;
    if (!mems.current.has(e.key)) mems.current.set(e.key, {});
    return (
      <CardView
        item={item}
        reason={e.reason}
        mem={mems.current.get(e.key)!}
        graded={graded.has(e.key)}
        bookmarked={app.bookmarks.includes(item.id)}
        flagged={app.flags.some((f) => f.itemId === item.id)}
        onGrade={(g: Grade) => { if (graded.has(e.key)) return; actions.grade(item.id, g); afterAnswer(i, e.key); }}
        onRead={() => { if (graded.has(e.key)) return; actions.read(item.id); afterAnswer(i, e.key); }}
        onNext={() => goTo(i + 1)}
      />
    );
  }
}

function Milestone({ icon, tone, title, children, actions }: {
  icon: IconName; tone: 'good' | 'gold' | 'accent'; title: string; children: ReactNode; actions: ReactNode;
}) {
  return (
    <article className="feed-card milestone">
      <div className="milestone-body">
        <div className={'milestone-icon ' + tone}><Icon name={icon} /></div>
        <h2>{title}</h2>
        {children}
        <div className="row center">{actions}</div>
      </div>
    </article>
  );
}

function GoalCard({ onNext, onProgress }: { onNext: () => void; onProgress: () => void }) {
  const app = useApp();
  const d = app.stats.days[dayKey(Date.now())];
  const acc = d && d.graded ? Math.round((d.correct / d.graded) * 100) : null;
  return (
    <Milestone icon="check" tone="good" title="Daily goal done"
      actions={<>
        <button className="btn primary" onClick={onNext}>Keep going</button>
        <button className="btn subtle" onClick={onProgress}>See progress</button>
      </>}>
      <p>{d?.cards ?? 0} cards today{acc !== null ? ` · ${acc}% correct` : ''} · {liveStreak(app.stats)}-day streak</p>
      <p className="muted small">Short daily sessions beat long cramming sessions for remembering things. You can stop here, or keep going.</p>
    </Milestone>
  );
}

function BreakCard({ count, onNext }: { count: number; onNext: () => void }) {
  return (
    <Milestone icon="pause" tone="gold" title={`${count} cards in a row`}
      actions={<button className="btn primary" onClick={onNext}>I’m good, keep going</button>}>
      <p className="muted">Nice work. A five-minute break, a glass of water or a walk helps your brain consolidate what you’ve just learned.</p>
    </Milestone>
  );
}

function LapCard({ label, onNext, onExit }: { label: string; onNext: () => void; onExit: () => void }) {
  return (
    <Milestone icon="layers" tone="accent" title="You’ve seen every card"
      actions={<>
        <button className="btn primary" onClick={onNext}>Practise again</button>
        <button className="btn subtle" onClick={onExit}>Back to mixed feed</button>
      </>}>
      <p className="muted">That’s the full set for <b>{label}</b>. Keep going to practise the ones you found hardest, or go back to your mixed feed.</p>
    </Milestone>
  );
}

export function focusLabel(f: Focus): string {
  if (f.topic) {
    const subj = SYLLABUS[f.topic.split('.')[0] as keyof typeof SYLLABUS];
    const t = subj.topics.find((t) => t.id === f.topic);
    return t?.title ?? subj.name;
  }
  if (f.subject) return SYLLABUS[f.subject].name;
  return 'Focus';
}
