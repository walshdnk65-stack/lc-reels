import { useSyncExternalStore } from 'react';
import type { DayStats, Flag, Grade, ItemState, Profile, Stats } from '../types';
import { markRead, review } from './srs';
import { SUBJECT_ORDER } from '../data/syllabus';

/* App state persisted to localStorage. Everything here is per-device; a backend
   sync could replace load/save without touching the rest of the app. */

export interface AppState {
  profile: Profile;
  items: Record<string, ItemState>;
  stats: Stats;
  bookmarks: string[];
  flags: Flag[];
  recent: string[];
}

const KEY = 'lc-reels:v1';

export const XP = { correct: 10, hard: 6, wrong: 2, read: 3 } as const;

function fresh(): AppState {
  return {
    profile: { onboarded: false, subjects: [], dailyGoal: 20, examYear: 2027 },
    items: {},
    stats: { xp: 0, streak: 0, bestStreak: 0, lastActiveDay: null, days: {} },
    bookmarks: [],
    flags: [],
    recent: [],
  };
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fresh();
    const parsed = JSON.parse(raw) as Partial<AppState>;
    const base = fresh();
    const profile = { ...base.profile, ...parsed.profile };
    return { ...base, ...parsed, profile: { ...profile, subjects: sortSubjects(profile.subjects) }, stats: { ...base.stats, ...parsed.stats } };
  } catch {
    return fresh();
  }
}

let state: AppState = load();
const listeners = new Set<() => void>();

function set(next: AppState) {
  state = next;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage full or blocked: keep in memory */ }
  listeners.forEach((l) => l());
}

export function getState(): AppState { return state; }

export function useApp(): AppState {
  return useSyncExternalStore(
    (l) => { listeners.add(l); return () => listeners.delete(l); },
    () => state,
  );
}

/* --------------------------------------------------------------- Dates */

export function dayKey(t: number): string {
  const d = new Date(t);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function addActivity(s: AppState, now: number, delta: Partial<DayStats>): Stats {
  const today = dayKey(now);
  const yesterday = dayKey(now - 86_400_000);
  const stats = { ...s.stats, days: { ...s.stats.days } };
  if (stats.lastActiveDay !== today) {
    stats.streak = stats.lastActiveDay === yesterday ? stats.streak + 1 : 1;
    stats.bestStreak = Math.max(stats.bestStreak, stats.streak);
    stats.lastActiveDay = today;
  }
  const d = { ...(stats.days[today] ?? { cards: 0, correct: 0, graded: 0, xp: 0 }) };
  d.cards += delta.cards ?? 0;
  d.correct += delta.correct ?? 0;
  d.graded += delta.graded ?? 0;
  d.xp += delta.xp ?? 0;
  stats.days[today] = d;
  stats.xp += delta.xp ?? 0;
  return stats;
}

function pushRecent(recent: string[], id: string): string[] {
  return [...recent.filter((r) => r !== id), id].slice(-60);
}

/** The streak shown to the user: 0 if they missed yesterday and haven't studied today yet. */
export function liveStreak(stats: Stats, now = Date.now()): number {
  if (!stats.lastActiveDay) return 0;
  if (stats.lastActiveDay === dayKey(now) || stats.lastActiveDay === dayKey(now - 86_400_000)) return stats.streak;
  return 0;
}

/* ------------------------------------------------------------- Actions */

function sortSubjects(subjects: Profile['subjects']): Profile['subjects'] {
  return [...subjects].sort((a, b) => SUBJECT_ORDER.indexOf(a.id) - SUBJECT_ORDER.indexOf(b.id));
}

export const actions = {
  completeOnboarding(profile: Omit<Profile, 'onboarded'>) {
    set({ ...state, profile: { ...profile, subjects: sortSubjects(profile.subjects), onboarded: true } });
  },
  updateProfile(patch: Partial<Profile>) {
    const next = { ...state.profile, ...patch };
    set({ ...state, profile: { ...next, subjects: sortSubjects(next.subjects) } });
  },
  grade(itemId: string, grade: Grade, now = Date.now()) {
    const xp = grade === 0 ? XP.wrong : grade === 1 ? XP.hard : XP.correct;
    set({
      ...state,
      items: { ...state.items, [itemId]: review(state.items[itemId], grade, now) },
      stats: addActivity(state, now, { cards: 1, graded: 1, correct: grade > 0 ? 1 : 0, xp }),
      recent: pushRecent(state.recent, itemId),
    });
  },
  read(itemId: string, now = Date.now()) {
    set({
      ...state,
      items: { ...state.items, [itemId]: markRead(state.items[itemId], now) },
      stats: addActivity(state, now, { cards: 1, xp: XP.read }),
      recent: pushRecent(state.recent, itemId),
    });
  },
  /** Scrolled past without answering: remember it was shown so it isn't repeated straight away. */
  skipped(itemId: string) {
    if (state.recent[state.recent.length - 1] === itemId) return;
    set({ ...state, recent: pushRecent(state.recent, itemId) });
  },
  toggleBookmark(itemId: string) {
    const has = state.bookmarks.includes(itemId);
    set({ ...state, bookmarks: has ? state.bookmarks.filter((b) => b !== itemId) : [...state.bookmarks, itemId] });
  },
  flag(itemId: string, reason: string) {
    set({ ...state, flags: [...state.flags.filter((f) => f.itemId !== itemId), { itemId, reason, at: Date.now() }] });
  },
  unflag(itemId: string) {
    set({ ...state, flags: state.flags.filter((f) => f.itemId !== itemId) });
  },
  resetProgress() {
    set({ ...fresh(), profile: state.profile });
  },
  resetAll() {
    set(fresh());
  },
};
