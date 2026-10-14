import { describe, expect, it } from 'vitest';
import { fractionsToHtml } from './fractions';

/** Show stacked fractions as {num|den} so the expected output is easy to read. */
function show(s: string): string {
  let html = fractionsToHtml(s);
  for (let i = 0; i < 5; i++) {
    html = html.replace(/<span class="frac"[^>]*><span class="fn">((?:(?!<span class="frac")[\s\S])*?)<\/span><span class="fd">((?:(?!<span class="frac")[\s\S])*?)<\/span><\/span>/g, '{$1|$2}');
  }
  return html.replace(/&amp;/g, '&');
}

describe('stacked maths fractions', () => {
  it('stacks simple fractions', () => expect(show('3/4 and 5/14')).toBe('{3|4} and {5|14}'));
  it('drops grouping brackets', () => expect(show('(x² − 9)/(x + 3)')).toBe('{x² − 9|x + 3}'));
  it('keeps brackets that carry a power', () => expect(show('1/(x + 1)²')).toBe('{1|(x + 1)²}'));
  it('handles spaced slashes', () => expect(show('t = (v − u) / a')).toBe('t = {v − u|a}'));
  it('stacks derivatives without swallowing the bracket', () => {
    expect(show('dy/dx = 3x²')).toBe('{dy|dx} = 3x²');
    expect(show('d/dx(sin x)')).toBe('{d|dx}(sin x)');
  });
  it('includes function names', () => {
    expect(show('a/sin A = b / sin B')).toBe('{a|sin A} = {b|sin B}');
    expect(show('x = log 20 / log 2')).toBe('x = {log 20|log 2}');
  });
  it('keeps an unspaced angle inside the function', () => expect(show('cos π/4 + i sin π/4')).toBe('cos {π|4} + i sin {π|4}'));
  it('labels nested fractions with plain text', () => expect(fractionsToHtml('12 / (1 − ½)')).toContain('aria-label="12 over 1 − ½"'));
  it('keeps exponent bases together', () => expect(show('e^(3x)/3')).toBe('{e^(3x)|3}'));
  it('handles square brackets', () => expect(show('[f(x + h) − f(x)] / h')).toBe('{f(x + h) − f(x)|h}'));
  it('nests fractions', () => expect(show('(1/(b − a))∫')).toBe('({1|b − a})∫'));
  it('reads thousands separators and decimals', () => expect(show('10,000 / 1.157625')).toBe('{10,000|1.157625}'));
  it('converts unicode fractions', () => expect(show('½ab sin C')).toBe('{1|2}ab sin C'));
  it('leaves units alone', () => expect(show('10 m/s')).toBe('10 m/s'));
  it('ignores a slash with a space on one side only', () => expect(show('a /b')).toBe('a /b'));
  it('escapes HTML', () => expect(fractionsToHtml('<b>1/2</b>')).toContain('&lt;b&gt;'));
});
