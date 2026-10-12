import { useState } from 'react';
import { CONTENT, CONTENT_BY_ID } from '../data/content';
import { SOURCES } from '../data/sources';
import { actions, useApp } from '../engine/store';
import { PROVENANCE_LABEL } from './CardView';
import { SubjectPicker } from './Onboarding';

export function Profile() {
  const app = useApp();
  const [confirm, setConfirm] = useState(false);
  const verified = CONTENT.filter((c) => c.verification === 'verified').length;

  return (
    <div className="screen">
      <h1 className="screen-title">Profile</h1>

      <section className="panel">
        <h2>Subjects & levels</h2>
        <SubjectPicker value={app.profile.subjects} onChange={(subjects) => subjects.length && actions.updateProfile({ subjects })} />
      </section>

      <section className="panel">
        <h2>Daily goal</h2>
        <div className="seg wide">
          {[10, 20, 30, 50].map((g) => (
            <button key={g} className={app.profile.dailyGoal === g ? 'on' : ''} onClick={() => actions.updateProfile({ dailyGoal: g })}>{g}</button>
          ))}
        </div>
        <p className="fine">Exam year: June {app.profile.examYear}. Content follows the prescribed material and specifications for this exam.</p>
      </section>

      <section className="panel">
        <h2>Flagged for review ({app.flags.length})</h2>
        {app.flags.length === 0 ? <p className="fine">Nothing flagged. Use ⚑ on any card that looks wrong.</p> : (
          <ul className="flag-list">
            {app.flags.map((f) => {
              const item = CONTENT_BY_ID.get(f.itemId);
              return (
                <li key={f.itemId}>
                  <span className="grow"><b className="mono">{f.itemId}</b> · {f.reason}<br /><small>{item?.objective}</small></span>
                  <button className="ghost small" onClick={() => actions.unflag(f.itemId)}>Clear</button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="panel">
        <h2>About the content</h2>
        <p className="fine">Every card is labelled with where it comes from:</p>
        <ul className="legend">
          {Object.entries(PROVENANCE_LABEL).map(([k, v]) => <li key={k} className={'prov-' + k}>{v}</li>)}
        </ul>
        <p className="fine">{CONTENT.length} cards across 7 subjects. {verified} are checked directly against official documents; the rest are original practice questions and revision advice that still need teacher review. Coverage of each syllabus is <b>not yet complete</b>.</p>
        <h3>Official sources</h3>
        <ul className="sources">
          {Object.values(SOURCES).map((s) => (
            <li key={s.id}>
              {s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> : s.title}
              <small> · {s.publisher}{s.note ? ` · ${s.note}` : ''}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h2>Data</h2>
        <p className="fine">Your progress is stored on this device only.</p>
        {!confirm ? <button className="ghost danger" onClick={() => setConfirm(true)}>Reset progress…</button> : (
          <div className="row">
            <button className="primary danger" onClick={() => { actions.resetProgress(); setConfirm(false); }}>Yes, erase my progress</button>
            <button className="ghost" onClick={() => setConfirm(false)}>Cancel</button>
          </div>
        )}
      </section>
    </div>
  );
}
