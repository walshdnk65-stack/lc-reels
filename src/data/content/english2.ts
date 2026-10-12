import { define } from './define';

/* More English. Prescribed-list items come from circular 0021/2025 (verified). Readings of
   texts are original interpretations; quotations are kept to a few words. */
const CIRC = 'Circular 0021/2025, Prescribed Material for LC English 2027';

export const english2 = define({}, [
  {
    id: 'en-050', type: 'mcq', objective: 'english.comparative.texts.list',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which of these films is on the 2027 comparative list?',
    options: [
      { text: 'The Banshees of Inisherin', correct: true },
      { text: 'The Godfather', why: 'Not on the 2027 list.' },
      { text: 'Brooklyn', why: 'Not on the 2027 list.' },
      { text: 'Lady Bird', why: 'Not on the 2027 list.' }
    ],
    explain: '2027 films: The Grand Budapest Hotel, The Shawshank Redemption, Mustang, Barbie, Knives Out, Diego Maradona, The Banshees of Inisherin, The Third Man and I’m Not Scared. Only listed films may be studied as films.'
  },
  {
    id: 'en-051', type: 'flashcard', objective: 'english.comparative.texts.list',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'Can your single text also be one of your comparative texts?', back: 'No. Comparative texts can be any on the list other than the one chosen for study on its own.',
    explain: 'You study one text on its own plus three other texts for the comparative.'
  },
  {
    id: 'en-052', type: 'mcq', objective: 'english.poetry.prescribed.list', level: 'OL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which poem is on the 2027 Ordinary Level list?',
    options: [
      { text: 'Ozymandias (Shelley)', correct: true },
      { text: 'Digging (Heaney)', why: 'Not on the 2027 list.' },
      { text: 'Dulce et Decorum Est (Owen)', why: 'Not on the 2027 list.' },
      { text: 'Mirror (Plath)', why: 'Not on the 2027 list.' }
    ],
    explain: 'The 36 OL poems include Ozymandias, Shakespeare’s Sonnet XVIII and Duffy’s Valentine, as well as poems by the HL poets.'
  },
  {
    id: 'en-053', type: 'mcq', objective: 'english.poetry.yeats.themes', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which Yeats poem is NOT on the 2027 HL list?',
    options: [
      { text: 'Leda and the Swan', correct: true },
      { text: 'Easter 1916', why: 'It is on the list.' },
      { text: 'The Second Coming', why: 'It is on the list.' },
      { text: 'An Acre of Grass', why: 'It is on the list.' }
    ],
    explain: 'The 2027 Yeats selection includes Innisfree, September 1913, The Wild Swans at Coole, An Irish Airman Foresees his Death, Easter 1916, The Second Coming, Sailing to Byzantium and others.'
  },
  {
    id: 'en-054', type: 'mcq', objective: 'english.poetry.kavanagh.themes',
    question: 'Which Kavanagh poem sets a local land dispute against world events?',
    options: [
      { text: 'Epic', correct: true },
      { text: 'Shancoduff', why: 'Shancoduff is about the poet’s hilly, north-facing farm.' },
      { text: 'Advent', why: 'Advent is about recovering a childlike sense of wonder.' },
      { text: 'On Raglan Road', why: 'On Raglan Road is a love poem, later a well-known song.' }
    ],
    explain: '“Epic” suggests that a row over a few acres can matter as much as international crises. Homer, Kavanagh notes, made great poetry out of local quarrels.'
  },
  {
    id: 'en-055', type: 'flashcard', objective: 'english.poetry.dickinson.themes',
    front: 'What do Dickinson’s dashes do?', back: 'They break lines into fragments, creating pauses, hesitation and breathlessness, as if thought is happening in real time or breaking down.',
    explain: 'In “I felt a Funeral, in my Brain” the dashes mirror a mind losing control. Link form to meaning.'
  },
  {
    id: 'en-056', type: 'flashcard', objective: 'english.poetry.rich.themes', level: 'HL',
    front: '“Diving into the Wreck”: what is the dive a metaphor for?', back: 'A search for the truth beneath the myths and histories written by men: exploring “the wreck” itself rather than the story told about it.',
    explain: 'The diver’s equipment, the ladder and the androgynous “we” all suggest a deliberate, independent search for identity.'
  },
  {
    id: 'en-057', type: 'flashcard', objective: 'english.poetry.mahon.themes',
    front: 'Who is the speaker of Mahon’s “After the Titanic”?', back: 'Bruce Ismay, head of the White Star Line, who survived the sinking and was publicly shamed',
    explain: 'Mahon gives a voice to a disgraced man, consumed by guilt and isolation. It ties into his wider interest in outsiders.'
  },
  {
    id: 'en-058', type: 'flashcard', objective: 'english.poetry.donne.themes',
    front: 'What is the speaker’s argument in Donne’s “The Flea”?', back: 'The flea has bitten both lovers, so their blood is already mixed inside it. Sleeping together would therefore be no greater sin.',
    explain: 'It is witty, seductive and absurd. It shows Donne’s typical use of logic and an extended conceit to persuade.'
  },
  {
    id: 'en-059', type: 'flashcard', objective: 'english.poetry.bishop.themes',
    front: '“First Death in Nova Scotia”: whose perspective?', back: 'A young child’s, at her little cousin Arthur’s wake. She tries to make sense of death through the objects around her.',
    explain: 'The child’s literal, imaginative way of seeing the scene makes the loss more unsettling. This child’s-eye view recurs in Bishop’s work.'
  },
  {
    id: 'en-060', type: 'flashcard', objective: 'english.poetry.meehan.themes',
    front: '“Buying Winkles”: what is it about?', back: 'A childhood memory of being sent out at night to buy winkles from a street seller in inner-city Dublin. It is full of warmth, community and the child’s pride.',
    explain: 'Meehan treats ordinary working-class life with affection and precise detail. Look at the sounds, colours and the child’s sense of freedom.'
  },
  {
    id: 'en-061', type: 'mcq', objective: 'english.poetry.devices.effects', difficulty: 1,
    question: '“The silent, slithering serpent slid…” The repeated “s” sound is…',
    options: [
      { text: 'sibilance', correct: true },
      { text: 'assonance', why: 'Assonance repeats vowel sounds.' },
      { text: 'onomatopoeia', why: 'Onomatopoeia is a word that sounds like what it describes, e.g. buzz.' },
      { text: 'enjambment', why: 'Enjambment is about line breaks, not sounds.' }
    ],
    explain: 'Sibilance is a kind of alliteration using “s” and “sh” sounds. It often creates hushed, sinister or soothing effects.'
  },
  {
    id: 'en-062', type: 'flashcard', objective: 'english.poetry.devices.effects',
    front: 'Tone vs mood', back: 'Tone: the writer’s or speaker’s attitude (bitter, playful, reverent)\nMood: the atmosphere the reader feels (tense, peaceful, eerie)',
    explain: 'Name the tone precisely and point to the words that create it. “Sad” is weaker than “resigned” or “bitterly mournful”.'
  },
  {
    id: 'en-063', type: 'technique', objective: 'english.p1.exam.timing', provenance: 'exam-advice',
    title: 'Timing your English papers',
    intro: 'Divide your time in proportion to the marks. Check the marks on the paper itself.',
    dos: ['Spend about five minutes reading the paper and choosing questions', 'Give the composition its full share of time, since it carries the most marks on Paper 1', 'Set a finishing time for each section and stick to it', 'Keep a few minutes to reread for errors'],
    donts: ['Don’t overrun on your favourite question', 'Don’t leave a section blank. A short planned answer beats nothing.'],
  },
  {
    id: 'en-064', type: 'mcq', objective: 'english.p1.qb.register', difficulty: 2,
    question: 'You are asked to write a letter to your local councillor about a dangerous junction. Which opening is most appropriate?',
    options: [
      { text: '“Dear Councillor Byrne, I am writing to raise a serious safety concern about…”', correct: true },
      { text: '“Hey! You need to sort out that junction now.”', why: 'The register is far too informal for the audience.' },
      { text: '“Once upon a time there was a junction…”', why: 'That is the wrong genre. The task is persuasive and functional.' },
      { text: '“To whom it may concern, junctions are a type of road.”', why: 'It is impersonal and states the obvious.' }
    ],
    explain: 'Question B rewards matching register, format and purpose to the task: a formal, polite tone with a clear purpose in the first line.'
  },
  {
    id: 'en-065', type: 'flashcard', objective: 'english.p1.composing.story',
    front: '“Show, don’t tell”: what does it mean?', back: 'Reveal emotions and character through action, detail and dialogue instead of stating them.',
    explain: '“She was nervous” tells. “She folded the ticket into smaller and smaller squares” shows.'
  },
  {
    id: 'en-066', type: 'mcq', objective: 'english.single.texts.othello', difficulty: 2,
    question: 'Before his death, Othello asks to be remembered as one who loved…',
    options: [
      { text: '“not wisely but too well”', correct: true },
      { text: '“with all his heart”', why: 'Not Shakespeare’s words.' },
      { text: '“honest Iago”', why: '“Honest” is the word repeatedly used of Iago.' },
      { text: '“the Moor of Venice”', why: 'That is from the play’s full title.' }
    ],
    explain: 'In his final speech (Act 5, Scene 2) Othello tries to shape his own story. Readers disagree about how far he truly takes responsibility, so use that debate in your answers.'
  },
  {
    id: 'en-067', type: 'flashcard', objective: 'english.single.texts.othello',
    front: 'Why does the move from Venice to Cyprus matter?', back: 'Venice stands for order, law and society. Cyprus is an isolated military outpost, away from that order, where Iago’s manipulation can thrive.',
    explain: 'Once the Turkish threat disappears, the danger becomes internal and psychological.'
  },
  {
    id: 'en-068', type: 'cloze', objective: 'english.poetry.devices.effects',
    prompt: 'Fill the gaps',
    text: 'A {{metaphor}} says one thing IS another; a {{simile}} compares using “like” or “as”.',
    choices: ['metaphor', 'simile', 'personification', 'oxymoron'],
  },
  {
    id: 'en-069', type: 'essay', objective: 'english.p1.composing.personal',
    prompt: 'Write a personal essay about a place that changed the way you see the world.',
    context: 'Original practice title in the style of a Paper 1 composition.',
    stages: [
      { label: 'Angle', items: ['Choose a real, specific place: a kitchen, a pitch, a grandparent’s farm. Specific beats grand.', 'Decide what changed in you. That is the essay’s heart.'] },
      { label: 'Structure', items: ['Open on a vivid moment in the place', 'Move between memory and reflection', 'Build to the realisation', 'Close by returning to the place, changed'] },
      { label: 'Style', items: ['Use sensory detail and a distinctive voice', 'Vary sentence length for rhythm', 'Reflect honestly. Examiners reward insight more than drama.'] }
    ]
  },
]);
