import { define } from './define';
import { fc, mc } from './helpers';

/* Third batch of original practice material for LC Accounting. Figures are invented for practice. */
const HL = { level: 'HL' as const };

export const accounting3 = define({}, [
  fc('ac-100', 'accounting.final.soletrader.layout', 'Sole trader balance sheet: the order of the sections', 'Fixed assets\n+ Current assets − Current liabilities (= working capital)\n= Total net assets\nFinanced by: Capital + net profit − drawings (+ long-term loans)', 'Both halves must agree. If they don’t, look at the adjustments first.'),
  mc('ac-101', 'accounting.final.soletrader.layout', 'Current assets €50,000; current liabilities €32,000. What is the working capital?', '€18,000', [['€82,000', 'Working capital is the difference, not the total.'], ['1.56 : 1', 'That is the current ratio, not working capital.'], ['−€18,000', 'Current assets minus current liabilities, so it is positive here.']], 'Working capital (net current assets) = CA − CL. It shows the money available for day-to-day operations.'),
  mc('ac-102', 'accounting.final.soletrader.trading', 'Where does discount received go?', 'Added to gross profit in the profit and loss account (income)', [['Deducted from purchases in the trading account', 'In LC Accounting it is treated as a gain in the P&L.'], ['Shown as an expense', 'Discount allowed is the expense. Discount received is a gain.'], ['A current asset', 'It isn’t an asset.']], 'Discount received is a reduction suppliers give for prompt payment, so it is a gain to the business.'),
  mc('ac-103', 'accounting.final.soletrader.trading', 'Where do returns inwards (sales returns) go?', 'Deducted from sales in the trading account', [['Deducted from purchases', 'That is returns outwards.'], ['An expense in the P&L', 'They reduce sales revenue rather than being an expense.'], ['A current liability', 'They aren’t a liability.']], 'Net sales = sales − returns inwards.'),
  mc('ac-104', 'accounting.final.soletrader.adjust', 'Loan interest of €900 is due but unpaid at the year end. How is it treated?', 'Add to interest expense in the P&L; show €900 as a current liability', [['Ignore until paid', 'The accruals concept requires recording it now.'], ['Deduct from interest expense', 'Unpaid means the expense is understated, so add it.'], ['Add to the loan as a long-term liability', 'Interest due is a short-term liability.']], 'It is an accrued expense: the expense belongs to this year, so it is owed at the year end.'),
  mc('ac-105', 'accounting.final.soletrader.layout', 'Closing stock appears in which two places?', 'The trading account (deducted in cost of sales) and the balance sheet (current asset)', [['Only the balance sheet', 'It also reduces cost of sales.'], ['The P&L and the trading account', 'It isn’t a P&L expense.'], ['Only the trading account', 'It is also an asset at the year end.']], 'Every adjustment has two effects. Closing stock is a classic example.'),
  {
    id: 'ac-106', type: 'worked', objective: 'accounting.final.soletrader.adjust', difficulty: 2,
    title: 'Net profit after adjustments',
    problem: 'Gross profit €60,000. Expenses in the trial balance €35,000. Adjustments: wages due €2,000; rent prepaid €1,500; depreciation €4,000. Find the net profit.',
    steps: [
      { body: 'Expenses = 35,000 + 2,000 (wages due) − 1,500 (rent prepaid) + 4,000 (depreciation) = **€39,500**', why: 'Accruals add to expenses, prepayments reduce them, and depreciation is a new expense.' },
      { body: 'Net profit = 60,000 − 39,500', why: 'Gross profit less total expenses.' }
    ],
    answer: 'Net profit = €20,500'
  },
  fc('ac-107', 'accounting.final.service.accounts', 'How do service firm accounts differ from a trader’s?', 'There is usually no trading account and no cost of sales, because the firm sells services, not goods. Income (e.g. fees) less expenses gives the profit.', 'Examples: solicitors, doctors, accountants. Adjustments such as fees due and prepaid expenses still apply.'),
  mc('ac-108', 'accounting.final.service.accounts', 'Which item would a dental practice NOT normally have in its accounts?', 'A trading account with stock for resale', [['Fees from patients', 'Fees are its main income.'], ['Depreciation of equipment', 'It depreciates its equipment like any business.'], ['Wages of receptionists', 'Wages are a normal expense.']], 'Service firms earn fees rather than buying and reselling goods.'),
  mc('ac-109', 'accounting.final.club.subs', 'At year end, some members have paid next year’s subscription. In the club’s balance sheet these are…', 'A current liability', [['A current asset', 'Subscriptions due from members (arrears) are the asset.'], ['Part of the accumulated fund', 'They are owed back in services next year.'], ['Income for this year', 'They belong to next year.']], 'Prepaid subscriptions are money received for a future period. The club owes members a year of membership.'),
  mc('ac-110', 'accounting.final.club.iande', 'A club runs a bar. Where does the bar profit go?', 'It is calculated in a bar trading account and transferred to income in the I&E account', [['Into the accumulated fund directly', 'It flows through the I&E account first.'], ['It is ignored, because clubs are not-for-profit', 'Clubs can make a profit on activities. Their purpose just isn’t profit.'], ['It is a liability', 'It is income.']], 'Separate trading accounts show members how each activity performs.'),
  mc('ac-111', 'accounting.final.club.iande', 'A club’s income exceeds its expenditure. This is called…', 'A surplus (excess of income over expenditure)', [['A profit', 'Clubs use “surplus” rather than “profit”.'], ['A deficit', 'A deficit is when expenditure exceeds income.'], ['Working capital', 'That is CA − CL.']], 'The surplus is added to the accumulated fund.'),
  mc('ac-112', 'accounting.final.company.published', 'How do preference shares differ from ordinary shares?', 'They get a fixed dividend paid before ordinary shareholders, but usually no vote', [['They have unlimited liability', 'All shareholders in a limited company have limited liability.'], ['They always get a higher dividend', 'Their dividend is fixed, not necessarily higher.'], ['They are a loan to the company', 'Debentures are loans. Preference shares are share capital.']], 'Ordinary shareholders own the company, take more risk, and vote at the AGM.', HL),
  fc('ac-113', 'accounting.final.company.published', 'Authorised vs issued share capital', 'Authorised: the maximum share capital the company may issue under its constitution\nIssued: the shares actually sold to shareholders', 'Only issued share capital is included in the “financed by” total. Authorised capital is shown as a note.', HL),
  mc('ac-114', 'accounting.final.company.appropriation', 'Corporation tax for the year has not been paid at the year end. Where does it appear?', 'As a current liability', [['As a current asset', 'It is owed to Revenue.'], ['As part of share capital', 'Tax has nothing to do with share capital.'], ['Nowhere, until it is paid', 'The accruals concept requires recording it.']], 'Tax is deducted in the profit and loss account, and the unpaid amount is a creditor due within one year.', HL),
  fc('ac-115', 'accounting.final.manufacturing.prime', 'Work in progress (WIP)', 'Partly finished goods at a point in time', 'Opening WIP is added and closing WIP deducted when calculating cost of manufacture.'),
  mc('ac-116', 'accounting.final.manufacturing.prime', 'Opening raw materials €6,000; purchases of raw materials €40,000; carriage in €1,000; closing raw materials €7,000. What is the cost of direct materials consumed?', '€40,000', [['€47,000', 'Deduct the closing stock of raw materials.'], ['€54,000', 'Closing stock is deducted, not added.'], ['€41,000', 'Remember the opening stock (+6,000) and the closing stock (−7,000).']], '6,000 + 40,000 + 1,000 − 7,000 = 40,000.'),
  mc('ac-117', 'accounting.final.manufacturing.prime', 'In a manufacturing firm, depreciation of factory machinery is…', 'A factory overhead', [['Part of prime cost', 'It isn’t a direct cost of a specific unit.'], ['A selling expense', 'It relates to production, not selling.'], ['An administration expense', 'It belongs in the factory.']], 'Factory overheads include indirect wages, factory power, rent, insurance and depreciation of factory assets.'),
  mc('ac-118', 'accounting.adjust.depreciation.methods', 'A machine costs €50,000, has a residual value of €5,000 and a useful life of 5 years. What is the annual straight-line depreciation?', '€9,000', [['€10,000', 'Deduct the residual value first.'], ['€11,000', 'Deduct the residual value, don’t add it.'], ['€45,000', 'That is the total depreciable amount, spread over 5 years.']], '(Cost − residual value) ÷ useful life = 45,000 ÷ 5 = €9,000 per year.'),
  fc('ac-119', 'accounting.adjust.depreciation.methods', 'Why do we depreciate fixed assets?', 'To spread the cost of the asset over its useful life (matching concept), reflecting wear and tear, the passage of time and obsolescence', 'Depreciation is not a cash flow and not a fund for replacing the asset.'),
  {
    id: 'ac-120', type: 'worked', objective: 'accounting.adjust.depreciation.revaluation', level: 'HL', difficulty: 3,
    title: 'Revaluing a building',
    problem: 'Buildings cost €300,000 with accumulated depreciation of €30,000. They are revalued at €400,000. Find the revaluation reserve and give the entries.',
    steps: [
      { body: 'Net book value = 300,000 − 30,000 = **€270,000**', why: 'The gain is measured against NBV, not cost.' },
      { body: 'Gain = 400,000 − 270,000 = **€130,000**', why: 'This unrealised gain goes to a reserve, not to profit.' },
      { body: 'Dr Buildings 100,000; Dr Accumulated depreciation 30,000; Cr Revaluation reserve 130,000', why: 'Raise the asset to its new value and clear its old depreciation.' }
    ],
    answer: 'Revaluation reserve = €130,000. Future depreciation is based on €400,000.'
  },
  mc('ac-121', 'accounting.adjust.errors.types', 'A new van was debited to the motor expenses account. What type of error is this?', 'Error of principle', [['Error of commission', 'Commission is the wrong account of the same type (e.g. the wrong debtor).'], ['Error of original entry', 'The amount was right. The kind of account was wrong.'], ['Compensating error', 'There is no second, offsetting error.']], 'Capital expenditure (an asset) was treated as revenue expenditure. It overstates expenses and understates fixed assets.'),
  mc('ac-122', 'accounting.adjust.errors.types', 'What is a compensating error?', 'Two separate errors of equal amount that cancel each other out', [['An error corrected through the suspense account', 'Compensating errors don’t affect the trial balance.'], ['A posting to the wrong side', 'That is a reversal or a single-sided error.'], ['An error in the original document', 'That is an error of original entry.']], 'Example: sales overcast by €100 and wages overcast by €100. The trial balance still agrees.'),
  {
    id: 'ac-123', type: 'worked', objective: 'accounting.adjust.errors.journal', difficulty: 3,
    title: 'Wrong side of the account',
    problem: 'Discount allowed of €200 was credited to the discount allowed account (the debtor was credited correctly). Correct the error and state the effect on profit.',
    steps: [
      { body: 'It should have been a €200 debit, but was posted as a €200 credit', why: 'Discount allowed is an expense, so it is a debit.' },
      { body: 'To fix it, debit €400: €200 to cancel the wrong credit and €200 for the correct debit', why: 'Posting on the wrong side doubles the effect.' },
      { body: 'Dr Discount allowed €400; Cr Suspense €400', why: 'Credits exceeded debits by €400, so suspense had a €400 debit balance.' }
    ],
    answer: 'Net profit decreases by €400 (expenses were understated).'
  },
  mc('ac-124', 'accounting.adjust.errors.journal', 'A €900 credit sale was entered in the sales book as €90. What is the correction and the effect on profit?', 'Dr Debtor €810, Cr Sales €810. Profit increases by €810', [['Dr Suspense, Cr Sales €810', 'This is an error of original entry. Both sides were recorded at €90, so suspense isn’t involved.'], ['Dr Sales, Cr Debtor €810', 'Sales were understated, so credit sales.'], ['No correction needed', 'Both the debtor and sales are understated.']], 'An error of original entry doesn’t affect the trial balance, but profit and debtors are both understated.'),
  mc('ac-125', 'accounting.adjust.incomplete.affairs', 'A trader’s assets are €85,000 and liabilities €15,000 at the start of the year. What is the opening capital?', '€70,000', [['€100,000', 'Capital = assets − liabilities.'], ['€85,000', 'Liabilities must be deducted.'], ['€15,000', 'That is just the liabilities.']], 'A statement of affairs is a balance sheet built to find the missing capital figure.'),
  {
    id: 'ac-126', type: 'worked', objective: 'accounting.adjust.incomplete.affairs', difficulty: 2,
    title: 'Profit from incomplete records',
    problem: 'Opening capital €70,000; closing capital €90,000; drawings €12,000; the owner introduced €5,000 of new capital. Find the profit.',
    steps: [
      { body: 'Increase in capital = 90,000 − 70,000 = **€20,000**', why: 'The change in net worth over the year.' },
      { body: '+ drawings 12,000', why: 'Drawings reduced capital, so add them back: that profit was earned.' },
      { body: '− capital introduced 5,000', why: 'New capital increased net worth but wasn’t earned.' }
    ],
    answer: 'Net profit = €27,000'
  },
  mc('ac-127', 'accounting.adjust.incomplete.markup', 'Cost of sales is €60,000 and the gross margin is 25%. What were the sales?', '€80,000', [['€75,000', 'That adds 25% of cost (a mark-up). Margin is a percentage of sales.'], ['€45,000', 'Sales must be more than cost.'], ['€85,000', 'Cost is 75% of sales, so sales = 60,000 ÷ 0.75.']], 'If margin = 25% of sales, cost = 75% of sales, so sales = 60,000 ÷ 0.75 = €80,000.'),
  mc('ac-128', 'accounting.adjust.control.accounts', 'Opening creditors €8,000; payments to creditors €50,000; closing creditors €10,000. What were the credit purchases?', '€52,000', [['€48,000', 'Purchases = payments + closing − opening.'], ['€68,000', 'Opening creditors are deducted.'], ['€50,000', 'That ignores the change in amounts owed.']], 'Build the creditors control account. The balancing figure is credit purchases: 50,000 + 10,000 − 8,000.'),
  mc('ac-129', 'accounting.adjust.control.accounts', 'A customer is also a supplier, and the balances are set off against each other. How is this contra entry recorded?', 'Dr Creditors control, Cr Debtors control', [['Dr Debtors control, Cr Creditors control', 'Both balances are reduced: debtors by a credit, creditors by a debit.'], ['Dr Bank, Cr Debtors control', 'No cash changes hands.'], ['No entry is needed', 'Both control accounts must be reduced.']], 'A set-off reduces what you owe and what you’re owed by the same amount.'),
  fc('ac-130', 'accounting.adjust.control.accounts', 'Why keep control accounts?', 'They check the accuracy of the ledgers, help locate errors, give quick totals of debtors and creditors, and deter fraud', 'The control account balance should equal the total of the individual ledger balances.'),
  mc('ac-131', 'accounting.adjust.cashflow.reconcile', 'In the reconciliation of operating profit to operating cash flow, an increase in stock is…', 'Deducted', [['Added', 'Buying more stock uses cash.'], ['Ignored', 'Changes in working capital affect cash.'], ['Shown under investing activities', 'Stock is part of working capital, in operating activities.']], 'Increases in current assets (stock, debtors) are deducted. Increases in current liabilities (creditors) are added.', HL),
  mc('ac-132', 'accounting.adjust.cashflow.sections', 'Dividends paid to shareholders are normally shown under…', 'Financing activities', [['Investing activities', 'Investing covers fixed assets and investments.'], ['Operating activities, as a cost of trading', 'Dividends are a return to owners, not a trading cost.'], ['They are not shown', 'Cash paid out must appear.']], 'Financing activities include issuing shares, taking out or repaying loans, and paying dividends. Check the format in recent marking schemes.', HL),
  {
    id: 'ac-133', type: 'worked', objective: 'accounting.adjust.cashflow.reconcile', level: 'HL', difficulty: 2,
    title: 'Cash from operating activities',
    problem: 'Operating profit €50,000; depreciation €8,000; stock increased by €3,000; debtors decreased by €2,000; creditors decreased by €4,000. Find the net cash from operating activities.',
    steps: [
      { body: '50,000 + 8,000 = 58,000', why: 'Add back depreciation (non-cash).' },
      { body: '− 3,000 (stock up)', why: 'More cash is tied up in stock.' },
      { body: '+ 2,000 (debtors down)', why: 'Customers paid in more cash.' },
      { body: '− 4,000 (creditors down)', why: 'The firm paid off suppliers using cash.' }
    ],
    answer: '€53,000'
  },
  mc('ac-134', 'accounting.adjust.cashflow.reconcile', 'In the reconciliation, a profit on the sale of a fixed asset is…', 'Deducted', [['Added', 'The profit increased operating profit but isn’t operating cash.'], ['Shown under financing', 'The sale proceeds appear under investing.'], ['Ignored', 'It must be removed from operating profit.']], 'The full proceeds go under investing activities, so the profit is removed from the operating section to avoid counting it twice.', HL),
  fc('ac-135', 'accounting.adjust.ratios.commentary', 'Users of accounts and what each wants to know', 'Shareholders: profitability and dividends\nBank or lenders: liquidity, gearing, security\nSuppliers: ability to pay (liquidity)\nEmployees: job security\nRevenue: taxable profit', 'Commentary questions are usually written for one user. Answer from their point of view.'),
  mc('ac-136', 'accounting.adjust.ratios.profitability', 'Profit before interest €40,000; capital employed €250,000. What is the ROCE?', '16%', [['6.25%', 'Put profit on top: 40,000 ÷ 250,000.'], ['1.6%', 'Check the decimal: 0.16 × 100 = 16%.'], ['160%', '40,000 ÷ 250,000 = 0.16.']], 'ROCE = profit before interest ÷ capital employed × 100. Compare it with the return on a safe investment.'),
  mc('ac-137', 'accounting.adjust.ratios.profitability', 'Net profit €18,000; sales €120,000. What is the net profit percentage?', '15%', [['6.7%', 'Divide profit by sales, not the reverse.'], ['18%', 'Express as a percentage of sales.'], ['150%', 'Check: 18,000 ÷ 120,000 = 0.15.']], 'Net margin shows how much of each €1 of sales becomes profit after all expenses.'),
  mc('ac-138', 'accounting.adjust.ratios.activity', 'Trade creditors €9,000; credit purchases €108,000. What is the creditors payment period (to the nearest day)?', '30 days', [['12 days', 'Multiply by 365.'], ['365 days', 'Check: 9,000 ÷ 108,000 × 365.'], ['83 days', 'Creditors go on top.']], '9,000 ÷ 108,000 × 365 ≈ 30 days. Compare it with the debtors collection period.'),
  mc('ac-139', 'accounting.adjust.ratios.commentary', 'Ordinary dividends of €40,000 are paid on 200,000 ordinary shares. What is the dividend per share?', '20c', [['€5', 'Divide dividends by the number of shares.'], ['2c', 'Check: 40,000 ÷ 200,000 = 0.20.'], ['€2', 'Check the decimal place.']], 'Dividend per share = ordinary dividends ÷ number of ordinary shares.', HL),
  mc('ac-140', 'accounting.adjust.ratios.commentary', 'Profit after tax and preference dividends €60,000; 300,000 ordinary shares. What are the earnings per share?', '20c', [['€5', 'Divide earnings by shares, not the reverse.'], ['€0.02', 'Check: 60,000 ÷ 300,000 = 0.20.'], ['€60,000', 'EPS is per share.']], 'EPS = profit available to ordinary shareholders ÷ number of ordinary shares.', HL),
  {
    id: 'ac-141', type: 'short', objective: 'accounting.adjust.ratios.commentary', difficulty: 2,
    question: 'A company’s acid test ratio fell from 1.1 : 1 to 0.6 : 1. Comment on this for a bank considering an overdraft request.',
    model: 'Liquidity has worsened significantly. At 0.6 : 1 the company has only 60c of liquid assets for every €1 of short-term debt, well below the 1 : 1 guideline, so it may struggle to pay its debts as they fall due. Lending on overdraft is risky. The bank should seek security and investigate why liquidity fell, for example rising stock or falling cash.',
    keyPoints: [
      { point: 'Liquidity has deteriorated', keywords: ['deteriorat', 'worse', 'fallen', 'fell', 'decline', 'weak'] },
      { point: 'Below the 1 : 1 guideline', keywords: ['1:1', '1 : 1', 'ideal', 'guideline', 'below'] },
      { point: 'May not meet short-term debts', keywords: ['debts', 'pay', 'short-term', 'creditors', 'liabilit'] },
      { point: 'Risk for the lender, with a recommendation', keywords: ['risk', 'security', 'refuse', 'lend', 'caution', 'recommend'] }
    ]
  },
  fc('ac-142', 'accounting.mgmt.costing.product', 'Fixed, variable and semi-variable costs', 'Fixed: stay the same as output changes (rent)\nVariable: change in proportion to output (raw materials)\nSemi-variable: a fixed part plus a variable part (a phone bill with a standing charge)', 'Fixed costs per unit fall as output rises. Variable cost per unit stays constant.'),
  mc('ac-143', 'accounting.mgmt.costing.product', 'In a furniture factory, which is a direct cost?', 'The wood used to make each table', [['Factory rent', 'Rent can’t be traced to an individual table.'], ['The supervisor’s salary', 'Supervision is indirect labour.'], ['Factory insurance', 'Insurance is an overhead.']], 'Direct costs can be traced directly to a unit of output. Indirect costs (overheads) are shared out.'),
  {
    id: 'ac-144', type: 'worked', objective: 'accounting.mgmt.costing.product', difficulty: 2,
    title: 'Job costing and price',
    problem: 'Job 42 uses materials €400 and 10 labour hours at €20 per hour, and absorbs overhead at €15 per machine hour for 10 hours. The firm adds 20% to cost. Find the selling price.',
    steps: [
      { body: 'Materials 400 + labour (10 × 20) 200 = **€600 prime cost**', why: 'Direct costs first.' },
      { body: 'Overhead absorbed = 10 × 15 = **€150**', why: 'Use the predetermined absorption rate.' },
      { body: 'Total cost = 600 + 150 = **€750**', why: 'Full cost of the job.' },
      { body: 'Price = 750 × 1.20', why: 'A mark-up of 20% on cost.' }
    ],
    answer: 'Selling price €900 (profit €150)'
  },
  mc('ac-145', 'accounting.mgmt.costing.overheads', 'Factory rent of €50,000 is shared by floor area. Department A uses 600 m² of the 1,000 m² total. How much rent does it bear?', '€30,000', [['€25,000', 'Split by area, not equally.'], ['€20,000', 'That is Department B’s share (400 m²).'], ['€50,000', 'Only 60% of the space is A’s.']], '600/1,000 × 50,000 = €30,000. Choose a fair basis for each overhead: area for rent, value for insurance, staff numbers for canteen costs.'),
  mc('ac-146', 'accounting.mgmt.costing.marginal', 'Selling price €40 per unit, variable cost €24, fixed costs €20,000. What is the break-even point in sales value?', '€50,000', [['€20,000', 'That is the fixed costs.'], ['1,250 units', 'That is the break-even point in units. The question asks for sales value (1,250 × €40).'], ['€33,333', 'Divide fixed costs by the contribution/sales ratio (40%), not by 60%.']], 'Contribution per unit = €16, a C/S ratio of 16/40 = 40%. BEP (€) = 20,000 ÷ 0.4 = €50,000.'),
  mc('ac-147', 'accounting.mgmt.budgeting.cash', 'Budgeted sales 10,000 units; required closing stock 2,000 units; opening stock 1,500 units. How many units must be produced?', '10,500', [['13,500', 'Opening stock is deducted, not added.'], ['9,500', 'Closing stock is added, opening deducted.'], ['10,000', 'Stock levels change, so production differs from sales.']], 'Production = sales + closing stock − opening stock.'),
  fc('ac-148', 'accounting.mgmt.budgeting.cash', 'Why do businesses prepare budgets?', 'Planning · Control (comparing actual with budget) · Coordination of departments · Motivation through targets · Communication of goals', 'A cash budget in particular warns of shortfalls in time to arrange an overdraft.'),
  mc('ac-149', 'accounting.adjust.theory.concepts', 'Which concept justifies valuing assets at cost rather than their break-up (sale) value?', 'Going concern', [['Prudence', 'Prudence is about not overstating assets and profit.'], ['Materiality', 'Materiality concerns whether an amount is significant.'], ['Entity', 'The entity concept separates the business from its owner.']], 'Going concern assumes the business will keep trading for the foreseeable future, so assets aren’t valued as if they were about to be sold off.'),
]);
