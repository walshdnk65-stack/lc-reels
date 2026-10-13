import { useMemo } from 'react';
import type { Builder, Cloze, MCQ, Translate } from '../../types';
import { checkAnswer, parseCloze, type MatchResult } from '../../engine/answer';
import { Rich } from '../Rich';
import { Visual } from '../Visual';
import { Explain, seededShuffle, useCardState, type CardProps } from './shared';

/* Cards the app can mark automatically. */

export function MCQCard({ item, mem, onGrade }: CardProps<MCQ>) {
  const options = useMemo(() => seededShuffle(item.options.map((o, i) => ({ ...o, i })), item.id), [item]);
  const [choice, setChoice] = useCardState<number | null>(mem, 'choice', null);
  const chosen = options.find((o) => o.i === choice);
  return (
    <div className="card-body">
      <Rich className="prompt" text={item.question} />
      {item.visual && <Visual spec={item.visual} />}
      <div className="options">
        {options.map((o, k) => {
          const state = choice === null ? '' : o.correct ? 'right' : o.i === choice ? 'wrong' : 'dim';
          return (
            <button key={o.i} className={'option ' + state} disabled={choice !== null}
              onClick={() => { setChoice(o.i); onGrade(o.correct ? 2 : 0); }}>
              <span className="opt-key">{String.fromCharCode(65 + k)}</span>
              <Rich as="span" text={o.text} />
            </button>
          );
        })}
      </div>
      {chosen && (
        <div className="reveal">
          <div className={'verdict ' + (chosen.correct ? 'ok' : 'no')}>{chosen.correct ? 'Correct!' : 'Not quite'}</div>
          {!chosen.correct && chosen.why && <Explain text={chosen.why} title="Why that’s wrong" />}
          <Explain text={item.explain} title={chosen.correct ? 'Why' : 'The right answer'} />
        </div>
      )}
    </div>
  );
}

const verdictText: Record<MatchResult, string> = {
  correct: 'Correct!', accent: 'Correct, but watch the accents', typo: 'Correct, small spelling slip', wrong: 'Not quite',
};

export function ClozeCard({ item, mem, onGrade }: CardProps<Cloze>) {
  const { parts, blanks } = useMemo(() => parseCloze(item.text), [item.text]);
  const [vals, setVals] = useCardState<string[]>(mem, 'vals', blanks.map(() => ''));
  const [results, setResults] = useCardState<MatchResult[] | null>(mem, 'results', null);
  const choices = useMemo(() => item.choices && seededShuffle(item.choices, item.id), [item]);

  const check = (reveal = false) => {
    const r = blanks.map((b, i) => reveal ? 'wrong' as MatchResult : checkAnswer(vals[i], b).result);
    setResults(r);
    onGrade(r.every((x) => x !== 'wrong') ? 2 : 0);
  };
  const fillNext = (word: string) => {
    const i = vals.findIndex((v) => !v);
    if (i < 0) return;
    const next = [...vals]; next[i] = word; setVals(next);
  };
  const clear = (i: number) => { if (results) return; const next = [...vals]; next[i] = ''; setVals(next); };

  return (
    <div className="card-body">
      {item.prompt && <div className="kicker">{item.prompt}</div>}
      <div className="cloze">
        {parts.map((p, i) => (
          <span key={i}>
            <Rich as="span" text={p} />
            {i < blanks.length && (choices ? (
              <button className={'blank-chip ' + (results ? (results[i] === 'wrong' ? 'wrong' : 'right') : vals[i] ? 'filled' : '')} onClick={() => clear(i)}>
                {results && results[i] === 'wrong' ? blanks[i][0] : vals[i] || '     '}
              </button>
            ) : (
              <input className={'blank ' + (results ? (results[i] === 'wrong' ? 'wrong' : 'right') : '')}
                value={results && results[i] !== 'correct' ? blanks[i][0] : vals[i]} disabled={!!results}
                size={Math.max(3, blanks[i][0].length + 1)} aria-label={`Blank ${i + 1}`}
                onChange={(e) => { const next = [...vals]; next[i] = e.target.value; setVals(next); }}
                onKeyDown={(e) => { if (e.key === 'Enter') check(); }} />
            ))}
          </span>
        ))}
      </div>
      {choices && !results && (
        <div className="choice-chips">
          {choices.map((c) => <button key={c} className="choice" disabled={vals.includes(c)} onClick={() => fillNext(c)}>{c}</button>)}
        </div>
      )}
      {!results ? (
        <div className="row">
          <button className="btn primary" disabled={vals.some((v) => !v.trim())} onClick={() => check()}>Check</button>
          <button className="btn subtle" onClick={() => check(true)}>Show answer</button>
        </div>
      ) : (
        <div className="reveal">
          <div className={'verdict ' + (results.every((r) => r !== 'wrong') ? 'ok' : 'no')}>
            {results.every((r) => r !== 'wrong')
              ? (results.includes('accent') ? verdictText.accent : results.includes('typo') ? verdictText.typo : 'Correct!')
              : 'Here’s the answer'}
          </div>
          <Explain text={item.explain} />
        </div>
      )}
    </div>
  );
}

