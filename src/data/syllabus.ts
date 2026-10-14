import type { LevelTag, Objective, SubjectId, SubjectSyllabus, Subtopic, Topic, Verification } from '../types';

/* Syllabus map: Subject → Level → Topic → Subtopic → Learning objective.
 *
 * Level is a tag on each node (HL, OL or both) — filtering a subject by level gives
 * the level layer of the hierarchy. Objectives are paraphrased in plain language;
 * they are not quotations of official learning outcomes.
 *
 * Verification: only nodes checked against an official document are 'verified'
 * (currently the English and Irish prescribed-material lists for 2027). Everything
 * else is 'needs-review' and must be checked against the NCCA specification before
 * the app claims coverage. Update this file — not the UI — when requirements change. */

type ObjDef = [id: string, text: string, level?: LevelTag];
type SubDef = [id: string, title: string, level: LevelTag, objectives: ObjDef[]];

function topic(subject: SubjectId, id: string, title: string, level: LevelTag, subs: SubDef[],
  extra: { paper?: string; verification?: Verification } = {}): Topic {
  return {
    id: `${subject}.${id}`, title, level, paper: extra.paper,
    verification: extra.verification ?? 'needs-review',
    subtopics: subs.map(([sid, stitle, slevel, objs]): Subtopic => ({
      id: `${subject}.${id}.${sid}`, title: stitle, level: slevel,
      objectives: objs.map(([oid, text, olevel]): Objective => ({
        id: `${subject}.${id}.${sid}.${oid}`, text, level: olevel ?? slevel
      }))
    }))
  };
}

/* ------------------------------------------------------------------ Maths */
const maths: SubjectSyllabus = {
  id: 'maths', name: 'Mathematics', emoji: '📐', color: '#3e5c97',
  specification: 'Leaving Certificate Mathematics syllabus — five strands (Project Maths)',
  assessment: 'Two written papers. Paper 1: Number, Algebra, Functions & Calculus. Paper 2: Statistics & Probability, Geometry & Trigonometry.',
  sources: ['ncca-maths', 'sec-papers'], verification: 'needs-review',
  reviewNote: 'Which topics are Higher Level only still needs checking against the NCCA syllabus document.',
  topics: [
    topic('maths', 'algebra', 'Algebra', 'both', [
      ['equations', 'Solving equations', 'both', [
        ['linear', 'Solve linear and simultaneous linear equations'],
        ['quad', 'Solve quadratic equations by factorising and by formula'],
        ['simul', 'Solve simultaneous equations, including one linear and one non-linear', 'HL'],
      ]],
      ['expressions', 'Expressions & factorising', 'both', [
        ['factorise', 'Expand and factorise expressions'],
        ['fractions', 'Simplify algebraic fractions and rearrange formulae'],
      ]],
      ['cubics', 'Cubics & the factor theorem', 'HL', [
        ['factor', 'Use the factor theorem to find roots of a cubic'],
      ]],
      ['inequalities', 'Inequalities', 'both', [
        ['linear', 'Solve linear inequalities and show solutions on a number line'],
        ['quadratic', 'Solve quadratic and rational inequalities', 'HL'],
      ]],
      ['indiceslogs', 'Indices & logarithms', 'both', [
        ['laws', 'Apply the laws of indices'],
        ['logs', 'Apply the laws of logarithms and solve exponential equations', 'HL'],
      ]],
    ], { paper: 'Paper 1' }),
    topic('maths', 'number', 'Number', 'both', [
      ['complex', 'Complex numbers', 'both', [
        ['ops', 'Add, multiply and divide complex numbers; use the conjugate'],
        ['argand', 'Plot on an Argand diagram and find the modulus'],
        ['polar', 'Write in polar form and apply De Moivre’s theorem', 'HL'],
      ]],
      ['sequences', 'Sequences & series', 'both', [
        ['arith', 'Find terms and sums of arithmetic sequences'],
        ['geom', 'Find terms and sums of geometric series, including sum to infinity', 'HL'],
      ]],
      ['financial', 'Financial maths', 'both', [
        ['compound', 'Calculate compound interest and depreciation (reducing balance)'],
        ['amort', 'Use present value and the amortisation formula', 'HL'],
      ]],
      ['arith', 'Arithmetic', 'both', [
        ['percent', 'Percentages, percentage error, VAT and income tax'],
        ['sci', 'Scientific notation and rounding'],
      ]],
      ['measure', 'Length, area & volume', 'both', [
        ['volume', 'Volume and surface area of prisms, cylinders, cones and spheres'],
        ['trap', 'Estimate area with the trapezoidal rule'],
      ]],
      ['induction', 'Proof by induction', 'HL', [
        ['series', 'Prove series and divisibility results by induction'],
      ]],
    ], { paper: 'Paper 1' }),
    topic('maths', 'calc', 'Functions & Calculus', 'both', [
      ['functions', 'Functions & graphs', 'both', [
        ['domain', 'Interpret functions, domain, range and graphs'],
        ['inverse', 'Find inverse and composite functions', 'HL'],
      ]],
      ['diff', 'Differentiation', 'both', [
        ['rules', 'Differentiate using the power, product, quotient and chain rules'],
        ['first', 'Differentiate from first principles'],
      ]],
      ['apps', 'Applications of differentiation', 'both', [
        ['maxmin', 'Find turning points and classify them'],
        ['tangent', 'Find the slope and equation of a tangent'],
        ['rates', 'Solve rates of change problems', 'HL'],
      ]],
      ['integ', 'Integration', 'HL', [
        ['basic', 'Integrate polynomial, exponential and trig functions'],
        ['area', 'Find area under a curve and average value'],
      ]],
    ], { paper: 'Paper 1' }),
    topic('maths', 'stats', 'Statistics & Probability', 'both', [
      ['prob', 'Probability', 'both', [
        ['rules', 'Use the addition and multiplication rules'],
        ['counting', 'Count arrangements and selections'],
        ['expected', 'Calculate expected value'],
        ['binomial', 'Use Bernoulli trials and the binomial distribution', 'HL'],
      ]],
      ['data', 'Data & summary statistics', 'both', [
        ['measures', 'Calculate and interpret mean, median, IQR and standard deviation'],
        ['correlation', 'Interpret scatter plots and the correlation coefficient'],
        ['sampling', 'Types of data, sampling and bias'],
      ]],
      ['inference', 'Inference', 'HL', [
        ['normal', 'Use the normal distribution and z-scores'],
        ['ci', 'Construct confidence intervals and carry out hypothesis tests'],
      ]],
    ], { paper: 'Paper 2' }),
    topic('maths', 'geom', 'Geometry & Trigonometry', 'both', [
      ['line', 'Coordinate geometry — the line', 'both', [
        ['slope', 'Find slopes, equations and intersections of lines'],
        ['perp', 'Use perpendicular distance and area of a triangle', 'HL'],
      ]],
      ['circle', 'Coordinate geometry — the circle', 'both', [
        ['eqn', 'Find the centre and radius from the equation of a circle'],
      ]],
      ['synthetic', 'Synthetic geometry', 'both', [
        ['theorems', 'Apply the geometry theorems and constructions'],
      ]],
      ['trig', 'Trigonometry', 'both', [
        ['rules', 'Use the sine rule, cosine rule and area formula'],
        ['radians', 'Work in radians; find arc length and sector area'],
        ['equations', 'Solve trigonometric equations', 'HL'],
      ]],
    ], { paper: 'Paper 2' }),
  ]
};

