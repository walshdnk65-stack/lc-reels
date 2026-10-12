import { define } from './define';

/* More French: original practice material based on the LC French syllabus. */
export const french2 = define({}, [
  {
    id: 'fr-040', type: 'mcq', objective: 'french.grammar.negatives.ne', difficulty: 1,
    question: '“I never eat meat.”',
    options: [
      { text: 'Je ne mange jamais de viande.', correct: true },
      { text: 'Je ne mange jamais la viande.', why: 'After a negative, du / de la / des become de.' },
      { text: 'Je mange ne jamais de viande.', why: 'Ne goes before the verb and jamais after it.' },
      { text: 'Je ne mange plus de viande.', why: 'Ne…plus means “no longer”.' }
    ],
    explain: 'ne…jamais = never; ne…plus = no longer; ne…rien = nothing; ne…personne = nobody.'
  },
  {
    id: 'fr-041', type: 'cloze', objective: 'french.grammar.negatives.ne', difficulty: 2,
    prompt: '“I didn’t see anything.”',
    text: 'Je n’ai {{rien}} vu.',
    choices: ['rien', 'personne', 'jamais', 'pas'],
    explain: 'In the passé composé, ne…rien wraps around the auxiliary: je n’ai rien vu. Personne is different: je n’ai vu personne.'
  },
  {
    id: 'fr-042', type: 'mcq', objective: 'french.grammar.tenses.present', difficulty: 2,
    question: '“I have been learning French for six years.”',
    options: [
      { text: 'J’apprends le français depuis six ans.', correct: true },
      { text: 'J’ai appris le français depuis six ans.', why: 'With depuis for an ongoing action, French uses the present tense.' },
      { text: 'J’apprends le français pour six ans.', why: 'Pour looks ahead: “for the next six years”.' },
      { text: 'J’apprenais le français il y a six ans.', why: 'Il y a means “ago”.' }
    ],
    explain: 'Present + depuis = has / have been doing. This is a classic oral question: “Depuis combien de temps… ?”'
  },
  {
    id: 'fr-043', type: 'cloze', objective: 'french.grammar.tenses.pqp', difficulty: 2,
    prompt: 'Plus-que-parfait: “had …”',
    text: 'Quand je suis arrivé, le film {{avait}} déjà commencé.',
    choices: ['avait', 'a', 'était', 'aura'],
    explain: 'Plus-que-parfait = imparfait of avoir or être + past participle. It is used for an action further in the past than another past action.'
  },
  {
    id: 'fr-044', type: 'mcq', objective: 'french.grammar.tenses.ps', level: 'HL', difficulty: 2,
    question: 'In a literary text you read « il fut ». Which verb is this?',
    options: [
      { text: 'être', correct: true },
      { text: 'faire', why: 'The passé simple of faire is il fit.' },
      { text: 'falloir', why: 'The passé simple of falloir is il fallut.' },
      { text: 'fuir', why: 'The passé simple of fuir is il fuit.' }
    ],
    explain: 'You need to recognise the passé simple in literary extracts, not produce it. il fut = il a été; il eut = il a eu; ils allèrent = ils sont allés.'
  },
  {
    id: 'fr-045', type: 'translate', objective: 'french.grammar.tenses.futur', lang: 'fr', direction: 'to-target', difficulty: 1,
    prompt: 'I am going to go to Paris next week.',
    answers: ['Je vais aller à Paris la semaine prochaine', 'La semaine prochaine, je vais aller à Paris', 'Je vais à Paris la semaine prochaine'],
    explain: 'Futur proche = aller (present) + infinitive. It is easy to use and accurate for near-future plans.'
  },
  {
    id: 'fr-046', type: 'translate', objective: 'french.vocab.themes.societe', lang: 'fr', direction: 'to-target',
    prompt: 'unemployment', answers: ['le chômage', 'chômage'],
    explain: 'Être au chômage = to be unemployed. Related words: les sans-abri / les SDF (homeless people), la pauvreté (poverty).'
  },
  {
    id: 'fr-047', type: 'translate', objective: 'french.vocab.themes.societe', lang: 'fr', direction: 'to-target',
    prompt: 'a part-time job', answers: ['un petit boulot', 'un travail à temps partiel', 'un emploi à temps partiel', 'un job'],
    explain: 'Je travaille dans un supermarché le samedi. It is a common topic in the oral and in diary entries.'
  },
  {
    id: 'fr-048', type: 'flashcard', objective: 'french.vocab.idioms.avoir',
    front: 'Idioms with avoir', back: 'avoir faim / soif: to be hungry / thirsty\navoir peur: to be afraid\navoir raison / tort: to be right / wrong\navoir besoin de: to need\navoir envie de: to feel like\navoir … ans: to be … years old',
    explain: 'English uses “to be” where French uses avoir. It is a common error in written work.'
  },
  {
    id: 'fr-049', type: 'mcq', objective: 'french.grammar.agreement.gender', difficulty: 2,
    question: 'Which noun is masculine?',
    options: [
      { text: 'problème', correct: true },
      { text: 'plage', why: 'la plage' },
      { text: 'voiture', why: 'la voiture' },
      { text: 'maison', why: 'la maison' }
    ],
    explain: 'Le problème is masculine despite its -e ending, like le système and le thème. Many nouns ending in -ème come from Greek and are masculine.'
  },
  {
    id: 'fr-050', type: 'flashcard', objective: 'french.grammar.agreement.places',
    front: '“in / to” with countries and towns', back: 'en + feminine country: en France, en Irlande\nau + masculine country: au Canada, au Portugal\naux + plural: aux États-Unis\nà + town: à Paris, à Dublin',
    explain: 'Most countries ending in -e are feminine, but le Mexique is an exception: au Mexique.'
  },
  {
    id: 'fr-051', type: 'builder', objective: 'french.oral.oral.conversation', lang: 'fr',
    prompt: 'I would like to go to France next summer.',
    words: ['Je', 'voudrais', 'aller', 'en', 'France', 'l’été', 'prochain'],
    distractors: ['au', 'prochaine'],
    explain: 'L’été is masculine, so prochain. Feminine France takes en.'
  },
  {
    id: 'fr-052', type: 'technique', objective: 'french.oral.oral.conversation', provenance: 'exam-advice',
    title: 'The French oral',
    intro: 'The examiner wants a conversation, not a recital.',
    dos: ['Develop each answer: give a reason and an example', 'Show a range of tenses: past, present and future', 'Give opinions: “à mon avis”, “je trouve que…”', 'If you don’t understand, ask: « Pouvez-vous répéter, s’il vous plaît ? »'],
    donts: ['Don’t give one-word answers', 'Don’t recite long learned paragraphs that ignore the question', 'Don’t panic over a mistake. Correct it and keep going.'],
  },
  {
    id: 'fr-053', type: 'mcq', objective: 'french.grammar.tenses.pc', difficulty: 2,
    question: 'Who could say « Je me suis réveillée à sept heures » ?',
    options: [
      { text: 'A female speaker', correct: true },
      { text: 'A male speaker', why: 'A male speaker would write réveillé, without the extra -e.' },
      { text: 'A group of boys', why: 'A group would say nous nous sommes réveillés.' },
      { text: 'Anyone: the ending doesn’t change', why: 'With être, the participle agrees with the subject.' }
    ],
    explain: 'Reflexive verbs take être in the passé composé, and the extra -e shows a feminine subject. Aural and reading questions sometimes test this.'
  },
  {
    id: 'fr-054', type: 'translate', objective: 'french.vocab.themes.environnement', lang: 'fr', direction: 'to-english',
    prompt: 'les déchets', answers: ['waste', 'rubbish', 'litter', 'the waste', 'the rubbish', 'garbage', 'trash'],
    explain: 'Trier les déchets = to sort waste for recycling.'
  },
  {
    id: 'fr-055', type: 'mcq', objective: 'french.oral.aural.numbers', difficulty: 1,
    question: 'You hear « soixante-quinze ». Which number is it?',
    options: [{ text: '75', correct: true }, { text: '65' }, { text: '615' }, { text: '95' }],
    explain: 'Soixante-quinze = 60 + 15 = 75. In aural tests, write numbers down the moment you hear them.'
  },
]);
