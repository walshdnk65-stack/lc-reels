import { define } from './define';

/* English. Items about which texts, modes and poets are prescribed come from circular
   0021/2025 (verified). Readings of poems and texts are original and are offered as
   interpretations, not as the one correct answer. Quotations are kept very short. */
const CIRC = 'Circular 0021/2025, Prescribed Material for LC English 2027';

export const english = define({}, [
  /* ---------------------------------------------------- Prescribed material */
  {
    id: 'en-001', type: 'flashcard', objective: 'english.comparative.modes.hl', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'The three Higher Level comparative modes for 2027?', back: '1. Theme or issue\n2. Cultural Context\n3. General Vision and Viewpoint',
    explain: 'You can’t know in advance which modes the exam questions will use, so prepare all three.'
  },
  {
    id: 'en-002', type: 'flashcard', objective: 'english.comparative.modes.ol', level: 'OL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'The three Ordinary Level comparative modes for 2027?', back: '1. Theme\n2. Social Setting\n3. Relationships',
  },
  {
    id: 'en-003', type: 'mcq', objective: 'english.single.texts.list', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which of these may be studied as the single text at Higher Level in 2027?',
    options: [
      { text: 'Othello', correct: true },
      { text: 'Sive', why: 'Sive is marked O, so it is Ordinary Level only as a single text.' },
      { text: 'A Raisin in the Sun', why: 'Marked O, so it is Ordinary Level only as a single text.' },
      { text: 'The Cove', why: 'Marked O, so it is Ordinary Level only as a single text.' }
    ],
    explain: 'The HL/OL single texts for 2027 are Girl on an Altar, Hamnet, The Great Gatsby, Othello and Dracula.'
  },
  {
    id: 'en-004', type: 'flashcard', objective: 'english.single.texts.list', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'Higher Level rule about Shakespeare?', back: 'A Shakespeare play must be one of the texts studied, either as the single text or as part of the comparative study.',
    explain: 'For 2027 the listed plays are Othello (single or comparative) and Macbeth (comparative). At Ordinary Level, Shakespeare is optional.'
  },
  {
    id: 'en-005', type: 'mcq', objective: 'english.poetry.prescribed.list', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'Which poet is NOT on the Higher Level list for 2027?',
    options: [
      { text: 'Seamus Heaney', correct: true },
      { text: 'Patrick Kavanagh', why: 'Kavanagh is on the 2027 HL list.' },
      { text: 'Adrienne Rich', why: 'Rich is on the 2027 HL list.' },
      { text: 'Derek Mahon', why: 'Mahon is on the 2027 HL list.' }
    ],
    explain: 'The 2027 HL poets are Bishop, Dickinson, Donne, Kavanagh, Mahon, Meehan, Rich and Yeats.'
  },
  {
    id: 'en-006', type: 'flashcard', objective: 'english.poetry.prescribed.list', level: 'HL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    front: 'How many poems by each HL poet are students expected to have studied?', back: 'At least six poems by each poet',
    explain: 'The circular prescribes a selection from the poetry of eight poets, with about ten poems listed for each.'
  },
  {
    id: 'en-007', type: 'mcq', objective: 'english.poetry.prescribed.list', level: 'OL',
    provenance: 'prescribed', verification: 'verified', sourceNote: CIRC,
    question: 'How many poems are prescribed for Ordinary Level in 2027?',
    options: [{ text: '36', correct: true }, { text: '24' }, { text: '48' }, { text: '40' }],
    explain: 'A total of 36 poems is prescribed for OL. They include poems by some HL poets (e.g. Bishop’s “The Fish”) and single poems such as Shelley’s “Ozymandias”.'
  },
  /* ------------------------------------------------------------- The poets */
  {
    id: 'en-010', type: 'explainer', objective: 'english.poetry.bishop.themes',
    title: 'Elizabeth Bishop in 30 seconds',
    body: 'Bishop looks very closely. Her poems build up precise, almost scientific detail until a quiet moment of insight arrives.',
    bullets: ['Themes: travel and home, loss, childhood trauma, the search for belonging', 'Style: exact description, conversational tone, endings that turn (“The Fish” ends with the fish being let go)', 'Key poems: The Fish, At the Fishhouses, Filling Station, First Death in Nova Scotia, In the Waiting Room'],
    example: 'In “Filling Station”, a grimy, oil-soaked garage turns out to hold small signs of care, like a doily and a plant. The poem ends on the idea that someone loves everyone.'
  },
  {
    id: 'en-011', type: 'explainer', objective: 'english.poetry.dickinson.themes',
    title: 'Emily Dickinson in 30 seconds',
    body: 'Dickinson writes short, intense poems that explore extreme inner states: despair, ecstasy and the moment of death.',
    bullets: ['Themes: death and the afterlife, mental suffering, nature’s strangeness, hope', 'Style: dashes, unusual capitals, slant rhyme, hymn-like metre broken by surprises', 'Key poems: I felt a Funeral, in my Brain · I Heard a fly buzz – when I died · After great pain, a formal feeling comes'],
    example: 'In “I Heard a fly buzz – when I died”, the solemn deathbed is interrupted by a buzzing fly. The ordinary undercuts the expected grand moment.'
  },
  {
    id: 'en-012', type: 'explainer', objective: 'english.poetry.donne.themes',
    title: 'John Donne in 30 seconds',
    body: 'Donne is a metaphysical poet. He argues in verse, using startling comparisons (conceits) to explore love and faith.',
    bullets: ['Themes: physical and spiritual love, separation, death, a struggle with God', 'Style: dramatic openings, argument, wit, extended conceits, paradox', 'Key poems: The Sunne Rising, A Valediction Forbidding Mourning, The Flea, Batter my heart'],
    example: '“A Valediction Forbidding Mourning” compares two lovers to the legs of a drawing compass. One stays fixed while the other roams, yet they remain joined.'
  },
  {
    id: 'en-013', type: 'explainer', objective: 'english.poetry.kavanagh.themes',
    title: 'Patrick Kavanagh in 30 seconds',
    body: 'Kavanagh finds the significant in the ordinary: Monaghan fields, a canal bank, a local row over land.',
    bullets: ['Themes: rural life and its limits, the value of the local, spiritual renewal, childhood', 'Style: plain speech, the sonnet form, wonder at everyday things', 'Key poems: Epic, Shancoduff, A Christmas Childhood, Canal Bank Walk, The Hospital'],
    example: '“Epic” sets a local boundary dispute against world events in 1938, and argues that small, local matters can be as important as great ones.'
  },
  {
    id: 'en-014', type: 'explainer', objective: 'english.poetry.mahon.themes',
    title: 'Derek Mahon in 30 seconds',
    body: 'Mahon writes about outsiders, forgotten things and history’s victims. His poems are elegant and ironic, with formal structures.',
    bullets: ['Themes: isolation, history and violence, memory, art as consolation', 'Style: controlled stanzas, rich imagery, irony, a detached observer', 'Key poems: A Disused Shed in Co. Wexford, After the Titanic, Grandfather, Antarctica, Kinsale'],
    example: 'In “A Disused Shed in Co. Wexford”, mushrooms forgotten in a shed become a voice for all the forgotten victims of history.'
  },
  {
    id: 'en-015', type: 'explainer', objective: 'english.poetry.meehan.themes',
    title: 'Paula Meehan in 30 seconds',
    body: 'Meehan gives voice to people who are often unheard: inner-city Dublin communities, women and children.',
    bullets: ['Themes: memory and childhood, family conflict, social injustice, the environment', 'Style: vivid detail, the rhythm of speech, personal and political together', 'Key poems: Buying Winkles, The Pattern, The Statue of the Virgin at Granard Speaks, Hearth Lesson'],
    example: '“The Statue of the Virgin at Granard Speaks” responds to the death of Ann Lovett in 1984, a teenager who died after giving birth alone at a grotto. The statue itself is the speaker.'
  },
  {
    id: 'en-016', type: 'explainer', objective: 'english.poetry.rich.themes',
    title: 'Adrienne Rich in 30 seconds',
    body: 'Rich examines power, gender and relationships. Her style grows from formal early poems to freer, more direct later work.',
    bullets: ['Themes: patriarchy and women’s lives, marriage, power, rediscovering hidden histories', 'Style: early poems are tightly rhymed; later ones use free verse and extended metaphor', 'Key poems: Aunt Jennifer’s Tigers, Living in Sin, Power, Diving into the Wreck'],
    example: 'In “Aunt Jennifer’s Tigers”, the bold tigers Aunt Jennifer embroiders contrast with her own life, weighed down by her wedding ring.'
  },
  {
    id: 'en-017', type: 'explainer', objective: 'english.poetry.yeats.themes',
    title: 'W. B. Yeats in 30 seconds',
    body: 'Yeats moves from romantic longing to public, political poetry and later to reflections on age and art.',
    bullets: ['Themes: Irish identity and politics, ageing and mortality, art and permanence, a changing world', 'Style: musical rhythm, symbols (swans, Byzantium), refrains, a commanding voice', 'Key poems: The Wild Swans at Coole, September 1913, Easter 1916, The Second Coming, Sailing to Byzantium'],
    example: '“Easter 1916” keeps returning to the line “A terrible beauty is born”. Yeats is admiring and troubled at the same moment.'
  },
  {
    id: 'en-018', type: 'mcq', objective: 'english.poetry.devices.effects',
    question: 'Donne compares lovers to the two legs of a drawing compass. This kind of extended, surprising comparison is called…',
    options: [
      { text: 'a conceit', correct: true },
      { text: 'onomatopoeia', why: 'Onomatopoeia is a word that imitates a sound.' },
      { text: 'a volta', why: 'A volta is the turn in a sonnet’s argument.' },
      { text: 'enjambment', why: 'Enjambment is a sentence running over a line break.' }
    ],
    explain: 'A conceit is an elaborate, unexpected comparison developed at length. It is typical of metaphysical poetry.'
  },
  {
    id: 'en-019', type: 'flashcard', objective: 'english.poetry.devices.effects',
    front: 'Enjambment vs caesura', back: 'Enjambment: a sentence runs on past the end of a line\nCaesura: a pause in the middle of a line',
    explain: 'Always say what the device does. Enjambment can create momentum or surprise; a caesura can create hesitation or emphasis.'
  },
  {
    id: 'en-020', type: 'flashcard', objective: 'english.poetry.devices.effects',
    front: 'Volta', back: 'The turn in a sonnet, where the argument or mood shifts',
    explain: 'In a Petrarchan sonnet it usually comes at line 9; in a Shakespearean sonnet, often at the final couplet. Kavanagh’s “Canal Bank Walk” is a sonnet.'
  },
  {
    id: 'en-021', type: 'short', objective: 'english.poetry.devices.unseen', provenance: 'exam-advice',
    question: 'What should a strong paragraph about a poem include?',
    model: 'A clear point that answers the question, a short quotation or close reference, the technique being used, the effect on the reader, and a link back to the question.',
    keyPoints: [
      { point: 'A point linked to the question', keywords: ['point', 'question', 'argument', 'answer'] },
      { point: 'Quotation or reference', keywords: ['quot', 'reference', 'evidence'] },
      { point: 'Name the technique', keywords: ['technique', 'device', 'imagery', 'language'] },
      { point: 'Explain the effect', keywords: ['effect', 'reader', 'impact', 'feel'] }
    ]
  },
  {
    id: 'en-022', type: 'essay', objective: 'english.poetry.bishop.themes', level: 'HL',
    prompt: '“Bishop’s meticulous observation of the world around her often leads to moments of startling insight.” Discuss, with reference to the poems on your course.',
    context: 'Original practice question in the style of a Paper 2 poetry question.',
    stages: [
      { label: 'Thesis', items: ['Agree, and qualify it: the insight is often quiet, uncomfortable or left unresolved rather than “startling”.'] },
      { label: 'Paragraph plan', items: ['The Fish: close detail builds to a moment of release and respect', 'At the Fishhouses: description of the cold sea opens onto a meditation on knowledge', 'Filling Station: dirt and disorder reveal signs of love', 'First Death in Nova Scotia: a child’s literal view of death', 'In the Waiting Room: an ordinary moment becomes a crisis of identity'] },
      { label: 'Evidence', items: ['Use brief, precise quotations: two or three words are often enough', 'Discuss technique each time: tone, repetition, line endings, colour imagery'] },
      { label: 'Conclusion', items: ['Return to the question. Observation is Bishop’s way of thinking, and insight is earned through it.'] }
    ]
  },
  /* ------------------------------------------------------------- Othello */
  {
    id: 'en-030', type: 'mcq', objective: 'english.single.texts.othello', difficulty: 1,
    question: 'Who says “I am not what I am” in the opening scene of Othello?',
    options: [
      { text: 'Iago', correct: true },
      { text: 'Othello', why: 'Othello is open and trusting. This line reveals a deceiver.' },
      { text: 'Roderigo', why: 'Roderigo is Iago’s dupe, not the deceiver.' },
      { text: 'Cassio', why: 'Cassio is the one Iago resents for getting the promotion.' }
    ],
    explain: 'Iago tells the audience directly that he is hiding his true self. This dramatic irony runs through the whole play.'
  },
  {
    id: 'en-031', type: 'flashcard', objective: 'english.single.texts.othello',
    front: 'Why does Iago hate Othello? (the reasons he gives)', back: 'He was passed over for promotion in favour of Cassio, and he suspects Othello slept with his wife, Emilia.',
    explain: 'His reasons shift and never quite add up. That is why critics debate whether his malice has any real motive. Use this ambiguity in your answers.'
  },
  {
    id: 'en-032', type: 'flashcard', objective: 'english.single.texts.othello',
    front: 'Why does the handkerchief matter?', back: 'It was Othello’s first gift to Desdemona. Iago uses it as “proof” of her infidelity.',
    explain: 'A small object carries huge emotional weight. Othello trusts a planted object over his own wife, which shows how far Iago’s poison has spread.'
  },
  {
    id: 'en-033', type: 'mcq', objective: 'english.single.texts.othello', difficulty: 2,
    question: 'Which character finally exposes Iago’s plot?',
    options: [
      { text: 'Emilia', correct: true },
      { text: 'Cassio', why: 'Cassio is wounded and learns the truth late.' },
      { text: 'Lodovico', why: 'Lodovico takes charge at the end but doesn’t uncover the plot.' },
      { text: 'Bianca', why: 'Bianca is accused by Iago but doesn’t expose him.' }
    ],
    explain: 'Emilia realises what the handkerchief means and defies her husband to tell the truth. It costs her her life. Her courage contrasts with her earlier obedience.'
  },
  /* ------------------------------------------------------------- Paper 1 */
  {
    id: 'en-040', type: 'flashcard', objective: 'english.p1.comprehension.genres', provenance: 'syllabus',
    front: 'The five language genres in LC English', back: 'Information · Argument · Persuasion · Narration · Aesthetic',
    explain: 'Paper 1 texts and tasks are built around these genres. Many pieces blend several of them.'
  },
  {
    id: 'en-041', type: 'mcq', objective: 'english.p1.comprehension.genres',
    question: '“Imagine a city where every child walks safely to school. That city can be ours if you vote yes.” Which language genre dominates?',
    options: [
      { text: 'Persuasion', correct: true },
      { text: 'Information', why: 'Information language is neutral and factual.' },
      { text: 'Narration', why: 'Narration tells a story in sequence.' },
      { text: 'Aesthetic', why: 'Aesthetic language is mainly about beauty and creative effect.' }
    ],
    explain: 'It appeals to the reader directly, uses an emotive image and ends with a call to action. These are classic persuasive techniques. Argument relies more on reasoned evidence.'
  },
  {
    id: 'en-042', type: 'technique', objective: 'english.p1.comprehension.style', provenance: 'exam-advice',
    title: 'Answering a style question (Question A)',
    intro: 'Style questions reward specific analysis, not general praise.',
    dos: ['Make a clear point about a feature of style', 'Support every point with a short quotation', 'Explain the effect on the reader', 'Cover a range of features: imagery, tone, structure, sentence length'],
    donts: ['Don’t list devices without explaining them', 'Don’t retell what the passage says', 'Don’t write “it makes the reader want to read on” without explaining how'],
  },
  {
    id: 'en-043', type: 'technique', objective: 'english.p1.composing.personal', provenance: 'exam-advice',
    title: 'Planning a composition',
    intro: 'Composing carries the most marks on Paper 1. A five-minute plan pays for itself.',
    dos: ['Address the title and the genre exactly as set', 'Develop a distinctive voice', 'Use concrete detail and anecdote', 'Plan a shape: hook → development → resolution'],
    donts: ['Don’t force in a pre-learned essay that doesn’t fit the title', 'Don’t write in the wrong form (a speech must sound like a speech)', 'Don’t sacrifice clarity for fancy vocabulary'],
  },
  {
    id: 'en-044', type: 'cloze', objective: 'english.comparative.modes.linking',
    prompt: 'Choose the linking phrase that fits',
    text: 'In Text A the heroine is trapped by convention. {{Similarly|Likewise}}, the protagonist of Text B struggles against family expectations. {{However|In contrast}}, the film offers a more hopeful resolution.',
    choices: ['Similarly', 'However', 'Therefore', 'For example'],
    explain: 'Comparative answers are marked partly on how well you compare. Linking words make the comparison visible.'
  },
  {
    id: 'en-045', type: 'essay', objective: 'english.comparative.modes.hl', level: 'HL',
    prompt: 'Compare how power is held and used in the cultural contexts of your comparative texts.',
    context: 'Original practice question, Cultural Context mode.',
    stages: [
      { label: 'Thesis', items: ['State what kind of power dominates each world (social class, gender, religion, money, family) and how it shapes the characters’ choices.'] },
      { label: 'Key moments', items: ['Pick 2–3 key moments per text where power is shown clearly', 'Each moment should show the cultural context in action, not just the plot'] },
      { label: 'Comparisons', items: ['Link texts in every paragraph using “similarly”, “in contrast”, “unlike”', 'Note degrees: power is absolute in one world and contested in another'] },
      { label: 'Conclusion', items: ['Which world is most restrictive? What does each text suggest about challenging power?'] }
    ]
  },
]);
