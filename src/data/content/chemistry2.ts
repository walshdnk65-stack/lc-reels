import { define } from './define';

/* More original practice material for LC Chemistry (2025 specification). */
export const chemistry2 = define({}, [
  {
    id: 'ch-030', type: 'mcq', objective: 'chemistry.s1.atomic.particles', difficulty: 1,
    question: 'Isotopes of an element have…',
    options: [
      { text: 'the same number of protons but different numbers of neutrons', correct: true },
      { text: 'the same number of neutrons but different numbers of protons', why: 'Changing the number of protons changes the element.' },
      { text: 'different numbers of electrons', why: 'Neutral isotopes have the same number of electrons.' },
      { text: 'different chemical properties', why: 'Same electron arrangement means the same chemistry.' }
    ],
    explain: 'Example: ³⁵Cl and ³⁷Cl both have 17 protons, with 18 and 20 neutrons respectively.'
  },
  {
    id: 'ch-031', type: 'mcq', objective: 'chemistry.s1.atomic.particles', difficulty: 1,
    question: 'How many neutrons are in an atom of ³⁷Cl? (atomic number 17)',
    options: [
      { text: '20', correct: true },
      { text: '17', why: '17 is the number of protons.' },
      { text: '37', why: '37 is the mass number: protons + neutrons.' },
      { text: '54', why: 'Subtract the atomic number from the mass number.' }
    ],
    explain: 'Neutrons = mass number − atomic number = 37 − 17 = 20.'
  },
  {
    id: 'ch-032', type: 'flashcard', objective: 'chemistry.s1.atomic.models', difficulty: 2,
    front: 'Rutherford’s gold foil experiment: what did each observation show?', back: 'Most alpha particles passed straight through → the atom is mostly empty space\n\nA few were deflected or bounced back → a tiny, dense, positive nucleus',
    explain: 'This overturned Thomson’s plum pudding model. It is a classic example of evidence changing a scientific model.'
  },
  {
    id: 'ch-033', type: 'flashcard', objective: 'chemistry.s1.atomic.models', difficulty: 2,
    front: 'How does the Bohr model explain line emission spectra?', back: 'Electrons occupy fixed energy levels. When an electron falls from a higher level to a lower one, it emits light with an energy (and frequency) equal to the gap. Each gap gives one line.',
    explain: 'Because the levels are fixed, only certain energies are emitted, so we see lines rather than a continuous spectrum.'
  },
  {
    id: 'ch-034', type: 'mcq', objective: 'chemistry.s2.bonding.properties', difficulty: 2,
    question: 'Sodium chloride conducts electricity…',
    options: [
      { text: 'when molten or dissolved in water, but not as a solid', correct: true },
      { text: 'as a solid, because it contains ions', why: 'In the solid the ions are locked in a lattice and can’t move.' },
      { text: 'never, because it is ionic', why: 'Ionic compounds conduct once their ions are free to move.' },
      { text: 'only as a solid', why: 'Movement of charge needs mobile ions.' }
    ],
    explain: 'Conduction needs mobile charged particles. Melting or dissolving frees the Na⁺ and Cl⁻ ions.'
  },
  {
    id: 'ch-035', type: 'mcq', objective: 'chemistry.s2.imf.shapes', difficulty: 2,
    question: 'Which molecule is polar?',
    options: [
      { text: 'H₂O', correct: true },
      { text: 'CO₂', why: 'C=O bonds are polar, but the linear shape makes the dipoles cancel.' },
      { text: 'CH₄', why: 'Tetrahedral and symmetrical, with almost no difference in electronegativity.' },
      { text: 'Cl₂', why: 'Identical atoms share electrons equally.' }
    ],
    explain: 'Water is V-shaped, so its two polar O–H bonds do not cancel and the molecule has an overall dipole.'
  },
  {
    id: 'ch-036', type: 'flashcard', objective: 'chemistry.s2.hydrocarbons.families',
    front: 'General formulae: alkanes, alkenes, alkynes', back: 'Alkanes: CₙH₂ₙ₊₂\nAlkenes: CₙH₂ₙ\nAlkynes: CₙH₂ₙ₋₂',
    explain: 'Each extra π bond removes two hydrogens. Ethane C₂H₆, ethene C₂H₄, ethyne C₂H₂.'
  },
  {
    id: 'ch-037', type: 'mcq', objective: 'chemistry.s2.hydrocarbons.families', difficulty: 1,
    question: 'Name CH₃CH₂CH₃',
    options: [
      { text: 'Propane', correct: true },
      { text: 'Propene', why: 'Propene has a C=C double bond: CH₂=CHCH₃.' },
      { text: 'Butane', why: 'Count the carbons: there are three.' },
      { text: 'Ethane', why: 'Ethane has two carbons.' }
    ],
    explain: 'Three carbons gives “prop-”, and all single bonds gives “-ane”.'
  },
  {
    id: 'ch-038', type: 'mcq', objective: 'chemistry.s3.equilibrium.kc', difficulty: 2,
    question: 'H₂ + I₂ ⇌ 2HI. At equilibrium [H₂] = 0.1 M, [I₂] = 0.1 M and [HI] = 0.8 M. Calculate Kc.',
    options: [
      { text: '64', correct: true },
      { text: '80', why: 'Square [HI] because of the 2 in front of HI.' },
      { text: '8', why: 'That is 0.8/0.1. Check both the powers and the denominator.' },
      { text: '0.016', why: 'That is the inverse: reactants over products.' }
    ],
    explain: 'Kc = [HI]² / ([H₂][I₂]) = 0.64 / 0.01 = 64.'
  },
  {
    id: 'ch-039', type: 'mcq', objective: 'chemistry.s3.equilibrium.lechatelier', difficulty: 2,
    question: 'What effect does adding a catalyst have on an equilibrium?',
    options: [
      { text: 'Equilibrium is reached faster, but the position doesn’t change', correct: true },
      { text: 'The equilibrium shifts to the right', why: 'A catalyst speeds up the forward and reverse reactions equally.' },
      { text: 'The value of Kc increases', why: 'Kc changes only with temperature.' },
      { text: 'The yield of products increases', why: 'The yield at equilibrium is unchanged. You just get there sooner.' }
    ],
    explain: 'A catalyst lowers the activation energy for both directions, so it doesn’t favour either side.'
  },
  {
    id: 'ch-040', type: 'flashcard', objective: 'chemistry.s3.thermo.enthalpy', difficulty: 1,
    front: 'Exothermic reaction: sign of ΔH and what you observe?', back: 'ΔH is negative. Heat is released, so the temperature of the surroundings rises.',
    explain: 'Endothermic is the opposite: ΔH positive, heat absorbed, surroundings get colder.'
  },
  {
    id: 'ch-041', type: 'mcq', objective: 'chemistry.s3.rates.factors', difficulty: 1,
    question: 'Marble chips react with acid. Which change makes the reaction fastest?',
    options: [
      { text: 'Using powdered marble instead of chips', correct: true },
      { text: 'Using larger chips', why: 'Larger chips have less surface area per gram.' },
      { text: 'Using more dilute acid', why: 'Lower concentration means fewer collisions.' },
      { text: 'Cooling the acid', why: 'Lower temperature means fewer successful collisions.' }
    ],
    explain: 'Powder has a far larger surface area, so many more particles are exposed to collisions with the acid.'
  },
  {
    id: 'ch-042', type: 'worked', objective: 'chemistry.s1.mole.stoich', difficulty: 2,
    title: 'Percentage composition',
    problem: 'Find the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃. (N = 14, H = 1, O = 16)',
    steps: [
      { body: 'Mr = 14 + 4(1) + 14 + 3(16) = **80**', why: 'Count every atom: there are two nitrogens.' },
      { body: 'Mass of N = 2 × 14 = **28**', why: 'Don’t miss the second N in the nitrate ion.' },
      { body: '% N = 28 / 80 × 100', why: 'Part over whole, times 100.' }
    ],
    answer: '35%'
  },
  {
    id: 'ch-043', type: 'worked', objective: 'chemistry.s1.mole.stoich', difficulty: 2,
    title: 'Reacting quantities',
    problem: 'Mg + 2HCl → MgCl₂ + H₂. How many moles of hydrogen gas are produced from 2.4 g of magnesium? (Mg = 24)',
    steps: [
      { body: 'n(Mg) = 2.4 / 24 = **0.1 mol**', why: 'Convert mass to moles first.' },
      { body: 'Mg : H₂ = 1 : 1', why: 'Read the ratio from the balanced equation.' }
    ],
    answer: '0.1 mol of H₂'
  },
  {
    id: 'ch-044', type: 'mcq', objective: 'chemistry.s3.redox.oxnum', difficulty: 2,
    question: 'Zn + Cu²⁺ → Zn²⁺ + Cu\n\nWhich species is the oxidising agent?',
    options: [
      { text: 'Cu²⁺', correct: true },
      { text: 'Zn', why: 'Zn loses electrons, so it is oxidised. That makes it the reducing agent.' },
      { text: 'Zn²⁺', why: 'Zn²⁺ is a product.' },
      { text: 'Cu', why: 'Cu is the product formed when Cu²⁺ is reduced.' }
    ],
    explain: 'The oxidising agent is the species that gets reduced. Cu²⁺ gains two electrons from Zn.'
  },
  {
    id: 'ch-045', type: 'flashcard', objective: 'chemistry.s4.environment.water',
    front: 'Main stages of treating water for public supply', back: 'Screening → settling (with flocculation) → filtration → chlorination → pH adjustment (fluoridation is also used in Ireland)',
    explain: 'Each stage removes something different: large debris, suspended solids, fine particles, then micro-organisms.'
  },
  {
    id: 'ch-046', type: 'mcq', objective: 'chemistry.s4.organic.reactions', difficulty: 2,
    question: 'Ethanoic acid reacts with ethanol (acid catalyst). What are the products?',
    options: [
      { text: 'Ethyl ethanoate and water', correct: true },
      { text: 'Ethene and water', why: 'Ethene comes from dehydrating ethanol (elimination).' },
      { text: 'Ethanal and hydrogen', why: 'That comes from oxidising ethanol.' },
      { text: 'Carbon dioxide and water', why: 'Those are the products of combustion.' }
    ],
    explain: 'Carboxylic acid + alcohol ⇌ ester + water. Esters often have fruity smells.'
  },
  {
    id: 'ch-047', type: 'mcq', objective: 'chemistry.s4.volumetric.technique', difficulty: 2,
    question: 'Which is a good primary standard for making a standard solution?',
    options: [
      { text: 'Anhydrous sodium carbonate', correct: true },
      { text: 'Sodium hydroxide', why: 'NaOH absorbs water and CO₂ from the air, so its mass isn’t reliable.' },
      { text: 'Concentrated hydrochloric acid', why: 'Its concentration is not known accurately and it gives off fumes.' },
      { text: 'Hydrated iron(II) sulfate left in air', why: 'Fe²⁺ is slowly oxidised by air.' }
    ],
    explain: 'A primary standard is pure, stable in air, soluble and ideally has a high Mr, so it can be weighed accurately.'
  },
  {
    id: 'ch-048', type: 'cloze', objective: 'chemistry.s3.acids.ph',
    prompt: 'Definition of pH',
    text: 'pH = −log₁₀ [{{H⁺|H+|H3O+|H₃O⁺}}]',
    explain: 'A tenfold increase in [H⁺] lowers the pH by 1.'
  },
  {
    id: 'ch-049', type: 'flashcard', objective: 'chemistry.u.investigating.variables', difficulty: 2,
    front: 'Accuracy vs precision', back: 'Accuracy: how close a result is to the true value\nPrecision: how close repeated results are to each other',
    explain: 'Titres of 20.1, 20.1 and 20.2 cm³ are precise. They are only accurate if the true value is near 20.1.'
  },
  {
    id: 'ch-050', type: 'mcq', objective: 'chemistry.s1.periodic.trends', difficulty: 2,
    question: 'Why do the noble gases (Group 18) have very high first ionisation energies?',
    options: [
      { text: 'Their outer sublevels are full, which is very stable', correct: true },
      { text: 'They have the largest atomic radius in each period', why: 'They are among the smallest atoms in their period.' },
      { text: 'They have no electrons to remove', why: 'They have electrons. Those electrons are just hard to remove.' },
      { text: 'They are metals', why: 'They are non-metals.' }
    ],
    explain: 'A full outer shell, with a high effective nuclear charge across the period, makes removing an electron very difficult.'
  },
]);
