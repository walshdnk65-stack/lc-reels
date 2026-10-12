import { define } from './define';
import { fc, mc, cz } from './helpers';

/* Third batch of original practice material for LC Mathematics. */
const HL = { level: 'HL' as const };

export const maths3 = define({}, [
  fc('ma-100', 'maths.algebra.expressions.factorise', 'Difference of two squares', 'a² − b² = (a − b)(a + b)', 'Spot it whenever you see a square minus a square: x² − 49 = (x − 7)(x + 7); 4x² − 25 = (2x − 5)(2x + 5).'),
  mc('ma-101', 'maths.algebra.expressions.factorise', 'Factorise 4x² − 25', '(2x − 5)(2x + 5)', [['(4x − 5)(x + 5)', 'Expand it: you get 4x² + 15x − 25.'], ['(2x − 5)²', 'That gives 4x² − 20x + 25.'], ['(2x − 25)(2x + 1)', 'Check by expanding. The middle terms must cancel.']], '4x² = (2x)² and 25 = 5², so this is a difference of two squares.'),
  mc('ma-102', 'maths.algebra.expressions.factorise', 'Factorise fully: 6x² + 9x', '3x(2x + 3)', [['3(2x² + 3x)', 'x is also a common factor. “Fully” means take out the HCF.'], ['x(6x + 9)', '3 is also a common factor.'], ['6x(x + 9)', 'Expanding gives 6x² + 54x.']], 'The highest common factor is 3x.'),
  mc('ma-103', 'maths.algebra.expressions.factorise', 'Expand (2x − 3)²', '4x² − 12x + 9', [['4x² + 9', 'You missed the middle term: (a − b)² = a² − 2ab + b².'], ['4x² − 6x + 9', 'The middle term is 2 × 2x × 3 = 12x.'], ['2x² − 12x + 9', '(2x)² = 4x², not 2x².']], '(2x − 3)(2x − 3) = 4x² − 6x − 6x + 9 = 4x² − 12x + 9.'),
  mc('ma-104', 'maths.algebra.expressions.fractions', 'Simplify (x² − 9) / (x + 3)', 'x − 3', [['x − 9/3', 'You can only cancel factors, not individual terms.'], ['x + 3', 'Check the sign: x² − 9 = (x − 3)(x + 3).'], ['x² − 3', 'Factorise the top first.']], 'Factorise: (x − 3)(x + 3) / (x + 3) = x − 3.'),
  mc('ma-105', 'maths.algebra.expressions.fractions', 'Make t the subject of v = u + at', 't = (v − u) / a', [['t = v − u − a', 'a multiplies t, so divide by a.'], ['t = (v + u) / a', 'Subtract u from both sides, don’t add.'], ['t = a / (v − u)', 'That is the reciprocal.']], 'v − u = at, so t = (v − u)/a. Undo the operations in reverse order.'),
  mc('ma-106', 'maths.algebra.expressions.fractions', 'Write as a single fraction: 2/x + 3/(x + 1)', '(5x + 2) / (x(x + 1))', [['5 / (2x + 1)', 'You can’t add denominators.'], ['(5x + 3) / (x(x + 1))', 'Check: 2(x + 1) + 3x = 5x + 2.'], ['6 / (x(x + 1))', 'Cross-multiply each numerator by the other denominator.']], 'Common denominator x(x + 1): [2(x + 1) + 3x] / x(x + 1) = (5x + 2) / x(x + 1).'),
  cz('ma-107', 'maths.algebra.equations.linear', 'Solve 5(x − 2) = 3x + 4', 'x = {{7}}', undefined, '5x − 10 = 3x + 4 → 2x = 14 → x = 7. Check: 5(5) = 25 and 3(7) + 4 = 25 ✓'),
  mc('ma-108', 'maths.algebra.equations.quad', 'Solve 2x² − 7x + 3 = 0', 'x = ½ or x = 3', [['x = −½ or x = −3', 'The factors are (2x − 1)(x − 3), so the roots are positive.'], ['x = 1 or x = 3', 'Set 2x − 1 = 0 to get x = ½.'], ['x = 2 or x = 3', 'Check: 2(4) − 14 + 3 = −3, not 0.']], '(2x − 1)(x − 3) = 0 gives x = ½ or x = 3.'),
  {
    id: 'ma-109', type: 'worked', objective: 'maths.algebra.equations.quad', difficulty: 2,
    title: 'When it won’t factorise',
    problem: 'Solve x² − 4x − 1 = 0, giving your answer in surd form.',
    steps: [
      { body: 'a = 1, b = −4, c = −1', why: 'Read the coefficients carefully, signs included.' },
      { body: 'x = (4 ± √(16 + 4)) / 2 = (4 ± √20) / 2', why: 'b² − 4ac = 16 − 4(1)(−1) = 20.' },
      { body: '√20 = √4·√5 = 2√5', why: 'Simplify the surd.' },
      { body: 'x = (4 ± 2√5) / 2', why: 'Divide every term by 2.' }
    ],
    answer: 'x = 2 ± √5'
  },
  mc('ma-110', 'maths.algebra.equations.quad', 'Which quadratic equation has roots 3 and −5?', 'x² + 2x − 15 = 0', [['x² − 2x − 15 = 0', 'Its roots are 5 and −3.'], ['x² + 2x + 15 = 0', 'The constant is 3 × (−5) = −15.'], ['x² − 8x + 15 = 0', 'Its roots are 3 and 5.']], '(x − 3)(x + 5) = x² + 2x − 15. In general: x² − (sum of roots)x + (product of roots) = 0.'),
  {
    id: 'ma-111', type: 'worked', objective: 'maths.algebra.equations.simul', level: 'HL', difficulty: 3,
    title: 'One linear, one non-linear',
    problem: 'Solve: x + y = 5 and x² + y² = 13',
    steps: [
      { body: 'y = 5 − x', why: 'Make one variable the subject of the linear equation.' },
      { body: 'x² + (5 − x)² = 13 → 2x² − 10x + 25 = 13', why: 'Substitute into the non-linear equation and expand.' },
      { body: '2x² − 10x + 12 = 0 → x² − 5x + 6 = 0 → x = 2 or 3', why: 'Divide by 2, then factorise.' },
      { body: 'x = 2 → y = 3;  x = 3 → y = 2', why: 'Find the matching y for each x using the linear equation.' }
    ],
    answer: '(2, 3) and (3, 2)'
  },
  mc('ma-112', 'maths.algebra.inequalities.quadratic', 'Solve x² − x − 6 < 0', '−2 < x < 3', [['x < −2 or x > 3', 'That solves x² − x − 6 > 0.'], ['x < 3', 'The parabola is also positive for x < −2.'], ['−3 < x < 2', 'The roots are 3 and −2.']], '(x − 3)(x + 2) < 0. A positive (∪-shaped) parabola is below the x-axis between its roots.', HL),
  mc('ma-113', 'maths.algebra.inequalities.quadratic', 'Solve |x − 3| ≤ 2', '1 ≤ x ≤ 5', [['x ≤ 5', 'It also has a lower bound.'], ['−1 ≤ x ≤ 5', 'x − 3 ≥ −2 gives x ≥ 1.'], ['x ≤ 1 or x ≥ 5', 'That solves |x − 3| ≥ 2.']], '|x − 3| ≤ 2 means −2 ≤ x − 3 ≤ 2, so 1 ≤ x ≤ 5: within 2 of 3.', HL),
  mc('ma-114', 'maths.algebra.indiceslogs.logs', 'Evaluate log₃ 81', '4', [['27', '3 × 27 = 81, but logs count powers: 3⁴ = 81.'], ['3', '3³ = 27.'], ['1/4', 'That would be log₈₁ 3.']], 'log₃ 81 asks: “3 to what power gives 81?” The answer is 4.', HL),
  fc('ma-115', 'maths.algebra.indiceslogs.logs', 'The laws of logarithms', 'log(ab) = log a + log b\nlog(a/b) = log a − log b\nlog(aⁿ) = n log a\nlogₐ a = 1,  logₐ 1 = 0', 'They mirror the laws of indices, because a logarithm is an index. They are in the Formulae and Tables booklet.', HL),
  mc('ma-116', 'maths.algebra.indiceslogs.laws', 'Simplify (x³)² × x⁴ ÷ x⁵', 'x⁵', [['x⁸', '(x³)² = x⁶, not x⁵.'], ['x¹⁴', 'Subtract the power when dividing.'], ['x³', 'Check: 6 + 4 − 5 = 5.']], '(x³)² = x⁶; x⁶ × x⁴ = x¹⁰; x¹⁰ ÷ x⁵ = x⁵.'),
  mc('ma-117', 'maths.number.arith.percent', 'A jacket costs €200 before VAT. What is the price including VAT at 23%?', '€246', [['€223', '23% of 200 is 46, not 23.'], ['€154', 'VAT is added on, not taken off.'], ['€260', 'Check: 0.23 × 200 = 46.']], '200 × 1.23 = €246.'),
  mc('ma-118', 'maths.number.arith.percent', 'After a 20% discount a game costs €64. What was the original price?', '€80', [['€76.80', 'You took 20% off €64. Instead, €64 is 80% of the original.'], ['€84', 'You can’t just add 20 euro.'], ['€51.20', 'That is 80% of €64.']], '0.8 × original = 64, so original = 64 ÷ 0.8 = €80. Reverse percentages: divide, don’t add.'),
  mc('ma-119', 'maths.number.arith.percent', 'A length is estimated as 48 cm. The true value is 50 cm. Find the percentage error.', '4%', [['2%', 'The error is 2 cm. Express it as a percentage of the true value.'], ['4.17%', 'Divide by the true value (50), not the estimate.'], ['96%', 'That is the estimate as a percentage of the true value.']], '% error = (error ÷ true value) × 100 = 2/50 × 100 = 4%.'),
  {
    id: 'ma-120', type: 'worked', objective: 'maths.number.arith.percent', difficulty: 2,
    title: 'Income tax',
    problem: 'Gross income €45,000. Tax is 20% on the first €42,000 and 40% on the balance. Tax credits are €4,000. Find the net tax. (Rates given for practice; they are not this year’s figures.)',
    steps: [
      { body: '20% × 42,000 = **€8,400**', why: 'Tax at the standard rate on income up to the cut-off point.' },
      { body: '40% × (45,000 − 42,000) = 40% × 3,000 = **€1,200**', why: 'Only income above the cut-off is taxed at the higher rate.' },
      { body: 'Gross tax = 8,400 + 1,200 = **€9,600**', why: 'Add both bands.' },
      { body: 'Net tax = 9,600 − 4,000', why: 'Tax credits are subtracted from the gross tax, not from income.' }
    ],
    answer: 'Net tax = €5,600'
  },
  mc('ma-121', 'maths.number.arith.sci', 'Write 0.000352 in scientific notation.', '3.52 × 10⁻⁴', [['3.52 × 10⁴', 'Small numbers have negative powers of 10.'], ['35.2 × 10⁻⁵', 'The first number must be between 1 and 10.'], ['3.52 × 10⁻³', 'Count the places the decimal point moves: 4.']], 'Move the decimal point 4 places right to get 3.52, so the power is −4.'),
  mc('ma-122', 'maths.number.measure.volume', 'Find the volume of a cylinder with radius 3 cm and height 10 cm.', '90π cm³', [['30π cm³', 'Square the radius: πr²h = π × 9 × 10.'], ['60π cm³', 'That would use 2r instead of r².'], ['900π cm³', 'Square only the radius, not the height.']], 'V = πr²h = π(3²)(10) = 90π ≈ 282.7 cm³.'),
  mc('ma-123', 'maths.number.measure.volume', 'Find the volume of a sphere of radius 3 cm.', '36π cm³', [['12π cm³', 'Use r³ = 27, not r = 3.'], ['108π cm³', 'Remember the 4/3: (4/3)π × 27.'], ['4π cm³', 'Check the formula: V = (4/3)πr³.']], '(4/3) × π × 27 = 36π ≈ 113.1 cm³.'),
  mc('ma-124', 'maths.number.measure.volume', 'A cone has radius 6 cm and vertical height 4 cm. Find its volume.', '48π cm³', [['144π cm³', 'A cone is ⅓ of the cylinder: ⅓πr²h.'], ['24π cm³', 'Check: ⅓ × 36 × 4 = 48.'], ['16π cm³', 'Square the radius, not the height.']], 'V = ⅓πr²h = ⅓ × π × 36 × 4 = 48π cm³.'),
  {
    id: 'ma-125', type: 'worked', objective: 'maths.number.measure.trap', difficulty: 2,
    title: 'Trapezoidal rule',
    problem: 'Offsets measured 2 m apart are 3, 5, 6, 4 and 2 m. Estimate the area.',
    steps: [
      { body: 'A ≈ (h/2)[(first + last) + 2(sum of the rest)]', why: 'This formula is in the Formulae and Tables booklet.' },
      { body: 'First + last = 3 + 2 = 5', why: 'The end offsets count once.' },
      { body: '2 × (5 + 6 + 4) = 30', why: 'Every middle offset counts twice.' },
      { body: 'A ≈ (2/2)(5 + 30)', why: 'h = 2.' }
    ],
    answer: 'About 35 m²'
  },
  mc('ma-126', 'maths.number.complex.ops', 'Simplify (3 + 4i) / (1 + 2i)', '11/5 − (2/5)i', [['3 + 2i', 'You can’t divide the parts separately.'], ['11 − 2i', 'Divide by the real denominator (1 + 2i)(1 − 2i) = 5.'], ['−1 + 2i', 'Multiply the top and bottom by the conjugate 1 − 2i.']], '(3 + 4i)(1 − 2i) = 3 − 6i + 4i − 8i² = 11 − 2i. Divide by 5.'),
  mc('ma-127', 'maths.number.complex.ops', 'Simplify i⁷', '−i', [['i', 'i⁴ = 1, so i⁷ = i³.'], ['−1', 'That is i² (or i⁶).'], ['1', 'That is i⁴ (or i⁸).']], 'Powers of i repeat every 4: i, −1, −i, 1. 7 = 4 + 3, so i⁷ = i³ = −i.'),
  fc('ma-128', 'maths.number.complex.polar', 'De Moivre’s theorem', '(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ', 'Raise the modulus to the power n and multiply the argument by n. It makes large powers of complex numbers quick.', HL),
  mc('ma-129', 'maths.number.financial.compound', 'How much must be invested now at 5% compound interest to have €10,000 in 3 years?', '€8,638.38', [['€8,500', 'That is simple interest thinking. Divide by 1.05³.'], ['€11,576.25', 'That is the future value of €10,000.'], ['€9,523.81', 'That only discounts by one year.']], 'Present value P = F / (1 + i)ᵗ = 10,000 / 1.05³ = 10,000 / 1.157625 ≈ €8,638.38.'),
  fc('ma-130', 'maths.number.financial.amort', 'The amortisation formula (mortgages and loans)', 'A = P · i(1 + i)ᵗ / ((1 + i)ᵗ − 1)', 'A = repayment per period, P = principal, i = rate per period, t = number of periods. For monthly payments, use a monthly rate and t in months.', HL),
  mc('ma-131', 'maths.number.financial.compound', 'An annual rate is 6%. What is the equivalent monthly rate, to 3 decimal places?', '0.487%', [['0.5%', '6 ÷ 12 ignores compounding.'], ['0.6%', 'Check: (1.06)^(1/12) − 1.'], ['72%', 'That multiplies instead of taking a root.']], '(1 + i_month)¹² = 1.06, so i = 1.06^(1/12) − 1 ≈ 0.00487 = 0.487%.', { difficulty: 3 }),
  {
    id: 'ma-132', type: 'worked', objective: 'maths.number.induction.series', level: 'HL', difficulty: 3,
    title: 'Proof by induction',
    problem: 'Prove that 1 + 2 + 3 + … + n = n(n + 1)/2 for all n ∈ ℕ.',
    steps: [
      { body: 'n = 1: LHS = 1, RHS = 1(2)/2 = 1 ✓', why: 'Base case.' },
      { body: 'Assume true for n = k: 1 + 2 + … + k = k(k + 1)/2', why: 'This is the inductive hypothesis.' },
      { body: 'For n = k + 1: k(k + 1)/2 + (k + 1) = (k + 1)(k/2 + 1) = (k + 1)(k + 2)/2', why: 'Add the next term and factor out (k + 1).' },
      { body: 'This is the formula with n = k + 1 ✓', why: 'So if it holds for k, it holds for k + 1.' }
    ],
    answer: 'True for n = 1, and true for k + 1 whenever true for k, so it is true for all n ∈ ℕ.'
  },
  mc('ma-133', 'maths.calc.functions.domain', 'f(x) = x² − 2x. Find f(−3).', '15', [['3', '(−3)² = +9, and −2(−3) = +6.'], ['−3', 'Substitute carefully with brackets.'], ['−15', 'Squaring a negative gives a positive.']], 'f(−3) = (−3)² − 2(−3) = 9 + 6 = 15. Always bracket negative inputs.'),
  mc('ma-134', 'maths.calc.functions.domain', 'f(x) = 2x + 1 and g(x) = x². Find f(g(3)).', '19', [['49', 'That is g(f(3)). Apply g first, then f.'], ['7', 'That is f(3).'], ['10', 'g(3) = 9, then f(9) = 19.']], 'Work from the inside out: g(3) = 9, then f(9) = 2(9) + 1 = 19.'),
  mc('ma-135', 'maths.calc.functions.domain', 'How is the graph of y = (x − 2)² related to y = x²?', 'Shifted 2 units right', [['Shifted 2 units left', 'f(x − 2) moves the graph right, the opposite of the sign you see.'], ['Shifted 2 units up', 'That would be x² + 2.'], ['Shifted 2 units down', 'That would be x² − 2.']], 'Inside the bracket the shift is horizontal and reversed. Outside, it is vertical and as written.',
    { visual: { kind: 'graph', xRange: [-3, 5], yRange: [-1, 8], curves: [{ f: (x: number) => x * x, label: 'y = x²', dashed: true }, { f: (x: number) => (x - 2) ** 2, label: 'y = (x − 2)²' }] } }),
  mc('ma-136', 'maths.calc.diff.rules', 'Differentiate y = ln x', '1/x', [['ln x', 'eˣ is the function that is its own derivative.'], ['x ln x', 'That has nothing to do with differentiation here.'], ['eˣ', 'eˣ is the inverse of ln x, not its derivative.']], 'Standard derivatives (all in Formulae and Tables): d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, d/dx(cos x) = −sin x.', HL),
  mc('ma-137', 'maths.calc.diff.rules', 'Differentiate y = x² sin x', '2x sin x + x² cos x', [['2x cos x', 'You need the product rule: u′v + uv′.'], ['x² cos x', 'You missed the u′v term.'], ['2x sin x − x² cos x', 'd/dx(sin x) = +cos x.']], 'u = x², v = sin x: u′v + uv′ = 2x sin x + x² cos x.', { ...HL, difficulty: 2 }),
  mc('ma-138', 'maths.calc.diff.rules', 'Differentiate y = x / (x + 1)', '1 / (x + 1)²', [['1', 'Use the quotient rule. You can’t differentiate the top and bottom separately.'], ['−1 / (x + 1)²', 'Check the order: (v·u′ − u·v′)/v² = ((x + 1) − x)/(x + 1)².'], ['x / (x + 1)²', 'The numerator simplifies to 1.']], 'Quotient rule: [(x + 1)(1) − x(1)] / (x + 1)² = 1 / (x + 1)².', { ...HL, difficulty: 2 }),
  mc('ma-139', 'maths.calc.apps.rates', 'A particle’s displacement is s = 3t² − 2t metres. Find its velocity at t = 2 s.', '10 m/s', [['8 m/s', '8 is the displacement at t = 2. Velocity is ds/dt.'], ['6 m/s', '6 is the acceleration (d²s/dt²).'], ['12 m/s', 'ds/dt = 6t − 2, so at t = 2 it is 12 − 2.']], 'v = ds/dt = 6t − 2, so at t = 2, v = 10 m/s.', HL),
  mc('ma-140', 'maths.calc.apps.maxmin', 'f(x) = x² − 6x. For what values of x is f increasing?', 'x > 3', [['x < 3', 'f′(x) = 2x − 6 is negative there, so f is decreasing.'], ['x > 6', 'f starts increasing at the turning point, x = 3.'], ['All x', 'A parabola decreases on one side of its vertex.']], 'f is increasing where f′(x) > 0: 2x − 6 > 0 → x > 3.'),
  mc('ma-141', 'maths.calc.integ.area', 'Find the area between y = x², the x-axis, x = 0 and x = 3.', '9 square units', [['27', 'Integrate first: ∫x² dx = x³/3.'], ['3', 'Check: 27/3 − 0 = 9.'], ['6', '6 is the slope of y = x² at x = 3, not the area.']], '∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9.', HL),
  mc('ma-142', 'maths.calc.integ.basic', 'Evaluate ∫₀^π sin x dx', '2', [['0', 'sin x is above the axis on [0, π], so the area isn’t zero.'], ['1', '[−cos x] from 0 to π = −cos π + cos 0 = 1 + 1.'], ['−2', 'The integral of sin x is −cos x. Check the signs.']], '[−cos x]₀^π = (−(−1)) − (−1) = 2.', { ...HL, difficulty: 2 }),
  fc('ma-143', 'maths.stats.data.sampling', 'Types of data', 'Categorical: nominal (no order: eye colour) or ordinal (ordered: grades)\nNumerical: discrete (counted: number of siblings) or continuous (measured: height)', 'The type of data decides which graphs and averages make sense.'),
  mc('ma-144', 'maths.stats.data.sampling', 'To estimate how often Irish teenagers exercise, a student surveys people leaving a gym. What is the main problem?', 'The sample is biased', [['The sample is too random', 'The problem is the opposite: it isn’t random.'], ['Exercise can’t be measured', 'It can, for example in hours per week.'], ['Surveys are never valid', 'Surveys are valid when sampling is done properly.']], 'People at a gym exercise more than average, so the sample doesn’t represent the population. Use random sampling instead.'),
  mc('ma-145', 'maths.stats.data.sampling', 'What is a simple random sample?', 'Every member of the population has an equal chance of being chosen', [['Choosing whoever is easiest to reach', 'That is convenience sampling.'], ['Choosing every 10th person on a list', 'That is systematic sampling.'], ['Dividing the population into groups and sampling each', 'That is stratified sampling.']], 'Random selection avoids bias, so results can be generalised to the population.'),
  mc('ma-146', 'maths.geom.synthetic.theorems', 'AB is a diameter of a circle and C is a point on the circle. What is the angle ACB?', '90°', [['180°', '180° is the angle at the centre along a straight line.'], ['45°', 'That holds only in special cases.'], ['It depends on where C is', 'For any C on the circle, the angle is always 90°.']], 'An angle in a semicircle is a right angle. It is very useful in coordinate and synthetic geometry.'),
  mc('ma-147', 'maths.stats.data.measures', 'For a data set, Q₁ = 12 and Q₃ = 20. What is the interquartile range?', '8', [['16', '16 is the midpoint of Q₁ and Q₃. The IQR is their difference.'], ['32', 'Subtract, don’t add.'], ['4', 'Half the IQR is the semi-interquartile range.']], 'IQR = Q₃ − Q₁ = 8. It measures the spread of the middle 50% and isn’t affected by outliers.'),
  mc('ma-148', 'maths.stats.inference.ci', 'In a survey of 400 people, what is the approximate margin of error at 95% confidence?', '5%', [['2.5%', 'Use 1/√n = 1/20.'], ['0.25%', 'That is 1/400. Take the square root of n.'], ['20%', '√400 = 20, but the margin is 1/20.']], 'Margin of error ≈ 1/√n = 1/√400 = 1/20 = 5%. Quadrupling the sample halves the margin.', HL),
  fc('ma-149', 'maths.geom.synthetic.theorems', 'Angle at the centre theorem', 'The angle at the centre of a circle is twice the angle at the circumference standing on the same arc.', 'A consequence: all angles at the circumference standing on the same arc are equal.'),
]);
