import { useMemo } from 'react';
import { CONTENT } from '../data/content';
import { SYLLABUS } from '../data/syllabus';
import { dueCount, eligibleItems, mastery } from '../engine/feed';
import { dayKey, liveStreak, useApp } from '../engine/store';
import { Meter } from './Explore';
import { focusLabel, type FeedFocus } from './Feed';

const LEVEL_XP = 250;

export function Progress({ onStudy }: { onStudy: (f: FeedFocus | null) => void }) {
  const app = useApp();
  const now = Date.now();
  const pool = useMemo(() => eligibleItems(CONTENT, app.profile), [app.profile]);
  const today = app.stats.days[dayKey(now)];
  const streak = liveStreak(app.stats, now);
  const due = dueCount(pool, app.items, now);
  const level = Math.floor(app.stats.xp / LEVEL_XP) + 1;
  const levelPct = (app.stats.xp % LEVEL_XP) / LEVEL_XP;

  const week = Array.from({ length: 7 }, (_, k) => {
    const t = now - (6 - k) * 86_400_000;
    const d = app.stats.days[dayKey(t)];
    return { label: new Date(t).toLocaleDateString('en-IE', { weekday: 'narrow' }), cards: d?.cards ?? 0 };
  });
  const maxWeek = Math.max(app.profile.dailyGoal, ...week.map((w) => w.cards));

  // Weak spots: topics with at least three answers where under 75% were right.
  const weak = useMemo(() => {
    const out: { id: string; label: string; acc: number; m: number }[] = [];
    for (const { id } of app.profile.subjects) {
      for (const t of SYLLABUS[id].topics) {
        const items = pool.filter((i) => i.objective.startsWith(t.id + '.'));
        let seen = 0, correct = 0;
        for (const i of items) { const st = app.items[i.id]; if (st) { seen += st.seen; correct += st.correct; } }
        if (seen < 3 || correct / seen >= 0.75) continue;
        out.push({ id: t.id, label: focusLabel({ topic: t.id }), acc: correct / seen, m: mastery(items, app.items, now) });
      }
    }
    return out.sort((a, b) => a.acc - b.acc).slice(0, 3);
  }, [app.profile.subjects, app.items, pool, now]);

  const seenCount = pool.filter((i) => app.items[i.id]?.seen).length;

  return (
    <div className="stack">
      <section className="card">
        <div className="stats">
          <div className="stat"><b>{streak}</b><span>day streak<br />best {app.stats.bestStreak}</span></div>
          <div className="stat"><b>{today?.cards ?? 0}<small>/{app.profile.dailyGoal}</small></b><span>cards today</span></div>
          <div className="stat"><b>{today?.graded ? Math.round((today.correct / today.graded) * 100) + '%' : '–'}</b><span>correct today</span></div>
        </div>
        <div className="level-row">
          <span className="small"><b>Level {level}</b> <span className="muted">· {app.stats.xp} XP</span></span>
          <Meter value={levelPct} color="var(--gold)" />
        </div>
      </section>

      <section className="card">
        <div className="card-head"><h2>This week</h2><span className="side">goal {app.profile.dailyGoal} a day</span></div>
        <div className="week">
          {week.map((w, i) => (
            <div key={i} className="week-col">
              <span className="week-track">
                <span className="week-goal" style={{ bottom: `${(app.profile.dailyGoal / maxWeek) * 100}%` }} />
                <span className={'week-bar' + (w.cards >= app.profile.dailyGoal ? ' met' : '')} style={{ height: `${(w.cards / maxWeek) * 100}%` }} title={`${w.cards} cards`} />
              </span>
              <small>{w.label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="card-head"><h2>Ready to review</h2>{due > 0 && <span className="pill soon">{due} due</span>}</div>
        <p className="small">{due ? 'These cards are due for spaced-repetition review. They’ll appear first in your feed.' : 'Nothing due right now. New cards are waiting in your feed.'}</p>
        <p className="track-label">You’ve seen {seenCount} of {pool.length} cards for your subjects.</p>
      </section>

      {weak.length > 0 && (
        <section className="card">
          <div className="card-head"><h2>Weak spots</h2><span className="side">under 75% right</span></div>
          {weak.map((w) => (
            <div key={w.id} className="item">
              <div className="body">
                <div className="t">{w.label}</div>
                <div className="meta"><span className="pill late">{Math.round(w.acc * 100)}% right</span></div>
              </div>
              <button className="link" onClick={() => onStudy({ topic: w.id, label: w.label })}>Revise</button>
            </div>
          ))}
        </section>
      )}

      <section className="card">
        <div className="card-head"><h2>By subject</h2><span className="side">mastery</span></div>
        {app.profile.subjects.map(({ id }) => {
          const s = SYLLABUS[id];
          const items = pool.filter((i) => i.objective.startsWith(id + '.'));
          const m = mastery(items, app.items, now);
          return (
            <button key={id} className="subject-row" onClick={() => onStudy({ subject: id, label: focusLabel({ subject: id }) })}>
              <span className="nm"><i className="swatch" style={{ background: s.color }} />{s.name}</span>
              <span className="track-wrap"><Meter value={m} color={s.color} /></span>
              <span className="val">{Math.round(m * 100)}%</span>
            </button>
          );
        })}
        <p className="track-label">Mastery grows as you answer cards correctly over increasing gaps of time, and fades if you leave a topic too long.</p>
      </section>
    </div>
  );
}
