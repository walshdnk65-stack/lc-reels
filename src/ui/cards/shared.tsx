import { useState } from 'react';
import type { ContentItem, Grade } from '../../types';
import { Rich } from '../Rich';

/** Per-card UI state that survives the card being unmounted while scrolled out of view. */
export type CardMem = Record<string, unknown>;

export function useCardState<T>(mem: CardMem, key: string, init: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(() => (key in mem ? (mem[key] as T) : init));
  return [value, (v: T) => { mem[key] = v; setValue(v); }];
}

export interface CardProps<T extends ContentItem = ContentItem> {
  item: T;
  mem: CardMem;
  graded: boolean;
  onGrade: (g: Grade) => void;
  onRead: () => void;
}

/** Deterministic shuffle so options stay put if a card re-renders. */
export function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  const rand = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function GradeBar({ onGrade, graded, labels = ['Didn’t know', 'Shaky', 'Knew it'], prompt = 'How did you do?' }:
  { onGrade: (g: Grade) => void; graded: boolean; labels?: [string, string, string]; prompt?: string }) {
  const [picked, setPicked] = useState<Grade | null>(null);
  if (graded) return <div className="grade-done">Saved. We’ll bring this back at the right time.</div>;
  return (
    <div className="grade-bar">
      <span className="grade-prompt">{prompt}</span>
      <div className="grade-buttons">
        {([0, 1, 2] as Grade[]).map((g) => (
          <button key={g} className={`grade g${g}`} disabled={picked !== null}
            onClick={(e) => { e.stopPropagation(); setPicked(g); onGrade(g); }}>
            {labels[g as 0 | 1 | 2]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Explain({ text, title = 'Why' }: { text?: string; title?: string }) {
  if (!text) return null;
  return (
    <div className="explain">
      <span className="explain-title">{title}</span>
      <Rich text={text} />
    </div>
  );
}
