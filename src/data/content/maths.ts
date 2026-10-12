import { define } from './define';

/* Original practice material based on the LC Mathematics syllabus. */
export const maths = define({}, [
  {
    id: 'ma-001', type: 'explainer', objective: 'maths.algebra.equations.quad',
    title: 'The quadratic formula',
    body: 'For any equation ax² + bx + c = 0, the roots are\n\n**x = (−b ± √(b² − 4ac)) / 2a**\n\nThe part under the root, **b² − 4ac**, is the *discriminant*. It tells you how many real roots there are before you solve anything.',
    bullets: ['b² − 4ac > 0 → two real roots', 'b² − 4ac = 0 → one repeated root', 'b² − 4ac < 0 → no real roots'],
    check: {
      question: 'x² + 2x + 5 = 0 has how many real roots?',
      options: [{ text: 'Two' }, { text: 'One' }, { text: 'None', correct: true }],
      explain: 'b² − 4ac = 4 − 20 = −16 < 0, so there are no real roots.'
    },
    sourceNote: 'The formula is in the official Formulae and Tables booklet.'
  },
  {
    id: 'ma-002', type: 'mcq', objective: 'maths.algebra.equations.quad', difficulty: 1,
    question: 'Solve x² − 5x + 6 = 0',
    options: [
      { text: 'x = 2 or x = 3', correct: true },
      { text: 'x = −2 or x = −3', why: 'Check: (−2)² − 5(−2) + 6 = 20, not 0. The signs inside the brackets are (x − 2)(x − 3).' },
      { text: 'x = 1 or x = 6', why: '1 × 6 = 6, but 1 + 6 = 7, not 5.' },
      { text: 'x = −1 or x = 6', why: 'This would come from x² − 5x − 6.' }
    ],
    explain: 'Find two numbers that multiply to +6 and add to −5: −2 and −3. So (x − 2)(x − 3) = 0, giving x = 2 or x = 3.'
  },
  {
    id: 'ma-003', type: 'worked', objective: 'maths.algebra.equations.quad', difficulty: 2,
    title: 'Factorising when a ≠ 1',
    problem: 'Solve 2x² + 3x − 2 = 0',
    steps: [
      { body: 'Multiply a × c: 2 × (−2) = −4. Find two numbers that multiply to −4 and add to +3: **+4 and −1**.', why: 'This is the “ac method”. It splits the middle term so you can factor by grouping.' },
      { body: '2x² + 4x − x − 2 = 0  →  2x(x + 2) − 1(x + 2) = 0', why: 'Grouping pairs of terms reveals the common bracket.' },
      { body: '(2x − 1)(x + 2) = 0', why: 'Take out the common factor (x + 2).' },
      { body: '2x − 1 = 0 or x + 2 = 0', why: 'If a product is zero, one of the factors must be zero.' }
    ],
    answer: 'x = ½ or x = −2'
  },
  {
    id: 'ma-004', type: 'cloze', objective: 'maths.algebra.cubics.factor', level: 'HL',
    prompt: 'The factor theorem',
    text: '(x − k) is a factor of f(x) if and only if f({{k}}) = {{0}}.',
    explain: 'So to test whether (x − 2) is a factor, substitute x = 2. If the answer is 0, it is a factor.'
  },
  {
    id: 'ma-005', type: 'worked', objective: 'maths.algebra.cubics.factor', level: 'HL', difficulty: 2,
    title: 'Solving a cubic',
    problem: 'Solve x³ − 6x² + 11x − 6 = 0',
    steps: [
      { body: 'Try x = 1: 1 − 6 + 11 − 6 = **0** ✓, so (x − 1) is a factor.', why: 'Try factors of the constant term (±1, ±2, ±3, ±6) first.' },
      { body: 'Divide: (x³ − 6x² + 11x − 6) ÷ (x − 1) = x² − 5x + 6', why: 'Use long division or compare coefficients.' },
      { body: 'x² − 5x + 6 = (x − 2)(x − 3)', why: 'Factorise the remaining quadratic.' }
    ],
    answer: 'x = 1, x = 2 or x = 3',
    visual: { kind: 'graph', xRange: [-0.5, 4], yRange: [-3, 3], curves: [{ f: (x) => x ** 3 - 6 * x ** 2 + 11 * x - 6, label: 'y = x³ − 6x² + 11x − 6' }], points: [{ x: 1, y: 0, label: '1' }, { x: 2, y: 0, label: '2' }, { x: 3, y: 0, label: '3' }] }
  },
  {
    id: 'ma-006', type: 'flashcard', objective: 'maths.calc.diff.rules', difficulty: 1,
    front: 'Differentiate xⁿ', back: 'nxⁿ⁻¹',
    explain: 'Bring the power down in front, then reduce the power by one. For example, d/dx (x⁵) = 5x⁴.'
  },
  {
    id: 'ma-007', type: 'flashcard', objective: 'maths.calc.diff.rules',
    front: 'The product rule\n\ny = uv', back: 'dy/dx = u·(dv/dx) + v·(du/dx)',
    explain: 'Use it when two functions of x are multiplied, e.g. y = x²·sin x.'
  },
  {
    id: 'ma-008', type: 'flashcard', objective: 'maths.calc.diff.rules',
    front: 'The quotient rule\n\ny = u / v', back: 'dy/dx = (v·du/dx − u·dv/dx) / v²',
    explain: 'The order matters: v first in the numerator. Both rules are in the Formulae and Tables booklet.'
  },
  {
    id: 'ma-009', type: 'mcq', objective: 'maths.calc.diff.rules', difficulty: 1,
    question: 'If f(x) = 3x⁴ − 2x + 7, find f′(x).',
    options: [
      { text: '12x³ − 2', correct: true },
      { text: '12x³ − 2 + 7', why: 'The derivative of a constant is 0.' },
      { text: '3x³ − 2', why: 'Multiply by the power: 3 × 4 = 12.' },
      { text: '12x⁵ − 2x', why: 'Reduce the power by one, don’t increase it.' }
    ],
    explain: 'Differentiate term by term: 3·4x³ = 12x³, −2x → −2, and 7 → 0.'
  },
  {
    id: 'ma-010', type: 'mcq', objective: 'maths.calc.diff.rules', difficulty: 2,
    question: 'Differentiate y = (2x + 1)⁵',
    options: [
      { text: '10(2x + 1)⁴', correct: true },
      { text: '5(2x + 1)⁴', why: 'You forgot to multiply by the derivative of the inside, which is 2.' },
      { text: '10x(2x + 1)⁴', why: 'The derivative of 2x + 1 is 2, not 2x.' },
      { text: '(2x + 1)⁴', why: 'Use the chain rule: power × bracket^(n−1) × derivative of inside.' }
    ],
    explain: 'Chain rule: 5(2x + 1)⁴ × 2 = 10(2x + 1)⁴.'
  },
  {
    id: 'ma-011', type: 'worked', objective: 'maths.calc.apps.maxmin', difficulty: 2,
    title: 'Finding turning points',
    problem: 'Find the turning points of y = x³ − 3x + 1 and say whether each is a maximum or a minimum.',
    steps: [
      { body: 'dy/dx = 3x² − 3', why: 'Turning points occur where the slope is zero.' },
      { body: '3x² − 3 = 0 → x² = 1 → x = 1 or x = −1', why: 'Set the derivative equal to zero and solve.' },
      { body: 'y(1) = 1 − 3 + 1 = −1;  y(−1) = −1 + 3 + 1 = 3', why: 'Substitute back into the original function to get the y-coordinates.' },
      { body: 'd²y/dx² = 6x. At x = 1: 6 > 0 → **minimum**. At x = −1: −6 < 0 → **maximum**.', why: 'A positive second derivative means the curve is concave up (a valley).' }
    ],
    answer: 'Maximum at (−1, 3), minimum at (1, −1)',
    visual: { kind: 'graph', xRange: [-2.5, 2.5], yRange: [-3, 5], curves: [{ f: (x) => x ** 3 - 3 * x + 1, label: 'y = x³ − 3x + 1' }], points: [{ x: -1, y: 3, label: 'max (−1, 3)' }, { x: 1, y: -1, label: 'min (1, −1)' }] }
  },
  {
    id: 'ma-012', type: 'mcq', objective: 'maths.calc.integ.area', level: 'HL', difficulty: 2,
    question: 'Evaluate ∫₀² 3x² dx',
    options: [
      { text: '8', correct: true },
      { text: '12', why: '12 is the value of 3x² at x = 2. You need to integrate first.' },
      { text: '6', why: 'Check the integral: ∫3x² dx = x³.' },
      { text: '24', why: 'You may have multiplied by the power instead of dividing.' }
    ],
    explain: '∫3x² dx = x³. Then [x³] from 0 to 2 = 8 − 0 = 8.',
    visual: { kind: 'graph', xRange: [-0.5, 2.5], yRange: [-1, 13], curves: [{ f: (x) => 3 * x * x, label: 'y = 3x²' }] }
  },
  {
    id: 'ma-013', type: 'explainer', objective: 'maths.number.complex.argand',
    title: 'Complex numbers on the Argand diagram',
    body: 'A complex number z = a + bi is plotted as the point (a, b): the real part across, the imaginary part up.\n\nIts **modulus** |z| is its distance from the origin: **|a + bi| = √(a² + b²)**.\n\nRemember that **i² = −1**.',
    visual: { kind: 'graph', xRange: [-1, 5], yRange: [-1, 5], points: [{ x: 3, y: 4, label: '3 + 4i' }], polylines: [{ pts: [[0, 0], [3, 4]] }], xLabel: 'Re', yLabel: 'Im' },
    check: {
      question: '|3 + 4i| = ?',
      options: [{ text: '7' }, { text: '5', correct: true }, { text: '25' }],
      explain: '√(3² + 4²) = √25 = 5.'
    }
  },
  {
    id: 'ma-014', type: 'mcq', objective: 'maths.number.complex.ops', difficulty: 2,
    question: 'Simplify (2 + 3i)(1 − i)',
    options: [
      { text: '5 + i', correct: true },
      { text: '−1 + i', why: 'Remember −3i² = +3, because i² = −1.' },
      { text: '2 − 3i', why: 'Multiply every term in the first bracket by every term in the second.' },
      { text: '5 − i', why: 'Check the i terms: −2i + 3i = +i.' }
    ],
    explain: '2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i.'
  },
  {
    id: 'ma-015', type: 'flashcard', objective: 'maths.number.sequences.arith',
    front: 'Arithmetic sequence\n\nnth term and sum of n terms?', back: 'Tₙ = a + (n − 1)d\n\nSₙ = n/2 [2a + (n − 1)d]',
    explain: 'a is the first term and d is the common difference. Both formulae are in the Formulae and Tables booklet.'
  },
  {
    id: 'ma-016', type: 'cloze', objective: 'maths.number.sequences.geom', level: 'HL',
    prompt: 'Sum to infinity of a geometric series',
    text: 'S∞ = a / (1 − {{r}}), valid only when |r| < {{1}}.',
    explain: 'If |r| ≥ 1 the terms don’t shrink, so the series has no finite sum.'
  },
  {
    id: 'ma-017', type: 'worked', objective: 'maths.number.financial.compound', difficulty: 2,
    title: 'Compound interest',
    problem: '€5,000 is invested at 3% per annum compound interest. Find its value after 4 years, to the nearest cent.',
    steps: [
      { body: 'F = P(1 + i)ᵗ', why: 'This compound interest formula is in the Formulae and Tables booklet. i is the rate as a decimal.' },
      { body: 'F = 5000(1.03)⁴', why: 'P = 5000, i = 0.03, t = 4.' },
      { body: '(1.03)⁴ = 1.12550881', why: 'Keep the full calculator value. Rounding early loses marks.' },
      { body: 'F = 5000 × 1.12550881 = 5627.544…', why: 'Round only at the final step.' }
    ],
    answer: '€5,627.54'
  },
  {
    id: 'ma-018', type: 'mcq', objective: 'maths.number.financial.compound', difficulty: 2,
    question: 'A machine costing €20,000 depreciates at 15% per year (reducing balance). What is its value after 2 years?',
    options: [
      { text: '€14,450', correct: true },
      { text: '€14,000', why: 'That is straight-line depreciation (15% of the original cost each year).' },
      { text: '€17,000', why: 'That is the value after only one year.' },
      { text: '€26,450', why: 'Depreciation reduces value, so use (1 − 0.15), not (1 + 0.15).' }
    ],
    explain: 'F = P(1 − i)ᵗ = 20000 × 0.85² = 20000 × 0.7225 = €14,450.'
  },
  {
    id: 'ma-019', type: 'mcq', objective: 'maths.stats.prob.rules', difficulty: 1,
    question: 'P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. Find P(A ∪ B).',
    options: [
      { text: '0.7', correct: true },
      { text: '0.9', why: 'You need to subtract the overlap, or it is counted twice.' },
      { text: '0.2', why: 'That is P(A and B), not P(A or B).' },
      { text: '1.1', why: 'A probability can never exceed 1.' }
    ],
    explain: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.5 + 0.4 − 0.2 = 0.7.'
  },
  {
    id: 'ma-020', type: 'mcq', objective: 'maths.stats.prob.expected', difficulty: 2,
    question: 'In a game you win €10 with probability 0.2, otherwise you lose €3. What is the expected value per game?',
    options: [
      { text: '−€0.40', correct: true },
      { text: '€7', why: 'Weight each outcome by its probability.' },
      { text: '€2', why: 'That only counts the winning outcome: 10 × 0.2.' },
      { text: '€0.40', why: 'Losing €3 counts as −3, so check the sign.' }
    ],
    explain: 'E(X) = 10(0.2) + (−3)(0.8) = 2 − 2.4 = −0.4. On average you lose 40c a game, so the game is not fair.'
  },
  {
    id: 'ma-021', type: 'mcq', objective: 'maths.stats.prob.counting', difficulty: 1,
    question: 'How many ways can a committee of 3 be chosen from 7 people?',
    options: [
      { text: '35', correct: true },
      { text: '210', why: '210 = 7 × 6 × 5 counts ordered arrangements. Order doesn’t matter in a committee.' },
      { text: '21', why: 'That is ⁷C₂.' },
      { text: '5040', why: 'That is 7!, which counts arrangements of all 7 people.' }
    ],
    explain: 'Order does not matter, so use ⁷C₃ = 7! / (3!·4!) = 35.'
  },
  {
    id: 'ma-022', type: 'flashcard', objective: 'maths.geom.line.slope',
    front: 'Slope of a line through (x₁, y₁) and (x₂, y₂)\n\nand the condition for perpendicular lines?', back: 'm = (y₂ − y₁) / (x₂ − x₁)\n\nPerpendicular: m₁ × m₂ = −1',
    explain: 'Parallel lines have equal slopes. A perpendicular slope is the negative reciprocal, e.g. 2/3 → −3/2.'
  },
  {
    id: 'ma-023', type: 'mcq', objective: 'maths.geom.circle.eqn', difficulty: 2,
    question: 'Find the centre and radius of x² + y² − 4x + 6y − 12 = 0',
    options: [
      { text: 'Centre (2, −3), radius 5', correct: true },
      { text: 'Centre (−2, 3), radius 5', why: 'The centre is (−g, −f). Here 2g = −4 gives g = −2, so the centre’s x-coordinate is +2.' },
      { text: 'Centre (2, −3), radius √12', why: 'r = √(g² + f² − c) = √(4 + 9 + 12).' },
      { text: 'Centre (4, −6), radius 12', why: 'Halve the coefficients of x and y to get g and f.' }
    ],
    explain: 'Compare with x² + y² + 2gx + 2fy + c = 0: g = −2, f = 3, c = −12. Centre (−g, −f) = (2, −3), and r = √(4 + 9 + 12) = 5.'
  },
  {
    id: 'ma-024', type: 'flashcard', objective: 'maths.geom.trig.rules',
    front: 'Sine rule, cosine rule and area of a triangle', back: 'a/sin A = b/sin B = c/sin C\n\na² = b² + c² − 2bc cos A\n\nArea = ½ab sin C',
    explain: 'Use the sine rule when you know a side and its opposite angle. Use the cosine rule for two sides and the included angle, or for three sides.'
  },
  {
    id: 'ma-025', type: 'flashcard', objective: 'maths.geom.trig.radians',
    front: 'π radians = ? degrees\n\nArc length and sector area?', back: 'π rad = 180°\n\nl = rθ,  A = ½r²θ  (θ in radians)',
    explain: 'If θ is in degrees, use l = (θ/360)·2πr instead.'
  },
  {
    id: 'ma-026', type: 'mcq', objective: 'maths.stats.inference.normal', level: 'HL', difficulty: 2,
    question: 'Test scores are normally distributed with μ = 60 and σ = 8. What is the z-score of a mark of 72?',
    options: [
      { text: '1.5', correct: true },
      { text: '12', why: '12 is the difference from the mean. Divide it by σ.' },
      { text: '−1.5', why: '72 is above the mean, so z is positive.' },
      { text: '0.9332', why: 'That is P(Z < 1.5), from the tables. The z-score itself is 1.5.' }
    ],
    explain: 'z = (x − μ)/σ = (72 − 60)/8 = 1.5.'
  },
  {
    id: 'ma-027', type: 'short', objective: 'maths.number.induction.series', level: 'HL',
    question: 'List the steps of a proof by induction.',
    model: '1. Prove the statement is true for the first value (usually n = 1).\n2. Assume it is true for n = k.\n3. Use that assumption to prove it is true for n = k + 1.\n4. Conclude that it is true for all n ≥ 1 by induction.',
    keyPoints: [
      { point: 'Base case: true for n = 1', keywords: ['n=1', 'n = 1', 'base', 'first'] },
      { point: 'Assume true for n = k', keywords: ['assume', 'n=k', 'n = k'] },
      { point: 'Prove for n = k + 1', keywords: ['k+1', 'k + 1'] },
      { point: 'Conclusion', keywords: ['conclu', 'all n', 'therefore', 'hence'] }
    ]
  },
  {
    id: 'ma-028', type: 'flashcard', objective: 'maths.calc.functions.domain',
    front: 'What are the roots of y = x² − 4?\n(Read them off the graph.)', back: 'x = −2 and x = 2',
    explain: 'The roots are where the graph crosses the x-axis (y = 0). Check: x² − 4 = (x − 2)(x + 2).',
    visual: { kind: 'graph', xRange: [-4, 4], yRange: [-5, 6], curves: [{ f: (x) => x * x - 4, label: 'y = x² − 4' }] }
  },
  {
    id: 'ma-029', type: 'technique', objective: 'maths.calc.diff.rules', provenance: 'exam-advice',
    title: 'Picking up marks in Maths',
    intro: 'Marking schemes give partial credit for correct work, even when the final answer is wrong.',
    dos: ['Show every step, because a correct method earns marks', 'Keep full calculator values until the last line', 'Use the Formulae and Tables booklet and quote the formula you use', 'Attempt every part. A blank earns nothing.'],
    donts: ['Don’t round mid-way through a calculation', 'Don’t scribble out work unless you replace it', 'Don’t forget units and the “nearest cent” or “2 d.p.” instruction'],
  },
]);
