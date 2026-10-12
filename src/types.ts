/* Core data model. Content and syllabus data live under src/data and never import UI code. */

export type SubjectId = 'accounting' | 'english' | 'irish' | 'maths' | 'chemistry' | 'french' | 'business';
export type Level = 'HL' | 'OL';
/** Which level(s) an item or syllabus node applies to. */
export type LevelTag = Level | 'both';

/**
 * Where a piece of content comes from. Shown on every card so students can tell
 * official requirements apart from practice material and advice.
 *  - syllabus:          restates content from an official syllabus / specification
 *  - prescribed:        official prescribed-material lists (DoE circulars)
 *  - exam-format:       facts about the official exam structure (SEC / DoE)
 *  - original-practice: original question written for this app, based on syllabus content
 *  - exam-advice:       general revision / exam technique advice — not official
 */
export type Provenance = 'syllabus' | 'prescribed' | 'exam-format' | 'original-practice' | 'exam-advice';

/** verified = checked against the cited official document; needs-review = not yet checked. */
export type Verification = 'verified' | 'needs-review';

export interface SourceRef {
  id: string;
  title: string;
  publisher: 'NCCA' | 'Department of Education' | 'SEC';
  url?: string;
  note?: string;
}

/* ---------------------------------------------------------------- Syllabus */

export interface Objective {
  id: string;       // full path id, e.g. "maths.calc.diff.rules"
  text: string;
  level: LevelTag;
}

export interface Subtopic {
  id: string;
  title: string;
  level: LevelTag;
  objectives: Objective[];
}

export interface Topic {
  id: string;
  title: string;
  level: LevelTag;
  paper?: string;
  verification: Verification;
  subtopics: Subtopic[];
}

export interface SubjectSyllabus {
  id: SubjectId;
  name: string;
  nativeName?: string;
  emoji: string;
  hue: number;               // base hue for the subject's colour scheme
  specification: string;     // which spec / syllabus applies to the 2027 exam
  assessment: string;        // short description of how it is examined
  sources: string[];         // SourceRef ids
  verification: Verification;
  reviewNote?: string;
  topics: Topic[];
}

/* ----------------------------------------------------------------- Visuals */

export type Visual =
  | { kind: 'graph'; xRange: [number, number]; yRange: [number, number];
      curves?: { f: (x: number) => number; label?: string; dashed?: boolean }[];
      polylines?: { pts: [number, number][]; label?: string }[];
      points?: { x: number; y: number; label?: string }[];
      xLabel?: string; yLabel?: string; }
  | { kind: 'table'; title?: string; headers?: string[]; rows: (string | number)[][];
      highlight?: number[]; totals?: number[]; note?: string; }
  | { kind: 'structure'; caption?: string;
      atoms: { el: string; x: number; y: number }[];
      bonds: { a: number; b: number; order?: 1 | 2 | 3 }[]; }
  | { kind: 'bars'; title?: string; bars: { label: string; value: number }[]; unit?: string }
  | { kind: 'flow'; steps: string[] };

/* ----------------------------------------------------------------- Content */

interface BaseItem {
  id: string;
  objective: string;          // Objective.id this item teaches or tests
  level: LevelTag;
  provenance: Provenance;
  verification: Verification;
  difficulty?: 1 | 2 | 3;
  tags?: string[];
  sourceNote?: string;        // e.g. which circular, or "based on Strand 3 learning outcome 3.2"
}

export interface Flashcard extends BaseItem {
  type: 'flashcard';
  front: string;
  back: string;
  explain?: string;
  visual?: Visual;
}

export interface MCQ extends BaseItem {
  type: 'mcq';
  question: string;
  options: { text: string; correct?: boolean; why?: string }[];
  explain: string;
  visual?: Visual;
}

export interface ShortAnswer extends BaseItem {
  type: 'short';
  question: string;
  model: string;
  /** Each key point lists keywords; the point counts as covered if any keyword appears. */
  keyPoints: { point: string; keywords: string[] }[];
  explain?: string;
}

export interface Cloze extends BaseItem {
  type: 'cloze';
  prompt?: string;
  /** Blanks written as {{answer}} or {{answer|alternative}}. */
  text: string;
  choices?: string[];
  explain?: string;
}

export interface Worked extends BaseItem {
  type: 'worked';
  title: string;
  problem: string;
  steps: { body: string; why: string }[];
  answer: string;
  visual?: Visual;
}

export interface Explainer extends BaseItem {
  type: 'explainer';
  title: string;
  body: string;
  bullets?: string[];
  example?: string;
  visual?: Visual;
  check?: { question: string; options: { text: string; correct?: boolean }[]; explain: string };
}

export interface Technique extends BaseItem {
  type: 'technique';
  title: string;
  intro: string;
  dos: string[];
  donts: string[];
  example?: string;
}

export interface Translate extends BaseItem {
  type: 'translate';
  lang: 'ga' | 'fr';
  direction: 'to-target' | 'to-english';
  prompt: string;
  answers: string[];
  explain?: string;
}

export interface Builder extends BaseItem {
  type: 'builder';
  lang: 'ga' | 'fr' | 'en';
  prompt: string;
  words: string[];           // in correct order
  distractors?: string[];
  explain?: string;
}

export interface Essay extends BaseItem {
  type: 'essay';
  prompt: string;
  context?: string;
  stages: { label: string; items: string[] }[];
}

export type ContentItem =
  | Flashcard | MCQ | ShortAnswer | Cloze | Worked | Explainer | Technique | Translate | Builder | Essay;

export type ContentType = ContentItem['type'];

/* ------------------------------------------------------------------ Learner */

export type Grade = 0 | 1 | 2 | 3; // again, hard, good, easy

export interface ItemState {
  reps: number;
  lapses: number;
  ease: number;
  interval: number;   // days
  due: number;        // epoch ms
  lastSeen: number;
  lastGrade: Grade | -1;
  seen: number;
  correct: number;
}

export interface Profile {
  onboarded: boolean;
  subjects: { id: SubjectId; level: Level }[];
  dailyGoal: number;
  examYear: number;
}

export interface DayStats { cards: number; correct: number; graded: number; xp: number }

export interface Stats {
  xp: number;
  streak: number;
  bestStreak: number;
  lastActiveDay: string | null;
  days: Record<string, DayStats>;
}

export interface Flag { itemId: string; reason: string; at: number }
