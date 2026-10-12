import { define } from './define';

/* Gaeilge. Prescribed-literature items come from circular 0041/2026 (verified).
   Grammar follows An Caighdeán Oifigiúil; dialect forms are accepted where noted. */
const CIRC = 'Circular 0041/2026, Prescribed Material for LC Irish 2027 and 2028';

export const irish = define({}, [
  /* ------------------------------------------------------------ Gramadach */
  {
    id: 'ga-001', type: 'explainer', objective: 'irish.gramadach.briathra.caite',
    title: 'An aimsir chaite: briathra rialta',
    body: '**Consan:** add séimhiú → *cuir* → **chuir mé**\n**Guta nó f:** add d’ → *ól* → **d’ól mé**, *fan* → **d’fhan mé**\n**Diúltach:** níor + séimhiú → **níor chuir mé**, **níor ól mé**\n**Ceist:** ar + séimhiú → **ar chuir tú?**',
    check: {
      question: '“I didn’t drink” = ?',
      options: [{ text: 'Ní d’ól mé' }, { text: 'Níor ól mé', correct: true }, { text: 'Níor d’ól mé' }],
      explain: 'Níor replaces the d’, so it is níor ól mé.'
    }
  },
  {
    id: 'ga-002', type: 'flashcard', objective: 'irish.gramadach.briathra.caite', difficulty: 2,
    front: 'Na briathra neamhrialta san aimsir chaite\n(dearfach / diúltach)', back: 'bhí / ní raibh\nchuaigh / ní dheachaigh\nrinne / ní dhearna\nchonaic / ní fhaca\nfuair / ní bhfuair\ndúirt / ní dúirt\ntháinig / níor tháinig\nthug / níor thug\nd’ith / níor ith\nchuala / níor chuala\nrug / níor rug',
    explain: 'Six of these take ní, not níor, in the negative: bí, téigh, déan, feic, faigh and abair.'
  },
  {
    id: 'ga-003', type: 'mcq', objective: 'irish.gramadach.briathra.caite', difficulty: 2,
    question: '“I didn’t go to the match.”',
    options: [
      { text: 'Ní dheachaigh mé chuig an gcluiche.', correct: true },
      { text: 'Níor chuaigh mé chuig an gcluiche.', why: 'Téigh is irregular: its negative past is ní dheachaigh.' },
      { text: 'Ní chuaigh mé chuig an gcluiche.', why: 'The negative uses a different form, dheachaigh.' },
      { text: 'Níor théigh mé chuig an gcluiche.', why: 'Use the irregular past stem, not the root.' }
    ],
    explain: 'Chuaigh mé → ní dheachaigh mé → an ndeachaigh tú?'
  },
  {
    id: 'ga-004', type: 'cloze', objective: 'irish.gramadach.briathra.caite',
    prompt: 'Líon an bhearna (faigh, aimsir chaite, diúltach)',
    text: 'Ní {{bhfuair}} mé aon obair bhaile aréir.',
    choices: ['bhfuair', 'fhuair', 'fuair', 'gheobhainn'],
    explain: 'Faigh is irregular: fuair mé → ní bhfuair mé (with urú).'
  },
  {
    id: 'ga-005', type: 'translate', objective: 'irish.gramadach.briathra.caite', lang: 'ga', direction: 'to-target',
    prompt: 'I went to the shop yesterday.',
    answers: ['Chuaigh mé go dtí an siopa inné', 'Chuaigh mé chuig an siopa inné', 'Inné, chuaigh mé go dtí an siopa'],
    explain: 'Chuaigh is the past of téigh. “Go dtí” and “chuig” both mean “to”.'
  },
  {
    id: 'ga-006', type: 'cloze', objective: 'irish.gramadach.briathra.laithreach',
    prompt: 'Líon an bhearna',
    text: '{{Téim}} ar scoil ar an mbus gach lá.',
    choices: ['Téim', 'Chuaigh mé', 'Rachaidh mé', 'Rachainn'],
    explain: '“Gach lá” (every day) signals the present tense. Téim = téann mé.'
  },
  {
    id: 'ga-007', type: 'translate', objective: 'irish.gramadach.briathra.fhaistineach', lang: 'ga', direction: 'to-target',
    prompt: 'I will go to college next year.',
    answers: ['Rachaidh mé go dtí an ollscoil an bhliain seo chugainn', 'Rachaidh mé chuig an ollscoil an bhliain seo chugainn', 'Rachaidh mé go dtí an coláiste an bhliain seo chugainn', 'Rachaidh mé chuig an gcoláiste an bhliain seo chugainn'],
    explain: 'Rachaidh is the future of téigh. “An bhliain seo chugainn” means next year.'
  },
  {
    id: 'ga-008', type: 'flashcard', objective: 'irish.gramadach.coinniollach.foirmeacha', difficulty: 2,
    front: 'An modh coinníollach: endings and the key irregulars', back: 'séimhiú + -fainn / -finn (mé), -feá (tú), -fadh sé\n\nbheinn · rachainn · dhéanfainn · d’fheicfinn · gheobhainn · déarfainn · thiocfainn · thabharfainn · d’íosfainn · chloisfinn',
    explain: 'Use it for “would”: Rachainn = I would go. It is essential in the aiste and the comhrá (“Dá mbeinn i mo Aire Oideachais…”).'
  },
  {
    id: 'ga-009', type: 'cloze', objective: 'irish.gramadach.coinniollach.foirmeacha', difficulty: 2,
    prompt: 'Líon na bearnaí',
    text: 'Dá {{mbeadh}} an t-am agam, {{rachainn}} go dtí an Fhrainc.',
    choices: ['mbeadh', 'bheadh', 'rachainn', 'chuaigh mé', 'beidh'],
    explain: '“Dá” takes urú plus the conditional (dá mbeadh), and the result clause is conditional too (rachainn).'
  },
  {
    id: 'ga-010', type: 'translate', objective: 'irish.gramadach.coinniollach.foirmeacha', lang: 'ga', direction: 'to-target', difficulty: 3,
    prompt: 'If I won the lotto, I would buy a house.',
    answers: ['Dá mbuafainn an crannchur, cheannóinn teach', 'Dá mbuafainn an lotto, cheannóinn teach', 'Dá mbainfinn an crannchur, cheannóinn teach', 'Dá mbainfinn an lotto, cheannóinn teach'],
    explain: 'Buaigh → bhuafainn → dá mbuafainn (urú after dá). Ceannaigh → cheannóinn.'
  },
  {
    id: 'ga-011', type: 'mcq', objective: 'irish.gramadach.saor.foirmeacha', difficulty: 2,
    question: '“The house was built in 1990.”',
    options: [
      { text: 'Tógadh an teach i 1990.', correct: true },
      { text: 'Thóg an teach i 1990.', why: 'That would mean the house built something. You need the briathar saor.' },
      { text: 'Tógtar an teach i 1990.', why: 'Tógtar is the present-tense saor form.' },
      { text: 'Thógfaí an teach i 1990.', why: 'That is the conditional: “would be built”.' }
    ],
    explain: 'The past briathar saor takes no séimhiú and adds -adh or -eadh: tógadh, cuireadh, rugadh.'
  },
  {
    id: 'ga-012', type: 'flashcard', objective: 'irish.gramadach.saor.foirmeacha',
    front: '“I was born in 2009”', back: 'Rugadh mé in 2009.',
    explain: 'Rugadh is the past saor form of beir. The same pattern gives dúradh (it was said) and déanadh (it was done).'
  },
  {
    id: 'ga-013', type: 'mcq', objective: 'irish.gramadach.ginideach.alt', difficulty: 2,
    question: '“The door of the house”',
    options: [
      { text: 'doras an tí', correct: true },
      { text: 'doras an teach', why: 'The second noun goes into the genitive: teach → tí.' },
      { text: 'doras na tí', why: 'Teach is masculine, so the article is an, not na.' },
      { text: 'doras an thí', why: 'T doesn’t take séimhiú after an.' }
    ],
    explain: 'In “X of the Y”, Y goes into the tuiseal ginideach. Teach has an irregular genitive: tí.'
  },
  {
    id: 'ga-014', type: 'mcq', objective: 'irish.gramadach.ginideach.alt', difficulty: 2,
    question: '“The top of the street” (sráid is feminine)',
    options: [
      { text: 'barr na sráide', correct: true },
      { text: 'barr an tsráid', why: 'Feminine nouns take na in the genitive singular.' },
      { text: 'barr na sráid', why: 'The noun itself also changes: sráid → sráide.' },
      { text: 'barr an sráide', why: 'Feminine nouns take na, not an.' }
    ],
    explain: 'Feminine nouns in the genitive singular take na, and the noun usually changes too: an tsráid → na sráide; an fhuinneog → na fuinneoige.'
  },
  {
    id: 'ga-015', type: 'mcq', objective: 'irish.gramadach.seimhiu.rialacha',
    question: '“In Galway”',
    options: [
      { text: 'i nGaillimh', correct: true },
      { text: 'i Gaillimh', why: 'I causes urú on a following consonant.' },
      { text: 'i Ghaillimh', why: 'I takes urú, not séimhiú.' },
      { text: 'in Gaillimh', why: 'In is used before vowels, e.g. in Éirinn.' }
    ],
    explain: 'I + urú: i gCorcaigh, i mBaile Átha Cliath, i nGaillimh. Before a vowel use in: in Éirinn.'
  },
  {
    id: 'ga-016', type: 'flashcard', objective: 'irish.gramadach.seimhiu.rialacha', difficulty: 2,
    front: 'a + teach\nhis house / her house / their house', back: 'a theach (his: séimhiú)\na teach (her: no change)\na dteach (their: urú)',
    explain: 'Before a vowel: a athair (his), a hathair (her), a n-athair (their).'
  },
  {
    id: 'ga-017', type: 'flashcard', objective: 'irish.gramadach.briathra.laithreach',
    front: 'An chopail\n“She is a doctor” (two ways)', back: 'Is dochtúir í.\nTá sí ina dochtúir.',
    explain: 'With is, the noun comes first. With tá you need ina / i mo / i do: Tá mé i mo dhalta.'
  },
  /* --------------------------------------------------- Stór focal & nathanna */
  {
    id: 'ga-020', type: 'flashcard', objective: 'irish.stor.nathanna.aiste',
    front: 'Five nathanna for any aiste', back: 'Is fíor a rá go… (It is true to say that…)\nGan amhras… (Without doubt…)\nAr an lámh eile… (On the other hand…)\nNí féidir a shéanadh go… (It cannot be denied that…)\nMar fhocal scoir… (In conclusion…)',
    explain: 'Learn them in full sentences and they slot into any essay or debate.'
  },
  {
    id: 'ga-021', type: 'translate', objective: 'irish.stor.topaici.timpeallacht', lang: 'ga', direction: 'to-target', difficulty: 1,
    prompt: 'climate change', answers: ['athrú aeráide', 'an t-athrú aeráide'],
    explain: 'Also learn: téamh domhanda (global warming) and truailliú (pollution).'
  },
  {
    id: 'ga-022', type: 'translate', objective: 'irish.stor.topaici.timpeallacht', lang: 'ga', direction: 'to-english', difficulty: 1,
    prompt: 'fuinneamh in-athnuaite', answers: ['renewable energy'],
    explain: 'Fuinneamh = energy; in-athnuaite = renewable. Pair it with: athchúrsáil (recycling).'
  },
  {
    id: 'ga-023', type: 'translate', objective: 'irish.stor.topaici.teicneolaiocht', lang: 'ga', direction: 'to-target',
    prompt: 'social media', answers: ['na meáin shóisialta', 'meáin shóisialta'],
    explain: 'Related words: cibearbhulaíocht (cyberbullying), andúil (addiction).'
  },
  {
    id: 'ga-024', type: 'translate', objective: 'irish.stor.topaici.oige', lang: 'ga', direction: 'to-english',
    prompt: 'sláinte mheabhrach', answers: ['mental health'],
    explain: 'Useful phrases: brú na scrúduithe (exam pressure) and folláine (wellbeing).'
  },
  {
    id: 'ga-025', type: 'builder', objective: 'irish.beal.comhra.me', lang: 'ga',
    prompt: 'I love sport because it keeps me fit.',
    words: ['Is', 'breá', 'liom', 'spórt', 'mar', 'coinníonn', 'sé', 'aclaí', 'mé'],
    distractors: ['tá', 'coinnigh'],
    explain: '“Coinníonn sé aclaí mé” means it keeps me fit. It is a handy phrase for the comhrá.'
  },
  {
    id: 'ga-026', type: 'builder', objective: 'irish.beal.comhra.todhchai', lang: 'ga',
    prompt: 'I would like to be a teacher.',
    words: ['Ba', 'mhaith', 'liom', 'a', 'bheith', 'i', 'mo', 'mhúinteoir'],
    distractors: ['múinteoir', 'is'],
    explain: '“I mo” causes séimhiú: múinteoir → i mo mhúinteoir.'
  },
  /* ----------------------------------------------------- Litríocht (2027) */
  {
    id: 'ga-030', type: 'flashcard', objective: 'irish.p2.pros.liosta',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'An prós comónta ainmnithe (2027)', back: '(i) Clann Lir\n(ii) Athair NÓ Glantóir NÓ An Bóthar go Santiago\n(iii) Cuairteoir\n(iv) An tIriseoir\n(v) Eoinín na nÉan (gearrscannán) NÓ An Féileacán agus an Crann Úll',
    explain: 'Candidates may instead study optional prose (1(b)) that meets the circular’s criteria. Check which your class is doing.'
  },
  {
    id: 'ga-031', type: 'mcq', objective: 'irish.p2.filiocht.liosta',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Cé a scríobh “Dínit an Bhróin”?',
    options: [
      { text: 'Máirtín Ó Direáin', correct: true },
      { text: 'Áine Ní Ghlinn', why: 'Áine Ní Ghlinn wrote “Glaoch Abhaile”.' },
      { text: 'Ailbhe Ní Ghearbhuigh', why: 'Ailbhe Ní Ghearbhuigh wrote “Deireadh na Feide”.' },
      { text: 'Airt Mac Cumhaidh', why: 'Airt Mac Cumhaidh wrote “Úirchill an Chreagáin”.' }
    ],
    explain: 'The five common prescribed poems: Dínit an Bhróin (Ó Direáin), Deireadh na Feide (Ní Ghearbhuigh), Iníon (Áine Durkin), Glaoch Abhaile (Ní Ghlinn) and Úirchill an Chreagáin (Mac Cumhaidh).'
  },
  {
    id: 'ga-032', type: 'mcq', objective: 'irish.p2.filiocht.liosta',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Cé a scríobh “Iníon”?',
    options: [
      { text: 'Áine Durkin', correct: true },
      { text: 'Áine Ní Ghlinn', why: 'Close, but Áine Ní Ghlinn wrote “Glaoch Abhaile”.' },
      { text: 'Biddy Jenkinson', why: 'Biddy Jenkinson wrote “Eanáir 1991”, from the HL additional poetry.' },
      { text: 'Nuala Ní Dhomhnaill', why: 'Nuala Ní Dhomhnaill wrote “Ag Tiomáint Siar”, from the HL additional poetry.' }
    ],
    explain: '“Iníon” is from Mise Áine – An Bhean Istigh by Áine Durkin (Cló Iar-Chonnacht, 2017).'
  },
  {
    id: 'ga-033', type: 'flashcard', objective: 'irish.p2.breise.liosta', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'Litríocht bhreise (Ardleibhéal): what must you study?', back: 'One item from either 3(a) Prós Breise or 3(b) Filíocht Bhreise. If you choose the poetry, all five poems are prescribed.',
    explain: 'Filíocht bhreise: Trén bhFearann Breac · Eanáir 1991 · Ag Tiomáint Siar · Dijeridiú · Anthony Daly. Only one section is answered in the exam.'
  },
  {
    id: 'ga-034', type: 'flashcard', objective: 'irish.p2.breise.liosta', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'Is there still a separate “Stair na Gaeilge” question at Higher Level?', back: 'No. But short questions may be asked about a work’s place in the history of Irish literature: its author, background and context.',
  },
  /* -------------------------------------------------- Béaltriail & Páipéar 1 */
  {
    id: 'ga-040', type: 'flashcard', objective: 'irish.beal.comhra.me', provenance: 'exam-format',
    front: 'How much is the Irish oral (Béaltriail) worth?', back: '40% of the total marks',
    explain: 'The oral is the single biggest component of LC Irish, so practise speaking every week.',
    sourceNote: 'SEC S90/10. Details of the 2027 common oral are in SEC circular S76/25, not yet checked here.'
  },
  {
    id: 'ga-041', type: 'technique', objective: 'irish.beal.sraith.cur', provenance: 'exam-advice',
    title: 'An tsraith pictiúr',
    intro: 'Tell the story clearly, then be ready for the examiner’s questions. Check the current format in SEC circular S76/25.',
    dos: ['Use the aimsir chaite consistently', 'Link pictures: ansin, ina dhiaidh sin, ar deireadh', 'Learn the key vocabulary for every sraith', 'Practise the likely questions for each one'],
    donts: ['Don’t learn it word for word, because it sounds unnatural', 'Don’t switch tenses mid-story', 'Don’t panic over a gap. Describe what you can see.'],
  },
  {
    id: 'ga-042', type: 'translate', objective: 'irish.beal.comhra.me', lang: 'ga', direction: 'to-target',
    prompt: 'I am in sixth year.',
    answers: ['Táim i rang a sé', 'Tá mé i rang a sé', 'Táim sa séú bliain', 'Tá mé sa séú bliain', 'Táim sa séú bliain ar scoil', 'Tá mé sa séú bliain ar scoil'],
    explain: 'Both “i rang a sé” and “sa séú bliain” are fine.'
  },
  {
    id: 'ga-043', type: 'flashcard', objective: 'irish.p1.cluas.focail',
    front: 'Focail cheisteacha', back: 'Cé? Who?\nCad? / Céard? What?\nCathain? / Cén uair? When?\nCá? / Cén áit? Where?\nCén fáth? / Cad chuige? Why?\nConas? / Cén chaoi? How?\nCé mhéad? How many / how much?',
    explain: 'In the cluastuiscint, underline the question word before the recording starts so you know what to listen for.'
  },
  {
    id: 'ga-044', type: 'technique', objective: 'irish.p1.ceap.aiste', provenance: 'exam-advice',
    title: 'An aiste: struchtúr',
    intro: 'A clear structure and accurate grammar matter as much as big ideas.',
    dos: ['Réamhrá: say what the essay will discuss', 'One idea per paragraph, with an example', 'Vary your verbs and use the modh coinníollach', 'Críoch: Mar fhocal scoir…'],
    donts: ['Don’t translate English idioms word for word', 'Don’t write an aiste you learned off that doesn’t fit the title', 'Don’t skip checking séimhiú and urú at the end'],
  },
  {
    id: 'ga-045', type: 'flashcard', objective: 'irish.p1.ceap.litir',
    front: 'Litir fhoirmiúil: opening and closing', back: 'A chara, …\n…\nIs mise le meas,',
    explain: 'For an informal letter: “A Sheáin, a chara” or “A Mham”, closing with “Le grá” or “Slán go fóill”.'
  },
]);
