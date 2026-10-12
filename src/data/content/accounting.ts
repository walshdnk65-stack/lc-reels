import { define } from './define';

/* Original practice material based on the LC Accounting syllabus. Figures are invented for practice. */
export const accounting = define({}, [
  {
    id: 'ac-001', type: 'explainer', objective: 'accounting.final.soletrader.trading',
    title: 'Cost of sales, the layout',
    body: 'Cost of sales is the cost of the goods you actually sold this year, not just what you bought.',
    visual: { kind: 'table', title: 'Cost of sales', headers: ['', '€'], rows: [
      ['Opening stock', '15,000'], ['Add purchases', '70,000'], ['Add carriage inwards', '1,000'],
      ['Less returns outwards', '(3,000)'], ['Cost of goods available', '83,000'], ['Less closing stock', '(18,000)'], ['Cost of sales', '65,000']
    ], totals: [4, 6] },
    bullets: ['Carriage inwards is part of the cost of getting goods. Carriage outwards is a selling expense.', 'Closing stock is valued at the lower of cost and net realisable value.']
  },
  {
    id: 'ac-002', type: 'worked', objective: 'accounting.final.soletrader.trading', difficulty: 2,
    title: 'Gross profit',
    problem: 'Sales €120,000; returns inwards €2,000; opening stock €15,000; purchases €70,000; carriage inwards €1,000; returns outwards €3,000; closing stock €18,000. Calculate gross profit.',
    steps: [
      { body: 'Net sales = 120,000 − 2,000 = **€118,000**', why: 'Returns inwards are goods customers sent back, so they reduce sales.' },
      { body: 'Cost of sales = 15,000 + 70,000 + 1,000 − 3,000 − 18,000 = **€65,000**', why: 'Returns outwards reduce purchases. Closing stock is goods not yet sold.' },
      { body: 'Gross profit = 118,000 − 65,000', why: 'Gross profit = net sales − cost of sales.' }
    ],
    answer: 'Gross profit = €53,000'
  },
  {
    id: 'ac-003', type: 'mcq', objective: 'accounting.final.soletrader.adjust', difficulty: 1,
    question: 'Rent of €1,200 has been prepaid at the year end. How is this treated?',
    options: [
      { text: 'Deduct from rent in the P&L; show as a current asset', correct: true },
      { text: 'Add to rent in the P&L; show as a current liability', why: 'That is the treatment for an accrued (owed) expense.' },
      { text: 'Deduct from rent; show as a current liability', why: 'A prepayment is something the business is owed, so it’s an asset.' },
      { text: 'Ignore it until next year', why: 'The accruals concept requires matching expenses to the period they relate to.' }
    ],
    explain: 'The business has paid for a future period, so this year’s expense is lower. The amount paid in advance is an asset: a prepayment.'
  },
  {
    id: 'ac-004', type: 'flashcard', objective: 'accounting.final.soletrader.adjust',
    front: 'Wages due but unpaid at year end (an accrual): two effects?', back: '1. Add to wages in the P&L\n2. Show as a current liability (accrued expense)',
    explain: 'Under the accruals concept, the expense belongs to the year the work was done, whether or not it has been paid.'
  },
  {
    id: 'ac-005', type: 'flashcard', objective: 'accounting.final.soletrader.adjust', difficulty: 2,
    front: 'The provision for bad debts increases from €800 to €1,100. Effects?', back: 'P&L: €300 expense (the increase only)\nBalance sheet: debtors less the full €1,100 provision',
    explain: 'Only the change in the provision goes through the P&L. A decrease would be a gain.'
  },
  {
    id: 'ac-006', type: 'worked', objective: 'accounting.adjust.depreciation.methods', difficulty: 2,
    title: 'Two depreciation methods',
    problem: 'A machine costs €40,000. Compare depreciation for years 1 and 2 at 20% p.a. using (a) straight line and (b) reducing balance.',
    steps: [
      { body: '(a) Straight line: 20% × 40,000 = **€8,000 every year**. NBV after year 2 = €24,000.', why: 'Straight line always uses the original cost.' },
      { body: '(b) Year 1: 20% × 40,000 = **€8,000** → NBV €32,000', why: 'Reducing balance uses the net book value at the start of each year.' },
      { body: '(b) Year 2: 20% × 32,000 = **€6,400** → NBV €25,600', why: 'The charge falls each year.' }
    ],
    answer: 'Straight line: €8,000 + €8,000. Reducing balance: €8,000 + €6,400.'
  },
  {
    id: 'ac-007', type: 'worked', objective: 'accounting.adjust.depreciation.disposal', difficulty: 3,
    title: 'Profit or loss on disposal',
    problem: 'A van cost €30,000. Accumulated depreciation to the date of sale is €18,000. It is sold for €10,000. Find the profit or loss on disposal.',
    steps: [
      { body: 'Debit the disposal account with the cost: **€30,000**', why: 'Transfer the asset out of the van account at cost.' },
      { body: 'Credit the disposal account with the accumulated depreciation: **€18,000**', why: 'Remove the depreciation built up on this asset.' },
      { body: 'Credit the disposal account with the sale proceeds: **€10,000**', why: 'Money (or trade-in) received for the asset.' },
      { body: 'Balance: 30,000 − 18,000 − 10,000 = €2,000 debit', why: 'A debit balancing figure is a loss. A credit balancing figure would be a profit.' }
    ],
    answer: 'Loss on disposal €2,000 (NBV €12,000, sold for €10,000)',
    visual: { kind: 'table', title: 'Disposal account', headers: ['Dr', '€', 'Cr', '€'], rows: [
      ['Van (cost)', '30,000', 'Acc. depreciation', '18,000'], ['', '', 'Bank', '10,000'], ['', '', 'Loss on disposal (P&L)', '2,000'], ['', '30,000', '', '30,000']
    ], totals: [3] }
  },
  {
    id: 'ac-008', type: 'mcq', objective: 'accounting.adjust.errors.types', difficulty: 2,
    question: 'Which error would NOT be revealed by the trial balance?',
    options: [
      { text: 'A €500 sale to J. Byrne was posted to J. Burns’s account', correct: true },
      { text: 'A purchase was entered in the creditor’s account only', why: 'A one-sided entry makes the totals disagree.' },
      { text: 'Wages of €450 were debited as €540 in the wages account only', why: 'Only one side has the wrong figure, so the totals won’t agree.' },
      { text: 'The debit balance on the bank account was listed as a credit', why: 'This puts the trial balance out by twice the amount.' }
    ],
    explain: 'This is an error of commission: the right amount on the right side, but in the wrong person’s account. Debits still equal credits.'
  },
  {
    id: 'ac-009', type: 'worked', objective: 'accounting.adjust.errors.journal', difficulty: 3,
    title: 'Correcting with a suspense account',
    problem: 'Purchases of €3,600 on credit were correctly credited to the supplier but debited to the purchases account as €6,300. Write the correcting journal entry and state the effect on profit.',
    steps: [
      { body: 'Purchases were overstated by 6,300 − 3,600 = **€2,700**', why: 'Find the difference between what was posted and what should have been.' },
      { body: 'Debits exceeded credits by €2,700, so the suspense account was opened with a **€2,700 credit**', why: 'Suspense holds the difference until the error is found.' },
      { body: 'Correction: **Dr Suspense €2,700, Cr Purchases €2,700**', why: 'Reduce purchases and clear the suspense balance.' },
      { body: 'Lower purchases → lower cost of sales → profit increases', why: 'Say the direction and the amount of the effect.' }
    ],
    answer: 'Dr Suspense 2,700 / Cr Purchases 2,700. Net profit increases by €2,700.'
  },
  {
    id: 'ac-010', type: 'flashcard', objective: 'accounting.adjust.incomplete.markup', difficulty: 2,
    front: 'Mark-up vs margin', back: 'Mark-up = gross profit ÷ cost of sales\nMargin = gross profit ÷ sales',
    explain: 'A 25% mark-up (¼ of cost) is the same as a 20% margin (⅕ of sales). If cost = 100, sales = 125, GP = 25, and 25/125 = 20%.'
  },
  {
    id: 'ac-011', type: 'mcq', objective: 'accounting.adjust.incomplete.markup', difficulty: 2,
    question: 'Sales were €80,000 and the firm applies a 25% mark-up on cost. What was the cost of sales?',
    options: [
      { text: '€64,000', correct: true },
      { text: '€60,000', why: 'That treats 25% as a margin on sales. Mark-up is based on cost.' },
      { text: '€100,000', why: 'Cost must be less than sales.' },
      { text: '€20,000', why: '€20,000 is 25% of sales. Gross profit here is actually €16,000.' }
    ],
    explain: 'Sales = cost × 1.25, so cost = 80,000 ÷ 1.25 = €64,000 and GP = €16,000.'
  },
  {
    id: 'ac-012', type: 'flashcard', objective: 'accounting.adjust.incomplete.affairs',
    front: 'Finding profit from statements of affairs', back: 'Profit = closing capital − opening capital + drawings − capital introduced',
    explain: 'Capital = assets − liabilities. Drawings reduced capital, so add them back. New capital wasn’t earned, so take it off.'
  },
  {
    id: 'ac-013', type: 'worked', objective: 'accounting.final.club.subs', difficulty: 3,
    title: 'Subscriptions account',
    problem: 'A club received €12,000 in subscriptions. Arrears at the start €400; prepaid at the start €300; arrears at the end €250; prepaid at the end €500. Find the subscriptions figure for the income and expenditure account (the club takes credit for arrears).',
    steps: [
      { body: 'Debit side: opening arrears **400**, closing prepaid **500**', why: 'Opening arrears are owed to the club, like debtors. Closing prepayments are owed back to members.' },
      { body: 'Credit side: opening prepaid **300**, bank **12,000**, closing arrears **250**', why: 'These are the reverse items.' },
      { body: 'Credits total 12,550. Debits so far total 900.', why: 'The balancing figure is the income for the year.' },
      { body: 'I&E figure = 12,550 − 900', why: 'The balancing figure on the debit side transfers to the I&E account.' }
    ],
    answer: 'Subscriptions income = €11,650'
  },
  {
    id: 'ac-014', type: 'flashcard', objective: 'accounting.final.club.iande',
    front: 'Accumulated fund', back: 'A club’s equivalent of capital: total assets − total liabilities at the start of the year',
    explain: 'Clubs are not-for-profit, so they use income and expenditure accounts, with a surplus or deficit instead of a profit or loss.'
  },
  {
    id: 'ac-015', type: 'flashcard', objective: 'accounting.adjust.ratios.liquidity',
    front: 'Current ratio and acid test ratio?', back: 'Current = current assets : current liabilities\nAcid test = (current assets − closing stock) : current liabilities',
    explain: 'Rules of thumb: about 2 : 1 for the current ratio and 1 : 1 for the acid test. The acid test excludes stock because stock is the least liquid current asset.'
  },
  {
    id: 'ac-016', type: 'mcq', objective: 'accounting.adjust.ratios.liquidity', difficulty: 2,
    question: 'Current assets €60,000 (including stock of €24,000); current liabilities €30,000. What is the acid test ratio?',
    options: [
      { text: '1.2 : 1', correct: true },
      { text: '2 : 1', why: 'That is the current ratio. The acid test excludes stock.' },
      { text: '0.8 : 1', why: 'That would be stock ÷ current liabilities.' },
      { text: '2.8 : 1', why: 'Subtract stock from current assets rather than adding it.' }
    ],
    explain: '(60,000 − 24,000) ÷ 30,000 = 36,000 ÷ 30,000 = 1.2 : 1. The firm can just about meet its short-term debts without selling stock.'
  },
  {
    id: 'ac-017', type: 'flashcard', objective: 'accounting.adjust.ratios.profitability',
    front: 'Gross margin % and return on capital employed (ROCE)?', back: 'Gross margin = gross profit ÷ sales × 100\nROCE = profit before interest ÷ capital employed × 100',
    explain: 'Compare ROCE with the return available on risk-free investments. If it’s lower, why take the risk?'
  },
  {
    id: 'ac-018', type: 'flashcard', objective: 'accounting.adjust.ratios.gearing', level: 'HL', difficulty: 2,
    front: 'Gearing: what is it and why does it matter?', back: 'The proportion of capital that is fixed-interest (debentures, long-term loans, preference shares) compared with equity',
    explain: 'A highly geared firm must pay interest whatever its profits. That is riskier in a downturn and makes it harder to borrow more. Use the gearing formula your marking scheme uses.'
  },
  {
    id: 'ac-019', type: 'mcq', objective: 'accounting.adjust.cashflow.reconcile', level: 'HL', difficulty: 2,
    question: 'When reconciling operating profit to cash from operating activities, depreciation is…',
    options: [
      { text: 'added back, because it is a non-cash expense', correct: true },
      { text: 'subtracted, because it is an expense', why: 'Depreciation reduced profit, but no cash left the business.' },
      { text: 'shown under investing activities', why: 'Investing activities show cash paid for or received from fixed assets.' },
      { text: 'ignored', why: 'It must be adjusted for, because it reduced profit without using cash.' }
    ],
    explain: 'Other common adjustments: increase in stock or debtors → subtract; increase in creditors → add; loss on disposal → add; profit on disposal → subtract.'
  },
  {
    id: 'ac-020', type: 'mcq', objective: 'accounting.adjust.cashflow.sections', level: 'HL',
    question: 'In a cash flow statement, cash paid to buy new machinery belongs under…',
    options: [
      { text: 'Investing activities', correct: true },
      { text: 'Operating activities', why: 'Operating activities are day-to-day trading cash flows.' },
      { text: 'Financing activities', why: 'Financing covers shares, loans and dividends paid.' }
    ],
    explain: 'Buying and selling fixed assets are investing activities.'
  },
  {
    id: 'ac-021', type: 'worked', objective: 'accounting.mgmt.costing.marginal', difficulty: 2,
    title: 'Break-even point',
    problem: 'Selling price €50 per unit, variable cost €30 per unit, fixed costs €60,000. Find (a) the break-even point and (b) the sales needed for a profit of €20,000.',
    steps: [
      { body: 'Contribution per unit = 50 − 30 = **€20**', why: 'Each unit sold contributes €20 towards fixed costs, then profit.' },
      { body: '(a) BEP = fixed costs ÷ contribution = 60,000 ÷ 20 = **3,000 units**', why: 'At this point total contribution exactly covers fixed costs.' },
      { body: '(b) Units = (fixed costs + target profit) ÷ contribution = 80,000 ÷ 20', why: 'You need enough contribution to cover both.' }
    ],
    answer: '(a) 3,000 units (€150,000 sales); (b) 4,000 units'
  },
  {
    id: 'ac-022', type: 'mcq', objective: 'accounting.mgmt.budgeting.cash', difficulty: 2,
    question: 'Sales: January €10,000, February €12,000. 40% of sales are cash; the rest is received the following month. What are February’s receipts?',
    options: [
      { text: '€10,800', correct: true },
      { text: '€12,000', why: 'Only 40% of February’s sales arrive in February.' },
      { text: '€4,800', why: 'Remember the 60% of January sales collected in February.' },
      { text: '€11,200', why: 'Check which month each percentage applies to.' }
    ],
    explain: '40% × 12,000 (February cash sales) + 60% × 10,000 (January credit sales) = 4,800 + 6,000 = €10,800.'
  },
  {
    id: 'ac-023', type: 'flashcard', objective: 'accounting.final.manufacturing.prime',
    front: 'Prime cost and cost of manufacture?', back: 'Prime cost = direct materials used + direct labour + direct expenses\n\nCost of manufacture = prime cost + factory overheads + opening WIP − closing WIP',
    explain: 'Direct materials used = opening raw materials + purchases (+ carriage in) − closing raw materials.'
  },
  {
    id: 'ac-024', type: 'mcq', objective: 'accounting.final.company.published', level: 'HL',
    question: 'Where does a bank overdraft appear in a statement of financial position?',
    options: [
      { text: 'Current liabilities', correct: true },
      { text: 'Current assets', why: 'An overdraft is money the business owes to the bank.' },
      { text: 'Non-current liabilities', why: 'An overdraft is repayable on demand, so it’s short-term.' },
      { text: 'Capital and reserves', why: 'Reserves belong to the owners or shareholders.' }
    ],
    explain: 'An overdraft is a short-term debt repayable on demand, so it’s a current liability.',
    visual: { kind: 'table', title: 'Statement of financial position (outline)', rows: [
      ['Non-current assets'], ['Current assets'], ['Less: current liabilities  ← ?'], ['= Net current assets'], ['Less: non-current liabilities'], ['= Net assets'], ['Financed by: capital and reserves']
    ], highlight: [2] }
  },
  {
    id: 'ac-025', type: 'technique', objective: 'accounting.final.soletrader.adjust', provenance: 'exam-advice',
    title: 'Layout earns marks in Accounting',
    intro: 'Accounting answers are marked figure by figure, and examiners need to see where each figure came from.',
    dos: ['Number your workings (W1, W2…) and reference them in the main answer', 'Use proper headings: business name, statement title and date', 'Bracket figures being deducted', 'Answer the theory parts. They are quick marks.'],
    donts: ['Don’t show only a final figure with no working', 'Don’t leave a statement unbalanced. Show both totals anyway.', 'Don’t run out of time on one question. Move on and come back.'],
  },
]);
