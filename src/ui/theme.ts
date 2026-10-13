import { useEffect, useState } from 'react';

/* Light by default, dark when the phone asks for it, and either one forced by
   data-theme on <html> — the same model as the Sixth Year tracker. The choice is a
   per-device convenience, so it lives in localStorage. */

export type ThemeChoice = 'system' | 'light' | 'dark';
const KEY = 'lc-reels:theme';
const dark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

export function loadTheme(): ThemeChoice {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' ? v : 'system';
  } catch {
    return 'system';
  }
}

export function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  if (choice === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', choice);
  const isDark = choice === 'dark' || (choice === 'system' && dark());
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0e1526' : '#f4f2ed');
}

export interface Theme { choice: ThemeChoice; isDark: boolean; toggle: () => void; set: (c: ThemeChoice) => void }

export function useTheme(): Theme {
  const [choice, setChoice] = useState<ThemeChoice>(loadTheme);
  const [systemDark, setSystemDark] = useState(dark);

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const on = () => { setSystemDark(mq.matches); applyTheme(loadTheme()); };
    mq?.addEventListener('change', on);
    return () => mq?.removeEventListener('change', on);
  }, []);

  const set = (next: ThemeChoice) => {
    try { localStorage.setItem(KEY, next); } catch { /* keep it for this session only */ }
    applyTheme(next);
    setChoice(next);
  };
  const isDark = choice === 'dark' || (choice === 'system' && systemDark);
  // The header button flips to the opposite of what is showing; landing back on the
  // system's own setting clears the override, so the app keeps following the phone.
  const toggle = () => {
    const want: ThemeChoice = isDark ? 'light' : 'dark';
    set((want === 'dark') === systemDark ? 'system' : want);
  };
  return { choice, isDark, toggle, set };
}
