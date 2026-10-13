import { useState } from 'react';
import { CONTENT, CONTENT_BY_ID } from '../data/content';
import { SOURCES } from '../data/sources';
import { actions, useApp } from '../engine/store';
import { PROVENANCE_LABEL } from './CardView';
import { SubjectPicker } from './Onboarding';
import type { Theme, ThemeChoice } from './theme';

const THEMES: [ThemeChoice, string][] = [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']];

export function Profile({ theme }: { theme: Theme }) {
  const app = useApp();
  const [confirm, setConfirm] = useState(false);
  const verified = CONTENT.filter((c) => c.verification === 'verified').length;

  return (
    <div className="stack">
      <section className="card">
        <div className="card-head"><h2>Subjects & levels</h2><span className="side">{app.profile.subjects.length} chosen</span></div>
        <SubjectPicker value={app.profile.subjects} onChange={(subjects) => subjects.length && actions.updateProfile({ subjects })} />
      </section>

      <section className="card">
        <div className="card-head"><h2>Daily goal</h2><span className="side">cards a day</span></div>
        <div className="seg">
          {[10, 20, 30, 50].map((g) => (
            <button key={g} className={app.profile.dailyGoal === g ? 'active' : ''} onClick={() => actions.updateProfile({ dailyGoal: g })}>{g}</button>
          ))}
        </div>
        <p className="hint">Exam year: June {app.profile.examYear}. Content follows the prescribed material and specifications for this exam.</p>
      </section>

      <section className="card">
        <div className="card-head"><h2>Appearance</h2></div>
        <div className="seg">
          {THEMES.map(([c, label]) => (
            <button key={c} className={theme.choice === c ? 'active' : ''} onClick={() => theme.set(c)}>{label}</button>
          ))}
        </div>
        <p className="hint">System follows your phone’s light or dark setting.</p>
      </section>

      <section className="card">
        <div className="card-head"><h2>Flagged for review</h2><span className="side">{app.flags.length}</span></div>
        {app.flags.length === 0 ? <p className="empty">Nothing flagged. Use the flag button on any card that looks wrong.</p> : (
          <div>
            {app.flags.map((f) => {
              const item = CONTENT_BY_ID.get(f.itemId);
              return (
                <div key={f.itemId} className="item">
                  <div className="body">
                    <div className="t">{f.reason}</div>
                    <div className="meta"><span className="pill">{f.itemId}</span><span>{item?.objective}</span></div>
                  </div>
                  <button className="link" onClick={() => actions.unflag(f.itemId)}>Clear</button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="card">
        <div className="card-head"><h2>About the content</h2><span className="side">{CONTENT.length} cards</span></div>
        <p className="hint">Every card is labelled with where it comes from:</p>
        <div className="legend">
          {Object.entries(PROVENANCE_LABEL).map(([k, v]) => <span key={k} className={'pill ' + (k === 'prescribed' || k === 'syllabus' || k === 'exam-format' ? 'ok' : '')}>{v}</span>)}
        </div>
        <p className="small gap-top">{verified} cards are checked directly against official documents. The rest are original practice questions and revision advice that still need teacher review. Coverage of each syllabus is <b>not yet complete</b>.</p>
        <div className="section-title">Official sources</div>
        {Object.values(SOURCES).map((s) => (
          <div key={s.id} className="item">
            <div className="body">
              <div className="t">{s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> : s.title}</div>
              <div className="note">{s.publisher}{s.note ? ` · ${s.note}` : ''}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="card">
        <div className="card-head"><h2>Data</h2></div>
        <p className="hint">Your progress is stored on this device only.</p>
        {!confirm ? <button className="btn danger" onClick={() => setConfirm(true)}>Reset progress…</button> : (
          <div className="row">
            <button className="btn primary danger" onClick={() => { actions.resetProgress(); setConfirm(false); }}>Yes, erase my progress</button>
            <button className="btn subtle" onClick={() => setConfirm(false)}>Cancel</button>
          </div>
        )}
      </section>
    </div>
  );
}
