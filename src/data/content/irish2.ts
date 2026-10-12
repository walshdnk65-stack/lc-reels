import { define } from './define';

/* More Gaeilge. Prescribed-literature items come from circular 0041/2026 (verified). */
const CIRC = 'Circular 0041/2026, Prescribed Material for LC Irish 2027 and 2028';

export const irish2 = define({}, [
  {
    id: 'ga-050', type: 'mcq', objective: 'irish.gramadach.briathra.laithreach', difficulty: 2,
    question: '“I am usually tired on Mondays.”',
    options: [
      { text: 'Bím tuirseach de ghnáth ar an Luan.', correct: true },
      { text: 'Táim tuirseach de ghnáth ar an Luan.', why: 'For something habitual, use the aimsir ghnáthláithreach: bím.' },
      { text: 'Bhí mé tuirseach de ghnáth ar an Luan.', why: 'That is the past tense.' },
      { text: 'Beidh mé tuirseach de ghnáth ar an Luan.', why: 'That is the future tense.' }
    ],
    explain: 'Tá = is (right now). Bíonn / bím = is usually, regularly.'
  },
  {
    id: 'ga-051', type: 'flashcard', objective: 'irish.gramadach.briathra.fhaistineach', difficulty: 2,
    front: 'Na briathra neamhrialta san aimsir fháistineach', back: 'beidh · rachaidh · déanfaidh · feicfidh · gheobhaidh · déarfaidh · tiocfaidh · tabharfaidh · íosfaidh · cloisfidh · béarfaidh',
    explain: 'Negatives: ní bheidh, ní rachaidh, ní dhéanfaidh, ní fheicfidh, ní bhfaighidh, ní déarfaidh…'
  },
  {
    id: 'ga-052', type: 'cloze', objective: 'irish.gramadach.briathra.fhaistineach',
    prompt: 'Líon an bhearna (faigh, aimsir fháistineach)',
    text: '{{Gheobhaidh}} mé post samhraidh i mbliana.',
    choices: ['Gheobhaidh', 'Fuair', 'Faigheann', 'Gheobhainn'],
    explain: 'The future of faigh is gheobhaidh. The negative is ní bhfaighidh.'
  },
  {
    id: 'ga-053', type: 'translate', objective: 'irish.gramadach.coinniollach.foirmeacha', lang: 'ga', direction: 'to-target', difficulty: 3,
    prompt: 'We would go to the beach if it were sunny.',
    answers: ['Rachaimis go dtí an trá dá mbeadh sé grianmhar', 'Rachadh muid go dtí an trá dá mbeadh sé grianmhar', 'Rachaimis chuig an trá dá mbeadh sé grianmhar', 'Dá mbeadh sé grianmhar, rachaimis go dtí an trá', 'Rachaimis go dtí an trá dá mbeadh an ghrian ag taitneamh'],
    explain: 'Rachaimis is the synthetic form (“we would go”). Rachadh muid is also correct.'
  },
  {
    id: 'ga-054', type: 'mcq', objective: 'irish.gramadach.saor.foirmeacha', difficulty: 2,
    question: '“Irish is spoken here.”',
    options: [
      { text: 'Labhraítear Gaeilge anseo.', correct: true },
      { text: 'Labhraíonn Gaeilge anseo.', why: 'That needs a subject (“speaks”). For “is spoken”, use the briathar saor.' },
      { text: 'Labhraíodh Gaeilge anseo.', why: 'That is past: “was spoken”.' },
      { text: 'Labhrófar Gaeilge anseo.', why: 'That is future: “will be spoken”.' }
    ],
    explain: 'Present saor: -tar / -tear (-ítear for second-conjugation verbs): déantar, cuirtear, labhraítear.'
  },
  {
    id: 'ga-055', type: 'mcq', objective: 'irish.gramadach.seimhiu.rialacha', difficulty: 2,
    question: '“On the table”',
    options: [
      { text: 'ar an mbord', correct: true },
      { text: 'ar an bord', why: 'A preposition + an causes a change to the noun.' },
      { text: 'ar na mbord', why: 'Bord is singular, so use an.' },
      { text: 'ar an boird', why: 'The noun doesn’t go into the genitive here.' }
    ],
    explain: 'After a preposition + an, the standard form is urú (ar an mbord). Séimhiú (ar an bhord) is also accepted, as in Ulster Irish.'
  },
  {
    id: 'ga-056', type: 'mcq', objective: 'irish.gramadach.uimhreacha.pearsanta', difficulty: 2,
    question: '“I have three brothers.”',
    options: [
      { text: 'Tá triúr deartháireacha agam.', correct: true },
      { text: 'Tá trí deartháir agam.', why: 'For counting people, use the personal numbers: duine, beirt, triúr…' },
      { text: 'Tá trí dheartháir agam.', why: 'This form is heard in speech, but the personal number triúr is the standard exam answer.' },
      { text: 'Tá triúr deartháir agam.', why: 'After triúr, use the plural (genitive): deartháireacha.' }
    ],
    explain: 'Personal numbers: duine, beirt, triúr, ceathrar, cúigear, seisear, seachtar, ochtar, naonúr, deichniúr.',
    verification: 'needs-review'
  },
  {
    id: 'ga-057', type: 'translate', objective: 'irish.stor.topaici.sochai', lang: 'ga', direction: 'to-target',
    prompt: 'unemployment', answers: ['dífhostaíocht', 'an dífhostaíocht'],
    explain: 'Related words: imirce or eisimirce (emigration), an ghéarchéim tithíochta (the housing crisis).'
  },
  {
    id: 'ga-058', type: 'translate', objective: 'irish.stor.topaici.sochai', lang: 'ga', direction: 'to-english',
    prompt: 'easpa dídine', answers: ['homelessness', 'lack of shelter'],
    explain: 'Daoine gan dídean = homeless people. It is a useful topic for the aiste and the comhrá.'
  },
  {
    id: 'ga-059', type: 'flashcard', objective: 'irish.p1.ceap.diospoireacht',
    front: 'Opening a díospóireacht', back: 'A Chathaoirligh, a mholtóirí, a lucht an fhreasúra agus a dhaoine uaisle…\n\nTáim go hiomlán in aghaidh an rúin seo. / Táim go mór i bhfabhar an rúin seo.',
    explain: 'Rún = motion. Keep addressing the audience throughout: “Nach aontaíonn sibh liom?”'
  },
  {
    id: 'ga-060', type: 'builder', objective: 'irish.gramadach.coinniollach.foirmeacha', lang: 'ga', difficulty: 3,
    prompt: 'If I were Minister for Education, I would get rid of the Leaving Cert.',
    words: ['Dá', 'mbeinn', 'i', 'm’Aire', 'Oideachais,', 'chuirfinn', 'deireadh', 'leis', 'an', 'Ardteist'],
    distractors: ['bheinn', 'chuir'],
    explain: '“I mo” becomes “i m’” before a vowel: i m’Aire. “Cuir deireadh le” means to put an end to.'
  },
  {
    id: 'ga-061', type: 'mcq', objective: 'irish.p2.pros.liosta',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which common prose option is a short film?',
    options: [
      { text: 'Eoinín na nÉan', correct: true },
      { text: 'An tIriseoir', why: 'An tIriseoir is a novella by Michelle Nic Pháidín.' },
      { text: 'Cuairteoir', why: 'Cuairteoir is a short story by Orna Ní Choileáin.' },
      { text: 'Clann Lir', why: 'Clann Lir is Séamus Ó Searcaigh’s telling of the legend.' }
    ],
    explain: 'Eoinín na nÉan (ROSG, 2013) is available on the TG4 Player. The alternative in that slot is An Féileacán agus an Crann Úll.'
  },
  {
    id: 'ga-062', type: 'mcq', objective: 'irish.p2.pros.liosta',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Cé a scríobh “An tIriseoir”?',
    options: [
      { text: 'Michelle Nic Pháidín', correct: true },
      { text: 'Orna Ní Choileáin', why: 'She wrote Cuairteoir.' },
      { text: 'Mícheál Ó Conghaile', why: 'He wrote Athair.' },
      { text: 'Seán Ó Muireagáin', why: 'He wrote Glantóir.' }
    ],
    explain: 'An tIriseoir (Cois Life, 2016).'
  },
  {
    id: 'ga-063', type: 'flashcard', objective: 'irish.p2.filiocht.liosta',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'Who wrote “Glaoch Abhaile” and “Deireadh na Feide”?', back: 'Glaoch Abhaile: Áine Ní Ghlinn\nDeireadh na Feide: Ailbhe Ní Ghearbhuigh',
  },
  {
    id: 'ga-064', type: 'mcq', objective: 'irish.p2.breise.liosta', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which is NOT one of the 2027 Prós Breise options?',
    options: [
      { text: 'Hurlamaboc', correct: true },
      { text: 'Deirdre (Darach Ó Scolaí)', why: 'It is on the list.' },
      { text: 'An Nollaig Thiar (Breandán Ó hEithir)', why: 'It is on the list.' },
      { text: 'Dordán (Éilís Ní Dhuibhne)', why: 'It is on the list.' }
    ],
    explain: 'Prós breise: Cóirín na dTonn, An Nollaig Thiar, Deirdre, Dordán, and five named stories from Bláth na dTulach.'
  },
  {
    id: 'ga-065', type: 'technique', objective: 'irish.p2.leamh.ceisteanna', provenance: 'exam-advice',
    title: 'An léamhthuiscint',
    intro: 'Marks go to accurate answers in your own Irish where the question asks for it.',
    dos: ['Read the questions first, then the passage', 'Find the paragraph each question refers to', 'Answer in full sentences', 'Change the person: “mé” in the text becomes “sé” or “sí” in your answer'],
    donts: ['Don’t copy long chunks of the text when it says “i d’fhocail féin”', 'Don’t ignore the grammar question. It is easy marks.'],
  },
  {
    id: 'ga-066', type: 'flashcard', objective: 'irish.beal.comhra.me',
    front: 'Possession and liking', back: 'Tá rothar agam. (I have a bike.)\nIs maith liom spórt. (I like sport.)\nBa mhaith liom… (I would like…)\nIs fearr liom… (I prefer…)',
    explain: 'Irish uses “ag” for having and “le” for liking. They are core comhrá structures.'
  },
  {
    id: 'ga-067', type: 'translate', objective: 'irish.beal.comhra.todhchai', lang: 'ga', direction: 'to-target', difficulty: 2,
    prompt: 'I hope to study engineering at university.',
    answers: ['Tá súil agam innealtóireacht a dhéanamh san ollscoil', 'Tá súil agam innealtóireacht a staidéar san ollscoil', 'Tá súil agam staidéar a dhéanamh ar an innealtóireacht san ollscoil', 'Tá súil agam innealtóireacht a dhéanamh ar an ollscoil'],
    explain: '“Tá súil agam” + verbal noun: I hope to… It is perfect for the todhchaí questions.'
  },
]);
