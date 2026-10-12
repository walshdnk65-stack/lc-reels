import { define } from './define';

/* Original practice material based on the LC Chemistry specification (2025), first examined 2027. */
export const chemistry = define({}, [
  {
    id: 'ch-001', type: 'explainer', objective: 'chemistry.s1.mole.mass',
    title: 'The mole in one line',
    body: '**n = m / Mr**\n\nThe number of moles equals the mass in grams divided by the relative molecular mass.\n\nOne mole of anything contains the Avogadro constant of particles: **6.0 × 10²³**.',
    example: 'Mr of H₂O = 2(1) + 16 = 18, so 9 g of water is 9/18 = 0.5 mol.',
    check: {
      question: 'How many moles are in 36 g of water?',
      options: [{ text: '0.5' }, { text: '2', correct: true }, { text: '648' }],
      explain: '36 / 18 = 2 mol.'
    }
  },
  {
    id: 'ch-002', type: 'mcq', objective: 'chemistry.s1.mole.mass', difficulty: 1,
    question: 'How many molecules are in 0.5 mol of CO₂?',
    options: [
      { text: '3.0 × 10²³', correct: true },
      { text: '6.0 × 10²³', why: 'That is the number in one whole mole.' },
      { text: '1.2 × 10²⁴', why: 'You multiplied by 2 instead of by 0.5.' },
      { text: '22', why: '22 g is the mass of 0.5 mol of CO₂ (Mr 44), not the number of molecules.' }
    ],
    explain: 'Number of particles = n × Nᴬ = 0.5 × 6.0 × 10²³ = 3.0 × 10²³.'
  },
  {
    id: 'ch-003', type: 'worked', objective: 'chemistry.s1.mole.yield', difficulty: 2,
    title: 'Percentage yield',
    problem: '25 g of calcium carbonate is heated: CaCO₃ → CaO + CO₂. 11.2 g of CaO is collected. Find the percentage yield. (Ca = 40, C = 12, O = 16)',
    steps: [
      { body: 'Mr(CaCO₃) = 40 + 12 + 48 = 100 → n = 25/100 = **0.25 mol**', why: 'Always convert the mass you’re given into moles first.' },
      { body: 'Mole ratio CaCO₃ : CaO = 1 : 1 → 0.25 mol CaO', why: 'Read the ratio from the balanced equation.' },
      { body: 'Theoretical mass = 0.25 × 56 = **14 g**', why: 'Mr(CaO) = 40 + 16 = 56.' },
      { body: '% yield = (actual / theoretical) × 100 = (11.2 / 14) × 100', why: 'Actual yield goes on top.' }
    ],
    answer: '80%'
  },
  {
    id: 'ch-004', type: 'cloze', objective: 'chemistry.s1.atomic.config',
    prompt: 'Electron configuration of chlorine (17 electrons)',
    text: '1s² 2s² 2p⁶ 3s² {{3p⁵|3p5}}',
    explain: '2 + 2 + 6 + 2 = 12, so 5 electrons remain for the 3p sublevel. Chlorine needs one more electron to fill it, which is why it forms Cl⁻.'
  },
  {
    id: 'ch-005', type: 'flashcard', objective: 'chemistry.s1.atomic.config', difficulty: 2,
    front: 'Electron configuration of iron, Fe (26 electrons)?', back: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶',
    explain: '4s fills before 3d because it is slightly lower in energy. Chromium and copper are the usual exceptions: they end in 4s¹.'
  },
  {
    id: 'ch-006', type: 'mcq', objective: 'chemistry.s1.periodic.trends', difficulty: 2,
    question: 'Why does atomic radius decrease across a period?',
    options: [
      { text: 'Nuclear charge increases while electrons are added to the same main energy level', correct: true },
      { text: 'More energy levels are added', why: 'That happens going down a group, and it makes atoms bigger.' },
      { text: 'Screening by inner electrons increases sharply', why: 'Across a period the inner electrons stay the same, so screening barely changes.' },
      { text: 'Atoms lose electrons across a period', why: 'The number of electrons increases across a period.' }
    ],
    explain: 'More protons pull the same shell closer, and the inner-electron screening hardly changes. So the effective nuclear charge rises and the radius shrinks.'
  },
  {
    id: 'ch-007', type: 'mcq', objective: 'chemistry.s1.periodic.trends',
    question: 'First ionisation energy going DOWN a group…',
    options: [
      { text: 'decreases', correct: true },
      { text: 'increases', why: 'Outer electrons are further from the nucleus and better screened, so they’re easier to remove.' },
      { text: 'stays the same', why: 'Atomic radius and screening both change down a group.' }
    ],
    explain: 'A larger atomic radius and more screening by inner shells mean the outermost electron is held less tightly.'
  },
  {
    id: 'ch-008', type: 'flashcard', objective: 'chemistry.s2.bonding.types', difficulty: 2,
    front: 'Electronegativity difference → bond type\n(common rule of thumb)', back: '< 0.4: non-polar covalent\n0.4 – 1.7: polar covalent\n> 1.7: ionic',
    explain: 'Bonding is a continuum, so these cut-offs are guides rather than sharp boundaries. That is why the specification talks about a bonding continuum.',
    verification: 'needs-review'
  },
  {
    id: 'ch-009', type: 'mcq', objective: 'chemistry.s2.imf.forces',
    question: 'Water (Mr 18) boils at 100 °C but hydrogen sulfide, H₂S (Mr 34), boils at −60 °C. Why?',
    options: [
      { text: 'Hydrogen bonding between water molecules', correct: true },
      { text: 'Water has stronger covalent bonds within its molecules', why: 'Boiling separates molecules. It doesn’t break the bonds inside them.' },
      { text: 'H₂S has more electrons, so stronger dispersion forces', why: 'True, but that would make H₂S boil higher. Something else must dominate in water.' },
      { text: 'Water is ionic', why: 'Water is a polar covalent molecule.' }
    ],
    explain: 'O is highly electronegative and small, so O–H···O hydrogen bonds form between water molecules. They take much more energy to overcome than the forces between H₂S molecules.'
  },
  {
    id: 'ch-010', type: 'mcq', objective: 'chemistry.s2.imf.shapes', difficulty: 2,
    question: 'What is the shape of an ammonia (NH₃) molecule?',
    options: [
      { text: 'Pyramidal (about 107°)', correct: true },
      { text: 'Trigonal planar (120°)', why: 'That shape has 3 bond pairs and no lone pair, like BF₃. N has a lone pair.' },
      { text: 'Tetrahedral (109.5°)', why: 'The electron pairs are arranged tetrahedrally, but the shape is named from the atoms only.' },
      { text: 'V-shaped (104.5°)', why: 'That is water: 2 bond pairs and 2 lone pairs.' }
    ],
    explain: 'N has 3 bond pairs and 1 lone pair. The lone pair repels more strongly than bond pairs, squeezing the angle from 109.5° to about 107°.'
  },
  {
    id: 'ch-011', type: 'worked', objective: 'chemistry.s2.gases.ideal', difficulty: 3,
    title: 'Ideal gas equation',
    problem: 'How many moles of gas occupy 2.0 L at 100 kPa and 25 °C? (R = 8.31 J K⁻¹ mol⁻¹)',
    steps: [
      { body: 'p = 100 kPa = **1.0 × 10⁵ Pa**', why: 'SI units are essential: pressure in pascals.' },
      { body: 'V = 2.0 L = 2.0 dm³ = **2.0 × 10⁻³ m³**', why: 'Volume in m³. 1 m³ = 1000 L.' },
      { body: 'T = 25 + 273 = **298 K**', why: 'Temperature must be in kelvin.' },
      { body: 'n = pV / RT = (1.0 × 10⁵ × 2.0 × 10⁻³) / (8.31 × 298) = 200 / 2476.4', why: 'Rearrange pV = nRT.' }
    ],
    answer: 'n ≈ 0.081 mol'
  },
  {
    id: 'ch-012', type: 'flashcard', objective: 'chemistry.s3.equilibrium.lechatelier',
    front: 'Le Chatelier’s principle', back: 'If a system at equilibrium is disturbed, the equilibrium shifts to oppose the change.',
    explain: 'Add reactant → shifts right to use it up. Raise temperature → shifts in the endothermic direction.'
  },
  {
    id: 'ch-013', type: 'mcq', objective: 'chemistry.s3.equilibrium.lechatelier', difficulty: 2,
    question: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ mol⁻¹\n\nWhat happens to the yield of ammonia if the pressure is increased?',
    options: [
      { text: 'Increases: equilibrium shifts to the side with fewer gas molecules', correct: true },
      { text: 'Decreases: equilibrium shifts left', why: 'The left has 4 gas molecules and the right has 2, so higher pressure favours the right.' },
      { text: 'No change: pressure only affects rate', why: 'Pressure does affect gas equilibria when the number of gas molecules differs on each side.' }
    ],
    explain: '4 molecules → 2 molecules. Increasing pressure shifts the position towards fewer molecules, which reduces the pressure.'
  },
  {
    id: 'ch-014', type: 'cloze', objective: 'chemistry.s3.equilibrium.kc', difficulty: 2,
    prompt: 'Write Kc for N₂ + 3H₂ ⇌ 2NH₃',
    text: 'Kc = [NH₃] to the power {{2}} ÷ ( [N₂] × [H₂] to the power {{3}} )',
    explain: 'Products over reactants, each concentration raised to the power of its coefficient in the balanced equation.'
  },
  {
    id: 'ch-015', type: 'flashcard', objective: 'chemistry.s3.acids.theories',
    front: 'Brønsted–Lowry definitions of an acid and a base', back: 'Acid: proton (H⁺) donor\nBase: proton (H⁺) acceptor',
    explain: 'When an acid donates a proton, what is left is its conjugate base. HCl → Cl⁻.'
  },
  {
    id: 'ch-016', type: 'mcq', objective: 'chemistry.s3.acids.theories',
    question: 'HCl + H₂O → H₃O⁺ + Cl⁻\n\nWhat is the conjugate base of HCl?',
    options: [
      { text: 'Cl⁻', correct: true },
      { text: 'H₂O', why: 'Water is acting as the base here, accepting a proton.' },
      { text: 'H₃O⁺', why: 'H₃O⁺ is the conjugate acid of water.' },
      { text: 'OH⁻', why: 'OH⁻ doesn’t appear in this reaction.' }
    ],
    explain: 'A conjugate pair differs by one H⁺. HCl loses H⁺ and becomes Cl⁻.'
  },
  {
    id: 'ch-017', type: 'mcq', objective: 'chemistry.s3.acids.ph', difficulty: 2,
    question: 'What is the pH of 0.001 M NaOH at 25 °C?',
    options: [
      { text: '11', correct: true },
      { text: '3', why: '3 is the pOH. pH = 14 − pOH.' },
      { text: '−3', why: 'pOH = −log[OH⁻] = −log(10⁻³) = +3.' },
      { text: '0.001', why: 'That is the concentration, not the pH.' }
    ],
    explain: 'NaOH is a strong base, so [OH⁻] = 10⁻³ M. pOH = 3, and pH = 14 − 3 = 11.'
  },
  {
    id: 'ch-018', type: 'worked', objective: 'chemistry.s4.volumetric.titration', difficulty: 2,
    title: 'Acid–base titration',
    problem: '25.0 cm³ of NaOH solution is exactly neutralised by 20.0 cm³ of 0.10 M HCl. Find the concentration of the NaOH.',
    steps: [
      { body: 'NaOH + HCl → NaCl + H₂O  (ratio 1 : 1)', why: 'Always start from the balanced equation.' },
      { body: 'n(HCl) = 0.0200 L × 0.10 mol L⁻¹ = **0.0020 mol**', why: 'Convert cm³ to litres: divide by 1000.' },
      { body: 'n(NaOH) = 0.0020 mol', why: '1 : 1 ratio.' },
      { body: '[NaOH] = 0.0020 / 0.0250', why: 'Concentration = moles ÷ volume in litres.' }
    ],
    answer: '0.080 M'
  },
  {
    id: 'ch-019', type: 'technique', objective: 'chemistry.s4.volumetric.technique',
    title: 'Titration technique checklist',
    intro: 'Practical questions often ask for precise procedure, so learn the exact wording.',
    dos: ['Rinse the burette with deionised water, then with the solution it will hold', 'Rinse the pipette with deionised water, then with the solution it will hold', 'Rinse the conical flask with deionised water only', 'Read the bottom of the meniscus at eye level', 'Add dropwise near the end point while swirling', 'Repeat until two titres agree within 0.1 cm³'],
    donts: ['Don’t rinse the conical flask with the solution, because it adds extra moles', 'Don’t leave the funnel in the burette while reading it', 'Don’t include the rough titre in the average'],
  },
  {
    id: 'ch-020', type: 'mcq', objective: 'chemistry.s3.redox.oxnum', difficulty: 2,
    question: 'What is the oxidation number of Mn in MnO₄⁻?',
    options: [
      { text: '+7', correct: true },
      { text: '+8', why: 'The ion has a −1 charge, so the total must be −1, not 0.' },
      { text: '+4', why: 'That is Mn in MnO₂.' },
      { text: '−1', why: 'That is the charge on the whole ion.' }
    ],
    explain: 'O is −2, so 4 × (−2) = −8. Then Mn + (−8) = −1, which gives Mn = +7.'
  },
  {
    id: 'ch-021', type: 'flashcard', objective: 'chemistry.s3.redox.oxnum', difficulty: 1,
    front: 'OIL RIG', back: 'Oxidation Is Loss (of electrons)\nReduction Is Gain (of electrons)',
    explain: 'In terms of oxidation number, oxidation is an increase and reduction is a decrease.'
  },
  {
    id: 'ch-022', type: 'explainer', objective: 'chemistry.s3.rates.factors',
    title: 'Why heat speeds reactions up',
    body: 'Particles must collide with at least the **activation energy (Ea)** to react.\n\nRaising the temperature makes particles move faster, so they collide more often. More importantly, a much larger fraction of collisions now have energy ≥ Ea.\n\nA **catalyst** gives an alternative pathway with a lower Ea. It is not used up.',
    bullets: ['Concentration ↑ → more frequent collisions', 'Surface area ↑ → more particles exposed', 'Temperature ↑ → more collisions with E ≥ Ea']
  },
  {
    id: 'ch-023', type: 'mcq', objective: 'chemistry.s3.thermo.hess', difficulty: 2,
    question: 'A → B  ΔH = −100 kJ\nB → C  ΔH = +40 kJ\n\nWhat is ΔH for A → C?',
    options: [
      { text: '−60 kJ', correct: true },
      { text: '−140 kJ', why: 'Keep the sign of each step: −100 + 40.' },
      { text: '+60 kJ', why: 'The overall change is still exothermic.' },
      { text: '+140 kJ', why: 'Add the two steps, keeping their signs.' }
    ],
    explain: 'Hess’s law: the enthalpy change depends only on the start and end points, so add the steps: −100 + 40 = −60 kJ.'
  },
  {
    id: 'ch-024', type: 'flashcard', objective: 'chemistry.s2.hydrocarbons.families',
    front: 'Name this molecule and its homologous series', back: 'Ethene, an alkene (C₂H₄)',
    explain: 'The C=C double bond makes it unsaturated. It decolourises bromine water through an addition reaction.',
    visual: { kind: 'structure', caption: 'C₂H₄', atoms: [
      { el: 'C', x: 0, y: 0 }, { el: 'C', x: 1.3, y: 0 },
      { el: 'H', x: -0.75, y: -0.75 }, { el: 'H', x: -0.75, y: 0.75 },
      { el: 'H', x: 2.05, y: -0.75 }, { el: 'H', x: 2.05, y: 0.75 }
    ], bonds: [{ a: 0, b: 1, order: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 5 }] }
  },
  {
    id: 'ch-025', type: 'mcq', objective: 'chemistry.s4.organic.functional',
    question: 'Which functional group does this molecule contain?',
    options: [
      { text: 'Hydroxyl (–OH): an alcohol', correct: true },
      { text: 'Carboxyl (–COOH)', why: 'A carboxylic acid also has a C=O on the same carbon.' },
      { text: 'Carbonyl (C=O)', why: 'There is no double bond to oxygen here.' },
      { text: 'Ester (–COO–)', why: 'An ester links two carbon chains through –COO–.' }
    ],
    explain: 'This is ethanol, CH₃CH₂OH. The –OH group on a saturated carbon makes it an alcohol.',
    visual: { kind: 'structure', caption: 'C₂H₅OH', atoms: [
      { el: 'C', x: 0, y: 0 }, { el: 'C', x: 1.3, y: 0 }, { el: 'O', x: 2.6, y: 0 }, { el: 'H', x: 3.5, y: 0 },
      { el: 'H', x: -0.9, y: 0 }, { el: 'H', x: 0, y: -0.95 }, { el: 'H', x: 0, y: 0.95 },
      { el: 'H', x: 1.3, y: -0.95 }, { el: 'H', x: 1.3, y: 0.95 }
    ], bonds: [{ a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 0, b: 4 }, { a: 0, b: 5 }, { a: 0, b: 6 }, { a: 1, b: 7 }, { a: 1, b: 8 }] }
  },
  {
    id: 'ch-026', type: 'mcq', objective: 'chemistry.s4.organic.reactions',
    question: 'Ethene + bromine → 1,2-dibromoethane. What type of reaction is this?',
    options: [
      { text: 'Addition', correct: true },
      { text: 'Substitution', why: 'In substitution one atom replaces another. Here nothing is removed.' },
      { text: 'Elimination', why: 'Elimination makes a double bond. This reaction removes one.' },
      { text: 'Neutralisation', why: 'Neutralisation is an acid reacting with a base.' }
    ],
    explain: 'The C=C double bond opens and both bromine atoms add on. Two molecules become one, with nothing lost.'
  },
  {
    id: 'ch-027', type: 'explainer', objective: 'chemistry.s4.environment.greenhouse',
    title: 'The enhanced greenhouse effect',
    body: 'The Earth absorbs sunlight and re-emits energy as **infrared radiation**. Greenhouse gases such as CO₂, CH₄ and water vapour absorb some of this infrared and re-emit it, which keeps the planet warm. That is the *natural* greenhouse effect.\n\nThe **enhanced** effect is the extra warming caused by human activity raising greenhouse gas levels, mainly by burning fossil fuels and through agriculture.'
  },
  {
    id: 'ch-028', type: 'flashcard', objective: 'chemistry.u.investigating.variables',
    front: 'Independent, dependent and controlled variables?', back: 'Independent: what you deliberately change\nDependent: what you measure\nControlled: what you keep the same',
    explain: 'Example: temperature (independent) vs rate of reaction (dependent), with the same concentration and volumes (controlled).'
  },
  {
    id: 'ch-029', type: 'flashcard', objective: 'chemistry.u.investigating.variables', provenance: 'exam-format',
    front: 'How is Leaving Cert Chemistry assessed from 2027?', back: 'Written examination: 60%\nChemistry in Practice Investigation: 40%',
    explain: 'The investigation follows a common brief and is assessed externally. Check the SEC’s guidelines for your year.',
    sourceNote: 'LC Chemistry specification (2025). Weighting to be confirmed against NCCA/SEC documents.'
  },
]);