/* -------------------------------------------------------------- Chemistry */
const chemistry: SubjectSyllabus = {
  id: 'chemistry', name: 'Chemistry', emoji: '⚗️', color: '#8a5a9e',
  specification: 'Leaving Certificate Chemistry specification (2025) — first examined in 2027',
  assessment: 'Written examination (60%) and the externally assessed Chemistry in Practice Investigation (40%).',
  sources: ['ncca-chemistry-2025'], verification: 'needs-review',
  reviewNote: 'Strand and section numbers taken from the 2025 specification layout; learning outcomes still to be checked one by one.',
  topics: [
    topic('chemistry', 's1', 'Strand 1 — Nature of Matter', 'both', [
      ['matter', '1.1 Matter', 'both', [
        ['kinetic', 'Use the kinetic theory to explain states of matter and changes of state'],
        ['mixtures', 'Distinguish elements, compounds and mixtures and how mixtures are separated'],
      ]],
      ['atomic', '1.2 Atomic structure', 'both', [
        ['particles', 'Describe protons, neutrons and electrons and the nuclear model'],
        ['config', 'Write electron configurations (s, p, d sublevels)'],
        ['models', 'Explain how atomic models developed from evidence'],
      ]],
      ['periodic', '1.3 The periodic table', 'both', [
        ['trends', 'Explain trends in atomic radius, ionisation energy and electronegativity'],
        ['groups', 'Describe the properties and reactions of Groups 1, 2, 17 and 18'],
      ]],
      ['mole', '1.4 Quantifying matter', 'both', [
        ['mass', 'Convert between mass, moles and number of particles'],
        ['stoich', 'Use balanced equations for reacting quantities'],
        ['yield', 'Find the limiting reactant and percentage yield'],
      ]],
    ]),
    topic('chemistry', 's2', 'Strand 2 — Behaviour of Matter', 'both', [
      ['bonding', '2.1 Chemical bonding', 'both', [
        ['types', 'Relate bond type to electronegativity difference'],
        ['properties', 'Explain properties of ionic and covalent substances'],
      ]],
      ['imf', '2.2 Intermolecular forces & shapes', 'both', [
        ['forces', 'Compare dispersion forces, dipole–dipole forces and hydrogen bonds'],
        ['shapes', 'Predict molecular shapes using electron-pair repulsion'],
      ]],
      ['gases', '2.3 Behaviour of gases', 'both', [
        ['ideal', 'Use the ideal gas equation pV = nRT'],
      ]],
      ['hydrocarbons', '2.4 Hydrocarbons', 'both', [
        ['families', 'Name and draw alkanes, alkenes and alkynes'],
        ['uses', 'Describe sources, combustion and uses of hydrocarbons'],
      ]],
    ]),
    topic('chemistry', 's3', 'Strand 3 — Interactions of Matter', 'both', [
      ['thermo', '3.1 Thermochemistry', 'both', [
        ['enthalpy', 'Interpret enthalpy change and exo/endothermic reactions'],
        ['hess', 'Apply Hess’s law'],
      ]],
      ['rates', '3.2 Rates of reaction', 'both', [
        ['factors', 'Explain factors affecting rate using collision theory'],
      ]],
      ['equilibrium', '3.3 Chemical equilibrium', 'both', [
        ['lechatelier', 'Apply Le Chatelier’s principle'],
        ['kc', 'Write and calculate the equilibrium constant Kc'],
      ]],
      ['acids', '3.4 Acid–base systems', 'both', [
        ['theories', 'Use Arrhenius and Brønsted–Lowry definitions; conjugate pairs'],
        ['ph', 'Calculate pH of strong acids and bases'],
        ['strength', 'Distinguish strong and weak acids and choose indicators'],
      ]],
      ['redox', '3.5 Electrochemistry', 'both', [
        ['oxnum', 'Assign oxidation numbers and identify oxidation and reduction'],
        ['cells', 'Explain galvanic cells, electrolysis and corrosion'],
      ]],
    ]),
    topic('chemistry', 's4', 'Strand 4 — Matter in our World', 'both', [
      ['volumetric', '4.1 Volumetric analysis', 'both', [
        ['titration', 'Carry out titration calculations'],
        ['technique', 'Describe correct titration technique and sources of error'],
      ]],
      ['organic', '4.2 Reactivity of organic compounds', 'both', [
        ['functional', 'Identify functional groups'],
        ['reactions', 'Classify organic reactions (addition, substitution, elimination, redox)'],
        ['polymers', 'Describe polymers, plastics and pharmaceuticals'],
      ]],
      ['environment', '4.3 Our chemical environment', 'both', [
        ['greenhouse', 'Explain the enhanced greenhouse effect'],
        ['water', 'Describe water treatment stages'],
      ]],
    ]),
    topic('chemistry', 'u', 'Unifying Strand — Nature of Science', 'both', [
      ['investigating', 'Investigating in chemistry', 'both', [
        ['variables', 'Identify variables, controls and sources of error'],
      ]],
      ['society', 'Chemistry in society', 'both', [
        ['green', 'Discuss green chemistry, sustainability and safety'],
      ]],
    ]),
  ]
};

