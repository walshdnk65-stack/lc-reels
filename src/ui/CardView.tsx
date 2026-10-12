import { useState } from 'react';
import type { ContentItem, ContentType, Grade, Provenance } from '../types';
import { lookupObjective } from '../data/syllabus';
import { SOURCES } from '../data/sources';
import { actions } from '../engine/store';
import type { Reason } from '../engine/feed';
import { BuilderCard, ClozeCard, MCQCard, TranslateCard } from './cards/Quiz';
import { EssayCard, ExplainerCard, FlashcardCard, ShortCard, TechniqueCard, WorkedCard } from './cards/Recall';
import type { CardMem, CardProps } from './cards/shared';

export const TYPE_LABEL: Record<ContentType, string> = {
  flashcard: 'Flashcard', mcq: 'Quick quiz', short: 'Recall', cloze: 'Fill the gap', worked: 'Worked example',
  explainer: 'Quick explainer', technique: 'Exam technique', translate: 'Translate', builder: 'Build it', essay: 'Essay plan',
};

export const PROVENANCE_LABEL: Record<Provenance, string> = {
  'syllabus': 'From the official syllabus',
  'prescribed': 'Official prescribed material',
  'exam-format': 'Official exam format',
  'original-practice': 'Original practice question',
  'exam-advice': 'Exam advice (not official)',
};

const REASON_LABEL: Record<Reason, string> = { new: 'New', review: 'Review', retry: 'Try again', practice: 'Practice' };

function Body(props: CardProps) {
  const { item } = props;
  switch (item.type) {
    case 'flashcard': return <FlashcardCard {...props} item={item} />;
    case 'mcq': return <MCQCard {...props} item={item} />;
    case 'short': return <ShortCard {...props} item={item} />;
    case 'cloze': return <ClozeCard {...props} item={item} />;
    case 'worked': return <WorkedCard {...props} item={item} />;
    case 'explainer': return <ExplainerCard {...props} item={item} />;
    case 'technique': return <TechniqueCard {...props} item={item} />;
    case 'translate': return <TranslateCard {...props} item={item} />;
    case 'builder': return <BuilderCard {...props} item={item} />;
    case 'essay': return <EssayCard {...props} item={item} />;
  }
}

interface Props {
  item: ContentItem;
  reason: Reason;
  mem: CardMem;
  graded: boolean;
  bookmarked: boolean;
  flagged: boolean;
  onGrade: (g: Grade) => void;
  onRead: () => void;
  onNext: () => void;
}

