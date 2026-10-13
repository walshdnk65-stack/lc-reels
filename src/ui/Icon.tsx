import type { ReactNode } from 'react';

/* Line icons in the same style as the Sixth Year tracker: 24px grid, 1.7 stroke,
   round caps and joins, no fill. Stats and Setup are the tracker's own paths. */

const PATHS: Record<string, ReactNode> = {
  feed: <><rect x="5.5" y="3.6" width="13" height="16.8" rx="2.6" /><path d="M10.6 9.2v5.6l4.4-2.8Z" /></>,
  explore: <><path d="M5 4.6h4.8a2.2 2.2 0 0 1 2.2 2.2v13a1.7 1.7 0 0 0-1.7-1.7H5Z" /><path d="M19 4.6h-4.8a2.2 2.2 0 0 0-2.2 2.2v13a1.7 1.7 0 0 1 1.7-1.7H19Z" /></>,
  stats: <path d="M4.5 20.2V11M10 20.2V4.6M15.5 20.2v-6.4M21 20.2H3" />,
  setup: <><circle cx="12" cy="12" r="3.1" /><path d="M12 3.4v2.3M12 18.3v2.3M3.4 12h2.3M18.3 12h2.3M5.9 5.9l1.6 1.6M16.5 16.5l1.6 1.6M18.1 5.9l-1.6 1.6M7.5 16.5l-1.6 1.6" /></>,
  moon: <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.2 8.2 0 1 0 20 14.2Z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" /></>,
  star: <path d="m12 3.8 2.5 5.2 5.6.8-4.1 3.9 1 5.6L12 16.6l-5 2.7 1-5.6-4.1-3.9 5.6-.8Z" />,
  flag: <><path d="M5.5 20.6V4.2" /><path d="M5.5 4.8h11.2l-2.2 4 2.2 4H5.5" /></>,
  info: <><circle cx="12" cy="12" r="8.4" /><path d="M12 11v5.2M12 7.9v.1" /></>,
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  down: <path d="M12 5v14M6.5 13.5 12 19l5.5-5.5" />,
  chevron: <path d="m9 5.5 6.5 6.5L9 18.5" />,
  flame: <path d="M12 21c-3.7 0-6.3-2.5-6.3-6 0-3.2 2.3-5 3.6-7.6.4 1.6 1.2 2.6 2.3 3.2.2-2.7 1.3-5.2 3.4-7.1-.1 3 1.5 4.6 2.6 6.4.8 1.3 1.1 2.6 1.1 4.1 0 4.1-2.9 7-6.7 7Z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  pause: <><circle cx="12" cy="12" r="8.4" /><path d="M10 9v6M14 9v6" /></>,
  layers: <><path d="m12 4 8.5 4.5L12 13 3.5 8.5Z" /><path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" /></>,
};

export type IconName = keyof typeof PATHS;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={'ic' + (className ? ' ' + className : '')} viewBox="0 0 24 24" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
