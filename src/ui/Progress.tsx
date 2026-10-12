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
    <div className="screen">
      <h1 className="screen-title">Progress</h1>

      <div className="stat-grid">
        <div className="stat"><span className="stat-n">🔥 {streak}</span><span className="stat-l">day streak · best {app.stats.bestStreak}</span></div>
        <div className="stat"><span className="stat-n">{today?.cards ?? 0}<small>/{app.profile.dailyGoal}</small></span><span className="stat-l">cards today</span></div>
        <div className="stat"><span className="stat-n">{today?.graded ? Math.round((today.correct / today.graded) * 100) : '–'}<small>%</small></span><span className="stat-l">correct today</span></div>
        <div className="stat"><span className="stat-n">Lv {level}</span><span className="stat-l">{app.stats.xp} XP</span><Meter value={levelPct} /></div>
      </div>

      <section className="panel">
        <h2>This week</h2>
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

      <section className="panel">
        <h2>Ready to review</h2>
        <p>{due ? <><b>{due}</b> cards are due for spaced-repetition review. They’ll appear first in your feed.</> : 'Nothing due right now. New cards are waiting in your feed.'}</p>
        <p className="fine">You’ve seen {seenCount} of {pool.length} cards for your subjects.</p>
      </section>

      {weak.length > 0 && (
        <section className="panel">
          <h2>Weak spots</h2>
          {weak.map((w) => (
            <div key={w.id} className="weak-row">
              <span className="grow">{w.label} <small className="fine">· {Math.round(w.acc * 100)}% right</small><Meter value={w.m} /></span>
              <button className="ghost small" onClick={() => onStudy({ topic: w.id, label: w.label })}>Revise</button>
            </div>
          ))}
        </section>
      )}

      <section className="panel">
        <h2>By subject</h2>
        {app.profile.subjects.map(({ id }) => {
          const s = SYLLABUS[id];
          const items = pool.filter((i) => i.objective.startsWith(id + '.'));
          const m = mastery(items, app.items, now);
          return (
            <button key={id} className="subj-progress" onClick={() => onStudy({ subject: id, label: focusLabel({ subject: id }) })}>
              <span>{s.emoji} {s.name}</span>
              <Meter value={m} />
              <small>{Math.round(m * 100)}%</small>
            </button>
          );
        })}
        <p className="fine">Mastery grows as you answer cards correctly over increasing gaps of time, and fades if you leave a topic too long.</p>
      </section>
    </div>
  );
}
