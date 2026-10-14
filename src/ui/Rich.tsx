import { createContext, useContext } from 'react';
import { fractionsToHtml } from './fractions';

/* Renders the small markup used in content: **bold**, *italic*, and line breaks.
   Text is escaped first, so content can never inject HTML. Inside maths cards,
   fractions are drawn stacked (numerator over denominator). */

/** True inside a Mathematics card. */
export const MathContext = createContext(false);

function escape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function toHtml(s: string, math = false): string {
  return (math ? fractionsToHtml(s) : escape(s))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\n]+?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/\n\n/g, '<span class="para"></span>')
    .replace(/\n/g, '<br/>');
}

export function Rich({ text, className, as = 'div' }: { text: string; className?: string; as?: 'div' | 'span' | 'p' }) {
  const math = useContext(MathContext);
  const Tag = as;
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: toHtml(text, math) }} />;
}
