import { useState } from 'react';
import type { Level, SubjectId } from '../types';
import { SUBJECT_ORDER, SYLLABUS } from '../data/syllabus';
import { actions } from '../engine/store';

export function SubjectPicker({ value, onChange }: {
  value: { id: SubjectId; level: Level }[];
  onChange: (v: { id: SubjectId; level: Level }[]) => void;
}) {
  const get = (id: SubjectId) => value.find((s) => s.id === id);
  const toggle = (id: SubjectId) => onChange(get(id) ? value.filter((s) => s.id !== id) : [...value, { id, level: 'HL' }]);
  const setLevel = (id: SubjectId, level: Level) => onChange(value.map((s) => (s.id === id ? { ...s, level } : s)));
  return (
    <div className="subject-picker">
      {SUBJECT_ORDER.map((id) => {
        const s = SYLLABUS[id];
        const sel = get(id);
        return (
          <div key={id} className={'pick-row' + (sel ? ' on' : '')} style={{ ['--h' as string]: s.hue }}>
            <button className="pick-main" onClick={() => toggle(id)} aria-pressed={!!sel}>
              <span className="pick-emoji" aria-hidden>{s.emoji}</span>
              <span className="pick-name">{s.name}{s.nativeName && <small> · {s.nativeName}</small>}</span>
              <span className="pick-check" aria-hidden>{sel ? '✓' : '+'}</span>
            </button>
            {sel && (
              <div className="seg" role="group" aria-label={`${s.name} level`}>
                {(['HL', 'OL'] as Level[]).map((l) => (
                  <button key={l} className={sel.level === l ? 'on' : ''} onClick={() => setLevel(id, l)}>{l === 'HL' ? 'Higher' : 'Ordinary'}</button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [subjects, setSubjects] = useState<{ id: SubjectId; level: Level }[]>([]);
  const [goal, setGoal] = useState(20);

  return (
    <div className="onboarding">
      {step === 0 && (
        <div className="ob-step hero">
          <div className="logo" aria-hidden>▲</div>
          <h1>Scroll. Learn.<br />Ace the Leaving Cert.</h1>
          <p>A feed of bite-sized flashcards, quizzes and worked examples built on the Irish Leaving Certificate courses. Every swipe is revision.</p>
          <ul className="ob-points">
            <li>⚡ Quick cards you can answer in seconds</li>
            <li>🔁 Spaced repetition brings back what you’re about to forget</li>
            <li>✓ Every card shows where it comes from: official syllabus, prescribed list, or practice</li>
          </ul>
          <button className="primary big" onClick={() => setStep(1)}>Get started</button>
        </div>
      )}
      {step === 1 && (
        <div className="ob-step">
          <h2>Your subjects</h2>
          <p className="fine">Pick the ones you’re taking and your level. You can change these later.</p>
          <SubjectPicker value={subjects} onChange={setSubjects} />
          <button className="primary big" disabled={!subjects.length} onClick={() => setStep(2)}>Continue</button>
        </div>
      )}
      {step === 2 && (
        <div className="ob-step">
          <h2>Daily goal</h2>
          <p className="fine">How many cards a day? Little and often works best. You can always keep scrolling past your goal.</p>
          <div className="goal-options">
            {[10, 20, 30, 50].map((g) => (
              <button key={g} className={'goal-opt' + (goal === g ? ' on' : '')} onClick={() => setGoal(g)}>
                <b>{g}</b><span>{g === 10 ? 'Casual · ~5 min' : g === 20 ? 'Steady · ~10 min' : g === 30 ? 'Serious · ~15 min' : 'Intense · ~25 min'}</span>
              </button>
            ))}
          </div>
          <button className="primary big" onClick={() => actions.completeOnboarding({ subjects, dailyGoal: goal, examYear: 2027 })}>Start learning</button>
          <button className="ghost" onClick={() => setStep(1)}>Back</button>
        </div>
      )}
    </div>
  );
}
