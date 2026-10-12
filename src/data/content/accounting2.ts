import { define } from './define';

/* More original practice material for LC Accounting. Figures are invented for practice. */
export const accounting2 = define({}, [
  {
    id: 'ac-030', type: 'mcq', objective: 'accounting.adjust.theory.concepts', difficulty: 2,
    question: 'Closing stock is valued at the lower of cost and net realisable value. Which concept is this?',
    options: [
      { text: 'Prudence', correct: true },
      { text: 'Going concern', why: 'Going concern assumes the business will keep trading.' },
      { text: 'Consistency', why: 'Consistency means using the same methods from year to year.' },
      { text: 'Accruals', why: 'Accruals matches income and expenses to the period they relate to.' }
    ],
    explain: 'Prudence means you don’t overstate assets or profit. If stock will sell for less than it cost, you recognise the loss now.'
  },
  {
    id: 'ac-031', type: 'flashcard', objective: 'accounting.adjust.theory.concepts',
    front: 'Capital vs revenue expenditure', back: 'Capital: buying or improving fixed assets (goes to the balance sheet)\nRevenue: day-to-day running costs (goes to the P&L)',
    explain: 'Buying a van is capital. Its insurance, diesel and repairs are revenue. Classifying them wrongly misstates both profit and assets.'
  },
  {
    id: 'ac-032', type: 'mcq', objective: 'accounting.final.soletrader.trading', difficulty: 1,
    question: 'Where does carriage outwards go?',
    options: [
      { text: 'Profit and loss account, as a selling and distribution expense', correct: true },
      { text: 'Trading account, added to purchases', why: 'That is carriage inwards: the cost of bringing goods in.' },
      { text: 'Balance sheet, as a current asset', why: 'It is an expense, not an asset.' },
      { text: 'Deducted from sales', why: 'Returns inwards are deducted from sales. Carriage outwards is an expense.' }
    ],
    explain: 'Carriage outwards is the cost of delivering goods to customers, so it is a selling expense.'
  },
  {
    id: 'ac-033', type: 'mcq', objective: 'accounting.final.soletrader.adjust', difficulty: 2,
    question: 'The owner took stock costing €500 for personal use. The correct entry is…',
    options: [
      { text: 'Debit drawings €500, credit purchases €500', correct: true },
      { text: 'Debit purchases €500, credit drawings €500', why: 'That reverses the entry.' },
      { text: 'Debit drawings €500, credit sales €500', why: 'The goods were not sold. Reduce purchases at cost.' },
      { text: 'No entry needed', why: 'Drawings must be recorded or profit will be misstated.' }
    ],
    explain: 'Drawings increase. Purchases are reduced because the stock was not used for business.'
  },
  {
    id: 'ac-034', type: 'worked', objective: 'accounting.final.company.appropriation', level: 'HL', difficulty: 2,
    title: 'Appropriation of company profit',
    problem: 'Profit before tax €200,000. Corporation tax €40,000. Ordinary dividends paid €50,000. Find the profit retained for the year.',
    steps: [
      { body: 'Profit after tax = 200,000 − 40,000 = **€160,000**', why: 'Tax is deducted first.' },
      { body: 'Less dividends: 160,000 − 50,000', why: 'Dividends are a distribution to shareholders, not an expense.' }
    ],
    answer: 'Retained profit = €110,000 (added to the profit and loss balance / revenue reserves)',
    visual: { kind: 'table', title: 'Appropriation (extract)', headers: ['', '€'], rows: [
      ['Profit before tax', '200,000'], ['Less corporation tax', '(40,000)'], ['Profit after tax', '160,000'], ['Less dividends paid', '(50,000)'], ['Retained profit', '110,000']
    ], totals: [2, 4] }
  },
  {
    id: 'ac-035', type: 'flashcard', objective: 'accounting.final.company.published', level: 'HL',
    front: 'Debentures: what are they and where do they appear?', back: 'Long-term loans to a company at a fixed rate of interest.\nThey are a non-current liability; the interest is an expense in the P&L.',
    explain: 'Debenture holders are lenders, not owners. Any interest due but unpaid at year end is an accrual.'
  },
  {
    id: 'ac-036', type: 'mcq', objective: 'accounting.final.company.published', level: 'HL', difficulty: 2,
    question: '10,000 €1 ordinary shares are issued at €1.50 each. How much goes to the share premium account?',
    options: [
      { text: '€5,000', correct: true },
      { text: '€15,000', why: '€15,000 is the total cash received.' },
      { text: '€10,000', why: 'The nominal value goes to share capital.' },
      { text: '€0', why: 'Any amount above nominal value is share premium.' }
    ],
    explain: 'Share premium = (1.50 − 1.00) × 10,000 = €5,000. It is a capital reserve.'
  },
  {
    id: 'ac-037', type: 'mcq', objective: 'accounting.final.manufacturing.prime', difficulty: 1,
    question: 'In a manufacturing account, which is a factory overhead?',
    options: [
      { text: 'Rent of the factory', correct: true },
      { text: 'Salary of the sales manager', why: 'That is a selling expense in the P&L.' },
      { text: 'Raw materials used', why: 'Direct materials are part of prime cost.' },
      { text: 'Wages of machine operators', why: 'Direct labour is part of prime cost.' }
    ],
    explain: 'Factory overheads are indirect costs of production, such as factory rent, power, supervisors’ wages and depreciation of factory machinery.'
  },
  {
    id: 'ac-038', type: 'worked', objective: 'accounting.final.manufacturing.prime', difficulty: 2,
    title: 'Cost of manufacture',
    problem: 'Direct materials used €40,000, direct labour €30,000, direct expenses €5,000, factory overheads €25,000, opening work in progress €8,000, closing work in progress €6,000. Find the cost of manufacture.',
    steps: [
      { body: 'Prime cost = 40,000 + 30,000 + 5,000 = **€75,000**', why: 'Prime cost is all the direct costs.' },
      { body: 'Add factory overheads: 75,000 + 25,000 = **€100,000**', why: 'Indirect production costs come next.' },
      { body: 'Adjust for WIP: 100,000 + 8,000 − 6,000', why: 'Opening WIP is finished this year, and closing WIP is not yet finished.' }
    ],
    answer: 'Cost of manufacture = €102,000'
  },
  {
    id: 'ac-039', type: 'mcq', objective: 'accounting.adjust.control.accounts', difficulty: 2,
    question: 'Which item appears on the CREDIT side of the debtors control account?',
    options: [
      { text: 'Cash received from debtors', correct: true },
      { text: 'Credit sales', why: 'Credit sales increase debtors, so they are debited.' },
      { text: 'Dishonoured cheques', why: 'A dishonoured cheque reinstates the debt, so it is debited.' },
      { text: 'Interest charged on overdue accounts', why: 'This increases what debtors owe, so it is debited.' }
    ],
    explain: 'Credit side items reduce debtors: cash received, discount allowed, returns inwards, bad debts written off and contra entries.'
  },
  {
    id: 'ac-040', type: 'mcq', objective: 'accounting.adjust.ratios.activity', difficulty: 2,
    question: 'Trade debtors €15,000; credit sales €182,500. What is the debtors collection period?',
    options: [
      { text: '30 days', correct: true },
      { text: '12 days', why: 'Use debtors ÷ credit sales × 365.' },
      { text: '1 month exactly by definition', why: 'You have to calculate it.' },
      { text: '73 days', why: 'Check the division: 15,000 / 182,500 = 0.0822.' }
    ],
    explain: '15,000 / 182,500 × 365 = 30 days. Compare it with the credit terms the firm offers its customers.'
  },
  {
    id: 'ac-041', type: 'flashcard', objective: 'accounting.adjust.ratios.activity',
    front: 'Rate of stock turnover', back: 'Cost of sales ÷ average stock\n(average stock = (opening + closing) ÷ 2)',
    explain: 'A higher figure means stock sells faster. Compare it with last year and with similar businesses: a supermarket turns stock over far faster than a jeweller.'
  },
  {
    id: 'ac-042', type: 'mcq', objective: 'accounting.adjust.ratios.gearing', level: 'HL', difficulty: 2,
    question: 'Profit before interest and tax €60,000; debenture interest €5,000. What is interest cover?',
    options: [
      { text: '12 times', correct: true },
      { text: '11 times', why: 'Use profit before interest, not after.' },
      { text: '8.3%', why: 'Interest cover is expressed in “times”, not as a percentage.' },
      { text: '0.08 times', why: 'Put profit on top: profit ÷ interest.' }
    ],
    explain: 'Interest cover = profit before interest ÷ interest = 60,000 ÷ 5,000 = 12 times. The interest is very safely covered.'
  },
  {
    id: 'ac-043', type: 'mcq', objective: 'accounting.mgmt.costing.overheads', difficulty: 2,
    question: 'Budgeted factory overheads €120,000; budgeted machine hours 40,000. What is the overhead absorption rate?',
    options: [
      { text: '€3 per machine hour', correct: true },
      { text: '€0.33 per machine hour', why: 'Divide overheads by hours, not the other way round.' },
      { text: '€30 per machine hour', why: 'Check the zeros: 120,000 ÷ 40,000 = 3.' },
      { text: '€3 per unit', why: 'The rate is per machine hour, the basis given.' }
    ],
    explain: 'OAR = budgeted overheads ÷ budgeted activity. A job using 10 machine hours absorbs €30 of overhead.'
  },
  {
    id: 'ac-044', type: 'mcq', objective: 'accounting.mgmt.costing.marginal', difficulty: 1,
    question: 'Budgeted sales are 5,000 units and the break-even point is 3,000 units. What is the margin of safety?',
    options: [
      { text: '2,000 units', correct: true },
      { text: '8,000 units', why: 'Subtract break-even from sales.' },
      { text: '60%', why: 'Break-even is 60% of sales. The margin of safety is the other 40%.' },
      { text: '3,000 units', why: 'That is the break-even point itself.' }
    ],
    explain: 'Margin of safety = sales − break-even sales = 2,000 units (40% of sales). Sales can fall that far before a loss.'
  },
  {
    id: 'ac-045', type: 'mcq', objective: 'accounting.mgmt.budgeting.flexible', level: 'HL', difficulty: 2,
    question: 'Variable cost is €4 per unit and fixed costs are €10,000. Actual output is 6,000 units. What is the flexed budget total cost?',
    options: [
      { text: '€34,000', correct: true },
      { text: '€24,000', why: 'Fixed costs stay in the budget.' },
      { text: '€10,000', why: 'You need the variable costs as well.' },
      { text: '€64,000', why: 'Multiply only the variable cost per unit by output.' }
    ],
    explain: 'Flexed budget = fixed + (variable per unit × actual output) = 10,000 + 24,000 = €34,000. Compare it with actual cost to find meaningful variances.'
  },
  {
    id: 'ac-046', type: 'mcq', objective: 'accounting.final.soletrader.adjust', difficulty: 2,
    question: 'A debt written off last year is unexpectedly paid. How is this recorded?',
    options: [
      { text: 'Debit bank, credit bad debts recovered (income in the P&L)', correct: true },
      { text: 'Debit bad debts, credit bank', why: 'Cash is coming in, so bank is debited.' },
      { text: 'Increase the provision for bad debts', why: 'This is a recovery, not a new expected loss.' },
      { text: 'Credit sales', why: 'The sale was recorded last year. This is a recovery.' }
    ],
    explain: 'Bad debts recovered is a gain in the year the cash is received.'
  },
  {
    id: 'ac-047', type: 'mcq', objective: 'accounting.adjust.errors.types', difficulty: 1,
    question: 'An invoice for €800 was completely left out of the books. Will the trial balance still balance?',
    options: [
      { text: 'Yes: it is an error of omission', correct: true },
      { text: 'No: one side will be €800 short', why: 'Neither side was recorded, so both sides are short by the same amount.' },
      { text: 'No: it must go to suspense', why: 'Suspense is only used when the trial balance totals differ.' }
    ],
    explain: 'Errors of omission, commission, principle, original entry and complete reversal don’t affect the trial balance totals.'
  },
  {
    id: 'ac-048', type: 'flashcard', objective: 'accounting.final.club.iande', difficulty: 2,
    front: 'Receipts & payments account vs income & expenditure account', back: 'Receipts & payments: a summary of cash and bank (like a cash book). Includes capital items; no adjustments.\nIncome & expenditure: the club’s “P&L”. Revenue items only, adjusted for accruals and prepayments.',
    explain: 'The closing balance of the receipts and payments account is cash at bank, which goes into the balance sheet.'
  },
]);
