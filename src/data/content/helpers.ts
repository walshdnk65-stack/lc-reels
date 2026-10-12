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
