import { define } from './define';

/* Business: original practice material based on the LC Business specification (2025), first examined 2027. */
export const business = define({}, [
  {
    id: 'bu-001', type: 'flashcard', objective: 'business.s1.stakeholders.map', difficulty: 1,
    front: 'What is a stakeholder?', back: 'Any person or group with an interest in, or affected by, a business’s activities',
    explain: 'Examples: owners/investors, employees, customers, suppliers, the local community, government and lenders.'
  },
  {
    id: 'bu-002', type: 'explainer', objective: 'business.s1.stakeholders.map',
    title: 'The power–interest grid',
    body: 'Map each stakeholder by how much **power** they have over the business and how much **interest** they have in a decision.',
    visual: { kind: 'table', headers: ['', 'Low interest', 'High interest'], rows: [
      ['High power', 'Keep satisfied', 'Manage closely'], ['Low power', 'Monitor', 'Keep informed']
    ] },
    check: {
      question: 'A bank that lent the firm €2m, but which rarely engages with it, is probably…',
      options: [{ text: 'Keep satisfied', correct: true }, { text: 'Keep informed' }, { text: 'Monitor' }],
      explain: 'High power (it could call in the loan) but day-to-day interest is low, so keep it satisfied.'
    }
  },
  {
    id: 'bu-003', type: 'mcq', objective: 'business.s1.forms.types',
    question: 'Which form of business gives its owner unlimited liability?',
    options: [
      { text: 'Sole trader', correct: true },
      { text: 'Private limited company (LTD)', why: 'Shareholders in a company have limited liability.' },
      { text: 'Co-operative', why: 'Members of a registered co-operative have limited liability.' },
      { text: 'State-owned enterprise', why: 'A state-owned enterprise is a company owned by the State.' }
    ],
    explain: 'Unlimited liability means the owner’s personal assets can be used to pay business debts.'
  },
  {
    id: 'bu-004', type: 'flashcard', objective: 'business.s1.forms.esg', difficulty: 1,
    front: 'ESG stands for…', back: 'Environmental · Social · Governance',
    explain: 'ESG reporting tells stakeholders how a business performs beyond profit: emissions, treatment of workers and communities, and how it is run and held accountable.'
  },
  {
    id: 'bu-005', type: 'mcq', objective: 'business.s1.economy.indicators', difficulty: 2,
    question: 'The ECB raises interest rates. Which effect on Irish businesses is most likely?',
    options: [
      { text: 'Borrowing costs rise and consumer spending tends to fall', correct: true },
      { text: 'Loans become cheaper, so investment rises', why: 'Higher rates make loans more expensive.' },
      { text: 'Exports to the UK become cheaper', why: 'That relates to exchange rates, not interest rates directly.' },
      { text: 'There is no effect, because rates only matter to banks', why: 'Rates affect every business and household that borrows or saves.' }
    ],
    explain: 'Higher rates increase repayments on loans and mortgages, which leaves consumers less to spend and makes expansion more expensive.'
  },
  {
    id: 'bu-006', type: 'mcq', objective: 'business.s1.economy.indicators', difficulty: 2,
    question: 'The euro strengthens against sterling. What happens for an Irish firm exporting to the UK?',
    options: [
      { text: 'Its goods become more expensive for UK buyers', correct: true },
      { text: 'Its goods become cheaper for UK buyers', why: 'Each euro now costs UK buyers more pounds.' },
      { text: 'There is no effect', why: 'Exchange rates directly affect export prices.' }
    ],
    explain: 'A stronger euro hurts exporters’ competitiveness but makes imports from the UK cheaper.'
  },
  {
    id: 'bu-007', type: 'flashcard', objective: 'business.s1.policy.eu', difficulty: 2,
    front: 'EU regulation vs EU directive', back: 'Regulation: binding in full and directly applicable in every member state\nDirective: binding as to the result, but each state chooses how to put it into national law by a deadline',
    explain: 'GDPR is a well-known regulation. Directives are “transposed”, in Ireland often through statutory instruments or Acts.'
  },
  {
    id: 'bu-008', type: 'explainer', objective: 'business.s1.global.fdi',
    title: 'Foreign direct investment (FDI)',
    body: 'FDI is when a business from one country sets up or buys operations in another, for example a US tech firm opening an Irish headquarters.',
    bullets: ['Benefits: jobs, tax revenue, exports, skills and spin-off businesses', 'Risks: dependence on a few firms, firms can relocate, profits flow abroad, pressure on housing and infrastructure']
  },
  {
    id: 'bu-010', type: 'builder', objective: 'business.s2.ideas.design', lang: 'en',
    prompt: 'Put the stages of design thinking in order',
    words: ['Empathise', 'Define', 'Ideate', 'Prototype', 'Test'],
    explain: 'Start by understanding the user (empathise), then frame the problem before generating ideas. Testing often loops back to earlier stages.'
  },
  {
    id: 'bu-011', type: 'mcq', objective: 'business.s2.planning.bmc', difficulty: 2,
    question: 'Which of these is NOT one of the nine blocks of the Business Model Canvas?',
    options: [
      { text: 'Mission statement', correct: true },
      { text: 'Value propositions', why: 'This is the central block of the canvas.' },
      { text: 'Key partnerships', why: 'This is one of the nine blocks.' },
      { text: 'Revenue streams', why: 'This is one of the nine blocks.' }
    ],
    explain: 'The nine blocks: customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, cost structure.'
  },
  {
    id: 'bu-012', type: 'mcq', objective: 'business.s2.market.research',
    question: 'A café owner surveys 200 customers about a new menu. This is…',
    options: [
      { text: 'Primary (field) research', correct: true },
      { text: 'Secondary (desk) research', why: 'Secondary research uses data that already exists, like CSO reports.' }
    ],
    explain: 'Primary research collects new data first-hand. It is specific to your question but costs more time and money.'
  },
  {
    id: 'bu-013', type: 'cloze', objective: 'business.s2.market.mix',
    prompt: 'The 7Ps of the marketing mix',
    text: 'Product, {{Price}}, Place, {{Promotion}}, People, {{Process}}, Physical evidence',
    explain: 'The extra three Ps (people, process, physical evidence) matter especially for services.'
  },
  {
    id: 'bu-014', type: 'flashcard', objective: 'business.s2.market.steeple',
    front: 'STEEPLE', back: 'Social · Technological · Economic · Environmental · Political · Legal · Ethical',
    explain: 'It scans the external environment for opportunities and threats before a decision.'
  },
  {
    id: 'bu-015', type: 'mcq', objective: 'business.s2.finance.sources', difficulty: 2,
    question: 'A company wants to build a new factory. Which source of finance is most suitable?',
    options: [
      { text: 'Long-term loan or equity', correct: true },
      { text: 'Bank overdraft', why: 'An overdraft is short-term and expensive. It is for day-to-day cash gaps.' },
      { text: 'Trade credit', why: 'Trade credit is short-term credit from suppliers for stock.' },
      { text: 'Accrued expenses', why: 'Delaying payment of expenses is a short-term source.' }
    ],
    explain: 'Match the term of the finance to the life of the asset. A factory is long-term, so use long-term finance.'
  },
  {
    id: 'bu-016', type: 'worked', objective: 'business.s2.finance.cashflow', difficulty: 1,
    title: 'Reading a cash flow forecast',
    problem: 'Opening cash €5,000. Receipts this month €12,000; payments €15,000. Find the closing cash and say what the business should do.',
    steps: [
      { body: 'Net cash flow = 12,000 − 15,000 = **−€3,000**', why: 'Receipts minus payments.' },
      { body: 'Closing cash = 5,000 + (−3,000) = **€2,000**', why: 'The closing balance becomes next month’s opening balance.' },
      { body: 'The month is cash-negative, so the business should check whether the shortfall repeats', why: 'A forecast exists to spot problems before they happen.' }
    ],
    answer: 'Closing cash €2,000. If deficits continue, consider an overdraft, chasing debtors faster or delaying non-essential payments.'
  },
  {
    id: 'bu-017', type: 'flashcard', objective: 'business.s2.growth.porter',
    front: 'Porter’s Five Forces', back: '1. Threat of new entrants\n2. Bargaining power of suppliers\n3. Bargaining power of buyers\n4. Threat of substitutes\n5. Competitive rivalry',
    explain: 'Use it to judge how attractive and competitive an industry is.'
  },
  {
    id: 'bu-018', type: 'mcq', objective: 'business.s3.organisation.styles',
    question: 'A manager makes all decisions alone and expects instructions to be followed without discussion. Which leadership style?',
    options: [
      { text: 'Autocratic', correct: true },
      { text: 'Democratic', why: 'A democratic leader involves staff in decisions.' },
      { text: 'Laissez-faire', why: 'A laissez-faire leader lets staff make most decisions.' }
    ],
    explain: 'Autocratic leadership can be fast in a crisis, but it may lower morale and waste staff ideas.'
  },
  {
    id: 'bu-019', type: 'short', objective: 'business.s3.organisation.styles',
    question: 'Explain two benefits of a democratic leadership style.',
    model: '1. Higher motivation: staff feel valued when they are consulted, which raises morale and productivity.\n2. Better decisions: involving staff brings in more ideas and expertise, and staff are more committed to decisions they helped make.',
    keyPoints: [
      { point: 'Motivation / morale', keywords: ['motivat', 'morale', 'valued', 'happ'] },
      { point: 'Better ideas / decisions', keywords: ['idea', 'decision', 'expertise', 'creativ'] },
      { point: 'Commitment / ownership', keywords: ['commit', 'ownership', 'support', 'buy-in', 'buy in'] }
    ]
  },
  {
    id: 'bu-020', type: 'builder', objective: 'business.s3.people.motivation', lang: 'en',
    prompt: 'Order Maslow’s hierarchy of needs from the bottom up',
    words: ['Physiological', 'Safety', 'Social', 'Esteem', 'Self-actualisation'],
    explain: 'Lower needs must be largely met before higher needs motivate. At work: pay → job security → team belonging → recognition → challenge and growth.'
  },
  {
    id: 'bu-021', type: 'flashcard', objective: 'business.s3.change.forcefield',
    front: 'Force field analysis', back: 'List the driving forces for a change and the restraining forces against it, rate each, then strengthen the drivers and reduce the restraints.',
    explain: 'It was developed by Kurt Lewin. Example: moving to remote work, where cost savings drive the change and loss of team culture restrains it.'
  },
  {
    id: 'bu-022', type: 'flashcard', objective: 'business.s4.financial.apr',
    front: 'APR vs AER', back: 'APR (annual percentage rate): the yearly cost of borrowing, including charges\nAER (annual equivalent rate): the yearly return on savings, including compounding',
    explain: 'Compare loans by APR (lower is better) and savings accounts by AER (higher is better).'
  },
  {
    id: 'bu-023', type: 'flashcard', objective: 'business.s4.consumer.rights',
    front: 'A product you bought is faulty. What remedies can a consumer seek?', back: 'Repair, replacement, a price reduction, or ending the contract with a refund',
    explain: 'Irish consumer law is mainly the Consumer Rights Act 2022, and the CCPC provides guidance. Check the current details of time limits and the Small Claims procedure.',
    verification: 'needs-review'
  },
  {
    id: 'bu-024', type: 'flashcard', objective: 'business.s4.employee.rights',
    front: 'Where can an employee bring an employment rights complaint in Ireland?', back: 'The Workplace Relations Commission (WRC)',
    explain: 'Trade unions can also represent workers in negotiation and disputes with employers.'
  },
  {
    id: 'bu-025', type: 'technique', objective: 'business.s2.market.mix', provenance: 'exam-advice',
    title: 'State, Explain, Example',
    intro: 'Business answers are usually marked on how well each point is developed.',
    dos: ['State the point clearly using business terminology', 'Explain it in a sentence or two', 'Give an example, ideally from the scenario in the question', 'Apply your answer to the business in the question'],
    donts: ['Don’t write bullet lists of single words', 'Don’t give generic examples when there is a scenario to use', 'Don’t repeat the same point in different words'],
  },
  {
    id: 'bu-026', type: 'flashcard', objective: 'business.u.research.questions', provenance: 'exam-format',
    front: 'How is Leaving Cert Business assessed from 2027?', back: 'Written examination: 60%\nBusiness Alive Investigative Study: 40%',
    explain: 'The investigative study follows a common brief and is assessed externally. Check the SEC guidelines for your year.',
    sourceNote: 'LC Business specification (2025). Weighting to be confirmed against NCCA/SEC documents.'
  },
]);