/* --------------------------------------------------------------- Business */
const business: SubjectSyllabus = {
  id: 'business', name: 'Business', emoji: '💼', color: '#c2663b',
  specification: 'Leaving Certificate Business specification (2025) — first examined in 2027',
  assessment: 'Written examination (60%) and the Business Alive Investigative Study (40%).',
  sources: ['ncca-business-2025'], verification: 'needs-review',
  reviewNote: 'Strand headings follow the 2025 specification; learning outcomes still to be checked.',
  topics: [
    topic('business', 's1', 'Strand 1 — Exploring the Business Environment', 'both', [
      ['stakeholders', '1.1 Key stakeholders', 'both', [
        ['map', 'Identify stakeholders and use a power–interest grid'],
      ]],
      ['forms', '1.2 Forms of business & governance', 'both', [
        ['types', 'Compare sole trader, partnership, company, co-operative, state and not-for-profit'],
        ['esg', 'Explain governance and ESG reporting'],
      ]],
      ['economy', '1.3 Business and the economy', 'both', [
        ['indicators', 'Explain how inflation, interest rates and exchange rates affect business'],
        ['sectors', 'Describe the sectors of the economy and the role of government'],
      ]],
      ['policy', '1.4 National and EU policy', 'both', [
        ['eu', 'Distinguish EU regulations from directives'],
        ['institutions', 'Describe the main EU institutions and lobbying'],
      ]],
      ['global', '1.5 Irish business globally', 'both', [
        ['fdi', 'Explain globalisation and foreign direct investment'],
        ['trade', 'Explain international trade, trading blocs and the single market'],
      ]],
    ]),
    topic('business', 's2', 'Strand 2 — Understanding Enterprise', 'both', [
      ['enterprise', '2.1 Enterprise', 'both', [
        ['skills', 'Describe enterprising characteristics and skills'],
      ]],
      ['ideas', '2.2 Idea development', 'both', [
        ['design', 'Apply the stages of design thinking'],
      ]],
      ['planning', '2.3 Business planning', 'both', [
        ['bmc', 'Use the Business Model Canvas'],
      ]],
      ['market', '2.4 The target market', 'both', [
        ['research', 'Distinguish primary and secondary market research'],
        ['mix', 'Apply the marketing mix (7Ps)'],
        ['steeple', 'Use STEEPLE analysis'],
      ]],
      ['finance', '2.5 Operations and finance', 'both', [
        ['sources', 'Match sources of finance to their purpose and term'],
        ['cashflow', 'Interpret a cash flow forecast'],
        ['operations', 'Describe production methods, quality and supply chains'],
      ]],
      ['growth', '2.6 Growth & expansion', 'both', [
        ['porter', 'Apply Porter’s Five Forces'],
        ['methods', 'Compare methods of expansion'],
      ]],
      ['risk', '2.7 Managing risk', 'both', [
        ['manage', 'Identify and manage business risks, including insurance'],
      ]],
    ]),
    topic('business', 's3', 'Strand 3 — Leading in Business', 'both', [
      ['organisation', '3.1 Leading & managing an organisation', 'both', [
        ['styles', 'Compare leadership styles'],
        ['structures', 'Compare organisational structures'],
      ]],
      ['people', '3.2 Leading & managing people', 'both', [
        ['motivation', 'Apply motivation theories (e.g. Maslow)'],
        ['hr', 'Describe recruitment, selection, training and appraisal'],
      ]],
      ['communication', '3.3 Communication', 'both', [
        ['channels', 'Choose appropriate communication methods'],
      ]],
      ['change', '3.4 Planning & change', 'both', [
        ['forcefield', 'Use force field analysis to plan change'],
        ['planning', 'Distinguish strategic, tactical and contingency planning'],
      ]],
    ]),
    topic('business', 's4', 'Strand 4 — Being Informed and Making Informed Decisions', 'both', [
      ['consumer', '4.1 Informed consumer decisions', 'both', [
        ['rights', 'Explain consumer rights and how to resolve complaints'],
        ['ethical', 'Make ethical, sustainable and digital consumer decisions'],
      ]],
      ['financial', '4.2 Informed financial decisions', 'both', [
        ['apr', 'Compare financial products using APR and AER'],
        ['regulation', 'Explain how financial services are regulated'],
      ]],
      ['employee', '4.3 Being an informed employee', 'both', [
        ['rights', 'Describe employment rights and the role of trade unions'],
        ['payslip', 'Read a payslip: gross pay, deductions and net pay'],
      ]],
    ]),
    topic('business', 'u', 'Unifying Strand — Investigating Business', 'both', [
      ['research', 'Investigating business', 'both', [
        ['questions', 'Form research questions and evaluate sources'],
      ]],
    ]),
  ]
};

