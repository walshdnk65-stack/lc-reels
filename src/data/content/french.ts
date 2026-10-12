import { define } from './define';

/* French: original practice material based on the LC French syllabus. */
export const french = define({}, [
  /* --------------------------------------------------------------- Tenses */
  {
    id: 'fr-001', type: 'explainer', objective: 'french.grammar.tenses.pc',
    title: 'Passé composé: avoir or être?',
    body: 'Most verbs use **avoir**: *j’ai mangé*.\n\nAbout 16 verbs of movement or change of state use **être**, and so do all **reflexive** verbs. With être, the past participle **agrees** with the subject.',
    bullets: ['aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, rentrer, devenir, revenir', 'Reflexives: je me suis levé(e)'],
    example: 'Elle est allé**e** au marché. · Ils sont parti**s** tôt.',
    check: {
      question: '“She arrived late.”',
      options: [{ text: 'Elle a arrivé en retard.' }, { text: 'Elle est arrivée en retard.', correct: true }, { text: 'Elle est arrivé en retard.' }],
      explain: 'Arriver takes être, and the participle agrees with elle: arrivée.'
    }
  },
  {
    id: 'fr-002', type: 'mcq', objective: 'french.grammar.tenses.pc',
    question: '“We went to the cinema.” (a mixed group)',
    options: [
      { text: 'Nous sommes allés au cinéma.', correct: true },
      { text: 'Nous avons allé au cinéma.', why: 'Aller takes être.' },
      { text: 'Nous sommes allé au cinéma.', why: 'The participle must agree with the plural subject: allés.' },
      { text: 'Nous allions au cinéma.', why: 'That is the imparfait: “we used to go” or “we were going”.' }
    ],
    explain: 'Être + allé, with -s for plural agreement. A mixed group takes the masculine plural.'
  },
  {
    id: 'fr-003', type: 'translate', objective: 'french.grammar.tenses.pc', lang: 'fr', direction: 'to-target', difficulty: 1,
    prompt: 'I have finished my homework.',
    answers: ['J’ai fini mes devoirs', "J'ai fini mes devoirs", 'J’ai terminé mes devoirs', "J'ai terminé mes devoirs"],
    explain: 'Finir → fini. Homework is plural in French: les devoirs.'
  },
  {
    id: 'fr-004', type: 'explainer', objective: 'french.grammar.tenses.imparfait',
    title: 'Imparfait vs passé composé',
    body: '**Imparfait** = background, descriptions, ongoing or repeated actions (*was …-ing*, *used to*).\n**Passé composé** = completed single events that move the story on.',
    example: 'Il **pleuvait** quand je **suis sorti**. (It was raining [background] when I went out [event].)',
    check: {
      question: '“When I was young, I played football every day.” Which tense for “played”?',
      options: [{ text: 'Passé composé: j’ai joué' }, { text: 'Imparfait: je jouais', correct: true }],
      explain: '“Every day” describes a habit in the past, so use the imparfait.'
    }
  },
  {
    id: 'fr-005', type: 'cloze', objective: 'french.grammar.tenses.imparfait',
    prompt: 'Complete with the imparfait',
    text: 'Quand j’{{étais}} petit, je {{jouais}} au foot tous les jours.',
    explain: 'Être → j’étais (irregular stem ét-). Jouer → nous jouons → jou- + -ais.'
  },
  {
    id: 'fr-006', type: 'flashcard', objective: 'french.grammar.tenses.futur', difficulty: 2,
    front: 'Futur simple: endings and irregular stems', back: 'infinitive + -ai, -as, -a, -ons, -ez, -ont\n\naller → ir-  ·  être → ser-  ·  avoir → aur-  ·  faire → fer-  ·  pouvoir → pourr-  ·  vouloir → voudr-  ·  venir → viendr-  ·  voir → verr-',
    explain: 'For -re verbs, drop the final e: prendre → prendr-. The conditional uses the same stems with imparfait endings: j’irais.'
  },
  {
    id: 'fr-007', type: 'cloze', objective: 'french.grammar.tenses.futur', difficulty: 2,
    prompt: 'Si + imparfait → conditionnel',
    text: 'Si j’avais beaucoup d’argent, je {{voyagerais}} autour du monde.',
    choices: ['voyagerais', 'voyagerai', 'voyageais', 'voyage'],
    explain: 'Si + imparfait → conditionnel. Si + présent → futur: “Si j’ai le temps, je voyagerai.”'
  },
  {
    id: 'fr-008', type: 'mcq', objective: 'french.grammar.tenses.subj', level: 'HL', difficulty: 3,
    question: 'Il faut que tu ___ tes devoirs ce soir. (faire)',
    options: [
      { text: 'fasses', correct: true },
      { text: 'fais', why: '“Il faut que” triggers the subjunctive.' },
      { text: 'feras', why: 'That is the future tense.' },
      { text: 'faisais', why: 'That is the imparfait.' }
    ],
    explain: 'Faire has an irregular subjunctive stem, fass-: que je fasse, que tu fasses. Other triggers: bien que, avant que, je veux que.'
  },
  {
    id: 'fr-009', type: 'cloze', objective: 'french.grammar.tenses.subj', level: 'HL', difficulty: 2,
    prompt: 'Subjonctif',
    text: 'Bien qu’il {{soit}} fatigué, il continue à réviser.',
    choices: ['soit', 'est', 'sera', 'était'],
    explain: 'Bien que (although) always takes the subjunctive. Être → que je sois, qu’il soit.'
  },
  /* -------------------------------------------------------------- Pronouns */
  {
    id: 'fr-010', type: 'flashcard', objective: 'french.grammar.pronouns.objet', difficulty: 2,
    front: 'Order of object pronouns before the verb', back: 'me / te / se / nous / vous\n→ le / la / les\n→ lui / leur\n→ y\n→ en',
    explain: 'Je le lui donne = I give it to him. Il y en a = there are some.'
  },
  {
    id: 'fr-011', type: 'mcq', objective: 'french.grammar.pronouns.objet', difficulty: 2,
    question: '“I have three of them.”',
    options: [
      { text: 'J’en ai trois.', correct: true },
      { text: 'J’y ai trois.', why: 'Y replaces a place or à + thing.' },
      { text: 'Je les ai trois.', why: 'With a quantity, use en.' },
      { text: 'J’ai trois en.', why: 'The pronoun goes before the verb.' }
    ],
    explain: 'En replaces de + noun and is needed with quantities: Tu as des frères ? Oui, j’en ai deux.'
  },
  {
    id: 'fr-012', type: 'mcq', objective: 'french.grammar.pronouns.relatifs', difficulty: 2,
    question: 'C’est le livre ___ je t’ai parlé.',
    options: [
      { text: 'dont', correct: true },
      { text: 'que', why: 'Parler takes de (parler de), so you need dont.' },
      { text: 'qui', why: 'Qui is the subject of the following verb.' },
      { text: 'où', why: 'Où refers to a place or a time.' }
    ],
    explain: 'Dont replaces de + noun: “the book I told you about”.'
  },
  {
    id: 'fr-013', type: 'mcq', objective: 'french.grammar.agreement.adj',
    question: '“An old man”',
    options: [
      { text: 'un vieil homme', correct: true },
      { text: 'un vieux homme', why: 'Before a vowel or silent h, vieux becomes vieil.' },
      { text: 'un homme vieux', why: 'Vieux is a BAGS adjective (beauty, age, goodness, size), so it usually goes before the noun.' },
      { text: 'un vieille homme', why: 'Vieille is the feminine form.' }
    ],
    explain: 'Beau, nouveau and vieux have special forms before a vowel: bel, nouvel, vieil.'
  },
  /* ---------------------------------------------------------- Vocabulary */
  {
    id: 'fr-020', type: 'translate', objective: 'french.vocab.themes.environnement', lang: 'fr', direction: 'to-target', difficulty: 1,
    prompt: 'global warming', answers: ['le réchauffement climatique', 'réchauffement climatique'],
    explain: 'Also learn: les déchets (waste), le recyclage, les énergies renouvelables.'
  },
  {
    id: 'fr-021', type: 'translate', objective: 'french.vocab.themes.technologie', lang: 'fr', direction: 'to-target',
    prompt: 'social networks / social media', answers: ['les réseaux sociaux', 'réseaux sociaux'],
    explain: 'Related words: le harcèlement en ligne (cyberbullying), être accro à (to be addicted to).'
  },
  {
    id: 'fr-022', type: 'translate', objective: 'french.vocab.themes.ecole', lang: 'fr', direction: 'to-english',
    prompt: 'le bac', answers: ["the baccalaureate", 'the leaving cert', 'baccalaureate', 'leaving cert', 'the french leaving cert'],
    explain: 'Le baccalauréat (le bac) is the French school-leaving exam. It is useful when comparing school systems in the oral.'
  },
  {
    id: 'fr-023', type: 'translate', objective: 'french.vocab.themes.sante', lang: 'fr', direction: 'to-target',
    prompt: 'mental health', answers: ['la santé mentale', 'santé mentale'],
    explain: 'Also learn: le stress, le bien-être (wellbeing), se détendre (to relax).'
  },
  {
    id: 'fr-024', type: 'flashcard', objective: 'french.vocab.connectors.opinion',
    front: 'Six phrases for an opinion piece', back: 'À mon avis…\nIl me semble que…\nD’une part… d’autre part…\nCependant… / En revanche…\nIl est indéniable que…\nPour conclure…',
    explain: 'Use connectors to show the examiner the structure of your argument.'
  },
  {
    id: 'fr-025', type: 'builder', objective: 'french.vocab.connectors.opinion', lang: 'fr',
    prompt: 'In my opinion, social media is dangerous for young people.',
    words: ['À', 'mon', 'avis,', 'les', 'réseaux', 'sociaux', 'sont', 'dangereux', 'pour', 'les', 'jeunes'],
    distractors: ['est', 'dangereuses'],
    explain: 'Réseaux is masculine plural, so dangereux. “Les jeunes” means young people.'
  },
  /* -------------------------------------------------------- Writing / oral */
  {
    id: 'fr-030', type: 'technique', objective: 'french.writing.opinion.structure', provenance: 'exam-advice',
    title: 'The opinion piece',
    intro: 'Examiners reward relevant ideas in accurate, varied French.',
    dos: ['Introduce the issue in your own words', 'Make 2–3 clear points, each with an example', 'Link with connectors: de plus, cependant, par conséquent', 'Finish with a clear conclusion'],
    donts: ['Don’t translate complex English sentences word for word', 'Don’t go off-topic to fit learned material', 'Don’t ignore the word guidance in the question'],
  },
  {
    id: 'fr-031', type: 'technique', objective: 'french.writing.diary.features', provenance: 'exam-advice',
    title: 'Le journal intime',
    intro: 'A diary entry is personal and emotional, and it moves between tenses.',
    dos: ['Open with the day or date and “Cher journal,”', 'Express feelings: je suis tellement déçu(e), j’en ai marre', 'Passé composé + imparfait for what happened', 'Futur proche or futur simple for plans'],
    donts: ['Don’t use formal register', 'Don’t only list events. Show how you feel about them.'],
  },
  {
    id: 'fr-032', type: 'flashcard', objective: 'french.writing.letter.formal', difficulty: 2,
    front: 'Formal letter: opening and closing', back: 'Madame, Monsieur,\n…\nJe vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.',
    explain: 'Use vous throughout. A shorter close is “Veuillez agréer, Madame, Monsieur, mes salutations distinguées.”'
  },
  {
    id: 'fr-033', type: 'translate', objective: 'french.oral.oral.conversation', lang: 'fr', direction: 'to-target', difficulty: 2,
    prompt: 'I would like to study medicine at university.',
    answers: ['Je voudrais étudier la médecine à l’université', "Je voudrais étudier la médecine à l'université", 'J’aimerais étudier la médecine à l’université', "J'aimerais étudier la médecine à l'université", 'Je voudrais faire des études de médecine à l’université', "Je voudrais faire des études de médecine à l'université"],
    explain: 'Je voudrais or j’aimerais + infinitive. This is a key oral answer to “Qu’est-ce que tu vas faire l’année prochaine ?”'
  },
  {
    id: 'fr-034', type: 'mcq', objective: 'french.oral.aural.numbers', difficulty: 1,
    question: 'You hear: « quatre-vingt-dix-sept ». Which number is it?',
    options: [{ text: '97', correct: true }, { text: '87' }, { text: '77' }, { text: '417' }],
    explain: 'Quatre-vingt-dix-sept = 4 × 20 + 17 = 97. Compare soixante-dix-sept = 77 and quatre-vingt-sept = 87.'
  },
  {
    id: 'fr-035', type: 'technique', objective: 'french.reading.journalistic.strategy', provenance: 'exam-advice',
    title: 'Reading comprehension',
    intro: 'Precision beats volume, so find exactly what the question asks.',
    dos: ['Read the questions first, then the text', 'Answer in the language the question asks for', 'Adapt the text when answering: je → il / elle', 'Use the line references given'],
    donts: ['Don’t copy whole paragraphs, because extra wrong material can cost marks', 'Don’t answer in English when French is required, or the reverse'],
  },
  {
    id: 'fr-036', type: 'flashcard', objective: 'french.oral.oral.conversation', provenance: 'exam-format', verification: 'needs-review',
    front: 'LC French Higher Level mark weightings (as widely reported)', back: 'Oral 25% · Listening 20% · Reading 30% · Writing 25%',
    explain: 'At Ordinary Level, listening and reading carry more weight. Confirm against the SEC’s current documents.',
    sourceNote: 'Not yet checked against an SEC document.'
  },
]);
