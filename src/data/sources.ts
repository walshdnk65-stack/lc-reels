import type { SourceRef } from '../types';

/* Official documents the syllabus map and content are based on. "note" records what
   was actually checked; anything not checked is marked needs-review on the node itself. */
export const SOURCES: Record<string, SourceRef> = {
  'doe-0021-2025': {
    id: 'doe-0021-2025',
    title: 'Circular 0021/2025 — Prescribed Material for the Leaving Certificate English Examination in 2027',
    publisher: 'Department of Education',
    url: 'https://curriculumonline.ie/getmedia/ee4aa8b9-06c6-4091-974b-ea444dbae0af/Prescribed-Material-for-the-Leaving-Certificate-English-Examination-2027.pdf',
    note: 'Checked: single texts, comparative texts and modes, HL poets and poems, OL poems for 2027.'
  },
  'doe-0041-2026': {
    id: 'doe-0041-2026',
    title: 'Circular 0041/2026 — Prescribed Material for the Leaving Certificate Irish Examination in June 2027 and June 2028',
    publisher: 'Department of Education',
    url: 'https://www.gov.ie/en/department-of-education/circulars/prescribed-material-for-the-leaving-certificate-irish-examination-in-june-2027-and-june-2028/',
    note: 'Checked: common prescribed prose and poetry, HL additional literature, history of Irish literature guidance.'
  },
  'sec-s90-10': {
    id: 'sec-s90-10',
    title: 'S90/10 — The Irish Examination in the Leaving Certificate for 2012 onwards',
    publisher: 'SEC',
    url: 'https://www.examinations.ie/',
    note: 'Referenced by circular 0041/2026. Not yet checked here. A 2024 Oireachtas answer states the oral is 40% of marks.'
  },
  'sec-s76-25': {
    id: 'sec-s76-25',
    title: 'S76/25 — The Leaving Certificate Irish Common Oral Examination in 2027 and in 2028',
    publisher: 'SEC',
    url: 'https://www.examinations.ie/',
    note: 'Not yet checked — oral cards are marked needs-review until it is.'
  },
  'ncca-english': {
    id: 'ncca-english',
    title: 'Leaving Certificate English Syllabus',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/english/',
  },
  'ncca-irish': {
    id: 'ncca-irish',
    title: 'Siollabas Gaeilge na hArdteistiméireachta',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/irish/',
  },
  'ncca-maths': {
    id: 'ncca-maths',
    title: 'Leaving Certificate Mathematics Syllabus (five strands)',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/mathematics/',
  },
  'ncca-chemistry-2025': {
    id: 'ncca-chemistry-2025',
    title: 'Leaving Certificate Chemistry Specification (2025), first examined 2027',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/chemistry/',
  },
  'ncca-business-2025': {
    id: 'ncca-business-2025',
    title: 'Leaving Certificate Business Specification (2025), first examined 2027',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/business/',
  },
  'ncca-accounting': {
    id: 'ncca-accounting',
    title: 'Leaving Certificate Accounting Syllabus',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/accounting/',
  },
  'ncca-french': {
    id: 'ncca-french',
    title: 'Leaving Certificate French Syllabus',
    publisher: 'NCCA',
    url: 'https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/french/',
  },
  'sec-papers': {
    id: 'sec-papers',
    title: 'SEC Examination Material Archive (past papers and marking schemes)',
    publisher: 'SEC',
    url: 'https://www.examinations.ie/exammaterialarchive/',
  },
};