/* ------------------------------------------------------------- Accounting */
const accounting: SubjectSyllabus = {
  id: 'accounting', name: 'Accounting', emoji: '📊', color: '#5e8c5a',
  specification: 'Leaving Certificate Accounting syllabus — financial and management accounting',
  assessment: 'One written paper in three sections: financial accounting (Sections 1 and 2) and management accounting (Section 3).',
  sources: ['ncca-accounting', 'sec-papers'], verification: 'needs-review',
  reviewNote: 'Topic list matches the common syllabus breakdown; check against the NCCA syllabus and recent SEC papers.',
  topics: [
    topic('accounting', 'final', 'Final accounts', 'both', [
      ['soletrader', 'Sole trader final accounts', 'both', [
        ['trading', 'Prepare a trading account and calculate cost of sales'],
        ['adjust', 'Apply adjustments: accruals, prepayments, bad debts, closing stock'],
        ['layout', 'Present final accounts and a balance sheet in the correct format'],
      ]],
      ['company', 'Company final accounts', 'HL', [
        ['appropriation', 'Prepare an appropriation account (tax, dividends, reserves)'],
        ['published', 'Present a statement of financial position in published format'],
      ]],
      ['manufacturing', 'Manufacturing accounts', 'both', [
        ['prime', 'Calculate prime cost and cost of manufacture'],
      ]],
      ['service', 'Service firm accounts', 'both', [
        ['accounts', 'Prepare accounts for a service firm'],
      ]],
      ['club', 'Club accounts', 'both', [
        ['iande', 'Prepare an income and expenditure account and accumulated fund'],
        ['subs', 'Prepare a subscriptions account with arrears and prepaid amounts'],
      ]],
    ]),
    topic('accounting', 'adjust', 'Adjustments & analysis', 'both', [
      ['depreciation', 'Depreciation', 'both', [
        ['methods', 'Calculate straight-line and reducing-balance depreciation'],
        ['disposal', 'Record disposal of fixed assets'],
        ['revaluation', 'Record revaluation of fixed assets', 'HL'],
      ]],
      ['theory', 'Accounting theory', 'both', [
        ['concepts', 'Explain accounting concepts and capital vs revenue expenditure'],
      ]],
      ['control', 'Control accounts', 'both', [
        ['accounts', 'Prepare debtors and creditors control accounts'],
      ]],
      ['errors', 'Correction of errors & suspense', 'both', [
        ['journal', 'Correct errors with journal entries and a suspense account'],
        ['types', 'Recognise errors that do and do not affect the trial balance'],
      ]],
      ['incomplete', 'Incomplete records', 'both', [
        ['affairs', 'Use a statement of affairs to find profit'],
        ['markup', 'Use mark-up and margin to find missing figures'],
      ]],
      ['cashflow', 'Cash flow statements', 'HL', [
        ['sections', 'Classify flows into operating, investing and financing'],
        ['reconcile', 'Reconcile operating profit to net cash from operating activities'],
      ]],
      ['ratios', 'Interpretation & ratios', 'both', [
        ['liquidity', 'Calculate and interpret liquidity ratios'],
        ['profitability', 'Calculate and interpret profitability ratios'],
        ['activity', 'Calculate debtor and creditor periods and stock turnover'],
        ['gearing', 'Calculate and interpret gearing', 'HL'],
        ['commentary', 'Interpret ratios and write a commentary for a user of the accounts'],
      ]],
    ]),
    topic('accounting', 'mgmt', 'Management accounting', 'both', [
      ['costing', 'Cost accounting', 'both', [
        ['marginal', 'Use contribution and break-even analysis'],
        ['overheads', 'Apportion and absorb overheads'],
        ['product', 'Classify costs and calculate product and job costs'],
      ]],
      ['budgeting', 'Budgeting', 'both', [
        ['cash', 'Prepare a cash budget'],
        ['flexible', 'Prepare a flexible budget', 'HL'],
      ]],
    ]),
  ]
};