export function CardView({ item, reason, mem, graded, bookmarked, flagged, onGrade, onRead, onNext }: Props) {
  const ref = lookupObjective(item.objective)!;
  const [sheet, setSheet] = useState<null | 'info' | 'flag'>(null);
  const [lastXp, setLastXp] = useState<number | null>(null);

  const grade = (g: Grade) => { setLastXp(g === 0 ? 2 : g === 1 ? 6 : 10); onGrade(g); };
  const read = () => { setLastXp(3); onRead(); };

  return (
    <article className="card" style={{ ['--h' as string]: ref.subject.hue }}>
      <header className="card-head">
        <div className="crumb">
          <span className="subj">{ref.subject.emoji} {ref.subject.name}</span>
          <span className="topic">{ref.subtopic.title}</span>
        </div>
        <div className="badges">
          <span className="badge type">{TYPE_LABEL[item.type]}</span>
          {reason !== 'new' && <span className={'badge reason ' + reason}>{REASON_LABEL[reason]}</span>}
          {item.level !== 'both' && <span className="badge lvl">{item.level === 'HL' ? 'Higher' : 'Ordinary'}</span>}
        </div>
      </header>

      <div className="card-scroll">
        <Body item={item} mem={mem} graded={graded} onGrade={grade} onRead={read} />
        <button className={'prov prov-' + item.provenance} onClick={() => setSheet('info')}>
          {item.verification === 'verified' ? '✓ ' : ''}{PROVENANCE_LABEL[item.provenance]}
          {item.verification === 'verified' && item.sourceNote ? ` · ${item.sourceNote.split(',')[0]}` : ''}
          <span className="prov-more">ⓘ</span>
        </button>
      </div>

      <nav className="rail" aria-label="Card actions">
        <button className={'rail-btn' + (bookmarked ? ' on' : '')} onClick={() => actions.toggleBookmark(item.id)} aria-pressed={bookmarked} aria-label="Save card">
          <span aria-hidden>{bookmarked ? '★' : '☆'}</span><small>{bookmarked ? 'Saved' : 'Save'}</small>
        </button>
        <button className={'rail-btn' + (flagged ? ' on warn' : '')} onClick={() => setSheet('flag')} aria-label="Flag a problem">
          <span aria-hidden>⚑</span><small>{flagged ? 'Flagged' : 'Flag'}</small>
        </button>
        <button className="rail-btn" onClick={() => setSheet('info')} aria-label="Where this comes from">
          <span aria-hidden>ⓘ</span><small>Source</small>
        </button>
      </nav>

      {graded && (
        <button className="next-btn" onClick={onNext}>
          {lastXp !== null && <span className="xp-pop">+{lastXp} XP</span>}
          Next <span aria-hidden>↓</span>
        </button>
      )}

      {sheet && (
        <div className="sheet-backdrop" onClick={() => setSheet(null)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={sheet === 'info' ? 'About this card' : 'Flag this card'}>
            {sheet === 'info' ? <InfoSheet item={item} /> : (
              <FlagSheet flagged={flagged} onPick={(reason) => { if (reason) actions.flag(item.id, reason); else actions.unflag(item.id); setSheet(null); }} />
            )}
            <button className="ghost full" onClick={() => setSheet(null)}>Close</button>
          </div>
        </div>
      )}
    </article>
  );
}

function InfoSheet({ item }: { item: ContentItem }) {
  const ref = lookupObjective(item.objective)!;
  const levelText = item.level === 'both' ? 'Higher & Ordinary' : item.level === 'HL' ? 'Higher Level' : 'Ordinary Level';
  return (
    <div className="info">
      <h3>Where this fits</h3>
      <ol className="path">
        <li><b>Subject</b> {ref.subject.name}</li>
        <li><b>Level</b> {levelText}</li>
        <li><b>Topic</b> {ref.topic.title}{ref.topic.paper ? ` · ${ref.topic.paper}` : ''}</li>
        <li><b>Subtopic</b> {ref.subtopic.title}</li>
        <li><b>Objective</b> {ref.objective.text}</li>
      </ol>
      <h3>Where it comes from</h3>
      <p><b>{PROVENANCE_LABEL[item.provenance]}.</b> {provenanceHelp(item.provenance)}</p>
      <p className={item.verification === 'verified' ? 'ok-text' : 'warn-text'}>
        {item.verification === 'verified'
          ? '✓ Checked against the official source below.'
          : 'Not yet checked line by line against the official specification. Flag it if something looks wrong.'}
      </p>
      {item.sourceNote && <p className="fine">Source: {item.sourceNote}</p>}
      <p className="fine">Syllabus: {ref.subject.specification}. {ref.subject.sources.map((s) => SOURCES[s]?.publisher).filter((v, i, a) => a.indexOf(v) === i).join(', ')}.</p>
      <p className="fine mono">Card {item.id} · {item.objective}</p>
    </div>
  );
}

function provenanceHelp(p: Provenance): string {
  switch (p) {
    case 'syllabus': return 'This restates content from the official syllabus or specification.';
    case 'prescribed': return 'This comes from the Department of Education’s list of prescribed material for your exam year.';
    case 'exam-format': return 'This describes how the exam is structured. Always confirm the details with the SEC for your year.';
    case 'original-practice': return 'This question was written for this app, based on the syllabus. It is not a past-paper question.';
    case 'exam-advice': return 'This is general revision advice. It is not an official marking rule.';
  }
}

function FlagSheet({ flagged, onPick }: { flagged: boolean; onPick: (reason: string | null) => void }) {
  const reasons = ['Something looks wrong', 'Not on my course', 'Confusing wording', 'Too easy / too hard'];
  return (
    <div className="info">
      <h3>Flag this card for review</h3>
      <p className="fine">Flagged cards are listed in your Profile so they can be checked and fixed.</p>
      <div className="flag-reasons">
        {reasons.map((r) => <button key={r} className="chip" onClick={() => onPick(r)}>{r}</button>)}
        {flagged && <button className="chip" onClick={() => onPick(null)}>Remove flag</button>}
      </div>
    </div>
  );
}
