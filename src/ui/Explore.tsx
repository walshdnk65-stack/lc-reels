import { useMemo, useState } from 'react';
import type { SubjectId } from '../types';
import { CONTENT } from '../data/content';
import { SYLLABUS } from '../data/syllabus';
import { eligibleItems, mastery } from '../engine/feed';
import { useApp } from '../engine/store';
import { focusLabel, type FeedFocus } from './Feed';
import { Icon } from './Icon';

/** A progress track in the tracker's style, optionally in a subject's colour. */
export function Meter({ value, color }: { value: number; color?: string }) {
  const pct = Math.round(value * 100);
  return (
    <span className="track" role="meter" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${pct}% mastered`}>
      <i style={{ width: `${pct}%`, background: color }} />
    </span>
  );
}

export function Explore({ onStudy }: { onStudy: (f: FeedFocus) => void }) {
  const app = useApp();
  const now = Date.now();
  const [open, setOpen] = useState<SubjectId | null>(app.profile.subjects[0]?.id ?? null);
  const pool = useMemo(() => eligibleItems(CONTENT, app.profile), [app.profile]);

  return (
    <div className="stack">
      {app.bookmarks.length > 0 && (
        <button className="card row-card" onClick={() => onStudy({ saved: true, label: 'Saved cards' })}>
          <span className="item-ico gold"><Icon name="star" className="filled" /></span>
          <span className="grow"><b>Saved cards</b><span className="muted small block">Scroll just the cards you’ve starred</span></span>
          <span className="pill ok">{app.bookmarks.length}</span>
        </button>
      )}

      {app.profile.subjects.map(({ id, level }) => {
        const s = SYLLABUS[id];
        const items = pool.filter((i) => i.objective.startsWith(id + '.'));
        const isOpen = open === id;
        const topics = s.topics.filter((t) => t.level === 'both' || t.level === level);
        const m = mastery(items, app.items, now);
        return (
          <section key={id} className="card subject-card" style={{ ['--c' as string]: s.color }}>
            <button className="subject-head" onClick={() => setOpen(isOpen ? null : id)} aria-expanded={isOpen}>
              <i className="swatch" aria-hidden />
              <span className="grow">
                <span className="subject-name">{s.name}</span>
                <span className="muted small"> · {level === 'HL' ? 'Higher' : 'Ordinary'} · {items.length} cards</span>
                <Meter value={m} color={s.color} />
              </span>
              <span className={'chev' + (isOpen ? ' open' : '')} aria-hidden><Icon name="chevron" /></span>
            </button>
            {isOpen && (
              <div className="subject-detail">
                <p className="small">{s.specification}</p>
                <p className="muted small">{s.assessment}</p>
                {s.reviewNote && <p className="note warn small">{s.reviewNote}</p>}
                <button className="btn primary small" onClick={() => onStudy({ subject: id, label: focusLabel({ subject: id }) })}>Study all {s.name}</button>
                <div className="topic-list">
                  {topics.map((t) => {
                    const tItems = items.filter((i) => i.objective.startsWith(t.id + '.'));
                    const subs = t.subtopics.filter((st) => st.level === 'both' || st.level === level);
                    const objectives = subs.flatMap((st) => st.objectives.filter((o) => o.level === 'both' || o.level === level));
                    const covered = objectives.filter((o) => tItems.some((i) => i.objective === o.id)).length;
                    return (
                      <div key={t.id} className="item">
                        <div className="body">
                          <div className="t">{t.title}</div>
                          <div className="meta">
                            {t.paper && <span className="pill">{t.paper}</span>}
                            <span className={'pill ' + (t.verification === 'verified' ? 'ok' : 'soon')}>{t.verification === 'verified' ? 'Verified' : 'Needs review'}</span>
                            <span>{tItems.length} cards · {covered}/{objectives.length} objectives</span>
                          </div>
                          <Meter value={mastery(tItems, app.items, now)} color={s.color} />
                          <div className="note">{subs.map((st) => st.title + (st.level !== 'both' ? ` (${st.level})` : '')).join(' · ')}</div>
                        </div>
                        <button className="link" disabled={!tItems.length} onClick={() => onStudy({ topic: t.id, label: focusLabel({ topic: t.id }) })}>Study</button>
                      </div>
                    );
                  })}
                </div>
                <p className="hint">Coverage is still growing. This map has not yet been checked line by line against every learning outcome in the official specification.</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