/* ---------------------------------------------------------------- English */
const english: SubjectSyllabus = {
  id: 'english', name: 'English', emoji: '📖', color: '#b3567a',
  specification: 'Leaving Certificate English syllabus; prescribed material for 2027 set by circular 0021/2025',
  assessment: 'Paper 1 (Comprehending and Composing) and Paper 2 (Single text, Comparative study, Poetry).',
  sources: ['ncca-english', 'doe-0021-2025', 'sec-papers'], verification: 'needs-review',
  reviewNote: 'Prescribed texts, comparative modes and poets for 2027 verified against circular 0021/2025. Paper structure not yet checked against the syllabus.',
  topics: [
    topic('english', 'p1', 'Paper 1 — Comprehending & Composing', 'both', [
      ['exam', 'Exam structure & timing', 'both', [
        ['timing', 'Plan time across Paper 1 and Paper 2'],
      ]],
      ['comprehension', 'Comprehending — Question A', 'both', [
        ['style', 'Analyse how language and style create effects'],
        ['genres', 'Recognise the five language genres'],
        ['persuasion', 'Identify persuasive and rhetorical techniques'],
      ]],
      ['qb', 'Comprehending — Question B (functional writing)', 'both', [
        ['register', 'Write in the right register and format for a task'],
      ]],
      ['composing', 'Composing', 'both', [
        ['personal', 'Plan a personal essay'],
        ['speech', 'Write a persuasive speech or article'],
        ['story', 'Shape a short story'],
        ['mechanics', 'Write accurately: punctuation, spelling and grammar'],
      ]],
    ], { paper: 'Paper 1' }),
    topic('english', 'single', 'Single text (2027)', 'both', [
      ['texts', 'Prescribed single texts', 'both', [
        ['list', 'Know which texts may be studied on their own at each level'],
        ['othello', 'Analyse character, theme and key moments in Othello'],
        ['gatsby', 'Analyse character, theme and key moments in The Great Gatsby'],
        ['dracula', 'Analyse character, theme and key moments in Dracula'],
        ['hamnet', 'Analyse character, theme and key moments in Hamnet'],
        ['girl', 'Analyse character, theme and key moments in Girl on an Altar'],
      ]],
    ], { paper: 'Paper 2', verification: 'verified' }),
    topic('english', 'comparative', 'Comparative study (2027)', 'both', [
      ['modes', 'Comparative modes', 'both', [
        ['hl', 'Know and use the 2027 HL modes: Theme or issue, Cultural Context, General Vision and Viewpoint', 'HL'],
        ['ol', 'Know and use the 2027 OL modes: Theme, Social Setting, Relationships', 'OL'],
        ['linking', 'Compare texts using linking language'],
        ['understand', 'Understand what each comparative mode asks you to examine'],
      ]],
      ['texts', 'Comparative texts', 'both', [
        ['list', 'Know the prescribed comparative texts and how they may be chosen'],
      ]],
    ], { paper: 'Paper 2', verification: 'verified' }),
    topic('english', 'poetry', 'Poetry (2027)', 'both', [
      ['bishop', 'Elizabeth Bishop', 'both', [['themes', 'Discuss Bishop’s themes and style']]],
      ['dickinson', 'Emily Dickinson', 'both', [['themes', 'Discuss Dickinson’s themes and style']]],
      ['donne', 'John Donne', 'both', [['themes', 'Discuss Donne’s themes and style']]],
      ['kavanagh', 'Patrick Kavanagh', 'both', [['themes', 'Discuss Kavanagh’s themes and style']]],
      ['mahon', 'Derek Mahon', 'both', [['themes', 'Discuss Mahon’s themes and style']]],
      ['meehan', 'Paula Meehan', 'both', [['themes', 'Discuss Meehan’s themes and style']]],
      ['rich', 'Adrienne Rich', 'both', [['themes', 'Discuss Rich’s themes and style']]],
      ['yeats', 'W. B. Yeats', 'both', [['themes', 'Discuss Yeats’s themes and style']]],
      ['prescribed', 'The 2027 prescribed list', 'both', [['list', 'Know the prescribed poets for your level']]],
      ['devices', 'Poetic techniques', 'both', [
        ['effects', 'Identify poetic devices and explain their effect'],
        ['unseen', 'Respond to an unseen poem'],
      ]],
    ], { paper: 'Paper 2', verification: 'verified' }),
  ]
};

