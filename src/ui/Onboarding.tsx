import { useState } from 'react';
import type { Level, SubjectId } from '../types';
import { SUBJECT_ORDER, SYLLABUS } from '../data/syllabus';
import { actions } from '../engine/store';
import { Icon } from './Icon';

export function SubjectPicker({ value, onChange }: {
  value: { id: SubjectId; level: Level }[];
  onChange: (v: { id: SubjectId; level: Level }[]) => void;
}) {
  const get = (id: SubjectId) => value.find((s) => s.id === id);
  const toggle = (id: SubjectId) => onChange(get(id) ? value.filter((s) => s.id !== id) : [...value, { id, level: 'HL' }]);
  const setLevel = (id: SubjectId, level: Level) => onChange(value.map((s) => (s.id === id ? { ...s, level } : s)));
  return (
    <div className="pick-list">
      {SUBJECT_ORDER.map((id) => {
        const s = SYLLABUS[id];
        const sel = get(id);
        return (
          <div key={id} className={'pick-row' + (sel ? ' on' : '')} style={{ ['--c' as string]: s.color }}>
            <button className="pick-main" onClick={() => toggle(id)} aria-pressed={!!sel}>
              <i className="swatch" aria-hidden />
              <span className="pick-name">{s.name}{s.nativeName && <span className="muted"> · {s.nativeName}</span>}</span>
              <span className="tick" aria-hidden>{sel && <Icon name="check" />}</span>
            </button>
            {sel && (
              <div className="seg mini" role="group" aria-label={`${s.name} level`}>
                {(['HL', 'OL'] as Level[]).map((l) => (
                  <button key={l} className={sel.level === l ? 'active' : ''} onClick={() => setLevel(id, l)} aria-label={l === 'HL' ? 'Higher Level' : 'Ordinary Level'}>{l}</button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const GOALS: [number, string][] = [[10, 'Casual · about 5 min'], [20, 'Steady · about 10 min'], [30, 'Serious · about 15 min'], [50, 'Intense · about 25 min']];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [subjects, setSubjects] = useState<{ id: SubjectId; level: Level }[]>([]);
  const [goal, setGoal] = useState(20);

  return (
    <div className="onboarding">
      {step === 0 && (
        <div className="ob-step hero">
          <img className="logo" src="./icon.svg" alt="" />
          <h1>Scroll. Learn.<br />Ace the Leaving Cert.</h1>
          <p className="muted">A feed of bite-sized flashcards, quizzes and worked examples built on the Irish Leaving Certificate courses. Every swipe is revision.</p>
          <div className="card flush">
            <div className="item"><span className="item-ico"><Icon name="feed" /></span><div className="body"><div className="t">Quick cards you can answer in seconds</div></div></div>
            <div className="item"><span className="item-ico"><Icon name="layers" /></span><div className="body"><div className="t">Spaced repetition brings back what you’re about to forget</div></div></div>
            <div className="item"><span className="item-ico"><Icon name="check" /></span><div className="body"><div className="t">Every card shows where it comes from: syllabus, prescribed list or practice</div></div></div>
          </div>
          <button className="btn primary block big" onClick={() => setStep(1)}>Get started</button>
        </div>
      )}
      {step === 1 && (
        <div className="ob-step">
          <h1>Your subjects</h1>
          <p className="muted">Pick the ones you’re taking and your level. You can change these later in Setup.</p>
          <div className="card flush"><SubjectPicker value={subjects} onChange={setSubjects} /></div>
          <button className="btn primary block big" disabled={!subjects.length} onClick={() => setStep(2)}>Continue</button>
        </div>
      )}
      {step === 2 && (
        <div className="ob-step">
          <h1>Daily goal</h1>
          <p className="muted">How many cards a day? Little and often works best. You can always keep scrolling past your goal.</p>
          <div className="card flush">
            {GOALS.map(([g, label]) => (
              <button key={g} className={'pick-main goal' + (goal === g ? ' on' : '')} onClick={() => setGoal(g)} aria-pressed={goal === g}>
                <b className="goal-n">{g}</b>
                <span className="pick-name">{label}</span>
                <span className="tick" aria-hidden>{goal === g && <Icon name="check" />}</span>
              </button>
            ))}
          </div>
          <button className="btn primary block big" onClick={() => actions.completeOnboarding({ subjects, dailyGoal: goal, examYear: 2027 })}>Start learning</button>
          <button className="btn ghost block" onClick={() => setStep(1)}>Back</button>
        </div>
      )}
    </div>
  );
}
