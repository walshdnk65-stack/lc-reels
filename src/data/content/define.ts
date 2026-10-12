import type { ContentItem, LevelTag, Provenance, Verification } from '../../types';

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

/** An item as authored: level, provenance and verification fall back to the file's defaults. */
export type Draft = DistributiveOmit<ContentItem, 'level' | 'provenance' | 'verification'> & {
  level?: LevelTag; provenance?: Provenance; verification?: Verification;
};

export function define(
  defaults: { level?: LevelTag; provenance?: Provenance; verification?: Verification },
  drafts: Draft[],
): ContentItem[] {
  return drafts.map((d) => ({
    level: defaults.level ?? 'both',
    provenance: defaults.provenance ?? 'original-practice',
    verification: defaults.verification ?? 'needs-review',
    ...d,
  }) as ContentItem);
}
