import { useMemo, useState } from 'react';
import type { SubjectId } from '../types';
import { CONTENT } from '../data/content';
import { SYLLABUS } from '../data/syllabus';
import { eligibleItems, mastery } from '../engine/feed';
import { useApp } from '../engine/store';
import { focusLabel, type FeedFocus } from './Feed';

export function Meter({ value }: { value: number }) {
  return <span className="meter" aria-label={`${Math.round(value * 100)}% mastered`}><span style={{ width: `${Math.round(value * 100)}%` }} /></span>;
}

export function Explore({ onStudy }: { onStudy: (f: FeedFocus) => void }) {
  const app = useApp();
  const now = Date.now();
  const [open, setOpen] = useState<SubjectId | null>(app.profile.subjects[0]?.id ?? null);
  const pool = useMemo(() => eligibleItems(CONTENT, app.profile), [app.profile]);

  return (
    <div className="screen">
      <h1 className="screen-title">Explore</h1>
      <p className="fine">Your syllabus map: Subject → Topic → Subtopic. Tap a topic to study just that.</p>

      {app.bookmarks.length > 0 && (
        <button className="saved-row" onClick={() => onStudy({ saved: true, label: '★ Saved cards' })}>
          <span>★ Saved cards</span><b>{app.bookmarks.length}</b>
        </button>
      )}

      {app.profile.subjects.map(({ id, level }) => {
        const s = SYLLABUS[id];
        const items = pool.filter((i) => i.objective.startsWith(id + '.'));
        const isOpen = open === id;
        const topics = s.topics.filter((t) => t.level === 'both' || t.level === level);
        return (
          <section key={id} className="subject-block" style={{ ['--h' as string]: s.hue }}>
            <button className="subject-head" onClick={() => setOpen(isOpen ? null : id)} aria-expanded={isOpen}>
              <span className="pick-emoji" aria-hidden>{s.emoji}</span>
              <span className="grow">
                <b>{s.name}</b> <small>{level === 'HL' ? 'Higher' : 'Ordinary'}</small>
                <Meter value={mastery(items, app.items, now)} />
              </span>
              <span className="chev" aria-hidden>{isOpen ? '▾' : '▸'}</span>
            </button>
            {isOpen && (
              <div className="subject-detail">
                <p className="spec">{s.specification}</p>
                <p className="fine">{s.assessment}</p>
                {s.reviewNote && <p className="fine warn-text">⚠ {s.reviewNote}</p>}
                <button className="primary small" onClick={() => onStudy({ subject: id, label: focusLabel({ subject: id }) })}>Study all {s.name}</button>
                {topics.map((t) => {
                  const tItems = items.filter((i) => i.objective.startsWith(t.id + '.'));
                  const subs = t.subtopics.filter((st) => st.level === 'both' || st.level === level);
                  const objectives = subs.flatMap((st) => st.objectives.filter((o) => o.level === 'both' || o.level === level));
                  const covered = objectives.filter((o) => tItems.some((i) => i.objective === o.id)).length;
                  return (
                    <div key={t.id} className="topic-row">
                      <div className="topic-top">
                        <div className="grow">
                          <b>{t.title}</b>
                          <div className="topic-meta">
                            {t.paper && <span className="tag">{t.paper}</span>}
                            <span className={'tag ' + (t.verification === 'verified' ? 'ok' : 'warn')}>{t.verification === 'verified' ? '✓ verified' : 'needs review'}</span>
                            <span className="tag">{tItems.length} cards · {covered}/{objectives.length} objectives</span>
                          </div>
                          <Meter value={mastery(tItems, app.items, now)} />
                        </div>
                        <button className="ghost small" disabled={!tItems.length} onClick={() => onStudy({ topic: t.id, label: focusLabel({ topic: t.id }) })}>Study</button>
                      </div>
                      <ul className="subtopics">
                        {subs.map((st) => (
                          <li key={st.id}>
                            {st.title}
                            {st.level !== 'both' && <span className="tag tiny">{st.level}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
                <p className="fine">Coverage is still growing. This map has not yet been checked line by line against every learning outcome in the official specification.</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
