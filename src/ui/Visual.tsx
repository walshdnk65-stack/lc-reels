import type { Visual as VisualSpec } from '../types';

export function Visual({ spec }: { spec: VisualSpec }) {
  switch (spec.kind) {
    case 'graph': return <Graph spec={spec} />;
    case 'table': return <Table spec={spec} />;
    case 'structure': return <Structure spec={spec} />;
    case 'bars': return <Bars spec={spec} />;
    case 'flow': return (
      <div className="vis vis-flow">
        {spec.steps.map((s, i) => <div key={i} className="flow-step">{s}</div>)}
      </div>
    );
  }
}

/* ----------------------------------------------------------------- Graph */

function Graph({ spec }: { spec: Extract<VisualSpec, { kind: 'graph' }> }) {
  const W = 320, H = 210, P = 18;
  const [x0, x1] = spec.xRange, [y0, y1] = spec.yRange;
  const sx = (x: number) => P + ((x - x0) / (x1 - x0)) * (W - 2 * P);
  const sy = (y: number) => H - P - ((y - y0) / (y1 - y0)) * (H - 2 * P);
  const inY = (y: number) => y >= y0 - 0.001 && y <= y1 + 0.001 && Number.isFinite(y);

  const ticksX = integerTicks(x0, x1);
  const ticksY = integerTicks(y0, y1);

  const curvePath = (f: (x: number) => number) => {
    let d = '';
    let pen = false;
    const N = 240;
    for (let i = 0; i <= N; i++) {
      const x = x0 + ((x1 - x0) * i) / N;
      const y = f(x);
      if (!inY(y)) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`;
      pen = true;
    }
    return d;
  };

  return (
    <figure className="vis vis-graph">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={spec.curves?.map((c) => c.label).join(', ') || 'graph'}>
        <g className="grid">
          {ticksX.map((t) => <line key={'gx' + t} x1={sx(t)} x2={sx(t)} y1={P} y2={H - P} />)}
          {ticksY.map((t) => <line key={'gy' + t} y1={sy(t)} y2={sy(t)} x1={P} x2={W - P} />)}
        </g>
        <g className="axes">
          {y0 <= 0 && y1 >= 0 && <line x1={P} x2={W - P} y1={sy(0)} y2={sy(0)} />}
          {x0 <= 0 && x1 >= 0 && <line y1={P} y2={H - P} x1={sx(0)} x2={sx(0)} />}
        </g>
        {spec.xLabel && <text className="axis-label" x={W - P} y={(y0 <= 0 && y1 >= 0 ? sy(0) : H - P) - 5} textAnchor="end">{spec.xLabel}</text>}
        {spec.yLabel && <text className="axis-label" x={(x0 <= 0 && x1 >= 0 ? sx(0) : P) + 5} y={P + 10}>{spec.yLabel}</text>}
        {spec.curves?.map((c, i) => <path key={i} d={curvePath(c.f)} className={'curve' + (c.dashed ? ' dashed' : '')} />)}
        {spec.polylines?.map((p, i) => <polyline key={i} className="curve thin" points={p.pts.map(([x, y]) => `${sx(x)},${sy(y)}`).join(' ')} />)}
        {spec.points?.map((p, i) => (
          <g key={i} className="pt">
            <circle cx={sx(p.x)} cy={sy(p.y)} r={4} />
            {p.label && <text x={sx(p.x) + 6} y={sy(p.y) - 6}>{p.label}</text>}
          </g>
        ))}
      </svg>
      {spec.curves?.some((c) => c.label) && <figcaption>{spec.curves.filter((c) => c.label).map((c) => c.label).join(' · ')}</figcaption>}
    </figure>
  );
}

function integerTicks(a: number, b: number): number[] {
  const span = b - a;
  const step = span > 20 ? 5 : span > 10 ? 2 : 1;
  const out: number[] = [];
  for (let t = Math.ceil(a / step) * step; t <= b; t += step) out.push(t);
  return out;
}

/* ----------------------------------------------------------------- Table */

function Table({ spec }: { spec: Extract<VisualSpec, { kind: 'table' }> }) {
  return (
    <figure className="vis vis-table">
      {spec.title && <figcaption className="table-title">{spec.title}</figcaption>}
      <table>
        {spec.headers && <thead><tr>{spec.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>}
        <tbody>
          {spec.rows.map((r, i) => (
            <tr key={i} className={[spec.totals?.includes(i) ? 'total' : '', spec.highlight?.includes(i) ? 'hl' : ''].join(' ')}>
              {r.map((c, j) => <td key={j} className={typeof c === 'number' || /^\(?[\d,.]+\)?$/.test(String(c)) ? 'num' : ''}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      {spec.note && <p className="vis-note">{spec.note}</p>}
    </figure>
  );
}

/* ------------------------------------------------------------- Structure */

function Structure({ spec }: { spec: Extract<VisualSpec, { kind: 'structure' }> }) {
  const S = 52, PAD = 26;
  const xs = spec.atoms.map((a) => a.x), ys = spec.atoms.map((a) => a.y);
  const minX = Math.min(...xs), minY = Math.min(...ys);
  const W = (Math.max(...xs) - minX) * S + PAD * 2, H = (Math.max(...ys) - minY) * S + PAD * 2;
  const px = (x: number) => (x - minX) * S + PAD;
  const py = (y: number) => (y - minY) * S + PAD;

  return (
    <figure className="vis vis-structure">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={spec.caption ?? 'structural formula'} style={{ maxWidth: Math.min(320, W * 1.4) }}>
        {spec.bonds.map((b, i) => {
          const A = spec.atoms[b.a], B = spec.atoms[b.b];
          const x1 = px(A.x), y1 = py(A.y), x2 = px(B.x), y2 = py(B.y);
          const len = Math.hypot(x2 - x1, y2 - y1) || 1;
          const nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
          const order = b.order ?? 1;
          const offsets = order === 1 ? [0] : order === 2 ? [-3, 3] : [-5, 0, 5];
          return offsets.map((o, k) => (
            <line key={`${i}-${k}`} className="bond" x1={x1 + nx * o} y1={y1 + ny * o} x2={x2 + nx * o} y2={y2 + ny * o} />
          ));
        })}
        {spec.atoms.map((a, i) => (
          <g key={i} className={'atom atom-' + a.el}>
            <circle cx={px(a.x)} cy={py(a.y)} r={11} />
            <text x={px(a.x)} y={py(a.y) + 5} textAnchor="middle">{a.el}</text>
          </g>
        ))}
      </svg>
      {spec.caption && <figcaption>{spec.caption}</figcaption>}
    </figure>
  );
}

/* ------------------------------------------------------------------ Bars */

function Bars({ spec }: { spec: Extract<VisualSpec, { kind: 'bars' }> }) {
  const max = Math.max(...spec.bars.map((b) => Math.abs(b.value)), 1);
  return (
    <figure className="vis vis-bars">
      {spec.title && <figcaption className="table-title">{spec.title}</figcaption>}
      {spec.bars.map((b, i) => (
        <div key={i} className="bar-row">
          <span className="bar-label">{b.label}</span>
          <span className="bar-track"><span className="bar-fill" style={{ width: `${(Math.abs(b.value) / max) * 100}%` }} /></span>
          <span className="bar-val">{b.value}{spec.unit ?? ''}</span>
        </div>
      ))}
    </figure>
  );
}
