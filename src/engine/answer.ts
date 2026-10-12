/* Typed-answer checking. Lenient on case, punctuation, apostrophe style and
   spacing; accents are reported separately so a student learns them without
   being marked wrong for a missing fada or accent on a phone keyboard. */

export type MatchResult = 'correct' | 'accent' | 'typo' | 'wrong';

export function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.,!?;:«»"“”()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function asNumber(s: string): number | null {
  const t = s.replace(/[€$£%\s]/g, '').replace(/,(?=\d{3}\b)/g, '');
  if (!/^-?\d+(\.\d+)?$/.test(t)) return null;
  return Number(t);
}

/** Compare one typed answer with a list of accepted answers. */
export function checkAnswer(input: string, accepted: string[]): { result: MatchResult; best: string } {
  const given = normalise(input);
  if (!given) return { result: 'wrong', best: accepted[0] };
  let best: { result: MatchResult; best: string } = { result: 'wrong', best: accepted[0] };
  const rank: Record<MatchResult, number> = { correct: 3, accent: 2, typo: 1, wrong: 0 };

  for (const a of accepted) {
    const target = normalise(a);
    let r: MatchResult = 'wrong';
    const gn = asNumber(given), tn = asNumber(target);
    if (gn !== null && tn !== null) r = Math.abs(gn - tn) < 1e-9 ? 'correct' : 'wrong';
    else if (given === target) r = 'correct';
    else if (stripAccents(given) === stripAccents(target)) r = 'accent';
    else {
      const d = levenshtein(stripAccents(given), stripAccents(target));
      if (target.length >= 5 && d <= Math.max(1, Math.floor(target.length / 12))) r = 'typo';
    }
    if (rank[r] > rank[best.result]) best = { result: r, best: a };
    if (r === 'correct') break;
  }
  return best;
}

/** Which key points of a model answer does a free-text answer mention? */
export function matchKeyPoints(input: string, points: { point: string; keywords: string[] }[]): boolean[] {
  const text = stripAccents(normalise(input)).replace(/\s+/g, ' ');
  const squashed = text.replace(/\s/g, '');
  return points.map((p) => p.keywords.some((k) => {
    const kw = stripAccents(normalise(k));
    return text.includes(kw) || squashed.includes(kw.replace(/\s/g, ''));
  }));
}

/** Parse "{{a|b}}" blanks out of cloze text. */
export function parseCloze(text: string): { parts: string[]; blanks: string[][] } {
  const parts: string[] = [];
  const blanks: string[][] = [];
  const re = /\{\{([^}]+)\}\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    parts.push(text.slice(last, m.index));
    blanks.push(m[1].split('|').map((s) => s.trim()));
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return { parts, blanks };
}
