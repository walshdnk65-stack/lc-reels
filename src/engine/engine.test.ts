import { describe, expect, it } from 'vitest';
import { CONTENT } from '../data/content';
import { allObjectiveIds, lookupObjective, SYLLABUS } from '../data/syllabus';
import { SOURCES } from '../data/sources';
import { checkAnswer, matchKeyPoints, parseCloze } from './answer';
import { buildBatch, eligibleItems } from './feed';
import { review, strength } from './srs';
import type { ItemState, Profile } from '../types';

describe('content integrity', () => {
  it('has unique ids', () => {
    const ids = CONTENT.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('maps every item to a real learning objective', () => {
    const missing = CONTENT.filter((c) => !lookupObjective(c.objective)).map((c) => `${c.id} → ${c.objective}`);
    expect(missing).toEqual([]);
  });

  it('never tags an item with a level its objective excludes', () => {
    const bad = CONTENT.filter((c) => {
      const o = lookupObjective(c.objective)!.objective;
      return o.level !== 'both' && c.level !== o.level;
    }).map((c) => c.id);
    expect(bad).toEqual([]);
  });

  it('gives every MCQ exactly one correct option', () => {
    const bad = CONTENT.filter((c) => c.type === 'mcq' && c.options.filter((o) => o.correct).length !== 1).map((c) => c.id);
    expect(bad).toEqual([]);
  });

  it('gives every explainer check exactly one correct option', () => {
    const bad = CONTENT.filter((c) => c.type === 'explainer' && c.check && c.check.options.filter((o) => o.correct).length !== 1).map((c) => c.id);
    expect(bad).toEqual([]);
  });

  it('has a blank in every cloze, and choices that include every answer', () => {
    for (const c of CONTENT) {
      if (c.type !== 'cloze') continue;
      const { blanks } = parseCloze(c.text);
      expect(blanks.length, c.id).toBeGreaterThan(0);
      if (c.choices) for (const b of blanks) expect(c.choices.some((ch) => b.includes(ch)), c.id).toBe(true);
    }
  });

  it('only marks verified items that cite a source', () => {
    const bad = CONTENT.filter((c) => c.verification === 'verified' && !c.sourceNote).map((c) => c.id);
    expect(bad).toEqual([]);
  });

  it('references only known sources from the syllabus', () => {
    for (const s of Object.values(SYLLABUS)) for (const id of s.sources) expect(SOURCES[id], id).toBeDefined();
  });

  it('covers all seven subjects', () => {
    const subjects = new Set(CONTENT.map((c) => c.objective.split('.')[0]));
    expect([...subjects].sort()).toEqual(['accounting', 'business', 'chemistry', 'english', 'french', 'irish', 'maths']);
    expect(allObjectiveIds().length).toBeGreaterThan(100);
  });
});

describe('spaced repetition', () => {
  const now = 1_700_000_000_000;
  it('brings failed items back within the session', () => {
    const s = review(undefined, 0, now);
    expect(s.due - now).toBe(10 * 60_000);
    expect(s.lapses).toBe(1);
  });
  it('grows intervals with successive good answers', () => {
    let s = review(undefined, 2, now);
    expect(s.interval).toBe(1);
    s = review(s, 2, now);
    expect(s.interval).toBe(3);
    s = review(s, 2, now);
    expect(s.interval).toBeCloseTo(7.5);
  });
  it('rates known items as stronger than failed ones', () => {
    const good = review(review(undefined, 2, now), 2, now);
    const bad = review(undefined, 0, now);
    expect(strength(good, now)).toBeGreaterThan(strength(bad, now));
  });
});

describe('answer checking', () => {
  it('ignores case and punctuation', () => {
    expect(checkAnswer('chuaigh mé go dtí an siopa inné.', ['Chuaigh mé go dtí an siopa inné']).result).toBe('correct');
  });
  it('flags missing accents separately', () => {
    expect(checkAnswer('le rechauffement climatique', ['le réchauffement climatique']).result).toBe('accent');
  });
  it('treats apostrophe styles as equal', () => {
    expect(checkAnswer("J'ai fini mes devoirs", ['J’ai fini mes devoirs']).result).toBe('correct');
  });
  it('compares numbers numerically', () => {
    expect(checkAnswer('€1,250', ['1250']).result).toBe('correct');
  });
  it('allows a small typo on long answers', () => {
    expect(checkAnswer('renewable enrgy', ['renewable energy']).result).toBe('typo');
  });
  it('finds key points', () => {
    expect(matchKeyPoints('First show the base case, then assume n = k', [
      { point: 'base', keywords: ['base'] }, { point: 'assume', keywords: ['assume'] }, { point: 'k+1', keywords: ['k+1'] },
    ])).toEqual([true, true, false]);
  });
});

describe('feed', () => {
  const profile: Profile = { onboarded: true, dailyGoal: 20, examYear: 2027, subjects: [{ id: 'maths', level: 'OL' }, { id: 'irish', level: 'HL' }] };

  it('filters by subject and level', () => {
    const pool = eligibleItems(CONTENT, profile);
    expect(pool.every((i) => ['maths', 'irish'].includes(i.objective.split('.')[0]))).toBe(true);
    expect(pool.some((i) => i.objective.startsWith('maths') && i.level === 'HL')).toBe(false);
  });

  it('puts due reviews first and never repeats a card within a batch', () => {
    const pool = eligibleItems(CONTENT, profile);
    const now = Date.now();
    const states: Record<string, ItemState> = {};
    states[pool[3].id] = { ...review(undefined, 2, now - 5 * 86_400_000) };
    const picks = buildBatch({ pool, states, now, recent: [], rng: () => 0.5 }, 10);
    expect(picks[0].itemId).toBe(pool[3].id);
    expect(new Set(picks.map((p) => p.itemId)).size).toBe(picks.length);
  });

  it('interleaves subjects', () => {
    const pool = eligibleItems(CONTENT, profile);
    const picks = buildBatch({ pool, states: {}, now: Date.now(), recent: [], rng: Math.random }, 12);
    const subjects = picks.map((p) => p.itemId.slice(0, 2));
    let run = 1, maxRun = 1;
    for (let i = 1; i < subjects.length; i++) { run = subjects[i] === subjects[i - 1] ? run + 1 : 1; maxRun = Math.max(maxRun, run); }
    expect(maxRun).toBeLessThanOrEqual(3);
  });
});