/* ------------------------------------------------------------------ Irish */
const irish: SubjectSyllabus = {
  id: 'irish', name: 'Irish', nativeName: 'Gaeilge', emoji: '☘️', color: '#2f8f8f',
  specification: 'Siollabas Gaeilge na hArdteistiméireachta; prescribed material for 2027 set by circular 0041/2026',
  assessment: 'Béaltriail (40%), Páipéar 1 (Cluastuiscint & Ceapadóireacht) and Páipéar 2 (Léamhthuiscint & Litríocht).',
  sources: ['ncca-irish', 'doe-0041-2026', 'sec-s90-10', 'sec-s76-25'], verification: 'needs-review',
  reviewNote: 'Prescribed prose and poetry verified against circular 0041/2026. Oral details depend on SEC circular S76/25, which has not been checked yet.',
  topics: [
    topic('irish', 'gramadach', 'Gramadach', 'both', [
      ['briathra', 'Briathra agus aimsirí', 'both', [
        ['caite', 'An aimsir chaite — rialta agus neamhrialta'],
        ['laithreach', 'An aimsir láithreach'],
        ['fhaistineach', 'An aimsir fháistineach'],
      ]],
      ['coinniollach', 'An modh coinníollach', 'both', [
        ['foirmeacha', 'Foirmeacha an mhodh coinníollaigh, “dá” agus “mura”'],
      ]],
      ['saor', 'An briathar saor', 'both', [
        ['foirmeacha', 'An briathar saor sna haimsirí éagsúla'],
      ]],
      ['ginideach', 'An tuiseal ginideach', 'both', [
        ['alt', 'An t-alt sa tuiseal ginideach'],
        ['ainmbhriathar', 'An ginideach i ndiaidh ainm briathartha (ag imirt peile)'],
      ]],
      ['uimhreacha', 'Uimhreacha', 'both', [
        ['pearsanta', 'Uimhreacha pearsanta (duine, beirt, triúr…)'],
        ['bunuimhreacha', 'Bunuimhreacha le hainmfhocail (dhá bhád, seacht mbád)'],
      ]],
      ['forainmneacha', 'Forainmneacha réamhfhoclacha', 'both', [
        ['reimniu', 'agam, liom, orm, dom, uaim, fúm, ionam'],
        ['mothuchain', 'Mothúcháin le “ar”: tá brón orm'],
      ]],
      ['aidiacht', 'An aidiacht', 'both', [
        ['comparaid', 'Céimeanna comparáide: níos mó, is fearr'],
      ]],
      ['seimhiu', 'Séimhiú agus urú', 'both', [
        ['rialacha', 'Na príomhrialacha: mo/do/a, ar an, sa, i'],
      ]],
    ], { paper: 'Páipéar 1 & 2' }),
    topic('irish', 'stor', 'Stór focal & nathanna', 'both', [
      ['nathanna', 'Nathanna cainte', 'both', [
        ['aiste', 'Nathanna úsáideacha don aiste agus don chomhrá'],
      ]],
      ['topaici', 'Stór focal de réir téama', 'both', [
        ['timpeallacht', 'An timpeallacht'],
        ['teicneolaiocht', 'An teicneolaíocht agus na meáin shóisialta'],
        ['oige', 'An óige agus an tsláinte'],
        ['sochai', 'Fadhbanna sóisialta: dífhostaíocht, imirce, tithíocht'],
        ['scoil', 'An scoil agus an córas oideachais'],
        ['gaeilge', 'An Ghaeilge agus an Ghaeltacht'],
      ]],
    ]),
    topic('irish', 'beal', 'Béaltriail (40%)', 'both', [
      ['comhra', 'Comhrá', 'both', [
        ['me', 'Labhairt fúm féin, mo theaghlach agus mo cheantar'],
        ['todhchai', 'Pleananna don todhchaí'],
      ]],
      ['sraith', 'Sraith pictiúr', 'both', [
        ['cur', 'Cur síos ar shraith pictiúr san aimsir chaite'],
      ]],
    ], { paper: 'Béaltriail' }),
    topic('irish', 'p1', 'Páipéar 1', 'both', [
      ['cluas', 'Cluastuiscint', 'both', [
        ['focail', 'Focail cheisteacha agus stór focal na nuachta'],
      ]],
      ['ceap', 'Ceapadóireacht', 'both', [
        ['aiste', 'Struchtúr aiste agus ailt'],
        ['litir', 'Litir/ríomhphost a scríobh'],
        ['diospoireacht', 'Díospóireacht agus óráid'],
      ]],
    ], { paper: 'Páipéar 1' }),
    topic('irish', 'p2', 'Páipéar 2 — Litríocht (2027)', 'both', [
      ['leamh', 'Léamhthuiscint', 'both', [
        ['ceisteanna', 'Ceisteanna tuisceana a fhreagairt i d’fhocail féin'],
      ]],
      ['pros', 'Prós ainmnithe', 'both', [
        ['liosta', 'Na téacsanna próis atá ainmnithe do 2027'],
        ['teamai', 'Téamaí agus carachtair an phróis'],
      ]],
      ['filiocht', 'Filíocht ainmnithe', 'both', [
        ['liosta', 'Na dánta atá ainmnithe do 2027'],
        ['teamai', 'Téamaí agus teicníochtaí na filíochta'],
      ]],
      ['breise', 'Litríocht bhreise (Ardleibhéal)', 'HL', [
        ['liosta', 'An prós breise nó an fhilíocht bhreise'],
      ]],
    ], { paper: 'Páipéar 2', verification: 'verified' }),
  ]
};

