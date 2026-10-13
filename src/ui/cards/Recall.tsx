import { useState } from 'react';
import type { Essay, Explainer, Flashcard, ShortAnswer, Technique, Worked } from '../../types';
import { matchKeyPoints } from '../../engine/answer';
import { Rich } from '../Rich';
import { Visual } from '../Visual';
import { Explain, GradeBar, useCardState, type CardProps } from './shared';

/* Cards where the student recalls or reads, then rates themselves. */

export function FlashcardCard({ item, mem, graded, onGrade }: CardProps<Flashcard>) {
  const [flipped, setFlipped] = useCardState(mem, 'flipped', false);
  return (
    <div className="card-body">
      <button className={'flip' + (flipped ? ' is-flipped' : '')} onClick={() => setFlipped(true)} aria-label={flipped ? 'Answer shown' : 'Tap to reveal the answer'}>
        <div className="flip-front">
          <Rich className="prompt big" text={item.front} />
          {item.visual && <Visual spec={item.visual} />}
          {!flipped && <span className="tap-hint">Tap to reveal</span>}
        </div>
      </button>
      {flipped && (
        <div className="reveal">
          <Rich className="answer" text={item.back} />
          <Explain text={item.explain} title="Explanation" />
          <GradeBar graded={graded} onGrade={onGrade} prompt="Did you know it?" />
        </div>
      )}
    </div>
  );
}

export function ExplainerCard({ item, mem, graded, onGrade, onRead }: CardProps<Explainer>) {
  const [choice, setChoice] = useCardState<number | null>(mem, 'choice', null);
  return (
    <div className="card-body">
      <h2 className="title">{item.title}</h2>
      <Rich className="body" text={item.body} />
      {item.visual && <Visual spec={item.visual} />}
      {item.bullets && <ul className="bullets">{item.bullets.map((b, i) => <li key={i}><Rich as="span" text={b} /></li>)}</ul>}
      {item.example && <div className="example"><span className="explain-title">Example</span><Rich text={item.example} /></div>}
      {item.check ? (
        <div className="quick-check">
          <span className="explain-title">Quick check</span>
          <Rich className="prompt" text={item.check.question} />
          <div className="options compact">
            {item.check.options.map((o, i) => {
              const state = choice === null ? '' : o.correct ? 'right' : i === choice ? 'wrong' : 'dim';
              return (
                <button key={i} className={'option ' + state} disabled={choice !== null}
                  onClick={() => { setChoice(i); onGrade(o.correct ? 2 : 0); }}>
                  {o.text}
                </button>
              );
            })}
          </div>
          {choice !== null && <Explain text={item.check.explain} />}
        </div>
      ) : (
        <ReadButton graded={graded} onRead={onRead} />
      )}
    </div>
  );
}

export function TechniqueCard({ item, graded, onRead }: CardProps<Technique>) {
  return (
    <div className="card-body">
      <h2 className="title">{item.title}</h2>
      <Rich className="body" text={item.intro} />
      <ul className="dos">{item.dos.map((d, i) => <li key={i}><Rich as="span" text={d} /></li>)}</ul>
      <ul className="donts">{item.donts.map((d, i) => <li key={i}><Rich as="span" text={d} /></li>)}</ul>
      {item.example && <div className="example"><span className="explain-title">Example</span><Rich text={item.example} /></div>}
      <ReadButton graded={graded} onRead={onRead} />
    </div>
  );
}

function ReadButton({ graded, onRead }: { graded: boolean; onRead: () => void }) {
  return graded
    ? <div className="grade-done">Got it ✓</div>
    : <button className="btn primary" onClick={onRead}>Got it</button>;
}

export function ShortCard({ item, mem, graded, onGrade }: CardProps<ShortAnswer>) {
  const [text, setText] = useCardState(mem, 'text', '');
  const [shown, setShown] = useCardState(mem, 'shown', false);
  const hits = shown && text.trim() ? matchKeyPoints(text, item.keyPoints) : null;
  return (
    <div className="card-body">
      <Rich className="prompt" text={item.question} />
      <textarea className="answer-input" rows={4} placeholder="Type your answer, or answer in your head" value={text}
        disabled={shown} onChange={(e) => setText(e.target.value)} />
      {!shown && <button className="btn primary" onClick={() => setShown(true)}>Show model answer</button>}
      {shown && (
        <div className="reveal">
          <div className="model"><span className="explain-title">Model answer</span><Rich text={item.model} /></div>
          <div className="keypoints">
            <span className="explain-title">{hits ? `Key points you covered: ${hits.filter(Boolean).length}/${hits.length}` : 'Key points to include'}</span>
            <ul>
              {item.keyPoints.map((k, i) => <li key={i} className={hits ? (hits[i] ? 'hit' : 'miss') : ''}>{k.point}</li>)}
            </ul>
            {hits && <p className="fine">Keyword matching is only a rough guide. Compare carefully with the model answer, then rate yourself honestly.</p>}
          </div>
          <Explain text={item.explain} />
          <GradeBar graded={graded} onGrade={onGrade} prompt="How close were you?" labels={['Not close', 'Partly', 'Nailed it']} />
        </div>
      )}
    </div>
  );
}

export function WorkedCard({ item, mem, graded, onGrade }: CardProps<Worked>) {
  const [step, setStep] = useCardState(mem, 'step', 0);
  const done = step >= item.steps.length;
  return (
    <div className="card-body">
      <h2 className="title">{item.title}</h2>
      <Rich className="prompt" text={item.problem} />
      {step === 0 && <p className="fine">Try it yourself first, then reveal the solution one step at a time.</p>}
      <ol className="steps">
        {item.steps.slice(0, step).map((s, i) => (
          <li key={i} className="step">
            <Rich text={s.body} />
            <Rich className="why" text={s.why} />
          </li>
        ))}
      </ol>
      {!done && <button className="btn primary" onClick={() => setStep(step + 1)}>{step === 0 ? 'Show step 1' : `Next step (${step + 1}/${item.steps.length})`}</button>}
      {done && (
        <div className="reveal">
          <div className="final-answer"><span className="explain-title">Answer</span><Rich text={item.answer} /></div>
          {item.visual && <Visual spec={item.visual} />}
          <GradeBar graded={graded} onGrade={onGrade} prompt="Did you get there yourself?" labels={['Not yet', 'Partly', 'Yes']} />
        </div>
      )}
    </div>
  );
}

export function EssayCard({ item, mem, graded, onGrade }: CardProps<Essay>) {
  const [stage, setStage] = useCardState(mem, 'stage', 0);
  const [notes, setNotes] = useState('');
  const done = stage >= item.stages.length;
  return (
    <div className="card-body">
      <Rich className="prompt essay-prompt" text={item.prompt} />
      {item.context && <p className="fine">{item.context}</p>}
      {stage === 0 && (
        <textarea className="answer-input" rows={3} placeholder="Jot a quick plan: your thesis and 3–4 points" value={notes} onChange={(e) => setNotes(e.target.value)} />
      )}
      {item.stages.slice(0, stage).map((s, i) => (
        <div key={i} className="stage">
          <span className="explain-title">{s.label}</span>
          <ul>{s.items.map((t, j) => <li key={j}><Rich as="span" text={t} /></li>)}</ul>
        </div>
      ))}
      {!done && <button className="btn primary" onClick={() => setStage(stage + 1)}>Reveal: {item.stages[stage].label}</button>}
      {done && <GradeBar graded={graded} onGrade={onGrade} prompt="How did your plan compare?" labels={['Way off', 'Some of it', 'Very close']} />}
    </div>
  );
}
