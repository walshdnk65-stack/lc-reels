import type { ContentItem, ItemState, Profile, SubjectId } from '../types';
import { subjectOf } from '../data/syllabus';
import { isDue, isPassive, strength } from './srs';

export type Reason = 'new' | 'review' | 'retry' | 'practice';
export interface Pick { itemId: string; reason: Reason }
export interface Focus { subject?: SubjectId; topic?: string }

/** Items that match the student's subjects and levels, optionally narrowed to one subject or topic. */
export function eligibleItems(all: ContentItem[], profile: Profile, focus?: Focus): ContentItem[] {
  const levels = new Map(profile.subjects.map((s) => [s.id, s.level]));
  return all.filter((item) => {
    const subject = subjectOf(item.objective);
    const level = levels.get(subject);
    if (!level) return false;
    if (item.level !== 'both' && item.level !== level) return false;
    if (focus?.subject && subject !== focus.subject) return false;
    if (focus?.topic && !item.objective.startsWith(focus.topic + '.')) return false;
    return true;
  });
}

interface Ctx {
  pool: ContentItem[];
  states: Record<string, ItemState>;
  now: number;
  recent: string[];          // ids shown recently, oldest first
  rng?: () => number;
}

/**
 * Choose the next n cards. Priorities:
 *  1. items failed earlier and now due again (retry) and spaced-repetition reviews that are due
 *  2. new items, weighted towards weaker topics, with an explainer shown before
 *     the questions on its objective ("teach, then test")
 *  3. extra practice on the weakest seen items, so the feed never runs dry
 * Subjects are interleaved: no more than two cards in a row from the same subject.
 */
export function buildBatch(ctx: Ctx, n: number): Pick[] {
  const { pool, states, now } = ctx;
  const rng = ctx.rng ?? Math.random;
  if (!pool.length) return [];

  const window = Math.min(15, Math.floor(pool.length * 0.6));
  const blocked = new Set(ctx.recent.slice(-window));

  // Topic weakness: 1 − mean strength of the seen items in each topic.
  const topicStats = new Map<string, { sum: number; count: number }>();
  for (const item of pool) {
    const s = states[item.id];
    if (!s?.seen) continue;
    const t = item.objective.split('.').slice(0, 2).join('.');
    const cur = topicStats.get(t) ?? { sum: 0, count: 0 };
    cur.sum += strength(s, now);
    cur.count += 1;
    topicStats.set(t, cur);
  }
  const weakness = (item: ContentItem) => {
    const t = topicStats.get(item.objective.split('.').slice(0, 2).join('.'));
    return t ? 1 - t.sum / t.count : 0.5;
  };

  const scored = pool
    .filter((item) => !blocked.has(item.id))
    .map((item) => {
      const s = states[item.id];
      let reason: Reason;
      let score: number;
      if (isDue(s, now)) {
        reason = s.lastGrade === 0 ? 'retry' : isPassive(item) ? 'practice' : 'review';
        score = (isPassive(item) ? 40 : 100) + Math.min(40, (now - s.due) / 3_600_000) + rng() * 10;
      } else if (!s?.seen) {
        reason = 'new';
        score = 55 + weakness(item) * 25 - (isPassive(item) ? 15 : 0) + rng() * 30;
      } else {
        reason = 'practice';
        score = 25 * (1 - strength(s, now)) + rng() * 10 - (isPassive(item) ? 15 : 0);
      }
      return { item, reason, score };
    })
    .sort((a, b) => b.score - a.score);

  const picks: Pick[] = [];
  const pickedSubjects: SubjectId[] = [];
  const used = new Set<string>();

  const take = (item: ContentItem, reason: Reason) => {
    picks.push({ itemId: item.id, reason });
    pickedSubjects.push(subjectOf(item.objective));
    used.add(item.id);
  };

  while (picks.length < n) {
    const prevSubjects = pickedSubjects.slice(-2);
    const streakSubject = prevSubjects.length === 2 && prevSubjects[0] === prevSubjects[1] ? prevSubjects[0] : null;
    const candidates = scored.filter((c) => !used.has(c.item.id));
    if (!candidates.length) break;
    const choice = candidates.find((c) => subjectOf(c.item.objective) !== streakSubject) ?? candidates[0];

    // Teach, then test: show an unseen explainer on the same objective first.
    if (choice.reason === 'new' && !isPassive(choice.item)) {
      const intro = candidates.find((c) => c.reason === 'new' && isPassive(c.item) && c.item.objective === choice.item.objective);
      if (intro && picks.length + 1 < n) take(intro.item, 'new');
    }
    take(choice.item, choice.reason);
  }
  return picks.slice(0, n);
}

/** Mean strength across a set of items (unseen items count as 0). */
export function mastery(items: ContentItem[], states: Record<string, ItemState>, now: number): number {
  if (!items.length) return 0;
  return items.reduce((sum, i) => sum + strength(states[i.id], now), 0) / items.length;
}

export function dueCount(items: ContentItem[], states: Record<string, ItemState>, now: number): number {
  return items.filter((i) => !isPassive(i) && isDue(states[i.id], now)).length;
}
