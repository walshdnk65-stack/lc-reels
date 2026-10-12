import { define } from './define';

/* More original practice material for LC Business (2025 specification). */
export const business2 = define({}, [
  {
    id: 'bu-030', type: 'mcq', objective: 'business.s1.forms.types', difficulty: 2,
    question: 'Which is a defining principle of a co-operative?',
    options: [
      { text: 'One member, one vote', correct: true },
      { text: 'Votes in proportion to shares held', why: 'That is how votes work in a company.' },
      { text: 'Owned by the State', why: 'That describes a state-owned enterprise.' },
      { text: 'Unlimited liability for members', why: 'Registered co-operatives give members limited liability.' }
    ],
    explain: 'Co-operatives are run democratically by their members. Examples include credit unions and many agricultural co-ops.'
  },
  {
    id: 'bu-031', type: 'flashcard', objective: 'business.s1.economy.indicators',
    front: 'Inflation: what is it and how does it affect a business?', back: 'A general rise in prices over time.\nBusinesses face higher costs (wages, materials); consumers’ spending power falls; exports may become less competitive.',
    explain: 'In Ireland, inflation is measured by the CSO, using the Consumer Price Index (CPI) and the HICP.'
  },
  {
    id: 'bu-032', type: 'mcq', objective: 'business.s2.market.steeple', difficulty: 1,
    question: 'In a SWOT analysis, which two are external to the business?',
    options: [
      { text: 'Opportunities and threats', correct: true },
      { text: 'Strengths and weaknesses', why: 'These are internal factors the business controls.' },
      { text: 'Strengths and threats', why: 'Strengths are internal.' },
      { text: 'Weaknesses and opportunities', why: 'Weaknesses are internal.' }
    ],
    explain: 'STEEPLE analysis is a good way to find the external opportunities and threats.'
  },
  {
    id: 'bu-033', type: 'mcq', objective: 'business.s2.market.research', difficulty: 2,
    question: 'A gym targets “young professionals who value convenience and status”. Which kind of segmentation is this mainly?',
    options: [
      { text: 'Psychographic', correct: true },
      { text: 'Geographic', why: 'Geographic segmentation divides by location.' },
      { text: 'Demographic only', why: '“Young professionals” is demographic, but values and lifestyle are psychographic.' },
      { text: 'Behavioural', why: 'Behavioural segmentation is about how people use or buy a product.' }
    ],
    explain: 'Psychographic segmentation groups people by lifestyle, values, attitudes and personality.'
  },
  {
    id: 'bu-034', type: 'flashcard', objective: 'business.s2.market.mix',
    front: 'USP', back: 'Unique Selling Point: the feature or benefit that makes a product stand out from its competitors',
    explain: 'A strong USP should be clear and valued by customers, and hard for rivals to copy.'
  },
  {
    id: 'bu-035', type: 'mcq', objective: 'business.s2.market.mix', difficulty: 2,
    question: 'A new streaming service launches at a very low price to win customers quickly. Which pricing strategy is this?',
    options: [
      { text: 'Penetration pricing', correct: true },
      { text: 'Price skimming', why: 'Skimming starts high and lowers the price over time.' },
      { text: 'Cost-plus pricing', why: 'Cost-plus adds a mark-up to cost.' },
      { text: 'Premium pricing', why: 'Premium pricing keeps prices high to signal quality.' }
    ],
    explain: 'Penetration pricing builds market share fast. The risk is that customers resist when prices later rise.'
  },
  {
    id: 'bu-036', type: 'builder', objective: 'business.s2.market.mix', lang: 'en',
    prompt: 'Put the stages of the product life cycle in order',
    words: ['Introduction', 'Growth', 'Maturity', 'Decline'],
    explain: 'Businesses use extension strategies, such as new features, new markets or rebranding, to delay decline.'
  },
  {
    id: 'bu-037', type: 'mcq', objective: 'business.s2.finance.sources', difficulty: 2,
    question: 'Compared with a bank loan, raising money by selling shares (equity)…',
    options: [
      { text: 'needs no repayment, but dilutes the owners’ control', correct: true },
      { text: 'must be repaid with interest', why: 'Equity is not repaid. Shareholders may receive dividends.' },
      { text: 'leaves ownership unchanged', why: 'New shareholders become part-owners.' },
      { text: 'always costs less than debt', why: 'Investors expect a return, and giving up ownership has a cost.' }
    ],
    explain: 'Debt keeps control but adds interest and repayments. Equity avoids repayments but shares the profits and control.'
  },
  {
    id: 'bu-038', type: 'mcq', objective: 'business.s2.growth.methods', difficulty: 2,
    question: 'A chocolate manufacturer takes over its cocoa supplier. This is…',
    options: [
      { text: 'Backward vertical integration', correct: true },
      { text: 'Forward vertical integration', why: 'Forward integration moves towards the customer, e.g. buying shops.' },
      { text: 'Horizontal integration', why: 'Horizontal integration joins firms at the same stage, e.g. two chocolate makers.' },
      { text: 'A strategic alliance', why: 'An alliance is a cooperation agreement, not a takeover.' }
    ],
    explain: 'Backward integration secures supply and can lower costs, but it requires expertise in a new activity.'
  },
  {
    id: 'bu-039', type: 'flashcard', objective: 'business.s2.risk.manage',
    front: 'Four ways to manage a business risk', back: 'Avoid it · Reduce it · Transfer it (e.g. insurance) · Accept it',
    explain: 'Example: the risk of fire is reduced with alarms and training, and transferred with insurance.'
  },
  {
    id: 'bu-040', type: 'flashcard', objective: 'business.s2.risk.manage', difficulty: 2,
    front: 'The principles of insurance', back: 'Utmost good faith · Insurable interest · Indemnity · Contribution · Subrogation',
    explain: 'Indemnity means you are restored to your position before the loss. You can’t profit from a claim.'
  },
  {
    id: 'bu-041', type: 'mcq', objective: 'business.s3.people.motivation', difficulty: 2,
    question: 'A manager believes staff dislike work and must be closely supervised. In McGregor’s theory, this is…',
    options: [
      { text: 'Theory X', correct: true },
      { text: 'Theory Y', why: 'Theory Y assumes people enjoy work and seek responsibility.' },
      { text: 'A hygiene factor', why: 'Hygiene factors come from Herzberg’s theory.' },
      { text: 'Self-actualisation', why: 'Self-actualisation is the top of Maslow’s hierarchy.' }
    ],
    explain: 'Theory X managers tend towards an autocratic style. Theory Y managers delegate and involve staff.'
  },
  {
    id: 'bu-042', type: 'mcq', objective: 'business.s3.people.motivation', difficulty: 2,
    question: 'In Herzberg’s two-factor theory, which is a motivator (not a hygiene factor)?',
    options: [
      { text: 'Recognition for achievement', correct: true },
      { text: 'Salary', why: 'Pay is a hygiene factor: poor pay demotivates, but more pay doesn’t motivate for long.' },
      { text: 'Working conditions', why: 'Working conditions are a hygiene factor.' },
      { text: 'Company policies', why: 'Company policies are a hygiene factor.' }
    ],
    explain: 'Motivators come from the job itself: achievement, recognition, responsibility and growth.'
  },
  {
    id: 'bu-043', type: 'mcq', objective: 'business.s3.organisation.structures', difficulty: 2,
    question: 'A flat organisational structure has…',
    options: [
      { text: 'few levels of management and a wide span of control', correct: true },
      { text: 'many levels and a narrow span of control', why: 'That describes a tall structure.' },
      { text: 'staff reporting to two managers at once', why: 'That is a matrix structure.' },
      { text: 'departments organised by geographic region', why: 'That is a geographic structure.' }
    ],
    explain: 'Flat structures speed up communication and empower staff, but managers can be stretched.'
  },
  {
    id: 'bu-044', type: 'flashcard', objective: 'business.s3.communication.channels',
    front: 'Barriers to effective communication', back: 'Jargon · Information overload · Poor timing · Wrong channel · Language or cultural differences · Noise and distractions · Lack of feedback',
    explain: 'In an exam answer, pair each barrier with a way to overcome it.'
  },
  {
    id: 'bu-045', type: 'mcq', objective: 'business.s1.policy.eu', difficulty: 1,
    question: 'Under the GDPR, a customer asks a company what personal data it holds about them. This is the right…',
    options: [
      { text: 'of access', correct: true },
      { text: 'to be forgotten', why: 'That is the right to have data erased.' },
      { text: 'to rectification', why: 'That is the right to correct inaccurate data.' },
      { text: 'to object', why: 'That covers objecting to certain kinds of processing.' }
    ],
    explain: 'The GDPR is an EU regulation, so it applies directly in Ireland. The Data Protection Commission enforces it here.'
  },
  {
    id: 'bu-046', type: 'mcq', objective: 'business.s4.financial.regulation', difficulty: 1,
    question: 'Which body regulates banks and other financial service providers in Ireland?',
    options: [
      { text: 'The Central Bank of Ireland', correct: true },
      { text: 'The Workplace Relations Commission', why: 'The WRC deals with employment rights.' },
      { text: 'The Data Protection Commission', why: 'The DPC regulates personal data.' },
      { text: 'Revenue', why: 'Revenue collects taxes.' }
    ],
    explain: 'The Central Bank also protects consumers of financial services, for example through its Consumer Protection Code.'
  },
  {
    id: 'bu-047', type: 'flashcard', objective: 'business.s4.employee.rights', difficulty: 2,
    front: 'The gig economy: one benefit and one drawback for workers', back: 'Benefit: flexibility over when and how much you work\nDrawback: less security, with irregular income and fewer employment protections',
    explain: 'Whether a gig worker is legally an employee or self-employed affects their rights. It is a live issue in courts across Europe.'
  },
  {
    id: 'bu-048', type: 'short', objective: 'business.s1.global.fdi',
    question: 'Explain two benefits to Ireland of foreign direct investment (FDI).',
    model: '1. Employment: multinationals create jobs directly and in local suppliers, raising incomes.\n2. Tax revenue: corporation tax and income tax fund public services.\n(Also: exports, new skills and technology.)',
    keyPoints: [
      { point: 'Jobs / employment', keywords: ['job', 'employ'] },
      { point: 'Tax revenue', keywords: ['tax', 'revenue'] },
      { point: 'Exports / skills / technology', keywords: ['export', 'skill', 'technolog', 'expertise'] }
    ]
  },
]);
