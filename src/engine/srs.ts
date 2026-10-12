import type { ContentItem, Grade, ItemState } from '../types';

/* Spaced repetition, a simplified SM-2.
 * Grades: 0 again · 1 hard · 2 good · 3 easy.
 * Failed items come back within the same session (10 minutes) so the feed can
 * re-test them while the mistake is still fresh. */

const MIN = 60_000;
const DAY = 86_400_000;

export function newState(now: number): ItemState {
  return { reps: 0, lapses: 0, ease: 2.5, interval: 0, due: now, lastSeen: 0, lastGrade: -1, seen: 0, correct: 0 };
}

export function review(prev: ItemState | undefined, grade: Grade, now: number): ItemState {
  const s = { ...(prev ?? newState(now)) };
  s.seen += 1;
  s.lastSeen = now;
  s.lastGrade = grade;

  if (grade === 0) {
    s.lapses += 1;
    s.reps = 0;
    s.ease = Math.max(1.3, s.ease - 0.2);
    s.interval = 0;
    s.due = now + 10 * MIN;
    return s;
  }

  s.correct += 1;
  s.reps += 1;
  if (grade === 1) s.ease = Math.max(1.3, s.ease - 0.15);
  if (grade === 3) s.ease = s.ease + 0.15;

  if (s.reps === 1) s.interval = grade === 1 ? 0.5 : grade === 2 ? 1 : 3;
  else if (s.reps === 2) s.interval = grade === 1 ? 1.5 : grade === 2 ? 3 : 6;
  else s.interval = s.interval * (grade === 1 ? 1.2 : grade === 2 ? s.ease : s.ease * 1.3);

  s.interval = Math.min(s.interval, 120);
  s.due = now + s.interval * DAY;
  return s;
}

/** Passive cards (explainers, technique) are read, not tested, so we just mark them seen and revisit them later. */
export function markRead(prev: ItemState | undefined, now: number): ItemState {
  const s = { ...(prev ?? newState(now)) };
  s.seen += 1;
  s.lastSeen = now;
  s.reps = Math.max(1, s.reps);
  s.interval = Math.max(3, s.interval * 2);
  s.due = now + s.interval * DAY;
  return s;
}

export function isPassive(item: ContentItem): boolean {
  return item.type === 'explainer' || item.type === 'technique';
}

/** 0–1 estimate of how well an item is known. Grows with interval, and drops for overdue items. */
export function strength(s: ItemState | undefined, now: number): number {
  if (!s || s.seen === 0) return 0;
  if (s.lastGrade === 0) return 0.1;
  const base = Math.min(1, 0.35 + s.interval / 21);
  const overdueDays = Math.max(0, (now - s.due) / DAY);
  return Math.max(0.15, base * Math.pow(0.97, overdueDays));
}

export function isDue(s: ItemState | undefined, now: number): boolean {
  return !!s && s.seen > 0 && s.due <= now;
}