export function TranslateCard({ item, mem, onGrade }: CardProps<Translate>) {
  const [text, setText] = useCardState(mem, 'text', '');
  const [result, setResult] = useCardState<{ r: MatchResult; best: string } | null>(mem, 'result', null);
  const [settled, setSettled] = useCardState(mem, 'settled', false);
  const target = item.direction === 'to-target' ? (item.lang === 'ga' ? 'Irish' : 'French') : 'English';

  const check = () => {
    const { result: r, best } = checkAnswer(text, item.answers);
    setResult({ r, best });
    if (r !== 'wrong') { setSettled(true); onGrade(2); }
  };
  const giveUp = () => { setResult({ r: 'wrong', best: item.answers[0] }); setSettled(true); onGrade(0); };

  return (
    <div className="card-body">
      <div className="kicker">Translate into {target}</div>
      <Rich className="prompt big" text={item.prompt} />
      <input className="answer-input single" lang={item.direction === 'to-target' ? item.lang : 'en'} value={text} disabled={!!result}
        placeholder={`Type in ${target}…`} autoCapitalize="off" autoCorrect="off" spellCheck={false}
        onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && text.trim()) check(); }} />
      {!result && (
        <div className="row">
          <button className="btn primary" disabled={!text.trim()} onClick={check}>Check</button>
          <button className="btn subtle" onClick={giveUp}>I don’t know</button>
        </div>
      )}
      {result && (
        <div className="reveal">
          <div className={'verdict ' + (result.r === 'wrong' ? 'no' : 'ok')}>{verdictText[result.r]}</div>
          <div className="model"><span className="explain-title">{result.r === 'wrong' ? 'Model answer' : 'Accepted answer'}</span><p lang={item.lang}>{result.best}</p></div>
          {item.answers.length > 1 && <p className="fine">Also accepted: {item.answers.filter((a) => a !== result.best).slice(0, 2).join(' · ')}</p>}
          {result.r === 'wrong' && !settled && (
            <div className="row">
              <button className="grade g0" onClick={() => { setSettled(true); onGrade(0); }}>I got it wrong</button>
              <button className="grade g2" onClick={() => { setSettled(true); onGrade(2); }}>My version was also right</button>
            </div>
          )}
          <Explain text={item.explain} title="Tip" />
        </div>
      )}
    </div>
  );
}

export function BuilderCard({ item, mem, onGrade }: CardProps<Builder>) {
  const tiles = useMemo(() => seededShuffle([...item.words, ...(item.distractors ?? [])].map((w, i) => ({ w, i })), item.id), [item]);
  const [picked, setPicked] = useCardState<number[]>(mem, 'picked', []);
  const [result, setResult] = useCardState<boolean | null>(mem, 'result', null);
  const sentence = picked.map((i) => tiles.find((t) => t.i === i)!.w);

  const check = () => {
    const ok = sentence.join(' ') === item.words.join(' ');
    setResult(ok);
    onGrade(ok ? 2 : 0);
  };

  return (
    <div className="card-body">
      <div className="kicker">{item.lang === 'en' ? 'Put these in order' : `Build the sentence in ${item.lang === 'ga' ? 'Irish' : 'French'}`}</div>
      <Rich className="prompt" text={item.prompt} />
      <div className={'build-line ' + (result === null ? '' : result ? 'right' : 'wrong')} lang={item.lang}>
        {picked.length === 0 && <span className="fine">Tap the words below</span>}
        {picked.map((i, k) => (
          <button key={i} className="tile placed" disabled={result !== null}
            onClick={() => setPicked(picked.filter((p) => p !== i))}>
            {item.lang === 'en' && <span className="tile-n">{k + 1}</span>}{tiles.find((t) => t.i === i)!.w}
          </button>
        ))}
      </div>
      {result === null && (
        <div className="tiles" lang={item.lang}>
          {tiles.map((t) => (
            <button key={t.i} className="tile" disabled={picked.includes(t.i)} onClick={() => setPicked([...picked, t.i])}>{t.w}</button>
          ))}
        </div>
      )}
      {result === null ? (
        <div className="row">
          <button className="btn primary" disabled={!picked.length} onClick={check}>Check</button>
          {picked.length > 0 && <button className="btn subtle" onClick={() => setPicked([])}>Clear</button>}
        </div>
      ) : (
        <div className="reveal">
          <div className={'verdict ' + (result ? 'ok' : 'no')}>{result ? 'Correct!' : 'Not quite'}</div>
          {!result && <div className="model"><span className="explain-title">Correct order</span><p lang={item.lang}>{item.words.join(item.lang === 'en' ? ' → ' : ' ')}</p></div>}
          <Explain text={item.explain} title="Tip" />
        </div>
      )}
    </div>
  );
}
