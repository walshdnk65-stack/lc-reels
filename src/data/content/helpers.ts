import type { Draft } from './define';

/* Shorthand constructors for the most common card shapes. Each returns a Draft,
   so level / provenance / verification still fall back to the file's defaults. */

type Extra = Partial<Draft> & Record<string, unknown>;

/** Flashcard: front, back, optional explanation. */
export function fc(id: string, objective: string, front: string, back: string, explain?: string, extra: Extra = {}): Draft {
  return { id, type: 'flashcard', objective, front, back, explain, ...extra } as Draft;
}

/** Multiple choice: the correct answer first, then [wrong answer, why it's wrong] pairs. Options are shuffled on screen. */
export function mc(id: string, objective: string, question: string, correct: string, wrong: [string, string?][], explain: string, extra: Extra = {}): Draft {
  return {
    id, type: 'mcq', objective, question, explain,
    options: [{ text: correct, correct: true }, ...wrong.map(([text, why]) => ({ text, why }))],
    ...extra,
  } as Draft;
}

/** Fill the gap: blanks written {{answer|alt}}. */
export function cz(id: string, objective: string, prompt: string, text: string, choices?: string[], explain?: string, extra: Extra = {}): Draft {
  return { id, type: 'cloze', objective, prompt, text, choices, explain, ...extra } as Draft;
}

/** Translation into the target language (or into English with direction 'to-english'). */
export function tr(id: string, objective: string, lang: 'ga' | 'fr', prompt: string, answers: string[], explain?: string, extra: Extra = {}): Draft {
  return { id, type: 'translate', objective, lang, direction: 'to-target', prompt, answers, explain, ...extra } as Draft;
}

export function trEn(id: string, objective: string, lang: 'ga' | 'fr', prompt: string, answers: string[], explain?: string, extra: Extra = {}): Draft {
  return { id, type: 'translate', objective, lang, direction: 'to-english', prompt, answers, explain, ...extra } as Draft;
}

/** Worked example: steps as [what to do, why]. */
export function wk(id: string, objective: string, title: string, problem: string, steps: [string, string][], answer: string, extra: Extra = {}): Draft {
  return { id, type: 'worked', objective, title, problem, steps: steps.map(([body, why]) => ({ body, why })), answer, ...extra } as Draft;
}

/** Quick explainer, optionally ending in a one-question check: [question, correct, wrong answers, explanation]. */
export function ex(id: string, objective: string, title: string, body: string, bullets?: string[],
  check?: [string, string, string[], string], extra: Extra = {}): Draft {
  return {
    id, type: 'explainer', objective, title, body, bullets,
    check: check && { question: check[0], explain: check[3], options: [{ text: check[1], correct: true }, ...check[2].map((text) => ({ text }))] },
    ...extra,
  } as Draft;
}

/** Short answer: the model answer plus key points, each with keywords that count as covering it. */
export function sa(id: string, objective: string, question: string, model: string, keyPoints: [string, string[]][], extra: Extra = {}): Draft {
  return { id, type: 'short', objective, question, model, keyPoints: keyPoints.map(([point, keywords]) => ({ point, keywords })), ...extra } as Draft;
}

/** Sentence or sequence builder: words in the correct order. */
export function bd(id: string, objective: string, lang: 'ga' | 'fr' | 'en', prompt: string, words: string[], distractors: string[] = [], explain?: string, extra: Extra = {}): Draft {
  return { id, type: 'builder', objective, lang, prompt, words, distractors, explain, ...extra } as Draft;
}

/** Essay plan revealed in stages: [label, points]. */
export function es(id: string, objective: string, prompt: string, stages: [string, string[]][], context?: string, extra: Extra = {}): Draft {
  return { id, type: 'essay', objective, prompt, context, stages: stages.map(([label, items]) => ({ label, items })), ...extra } as Draft;
}

/** Exam technique: dos and don'ts. Defaults to exam advice provenance. */
export function tq(id: string, objective: string, title: string, intro: string, dos: string[], donts: string[], extra: Extra = {}): Draft {
  return { id, type: 'technique', objective, title, intro, dos, donts, provenance: 'exam-advice', ...extra } as Draft;
}
