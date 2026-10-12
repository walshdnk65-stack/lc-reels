import { define } from './define';

/* More original practice material for LC Mathematics. */
export const maths2 = define({}, [
  {
    id: 'ma-030', type: 'mcq', objective: 'maths.algebra.inequalities.linear', difficulty: 1,
    question: 'Solve 3x − 7 < 11, x ∈ ℝ',
    options: [
      { text: 'x < 6', correct: true },
      { text: 'x > 6', why: 'You only flip the sign when multiplying or dividing by a negative number.' },
      { text: 'x < 4/3', why: 'Add 7 to both sides first: 3x < 18.' },
      { text: 'x < 18', why: 'Remember to divide by 3.' }
    ],
    explain: '3x − 7 < 11 → 3x < 18 → x < 6.'
  },
  {
    id: 'ma-031', type: 'flashcard', objective: 'maths.algebra.indiceslogs.laws',
    front: 'The laws of indices', back: 'aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1\na⁻ⁿ = 1/aⁿ\na^(1/n) = ⁿ√a',
    explain: 'These are in the Formulae and Tables booklet. A fractional power a^(p/q) means: take the qth root, then raise it to the power p.'
  },
  {
    id: 'ma-032', type: 'mcq', objective: 'maths.algebra.indiceslogs.laws', difficulty: 2,
    question: 'Evaluate 8^(2/3)',
    options: [
      { text: '4', correct: true },
      { text: '16/3', why: 'A fractional index is not multiplication: 8 × 2/3 ≠ 8^(2/3).' },
      { text: '2', why: '2 is the cube root of 8. You still need to square it.' },
      { text: '64', why: '64 is 8². You need the cube root as well.' }
    ],
    explain: '8^(2/3) = (∛8)² = 2² = 4.'
  },
  {
    id: 'ma-033', type: 'mcq', objective: 'maths.algebra.indiceslogs.logs', level: 'HL', difficulty: 2,
    question: 'Solve 2ˣ = 20, correct to two decimal places.',
    options: [
      { text: 'x ≈ 4.32', correct: true },
      { text: 'x = 10', why: '2 × 10 = 20, but 2¹⁰ = 1024.' },
      { text: 'x ≈ 1.30', why: 'That is log₁₀ 20 alone. Divide by log₁₀ 2.' },
      { text: 'x ≈ 3.00', why: '2³ = 8, which is too small.' }
    ],
    explain: 'Take logs of both sides: x·log 2 = log 20, so x = log 20 / log 2 ≈ 1.3010 / 0.3010 ≈ 4.32.'
  },
  {
    id: 'ma-034', type: 'worked', objective: 'maths.algebra.equations.linear', difficulty: 1,
    title: 'Simultaneous equations',
    problem: 'Solve: 2x + y = 7 and x − y = 2',
    steps: [
      { body: 'Add the equations: (2x + y) + (x − y) = 7 + 2 → **3x = 9**', why: 'The y terms cancel, so adding eliminates y.' },
      { body: 'x = 3', why: 'Divide both sides by 3.' },
      { body: 'Substitute into x − y = 2: 3 − y = 2 → **y = 1**', why: 'Use whichever equation is simpler.' },
      { body: 'Check in the other equation: 2(3) + 1 = 7 ✓', why: 'A quick check catches arithmetic slips.' }
    ],
    answer: 'x = 3, y = 1'
  },
  {
    id: 'ma-035', type: 'mcq', objective: 'maths.number.sequences.arith', difficulty: 1,
    question: 'Find T₂₀ of the arithmetic sequence 5, 9, 13, 17, …',
    options: [
      { text: '81', correct: true },
      { text: '85', why: 'Use (n − 1)d: that is 19 lots of 4, not 20.' },
      { text: '80', why: 'Check: a + (n − 1)d = 5 + 19 × 4.' },
      { text: '100', why: 'That is 20 × 5. The terms go up by 4 each time.' }
    ],
    explain: 'a = 5, d = 4. T₂₀ = 5 + 19(4) = 81.'
  },
  {
    id: 'ma-036', type: 'mcq', objective: 'maths.number.sequences.arith', difficulty: 2,
    question: 'Find the sum of the first 10 terms of 3 + 7 + 11 + …',
    options: [
      { text: '210', correct: true },
      { text: '39', why: '39 is T₁₀, the 10th term, not the sum.' },
      { text: '420', why: 'Remember the n/2 at the front of the formula.' },
      { text: '190', why: 'Check: 2a = 6 and (n − 1)d = 36.' }
    ],
    explain: 'Sₙ = n/2[2a + (n − 1)d] = 10/2[6 + 9(4)] = 5 × 42 = 210.'
  },
  {
    id: 'ma-037', type: 'mcq', objective: 'maths.number.sequences.geom', level: 'HL', difficulty: 2,
    question: 'Find the sum to infinity of 12 + 6 + 3 + 1.5 + …',
    options: [
      { text: '24', correct: true },
      { text: '22.5', why: 'That is only the sum of the first four terms.' },
      { text: '8', why: 'S∞ = a/(1 − r) with r = ½, so 1 − r = ½.' },
      { text: 'No finite sum', why: '|r| = ½ < 1, so the series converges.' }
    ],
    explain: 'a = 12, r = ½. S∞ = 12 / (1 − ½) = 24.'
  },
  {
    id: 'ma-038', type: 'mcq', objective: 'maths.number.complex.ops', difficulty: 2,
    question: 'If z = 3 − 2i, find z·z̄ (z times its conjugate).',
    options: [
      { text: '13', correct: true },
      { text: '9 − 4i', why: 'z̄ = 3 + 2i, and the i terms cancel when you multiply.' },
      { text: '5', why: 'Check: 3² + 2² = 9 + 4.' },
      { text: '9 + 4 i²', why: 'Simplify: i² = −1, and the product is real.' }
    ],
    explain: '(3 − 2i)(3 + 2i) = 9 + 6i − 6i − 4i² = 9 + 4 = 13. A number times its conjugate is always real and equals |z|².'
  },
  {
    id: 'ma-039', type: 'mcq', objective: 'maths.number.complex.polar', level: 'HL', difficulty: 3,
    question: 'Write z = 1 + i in polar form.',
    options: [
      { text: '√2 (cos π/4 + i sin π/4)', correct: true },
      { text: '2 (cos π/4 + i sin π/4)', why: '|z| = √(1² + 1²) = √2, not 2.' },
      { text: '√2 (cos π/2 + i sin π/2)', why: 'The argument is tan⁻¹(1/1) = π/4.' },
      { text: '√2 (cos π/4 − i sin π/4)', why: 'That is 1 − i, the conjugate.' }
    ],
    explain: 'r = |z| = √2 and θ = tan⁻¹(1) = π/4, since z is in the first quadrant.'
  },
  {
    id: 'ma-040', type: 'flashcard', objective: 'maths.calc.diff.first',
    front: 'The derivative from first principles', back: 'f′(x) = lim (h → 0) [f(x + h) − f(x)] / h',
    explain: 'Expand f(x + h), cancel f(x), divide every term by h, then let h → 0.'
  },
  {
    id: 'ma-041', type: 'worked', objective: 'maths.calc.apps.tangent', difficulty: 2,
    title: 'Equation of a tangent',
    problem: 'Find the equation of the tangent to y = x² − 3x at the point where x = 4.',
    steps: [
      { body: 'dy/dx = 2x − 3', why: 'The derivative gives the slope at any point.' },
      { body: 'At x = 4: m = 2(4) − 3 = **5**', why: 'This is the slope of the tangent.' },
      { body: 'y = 16 − 12 = **4**, so the point is (4, 4)', why: 'Use the original function to get y, not the derivative.' },
      { body: 'y − 4 = 5(x − 4)', why: 'Use y − y₁ = m(x − x₁).' }
    ],
    answer: 'y = 5x − 16',
    visual: { kind: 'graph', xRange: [-1, 6], yRange: [-4, 12], curves: [{ f: (x) => x * x - 3 * x, label: 'y = x² − 3x' }, { f: (x) => 5 * x - 16, dashed: true, label: 'y = 5x − 16' }], points: [{ x: 4, y: 4, label: '(4, 4)' }] }
  },
  {
    id: 'ma-042', type: 'mcq', objective: 'maths.stats.data.measures', difficulty: 1,
    question: 'For the data 2, 4, 4, 5, 10, which statement is true?',
    options: [
      { text: 'Mean 5, median 4, mode 4', correct: true },
      { text: 'Mean 4, median 4, mode 4', why: 'Mean = 25 ÷ 5 = 5.' },
      { text: 'Mean 5, median 5, mode 4', why: 'The median is the middle value of the ordered list: 4.' },
      { text: 'Mean 5, median 4, mode 10', why: 'The mode is the most frequent value.' }
    ],
    explain: 'The outlier (10) pulls the mean above the median. That is why the median is often a better “typical” value for skewed data.'
  },
  {
    id: 'ma-043', type: 'flashcard', objective: 'maths.stats.data.correlation',
    front: 'Correlation coefficient r: what do its values mean?', back: 'r is between −1 and 1.\nClose to +1: strong positive linear relationship\nClose to −1: strong negative\nClose to 0: little or no linear relationship',
    explain: 'Correlation does not prove causation. Two variables can both be driven by a third.'
  },
  {
    id: 'ma-044', type: 'mcq', objective: 'maths.stats.prob.rules', difficulty: 1,
    question: 'Two fair dice are thrown. What is the probability that the total is 7?',
    options: [
      { text: '1/6', correct: true },
      { text: '7/36', why: 'List the pairs: (1,6) (2,5) (3,4) (4,3) (5,2) (6,1) = 6 outcomes.' },
      { text: '1/12', why: 'There are 6 favourable outcomes out of 36, not 3.' },
      { text: '1/11', why: 'Totals from 2 to 12 are not equally likely.' }
    ],
    explain: '6 favourable outcomes ÷ 36 equally likely outcomes = 1/6. A two-way table makes this quick.'
  },
  {
    id: 'ma-045', type: 'mcq', objective: 'maths.stats.prob.binomial', level: 'HL', difficulty: 2,
    question: 'A fair coin is tossed 4 times. What is the probability of exactly 2 heads?',
    options: [
      { text: '3/8', correct: true },
      { text: '1/2', why: 'There are 6 ways to get exactly 2 heads out of 16 outcomes.' },
      { text: '1/16', why: 'That is the probability of one particular sequence, e.g. HHTT.' },
      { text: '1/4', why: 'Use ⁴C₂ = 6, not 4.' }
    ],
    explain: 'P(X = 2) = ⁴C₂ (½)² (½)² = 6/16 = 3/8.'
  },
  {
    id: 'ma-046', type: 'mcq', objective: 'maths.geom.line.slope', difficulty: 2,
    question: 'Find the slope of the line 2x + 3y − 6 = 0',
    options: [
      { text: '−2/3', correct: true },
      { text: '2/3', why: 'Rearranging gives 3y = −2x + 6. Keep the minus sign.' },
      { text: '−3/2', why: 'That is the perpendicular slope.' },
      { text: '2', why: 'Divide by the coefficient of y.' }
    ],
    explain: 'Write it as y = mx + c: y = −(2/3)x + 2. For ax + by + c = 0, the slope is −a/b.'
  },
  {
    id: 'ma-047', type: 'mcq', objective: 'maths.geom.line.slope', difficulty: 1,
    question: 'Find the distance between (1, 2) and (4, 6).',
    options: [
      { text: '5', correct: true },
      { text: '7', why: 'Don’t just add the differences. Use Pythagoras.' },
      { text: '25', why: 'That is the distance squared. Take the square root.' },
      { text: '√7', why: 'Square each difference: 3² + 4² = 25.' }
    ],
    explain: '√[(4 − 1)² + (6 − 2)²] = √(9 + 16) = 5.'
  },
  {
    id: 'ma-048', type: 'worked', objective: 'maths.geom.trig.rules', difficulty: 2,
    title: 'Using the sine rule',
    problem: 'In triangle ABC, a = 10, A = 30° and B = 45°. Find b, correct to two decimal places.',
    steps: [
      { body: 'b / sin B = a / sin A', why: 'You know a side and its opposite angle (a, A), so use the sine rule.' },
      { body: 'b = 10 × sin 45° / sin 30°', why: 'Rearrange to make b the subject.' },
      { body: 'b = 10 × 0.7071… / 0.5', why: 'Make sure your calculator is in degrees.' }
    ],
    answer: 'b ≈ 14.14'
  },
  {
    id: 'ma-049', type: 'mcq', objective: 'maths.geom.trig.radians', difficulty: 2,
    question: 'A sector has radius 6 cm and angle π/3. What is its area?',
    options: [
      { text: '6π cm²', correct: true },
      { text: '2π cm²', why: 'That is the arc length (rθ), in cm.' },
      { text: '12π cm²', why: 'Remember the ½ in A = ½r²θ.' },
      { text: '36π cm²', why: 'That is the area of the whole circle.' }
    ],
    explain: 'A = ½r²θ = ½ × 36 × π/3 = 6π cm². Check: π/3 is one-sixth of a full turn, and one-sixth of 36π is 6π.'
  },
  {
    id: 'ma-050', type: 'mcq', objective: 'maths.geom.trig.equations', level: 'HL', difficulty: 2,
    question: 'Solve sin x = ½ for 0° ≤ x ≤ 360°',
    options: [
      { text: 'x = 30° or 150°', correct: true },
      { text: 'x = 30° only', why: 'Sine is also positive in the second quadrant.' },
      { text: 'x = 30° or 330°', why: 'Sine is negative in the fourth quadrant.' },
      { text: 'x = 60° or 120°', why: 'That solves sin x = √3/2.' }
    ],
    explain: 'Reference angle 30°. Sine is positive in quadrants 1 and 2: 30° and 180° − 30° = 150°.'
  },
  {
    id: 'ma-051', type: 'mcq', objective: 'maths.calc.integ.basic', level: 'HL', difficulty: 1,
    question: 'Find ∫(4x³ + 2x) dx',
    options: [
      { text: 'x⁴ + x² + c', correct: true },
      { text: '12x² + 2', why: 'That is the derivative, not the integral.' },
      { text: 'x⁴ + x²', why: 'An indefinite integral needs + c.' },
      { text: '4x⁴ + 2x² + c', why: 'Divide by the new power: 4x⁴/4 = x⁴.' }
    ],
    explain: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + c. So 4x³ → x⁴ and 2x → x².'
  },
  {
    id: 'ma-052', type: 'mcq', objective: 'maths.calc.functions.inverse', level: 'HL', difficulty: 2,
    question: 'f(x) = 2x + 3. Find f⁻¹(x).',
    options: [
      { text: '(x − 3)/2', correct: true },
      { text: '1/(2x + 3)', why: 'f⁻¹ means the inverse function, not the reciprocal.' },
      { text: '(x + 3)/2', why: 'Undo “add 3” by subtracting 3.' },
      { text: '2x − 3', why: 'Undo the operations in reverse order: subtract 3, then divide by 2.' }
    ],
    explain: 'Let y = 2x + 3, swap x and y: x = 2y + 3, so y = (x − 3)/2.'
  },
]);
