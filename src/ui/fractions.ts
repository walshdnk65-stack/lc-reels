/* Turns linear fractions in maths text — 3/4, (x² − 9)/(x + 3), dy/dx, sin A / sin B, ½ —
   into stacked HTML fractions (numerator over a bar over denominator).

   The parser binds "/" to the operand immediately on each side, which matches normal
   precedence: a·b/c becomes a · (b over c), equivalent to (a·b)/c. Brackets that only
   group a whole numerator or denominator are dropped once it is stacked. Output is
   HTML with all text escaped, so it is safe to insert. */

const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿᵗˣ';
const SUB = '₀₁₂₃₄₅₆₇₈₉ₙ';
const OP_EXTRA = 'πθμσλαβΔ√′!…°∞' + SUP + SUB;
const FUNCS = ['sin', 'cos', 'tan', 'log', 'ln'];
const UNITS = new Set(['m/s', 'km/h', 'g/L', 'mol/L', 'm/s²']);
const VULGAR: Record<string, [string, string]> = {
  '½': ['1', '2'], '⅓': ['1', '3'], '⅔': ['2', '3'], '¼': ['1', '4'], '¾': ['3', '4'],
  '⅕': ['1', '5'], '⅙': ['1', '6'], '⅛': ['1', '8'],
};

const isDigit = (c: string | undefined) => !!c && c >= '0' && c <= '9';
const isSup = (c: string | undefined) => !!c && SUP.includes(c);

/** Characters that can be part of a simple operand such as 2x, √3, x₂, 45°. */
function isOp(s: string, i: number): boolean {
  const c = s[i];
  if (!c) return false;
  if (/[0-9A-Za-z]/.test(c) || OP_EXTRA.includes(c)) return true;
  if (c === '.') return isDigit(s[i - 1]) && isDigit(s[i + 1]);
  if (c === ',') return isDigit(s[i - 1]) && isDigit(s[i + 1]) && isDigit(s[i + 2]) && isDigit(s[i + 3]);
  return false;
}

const OPEN: Record<string, string> = { '(': ')', '[': ']' };
const CLOSE: Record<string, string> = { ')': '(', ']': '[' };

function matchForward(s: string, i: number): number {
  const open = s[i], close = OPEN[open];
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === open) depth++;
    else if (s[j] === close && --depth === 0) return j;
  }
  return -1;
}

function matchBack(s: string, i: number): number {
  const close = s[i], open = CLOSE[close];
  let depth = 0;
  for (let j = i; j >= 0; j--) {
    if (s[j] === close) depth++;
    else if (s[j] === open && --depth === 0) return j;
  }
  return -1;
}

interface Operand { start: number; end: number; text: string } // end is exclusive

function readRight(s: string, i: number): Operand | null {
  const start = i;
  // Bracketed group, e.g. (x + 1) or (x + 1)²
  if (OPEN[s[i]]) {
    const j = matchForward(s, i);
    if (j < 0) return null;
    let end = j + 1;
    while (isSup(s[end])) end++;
    return { start, end, text: end === j + 1 ? s.slice(i + 1, j) : s.slice(i, end) };
  }
  // A function such as sin B or log 2
  for (const f of FUNCS) {
    if (s.startsWith(f, i) && (s[i + f.length] === ' ' || s[i + f.length] === '(')) {
      const after = s[i + f.length] === ' ' ? i + f.length + 1 : i + f.length;
      const arg = readRight(s, after);
      if (!arg) return null;
      return { start, end: arg.end, text: s.slice(i, arg.end) };
    }
  }
  let j = i;
  while (isOp(s, j)) j++;
  if (j === i) return null;
  const token = s.slice(i, j);
  // x^(…) exponent, or a function applied to a bracket like g(x) — but not d/dx(…)
  if (s[j] === '^' && s[j + 1] === '(') {
    const k = matchForward(s, j + 1);
    if (k > 0) j = k + 1;
  } else if (s[j] === '(' && !/^d[²³]?[a-z][²³]?$/.test(token)) {
    const k = matchForward(s, j);
    if (k > 0) j = k + 1;
  }
  return { start, end: j, text: s.slice(i, j) };
}

function readLeft(s: string, i: number, floor: number, spaced: boolean): Operand | null {
  const end = i + 1;
  let k = i;
  while (k >= floor && isSup(s[k])) k--;
  let start: number;
  let strip = false;
  if (CLOSE[s[k]]) {
    const open = matchBack(s, k);
    if (open < floor) return null;
    start = open;
    strip = k === i;
    // A prefix glued to the bracket: √(…), e^(…), f(x), a(rⁿ − 1)
    if (s[start - 1] === '√') { start--; strip = false; }
    if (s[start - 1] === '^') {
      let b = start - 2;
      while (b >= floor && isOp(s, b)) b--;
      start = b + 1; strip = false;
    } else if (start - 1 >= floor && isOp(s, start - 1)) {
      let b = start - 1;
      while (b >= floor && isOp(s, b)) b--;
      if (b + 1 < start) { start = b + 1; strip = false; }
    }
  } else {
    let b = i;
    while (b >= floor && isOp(s, b)) b--;
    start = b + 1;
    if (start > i) return null;
  }
  // Include a function name in front only for a spaced slash: "log 20 / log 2".
  // Unspaced, "cos π/4" means cos(π/4), so the function stays outside.
  for (const f of spaced ? FUNCS : []) {
    const pre = f + ' ';
    if (start - pre.length >= floor && s.slice(start - pre.length, start) === pre) { start -= pre.length; strip = false; break; }
  }
  const text = strip ? s.slice(start + 1, k) : s.slice(start, end);
  return { start, end, text };
}

function escape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function stack(numHtml: string, denHtml: string, numText: string, denText: string): string {
  const label = escape(`${numText} over ${denText}`);
  return `<span class="frac" role="math" aria-label="${label}"><span class="fn">${numHtml}</span><span class="fd">${denHtml}</span></span>`;
}

function plain(s: string): string {
  let out = '';
  for (const ch of s) out += VULGAR[ch] ? stack(VULGAR[ch][0], VULGAR[ch][1], VULGAR[ch][0], VULGAR[ch][1]) : escape(ch);
  return out;
}

/** Escape text and render every fraction in it as a stacked fraction. */
export function fractionsToHtml(s: string): string {
  let out = '';
  let emitted = 0;
  for (let p = 0; p < s.length; p++) {
    if (s[p] !== '/') continue;
    const leftEnd = s[p - 1] === ' ' ? p - 2 : p - 1;
    const rightStart = s[p + 1] === ' ' ? p + 2 : p + 1;
    if ((s[p - 1] === ' ') !== (s[p + 1] === ' ')) continue; // "a /b" is not a fraction
    const left = readLeft(s, leftEnd, emitted, s[p - 1] === ' ');
    const right = readRight(s, rightStart);
    if (!left || !right) continue;
    if (UNITS.has(`${s.slice(left.start, left.end)}/${s.slice(right.start, right.end)}`)) continue;
    out += plain(s.slice(emitted, left.start)) + stack(fractionsToHtml(left.text), fractionsToHtml(right.text), left.text, right.text);
    emitted = right.end;
    p = right.end - 1;
  }
  return out + plain(s.slice(emitted));
}