/* ----------------------------------------------------------------- French */
const french: SubjectSyllabus = {
  id: 'french', name: 'French', nativeName: 'Français', emoji: '🇫🇷', color: '#5b6bb5',
  specification: 'Leaving Certificate French syllabus',
  assessment: 'Oral examination, aural (listening) examination and written paper (reading comprehension and written production).',
  sources: ['ncca-french', 'sec-papers'], verification: 'needs-review',
  reviewNote: 'Mark weightings are widely reported as HL oral 25% / aural 20% / reading 30% / writing 25%, but not yet checked against an SEC document.',
  topics: [
    topic('french', 'grammar', 'Grammaire', 'both', [
      ['tenses', 'Les temps', 'both', [
        ['present', 'Le présent, including with depuis'],
        ['pc', 'Le passé composé — avoir and être'],
        ['pqp', 'Le plus-que-parfait'],
        ['ps', 'Recognise the passé simple in literary texts', 'HL'],
        ['imperatif', 'L’impératif'],
        ['passif', 'Recognise and use the passive voice', 'HL'],
        ['imparfait', 'L’imparfait vs le passé composé'],
        ['futur', 'Le futur simple and le conditionnel'],
        ['subj', 'Le subjonctif after expressions of feeling and necessity', 'HL'],
      ]],
      ['pronouns', 'Les pronoms', 'both', [
        ['objet', 'Direct and indirect object pronouns, y and en'],
        ['relatifs', 'Relative pronouns qui, que, dont, où'],
        ['toniques', 'Stressed pronouns (moi, toi…) and possessives'],
      ]],
      ['negatives', 'La négation', 'both', [
        ['ne', 'Use ne…pas, ne…jamais, ne…rien, ne…plus, ne…personne'],
      ]],
      ['agreement', 'Accords', 'both', [
        ['adj', 'Adjective agreement and position'],
        ['gender', 'Noun gender'],
        ['places', 'Prepositions with countries and towns'],
        ['comparatives', 'Comparatives and superlatives'],
      ]],
    ]),
    topic('french', 'vocab', 'Vocabulaire', 'both', [
      ['themes', 'Thèmes', 'both', [
        ['environnement', 'L’environnement'],
        ['technologie', 'La technologie et les réseaux sociaux'],
        ['ecole', 'L’école et l’avenir'],
        ['sante', 'La santé et le bien-être'],
        ['societe', 'Le travail et les problèmes sociaux'],
        ['famille', 'La famille, les amis et la vie quotidienne'],
        ['voyages', 'Les vacances, les voyages et la francophonie'],
        ['media', 'Les médias, la culture et les loisirs'],
      ]],
      ['idioms', 'Expressions', 'both', [
        ['avoir', 'Common idioms with avoir and faire'],
      ]],
      ['connectors', 'Mots de liaison', 'both', [
        ['opinion', 'Connectors and phrases for giving opinions'],
      ]],
    ]),
    topic('french', 'writing', 'Production écrite', 'both', [
      ['opinion', 'Opinion piece', 'both', [
        ['structure', 'Structure an opinion piece'],
      ]],
      ['diary', 'Journal intime', 'both', [
        ['features', 'Write a diary entry with feelings and mixed tenses'],
      ]],
      ['letter', 'Lettre formelle / informelle', 'both', [
        ['formal', 'Use formal letter layout and phrases'],
      ]],
    ]),
    topic('french', 'oral', 'Oral & aural', 'both', [
      ['oral', 'L’épreuve orale', 'both', [
        ['conversation', 'Answer general conversation questions fluently'],
      ]],
      ['aural', 'Compréhension orale', 'both', [
        ['numbers', 'Recognise numbers, dates and times'],
      ]],
    ]),
    topic('french', 'reading', 'Compréhension écrite', 'both', [
      ['journalistic', 'Journalistic & literary texts', 'both', [
        ['strategy', 'Locate and express answers accurately'],
      ]],
    ]),
  ]
};

export const SYLLABUS: Record<SubjectId, SubjectSyllabus> = {
  accounting, english, irish, maths, chemistry, french, business,
};

export const SUBJECT_ORDER: SubjectId[] = ['accounting', 'english', 'irish', 'maths', 'chemistry', 'french', 'business'];

/* ------------------------------------------------------------- Lookups */

export interface ObjectiveRef { subject: SubjectSyllabus; topic: Topic; subtopic: Subtopic; objective: Objective }

const objectiveIndex = new Map<string, ObjectiveRef>();
for (const subject of Object.values(SYLLABUS)) {
  for (const t of subject.topics) for (const s of t.subtopics) for (const o of s.objectives) {
    objectiveIndex.set(o.id, { subject, topic: t, subtopic: s, objective: o });
  }
}

export function lookupObjective(id: string): ObjectiveRef | undefined {
  return objectiveIndex.get(id);
}

export function allObjectiveIds(): string[] {
  return [...objectiveIndex.keys()];
}

export function subjectOf(objectiveId: string): SubjectId {
  return objectiveId.split('.')[0] as SubjectId;
}

export function topicOf(objectiveId: string): string {
  return objectiveId.split('.').slice(0, 2).join('.');
}
