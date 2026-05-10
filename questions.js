const QUESTIONS = {

  // ─────────────────────────────────────────────
  // CATEGORY 1: PERSONALITY
  // ─────────────────────────────────────────────

  personality: [
    {
      id: 'personality_v1_window',
      category: 'personality',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>The mirror shows thee a window. Which window is most truly thine?</em>',
      answers: [
        { text: 'A tall library window, books spilling onto the sill', emoji: '📚',
          scores: { belle: 5, elsa: 2, rapunzel: 2, aurora: 1 } },
        { text: 'A wide-open window above a kingdom, wind in the curtains', emoji: '🏰',
          scores: { jasmine: 5, moana: 3, ariel: 3, merida: 2 } },
        { text: 'A small cottage window with wildflowers on the sill', emoji: '🌸',
          scores: { 'snow-white': 5, aurora: 3, cinderella: 3, anna: 2 } },
        { text: 'A tower window onto an endless starry sky', emoji: '⭐',
          scores: { rapunzel: 5, elsa: 3, meg: 3, pocahontas: 2 } }
      ]
    },
    {
      id: 'personality_v2_reflection',
      category: 'personality',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>Which reflection dost thou recognise as thine own?</em>',
      answers: [
        { text: 'Still water — perfectly clear, perfectly alone', emoji: '🌊',
          scores: { elsa: 5, pocahontas: 3, aurora: 2, meg: 2 } },
        { text: 'A mirror that shows who you could be, not who you are', emoji: '✨',
          scores: { rapunzel: 5, ariel: 4, jasmine: 3, belle: 2 } },
        { text: 'A warm firelit glass that makes everything feel safe', emoji: '🔥',
          scores: { anna: 5, 'snow-white': 3, cinderella: 3, aurora: 2 } },
        { text: 'A river in motion — always changing, never stopping', emoji: '🌿',
          scores: { moana: 5, merida: 4, pocahontas: 3, ariel: 2 } }
      ]
    },
    {
      id: 'personality_v3_room',
      category: 'personality',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>Which room feels most like the inside of thy soul?</em>',
      answers: [
        { text: 'A small room with one window, floor-to-ceiling books, a single armchair', emoji: '📖',
          scores: { belle: 5, elsa: 3, meg: 2, aurora: 1 } },
        { text: 'A bright studio covered in paintings, open to the sky', emoji: '🎨',
          scores: { rapunzel: 5, ariel: 3, anna: 2, tiana: 2 } },
        { text: 'A grand hall with tall doors and a view of the whole kingdom', emoji: '👑',
          scores: { jasmine: 4, cinderella: 4, aurora: 3, mulan: 2 } },
        { text: 'A wild clearing in a forest — no walls, no ceiling, just sky', emoji: '🌲',
          scores: { merida: 5, pocahontas: 5, moana: 3, raya: 2 } }
      ]
    },
    {
      id: 'personality_v4_color',
      category: 'personality',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which color speaks most deeply to thee?</em>',
      answers: [
        { text: 'Deep blue-violet — the color of midnight and cold stars', emoji: '💙',
          scores: { elsa: 5, belle: 2, meg: 2, aurora: 1 } },
        { text: 'Warm gold — the color of candlelight and late afternoon', emoji: '✨',
          scores: { belle: 4, cinderella: 4, aurora: 3, tiana: 2 } },
        { text: 'Wild green — the color of forest and growing things', emoji: '🌿',
          scores: { merida: 5, pocahontas: 4, moana: 3, rapunzel: 2 } },
        { text: 'Deep red — the color of courage and fire', emoji: '❤️',
          scores: { mulan: 5, raya: 4, jasmine: 3, ariel: 2 } }
      ]
    },
    {
      id: 'personality_q5_pull',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What pulls thee most deeply, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'An idea I cannot stop turning over in my mind',
          scores: { belle: 5, mulan: 4, tiana: 3, raya: 2, elsa: 2 } },
        { text: 'A place I have never been but feel pulled toward',
          scores: { moana: 5, ariel: 4, jasmine: 3, merida: 2, rapunzel: 2 } },
        { text: 'A person who needs me — whose story calls to mine',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, tiana: 2, aurora: 2 } },
        { text: 'A challenge that seems impossible to everyone but me',
          scores: { mulan: 5, raya: 4, tiana: 3, merida: 3, jasmine: 2 } }
      ]
    },
    {
      id: 'personality_q6_room_enters',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>When thou enterest a room, what happens?</em>',
      answers: [
        { text: 'I bring warmth — the energy shifts, people turn toward me',
          scores: { anna: 5, rapunzel: 3, 'snow-white': 3, tiana: 2 } },
        { text: 'I observe first — I want to understand before I speak',
          scores: { belle: 4, pocahontas: 4, elsa: 3, aurora: 2 } },
        { text: 'I find the edge — I am more comfortable watching than being watched',
          scores: { elsa: 4, meg: 4, raya: 3, jasmine: 2 } },
        { text: 'I look for the most interesting person or thing and move toward it',
          scores: { ariel: 5, belle: 3, jasmine: 3, rapunzel: 2 } }
      ]
    },
    {
      id: 'personality_q7_deepest',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What pulls thee deepest, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'An idea I cannot stop turning over — truth I have not yet found',
          scores: { belle: 5, mulan: 4, tiana: 3, raya: 2, elsa: 2 } },
        { text: 'The feeling of belonging somewhere that asks me to be fully myself',
          scores: { elsa: 5, jasmine: 4, merida: 4, meg: 3, ariel: 2 } },
        { text: 'The people I love — their faces, their voices, their becoming',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, aurora: 2, tiana: 2 } },
        { text: 'The horizon — what is past it, what is possible, what is next',
          scores: { moana: 5, ariel: 4, rapunzel: 3, jasmine: 3, belle: 1 } }
      ]
    },
    {
      id: 'personality_q8_hard_day',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>After a very hard day, what dost thou do?</em>',
      answers: [
        { text: 'Find someone I love and tell them everything',
          scores: { anna: 5, rapunzel: 3, 'snow-white': 3, cinderella: 2 } },
        { text: 'Go somewhere quiet and be alone until I can breathe again',
          scores: { elsa: 5, belle: 3, meg: 3, pocahontas: 3 } },
        { text: 'Work. Moving my hands helps me think',
          scores: { tiana: 5, mulan: 4, raya: 3, merida: 2 } },
        { text: 'Go outside — somewhere wild where the world does not know my name',
          scores: { merida: 5, pocahontas: 4, moana: 4, ariel: 2 } }
      ]
    },
    {
      id: 'personality_q9_overwhelmed',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>When thou art overwhelmed, what dost thou do first?</em>',
      answers: [
        { text: 'I retreat. I need to be alone before I can come back',
          scores: { elsa: 5, meg: 5, raya: 3, jasmine: 2 } },
        { text: 'I talk it through. Saying it aloud makes it smaller',
          scores: { anna: 5, rapunzel: 4, 'snow-white': 3, tiana: 2 } },
        { text: 'I make a plan. Problems feel smaller with a list',
          scores: { tiana: 5, mulan: 4, belle: 3, raya: 2 } },
        { text: 'I go somewhere beautiful and let it pass through me',
          scores: { aurora: 4, pocahontas: 5, moana: 3, belle: 2 } }
      ]
    },
    {
      id: 'personality_q10_tradeoff',
      category: 'personality',
      type: 'tradeoff',
      weight: 1.4,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'To be deeply known by a few — or warmly liked by many.',
      answers: [
        { text: 'Deeply known by a few',
          scores: { belle: 5, elsa: 4, meg: 4, raya: 3, anna: -2 } },
        { text: 'Warmly liked by many',
          scores: { anna: 5, 'snow-white': 4, rapunzel: 3, cinderella: 3, elsa: -2 } }
      ]
    },
    {
      id: 'personality_q11_bring',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What dost thou bring to the people around thee?</em>',
      answers: [
        { text: 'Warmth. Energy. The lights coming on',
          scores: { anna: 5, rapunzel: 4, 'snow-white': 3, tiana: 2 } },
        { text: 'Honesty. I tell people what they need to hear',
          scores: { raya: 5, belle: 4, mulan: 3, jasmine: 3 } },
        { text: 'Steadiness. I am the one who does not panic',
          scores: { mulan: 5, tiana: 4, elsa: 3, pocahontas: 3 } },
        { text: 'Wonder. I notice what others miss and name it',
          scores: { belle: 5, ariel: 4, rapunzel: 3, pocahontas: 3 } }
      ]
    },
    {
      id: 'personality_q12_secret',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou hide most carefully from the world?</em>',
      answers: [
        { text: 'How much I want. My longing is bigger than they know',
          scores: { ariel: 5, jasmine: 4, rapunzel: 4, moana: 3 } },
        { text: 'How afraid I am. I look strong but I am not always',
          scores: { elsa: 5, mulan: 4, cinderella: 3, meg: 3 } },
        { text: 'How soft I am. My tenderness feels dangerous to show',
          scores: { raya: 5, meg: 4, belle: 3, jasmine: 2 } },
        { text: 'How wild I am. I keep the untamed parts hidden',
          scores: { merida: 5, moana: 4, ariel: 3, jasmine: 3 } }
      ]
    },
    {
      id: 'personality_q13_remember',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>How dost thou most want to be remembered?</em>',
      answers: [
        { text: 'As someone who was kind — and whose kindness changed things',
          scores: { 'snow-white': 5, anna: 4, cinderella: 4, aurora: 3 } },
        { text: 'As someone who was brave enough to be fully herself',
          scores: { elsa: 5, jasmine: 4, merida: 4, rapunzel: 3 } },
        { text: 'As someone who built something real and lasting',
          scores: { tiana: 5, mulan: 4, belle: 3, raya: 3 } },
        { text: 'As someone who loved well and was loved in return',
          scores: { anna: 5, cinderella: 4, aurora: 3, 'snow-white': 3 } }
      ]
    },
    {
      id: 'personality_q14_learning',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>How dost thou learn best?</em>',
      answers: [
        { text: 'By reading. Give me a book and time',
          scores: { belle: 5, elsa: 3, aurora: 2, rapunzel: 2 } },
        { text: 'By doing. I learn by trying and failing',
          scores: { merida: 5, ariel: 4, rapunzel: 3, tiana: 3 } },
        { text: 'By watching others carefully before I act',
          scores: { mulan: 5, pocahontas: 4, raya: 3, belle: 2 } },
        { text: 'By talking it through with someone I trust',
          scores: { anna: 5, 'snow-white': 3, tiana: 3, aurora: 2 } }
      ]
    },
    {
      id: 'personality_q15_how_others_see',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How do others most often see thee, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Curious — they wonder what I am thinking',
          scores: { belle: 5, meg: 5, pocahontas: 3, raya: 3 } },
        { text: 'Warm — people feel safe with me immediately',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, aurora: 2 } },
        { text: 'Strong — people come to me when things go wrong',
          scores: { mulan: 5, raya: 4, tiana: 3, merida: 3 } },
        { text: 'Surprising — I am not what they expected',
          scores: { jasmine: 5, ariel: 4, rapunzel: 3, merida: 3 } }
      ]
    },
    {
      id: 'personality_q16_tradeoff2',
      category: 'personality',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'A life of great adventure with real danger — or a life of deep peace with real beauty.',
      answers: [
        { text: 'Great adventure with real danger',
          scores: { moana: 5, merida: 4, ariel: 4, jasmine: 3, raya: 3, 'snow-white': -2 } },
        { text: 'Deep peace with real beauty',
          scores: { aurora: 5, 'snow-white': 4, belle: 3, cinderella: 3, elsa: 3, moana: -2 } }
      ]
    },
    {
      id: 'personality_q17_trust',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How quickly dost thou trust someone new?</em>',
      answers: [
        { text: 'Quickly — I lead with openness and adjust later',
          scores: { anna: 5, 'snow-white': 4, rapunzel: 3, ariel: 3 } },
        { text: 'Slowly — trust is built in small moments over time',
          scores: { elsa: 4, raya: 5, mulan: 3, belle: 3 } },
        { text: 'I watch first. They show me who they are — I just pay attention',
          scores: { pocahontas: 5, meg: 4, raya: 3, mulan: 3 } },
        { text: 'It depends entirely on who they are',
          scores: { jasmine: 4, tiana: 3, merida: 3, aurora: 2 } }
      ]
    },
    {
      id: 'personality_q18_cannot_help',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What art thou that thou cannot help being, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Open. Trusting. Warm to a fault',
          scores: { anna: 5, 'snow-white': 4, rapunzel: 3, cinderella: 2 } },
        { text: 'Curious. I cannot pass a mystery without investigating',
          scores: { belle: 5, ariel: 4, jasmine: 3, rapunzel: 2 } },
        { text: 'Stubborn. Once I decide, I do not easily undecide',
          scores: { merida: 5, tiana: 4, raya: 3, mulan: 3 } },
        { text: 'Intense. I feel things more deeply than most',
          scores: { elsa: 5, meg: 4, ariel: 3, aurora: 2 } }
      ]
    },
    {
      id: 'personality_q19_alone',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou do when thou art truly alone?</em>',
      answers: [
        { text: 'Read, think, imagine. The quiet is the best part',
          scores: { belle: 5, elsa: 3, aurora: 3, meg: 2 } },
        { text: 'Create — paint, cook, build, make something',
          scores: { rapunzel: 5, tiana: 4, ariel: 3, belle: 2 } },
        { text: 'Move — walk, ride, swim, go somewhere',
          scores: { merida: 5, moana: 4, pocahontas: 3, ariel: 3 } },
        { text: 'Honestly, I do not love being alone for long',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, rapunzel: 2 } }
      ]
    },
    {
      id: 'personality_q20_freetext',
      category: 'personality',
      type: 'freetext',
      weight: 1.0,
      prompt: '<em>Finish this sentence:</em>',
      context: '"The thing I most want people to understand about me is..."',
      placeholder: 'Write thy truth, {name}',
      freetextTag: 'understand_me',
      answers: [
        { text: '[freetext]', scores: {} }
      ]
    },
    {
      id: 'personality_q21_misunderstand',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What do people most often misunderstand about thee?</em>',
      answers: [
        { text: 'They think I am cold. I am not — I am careful',
          scores: { elsa: 5, meg: 5, raya: 4, jasmine: 2 } },
        { text: 'They think I am naive. I am not — I choose to believe',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, aurora: 2 } },
        { text: 'They think I am difficult. I am not — I have standards',
          scores: { jasmine: 5, merida: 4, belle: 3, ariel: 2 } },
        { text: 'They think I am quiet. I am not — I am watching',
          scores: { pocahontas: 5, mulan: 4, aurora: 3, belle: 2 } }
      ]
    },
    {
      id: 'personality_q22_notice',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou notice first in any situation?</em>',
      answers: [
        { text: 'The strange detail no one else has noticed',
          scores: { belle: 5, meg: 5, pocahontas: 3, raya: 3 } },
        { text: 'The person who needs something but has not said so',
          scores: { 'snow-white': 5, anna: 4, cinderella: 3, aurora: 3 } },
        { text: 'The danger — where the risk is, where I need to be',
          scores: { mulan: 5, raya: 5, merida: 3, jasmine: 2 } },
        { text: 'The beauty — what is luminous and alive in the moment',
          scores: { aurora: 5, pocahontas: 4, rapunzel: 4, ariel: 3 } }
      ]
    },
    {
      id: 'personality_q23_hard_truth',
      category: 'personality',
      type: 'scenario',
      weight: 1.3,
      prompt: '<em>Someone tells thee a hard truth about thyself. What dost thou do?</em>',
      answers: [
        { text: 'I sit with it. If it is true, I want to know',
          scores: { belle: 5, mulan: 4, tiana: 3, raya: 3 } },
        { text: 'I push back at first, then think about it later when alone',
          scores: { merida: 4, jasmine: 4, ariel: 3, anna: 3 } },
        { text: 'I feel it deeply. I am sensitive to criticism even when I try not to be',
          scores: { rapunzel: 5, cinderella: 3, aurora: 3, 'snow-white': 3 } },
        { text: 'I file it away. I will decide later whether it is true',
          scores: { elsa: 5, raya: 3, meg: 4, pocahontas: 2 } }
      ]
    },
    {
      id: 'personality_q24_misunderstood',
      category: 'personality',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What do people most often get wrong about thee, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'They think I am cold. I am not — I am careful',
          scores: { elsa: 5, meg: 5, raya: 4, jasmine: 2 } },
        { text: 'They think I am reckless. I am not — I am alive',
          scores: { ariel: 5, merida: 4, rapunzel: 3, moana: 3 } },
        { text: 'They think I am simple. I am not — I am deep',
          scores: { aurora: 4, 'snow-white': 4, cinderella: 3, anna: 2 } },
        { text: 'They think I am hard. I am not — I have been hurt',
          scores: { meg: 5, raya: 4, jasmine: 3, elsa: 3 } }
      ]
    },
    {
      id: 'personality_q25_truest',
      category: 'personality',
      type: 'multipleChoice',
      weight: 2.0,
      prompt: '<em>The mirror asks one last thing of thee. What is most truly thee, <span class="name">{name}</span>?</em>',
      context: 'There is no wrong answer. Only thine own.',
      answers: [
        { text: 'Love. I love loudly. That is who I am',
          scores: { anna: 5, 'snow-white': 3, rapunzel: 2, cinderella: 2 } },
        { text: 'Curiosity. I want to understand everything',
          scores: { belle: 5, ariel: 4, jasmine: 3, rapunzel: 2 } },
        { text: 'Courage. I do hard things even when I am afraid',
          scores: { mulan: 5, raya: 4, merida: 3, jasmine: 3 } },
        { text: 'Becoming. I am always in the middle of changing',
          scores: { moana: 5, rapunzel: 4, elsa: 3, tiana: 3 } }
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // CATEGORY 2: STYLE
  // ─────────────────────────────────────────────

  style: [
    {
      id: 'style_v1_gown',
      category: 'style',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>Which gown calls to thee?</em>',
      answers: [
        { text: 'A golden ballgown — full skirt, warm light, timeless',
          emoji: '✨',
          scores: { belle: 5, cinderella: 3, aurora: 3, anna: 2 } },
        { text: 'A flowing emerald gown — wild and free like the sea',
          emoji: '🌊',
          scores: { ariel: 5, moana: 4, jasmine: 2, merida: 2 } },
        { text: 'A sharp fitted warrior outfit — built for movement',
          emoji: '⚔️',
          scores: { mulan: 5, raya: 5, merida: 3, jasmine: 2 } },
        { text: 'A dreamy layered gown — soft colors, delicate details',
          emoji: '🌸',
          scores: { aurora: 5, rapunzel: 4, 'snow-white': 3, cinderella: 3 } }
      ]
    },
    {
      id: 'style_v2_crown',
      category: 'style',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which crown is thine?</em>',
      answers: [
        { text: 'A delicate floral crown of real wildflowers',
          emoji: '🌺',
          scores: { aurora: 5, 'snow-white': 4, rapunzel: 3, anna: 2 } },
        { text: 'A single ice-clear crystal crown — stark and beautiful',
          emoji: '💎',
          scores: { elsa: 5, jasmine: 2, cinderella: 2, meg: 2 } },
        { text: 'A bold gold crown — heavy, meaningful, earned',
          emoji: '👑',
          scores: { mulan: 5, tiana: 4, raya: 3, cinderella: 3 } },
        { text: 'No crown — the wind in my hair is enough',
          emoji: '🌬️',
          scores: { merida: 5, moana: 5, pocahontas: 4, ariel: 3 } }
      ]
    },
    {
      id: 'style_v3_cloak',
      category: 'style',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which cloak wouldst thou wear into the night?</em>',
      answers: [
        { text: 'A long pale cloak — elegant, cool, like moonlight',
          emoji: '🌙',
          scores: { elsa: 5, aurora: 3, meg: 3, belle: 2 } },
        { text: 'A rich dark cloak — deep color, heavy fabric, serious',
          emoji: '🌑',
          scores: { mulan: 5, raya: 4, belle: 3, jasmine: 2 } },
        { text: 'A warm traveling cloak, worn and beloved',
          emoji: '🍂',
          scores: { belle: 5, anna: 4, merida: 3, pocahontas: 3 } },
        { text: 'Nothing — I would not want to be hidden',
          emoji: '✨',
          scores: { ariel: 5, rapunzel: 4, jasmine: 3, moana: 3 } }
      ]
    },
    {
      id: 'style_v4_adornment',
      category: 'style',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which adornment feels most like thee?</em>',
      answers: [
        { text: 'A single perfect pearl — understated and rare',
          emoji: '🤍',
          scores: { cinderella: 5, aurora: 4, belle: 3, 'snow-white': 2 } },
        { text: 'Bold gold arm cuffs — strong, present, unmissable',
          emoji: '💛',
          scores: { jasmine: 5, moana: 4, mulan: 3, tiana: 2 } },
        { text: 'Small painted flowers braided into my hair',
          emoji: '🌸',
          scores: { rapunzel: 5, anna: 4, 'snow-white': 3, aurora: 2 } },
        { text: 'Nothing extra — I am the adornment',
          emoji: '✨',
          scores: { merida: 5, ariel: 4, raya: 3, pocahontas: 3 } }
      ]
    },
    {
      id: 'style_q5_home_wear',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou wear at home when no one is watching?</em>',
      answers: [
        { text: 'Comfortable, simple, with a book in my hand',
          scores: { belle: 5, elsa: 3, aurora: 3, meg: 2 } },
        { text: 'Whatever I was wearing — I do not change for comfort',
          scores: { raya: 4, mulan: 4, tiana: 3, merida: 2 } },
        { text: 'Something soft and warm — cozy is its own elegance',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, rapunzel: 2 } },
        { text: 'Whatever lets me move — I am always doing something',
          scores: { merida: 5, ariel: 4, moana: 3, jasmine: 2 } }
      ]
    },
    {
      id: 'style_q6_dressed_up',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou love about getting dressed up?</em>',
      answers: [
        { text: 'The transformation — becoming a different version of myself',
          scores: { cinderella: 5, rapunzel: 4, ariel: 3, anna: 3 } },
        { text: 'The armor of it — being dressed well is a kind of confidence',
          scores: { jasmine: 5, tiana: 4, mulan: 3, elsa: 3 } },
        { text: 'The color and beauty — I love beautiful things',
          scores: { aurora: 5, 'snow-white': 4, belle: 3, rapunzel: 3 } },
        { text: 'Honestly, I do not love it much — it feels like a performance',
          scores: { merida: 5, meg: 4, raya: 3, pocahontas: 3 } }
      ]
    },
    {
      id: 'style_q7_myself',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>Which outfit makes thee feel most like thyself?</em>',
      answers: [
        { text: 'Simple, warm, with pockets — practical and mine',
          scores: { anna: 5, merida: 4, tiana: 3, rapunzel: 3 } },
        { text: 'Something elegant and precisely fitted',
          scores: { elsa: 5, jasmine: 4, cinderella: 3, tiana: 3 } },
        { text: 'Something bright and surprising — people turn to look',
          scores: { ariel: 5, rapunzel: 4, jasmine: 3, anna: 2 } },
        { text: 'Something that moves well — I dress for what I am doing',
          scores: { mulan: 5, raya: 5, merida: 3, moana: 3 } }
      ]
    },
    {
      id: 'style_q8_color_choose',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>If thou couldst wear only one color forever, which wouldst thou choose?</em>',
      answers: [
        { text: 'Gold — warm, luminous, timeless',
          scores: { belle: 5, cinderella: 3, tiana: 3, aurora: 2 } },
        { text: 'Blue — every shade from ice to midnight',
          scores: { elsa: 5, ariel: 4, cinderella: 3, anna: 2 } },
        { text: 'Green — forest, meadow, wild growing things',
          scores: { merida: 5, pocahontas: 4, moana: 3, rapunzel: 2 } },
        { text: 'Red — bold, present, impossible to ignore',
          scores: { mulan: 5, raya: 4, jasmine: 3, ariel: 2 } }
      ]
    },
    {
      id: 'style_q9_never_wear',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>What wouldst thou never wear?</em>',
      answers: [
        { text: 'Anything that constrains my movement',
          scores: { merida: 5, mulan: 4, raya: 4, moana: 3 } },
        { text: 'Bright pink or warm orange — not my palette',
          scores: { elsa: 5, meg: 4, raya: 3, mulan: 2 } },
        { text: 'Anything that requires constant fixing or adjusting',
          scores: { belle: 4, tiana: 3, raya: 3, pocahontas: 3 } },
        { text: 'Anything that makes me look smaller than I am',
          scores: { jasmine: 5, merida: 4, ariel: 3, moana: 3 } }
      ]
    },
    {
      id: 'style_q10_tradeoff',
      category: 'style',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'Perfect elegance that takes an hour to put on — or perfect comfort that looks effortless.',
      answers: [
        { text: 'Perfect elegance',
          scores: { cinderella: 5, aurora: 3, jasmine: 3, elsa: 2, merida: -2 } },
        { text: 'Perfect comfort that looks effortless',
          scores: { belle: 5, tiana: 5, pocahontas: 4, merida: 3, meg: 3, cinderella: -3 } }
      ]
    },
    {
      id: 'style_q11_hair',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>How dost thou wear thy hair when it is most truly thine?</em>',
      answers: [
        { text: 'Down and wild — the way the wind leaves it',
          scores: { merida: 5, ariel: 4, rapunzel: 3, moana: 2 } },
        { text: 'Precisely arranged — every detail considered',
          scores: { elsa: 5, cinderella: 4, aurora: 3, tiana: 2 } },
        { text: 'Simply and naturally — I do not fuss',
          scores: { pocahontas: 5, mulan: 4, belle: 3, 'snow-white': 3 } },
        { text: 'With flowers or small things woven in — always something personal',
          scores: { rapunzel: 5, anna: 4, aurora: 3, 'snow-white': 3 } }
      ]
    },
    {
      id: 'style_q12_gift',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>Someone gives thee a beautiful gift of clothing. What dost thou hope it is?</em>',
      answers: [
        { text: 'A perfect book or something for my creative work',
          scores: { belle: 5, rapunzel: 4, ariel: 3, tiana: 2 } },
        { text: 'Something for adventure — practical and well-made',
          scores: { merida: 5, mulan: 4, raya: 4, moana: 3 } },
        { text: 'Something beautiful and elegant for a special occasion',
          scores: { cinderella: 5, aurora: 4, anna: 3, jasmine: 2 } },
        { text: 'Something uniquely mine — they really paid attention',
          scores: { ariel: 5, rapunzel: 4, jasmine: 3, elsa: 2 } }
      ]
    },
    {
      id: 'style_q13_old_new',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>Dost thou prefer the old or the new?</em>',
      answers: [
        { text: 'Old — things with history and meaning',
          scores: { belle: 5, cinderella: 4, aurora: 3, mulan: 3 } },
        { text: 'New — I want what has never been seen before',
          scores: { ariel: 5, jasmine: 4, rapunzel: 3, tiana: 3 } },
        { text: 'Whatever fits the moment — I do not have a preference',
          scores: { anna: 4, moana: 3, merida: 3, pocahontas: 3 } },
        { text: 'Old things worn in new ways — that is the real style',
          scores: { elsa: 4, meg: 4, raya: 3, belle: 3 } }
      ]
    },
    {
      id: 'style_q14_tradeoff2',
      category: 'style',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'One extraordinary outfit for the most important night of thy life — or a wardrobe full of simple things thou lovest every day.',
      answers: [
        { text: 'One extraordinary outfit',
          scores: { cinderella: 5, aurora: 3, jasmine: 3, ariel: 3, merida: -2 } },
        { text: 'A wardrobe full of simple beloved things',
          scores: { belle: 5, tiana: 4, anna: 3, merida: 3, pocahontas: 3, cinderella: -2 } }
      ]
    },
    {
      id: 'style_q15_wearing',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>What art thou most often wearing when thou art happiest?</em>',
      answers: [
        { text: 'Something comfortable I have worn a hundred times',
          scores: { belle: 5, anna: 4, merida: 3, 'snow-white': 3 } },
        { text: 'Whatever I put on that morning without thinking',
          scores: { moana: 5, pocahontas: 4, raya: 3, merida: 3 } },
        { text: 'Something beautiful for a special moment',
          scores: { cinderella: 5, aurora: 4, tiana: 3, jasmine: 3 } },
        { text: 'Something I made or altered myself',
          scores: { rapunzel: 5, tiana: 4, ariel: 3, anna: 2 } }
      ]
    },
    {
      id: 'style_q16_disappear',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou wear when thou wantest to disappear?</em>',
      answers: [
        { text: 'Something dark and beautifully cut — invisible but elegant',
          scores: { elsa: 5, meg: 5, raya: 3, jasmine: 3 } },
        { text: 'Something plain that blends into the background',
          scores: { mulan: 4, cinderella: 3, aurora: 3, 'snow-white': 2 } },
        { text: 'I do not want to disappear — I dress to be seen',
          scores: { ariel: 5, rapunzel: 4, anna: 3, jasmine: 2 } },
        { text: 'I wear the forest — I go somewhere no one will look',
          scores: { merida: 5, pocahontas: 5, moana: 3, raya: 2 } }
      ]
    },
    {
      id: 'style_q17_signature',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What is thy signature — the one thing that is always part of thy look?</em>',
      answers: [
        { text: 'Something practical I always have with me',
          scores: { mulan: 5, raya: 4, tiana: 3, merida: 3 } },
        { text: 'A particular color that is undeniably mine',
          scores: { elsa: 5, ariel: 4, rapunzel: 3, jasmine: 3 } },
        { text: 'Something from nature — a flower, a feather, a leaf',
          scores: { pocahontas: 5, aurora: 4, 'snow-white': 3, anna: 3 } },
        { text: 'Nothing predictable — I like to surprise',
          scores: { jasmine: 5, ariel: 4, rapunzel: 3, merida: 2 } }
      ]
    },
    {
      id: 'style_q18_admire',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>Whose style dost thou secretly admire?</em>',
      answers: [
        { text: 'Someone who looks effortlessly at home in the wild',
          scores: { pocahontas: 5, merida: 4, moana: 4, raya: 3 } },
        { text: 'Someone who wears elegance like it was made only for them',
          scores: { cinderella: 5, aurora: 4, elsa: 3, jasmine: 3 } },
        { text: 'Someone who is always surprising — never the same twice',
          scores: { ariel: 5, rapunzel: 4, jasmine: 3, anna: 3 } },
        { text: 'Someone who dresses simply but is always the most beautiful person in the room',
          scores: { belle: 5, 'snow-white': 4, tiana: 3, aurora: 3 } }
      ]
    },
    {
      id: 'style_q19_collection',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>What dost thou collect, whether thou meanest to or not?</em>',
      answers: [
        { text: 'Books and maps and things with knowledge in them',
          scores: { belle: 5, jasmine: 3, ariel: 3, mulan: 2 } },
        { text: 'Small beautiful objects — shells, stones, curious things',
          scores: { ariel: 5, rapunzel: 4, anna: 3, pocahontas: 2 } },
        { text: 'Practical things — tools, ingredients, items with purpose',
          scores: { tiana: 5, mulan: 4, raya: 3, merida: 2 } },
        { text: 'Memories rather than objects — I do not collect things',
          scores: { elsa: 4, moana: 4, pocahontas: 3, aurora: 2 } }
      ]
    },
    {
      id: 'style_q20_freetext',
      category: 'style',
      type: 'freetext',
      weight: 1.0,
      prompt: '<em>Finish this sentence:</em>',
      context: '"When I look in the mirror and feel most like myself, I am wearing..."',
      placeholder: 'Write thy truth, {name}',
      freetextTag: 'mirror_self',
      answers: [
        { text: '[freetext]', scores: {} }
      ]
    },
    {
      id: 'style_q21_old_favorite',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>What is thine oldest, most beloved piece of clothing?</em>',
      answers: [
        { text: 'Something worn so soft it is barely there — impossibly comfortable',
          scores: { belle: 5, anna: 4, 'snow-white': 3, aurora: 2 } },
        { text: 'Something with a story — it has been somewhere with me',
          scores: { mulan: 5, raya: 4, merida: 3, pocahontas: 3 } },
        { text: 'Something someone I love gave me',
          scores: { cinderella: 5, anna: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'I do not get attached to clothing — I let things go',
          scores: { jasmine: 4, moana: 3, elsa: 3, raya: 3 } }
      ]
    },
    {
      id: 'style_q22_beauty',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou find truly beautiful?</em>',
      answers: [
        { text: 'Something precise and unexpected — beauty that requires looking closely',
          scores: { belle: 5, elsa: 4, meg: 3, tiana: 2 } },
        { text: 'Wild natural things — the untamed world at its most itself',
          scores: { pocahontas: 5, merida: 4, moana: 4, ariel: 3 } },
        { text: 'Warmth and light — the glow of something loved',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, aurora: 3 } },
        { text: 'Strength in motion — the power of a thing doing what it was made for',
          scores: { mulan: 5, raya: 4, jasmine: 3, moana: 3 } }
      ]
    },
    {
      id: 'style_q23_admire2',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>What style dost thou admire but cannot carry off?</em>',
      answers: [
        { text: 'Bohemian, layered, full of life',
          scores: { elsa: 5, mulan: 4, cinderella: 3, raya: 2 } },
        { text: 'Sharp, severe, perfectly architectural',
          scores: { anna: 4, rapunzel: 3, 'snow-white': 3, ariel: 2 } },
        { text: 'Effortlessly undone — the kind that looks accidental',
          scores: { cinderella: 4, aurora: 4, tiana: 3, belle: 2 } },
        { text: 'Grand and ceremonial — the kind that commands a room',
          scores: { merida: 4, pocahontas: 3, moana: 3, raya: 2 } }
      ]
    },
    {
      id: 'style_q24_most_you',
      category: 'style',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What one word describes thy truest style, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Wild — untamed, moved by nature',
          scores: { merida: 5, moana: 4, pocahontas: 4, ariel: 3 } },
        { text: 'Elegant — precise, considered, enduring',
          scores: { elsa: 5, cinderella: 4, aurora: 3, jasmine: 3 } },
        { text: 'Warm — lived-in, beloved, soft',
          scores: { anna: 5, 'snow-white': 4, tiana: 3, rapunzel: 3 } },
        { text: 'Sharp — strong, functional, honest',
          scores: { mulan: 5, raya: 5, tiana: 3, meg: 3 } }
      ]
    },
    {
      id: 'style_q25_truest',
      category: 'style',
      type: 'multipleChoice',
      weight: 2.0,
      prompt: '<em>The mirror asks one last thing. Style at its truest — what is it to thee, <span class="name">{name}</span>?</em>',
      context: 'There is no wrong answer. Only thine own.',
      answers: [
        { text: 'The armor I wear to face the world',
          scores: { mulan: 5, raya: 4, jasmine: 3, elsa: 3, tiana: 2 } },
        { text: 'The way I say who I am before I speak',
          scores: { jasmine: 5, ariel: 4, rapunzel: 3, elsa: 3, merida: 2 } },
        { text: 'Something I do not think about much — clothes are just clothes',
          scores: { merida: 5, pocahontas: 4, moana: 3, raya: 3 } },
        { text: 'A small daily joy — the first choice I make for myself each morning',
          scores: { anna: 5, cinderella: 4, aurora: 3, 'snow-white': 3 } }
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // CATEGORY 3: KINGDOM
  // ─────────────────────────────────────────────

  kingdom: [
    {
      id: 'kingdom_v1_throne',
      category: 'kingdom',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>Which throne would be thine?</em>',
      answers: [
        { text: 'A grand carved throne of warm oak — ancient and earned',
          emoji: '🏰',
          scores: { cinderella: 4, aurora: 3, anna: 3, mulan: 2 } },
        { text: 'A throne of living ice — cold, precise, extraordinary',
          emoji: '❄️',
          scores: { elsa: 5, raya: 2, meg: 2, jasmine: 1 } },
        { text: 'A simple stone seat at the center of the people',
          emoji: '🪨',
          scores: { moana: 5, pocahontas: 4, tiana: 3, raya: 3 } },
        { text: 'No throne at all — I rule from among the people',
          emoji: '🌿',
          scores: { anna: 5, 'snow-white': 4, rapunzel: 3, merida: 3 } }
      ]
    },
    {
      id: 'kingdom_v2_skyline',
      category: 'kingdom',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which kingdom skyline calls to thee?</em>',
      answers: [
        { text: 'Tall ice spires against a purple sky — impossible and beautiful',
          emoji: '❄️',
          scores: { elsa: 5, aurora: 2, jasmine: 2, meg: 2 } },
        { text: 'A lively market city with lanterns at every window',
          emoji: '🏮',
          scores: { jasmine: 5, tiana: 4, ariel: 3, anna: 2 } },
        { text: 'A wild coast with the ocean at the edge of everything',
          emoji: '🌊',
          scores: { moana: 5, ariel: 4, merida: 3, pocahontas: 2 } },
        { text: 'A forest kingdom — hidden, ancient, quietly powerful',
          emoji: '🌲',
          scores: { merida: 5, pocahontas: 4, aurora: 3, belle: 2 } }
      ]
    },
    {
      id: 'kingdom_v3_banner',
      category: 'kingdom',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>What banner flies over thy kingdom?</em>',
      answers: [
        { text: 'A rose — beauty, knowledge, resilience',
          emoji: '🌹',
          scores: { belle: 5, aurora: 3, cinderella: 2, 'snow-white': 2 } },
        { text: 'A wave — movement, depth, the open world',
          emoji: '🌊',
          scores: { moana: 5, ariel: 4, jasmine: 2, merida: 2 } },
        { text: 'A sword — courage, justice, protection',
          emoji: '⚔️',
          scores: { mulan: 5, raya: 5, merida: 3, jasmine: 2 } },
        { text: 'A star — hope, guidance, the long view',
          emoji: '⭐',
          scores: { tiana: 5, anna: 4, rapunzel: 3, 'snow-white': 3 } }
      ]
    },
    {
      id: 'kingdom_v4_castle',
      category: 'kingdom',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which castle is thy home?</em>',
      answers: [
        { text: 'A library-palace — every room holds books and discoveries',
          emoji: '📚',
          scores: { belle: 5, elsa: 3, rapunzel: 2, jasmine: 2 } },
        { text: 'A warm castle with fires in every hearth and open doors',
          emoji: '🔥',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, aurora: 2 } },
        { text: 'A fortress on the coast — practical, honest, built to last',
          emoji: '🏔️',
          scores: { moana: 5, merida: 4, raya: 3, mulan: 3 } },
        { text: 'A palace open to the market — the city flows through the gates',
          emoji: '🏮',
          scores: { jasmine: 5, tiana: 4, ariel: 3, rapunzel: 2 } }
      ]
    },
    {
      id: 'kingdom_q5_need',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What dost thou believe a kingdom most needs?</em>',
      answers: [
        { text: 'Books. Schools. Knowledge spread freely among all',
          scores: { belle: 5, jasmine: 5, mulan: 4, raya: 3 } },
        { text: 'Justice. People treated fairly regardless of birth',
          scores: { tiana: 5, anna: 4, 'snow-white': 3, cinderella: 2 } },
        { text: 'Safety. No one afraid in their own home',
          scores: { mulan: 5, elsa: 5, raya: 4, tiana: 3 } },
        { text: 'Joy. A people who can dance and feast and dream',
          scores: { moana: 5, ariel: 4, rapunzel: 3, anna: 3 } }
      ]
    },
    {
      id: 'kingdom_q6_good_ruler',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What makes a ruler good, truly good?</em>',
      answers: [
        { text: 'They listen. They hear what the people are not saying',
          scores: { pocahontas: 5, anna: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'They are just. They do not bend the rules for those they love',
          scores: { mulan: 5, raya: 5, tiana: 4, belle: 3 } },
        { text: 'They are present. They walk among the people, not above them',
          scores: { anna: 5, moana: 4, tiana: 3, merida: 3 } },
        { text: 'They are wise. They take the long view even when it is hard',
          scores: { belle: 5, elsa: 4, pocahontas: 3, mulan: 3 } }
      ]
    },
    {
      id: 'kingdom_q7_rule',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How wouldst thou rule, if the kingdom were thine?</em>',
      answers: [
        { text: 'With wisdom and books — I would study everything before I decided',
          scores: { belle: 5, mulan: 4, elsa: 3, tiana: 3 } },
        { text: 'With honesty — I would tell the people the truth always',
          scores: { raya: 5, jasmine: 5, mulan: 4, merida: 3 } },
        { text: 'With love — I would know my people by name',
          scores: { anna: 5, 'snow-white': 5, cinderella: 3, aurora: 2 } },
        { text: 'From beside them, not above — leadership is service',
          scores: { moana: 5, tiana: 4, pocahontas: 4, merida: 3 } }
      ]
    },
    {
      id: 'kingdom_q8_tradeoff',
      category: 'kingdom',
      type: 'tradeoff',
      weight: 1.4,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'A powerful kingdom feared by its enemies — or a small peaceful kingdom loved by its people.',
      answers: [
        { text: 'The powerful kingdom',
          scores: { mulan: 4, raya: 4, elsa: 3, jasmine: 3, 'snow-white': -2 } },
        { text: 'The small peaceful kingdom',
          scores: { anna: 5, 'snow-white': 5, cinderella: 4, aurora: 4, tiana: 3, mulan: -2 } }
      ]
    },
    {
      id: 'kingdom_q9_threat',
      category: 'kingdom',
      type: 'scenario',
      weight: 1.4,
      prompt: '<em>A threat comes to thy kingdom. What is thy first move?</em>',
      answers: [
        { text: 'I gather information. I do not act until I understand',
          scores: { belle: 5, mulan: 4, raya: 4, elsa: 3 } },
        { text: 'I protect the people first — everything else second',
          scores: { mulan: 5, anna: 4, 'snow-white': 3, cinderella: 3 } },
        { text: 'I seek an alliance — we are stronger together',
          scores: { moana: 5, anna: 4, tiana: 3, pocahontas: 3 } },
        { text: 'I go to meet it myself — I will not send others where I would not go',
          scores: { merida: 5, raya: 5, mulan: 3, jasmine: 2 } }
      ]
    },
    {
      id: 'kingdom_q10_hardest',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What is the hardest part of leading?</em>',
      answers: [
        { text: 'Making decisions that hurt people I love',
          scores: { anna: 5, elsa: 4, mulan: 3, tiana: 3 } },
        { text: 'Being the one no one comforts when things go wrong',
          scores: { elsa: 5, raya: 4, mulan: 3, jasmine: 2 } },
        { text: 'Knowing what is right when every choice has a cost',
          scores: { belle: 5, pocahontas: 4, tiana: 3, mulan: 3 } },
        { text: 'Earning the trust of people who have been hurt before',
          scores: { raya: 5, moana: 4, anna: 3, 'snow-white': 3 } }
      ]
    },
    {
      id: 'kingdom_q11_protect',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What wouldst thou protect first?</em>',
      answers: [
        { text: 'The peace. The stability. The order that was built',
          scores: { elsa: 5, mulan: 5, raya: 3, tiana: 3 } },
        { text: 'The children. The future of the kingdom',
          scores: { 'snow-white': 5, anna: 4, cinderella: 3, aurora: 3 } },
        { text: 'The truth. If the people are lied to, nothing else matters',
          scores: { belle: 5, jasmine: 5, raya: 4, mulan: 3 } },
        { text: 'The land itself. The kingdom is the earth and water and sky',
          scores: { pocahontas: 5, moana: 5, merida: 4, aurora: 2 } }
      ]
    },
    {
      id: 'kingdom_q12_tax',
      category: 'kingdom',
      type: 'scenario',
      weight: 1.2,
      prompt: '<em>A law exists that is unjust. What dost thou do?</em>',
      answers: [
        { text: 'Change it — I have the power, why would I hesitate',
          scores: { jasmine: 5, merida: 5, rapunzel: 3, anna: 3 } },
        { text: 'Study it first — I want to understand all the consequences',
          scores: { belle: 5, mulan: 4, tiana: 3, elsa: 3 } },
        { text: 'Build consensus — change that is forced does not last',
          scores: { pocahontas: 5, moana: 4, tiana: 3, aurora: 3 } },
        { text: 'Refuse to enforce it myself while I work to change it',
          scores: { raya: 4, mulan: 3, anna: 3, cinderella: 2 } }
      ]
    },
    {
      id: 'kingdom_q13_legacy',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What legacy wouldst thou leave?</em>',
      answers: [
        { text: 'A kingdom of learning — where every person could read and ask',
          scores: { belle: 5, jasmine: 4, mulan: 3, tiana: 2 } },
        { text: 'A kingdom of peace — where no one was afraid',
          scores: { elsa: 5, anna: 4, 'snow-white': 3, cinderella: 3 } },
        { text: 'A kingdom of connection — where many peoples were one',
          scores: { moana: 5, pocahontas: 5, raya: 4, tiana: 3 } },
        { text: 'A kingdom of freedom — where every person chose their own fate',
          scores: { merida: 5, jasmine: 5, rapunzel: 4, ariel: 3 } }
      ]
    },
    {
      id: 'kingdom_q14_tradeoff2',
      category: 'kingdom',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'Rule with people who always agree with thee — or rule with advisors who always challenge thee.',
      answers: [
        { text: 'Those who always agree',
          scores: { anna: 3, cinderella: 3, aurora: 2, 'snow-white': 2, belle: -3, raya: -3 } },
        { text: 'Those who always challenge',
          scores: { belle: 5, raya: 5, mulan: 4, tiana: 4, elsa: 3, anna: -2 } }
      ]
    },
    {
      id: 'kingdom_q15_ban',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>If thou couldst ban one thing from thy kingdom, what would it be?</em>',
      answers: [
        { text: 'Ignorance. Hiding the truth from the people',
          scores: { belle: 5, jasmine: 5, mulan: 4, raya: 3 } },
        { text: 'Cruelty. The powerful hurting those with less',
          scores: { 'snow-white': 5, cinderella: 4, anna: 3, tiana: 3 } },
        { text: 'Fear. The kind that keeps people small',
          scores: { rapunzel: 5, elsa: 5, jasmine: 3, merida: 3 } },
        { text: 'Arranged fates — no more marriages or lives decided by birth',
          scores: { jasmine: 5, merida: 5, ariel: 4, rapunzel: 4 } }
      ]
    },
    {
      id: 'kingdom_q16_ally',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What makes a good ally?</em>',
      answers: [
        { text: 'They keep their word. Always, without exception',
          scores: { raya: 5, mulan: 4, tiana: 3, anna: 3 } },
        { text: 'They tell me the truth even when it is not what I want to hear',
          scores: { belle: 5, raya: 4, pocahontas: 3, tiana: 3 } },
        { text: 'They show up when things are hard — not only when it is easy',
          scores: { anna: 5, 'snow-white': 4, moana: 3, mulan: 3 } },
        { text: 'They want for their people what I want for mine',
          scores: { moana: 5, pocahontas: 5, tiana: 4, elsa: 3 } }
      ]
    },
    {
      id: 'kingdom_q17_peace',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How dost thou maintain peace in thy kingdom?</em>',
      answers: [
        { text: 'By being just. When people trust the rules, they follow them',
          scores: { mulan: 5, raya: 4, tiana: 4, belle: 3 } },
        { text: 'By listening. When people feel heard they do not rage',
          scores: { pocahontas: 5, anna: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'By being present. I know my people. They know me',
          scores: { anna: 5, moana: 4, tiana: 3, cinderella: 3 } },
        { text: 'By telling the truth. Nothing erodes peace like secrecy',
          scores: { belle: 5, raya: 5, jasmine: 4, elsa: 3 } }
      ]
    },
    {
      id: 'kingdom_q18_hardest_lead',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What is the hardest part of being the one who leads?</em>',
      answers: [
        { text: 'Being the one no one comforts',
          scores: { elsa: 5, raya: 4, mulan: 3, jasmine: 2 } },
        { text: 'Knowing that my mistake is everyone\'s problem',
          scores: { mulan: 5, tiana: 4, raya: 3, anna: 3 } },
        { text: 'Being alone in the decision even when the room is full',
          scores: { elsa: 5, belle: 4, pocahontas: 3, aurora: 3 } },
        { text: 'Holding hope for others when my own is low',
          scores: { anna: 5, moana: 4, 'snow-white': 3, cinderella: 3 } }
      ]
    },
    {
      id: 'kingdom_q19_throne_or_among',
      category: 'kingdom',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'The throne — respected, formal, distant from the people. Or among the people — beloved, present, sometimes overlooked.',
      answers: [
        { text: 'The throne',
          scores: { cinderella: 4, aurora: 3, elsa: 3, jasmine: 2, anna: -2 } },
        { text: 'Among the people',
          scores: { anna: 5, 'snow-white': 5, tiana: 4, moana: 4, merida: 3, cinderella: -2 } }
      ]
    },
    {
      id: 'kingdom_q20_freetext',
      category: 'kingdom',
      type: 'freetext',
      weight: 1.0,
      prompt: '<em>Finish this sentence:</em>',
      context: '"The one thing my kingdom would have that no other kingdom has is..."',
      placeholder: 'Write thy truth, {name}',
      freetextTag: 'kingdom_unique',
      answers: [
        { text: '[freetext]', scores: {} }
      ]
    },
    {
      id: 'kingdom_q21_enemy',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What is the greatest enemy of a kingdom?</em>',
      answers: [
        { text: 'Fear. It poisons everything it touches',
          scores: { elsa: 5, rapunzel: 4, mulan: 3, anna: 3 } },
        { text: 'Silence. When people stop speaking truth to power',
          scores: { belle: 5, jasmine: 5, raya: 4, pocahontas: 3 } },
        { text: 'Division. When people stop seeing each other as the same',
          scores: { moana: 5, raya: 5, pocahontas: 4, anna: 3 } },
        { text: 'Cruelty disguised as tradition',
          scores: { jasmine: 5, merida: 5, rapunzel: 4, ariel: 3 } }
      ]
    },
    {
      id: 'kingdom_q22_ruler_type',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What kind of ruler art thou?</em>',
      answers: [
        { text: 'Wise. The one people come to with the hardest questions',
          scores: { belle: 5, mulan: 5, tiana: 4, raya: 3, pocahontas: 2 } },
        { text: 'Beloved. The one people love even when I make hard choices',
          scores: { anna: 5, 'snow-white': 5, cinderella: 3, aurora: 3 } },
        { text: 'Just. The one who treats everyone by the same standard',
          scores: { mulan: 5, raya: 5, tiana: 4, elsa: 3 } },
        { text: 'Brave. The one who goes first — always',
          scores: { merida: 5, moana: 5, ariel: 3, mulan: 3 } }
      ]
    },
    {
      id: 'kingdom_q23_advisor',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>Who dost thou most want beside thee when ruling?</em>',
      answers: [
        { text: 'Someone who has been through more than I have',
          scores: { belle: 5, mulan: 4, raya: 3, pocahontas: 3 } },
        { text: 'Someone who makes me laugh when the weight is heavy',
          scores: { anna: 5, rapunzel: 4, 'snow-white': 3, merida: 3 } },
        { text: 'Someone who will tell me when I am wrong',
          scores: { raya: 5, tiana: 4, belle: 4, mulan: 3 } },
        { text: 'Someone who loves what I love and would die for it',
          scores: { moana: 5, merida: 4, pocahontas: 3, ariel: 3 } }
      ]
    },
    {
      id: 'kingdom_q24_what_you_owe',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What dost thou owe thy people?</em>',
      answers: [
        { text: 'The truth — always, without softening',
          scores: { raya: 5, belle: 5, jasmine: 4, mulan: 3 } },
        { text: 'Your whole self — not the performance, the real person',
          scores: { anna: 5, moana: 4, merida: 3, rapunzel: 3 } },
        { text: 'Your best thinking — every decision deserves full attention',
          scores: { tiana: 5, mulan: 4, belle: 3, elsa: 3 } },
        { text: 'Your presence — to be among them, not above them',
          scores: { anna: 5, 'snow-white': 5, moana: 4, pocahontas: 3 } }
      ]
    },
    {
      id: 'kingdom_q25_truest',
      category: 'kingdom',
      type: 'multipleChoice',
      weight: 2.0,
      prompt: '<em>The mirror asks one last thing. What is a kingdom at its truest, <span class="name">{name}</span>?</em>',
      context: 'There is no wrong answer. Only thine own.',
      answers: [
        { text: 'The people. Without them it is only land',
          scores: { anna: 5, 'snow-white': 5, moana: 4, tiana: 3, cinderella: 2 } },
        { text: 'A responsibility — the heaviest thing one can carry',
          scores: { mulan: 5, raya: 4, elsa: 4, tiana: 3, pocahontas: 2 } },
        { text: 'A story — always being written, never finished',
          scores: { belle: 5, pocahontas: 4, moana: 3, rapunzel: 3, aurora: 2 } },
        { text: 'A promise — made to those who came before and those who come after',
          scores: { mulan: 5, moana: 5, pocahontas: 5, raya: 4, tiana: 3 } }
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // CATEGORY 4: ROMANCE
  // ─────────────────────────────────────────────

  romance: [
    {
      id: 'romance_v1_token',
      category: 'romance',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>Which token of love wouldst thou most treasure?</em>',
      answers: [
        { text: 'A book with a handwritten note tucked inside', emoji: '📖',
          scores: { belle: 5, elsa: 3, aurora: 2, rapunzel: 2 } },
        { text: 'A small carved wooden figure — something made by hand', emoji: '🪵',
          scores: { anna: 5, 'snow-white': 4, cinderella: 3, pocahontas: 2 } },
        { text: 'A letter that says everything they were afraid to say', emoji: '💌',
          scores: { aurora: 5, cinderella: 4, ariel: 3, meg: 3 } },
        { text: 'Nothing. Their presence is the token', emoji: '💫',
          scores: { moana: 4, merida: 4, raya: 4, pocahontas: 3 } }
      ]
    },
    {
      id: 'romance_v2_walk',
      category: 'romance',
      type: 'visual',
      weight: 1.4,
      prompt: '<em>Where dost thou most dream of walking with someone thou lovest?</em>',
      answers: [
        { text: 'Through a great library — talking about everything we read', emoji: '📚',
          scores: { belle: 5, elsa: 3, rapunzel: 2, aurora: 2 } },
        { text: 'Along a shore at evening — the water changing color', emoji: '🌊',
          scores: { ariel: 5, moana: 4, jasmine: 3, pocahontas: 2 } },
        { text: 'Through a market, tasting strange things, getting lost', emoji: '🏮',
          scores: { jasmine: 5, rapunzel: 4, anna: 3, ariel: 3 } },
        { text: 'Through the forest at night — just stars and silence and them', emoji: '🌲',
          scores: { aurora: 5, pocahontas: 4, merida: 3, 'snow-white': 3 } }
      ]
    },
    {
      id: 'romance_v3_promise',
      category: 'romance',
      type: 'visual',
      weight: 1.4,
      prompt: '<em>Which promise feels most like love to thee?</em>',
      answers: [
        { text: 'I will stay — through the hard parts and the long ones', emoji: '🤝',
          scores: { cinderella: 5, anna: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'I will tell thee the truth — always, even when it hurts', emoji: '💬',
          scores: { belle: 5, raya: 4, mulan: 3, tiana: 3 } },
        { text: 'I will go wherever thou goest', emoji: '✨',
          scores: { anna: 5, ariel: 4, rapunzel: 3, moana: 2 } },
        { text: 'I will give thee room to be who thou truly art', emoji: '🌿',
          scores: { elsa: 5, jasmine: 4, merida: 4, pocahontas: 3 } }
      ]
    },
    {
      id: 'romance_v4_garden',
      category: 'romance',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Where wouldst thou most want to be surprised by love?</em>',
      answers: [
        { text: 'In a library — mid-sentence, over a shared book', emoji: '📖',
          scores: { belle: 5, elsa: 3, aurora: 2, rapunzel: 2 } },
        { text: 'In a garden at dusk — petals falling, the whole world quiet', emoji: '🌸',
          scores: { aurora: 5, 'snow-white': 4, cinderella: 3, rapunzel: 2 } },
        { text: 'In the middle of an adventure — danger and laughter and them', emoji: '⚔️',
          scores: { ariel: 5, jasmine: 4, merida: 3, anna: 3 } },
        { text: 'On a rooftop at night — the stars and a complete surprise', emoji: '⭐',
          scores: { rapunzel: 5, tiana: 4, anna: 3, jasmine: 3 } }
      ]
    },
    {
      id: 'romance_q5_feel_like',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What does love feel like to thee at its truest, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Being known — truly seen for what I am, not what I perform',
          scores: { belle: 5, elsa: 5, meg: 4, raya: 3, jasmine: 2 } },
        { text: 'Safety — being able to be afraid with someone',
          scores: { cinderella: 5, 'snow-white': 4, anna: 3, aurora: 3 } },
        { text: 'Fire — a brightness that changes everything',
          scores: { ariel: 5, rapunzel: 4, anna: 3, jasmine: 3 } },
        { text: 'Calm — a quietness inside me that had never been there before',
          scores: { elsa: 5, pocahontas: 4, aurora: 3, meg: 3 } }
      ]
    },
    {
      id: 'romance_q6_fall',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How dost thou fall in love, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Quickly and completely — I cannot help it',
          scores: { anna: 5, rapunzel: 4, ariel: 3, 'snow-white': 2 } },
        { text: 'Slowly, over many small moments I did not notice until it was done',
          scores: { belle: 5, tiana: 4, mulan: 3, pocahontas: 3 } },
        { text: 'Reluctantly — I resist it and then I cannot',
          scores: { meg: 5, jasmine: 4, elsa: 3, raya: 3 } },
        { text: 'In a single moment that I remember forever',
          scores: { aurora: 5, cinderella: 4, ariel: 3, anna: 3 } }
      ]
    },
    {
      id: 'romance_q7_need',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What dost thou need most from love?</em>',
      answers: [
        { text: 'A real partner. Equals. We grow each other',
          scores: { belle: 5, tiana: 5, mulan: 3, raya: 2 } },
        { text: 'Warmth. Someone who is always glad to see me',
          scores: { anna: 5, cinderella: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'Space. Someone who loves me and lets me be wild',
          scores: { merida: 5, moana: 4, jasmine: 4, ariel: 3 } },
        { text: 'Safety. Someone who will not leave when they see all of me',
          scores: { elsa: 5, meg: 5, rapunzel: 3, cinderella: 3 } }
      ]
    },
    {
      id: 'romance_q8_tradeoff',
      category: 'romance',
      type: 'tradeoff',
      weight: 1.5,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'A great love that does not last — or a steady love that never becomes extraordinary.',
      answers: [
        { text: 'The great love that does not last',
          scores: { ariel: 5, jasmine: 4, merida: 3, meg: 3, rapunzel: 3, cinderella: -2 } },
        { text: 'The steady love that never becomes extraordinary',
          scores: { tiana: 5, mulan: 4, belle: 3, anna: 3, 'snow-white': 3, ariel: -2 } }
      ]
    },
    {
      id: 'romance_q9_proposal',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What is thy ideal declaration of love?</em>',
      answers: [
        { text: 'Quiet. Just us. Nothing public or performed',
          scores: { elsa: 5, meg: 5, belle: 4, raya: 3, mulan: 2 } },
        { text: 'An adventure — something we are in the middle of',
          scores: { ariel: 5, merida: 4, anna: 3, jasmine: 3 } },
        { text: 'Words — careful, honest, taking their time',
          scores: { belle: 5, aurora: 4, cinderella: 3, pocahontas: 3 } },
        { text: 'Something they do without being asked — they show me',
          scores: { tiana: 5, 'snow-white': 4, anna: 3, cinderella: 3 } }
      ]
    },
    {
      id: 'romance_q10_hurt',
      category: 'romance',
      type: 'hurt',
      weight: 1.4,
      prompt: '<em>If thou must lose one of these from love, which loss is most bearable?</em>',
      context: 'The mirror asks honestly.',
      answers: [
        { text: 'The passion — the fire of early love',
          scores: { elsa: 2, tiana: 1, mulan: 1, aurora: -3, ariel: -4, rapunzel: -3 } },
        { text: 'The companionship — the everyday ease',
          scores: { merida: 1, jasmine: 1, ariel: -3, anna: -4, 'snow-white': -3, cinderella: -2 } },
        { text: 'The depth — being truly known',
          scores: { anna: 2, rapunzel: 1, belle: -5, elsa: -4, meg: -3, pocahontas: -2 } },
        { text: 'The safety — the sense of being held',
          scores: { ariel: 2, jasmine: 2, cinderella: -4, aurora: -3, 'snow-white': -3, anna: -2 } }
      ]
    },
    {
      id: 'romance_q11_red_flag',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What is thy clearest sign that love is wrong for thee?</em>',
      answers: [
        { text: 'They try to change me into someone easier',
          scores: { belle: 5, jasmine: 5, merida: 4, ariel: 3, elsa: 2 } },
        { text: 'They make me feel small — in small ways I almost do not notice',
          scores: { cinderella: 5, rapunzel: 5, 'snow-white': 4, aurora: 3 } },
        { text: 'They are not honest with me — even in small things',
          scores: { tiana: 5, raya: 5, mulan: 4, belle: 3 } },
        { text: 'I become less myself — not more',
          scores: { elsa: 5, jasmine: 4, merida: 4, meg: 4 } }
      ]
    },
    {
      id: 'romance_q12_first_love',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What did thy first real love teach thee?</em>',
      answers: [
        { text: 'That I love more than I knew I could',
          scores: { anna: 5, rapunzel: 4, ariel: 3, 'snow-white': 3 } },
        { text: 'That I am worth being chosen — I did not know that before',
          scores: { cinderella: 5, rapunzel: 4, belle: 3, meg: 3 } },
        { text: 'That I had to know myself before I could love someone else',
          scores: { elsa: 5, jasmine: 4, moana: 3, merida: 3 } },
        { text: 'That love is a practice, not a feeling — it requires work',
          scores: { tiana: 5, mulan: 4, belle: 3, raya: 3 } }
      ]
    },
    {
      id: 'romance_q13_show_love',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How dost thou show love, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Through acts — I do things for the people I love',
          scores: { tiana: 5, mulan: 4, cinderella: 3, 'snow-white': 3 } },
        { text: 'Through words — I say exactly what I feel',
          scores: { anna: 5, rapunzel: 3, ariel: 3, aurora: 2 } },
        { text: 'Through presence — I show up, quietly, reliably',
          scores: { elsa: 4, pocahontas: 5, aurora: 3, mulan: 3 } },
        { text: 'Through adventure — I bring people into what makes me alive',
          scores: { ariel: 5, merida: 4, moana: 4, jasmine: 3 } }
      ]
    },
    {
      id: 'romance_q14_tradeoff2',
      category: 'romance',
      type: 'tradeoff',
      weight: 1.4,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'Alone with your own peace — or together with beautiful difficulty.',
      answers: [
        { text: 'Alone with my own peace',
          scores: { elsa: 5, meg: 3, jasmine: 2, raya: 2, anna: -3 } },
        { text: 'Together with beautiful difficulty',
          scores: { anna: 5, cinderella: 4, aurora: 3, ariel: 3, elsa: -3 } }
      ]
    },
    {
      id: 'romance_q15_fight',
      category: 'romance',
      type: 'scenario',
      weight: 1.3,
      prompt: '<em>Thou and someone thou lovest have a real fight. What happens next?</em>',
      answers: [
        { text: 'I go quiet. I need time before I can speak without breaking',
          scores: { elsa: 5, meg: 4, raya: 3, aurora: 2 } },
        { text: 'I say everything — too much, probably — then we work through it',
          scores: { anna: 5, rapunzel: 4, ariel: 3, jasmine: 2 } },
        { text: 'I come back with the clearer version of what I meant',
          scores: { belle: 5, tiana: 4, mulan: 3, pocahontas: 3 } },
        { text: 'I wait for them to come to me — if it matters to them, they will',
          scores: { jasmine: 5, merida: 4, meg: 3, elsa: 2 } }
      ]
    },
    {
      id: 'romance_q16_know',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How dost thou know someone loves thee truly?</em>',
      answers: [
        { text: 'They are still there in the boring, ordinary days',
          scores: { tiana: 5, cinderella: 4, 'snow-white': 3, anna: 3 } },
        { text: 'They see what I try to hide — and stay anyway',
          scores: { elsa: 5, meg: 5, rapunzel: 3, belle: 3 } },
        { text: 'They choose me again — in small moments, over and over',
          scores: { aurora: 5, cinderella: 4, anna: 3, ariel: 3 } },
        { text: 'They bring out a version of me I had not met before',
          scores: { belle: 5, jasmine: 4, ariel: 3, rapunzel: 3 } }
      ]
    },
    {
      id: 'romance_q17_equal',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.4,
      prompt: '<em>What dost thou need from love, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'A real partner. Equals. We grow together',
          scores: { belle: 5, tiana: 5, mulan: 3, raya: 2 } },
        { text: 'Loyalty. Someone who chooses me when other choices exist',
          scores: { anna: 5, cinderella: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'Freedom within love — space to still be myself',
          scores: { jasmine: 5, merida: 5, ariel: 4, moana: 3 } },
        { text: 'Honesty. Even the hard truths. Especially those',
          scores: { tiana: 5, raya: 5, mulan: 4, belle: 3 } }
      ]
    },
    {
      id: 'romance_q18_apart',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou do when someone thou lovest is away?</em>',
      answers: [
        { text: 'I write. Letters, notes, things I would have said',
          scores: { belle: 5, aurora: 4, anna: 3, cinderella: 3 } },
        { text: 'I work — keeping busy keeps the missing at bay',
          scores: { tiana: 5, mulan: 4, raya: 3, merida: 2 } },
        { text: 'I feel it deeply and let myself feel it',
          scores: { ariel: 4, anna: 4, rapunzel: 3, 'snow-white': 3 } },
        { text: 'I go on — they are with me in the way that matters',
          scores: { elsa: 5, pocahontas: 4, moana: 3, meg: 3 } }
      ]
    },
    {
      id: 'romance_q19_first_sign',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What is the first sign that thou art falling for someone?</em>',
      answers: [
        { text: 'I want to tell them everything — I find myself already telling them',
          scores: { anna: 5, rapunzel: 4, ariel: 3, 'snow-white': 2 } },
        { text: 'I notice them across a room before I know I am looking',
          scores: { aurora: 5, cinderella: 4, ariel: 3, rapunzel: 2 } },
        { text: 'We can talk for hours and it does not get boring',
          scores: { belle: 5, tiana: 4, jasmine: 3, mulan: 2 } },
        { text: 'I find myself trying to be near them without a reason',
          scores: { anna: 4, merida: 4, ariel: 3, pocahontas: 3 } }
      ]
    },
    {
      id: 'romance_q20_freetext',
      category: 'romance',
      type: 'freetext',
      weight: 1.0,
      prompt: '<em>Finish this sentence:</em>',
      context: '"The one thing I want in love that I have never said aloud is..."',
      placeholder: 'Write thy truth, {name}',
      freetextTag: 'love_unsaid',
      answers: [
        { text: '[freetext]', scores: {} }
      ]
    },
    {
      id: 'romance_q21_hard_love',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What is hardest about loving someone?</em>',
      answers: [
        { text: 'Letting them see me — truly, fully',
          scores: { elsa: 5, meg: 5, rapunzel: 4, cinderella: 3 } },
        { text: 'Letting them leave — even for a little while',
          scores: { anna: 5, ariel: 4, 'snow-white': 3, cinderella: 3 } },
        { text: 'Telling them when they are wrong — and doing it well',
          scores: { belle: 5, tiana: 4, raya: 3, mulan: 3 } },
        { text: 'Staying through the ordinary days when nothing is exciting',
          scores: { tiana: 5, cinderella: 4, anna: 3, mulan: 3 } }
      ]
    },
    {
      id: 'romance_q22_after_heartbreak',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>After heartbreak, what dost thou do?</em>',
      answers: [
        { text: 'I pull inward. I need to be alone until I am whole again',
          scores: { elsa: 5, meg: 5, raya: 4, jasmine: 3 } },
        { text: 'I throw myself into work — there is always something needing doing',
          scores: { tiana: 5, mulan: 4, raya: 3, merida: 2 } },
        { text: 'I let myself be sad. I ask for help. I do not hide it',
          scores: { anna: 5, rapunzel: 4, 'snow-white': 3, aurora: 2 } },
        { text: 'I go somewhere wild and let nature do the healing',
          scores: { merida: 5, moana: 4, pocahontas: 4, ariel: 3 } }
      ]
    },
    {
      id: 'romance_q23_first_sign2',
      category: 'romance',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What is the first sign that someone is right for thee?</em>',
      answers: [
        { text: 'We can talk for hours and it does not get boring',
          scores: { belle: 5, tiana: 4, jasmine: 3, mulan: 2 } },
        { text: 'They make me feel more like myself — not less',
          scores: { elsa: 5, jasmine: 4, merida: 4, meg: 4 } },
        { text: 'I am not afraid with them — for the first time',
          scores: { cinderella: 5, rapunzel: 4, aurora: 3, 'snow-white': 3 } },
        { text: 'They laugh with me — really laugh',
          scores: { anna: 5, ariel: 4, rapunzel: 3, tiana: 3 } }
      ]
    },
    {
      id: 'romance_q24_sacrifice',
      category: 'romance',
      type: 'scenario',
      weight: 1.4,
      prompt: '<em>Love asks thee to sacrifice something. What couldst thou give?</em>',
      answers: [
        { text: 'Comfort — I would leave everything familiar',
          scores: { ariel: 5, anna: 4, cinderella: 3, rapunzel: 3 } },
        { text: 'Pride — I would ask for forgiveness even when I was not wrong',
          scores: { anna: 5, tiana: 4, 'snow-white': 3, aurora: 3 } },
        { text: 'Safety — I would take a real risk for them',
          scores: { mulan: 5, moana: 4, ariel: 3, merida: 3 } },
        { text: 'I do not know yet. I hope I would be brave enough',
          scores: { cinderella: 3, aurora: 3, 'snow-white': 3, meg: 4 } }
      ]
    },
    {
      id: 'romance_q25_truest',
      category: 'romance',
      type: 'multipleChoice',
      weight: 2.0,
      prompt: '<em>The mirror asks one last thing. What is love at its truest, <span class="name">{name}</span>?</em>',
      context: 'There is no wrong answer. Only thine own.',
      answers: [
        { text: 'Being chosen — again and again — by the same person',
          scores: { cinderella: 5, aurora: 4, anna: 4, 'snow-white': 3, tiana: 2 } },
        { text: 'Being known — the whole truth of me — and loved anyway',
          scores: { elsa: 5, belle: 4, meg: 4, rapunzel: 3, raya: 2 } },
        { text: 'Building something — a life, a home, a shared future',
          scores: { tiana: 5, mulan: 4, belle: 3, cinderella: 3 } },
        { text: 'The thing that makes me more myself — not less',
          scores: { jasmine: 5, merida: 5, ariel: 4, moana: 3, elsa: 2 } }
      ]
    }
  ],

  // ─────────────────────────────────────────────
  // CATEGORY 5: ANIMALS
  // ─────────────────────────────────────────────

  animals: [
    {
      id: 'animals_v1_walks_beside',
      category: 'animals',
      type: 'visual',
      weight: 1.5,
      prompt: '<em>Which animal walks beside thee?</em>',
      answers: [
        { text: 'A great stag — ancient, watching, deeply wild', emoji: '🦌',
          scores: { pocahontas: 5, aurora: 4, merida: 3, 'snow-white': 2 } },
        { text: 'A wolf — fierce, loyal, misunderstood', emoji: '🐺',
          scores: { raya: 5, merida: 4, mulan: 3, elsa: 2 } },
        { text: 'A swan — graceful, quiet, surprisingly powerful', emoji: '🦢',
          scores: { elsa: 5, aurora: 4, cinderella: 3, belle: 2 } },
        { text: 'A fox — clever, curious, always surprising', emoji: '🦊',
          scores: { belle: 5, jasmine: 4, meg: 3, rapunzel: 2 } }
      ]
    },
    {
      id: 'animals_v2_in_flight',
      category: 'animals',
      type: 'visual',
      weight: 1.4,
      prompt: '<em>Which creature do you envy its wings?</em>',
      answers: [
        { text: 'The dragon — fire and power and the whole sky', emoji: '🐉',
          scores: { merida: 5, raya: 4, jasmine: 3, mulan: 2 } },
        { text: 'The hawk — sharp-eyed, solitary, sovereign', emoji: '🦅',
          scores: { mulan: 5, raya: 4, pocahontas: 3, elsa: 2 } },
        { text: 'The hummingbird — small but impossible to catch', emoji: '🌺',
          scores: { rapunzel: 5, ariel: 4, anna: 3, 'snow-white': 2 } },
        { text: 'The owl — wise, watchful, at home in the dark', emoji: '🦉',
          scores: { belle: 5, elsa: 4, pocahontas: 3, aurora: 2 } }
      ]
    },
    {
      id: 'animals_v3_in_water',
      category: 'animals',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which creature of the water feels most like thee?</em>',
      answers: [
        { text: 'The koi — patient, beautiful, ancient', emoji: '🐟',
          scores: { aurora: 5, mulan: 4, tiana: 3, cinderella: 2 } },
        { text: 'The sea turtle — ancient, unhurried, impossibly wise', emoji: '🐢',
          scores: { pocahontas: 5, moana: 4, belle: 3, aurora: 2 } },
        { text: 'The otter — playful, clever, devoted to its people', emoji: '🦦',
          scores: { anna: 5, rapunzel: 4, 'snow-white': 3, ariel: 3 } },
        { text: 'The frog — small but full of possibility', emoji: '🐸',
          scores: { tiana: 5, rapunzel: 3, anna: 3, ariel: 2 } }
      ]
    },
    {
      id: 'animals_v4_in_hand',
      category: 'animals',
      type: 'visual',
      weight: 1.3,
      prompt: '<em>Which small creature wouldst thou hold in thy hand?</em>',
      answers: [
        { text: 'A mouse — brave, overlooked, knows every secret door', emoji: '🐭',
          scores: { cinderella: 5, 'snow-white': 4, tiana: 3, anna: 2 } },
        { text: 'A butterfly — brief, brilliant, entirely free', emoji: '🦋',
          scores: { aurora: 5, rapunzel: 4, ariel: 3, belle: 2 } },
        { text: 'A firefly — small light in the dark, always hopeful', emoji: '✨',
          scores: { tiana: 5, anna: 4, rapunzel: 3, 'snow-white': 2 } },
        { text: 'A lizard — quick, surprising, not what anyone expected', emoji: '🦎',
          scores: { jasmine: 5, ariel: 4, merida: 3, raya: 2 } }
      ]
    },
    {
      id: 'animals_q5_companion',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What kind of animal companion calls to thee, <span class="name">{name}</span>?</em>',
      answers: [
        { text: 'Wild and untamed — we are partners not owner and pet',
          scores: { merida: 5, pocahontas: 5, moana: 4, raya: 3 } },
        { text: 'Small and beloved — the kind that sits on your shoulder',
          scores: { ariel: 5, rapunzel: 4, jasmine: 3, anna: 3 } },
        { text: 'Ancient and wise — the kind that has seen everything',
          scores: { elsa: 5, belle: 4, pocahontas: 4, aurora: 3 } },
        { text: 'Warm and loyal — the kind that never leaves your side',
          scores: { anna: 5, 'snow-white': 5, cinderella: 4, tiana: 3 } }
      ]
    },
    {
      id: 'animals_q6_understand',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>Dost thou believe animals understand more than we think?</em>',
      answers: [
        { text: 'Yes — they understand everything. They simply do not speak',
          scores: { pocahontas: 5, aurora: 4, 'snow-white': 4, merida: 3 } },
        { text: 'Yes — some of them. The old ones especially',
          scores: { belle: 4, elsa: 3, mulan: 3, raya: 3 } },
        { text: 'They understand feelings even if not words',
          scores: { anna: 5, rapunzel: 4, cinderella: 3, tiana: 3 } },
        { text: 'I am not sure — but I prefer to act as though they do',
          scores: { jasmine: 3, moana: 4, ariel: 3, meg: 3 } }
      ]
    },
    {
      id: 'animals_q7_bond',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>How dost thou bond with an animal?</em>',
      answers: [
        { text: 'Quietly. I wait for them to come to me',
          scores: { elsa: 5, pocahontas: 5, aurora: 3, meg: 3 } },
        { text: 'Playfully. I get on their level and make them curious',
          scores: { rapunzel: 5, anna: 4, ariel: 3, 'snow-white': 3 } },
        { text: 'With food. The universal language',
          scores: { tiana: 5, 'snow-white': 4, anna: 3, cinderella: 3 } },
        { text: 'By earning it. Trust cannot be rushed',
          scores: { mulan: 5, raya: 4, merida: 4, elsa: 3 } }
      ]
    },
    {
      id: 'animals_q8_tradeoff',
      category: 'animals',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'A wild animal companion who chooses thee freely — or a tame beloved animal who is entirely devoted.',
      answers: [
        { text: 'Wild and free who chooses me',
          scores: { merida: 5, pocahontas: 5, moana: 4, raya: 4, jasmine: 3, cinderella: -2 } },
        { text: 'Tame and devoted',
          scores: { cinderella: 5, 'snow-white': 5, belle: 5, anna: 3, aurora: 3, merida: -2 } }
      ]
    },
    {
      id: 'animals_q9_bond_type',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>What does thine animal bond look like?</em>',
      answers: [
        { text: 'Quiet companionship. We do not need to perform for each other',
          scores: { elsa: 5, pocahontas: 5, aurora: 3, meg: 3 } },
        { text: 'Playful chaos. They are the best part of my day',
          scores: { rapunzel: 5, anna: 4, ariel: 3, 'snow-white': 3 } },
        { text: 'Deep loyalty. They would face anything to be with me',
          scores: { mulan: 5, merida: 5, moana: 3, raya: 3 } },
        { text: 'Partnership. We are better together than apart',
          scores: { moana: 5, pocahontas: 4, mulan: 3, belle: 3 } }
      ]
    },
    {
      id: 'animals_q10_hurt',
      category: 'animals',
      type: 'hurt',
      weight: 1.3,
      prompt: '<em>Which loss would hurt thee least?</em>',
      context: 'The mirror asks honestly.',
      answers: [
        { text: 'Never being able to ride a horse again',
          scores: { merida: -5, mulan: -4, jasmine: -3, pocahontas: -3, elsa: 1 } },
        { text: 'Never being able to have a small animal companion again',
          scores: { cinderella: -4, 'snow-white': -4, rapunzel: -3, anna: -2, merida: 1 } },
        { text: 'Never being able to swim with the sea creatures again',
          scores: { ariel: -5, moana: -4, pocahontas: -3, jasmine: -2, elsa: 1 } },
        { text: 'Never being close to a wild creature again',
          scores: { pocahontas: -5, merida: -4, moana: -3, aurora: -2, cinderella: 1 } }
      ]
    },
    {
      id: 'animals_q11_rescue',
      category: 'animals',
      type: 'scenario',
      weight: 1.2,
      prompt: '<em>Thou findest a hurt animal. What dost thou do?</em>',
      answers: [
        { text: 'I help immediately — I do not pass by',
          scores: { 'snow-white': 5, anna: 4, cinderella: 4, tiana: 3 } },
        { text: 'I help carefully — I want to understand what they need',
          scores: { belle: 5, mulan: 4, pocahontas: 4, elsa: 3 } },
        { text: 'I create a safe space and let them come to me',
          scores: { pocahontas: 5, aurora: 4, elsa: 4, merida: 3 } },
        { text: 'I get everyone I know to help',
          scores: { anna: 5, rapunzel: 4, 'snow-white': 3, moana: 3 } }
      ]
    },
    {
      id: 'animals_q12_speak',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>If an animal could speak to thee, what wouldst thou most want to ask?</em>',
      answers: [
        { text: 'What do you see that I cannot',
          scores: { pocahontas: 5, belle: 4, elsa: 3, aurora: 3 } },
        { text: 'Are you happy? Are you all right?',
          scores: { 'snow-white': 5, anna: 4, cinderella: 4, tiana: 3 } },
        { text: 'What is the world like from where you are',
          scores: { ariel: 5, rapunzel: 4, moana: 3, belle: 3 } },
        { text: 'Do you trust me — truly',
          scores: { mulan: 5, merida: 4, raya: 4, pocahontas: 3 } }
      ]
    },
    {
      id: 'animals_q13_spirit',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>If thou hadst a spirit animal, what would it be?</em>',
      answers: [
        { text: 'A bear — fierce protector, unexpectedly gentle',
          scores: { merida: 5, anna: 4, mulan: 3, moana: 2 } },
        { text: 'A hummingbird — impossible speed, impossible brightness',
          scores: { rapunzel: 5, ariel: 4, anna: 3, jasmine: 2 } },
        { text: 'A salmon — goes against the current, knows the way home',
          scores: { mulan: 5, moana: 4, tiana: 3, raya: 3 } },
        { text: 'A raven — intelligent, complex, not what they seem',
          scores: { belle: 5, elsa: 4, meg: 4, pocahontas: 3 } }
      ]
    },
    {
      id: 'animals_q14_tame_wild',
      category: 'animals',
      type: 'tradeoff',
      weight: 1.3,
      prompt: '<em>Choose, <span class="name">{name}</span>.</em>',
      context: 'A small tame animal who loves thee completely — or a wild creature who meets thee freely in the woods.',
      answers: [
        { text: 'The small tame animal who loves me completely',
          scores: { cinderella: 5, 'snow-white': 5, anna: 4, aurora: 3, belle: 5, merida: -2 } },
        { text: 'The wild creature who meets me freely',
          scores: { pocahontas: 5, merida: 4, moana: 4, elsa: 5, raya: 3, cinderella: -2 } }
      ]
    },
    {
      id: 'animals_q15_ocean',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>Which ocean creature would be thine?</em>',
      answers: [
        { text: 'The whale — ancient, singing, vast',
          scores: { moana: 5, pocahontas: 4, elsa: 3, aurora: 2 } },
        { text: 'The octopus — eight minds in one, endlessly curious',
          scores: { ariel: 5, belle: 4, rapunzel: 3, jasmine: 3 } },
        { text: 'The dolphin — joyful, social, intelligent',
          scores: { anna: 5, ariel: 4, rapunzel: 3, 'snow-white': 2 } },
        { text: 'The shark — fearless, misunderstood, perfectly itself',
          scores: { raya: 5, merida: 4, jasmine: 3, mulan: 3 } }
      ]
    },
    {
      id: 'animals_q16_alone',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>Which animal are you most like when alone?</em>',
      answers: [
        { text: 'A cat — fully myself, self-sufficient, quietly doing exactly what I want',
          scores: { elsa: 5, belle: 4, jasmine: 3, meg: 3 } },
        { text: 'A wolf — I still think of my pack even when I am away',
          scores: { mulan: 5, anna: 4, merida: 3, raya: 3 } },
        { text: 'A bird building a nest — alone but purposeful',
          scores: { tiana: 5, cinderella: 4, aurora: 3, 'snow-white': 3 } },
        { text: 'A river — always moving, even alone',
          scores: { moana: 5, ariel: 4, pocahontas: 4, merida: 3 } }
      ]
    },
    {
      id: 'animals_q17_forest',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What dost thou feel when thou art among animals in the wild?</em>',
      answers: [
        { text: 'At home. More at home than among people sometimes',
          scores: { pocahontas: 5, merida: 5, aurora: 4, 'snow-white': 4 } },
        { text: 'Calm. It is the quietest my mind gets',
          scores: { elsa: 5, pocahontas: 4, aurora: 3, belle: 3 } },
        { text: 'Curious. I want to know everything about them',
          scores: { ariel: 5, belle: 4, rapunzel: 3, moana: 3 } },
        { text: 'Alive. There is a wildness in me that wakes up',
          scores: { merida: 5, moana: 5, ariel: 4, jasmine: 3 } }
      ]
    },
    {
      id: 'animals_q18_bird',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>Which bird feels most like thee?</em>',
      answers: [
        { text: 'The robin — small, bright, arrives before anyone expected',
          scores: { anna: 5, 'snow-white': 4, rapunzel: 3, cinderella: 3 } },
        { text: 'The crane — elegant, precise, rare',
          scores: { elsa: 5, mulan: 4, aurora: 3, tiana: 2 } },
        { text: 'The magpie — collects beautiful things, misunderstood',
          scores: { ariel: 5, belle: 4, jasmine: 3, rapunzel: 3 } },
        { text: 'The eagle — high above it all, solitary, clear-eyed',
          scores: { raya: 5, merida: 4, mulan: 3, pocahontas: 3 } }
      ]
    },
    {
      id: 'animals_q19_animal_are_you',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.3,
      prompt: '<em>If thou wert an animal, which wouldst thou be?</em>',
      answers: [
        { text: 'A wolf — loyal, wild, better in a pack',
          scores: { mulan: 5, anna: 4, merida: 3, raya: 3 } },
        { text: 'A fox — quick, clever, always three steps ahead',
          scores: { belle: 5, jasmine: 4, meg: 4, rapunzel: 3 } },
        { text: 'A deer — gentle, alert, knows when to be still',
          scores: { aurora: 5, pocahontas: 4, 'snow-white': 4, cinderella: 3 } },
        { text: 'An orca — vast, powerful, deeply bonded to her family',
          scores: { moana: 5, tiana: 4, mulan: 3, anna: 3 } }
      ]
    },
    {
      id: 'animals_q20_freetext',
      category: 'animals',
      type: 'freetext',
      weight: 1.0,
      prompt: '<em>Finish this sentence:</em>',
      context: '"The animal I feel most understood by is..."',
      placeholder: 'Write thy truth, {name}',
      freetextTag: 'animal_understood',
      answers: [
        { text: '[freetext]', scores: {} }
      ]
    },
    {
      id: 'animals_q21_nightcreature',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.1,
      prompt: '<em>Which creature of the night feels like thine?</em>',
      answers: [
        { text: 'The firefly — small light, brief, but utterly real',
          scores: { tiana: 5, rapunzel: 4, anna: 3, 'snow-white': 3 } },
        { text: 'The moth — drawn to the light, mysterious, misunderstood',
          scores: { elsa: 5, meg: 4, belle: 3, aurora: 3 } },
        { text: 'The cat — sovereign in the dark, utterly at home',
          scores: { jasmine: 5, meg: 4, elsa: 3, belle: 3 } },
        { text: 'The wolf — the one the night belongs to',
          scores: { merida: 5, raya: 4, mulan: 3, moana: 3 } }
      ]
    },
    {
      id: 'animals_q22_animal_teaches',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>What can an animal teach thee that a person cannot?</em>',
      answers: [
        { text: 'How to be still without being empty',
          scores: { pocahontas: 5, aurora: 4, elsa: 3, belle: 3 } },
        { text: 'How to be joyful without needing a reason',
          scores: { 'snow-white': 5, anna: 4, rapunzel: 3, ariel: 3 } },
        { text: 'How to trust your instincts without second-guessing',
          scores: { merida: 5, mulan: 4, raya: 4, moana: 3 } },
        { text: 'How to give loyalty that does not calculate',
          scores: { cinderella: 5, anna: 4, tiana: 3, 'snow-white': 3 } }
      ]
    },
    {
      id: 'animals_q23_save',
      category: 'animals',
      type: 'scenario',
      weight: 1.2,
      prompt: '<em>An animal is in danger and saving them would require real sacrifice from thee. What dost thou do?</em>',
      answers: [
        { text: 'I help. Without question',
          scores: { 'snow-white': 5, anna: 4, cinderella: 4, pocahontas: 3 } },
        { text: 'I help but I plan carefully — recklessness helps no one',
          scores: { mulan: 5, tiana: 4, belle: 3, raya: 3 } },
        { text: 'I help and accept whatever it costs',
          scores: { merida: 5, moana: 4, ariel: 3, anna: 3 } },
        { text: 'I find everyone who can help — this does not have to be only mine',
          scores: { moana: 5, anna: 4, tiana: 3, rapunzel: 3 } }
      ]
    },
    {
      id: 'animals_q24_garden',
      category: 'animals',
      type: 'multipleChoice',
      weight: 1.2,
      prompt: '<em>Which creature would visit thy garden?</em>',
      answers: [
        { text: 'Deer — gentle visitors, barely real',
          scores: { aurora: 5, 'snow-white': 4, cinderella: 3, pocahontas: 3 } },
        { text: 'Bees — busy, important, the keepers of everything',
          scores: { tiana: 5, mulan: 4, belle: 3, 'snow-white': 3 } },
        { text: 'Foxes — clever visitors who come on their own terms',
          scores: { belle: 5, meg: 4, jasmine: 3, elsa: 3 } },
        { text: 'Birds of every kind — the noisier the better',
          scores: { 'snow-white': 5, anna: 4, rapunzel: 3, ariel: 3 } }
      ]
    },
    {
      id: 'animals_q25_truest',
      category: 'animals',
      type: 'multipleChoice',
      weight: 2.0,
      prompt: '<em>The mirror asks one last thing. What does an animal give thee that nothing else does, <span class="name">{name}</span>?</em>',
      context: 'There is no wrong answer. Only thine own.',
      answers: [
        { text: 'Unconditional love — no conditions, no performance, just presence',
          scores: { 'snow-white': 5, cinderella: 4, anna: 4, aurora: 3 } },
        { text: 'A mirror — they show me who I am without words',
          scores: { pocahontas: 5, elsa: 4, merida: 3, mulan: 3 } },
        { text: 'Wildness — a reminder that something in me is also wild',
          scores: { merida: 5, moana: 5, ariel: 4, jasmine: 3 } },
        { text: 'Silence — the best kind, the kind that is full',
          scores: { elsa: 5, pocahontas: 4, aurora: 3, belle: 3 } }
      ]
    }
  ],

values: [
    { id:'values_v1_path', category:'values', type:'visual', weight:1.5, prompt:'<em>Which path dost thou walk?</em>', answers:[
      { text:'The path of knowledge — lit by learning, never finished', emoji:'📚', scores:{ belle:5, mulan:3, tiana:3, elsa:2 } },
      { text:'The path of justice — hard, clear, worth every step', emoji:'⚖️', scores:{ mulan:5, raya:5, tiana:4, jasmine:3 } },
      { text:'The path of love — warm, sometimes painful, always chosen', emoji:'💛', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2 } },
      { text:'The path of freedom — unmapped, belonging to no one', emoji:'🌿', scores:{ merida:5, jasmine:4, ariel:4, moana:3 } }
    ]},
    { id:'values_v2_wrong', category:'values', type:'visual', weight:1.4, prompt:'<em>When something is wrong, what dost thou do?</em>', answers:[
      { text:'I say so — plainly, without softening', emoji:'💬', scores:{ raya:5, jasmine:5, belle:4, mulan:3 } },
      { text:'I act — words are not enough when people are suffering', emoji:'⚔️', scores:{ mulan:5, merida:4, anna:3, moana:3 } },
      { text:'I find others who see it and we act together', emoji:'🤝', scores:{ moana:5, anna:4, tiana:4, pocahontas:3 } },
      { text:'I wait and choose my moment — a wrong move can make it worse', emoji:'🌙', scores:{ belle:4, pocahontas:5, elsa:3, aurora:3 } }
    ]},
    { id:'values_v3_sacrifice', category:'values', type:'visual', weight:1.4, prompt:'<em>What wouldst thou sacrifice for what is right?</em>', answers:[
      { text:'Comfort — I will give up ease if it means being honest', emoji:'🕯️', scores:{ belle:5, raya:4, mulan:3, tiana:3 } },
      { text:'Safety — I will face real danger if someone needs me to', emoji:'🛡️', scores:{ mulan:5, anna:4, merida:4, moana:3 } },
      { text:'Belonging — I will stand alone if that is what is right', emoji:'🌟', scores:{ elsa:5, jasmine:4, merida:4, raya:3 } },
      { text:'Happiness — I will choose duty over desire', emoji:'🌸', scores:{ mulan:5, tiana:4, cinderella:3, aurora:3 } }
    ]},
    { id:'values_v4_truth', category:'values', type:'visual', weight:1.4, prompt:'<em>What does a life lived truly look like to thee?</em>', answers:[
      { text:'A life in service to others — the work never done but worth it', emoji:'🌱', scores:{ tiana:5, mulan:4, 'snow-white':3, cinderella:3 } },
      { text:'A life following my own heart regardless of expectations', emoji:'🔥', scores:{ jasmine:5, merida:5, ariel:4, rapunzel:3 } },
      { text:'A life of honest work — building something that matters', emoji:'🏗️', scores:{ tiana:5, mulan:4, raya:3, belle:3 } },
      { text:'A life fully present — not performing, just being', emoji:'🌊', scores:{ pocahontas:5, elsa:4, moana:3, meg:3 } }
    ]},
    { id:'values_q5_important', category:'values', type:'multipleChoice', weight:1.4, prompt:'<em>What is thy most important value, <span class="name">{name}</span>?</em>', answers:[
      { text:'Truth — I will not live a lie even for comfort', scores:{ belle:5, mulan:5, raya:4, jasmine:3 } },
      { text:'Loyalty — I show up for the people I love, always', scores:{ anna:5, mulan:4, 'snow-white':3, cinderella:3 } },
      { text:'Freedom — the right to choose my own path', scores:{ jasmine:5, merida:5, ariel:4, rapunzel:3 } },
      { text:'Kindness — the world goes better with more of it', scores:{ 'snow-white':5, aurora:4, anna:3, tiana:3 } }
    ]},
    { id:'values_q6_hard_choice', category:'values', type:'scenario', weight:1.4, prompt:'<em>Thou must choose between what is right and what is safe. What dost thou choose?</em>', answers:[
      { text:'What is right. Always. Even if it costs me', scores:{ raya:5, mulan:5, jasmine:4, merida:3 } },
      { text:'What is right — but I make sure I survive to fight again', scores:{ belle:4, tiana:4, raya:3, elsa:3 } },
      { text:'It depends on what is at stake — no easy answer', scores:{ pocahontas:5, aurora:4, belle:3, anna:3 } },
      { text:'I try to find a way to do both — there is usually a path', scores:{ anna:5, moana:4, tiana:3, 'snow-white':3 } }
    ]},
    { id:'values_q7_truth', category:'values', type:'multipleChoice', weight:1.4, prompt:'<em>What is truth to thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'The most important thing — I would rather know a hard truth than live a comfortable lie', scores:{ belle:5, mulan:5, raya:4, jasmine:3 } },
      { text:'Something I protect — not everyone deserves every truth', scores:{ elsa:4, meg:4, raya:3, belle:2 } },
      { text:'A practice — I try to tell it even when afraid', scores:{ anna:4, tiana:4, pocahontas:3, mulan:3 } },
      { text:'A gift — the most loving thing I can give someone', scores:{ raya:5, belle:4, mulan:3, pocahontas:3 } }
    ]},
    { id:'values_q8_tradeoff', category:'values', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'Being right — or being kind, even when kindness means saying less than the full truth.', answers:[
      { text:'Being right — the truth matters more', scores:{ raya:5, belle:5, mulan:4, jasmine:3, 'snow-white':-2 } },
      { text:'Being kind — love matters more', scores:{ 'snow-white':5, anna:5, cinderella:4, aurora:3, raya:-2 } }
    ]},
    { id:'values_q9_never_do', category:'values', type:'multipleChoice', weight:1.4, prompt:'<em>What wouldst thou never do, no matter what?</em>', answers:[
      { text:'Betray someone who trusted me', scores:{ mulan:5, raya:5, anna:4, tiana:3 } },
      { text:"Pretend to be someone I am not for someone else's comfort", scores:{ jasmine:5, merida:5, elsa:4, ariel:3 } },
      { text:'Let someone suffer when I could help', scores:{ 'snow-white':5, anna:5, cinderella:4, tiana:3 } },
      { text:'Give up on something I believe in because it is hard', scores:{ tiana:5, mulan:5, raya:4, belle:3 } }
    ]},
    { id:'values_q10_hurt', category:'values', type:'hurt', weight:1.3, prompt:'<em>Which loss would hurt thee least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Losing my reputation', scores:{ merida:2, jasmine:2, elsa:-3, mulan:-4, cinderella:-2 } },
      { text:'Losing my comfort', scores:{ mulan:2, merida:2, cinderella:-3, aurora:-3, 'snow-white':-2 } },
      { text:'Losing my freedom', scores:{ cinderella:1, jasmine:-5, merida:-5, ariel:-4, rapunzel:-4 } },
      { text:'Losing my certainty — knowing who I am', scores:{ anna:1, elsa:-5, belle:-4, jasmine:-3, raya:-3 } }
    ]},
    { id:'values_q11_injustice', category:'values', type:'scenario', weight:1.3, prompt:'<em>Thou witnessest an injustice. What dost thou do?</em>', answers:[
      { text:'I speak — someone has to', scores:{ raya:5, jasmine:5, merida:4, mulan:3 } },
      { text:'I help the person who has been harmed first', scores:{ 'snow-white':5, anna:4, cinderella:4, tiana:3 } },
      { text:'I find others who will act with me', scores:{ moana:5, tiana:4, pocahontas:4, anna:3 } },
      { text:'I document it — some injustices need witnesses more than heroes', scores:{ belle:5, elsa:3, meg:3, pocahontas:3 } }
    ]},
    { id:'values_q12_never_trade', category:'values', type:'multipleChoice', weight:1.4, prompt:'<em>What wouldst thou never trade, <span class="name">{name}</span>?</em>', answers:[
      { text:'My mind — the right to think and question for myself', scores:{ belle:5, jasmine:5, mulan:3, elsa:3 } },
      { text:'My integrity — the ability to look at myself honestly', scores:{ mulan:5, raya:5, tiana:4, belle:3 } },
      { text:'My people — the ones I love above all', scores:{ anna:5, mulan:4, moana:4, 'snow-white':3 } },
      { text:'My freedom — the right to choose my own story', scores:{ jasmine:5, merida:5, ariel:4, rapunzel:4 } }
    ]},
    { id:'values_q13_honor', category:'values', type:'multipleChoice', weight:1.3, prompt:'<em>What does honor mean to thee?</em>', answers:[
      { text:'Doing what I said I would do, even when it becomes hard', scores:{ mulan:5, raya:5, tiana:4, anna:3 } },
      { text:'Being the same person in private as in public', scores:{ belle:5, tiana:4, pocahontas:4, raya:3 } },
      { text:'Standing by the people I love when they cannot stand alone', scores:{ anna:5, mulan:4, 'snow-white':3, cinderella:3 } },
      { text:'Admitting when I am wrong and making it right', scores:{ mulan:5, tiana:4, anna:3, pocahontas:3 } }
    ]},
    { id:'values_q14_tradeoff2', category:'values', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'Perfect integrity that sometimes means standing alone — or compromise that keeps you connected.', answers:[
      { text:'Perfect integrity, even alone', scores:{ elsa:5, raya:5, mulan:4, jasmine:4, belle:3, anna:-2 } },
      { text:'Compromise to stay connected', scores:{ anna:4, cinderella:3, 'snow-white':3, aurora:3, elsa:-3 } }
    ]},
    { id:'values_q15_struggle', category:'values', type:'multipleChoice', weight:1.3, prompt:'<em>What value dost thou most struggle to live by?</em>', answers:[
      { text:'Patience — I want things to change now', scores:{ ariel:5, jasmine:4, anna:3, rapunzel:2 } },
      { text:'Trust — it has been broken enough that I am careful', scores:{ raya:5, elsa:4, meg:4, jasmine:3 } },
      { text:'Forgiveness — especially of myself', scores:{ tiana:5, elsa:4, mulan:3, cinderella:3 } },
      { text:'Stillness — I struggle to be present when I want to move', scores:{ ariel:5, anna:4, merida:3, rapunzel:3 } }
    ]},
    { id:'values_q16_wrong_turn', category:'values', type:'multipleChoice', weight:1.3, prompt:'<em>When thou hast done something wrong, what dost thou do?</em>', answers:[
      { text:'I admit it immediately', scores:{ anna:5, tiana:4, mulan:3, 'snow-white':3 } },
      { text:'I sit with it privately until I understand why', scores:{ belle:5, elsa:4, pocahontas:3, meg:3 } },
      { text:'I make it right before I speak about it — actions first', scores:{ mulan:5, tiana:4, raya:3, cinderella:3 } },
      { text:'I find it very hard to face — I carry it too long', scores:{ cinderella:4, elsa:4, aurora:3, 'snow-white':3 } }
    ]},
    { id:'values_q17_honesty', category:'values', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'Radical honesty — even when it hurts — or radical kindness — even when it means not saying the full truth.', answers:[
      { text:'Radical honesty', scores:{ elsa:5, raya:5, belle:4, mulan:3, 'snow-white':-2 } },
      { text:'Radical kindness', scores:{ 'snow-white':5, anna:5, aurora:4, cinderella:4, elsa:-2 } }
    ]},
    { id:'values_q18_hardest', category:'values', type:'multipleChoice', weight:1.3, prompt:'<em>What value is hardest to live by, <span class="name">{name}</span>?</em>', answers:[
      { text:'Patience — I want it done now', scores:{ tiana:4, jasmine:4, anna:3, rapunzel:2 } },
      { text:'Gentleness — I am harder on people than I mean to be', scores:{ raya:5, merida:4, jasmine:3, elsa:3 } },
      { text:'Self-forgiveness — I hold my mistakes too long', scores:{ tiana:5, elsa:4, mulan:4, cinderella:3 } },
      { text:'Acceptance — there is always something I want to change', scores:{ elsa:4, jasmine:3, merida:3, ariel:3 } }
    ]},
    { id:'values_q19_pass_on', category:'values', type:'multipleChoice', weight:1.2, prompt:'<em>What value wouldst thou most want to pass on?</em>', answers:[
      { text:'Courage — the willingness to do the hard thing', scores:{ mulan:5, merida:4, anna:3, moana:3 } },
      { text:'Kindness — it costs nothing and changes everything', scores:{ 'snow-white':5, anna:4, cinderella:4, tiana:3 } },
      { text:'Curiosity — the refusal to stop asking why', scores:{ belle:5, ariel:4, rapunzel:3, jasmine:3 } },
      { text:'Resilience — the ability to begin again after being broken', scores:{ tiana:5, cinderella:4, elsa:4, raya:4 } }
    ]},
    { id:'values_q20_freetext', category:'values', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The one thing I will not compromise on, ever, is..."', placeholder:'Write thy truth, {name}', freetextTag:'no_compromise', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'values_q21_learned', category:'values', type:'multipleChoice', weight:1.2, prompt:'<em>What value did someone teach thee that thou couldst not have found alone?</em>', answers:[
      { text:'That gentleness is its own kind of strength', scores:{ 'snow-white':5, aurora:4, cinderella:3, anna:3 } },
      { text:'That asking for help is not weakness', scores:{ elsa:5, rapunzel:4, cinderella:3, meg:3 } },
      { text:'That trust must be given before it can be earned', scores:{ raya:5, anna:4, moana:4, pocahontas:3 } },
      { text:'That I am enough — exactly as I am', scores:{ rapunzel:5, elsa:4, jasmine:3, ariel:3 } }
    ]},
    { id:'values_q22_carry', category:'values', type:'multipleChoice', weight:1.2, prompt:'<em>What dost thou carry from those who came before thee?</em>', answers:[
      { text:'Their courage — I try to be worthy of it', scores:{ mulan:5, moana:4, tiana:3, merida:3 } },
      { text:'Their kindness — the way they showed up for people', scores:{ 'snow-white':5, anna:4, cinderella:4, aurora:3 } },
      { text:'Their curiosity — the love of learning they gave me', scores:{ belle:5, ariel:4, rapunzel:3, tiana:2 } },
      { text:'Their dreams — the ones they could not finish', scores:{ tiana:5, mulan:4, moana:4, raya:3 } }
    ]},
    { id:'values_q23_flaw', category:'values', type:'multipleChoice', weight:1.3, prompt:'<em>What do people call a flaw that thou consider a value?</em>', answers:[
      { text:'Stubbornness — they call it that. I call it conviction', scores:{ merida:5, tiana:4, mulan:3, jasmine:3 } },
      { text:'Naivety — they call it that. I call it choosing to believe', scores:{ anna:5, 'snow-white':4, aurora:3, cinderella:3 } },
      { text:'Coldness — they call it that. I call it careful', scores:{ elsa:5, raya:4, meg:4, belle:2 } },
      { text:'Recklessness — they call it that. I call it being alive', scores:{ ariel:5, merida:4, jasmine:4, moana:3 } }
    ]},
    { id:'values_q24_remembered', category:'values', type:'multipleChoice', weight:1.3, prompt:'<em>What dost thou most want to be remembered for?</em>', answers:[
      { text:'Doing what was right when it was hard', scores:{ mulan:5, raya:4, tiana:4, belle:3 } },
      { text:'Being kind in a world that made it difficult', scores:{ 'snow-white':5, cinderella:5, anna:4, aurora:3 } },
      { text:'Living fully — truly living, not half-alive', scores:{ ariel:5, jasmine:4, merida:4, moana:3 } },
      { text:'Building something that outlasted me', scores:{ tiana:5, mulan:4, moana:4, belle:3 } }
    ]},
    { id:'values_q25_truest', category:'values', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is thy truest value, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'Truth — I will not live a lie for anyone', scores:{ belle:5, raya:5, mulan:4, jasmine:3, pocahontas:3 } },
      { text:'Love — everything I do comes back to who I love', scores:{ anna:5, 'snow-white':4, cinderella:4, aurora:3, tiana:2 } },
      { text:'Courage — I keep going even when I am afraid', scores:{ mulan:5, merida:4, moana:4, raya:3, tiana:3 } },
      { text:'Becoming — I am always growing and I will not stop', scores:{ elsa:5, rapunzel:4, ariel:3, jasmine:3, moana:3 } }
    ]}
  ],

  food: [
    { id:'food_v1_feast', category:'food', type:'visual', weight:1.4, prompt:'<em>Which feast table calls to thee?</em>', answers:[
      { text:'A long warm table piled with home-cooked dishes', emoji:'🍲', scores:{ tiana:5, 'snow-white':4, anna:3, cinderella:3 } },
      { text:'A market spread — small plates from many stalls', emoji:'🏮', scores:{ jasmine:5, ariel:4, rapunzel:3, anna:2 } },
      { text:'A quiet table for two — one good dish, one good conversation', emoji:'🕯️', scores:{ belle:5, elsa:4, meg:3, aurora:2 } },
      { text:'A wild outdoor spread — food eaten with hands on a hillside', emoji:'🌿', scores:{ merida:5, moana:4, pocahontas:3, anna:3 } }
    ]},
    { id:'food_v2_treat', category:'food', type:'visual', weight:1.3, prompt:'<em>What treat dost thou reach for when no one is watching?</em>', answers:[
      { text:'Something warm and sweet — baked, golden, comforting', emoji:'🍰', scores:{ anna:5, rapunzel:4, 'snow-white':3, cinderella:3 } },
      { text:'Something sharp and interesting — not what most people choose', emoji:'🌶️', scores:{ jasmine:5, ariel:4, meg:3, belle:2 } },
      { text:'Something I made myself — the making is part of the pleasure', emoji:'🍳', scores:{ tiana:5, rapunzel:4, 'snow-white':3, anna:2 } },
      { text:'Whatever is in front of me — I am not precious about food', emoji:'🌾', scores:{ merida:5, moana:4, raya:3, pocahontas:3 } }
    ]},
    { id:'food_v3_drink', category:'food', type:'visual', weight:1.2, prompt:'<em>What dost thou drink on a cold quiet morning?</em>', answers:[
      { text:'Tea — a ritual, a warmth, a small daily ceremony', emoji:'🍵', scores:{ belle:5, aurora:4, cinderella:3, 'snow-white':2 } },
      { text:'Coffee — dark, strong, I need to be awake', emoji:'☕', scores:{ tiana:5, mulan:4, raya:3, meg:3 } },
      { text:'Something cold — I wake up wanting freshness', emoji:'💧', scores:{ elsa:5, ariel:4, moana:3, merida:2 } },
      { text:'Whatever is made with love — the drink is the making of it', emoji:'✨', scores:{ anna:5, 'snow-white':4, rapunzel:3, tiana:2 } }
    ]},
    { id:'food_v4_flavor', category:'food', type:'visual', weight:1.2, prompt:'<em>Which flavor speaks most truly to thee?</em>', answers:[
      { text:'Sweet — warm, familiar, safe', emoji:'🍯', scores:{ anna:5, 'snow-white':4, rapunzel:3, cinderella:2 } },
      { text:'Spiced — complex, surprising, never boring', emoji:'🌺', scores:{ jasmine:5, tiana:4, ariel:3, moana:3 } },
      { text:'Sharp and citrus — bright, clean, wakes everything up', emoji:'🍋', scores:{ merida:5, elsa:4, raya:3, meg:3 } },
      { text:'Deep and layered — not what it seems at first', emoji:'🌿', scores:{ mulan:5, belle:4, pocahontas:3, elsa:2 } }
    ]},
    { id:'food_q5_favorite', category:'food', type:'multipleChoice', weight:1.3, prompt:'<em>What is thy favorite kind of meal, <span class="name">{name}</span>?</em>', answers:[
      { text:'Something slow-cooked — that took all day and tastes like it', scores:{ tiana:5, 'snow-white':4, anna:3, cinderella:3 } },
      { text:'Something new — a dish I have never tried', scores:{ ariel:5, jasmine:4, rapunzel:3, moana:3 } },
      { text:'Something simple and perfect — one ingredient done right', scores:{ elsa:5, mulan:4, belle:3, raya:3 } },
      { text:'Whatever someone made for me — the love is the ingredient', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:3 } }
    ]},
    { id:'food_q6_cook', category:'food', type:'multipleChoice', weight:1.2, prompt:'<em>Dost thou prefer to cook or to be cooked for?</em>', answers:[
      { text:'Cook — the making is the best part', scores:{ tiana:5, rapunzel:4, 'snow-white':4, anna:3 } },
      { text:'Be cooked for — to have someone care for me that way', scores:{ cinderella:5, aurora:4, belle:3, meg:3 } },
      { text:'Cook together — that is the real answer', scores:{ anna:5, 'snow-white':3, tiana:3, rapunzel:3 } },
      { text:'Either — I am genuinely happy with food in any form', scores:{ merida:5, moana:4, ariel:3, jasmine:3 } }
    ]},
    { id:'food_q7_comfort', category:'food', type:'multipleChoice', weight:1.3, prompt:'<em>What dost thou eat when the day has broken thee open?</em>', answers:[
      { text:'Something warm from childhood — the taste of being safe', scores:{ cinderella:5, anna:4, 'snow-white':4, aurora:3 } },
      { text:'Something I made myself — the work steadies me', scores:{ tiana:5, rapunzel:4, belle:3, mulan:3 } },
      { text:'Something simple — bread and butter, tea, nothing to think about', scores:{ elsa:5, meg:5, aurora:3, belle:3 } },
      { text:'Whatever is in front of me — comfort is a state of mind', scores:{ merida:4, moana:4, raya:3, pocahontas:3 } }
    ]},
    { id:'food_q8_tradeoff', category:'food', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A simple perfect meal eaten alone in peace — or a chaotic joyful feast with everyone thou lovest.', answers:[
      { text:'The simple perfect meal alone', scores:{ belle:5, elsa:5, meg:4, aurora:3, anna:-2 } },
      { text:'The chaotic joyful feast with everyone', scores:{ anna:5, 'snow-white':5, tiana:4, rapunzel:3, merida:3, elsa:-3 } }
    ]},
    { id:'food_q9_how_eat', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>How dost thou eat?</em>', answers:[
      { text:'Slowly — I taste everything. Meals are a pleasure', scores:{ belle:5, aurora:4, tiana:3, elsa:3 } },
      { text:'Quickly — I am always moving on to the next thing', scores:{ merida:5, mulan:4, raya:3, tiana:2 } },
      { text:'While doing something else — reading, talking, working', scores:{ belle:4, anna:3, rapunzel:3, ariel:3 } },
      { text:'With full attention — the meal deserves my presence', scores:{ tiana:5, mulan:4, pocahontas:3, cinderella:3 } }
    ]},
    { id:'food_q10_hurt', category:'food', type:'hurt', weight:1.2, prompt:'<em>Which food experience would hurt least to lose?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Eating alone in peace', scores:{ anna:1, elsa:-4, belle:-3, meg:-3 } },
      { text:'Feasting with people I love', scores:{ elsa:1, anna:-5, 'snow-white':-4, tiana:-3 } },
      { text:'Discovering a food I have never tasted', scores:{ cinderella:1, ariel:-5, jasmine:-4, rapunzel:-3 } },
      { text:'The comfort of a beloved old recipe', scores:{ ariel:1, tiana:-5, cinderella:-4, 'snow-white':-3 } }
    ]},
    { id:'food_q11_feast', category:'food', type:'multipleChoice', weight:1.2, prompt:'<em>Which kind of dining dost thou love most?</em>', answers:[
      { text:'A great feast — the table full, the night long', scores:{ anna:5, merida:4, tiana:3, rapunzel:3 } },
      { text:'An intimate dinner — two people, one candle, no hurry', scores:{ belle:5, aurora:4, cinderella:3, elsa:3 } },
      { text:'Street food — standing up, watching the world', scores:{ jasmine:5, ariel:4, moana:3, rapunzel:3 } },
      { text:'A family meal — people who have eaten together a thousand times', scores:{ 'snow-white':5, anna:4, tiana:3, cinderella:3 } }
    ]},
    { id:'food_q12_proud', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>What dost thou know how to make that thou art proud of?</em>', answers:[
      { text:'A long slow dish — something that takes patience', scores:{ tiana:5, 'snow-white':4, cinderella:3, belle:2 } },
      { text:'Whatever people need — I adapt to the moment', scores:{ anna:5, rapunzel:4, moana:3, 'snow-white':3 } },
      { text:'One perfect thing — I have made it so many times it is flawless', scores:{ mulan:5, elsa:4, tiana:3, belle:3 } },
      { text:'Honestly, I am a better eater than a cook', scores:{ ariel:5, merida:4, jasmine:3, meg:3 } }
    ]},
    { id:'food_q13_new_food', category:'food', type:'multipleChoice', weight:1.2, prompt:'<em>When presented with food thou hast never tried, what dost thou do?</em>', answers:[
      { text:'Try it immediately — that is the whole point', scores:{ ariel:5, jasmine:4, rapunzel:4, anna:3 } },
      { text:'Ask what it is first', scores:{ belle:5, tiana:4, mulan:3, elsa:3 } },
      { text:'Watch someone else try it first', scores:{ aurora:4, cinderella:3, 'snow-white':3, meg:3 } },
      { text:'Try a small amount — adventurous but careful', scores:{ raya:4, pocahontas:4, belle:3, elsa:3 } }
    ]},
    { id:'food_q14_tradeoff2', category:'food', type:'tradeoff', weight:1.2, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'The perfect meal at home — or an unexpected delicious meal somewhere completely new.', answers:[
      { text:'The perfect meal at home', scores:{ tiana:5, 'snow-white':4, cinderella:4, belle:3, anna:3, merida:-2 } },
      { text:'The unexpected meal somewhere new', scores:{ ariel:5, jasmine:4, moana:4, rapunzel:3, merida:3, tiana:-2 } }
    ]},
    { id:'food_q15_alone', category:'food', type:'multipleChoice', weight:1.2, prompt:'<em>Dost thou love eating alone?</em>', answers:[
      { text:'Yes — I read while I eat. It is the best', scores:{ belle:5, elsa:3, aurora:2, meg:2 } },
      { text:'Yes — sometimes I need the quiet', scores:{ elsa:4, meg:4, raya:3, pocahontas:3 } },
      { text:'It depends — sometimes peaceful, sometimes lonely', scores:{ anna:3, cinderella:3, rapunzel:3, belle:2 } },
      { text:'Not really — food is better shared', scores:{ anna:5, tiana:4, 'snow-white':4, merida:3 } }
    ]},
    { id:'food_q16_table', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>What is the most important thing about a table?</em>', answers:[
      { text:'Who is sitting at it', scores:{ anna:5, 'snow-white':4, tiana:3, cinderella:3 } },
      { text:'What is on it', scores:{ tiana:5, jasmine:4, ariel:3, rapunzel:3 } },
      { text:'The conversation that happens across it', scores:{ belle:5, elsa:3, aurora:3, meg:3 } },
      { text:'That it has room for anyone who needs it', scores:{ moana:5, 'snow-white':4, anna:3, pocahontas:3 } }
    ]},
    { id:'food_q17_making', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>What dost thou love about making food for someone?</em>', answers:[
      { text:'It is a way of saying I love thee without words', scores:{ tiana:5, 'snow-white':5, anna:4, cinderella:3 } },
      { text:'The craft — getting it exactly right', scores:{ tiana:4, mulan:4, belle:3, raya:3 } },
      { text:'Watching them eat it — there is nothing better', scores:{ 'snow-white':5, anna:4, rapunzel:3, aurora:3 } },
      { text:'I do not love cooking — I do it because people need to eat', scores:{ raya:4, merida:3, elsa:3, jasmine:2 } }
    ]},
    { id:'food_q18_smell', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>Which smell carries thee back somewhere beloved?</em>', answers:[
      { text:'Bread baking — warmth and safety and being home', scores:{ 'snow-white':5, cinderella:4, tiana:3, anna:3 } },
      { text:'Spices — a market, a kitchen full of life', scores:{ jasmine:5, tiana:4, ariel:3, rapunzel:3 } },
      { text:'Rain and pine — freedom, wildness, outdoors', scores:{ merida:5, pocahontas:4, moana:3, aurora:2 } },
      { text:'Old books and candles — the smell of thinking', scores:{ belle:5, elsa:3, aurora:3, rapunzel:2 } }
    ]},
    { id:'food_q19_midnight', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>What dost thou eat at midnight when the world is asleep?</em>', answers:[
      { text:'Something sweet and forbidden — this is what midnight is for', scores:{ rapunzel:5, anna:4, ariel:3, jasmine:3 } },
      { text:'Tea and something small — the night needs a ritual', scores:{ belle:5, elsa:4, aurora:3, meg:3 } },
      { text:'Whatever is left over — I am practical even at midnight', scores:{ tiana:4, mulan:4, raya:3, cinderella:3 } },
      { text:'I am asleep at midnight — I believe in rest', scores:{ aurora:5, 'snow-white':4, cinderella:3, anna:2 } }
    ]},
    { id:'food_q20_freetext', category:'food', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The food that tastes most like home to me is..."', placeholder:'Write thy truth, {name}', freetextTag:'taste_of_home', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'food_q21_stranger', category:'food', type:'scenario', weight:1.2, prompt:'<em>A stranger invites thee to their table. What dost thou do?</em>', answers:[
      { text:'Sit down immediately — this is how adventures begin', scores:{ anna:5, ariel:4, rapunzel:4, jasmine:3 } },
      { text:'Accept carefully — I want to understand who they are first', scores:{ belle:4, raya:4, mulan:3, elsa:3 } },
      { text:'Accept warmly — strangers become friends at tables', scores:{ 'snow-white':5, tiana:4, anna:3, moana:3 } },
      { text:'Decline politely — I do not eat with people I do not know', scores:{ elsa:5, meg:4, cinderella:3, raya:2 } }
    ]},
    { id:'food_q22_heart', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>What do you believe about food at its heart?</em>', answers:[
      { text:'It is love made edible — the most honest form of care', scores:{ tiana:5, 'snow-white':4, anna:4, cinderella:3 } },
      { text:'It is culture — every dish is a history lesson', scores:{ mulan:5, jasmine:4, moana:4, tiana:3 } },
      { text:'It is pleasure — one of the simplest joys we have', scores:{ ariel:5, rapunzel:4, jasmine:3, anna:3 } },
      { text:'It is fuel — I respect it but I do not attach to it', scores:{ raya:4, mulan:3, merida:3, elsa:3 } }
    ]},
    { id:'food_q23_season', category:'food', type:'multipleChoice', weight:1.1, prompt:'<em>Which season dost thou love best for its food?</em>', answers:[
      { text:'Autumn — harvest, spice, warmth against the chill', scores:{ belle:5, aurora:4, merida:3, tiana:3 } },
      { text:'Summer — fresh fruit, long outdoor meals, abundance', scores:{ ariel:5, moana:4, jasmine:3, rapunzel:3 } },
      { text:'Winter — hearty, slow, every meal an occasion', scores:{ anna:5, elsa:4, cinderella:3, 'snow-white':3 } },
      { text:'Spring — the first fresh things after the long grey', scores:{ aurora:5, 'snow-white':4, rapunzel:3, anna:2 } }
    ]},
    { id:'food_q24_comfort_friend', category:'food', type:'multipleChoice', weight:1.2, prompt:'<em>When someone needs comfort, what dost thou make them?</em>', answers:[
      { text:'Their favorite thing — I pay attention to what people love', scores:{ tiana:5, anna:4, 'snow-white':4, cinderella:3 } },
      { text:'Something warm that takes time — the making is the message', scores:{ 'snow-white':5, tiana:4, cinderella:3, aurora:3 } },
      { text:'A whole feast — love should be abundant', scores:{ anna:5, merida:4, rapunzel:3, moana:3 } },
      { text:'Whatever is quickest — they need something now', scores:{ raya:4, mulan:3, elsa:3, jasmine:2 } }
    ]},
    { id:'food_q25_truest', category:'food', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is food at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'Love made real — every meal is someone saying "I thought of thee"', scores:{ tiana:5, 'snow-white':5, anna:4, cinderella:3 } },
      { text:'Pleasure — one of the honest gifts of being alive', scores:{ ariel:5, rapunzel:4, jasmine:3, anna:3 } },
      { text:'Connection — the table is where we become ourselves together', scores:{ anna:5, moana:4, tiana:3, 'snow-white':3, merida:3 } },
      { text:'Necessity that became art — remarkable that we made it beautiful', scores:{ belle:5, mulan:4, tiana:3, elsa:3 } }
    ]}
  ],

  magic: [
    { id:'magic_v1_wand', category:'magic', type:'visual', weight:1.5, prompt:'<em>Which magical implement would be thine?</em>', answers:[
      { text:'An ice wand — cold, precise, terrifyingly beautiful', emoji:'❄️', scores:{ elsa:5, aurora:2, raya:2, mulan:1 } },
      { text:'A paintbrush that makes whatever it touches real', emoji:'🎨', scores:{ rapunzel:5, belle:3, ariel:3, anna:2 } },
      { text:'A compass that points to what matters most', emoji:'🧭', scores:{ moana:5, pocahontas:4, ariel:3, merida:2 } },
      { text:'A sword that knows when it is right to be drawn', emoji:'⚔️', scores:{ mulan:5, raya:5, merida:3, jasmine:2 } }
    ]},
    { id:'magic_v2_spell', category:'magic', type:'visual', weight:1.4, prompt:'<em>What spell wouldst thou cast first?</em>', answers:[
      { text:'A spell of understanding — to know the heart of things', emoji:'💡', scores:{ belle:5, pocahontas:4, elsa:3, aurora:2 } },
      { text:'A spell of protection — to keep those I love from harm', emoji:'🛡️', scores:{ mulan:5, anna:4, 'snow-white':3, tiana:3 } },
      { text:'A spell of transformation — to become what I need to be', emoji:'✨', scores:{ elsa:5, rapunzel:4, ariel:3, jasmine:3 } },
      { text:'A spell of sight — to see the truth beneath the surface', emoji:'👁️', scores:{ pocahontas:5, belle:4, raya:4, meg:3 } }
    ]},
    { id:'magic_v3_mirror', category:'magic', type:'visual', weight:1.4, prompt:'<em>Which magic mirror is thine?</em>', answers:[
      { text:'A frosted mirror that shows what could be', emoji:'❄️', scores:{ elsa:5, aurora:3, meg:2, belle:1 } },
      { text:'A deep mirror that shows who is truly in danger', emoji:'🪞', scores:{ pocahontas:5, raya:4, mulan:3, 'snow-white':2 } },
      { text:'A gold mirror that shows the brave version of thyself', emoji:'✨', scores:{ rapunzel:5, cinderella:4, anna:3, ariel:2 } },
      { text:'A dark mirror that shows the truth however uncomfortable', emoji:'🌑', scores:{ belle:5, elsa:3, meg:4, raya:3 } }
    ]},
    { id:'magic_v4_doors', category:'magic', type:'visual', weight:1.3, prompt:'<em>Magic opens a door for thee. Which door?</em>', answers:[
      { text:'A door into any book ever written', emoji:'📚', scores:{ belle:5, elsa:3, rapunzel:3, aurora:2 } },
      { text:'A door to the bottom of the ocean', emoji:'🌊', scores:{ ariel:5, moana:4, pocahontas:2, jasmine:2 } },
      { text:'A door to the past — to see the ancestors', emoji:'🏮', scores:{ mulan:5, moana:4, pocahontas:4, raya:3 } },
      { text:'A door to a self I have not yet become', emoji:'🚪', scores:{ elsa:5, rapunzel:4, jasmine:3, merida:3 } }
    ]},
    { id:'magic_q5_believe', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>What dost thou believe about magic, <span class="name">{name}</span>?</em>', answers:[
      { text:'It is real — I have felt it even if I cannot explain it', scores:{ aurora:5, 'snow-white':4, anna:3, pocahontas:3 } },
      { text:'It is something we do not yet understand — but it exists', scores:{ belle:5, elsa:4, rapunzel:3, ariel:3 } },
      { text:'It is what happens when love is strong enough', scores:{ anna:5, cinderella:4, 'snow-white':3, aurora:3 } },
      { text:'It is power — and like all power, it must be earned', scores:{ mulan:5, raya:4, tiana:3, merida:3 } }
    ]},
    { id:'magic_q6_wish', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>If magic could grant thee one wish, what wouldst thou ask?</em>', answers:[
      { text:'To understand everything I have ever wondered about', scores:{ belle:5, ariel:4, rapunzel:3, jasmine:3 } },
      { text:'For those I love to be safe — always', scores:{ anna:5, mulan:4, 'snow-white':3, cinderella:3 } },
      { text:'To become fully what I am meant to be', scores:{ elsa:5, rapunzel:4, moana:3, jasmine:3 } },
      { text:'To go somewhere entirely new — somewhere no one has been', scores:{ ariel:5, moana:4, jasmine:3, merida:3 } }
    ]},
    { id:'magic_q7_source', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>Where does magic come from, truly?</em>', answers:[
      { text:'From within — it is born of feeling, not incantation', scores:{ elsa:5, rapunzel:4, ariel:3, moana:3 } },
      { text:'From the natural world — it lives in rivers and trees and stars', scores:{ pocahontas:5, aurora:4, moana:3, merida:3 } },
      { text:'From love — the strongest magic I know', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:3 } },
      { text:'From discipline — it is earned through practice and sacrifice', scores:{ mulan:5, raya:4, tiana:3, elsa:3 } }
    ]},
    { id:'magic_q8_tradeoff', category:'magic', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'Magic that lets thee see everything clearly — or magic that lets thee hide perfectly.', answers:[
      { text:'See everything clearly', scores:{ belle:5, pocahontas:4, raya:4, mulan:3, elsa:-2 } },
      { text:'Hide perfectly', scores:{ elsa:5, meg:4, mulan:3, raya:3, belle:-2 } }
    ]},
    { id:'magic_q9_refuse', category:'magic', type:'multipleChoice', weight:1.4, prompt:'<em>What magic wouldst thou refuse, even if offered freely?</em>', answers:[
      { text:"Mind-reading — people deserve their thoughts", scores:{ belle:5, aurora:4, pocahontas:4, raya:3 } },
      { text:'Immortality — I want a life with a proper ending', scores:{ moana:5, pocahontas:4, aurora:3, tiana:3 } },
      { text:"Magic that changes someone's heart against their will", scores:{ belle:5, jasmine:5, aurora:4, anna:3 } },
      { text:'Power over others — I do not want that kind of magic', scores:{ 'snow-white':5, anna:4, cinderella:3, tiana:3 } }
    ]},
    { id:'magic_q10_hurt', category:'magic', type:'hurt', weight:1.3, prompt:'<em>Which magical loss would hurt thee least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'The ability to fly', scores:{ ariel:-3, merida:-3, moana:-3, jasmine:-2, elsa:1 } },
      { text:'The ability to talk to animals', scores:{ 'snow-white':-4, pocahontas:-4, aurora:-3, cinderella:-3, raya:1 } },
      { text:'The ability to be invisible', scores:{ elsa:-3, meg:-3, mulan:-2, raya:-2, anna:1 } },
      { text:'The ability to see the future', scores:{ aurora:-4, pocahontas:-3, 'snow-white':-2, belle:-2, merida:1 } }
    ]},
    { id:'magic_q11_afraid', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of magic frightens thee?</em>', answers:[
      { text:'Magic that changes someone without their consent', scores:{ belle:5, jasmine:5, aurora:3, anna:3 } },
      { text:'Magic that shows things thou cannot unsee', scores:{ elsa:5, belle:3, pocahontas:3, meg:3 } },
      { text:'Magic that bargains — there is always a cost I cannot see', scores:{ ariel:5, cinderella:4, rapunzel:3, tiana:3 } },
      { text:'My own magic — what I am capable of frightens me sometimes', scores:{ elsa:5, rapunzel:4, ariel:3, merida:2 } }
    ]},
    { id:'magic_q12_daily', category:'magic', type:'multipleChoice', weight:1.2, prompt:'<em>Where dost thou find small magic in the everyday world?</em>', answers:[
      { text:'In books — every page is a kind of enchantment', scores:{ belle:5, rapunzel:3, elsa:3, aurora:2 } },
      { text:'In nature — a forest at dawn, an ocean at storm', scores:{ pocahontas:5, aurora:4, merida:3, moana:3 } },
      { text:'In people — the moment someone truly understands me', scores:{ anna:5, 'snow-white':4, cinderella:3, rapunzel:3 } },
      { text:'In making things — the act of creation is its own spell', scores:{ rapunzel:5, tiana:4, ariel:3, belle:3 } }
    ]},
    { id:'magic_q13_cost', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>Magic always has a cost. What wouldst thou pay?</em>', answers:[
      { text:'Work — anything worth having is worth earning', scores:{ tiana:5, mulan:4, raya:3, belle:3 } },
      { text:'Risk — I would face what the magic asks', scores:{ ariel:5, merida:4, anna:3, moana:3 } },
      { text:'Truth — honesty is my most reliable currency', scores:{ belle:5, raya:4, pocahontas:3, mulan:3 } },
      { text:'I would be careful — magic costs more than it says', scores:{ elsa:5, meg:4, belle:3, tiana:3 } }
    ]},
    { id:'magic_q14_tradeoff2', category:'magic', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'Magic that serves thy will — or magic that connects thee to something larger than thyself.', answers:[
      { text:'Magic that serves my will', scores:{ elsa:4, jasmine:3, merida:3, mulan:3, anna:-2 } },
      { text:'Magic that connects to something larger', scores:{ pocahontas:5, moana:5, aurora:3, 'snow-white':3, elsa:-2 } }
    ]},
    { id:'magic_q15_kind', category:'magic', type:'multipleChoice', weight:1.2, prompt:'<em>Which kind of magic feels most like thee?</em>', answers:[
      { text:'Elemental — rooted in the world, raw and real', scores:{ elsa:5, moana:4, pocahontas:4, merida:3 } },
      { text:'Creative — imagination made visible', scores:{ rapunzel:5, ariel:4, belle:3, anna:3 } },
      { text:'Healing — making whole what was broken', scores:{ 'snow-white':5, aurora:4, cinderella:3, anna:3 } },
      { text:'Strategic — knowing where to be and when', scores:{ mulan:5, raya:5, tiana:3, elsa:3 } }
    ]},
    { id:'magic_q16_gift', category:'magic', type:'multipleChoice', weight:1.2, prompt:'<em>If thou couldst enchant the world with one gift, what wouldst thou give?</em>', answers:[
      { text:'Understanding — every person able to feel what another feels', scores:{ pocahontas:5, anna:4, 'snow-white':3, elsa:3 } },
      { text:'Courage — every person able to be brave when it matters', scores:{ mulan:5, merida:4, moana:4, raya:3 } },
      { text:'Wonder — the capacity to be amazed by the world', scores:{ rapunzel:5, ariel:4, belle:3, aurora:3 } },
      { text:'Healing — the slow work of mending what is broken', scores:{ tiana:5, 'snow-white':4, anna:3, cinderella:3 } }
    ]},
    { id:'magic_q17_sparingly', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>If thou hadst magic, how wouldst thou use it?</em>', answers:[
      { text:'Sparingly — power used too freely loses its meaning', scores:{ elsa:5, mulan:5, raya:4, pocahontas:3 } },
      { text:'Generously — what is the point of power if not to help', scores:{ anna:5, 'snow-white':4, tiana:3, rapunzel:3 } },
      { text:'Wisely — I would study it before I acted', scores:{ belle:5, mulan:4, tiana:3, raya:3 } },
      { text:'Joyfully — magic should be shared and celebrated', scores:{ rapunzel:5, ariel:4, anna:3, jasmine:3 } }
    ]},
    { id:'magic_q18_use', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>What wouldst thou do with magic others cannot imagine?</em>', answers:[
      { text:'Build something that lasts longer than I do', scores:{ tiana:5, mulan:4, moana:3, elsa:3 } },
      { text:'See what no one else has seen', scores:{ ariel:5, belle:4, pocahontas:3, moana:3 } },
      { text:'Protect everyone who needs it', scores:{ mulan:5, anna:4, 'snow-white':3, raya:3 } },
      { text:'Make art — the kind that could not be made any other way', scores:{ rapunzel:5, ariel:4, belle:3, jasmine:3 } }
    ]},
    { id:'magic_q19_never_again', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>What magic wouldst thou never use again?</em>', answers:[
      { text:'Magic born of fear or anger — it always goes wrong', scores:{ elsa:5, mulan:3, raya:3, aurora:2 } },
      { text:'Magic that isolates', scores:{ elsa:5, rapunzel:4, ariel:3, aurora:2 } },
      { text:'Magic that bargains away what I cannot get back', scores:{ ariel:5, cinderella:4, meg:4, tiana:3 } },
      { text:'Magic that changes people into what they did not choose to be', scores:{ belle:5, aurora:4, 'snow-white':3, anna:3 } }
    ]},
    { id:'magic_q20_freetext', category:'magic', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The magical thing I believe in that most people would laugh at is..."', placeholder:'Write thy truth, {name}', freetextTag:'secret_magic', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'magic_q21_enchanted', category:'magic', type:'scenario', weight:1.2, prompt:'<em>Thou art enchanted — trapped in a form not thy own. What breaks the spell?</em>', answers:[
      { text:'Love — freely given, without conditions', scores:{ aurora:5, 'snow-white':4, anna:4, cinderella:3 } },
      { text:'Courage — the choice to act even in the wrong shape', scores:{ mulan:5, merida:4, raya:3, ariel:3 } },
      { text:'Truth — finally saying what was hidden', scores:{ belle:5, elsa:4, jasmine:3, rapunzel:3 } },
      { text:'Work — I build my way out step by careful step', scores:{ tiana:5, mulan:4, raya:3, belle:3 } }
    ]},
    { id:'magic_q22_creature', category:'magic', type:'multipleChoice', weight:1.2, prompt:'<em>What magical creature would choose thee as its companion?</em>', answers:[
      { text:'A phoenix — because I know about rising', scores:{ elsa:5, tiana:4, ariel:3, rapunzel:3 } },
      { text:'A river spirit — because I listen before I speak', scores:{ pocahontas:5, aurora:4, moana:3, elsa:2 } },
      { text:'A sea dragon — because wildness recognizes wildness', scores:{ merida:5, moana:5, ariel:4, jasmine:3 } },
      { text:'A clockwork creature — because I am fascinated by how things work', scores:{ belle:5, tiana:4, rapunzel:3, raya:3 } }
    ]},
    { id:'magic_q23_wonder', category:'magic', type:'multipleChoice', weight:1.2, prompt:'<em>What fills thee with wonder, <span class="name">{name}</span>?</em>', answers:[
      { text:'The sky at night — all that distance, all that light', scores:{ rapunzel:5, aurora:4, elsa:3, moana:3 } },
      { text:'The deep sea — everything we do not know yet', scores:{ ariel:5, moana:4, belle:3, pocahontas:2 } },
      { text:'People — how they love and survive and keep going', scores:{ anna:5, 'snow-white':4, pocahontas:3, tiana:3 } },
      { text:'Old things — what they knew that we have forgotten', scores:{ belle:5, mulan:4, pocahontas:4, moana:3 } }
    ]},
    { id:'magic_q24_never_use', category:'magic', type:'multipleChoice', weight:1.3, prompt:'<em>What wouldst thou never do with magic, even if possible?</em>', answers:[
      { text:'Use it to make someone love me — love must be freely given', scores:{ belle:5, elsa:4, aurora:3, pocahontas:3 } },
      { text:'Use it to avoid what I need to face', scores:{ tiana:5, mulan:4, raya:4, moana:3 } },
      { text:'Use it against someone weaker than me', scores:{ 'snow-white':5, anna:4, cinderella:3, tiana:3 } },
      { text:'Use it without understanding — power without knowledge is chaos', scores:{ belle:5, elsa:4, mulan:3, raya:3 } }
    ]},
    { id:'magic_q25_truest', category:'magic', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is magic to thee, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'The world being stranger and more beautiful than it looks', scores:{ rapunzel:5, ariel:4, aurora:3, 'snow-white':3 } },
      { text:'The power within — the thing I have that I am still learning to trust', scores:{ elsa:5, rapunzel:4, moana:3, merida:3 } },
      { text:'What love does when it is strong enough — the miracle of it', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:3 } },
      { text:'The unexplained — the part of life that refuses to be ordinary', scores:{ belle:5, pocahontas:4, elsa:3, meg:3 } }
    ]}
  ],

  friendship: [
    { id:'friendship_v1_scene', category:'friendship', type:'visual', weight:1.5, prompt:'<em>Thou hast had a day that breaks a person open. A friend is waiting. Which scene is most truly thine?</em>', answers:[
      { text:'A fireside with two chairs and tea already made', emoji:'🔥', scores:{ belle:4, aurora:3, elsa:2, cinderella:2, 'snow-white':2 } },
      { text:'A worn footpath — the friend knows thou needest to move', emoji:'🌿', scores:{ pocahontas:5, merida:3, raya:2, mulan:2, moana:1 } },
      { text:'A warm kitchen table with two bowls of stew set', emoji:'🍲', scores:{ tiana:5, 'snow-white':3, anna:2, cinderella:1 } },
      { text:'A rooftop at dusk with lanterns and the city spread below', emoji:'🏙️', scores:{ rapunzel:5, ariel:3, jasmine:2, anna:2, moana:2 } }
    ]},
    { id:'friendship_v2_token', category:'friendship', type:'visual', weight:1.4, prompt:'<em>Thou wishest to give a friend something small but lasting. Which token?</em>', answers:[
      { text:'Matching woven friendship bracelets', emoji:'💛', scores:{ anna:4, rapunzel:3, merida:3, 'snow-white':2, raya:2 } },
      { text:'A small antique locket with a secret inside', emoji:'🪙', scores:{ aurora:4, cinderella:4, 'snow-white':2, anna:2, meg:2 } },
      { text:'A pressed wildflower in a small journal', emoji:'🌸', scores:{ belle:5, rapunzel:2, pocahontas:2, aurora:2 } },
      { text:'A small key on a cord — access to my world', emoji:'🗝️', scores:{ jasmine:5, moana:3, raya:2, ariel:2 } }
    ]},
    { id:'friendship_v3_group', category:'friendship', type:'visual', weight:1.4, prompt:'<em>Which kind of friend group is most truly thine?</em>', answers:[
      { text:'A cozy home with board games and cocoa', emoji:'🎮', scores:{ anna:5, 'snow-white':4, cinderella:2, aurora:2 } },
      { text:'A campfire in the wild with a guitar', emoji:'🏕️', scores:{ merida:5, moana:3, raya:3, mulan:2, pocahontas:2 } },
      { text:'A sunlit creative studio — easels, books, music', emoji:'🎨', scores:{ rapunzel:5, belle:4, ariel:3, tiana:2 } },
      { text:'Just two — one person and endless time', emoji:'☕', scores:{ elsa:5, belle:2, meg:3, jasmine:2, anna:-2 } }
    ]},
    { id:'friendship_v4_letter', category:'friendship', type:'visual', weight:1.3, prompt:'<em>A letter from a beloved friend arrives. Which letter wouldst thou most love?</em>', answers:[
      { text:'A long letter full of small daily things with tiny sketches', emoji:'✉️', scores:{ anna:5, 'snow-white':3, rapunzel:2, cinderella:2 } },
      { text:'A travel-stained letter from somewhere distant', emoji:'🗺️', scores:{ moana:5, ariel:4, jasmine:2, merida:2 } },
      { text:'A letter that gets messier as it goes — full of feeling', emoji:'💌', scores:{ raya:4, anna:2, meg:3, belle:2 } },
      { text:'A short careful note — "thinking of thee"', emoji:'🌷', scores:{ aurora:5, belle:3, pocahontas:3, elsa:2 } }
    ]},
    { id:'friendship_q5_true_friend', category:'friendship', type:'multipleChoice', weight:1.4, prompt:'<em>How dost thou know thou hast made a true friend, <span class="name">{name}</span>?</em>', answers:[
      { text:'They show up when I need them, even unasked', scores:{ tiana:4, mulan:3, cinderella:2, anna:2 } },
      { text:'They tell me the truth, even when it is hard', scores:{ raya:5, mulan:2, belle:2, meg:2, 'snow-white':-2 } },
      { text:'They make me laugh when I have forgotten how', scores:{ rapunzel:4, ariel:3, 'snow-white':2, anna:2 } },
      { text:'They love what is strange in me without needing to fix it', scores:{ belle:4, elsa:3, merida:2, meg:1 } }
    ]},
    { id:'friendship_q6_show_up', category:'friendship', type:'multipleChoice', weight:1.4, prompt:'<em>How dost thou show up for a friend in need?</em>', answers:[
      { text:'I bring food or tea — something warm in their hands', scores:{ tiana:3, 'snow-white':5, anna:2, cinderella:2 } },
      { text:'I sit with them in silence — they do not need me to fix it', scores:{ elsa:4, aurora:3, pocahontas:5, belle:2, meg:2 } },
      { text:'I make them laugh — even just a little', scores:{ rapunzel:5, ariel:3, anna:3 } },
      { text:'I help them solve it — we get to work', scores:{ tiana:3, mulan:3, raya:3, merida:2 } }
    ]},
    { id:'friendship_q7_need', category:'friendship', type:'multipleChoice', weight:1.3, prompt:'<em>What dost thou need most from a friend?</em>', answers:[
      { text:'For them to stay — even when I am hard to be around', scores:{ elsa:5, raya:3, meg:3, merida:2 } },
      { text:'For them to see me clearly — not the version I perform', scores:{ belle:4, rapunzel:3, jasmine:3, meg:2 } },
      { text:'For them to be reliable — to do what they say', scores:{ mulan:4, tiana:3, raya:3, cinderella:2 } },
      { text:'For them to bring joy — to be the bright thing in my week', scores:{ anna:4, rapunzel:3, ariel:3, 'snow-white':2 } }
    ]},
    { id:'friendship_q8_few_many', category:'friendship', type:'tradeoff', weight:1.5, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A few friends who know everything about thee — or many friends who each know a small piece.', answers:[
      { text:'A few who know everything', scores:{ belle:5, elsa:4, raya:3, meg:3, merida:2, anna:-2 } },
      { text:'Many who each know a piece', scores:{ anna:4, rapunzel:3, ariel:2, cinderella:2, tiana:2, elsa:-3 } }
    ]},
    { id:'friendship_q9_hurt', category:'friendship', type:'scenario', weight:1.5, prompt:'<em>A friend has truly hurt thee. What dost thou do?</em>', answers:[
      { text:'I tell them — plainly, now', scores:{ raya:5, jasmine:3, belle:3, mulan:2, 'snow-white':-2 } },
      { text:'I pull back and let them notice the distance', scores:{ elsa:4, meg:5, jasmine:2, raya:1, anna:-2 } },
      { text:'I forgive but become quietly more careful', scores:{ cinderella:3, aurora:3, 'snow-white':3, anna:1 } },
      { text:'I bring it up gently when I am ready', scores:{ anna:4, belle:3, tiana:2, pocahontas:2 } }
    ]},
    { id:'friendship_q10_hurt_lose', category:'friendship', type:'hurt', weight:1.4, prompt:'<em>If thou must lose one of these from thy friendships, which is most bearable?</em>', context:'The mirror asks honestly.', answers:[
      { text:'The fun — the lightness, the laughing', scores:{ rapunzel:-3, ariel:-2, anna:-2, raya:1 } },
      { text:'The depth — the being truly known', scores:{ belle:-3, elsa:-3, raya:-2, meg:-2, anna:1 } },
      { text:'The shared history — the "remember when"', scores:{ anna:-3, cinderella:-2, 'snow-white':-2, aurora:-2 } },
      { text:'The reliability — the "they always show up"', scores:{ tiana:-3, mulan:-3, raya:-2, jasmine:1 } }
    ]},
    { id:'friendship_q11_succeeds', category:'friendship', type:'scenario', weight:1.3, prompt:'<em>A friend succeeds at something thou hast been working toward. What dost thou feel first?</em>', answers:[
      { text:'Joy for them — pure, with no shadow', scores:{ 'snow-white':5, anna:4, aurora:3, cinderella:2 } },
      { text:'Joy mixed with a small ache — both at once', scores:{ belle:3, tiana:3, rapunzel:2, meg:3 } },
      { text:'A spark — if they can, I can', scores:{ mulan:3, tiana:3, raya:2, moana:2 } },
      { text:'A quiet pulling-back — I need a moment first', scores:{ elsa:5, meg:3, anna:-2 } }
    ]},
    { id:'friendship_q12_changed', category:'friendship', type:'multipleChoice', weight:1.4, prompt:'<em>A friend has become someone different. Not bad — just different. What dost thou do?</em>', answers:[
      { text:'Stay and adjust — I love who they are becoming', scores:{ anna:5, 'snow-white':3, cinderella:3, aurora:2 } },
      { text:'Tell them what I miss and see if any of it remains', scores:{ belle:4, raya:3, tiana:2, meg:2 } },
      { text:'Let it fade — some friendships are for a season', scores:{ elsa:4, jasmine:3, meg:3, merida:2, anna:-2 } },
      { text:'Stay close and watch — they may come back to themselves', scores:{ aurora:4, pocahontas:3, 'snow-white':2, raya:2 } }
    ]},
    { id:'friendship_q13_fight', category:'friendship', type:'scenario', weight:1.4, prompt:'<em>Thou hast had a fight with a beloved friend. Who reaches out first?</em>', answers:[
      { text:'I do — I cannot bear the distance', scores:{ anna:5, 'snow-white':3, cinderella:2, aurora:2 } },
      { text:'They do — I need time to think clearly', scores:{ elsa:5, meg:3, raya:2, jasmine:2 } },
      { text:'Whoever was wrong — we both know who', scores:{ raya:4, mulan:3, jasmine:2, merida:2 } },
      { text:'It depends on the fight', scores:{ belle:3, tiana:2, pocahontas:3, meg:1 } }
    ]},
    { id:'friendship_q14_loud_steady', category:'friendship', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A loud exciting friend who lights up every room — or a quiet steady friend who would never leave.', answers:[
      { text:'The loud exciting one', scores:{ ariel:4, rapunzel:3, anna:3, jasmine:2, elsa:-1 } },
      { text:'The quiet steady loyal one', scores:{ tiana:4, mulan:4, raya:3, 'snow-white':3, belle:2, aurora:2, pocahontas:2, elsa:2, meg:2, ariel:-2 } }
    ]},
    { id:'friendship_q15_touch', category:'friendship', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou keep a friendship alive when life pulls thee apart?</em>', answers:[
      { text:'Constant small things — letters, messages, "thinking of thee"', scores:{ anna:5, rapunzel:3, 'snow-white':2, cinderella:2, aurora:2 } },
      { text:'Long apart, deep when together', scores:{ belle:4, elsa:4, meg:3, raya:2, merida:2, pocahontas:2 } },
      { text:'I send something that made me think of them', scores:{ ariel:4, belle:3, rapunzel:3, jasmine:2 } },
      { text:'Honestly, I am not always good at it — I lose people', scores:{ merida:3, jasmine:2, meg:3, elsa:2 } }
    ]},
    { id:'friendship_q16_trouble', category:'friendship', type:'scenario', weight:1.5, prompt:'<em>A friend is in real trouble. It will cost thee something serious to help. What dost thou do?</em>', answers:[
      { text:'I am there. Whatever it costs me', scores:{ anna:5, mulan:4, raya:3, 'snow-white':3, tiana:2, cinderella:2 } },
      { text:'I help but wisely — recklessness helps no one', scores:{ belle:4, tiana:3, pocahontas:3, raya:2, meg:2 } },
      { text:'I help in the way I can', scores:{ elsa:4, jasmine:3, meg:3, aurora:2 } },
      { text:'I gather others — we carry it together', scores:{ moana:5, anna:3, tiana:2, mulan:1 } }
    ]},
    { id:'friendship_q17_secret', category:'friendship', type:'multipleChoice', weight:1.3, prompt:'<em>A friend tells thee a secret then asks thee not to tell anyone. But someone else needs to know. What dost thou do?</em>', answers:[
      { text:'I keep their trust — the secret is sacred', scores:{ cinderella:3, aurora:3, 'snow-white':3, anna:2, raya:-2 } },
      { text:'I go back to them and explain why someone else needs to know', scores:{ belle:5, raya:5, mulan:2, pocahontas:2 } },
      { text:'I tell them they have to tell, or I will', scores:{ raya:4, jasmine:3, merida:2, 'snow-white':-2 } },
      { text:'I sit with it carefully', scores:{ belle:3, elsa:2, pocahontas:3, meg:3 } }
    ]},
    { id:'friendship_q18_what_kind', category:'friendship', type:'multipleChoice', weight:1.4, prompt:'<em>What kind of friend art thou, <span class="name">{name}</span>?</em>', answers:[
      { text:'The warm one — I make them feel loved', scores:{ anna:5, 'snow-white':4, aurora:2, cinderella:2 } },
      { text:'The honest one — I tell them the truth', scores:{ raya:5, belle:3, mulan:2, jasmine:2, meg:2 } },
      { text:'The fun one — I am the joy in their week', scores:{ rapunzel:5, ariel:3, anna:2, merida:2 } },
      { text:'The steady one — always there, even when quiet', scores:{ elsa:4, tiana:4, mulan:3, pocahontas:3 } }
    ]},
    { id:'friendship_q19_far_away', category:'friendship', type:'multipleChoice', weight:1.2, prompt:'<em>A friend has moved far away. What dost thou feel?</em>', answers:[
      { text:'Heartbreak — I will write every week', scores:{ anna:5, rapunzel:3, 'snow-white':2, cinderella:2 } },
      { text:'Adventure — now we have somewhere new to visit', scores:{ moana:5, ariel:4, jasmine:2, merida:2 } },
      { text:'Quiet acceptance — the friendship is not the place', scores:{ elsa:4, belle:3, pocahontas:3, meg:3, aurora:2 } },
      { text:'A pull to follow — I do not love being left behind', scores:{ anna:3, merida:3, ariel:3, rapunzel:2 } }
    ]},
    { id:'friendship_q20_freetext', category:'friendship', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"My closest friend knows that I am secretly..."', placeholder:'Write thy truth, {name}', freetextTag:'friend_secret', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'friendship_q21_group', category:'friendship', type:'multipleChoice', weight:1.2, prompt:'<em>In a group of friends, what is thy role?</em>', answers:[
      { text:'The peacemaker — I notice when something is off', scores:{ 'snow-white':4, anna:3, cinderella:2, aurora:2, pocahontas:2 } },
      { text:'The one who calls everyone and makes things happen', scores:{ moana:4, jasmine:3, mulan:3, anna:2, tiana:2 } },
      { text:'The one who notices what others miss', scores:{ belle:5, pocahontas:3, meg:3, elsa:2 } },
      { text:'The bright spot — the energy', scores:{ rapunzel:5, ariel:3, anna:3 } }
    ]},
    { id:'friendship_q22_bad_for_them', category:'friendship', type:'multipleChoice', weight:1.3, prompt:'<em>A friend is doing something bad for them. They have not asked for advice. What dost thou do?</em>', answers:[
      { text:'I say something anyway — quietly, just once', scores:{ belle:4, raya:3, pocahontas:3, 'snow-white':1 } },
      { text:'I wait — they will come to me when ready', scores:{ aurora:4, elsa:3, cinderella:2, meg:2, pocahontas:2 } },
      { text:'I stay near — I will catch them when they fall', scores:{ anna:5, 'snow-white':3, cinderella:2 } },
      { text:'I confront them — they need to hear it', scores:{ raya:5, jasmine:3, mulan:2, merida:2, anna:1, 'snow-white':-2 } }
    ]},
    { id:'friendship_q23_old_self', category:'friendship', type:'multipleChoice', weight:1.3, prompt:'<em>Thou hast grown into someone different than the one thy oldest friend first knew. How dost thou hold this?</em>', answers:[
      { text:'Carefully — I want them to see who I have become', scores:{ tiana:4, belle:3, mulan:2, elsa:2 } },
      { text:'Lightly — people who love me will adjust', scores:{ anna:4, rapunzel:3, ariel:2, 'snow-white':2 } },
      { text:'Honestly — if they cannot love who I am now, that is real', scores:{ jasmine:5, merida:4, meg:3, raya:3 } },
      { text:'With wonder — I love seeing how they have changed too', scores:{ pocahontas:4, belle:3, aurora:3, moana:1 } }
    ]},
    { id:'friendship_q24_quiet', category:'friendship', type:'multipleChoice', weight:1.3, prompt:'<em>No one has reached out to thee in a while. What dost thou make of it?</em>', context:'The mirror asks gently.', answers:[
      { text:'I reach out first', scores:{ anna:5, 'snow-white':3, tiana:2, rapunzel:2 } },
      { text:'I notice but do not panic — people have their seasons', scores:{ elsa:4, aurora:3, pocahontas:3, belle:2, meg:2 } },
      { text:'I worry quietly about whether I did something wrong', scores:{ cinderella:4, 'snow-white':3, aurora:2, meg:2 } },
      { text:'I shrug — if they want me, they know where I am', scores:{ merida:4, jasmine:3, meg:3, raya:2, anna:-3 } }
    ]},
    { id:'friendship_q25_truest', category:'friendship', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is friendship at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'A second family — the one I chose, who chose me back', scores:{ anna:5, 'snow-white':3, tiana:3, rapunzel:2, raya:2 } },
      { text:'A witness — someone who has watched me become who I am', scores:{ belle:5, elsa:3, meg:3, aurora:2 } },
      { text:'A crew — the ones who go where I go', scores:{ moana:5, mulan:3, raya:3, merida:2 } },
      { text:'A small candle — someone who keeps the light on', scores:{ cinderella:4, aurora:3, 'snow-white':3, anna:2, pocahontas:2 } }
    ]}
  ],

  fun: [
    { id:'fun_v1_afternoon', category:'fun', type:'visual', weight:1.5, prompt:'<em>Thou hast a whole afternoon free. No one needs thee. Where dost thou go?</em>', answers:[
      { text:'A wildflower meadow with a blanket and books', emoji:'🌸', scores:{ aurora:5, 'snow-white':3, belle:2, cinderella:2 } },
      { text:'A bustling colorful outdoor market full of wonders', emoji:'🏮', scores:{ ariel:5, jasmine:3, belle:2, anna:2, moana:2 } },
      { text:'A wild creek in a forest — rocks, water, boots off', emoji:'🌿', scores:{ merida:5, pocahontas:4, mulan:2, raya:2, moana:1 } },
      { text:'A bright studio with an easel, paints, and music', emoji:'🎨', scores:{ rapunzel:5, belle:3, ariel:2, tiana:2 } }
    ]},
    { id:'fun_v2_game', category:'fun', type:'visual', weight:1.3, prompt:'<em>Thou and those thou lovest have a long evening. What dost thou pull off the shelf?</em>', answers:[
      { text:'A beautiful old strategy board game', emoji:'♟️', scores:{ belle:5, mulan:5, tiana:2, raya:2, elsa:2 } },
      { text:'Charades — cushions on the floor, paper slips in a hat', emoji:'🎭', scores:{ anna:5, rapunzel:4, ariel:3, 'snow-white':2 } },
      { text:'A vast jigsaw puzzle of a beautiful map', emoji:'🗺️', scores:{ belle:3, elsa:3, aurora:3, pocahontas:3 } },
      { text:'A fast chaotic card game — tokens wagered, cider spilled', emoji:'🃏', scores:{ jasmine:4, meg:5, merida:3, ariel:2, anna:1 } }
    ]},
    { id:'fun_v3_surprise', category:'fun', type:'visual', weight:1.4, prompt:'<em>Someone gives thee a surprise just because. Which wouldst thou most love?</em>', answers:[
      { text:'A massive bouquet of wildflowers', emoji:'🌻', scores:{ aurora:5, 'snow-white':3, anna:2, cinderella:2 } },
      { text:'Two ornate tickets to somewhere with mountains and stars', emoji:'🎟️', scores:{ moana:5, ariel:3, jasmine:3, merida:2, rapunzel:1 } },
      { text:'A small chest of beautiful collected oddities', emoji:'🪄', scores:{ ariel:5, rapunzel:3, belle:2, jasmine:1 } },
      { text:'A handmade gift — someone paid attention', emoji:'🎁', scores:{ belle:4, anna:3, tiana:3, aurora:2, 'snow-white':2, meg:2 } }
    ]},
    { id:'fun_v4_dance', category:'fun', type:'visual', weight:1.3, prompt:'<em>Music is playing. Thou must move. Which kind of dance is most truly thine?</em>', answers:[
      { text:'A grand ballroom at night — golden chandeliers', emoji:'✨', scores:{ cinderella:5, aurora:3, anna:2, ariel:1, merida:-3 } },
      { text:'A wild bonfire under stars — drums and fiddle, unrehearsed', emoji:'🔥', scores:{ merida:5, raya:3, mulan:2, moana:2, pocahontas:1 } },
      { text:'A sunlit meadow at golden hour — barefoot, just for myself', emoji:'🌸', scores:{ aurora:5, rapunzel:3, 'snow-white':2, pocahontas:2, belle:1 } },
      { text:'A festive courtyard strung with lanterns — everyone dances together', emoji:'🏮', scores:{ tiana:5, anna:3, rapunzel:2, ariel:2, jasmine:2, elsa:-2 } }
    ]},
    { id:'fun_q5_joy', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>When joy bubbles up inside thee, what dost thou do?</em>', answers:[
      { text:'I sing — sometimes loudly, sometimes only to myself', scores:{ ariel:5, 'snow-white':2, rapunzel:1, raya:-2 } },
      { text:'I dance or twirl without planning to', scores:{ rapunzel:4, cinderella:2, aurora:2, anna:1, elsa:-2 } },
      { text:'I run to share it with someone', scores:{ anna:5, moana:2, tiana:2, 'snow-white':1, elsa:-2 } },
      { text:'I hold it inside like something precious', scores:{ elsa:4, aurora:2, belle:1, meg:2, ariel:-2 } }
    ]},
    { id:'fun_q6_laughter', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>What is the truest laughter to thee?</em>', answers:[
      { text:'Laughter shared in a crowded room', scores:{ anna:4, tiana:3, 'snow-white':2, rapunzel:2, elsa:-2 } },
      { text:'Laughter shared with one beloved soul', scores:{ belle:4, cinderella:2, aurora:2, meg:2 } },
      { text:'Laughter alone at something only I see', scores:{ elsa:4, ariel:2, jasmine:2, meg:3, 'snow-white':-1 } },
      { text:'Laughter in the wild with no one watching', scores:{ moana:3, merida:5, raya:1, pocahontas:2 } }
    ]},
    { id:'fun_q7_alive', category:'fun', type:'multipleChoice', weight:1.4, prompt:'<em>What makes thee feel most alive, <span class="name">{name}</span>?</em>', answers:[
      { text:'Speed — the wind, something fast under me', scores:{ merida:5, moana:3, raya:2, mulan:2, jasmine:2 } },
      { text:'A new place — somewhere I have never been', scores:{ ariel:4, moana:4, jasmine:3, rapunzel:2, belle:1 } },
      { text:'A creative spark — I am making something only I can make', scores:{ rapunzel:5, belle:3, tiana:2, ariel:2 } },
      { text:'A challenge — anything I can pour myself into', scores:{ mulan:5, raya:3, tiana:2, merida:2 } }
    ]},
    { id:'fun_q8_solo_group', category:'fun', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A perfect day alone doing exactly what thou wantest — or a perfect day with thy favorite people.', answers:[
      { text:'The day alone', scores:{ elsa:5, belle:3, meg:3, jasmine:2, merida:2, pocahontas:2, anna:-3 } },
      { text:'The day with people', scores:{ anna:5, 'snow-white':4, tiana:3, cinderella:2, rapunzel:2, elsa:-3 } }
    ]},
    { id:'fun_q9_mischief', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>How much mischief is in thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'A great deal — the world needs to be poked sometimes', scores:{ merida:5, jasmine:3, ariel:3, anna:2, meg:3, 'snow-white':-2 } },
      { text:'The right amount — quietly, where it is needed', scores:{ belle:3, mulan:2, raya:2, pocahontas:2, meg:2 } },
      { text:'Almost none — I would rather not', scores:{ aurora:4, 'snow-white':4, cinderella:3, elsa:2 } },
      { text:'When it serves a good purpose — otherwise no', scores:{ tiana:3, mulan:3, raya:3, belle:2 } }
    ]},
    { id:'fun_q10_hurt', category:'fun', type:'hurt', weight:1.3, prompt:'<em>If one of these were taken from thee forever, which loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Music', scores:{ ariel:-5, rapunzel:-3, tiana:-2, anna:-1, raya:1 } },
      { text:'Stories — books, plays, films, all of it', scores:{ belle:-5, rapunzel:-2, meg:-1, elsa:-1, merida:1 } },
      { text:'Travel — never going somewhere new again', scores:{ moana:-5, ariel:-4, jasmine:-3, merida:-2, 'snow-white':1 } },
      { text:'Quiet — never having a moment alone', scores:{ elsa:-5, belle:-3, aurora:-2, meg:-3, anna:1 } }
    ]},
    { id:'fun_q11_saturday', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>Describe a perfect Saturday, <span class="name">{name}</span>.</em>', answers:[
      { text:'A long lazy morning, a beloved book, nowhere to be', scores:{ belle:5, aurora:3, elsa:2, cinderella:2, meg:2 } },
      { text:'Up early, out the door, an adventure I planned ahead', scores:{ moana:4, merida:3, jasmine:3, mulan:2, ariel:2 } },
      { text:'A whole day with the people I love — a meal, a walk, a slow evening', scores:{ anna:5, 'snow-white':3, tiana:2, cinderella:2 } },
      { text:'A whole day creating — painting, baking, building, music', scores:{ rapunzel:5, tiana:4, belle:2, ariel:2 } }
    ]},
    { id:'fun_q12_surprises', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou feel about surprises?</em>', answers:[
      { text:'I love them — surprise me always', scores:{ anna:5, ariel:4, rapunzel:3, 'snow-white':2, elsa:-3 } },
      { text:'I love giving them more than receiving', scores:{ tiana:3, 'snow-white':3, anna:2, belle:2 } },
      { text:'I tolerate them — sometimes I love them, sometimes not', scores:{ aurora:3, jasmine:2, mulan:2, meg:2 } },
      { text:'I do not love them — I would rather know', scores:{ elsa:5, belle:2, meg:3, raya:2, anna:-2 } }
    ]},
    { id:'fun_q13_risk', category:'fun', type:'multipleChoice', weight:1.3, prompt:'<em>How much of a risk-taker art thou, <span class="name">{name}</span>?</em>', answers:[
      { text:'Big risks for big joy — I would rather try and fail', scores:{ merida:5, ariel:4, moana:3, jasmine:2, 'snow-white':-2 } },
      { text:'Calculated ones — I weigh the cost first', scores:{ belle:3, mulan:4, raya:3, tiana:2, elsa:2 } },
      { text:'Small ones — the big ones make me freeze', scores:{ cinderella:3, aurora:3, 'snow-white':3, anna:2, meg:2 } },
      { text:'I avoid them if I can', scores:{ cinderella:1, 'snow-white':1, aurora:2, elsa:3, meg:2, merida:-2 } }
    ]},
    { id:'fun_q14_loud_quiet', category:'fun', type:'tradeoff', weight:1.2, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A loud joyful gathering with twenty friends — or a slow gentle afternoon with thy own thoughts and tea.', answers:[
      { text:'The loud gathering', scores:{ anna:5, rapunzel:3, ariel:3, merida:3, tiana:2, elsa:-3, belle:-2, meg:-2 } },
      { text:'The quiet afternoon', scores:{ belle:5, elsa:5, aurora:3, meg:3, pocahontas:2, anna:-3 } }
    ]},
    { id:'fun_q15_performing', category:'fun', type:'multipleChoice', weight:1.1, prompt:'<em>Wouldst thou rather be the one performing or the one watching?</em>', answers:[
      { text:'Performing — I love a stage', scores:{ ariel:5, rapunzel:4, anna:3, elsa:-3, meg:-2 } },
      { text:'Watching — I love to be moved by what others make', scores:{ belle:4, aurora:3, elsa:3, cinderella:2, pocahontas:2 } },
      { text:'Either, depending on the day', scores:{ anna:2, rapunzel:2, tiana:2, merida:2, moana:1 } },
      { text:'Neither — I would rather be doing my own thing', scores:{ merida:3, jasmine:2, meg:2, raya:2, mulan:2 } }
    ]},
    { id:'fun_q16_competitive', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>How competitive art thou?</em>', answers:[
      { text:'Very — I want to win. Always', scores:{ merida:5, raya:4, mulan:3, jasmine:3, 'snow-white':-2 } },
      { text:'I like winning but it is not the point', scores:{ tiana:3, belle:2, moana:2, rapunzel:2, ariel:2 } },
      { text:'I want everyone to have a good time', scores:{ anna:4, 'snow-white':4, cinderella:3, aurora:2 } },
      { text:'I do not love competition — I would rather create', scores:{ rapunzel:3, belle:3, aurora:2, elsa:2, pocahontas:2, meg:2 } }
    ]},
    { id:'fun_q17_wild_free', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>What does it mean to be wild and free, to thee?</em>', answers:[
      { text:'A horse — the fastest one, outrunning the wind', scores:{ merida:5, mulan:2, raya:2, jasmine:2 } },
      { text:'A boat — open water, going where I am pulled', scores:{ moana:5, ariel:3, jasmine:1, merida:1 } },
      { text:'A high cliff — the world spread out below', scores:{ pocahontas:4, merida:3, jasmine:3, rapunzel:2, moana:2 } },
      { text:'A forest — lost on purpose, the trees do not care who I am', scores:{ aurora:3, belle:3, merida:3, pocahontas:4, elsa:2, meg:2 } }
    ]},
    { id:'fun_q18_silly', category:'fun', type:'multipleChoice', weight:1.1, prompt:'<em>How silly art thou willing to be, <span class="name">{name}</span>?</em>', answers:[
      { text:'Wonderfully silly — life is too short for dignity', scores:{ anna:5, rapunzel:5, ariel:3, 'snow-white':2, elsa:-3 } },
      { text:'Quietly silly — I have a private goofy side', scores:{ belle:3, tiana:2, mulan:2, elsa:2, aurora:2, meg:2 } },
      { text:'When the moment calls but not as a default', scores:{ cinderella:3, aurora:2, jasmine:2, raya:2 } },
      { text:'I would rather be sharp than silly', scores:{ jasmine:3, raya:3, meg:3, elsa:1, rapunzel:-2 } }
    ]},
    { id:'fun_q19_alone_smile', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>What makes thee smile when no one is watching?</em>', answers:[
      { text:'A small dog, a little child — anything that does not know to be polished', scores:{ anna:4, 'snow-white':5, aurora:3, cinderella:2 } },
      { text:'Remembering something funny that happened', scores:{ rapunzel:3, anna:3, ariel:2, meg:3, merida:2 } },
      { text:'A perfect line in a book or song', scores:{ belle:5, rapunzel:2, elsa:2, aurora:2 } },
      { text:'The world being beautiful for no reason', scores:{ aurora:5, pocahontas:4, elsa:3, rapunzel:2 } }
    ]},
    { id:'fun_q20_freetext', category:'fun', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The thing that makes me happiest that almost no one knows about is..."', placeholder:'Write thy truth, {name}', freetextTag:'secret_joy', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'fun_q21_alone_time', category:'fun', type:'multipleChoice', weight:1.3, prompt:'<em>How dost thou feel about being alone, <span class="name">{name}</span>?</em>', answers:[
      { text:'I love it — it is when I am most myself', scores:{ elsa:5, meg:5, belle:3, pocahontas:2, anna:-3 } },
      { text:'I like it sometimes but I get lonely fast', scores:{ anna:4, rapunzel:3, 'snow-white':2, ariel:2, cinderella:2 } },
      { text:'I prefer company but a little quiet is good', scores:{ tiana:3, belle:2, aurora:2, cinderella:2, mulan:2 } },
      { text:'It depends — some alone is restful, some is restless', scores:{ moana:2, raya:2, merida:2, meg:2, belle:1 } }
    ]},
    { id:'fun_q22_younger', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>What did thy younger self do for fun that thou hast not done in a long time?</em>', answers:[
      { text:'Made up stories — pretended I was someone else', scores:{ belle:4, rapunzel:4, ariel:2, mulan:2 } },
      { text:'Climbed things — got dirty, came home covered in mud', scores:{ merida:5, mulan:3, raya:2, pocahontas:3, moana:2 } },
      { text:'Sang at the top of my voice when no one was around', scores:{ ariel:5, rapunzel:3, anna:2, 'snow-white':2 } },
      { text:'Built things — forts, hiding places, little worlds', scores:{ tiana:4, rapunzel:2, merida:2, anna:2 } }
    ]},
    { id:'fun_q23_grown', category:'fun', type:'multipleChoice', weight:1.2, prompt:'<em>What does fun look like for thee now, truly?</em>', answers:[
      { text:'A long evening with someone I love, talking about everything', scores:{ belle:4, anna:3, cinderella:2, aurora:2 } },
      { text:'A wild night out somewhere — loud music, strangers becoming friends', scores:{ ariel:4, rapunzel:3, jasmine:3, anna:2, merida:1 } },
      { text:'A long quiet morning with something I love to work on', scores:{ tiana:5, belle:3, raya:3, elsa:2, meg:2 } },
      { text:'Doing something I have never done before', scores:{ moana:5, ariel:3, jasmine:2, merida:2 } }
    ]},
    { id:'fun_q24_recharge', category:'fun', type:'multipleChoice', weight:1.3, prompt:'<em>How dost thou recharge when truly drained?</em>', answers:[
      { text:'Sleep — a long bath, doing nothing for a whole day', scores:{ aurora:5, elsa:3, 'snow-white':2, cinderella:2, meg:2 } },
      { text:'Movement — a long walk, outside, somewhere wild', scores:{ merida:4, pocahontas:5, moana:3, mulan:2, raya:2 } },
      { text:'The people who refill me — a meal, a laugh, a long talk', scores:{ anna:5, 'snow-white':3, cinderella:2, tiana:2, rapunzel:2 } },
      { text:'Making something — creating gives more than it takes', scores:{ rapunzel:5, tiana:3, belle:3, ariel:2 } }
    ]},
    { id:'fun_q25_truest', category:'fun', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is fun at its truest to thee, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'The pure joy of being alive in a particular moment', scores:{ anna:4, rapunzel:5, ariel:3, 'snow-white':2, aurora:2 } },
      { text:'A challenge met — a thing I did not know I could do', scores:{ mulan:5, merida:3, raya:2, tiana:2, moana:2 } },
      { text:'A door opening — a horizon I did not see this morning', scores:{ moana:5, ariel:3, jasmine:3, merida:2, belle:2 } },
      { text:'A quiet hour entirely my own', scores:{ elsa:5, belle:3, aurora:3, meg:3, pocahontas:2 } }
    ]}
  ],

weather: [
    { id:'weather_v1_sky', category:'weather', type:'visual', weight:1.5, prompt:'<em>Thou steppest outside. Which sky makes thee glad to be outside?</em>', answers:[
      { text:'A wide blue summer sky with soft golden afternoon sun', emoji:'☀️', scores:{ aurora:5, 'snow-white':3, anna:2, cinderella:2, jasmine:1 } },
      { text:'A vast dramatic sky split between dark thunderclouds and golden light', emoji:'⛈️', scores:{ moana:5, raya:3, merida:3, mulan:2, jasmine:2 } },
      { text:'A breathtaking twilight sky in deep purple, rose, and gold', emoji:'🌅', scores:{ rapunzel:5, jasmine:3, elsa:2, ariel:2, pocahontas:2 } },
      { text:'A soft silver-grey overcast sky — the kind that asks nothing of thee', emoji:'🌫️', scores:{ belle:5, elsa:3, meg:3, pocahontas:2, aurora:1 } }
    ]},
    { id:'weather_v2_storm', category:'weather', type:'visual', weight:1.4, prompt:'<em>A storm is upon thee. Thou dost not run for shelter. Which storm dost thou stand in?</em>', answers:[
      { text:'A heavy summer rainstorm in a green forest clearing — every leaf wet and shining', emoji:'🌧️', scores:{ rapunzel:4, anna:3, ariel:3, 'snow-white':2, aurora:2 } },
      { text:'A gentle but heavy snowfall in a still forest at twilight', emoji:'❄️', scores:{ elsa:5, aurora:2, 'snow-white':2, belle:3, meg:2 } },
      { text:'A wild sea storm crashing on a rocky shore at sunset', emoji:'🌊', scores:{ moana:5, ariel:2, raya:2, merida:2 } },
      { text:'A vast highland thunderstorm — lightning against deep purple-black clouds', emoji:'⚡', scores:{ merida:5, raya:3, mulan:3, pocahontas:3, jasmine:2 } }
    ]},
    { id:'weather_v3_mist', category:'weather', type:'visual', weight:1.3, prompt:'<em>Thou art the first awake. Mist hangs over the world. Which misty morning is thine?</em>', answers:[
      { text:'A wide meadow at dawn with soft golden mist and deer in the distance', emoji:'🌿', scores:{ aurora:5, 'snow-white':3, anna:2, cinderella:1, pocahontas:2 } },
      { text:'An ancient forest at first light with thick mist between the old trees', emoji:'🌲', scores:{ belle:4, pocahontas:5, aurora:2, elsa:1, meg:2 } },
      { text:'A long misty shoreline at dawn — the sea silver-grey under fog', emoji:'🌊', scores:{ moana:5, ariel:3, elsa:2, meg:2, anna:1 } },
      { text:'A high mountain valley at dawn with mist filling the lower slopes', emoji:'🏔️', scores:{ merida:5, mulan:3, raya:3, jasmine:3, elsa:2 } }
    ]},
    { id:'weather_v4_season', category:'weather', type:'visual', weight:1.3, prompt:'<em>If thou couldst live in a single season forever, which season is most truly thine?</em>', answers:[
      { text:'Spring — flowering trees, wildflowers, new beginnings', emoji:'🌸', scores:{ aurora:5, 'snow-white':3, rapunzel:2, anna:2, cinderella:2 } },
      { text:'Summer — tall grasses, bright blue lake, fireflies at dusk', emoji:'☀️', scores:{ tiana:4, ariel:3, moana:3, anna:2, rapunzel:1 } },
      { text:'Autumn — rich reds and golds, woodsmoke, beautiful change', emoji:'🍂', scores:{ belle:4, mulan:5, pocahontas:3, raya:2, meg:3 } },
      { text:'Winter — snow on every branch, frozen lake, warm cottage glow', emoji:'❄️', scores:{ elsa:5, meg:2, belle:2, aurora:1 } }
    ]},
    { id:'weather_q5_favorite', category:'weather', type:'multipleChoice', weight:1.2, prompt:'<em>What is thy favorite kind of day, <span class="name">{name}</span>?</em>', answers:[
      { text:'A bright clear day with a soft warm wind', scores:{ aurora:4, 'snow-white':3, anna:3, cinderella:2, rapunzel:1 } },
      { text:'A cold crisp day with a clear blue sky', scores:{ elsa:4, mulan:3, raya:2, merida:2, belle:1 } },
      { text:'A soft grey day with gentle rain', scores:{ belle:5, elsa:2, meg:3, pocahontas:2, anna:-2 } },
      { text:'A dramatic day with wild wind and weather changing', scores:{ moana:4, merida:3, pocahontas:3, raya:2, jasmine:1 } }
    ]},
    { id:'weather_q6_rain', category:'weather', type:'scenario', weight:1.2, prompt:'<em>It begins to rain. Hard. What dost thou do, <span class="name">{name}</span>?</em>', answers:[
      { text:'I dance in it. It is my favorite kind of magic', scores:{ rapunzel:5, ariel:3, anna:3, merida:2, 'snow-white':1 } },
      { text:'I find shelter and watch from a window with tea', scores:{ belle:5, elsa:3, aurora:3, cinderella:2, meg:2 } },
      { text:'I keep walking. Rain is just water', scores:{ moana:5, merida:3, pocahontas:3, raya:2, mulan:2 } },
      { text:'I check that those who need shelter have it', scores:{ tiana:4, 'snow-white':4, anna:3, cinderella:2, aurora:1 } }
    ]},
    { id:'weather_q7_wind', category:'weather', type:'multipleChoice', weight:1.3, prompt:'<em>What does the wind say to thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'It calls me — it tells me where I am meant to go', scores:{ moana:5, pocahontas:4, jasmine:2, merida:2, ariel:1 } },
      { text:'It carries voices — the voices of those who came before', scores:{ pocahontas:5, aurora:3, elsa:2, meg:2, belle:1 } },
      { text:'It is a partner — we move together', scores:{ merida:4, moana:3, mulan:2, raya:2, jasmine:2 } },
      { text:'It is just wind — I do not put words in its mouth', scores:{ tiana:3, raya:3, meg:3, mulan:2, cinderella:1, pocahontas:-2 } }
    ]},
    { id:'weather_q8_tradeoff', category:'weather', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A life of mostly calm with a few wild storms — or a life of constant changing weather, never the same two days.', answers:[
      { text:'Mostly calm with rare wild storms', scores:{ aurora:4, cinderella:3, 'snow-white':3, belle:2, elsa:2, tiana:2 } },
      { text:'Constant changing weather', scores:{ moana:5, ariel:3, jasmine:3, merida:3, rapunzel:2, anna:2, 'snow-white':-2 } }
    ]},
    { id:'weather_q9_mood', category:'weather', type:'multipleChoice', weight:1.2, prompt:'<em>How much does the weather affect thy mood, <span class="name">{name}</span>?</em>', answers:[
      { text:'Hugely — the sky changes me', scores:{ rapunzel:4, ariel:3, anna:3, aurora:2, 'snow-white':2 } },
      { text:'A little — I notice but I do not let it rule me', scores:{ belle:3, tiana:3, mulan:3, raya:2, cinderella:2 } },
      { text:'Barely at all — I am the same in any weather', scores:{ elsa:4, raya:3, meg:3, jasmine:2, mulan:2 } },
      { text:'I love different moods for different weather — they each have a place', scores:{ belle:3, pocahontas:3, aurora:2, moana:2, merida:1 } }
    ]},
    { id:'weather_q10_hurt', category:'weather', type:'hurt', weight:1.3, prompt:'<em>If thou must lose one kind of weather forever, which is most bearable?</em>', answers:[
      { text:'Snow', scores:{ elsa:-5, anna:-2, meg:-1, moana:1, ariel:1, tiana:1 } },
      { text:'Rain', scores:{ rapunzel:-3, belle:-2, tiana:-1, aurora:1, elsa:1 } },
      { text:'Heat and bright sun', scores:{ tiana:-3, jasmine:-3, ariel:-2, moana:-2, elsa:1, meg:1 } },
      { text:'Wind', scores:{ moana:-5, pocahontas:-4, merida:-3, jasmine:-2, cinderella:1, elsa:1 } }
    ]},
    { id:'weather_q11_first_snow', category:'weather', type:'scenario', weight:1.2, prompt:'<em>The first snow of the year is falling. What dost thou do?</em>', answers:[
      { text:'Run outside and try to catch flakes on my tongue', scores:{ anna:5, rapunzel:3, ariel:2, 'snow-white':2 } },
      { text:'Stand at the window. Watch in silence', scores:{ elsa:5, aurora:3, belle:3, meg:2, pocahontas:1 } },
      { text:'Light every fire in the house', scores:{ cinderella:3, tiana:3, 'snow-white':3, anna:2, aurora:1 } },
      { text:'Bundle up and go for a long walk in it', scores:{ merida:5, mulan:3, raya:2, pocahontas:2, belle:1 } }
    ]},
    { id:'weather_q12_fog', category:'weather', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou feel about fog, <span class="name">{name}</span>?</em>', answers:[
      { text:'I love it — the world is hiding a secret', scores:{ belle:5, rapunzel:3, aurora:3, elsa:2, pocahontas:2 } },
      { text:'I find it disorienting — I want to see clearly', scores:{ tiana:3, mulan:3, raya:5, jasmine:2, cinderella:2 } },
      { text:'I love walking in it — disappearing for a while', scores:{ elsa:5, meg:4, pocahontas:3, belle:2, merida:2 } },
      { text:'It is just weather — I do not have feelings about fog', scores:{ raya:3, mulan:2, merida:1, jasmine:2, tiana:1 } }
    ]},
    { id:'weather_q13_heat', category:'weather', type:'multipleChoice', weight:1.1, prompt:'<em>How dost thou love the heat of summer?</em>', answers:[
      { text:'I love it — I bloom in the sun', scores:{ ariel:4, rapunzel:3, jasmine:3, anna:2, moana:2, tiana:2 } },
      { text:'I tolerate it for the long evenings', scores:{ aurora:3, cinderella:2, 'snow-white':2, belle:2, tiana:1 } },
      { text:'I escape it — find shade, find water', scores:{ elsa:4, belle:3, jasmine:2, meg:3, mulan:2 } },
      { text:'I love the activity it allows — long days are working days', scores:{ tiana:5, mulan:3, merida:2, raya:2, pocahontas:2 } }
    ]},
    { id:'weather_q14_tradeoff', category:'weather', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A perfect indoor day in a cozy room with terrible weather outside — or a perfect outdoor day with everything beautiful.', answers:[
      { text:'The cozy indoor day', scores:{ belle:5, elsa:4, cinderella:3, aurora:2, meg:3, anna:1 } },
      { text:'The outdoor day', scores:{ moana:5, merida:5, ariel:3, jasmine:3, pocahontas:3, rapunzel:2, anna:2, mulan:2 } }
    ]},
    { id:'weather_q15_extreme', category:'weather', type:'multipleChoice', weight:1.2, prompt:'<em>Wouldst thou rather face extreme cold or extreme heat?</em>', answers:[
      { text:'Cold — I would rather wrap up than melt', scores:{ elsa:5, belle:3, meg:2, merida:2, raya:1 } },
      { text:'Heat — I would rather sweat than freeze', scores:{ ariel:3, jasmine:4, moana:3, tiana:3, rapunzel:2 } },
      { text:'Either — I am sturdy in both', scores:{ mulan:4, raya:5, pocahontas:3, merida:2, moana:1 } },
      { text:'Neither — I would prefer to never face either', scores:{ cinderella:3, aurora:3, 'snow-white':3, anna:2 } }
    ]},
    { id:'weather_q16_dawn_dusk', category:'weather', type:'multipleChoice', weight:1.2, prompt:'<em>Wouldst thou rather watch a sunrise or a sunset?</em>', answers:[
      { text:'Sunrise — the promise of the day not yet spent', scores:{ aurora:5, moana:3, mulan:3, tiana:2, pocahontas:2 } },
      { text:'Sunset — the day is done, and it was good', scores:{ belle:3, cinderella:3, elsa:3, aurora:2, raya:2, meg:2 } },
      { text:'Both — they make me feel very different things', scores:{ rapunzel:3, ariel:2, anna:2, jasmine:2, merida:1 } },
      { text:'I rarely watch either — I am always doing other things', scores:{ tiana:2, jasmine:2, meg:2, mulan:1, raya:1 } }
    ]},
    { id:'weather_q17_running_in', category:'weather', type:'scenario', weight:1.3, prompt:'<em>A wild storm is coming. Thou hast time to make it home — or stay outside and meet it. What dost thou do?</em>', answers:[
      { text:'Stay — I love being inside a storm', scores:{ moana:5, merida:5, raya:3, pocahontas:3, jasmine:2, anna:1 } },
      { text:'Make it home — storms are for watching from windows', scores:{ belle:4, elsa:3, cinderella:3, aurora:2, meg:2 } },
      { text:'Help others find shelter first, then decide', scores:{ 'snow-white':5, tiana:3, anna:3, mulan:2, cinderella:2 } },
      { text:'Stand at the doorway between in and out for a moment', scores:{ aurora:3, rapunzel:3, elsa:2, belle:2, meg:2 } }
    ]},
    { id:'weather_q18_aurora', category:'weather', type:'scenario', weight:1.2, prompt:'<em>The northern lights appear for the first time. What dost thou do?</em>', answers:[
      { text:'Wake everyone I love so they can see too', scores:{ anna:5, 'snow-white':3, rapunzel:3, ariel:2, tiana:1 } },
      { text:'Watch in absolute silence — this is sacred', scores:{ aurora:4, pocahontas:5, elsa:4, belle:3, meg:2 } },
      { text:'Try to capture it — paint it, write it, remember every detail', scores:{ rapunzel:5, belle:3, ariel:2, tiana:2 } },
      { text:'Stand in the cold as long as I can — make the moment last', scores:{ moana:3, merida:3, jasmine:2, raya:2, pocahontas:2 } }
    ]},
    { id:'weather_q19_memory', category:'weather', type:'multipleChoice', weight:1.1, prompt:'<em>Which weather has the strongest memory for thee?</em>', answers:[
      { text:'Warm summer rain on my childhood roof', scores:{ rapunzel:3, anna:3, 'snow-white':2, tiana:2, aurora:2 } },
      { text:'A morning where every leaf was edged in frost', scores:{ elsa:5, belle:3, meg:2, aurora:1 } },
      { text:'The smell of the sea after a storm has passed', scores:{ moana:5, ariel:3, merida:2, raya:1 } },
      { text:'Wind moving through tall grass in late summer', scores:{ pocahontas:5, merida:3, aurora:2, jasmine:1, mulan:1 } }
    ]},
    { id:'weather_q20_freetext', category:'weather', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"I am most truly myself in weather that is..."', placeholder:'Write thy truth, {name}', freetextTag:'true_weather', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'weather_q21_soft_snow', category:'weather', type:'scenario', weight:1.1, prompt:'<em>Thou art walking. Soft snow begins to fall. What is thy first thought?</em>', answers:[
      { text:'"How beautiful." I stop to look', scores:{ aurora:4, elsa:3, belle:3, 'snow-white':2, rapunzel:2 } },
      { text:'"My boots will be soaked." I keep moving', scores:{ tiana:3, mulan:3, raya:2, merida:2, jasmine:1 } },
      { text:'"I want to dance in this." I do', scores:{ anna:5, rapunzel:3, ariel:2, 'snow-white':1 } },
      { text:'"This is mine. The whole world is quiet."', scores:{ elsa:5, pocahontas:3, meg:3, aurora:2, belle:2 } }
    ]},
    { id:'weather_q22_climate_soul', category:'weather', type:'multipleChoice', weight:1.4, prompt:'<em>If thy soul had a climate, what would it be, <span class="name">{name}</span>?</em>', answers:[
      { text:'A long warm summer with golden afternoons', scores:{ anna:4, 'snow-white':3, aurora:3, tiana:2, cinderella:2 } },
      { text:'A clear cold winter — bright, sharp, beautiful, alone', scores:{ elsa:5, meg:3, raya:2, jasmine:2, merida:1 } },
      { text:'An autumn that goes on and on — change in beautiful colors', scores:{ belle:4, mulan:3, pocahontas:3, meg:2, raya:2 } },
      { text:'A wild changing sky — storms, sunshine, rainbows, all in one day', scores:{ moana:5, merida:4, ariel:3, jasmine:2, rapunzel:2 } }
    ]},
    { id:'weather_q23_seasons_change', category:'weather', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou feel when seasons change, <span class="name">{name}</span>?</em>', answers:[
      { text:'Excited — a new chapter, a new energy', scores:{ anna:4, rapunzel:3, ariel:3, moana:2, tiana:2 } },
      { text:'A little wistful — I am always saying goodbye to something', scores:{ aurora:4, belle:3, cinderella:2, meg:3, pocahontas:2 } },
      { text:'I notice it in my body before my mind does', scores:{ pocahontas:5, elsa:3, aurora:2, merida:2, belle:1 } },
      { text:'Indifferent — time passes regardless', scores:{ raya:3, meg:2, jasmine:2, mulan:2, elsa:2, anna:-2 } }
    ]},
    { id:'weather_q24_wished_for', category:'weather', type:'multipleChoice', weight:1.1, prompt:'<em>Thou couldst summon any weather for one perfect afternoon. Which?</em>', answers:[
      { text:'A warm gentle breeze and full bright sun', scores:{ aurora:4, 'snow-white':3, anna:2, cinderella:2, rapunzel:2 } },
      { text:'A wild thunderstorm and the safety of a porch', scores:{ merida:4, moana:3, raya:3, belle:2, jasmine:1 } },
      { text:'A soft snowfall and quiet hours indoors', scores:{ elsa:5, meg:3, belle:2, aurora:1 } },
      { text:'A perfect autumn day with leaves dancing in wind', scores:{ belle:4, mulan:4, pocahontas:3, meg:2, rapunzel:1 } }
    ]},
    { id:'weather_q25_truest', category:'weather', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. The weather of thy heart, most days, is what, <span class="name">{name}</span>?</em>', context:'Not what thou wishest. What is true.', answers:[
      { text:'Steady warm — I am mostly all right, mostly good', scores:{ anna:4, 'snow-white':4, tiana:3, aurora:2, cinderella:2 } },
      { text:'Cool and clear — I run on the calm side of things', scores:{ elsa:5, belle:3, pocahontas:3, raya:2, mulan:2 } },
      { text:'Changing all day — I hold many weathers at once', scores:{ rapunzel:4, ariel:3, anna:2, merida:3, moana:2, jasmine:2 } },
      { text:'A bit grey, with sun breaking through', scores:{ meg:5, cinderella:2, belle:2, elsa:1, aurora:1, raya:1 } }
    ]}
  ],

  music: [
    { id:'music_v1_instrument', category:'music', type:'visual', weight:1.5, prompt:'<em>Four instruments rest waiting. Which dost thou pick up first?</em>', answers:[
      { text:'A small standing harp of pale carved wood', emoji:'🎵', scores:{ aurora:5, cinderella:3, 'snow-white':2, rapunzel:2, anna:1 } },
      { text:'A beautifully aged violin — the marks of years of practice visible', emoji:'🎻', scores:{ belle:4, mulan:5, elsa:3, tiana:2, raya:1 } },
      { text:'A round hand-drum painted in bold geometric patterns', emoji:'🥁', scores:{ merida:5, moana:3, raya:3, jasmine:3, mulan:1 } },
      { text:'A simple wooden flute — carried in pockets for years', emoji:'🎶', scores:{ pocahontas:5, elsa:3, meg:3, belle:2, ariel:1 } }
    ]},
    { id:'music_v2_setting', category:'music', type:'visual', weight:1.4, prompt:'<em>Where dost thou most love to hear music?</em>', answers:[
      { text:'A grand concert hall — a piano center-stage in golden spotlight', emoji:'🎹', scores:{ cinderella:5, aurora:3, belle:3, elsa:2, mulan:1 } },
      { text:'A warm crowded tavern at night — fiddle in the corner, floor open for dancing', emoji:'🍺', scores:{ tiana:5, anna:3, merida:4, rapunzel:2, ariel:1 } },
      { text:'A long quiet shoreline at twilight — one guitar, a small fire', emoji:'🌊', scores:{ moana:5, ariel:3, pocahontas:3, elsa:2, meg:2 } },
      { text:'A vibrant city marketplace — drums and strings at every corner', emoji:'🏮', scores:{ jasmine:5, ariel:4, rapunzel:2, anna:1, moana:1 } }
    ]},
    { id:'music_v3_mood', category:'music', type:'visual', weight:1.4, prompt:'<em>A piece of music plays. Thou closest thine eyes. Which mood pulls thee deepest?</em>', answers:[
      { text:'Beautiful sadness — the kind that asks nothing of thee', emoji:'🌙', scores:{ belle:4, elsa:5, meg:5, aurora:2, raya:1 } },
      { text:'Triumph — a song that builds and builds to the summit', emoji:'⚔️', scores:{ mulan:5, moana:4, tiana:3, raya:3, anna:2 } },
      { text:'Tender — a love song that fills the room', emoji:'🌸', scores:{ aurora:5, 'snow-white':3, cinderella:3, anna:2, rapunzel:2 } },
      { text:'Fierce — a war-cry song roared at the dark', emoji:'🔥', scores:{ merida:5, raya:3, jasmine:4, ariel:2, mulan:1 } }
    ]},
    { id:'music_v4_memory', category:'music', type:'visual', weight:1.3, prompt:'<em>A moment when music carried thee. Which memory is most thine?</em>', answers:[
      { text:'A small bedroom at night — a music box playing softly', emoji:'🎵', scores:{ aurora:5, 'snow-white':3, anna:3, cinderella:2, rapunzel:1 } },
      { text:'A warm festive courtyard — every voice raised in song together', emoji:'🎉', scores:{ tiana:4, anna:5, rapunzel:3, jasmine:2, merida:2 } },
      { text:'A small kitchen table at dawn — humming while doing morning work', emoji:'☕', scores:{ cinderella:5, 'snow-white':3, tiana:2, belle:2, meg:2 } },
      { text:'A grand empty stage — standing in the spotlight and finding my voice held the room', emoji:'🎤', scores:{ ariel:5, rapunzel:3, mulan:2, jasmine:2, anna:1 } }
    ]},
    { id:'music_q5_first', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>What is the first kind of music thou rememberest loving, <span class="name">{name}</span>?</em>', answers:[
      { text:'A song someone I loved sang to me', scores:{ aurora:4, 'snow-white':3, anna:3, cinderella:3, rapunzel:2 } },
      { text:'A piece of music I heard somewhere far from home', scores:{ ariel:5, jasmine:3, moana:2, belle:2, merida:1 } },
      { text:'Something I made up myself before I knew what music was', scores:{ rapunzel:4, ariel:3, merida:2, pocahontas:2, anna:1 } },
      { text:'A song my people sang — old, older than me', scores:{ mulan:5, pocahontas:5, moana:3, raya:2, merida:1 } }
    ]},
    { id:'music_q6_singing_alone', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou sing when no one is listening, <span class="name">{name}</span>?</em>', answers:[
      { text:'Loud and full — I sing like the room is mine', scores:{ ariel:5, rapunzel:3, anna:2, jasmine:1 } },
      { text:'Quietly, while I work — singing keeps the work moving', scores:{ cinderella:5, 'snow-white':4, tiana:2, aurora:1 } },
      { text:'Only sometimes — when something inside has to come out', scores:{ elsa:5, meg:3, belle:2, mulan:2, pocahontas:2 } },
      { text:'I do not really sing — I am not made for it', scores:{ raya:3, mulan:1, merida:2, jasmine:2, ariel:-3 } }
    ]},
    { id:'music_q7_what_does', category:'music', type:'multipleChoice', weight:1.4, prompt:'<em>What does music do for thee, truly, <span class="name">{name}</span>?</em>', answers:[
      { text:'It moves me — I am another person inside a song', scores:{ ariel:5, rapunzel:3, jasmine:2, anna:2, elsa:2 } },
      { text:'It comforts me — it is the most reliable medicine', scores:{ cinderella:4, 'snow-white':3, aurora:3, anna:2, meg:2 } },
      { text:'It connects me to those who came before — it is older than me', scores:{ mulan:5, pocahontas:5, moana:3, raya:2, merida:1 } },
      { text:'It is a craft — the right notes in the right order is its own perfection', scores:{ belle:4, tiana:3, mulan:2, elsa:2, raya:2 } }
    ]},
    { id:'music_q8_tradeoff', category:'music', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A perfect classical concert performed by a master — or a wild firelit gathering where everyone sings together off-key.', answers:[
      { text:'The perfect concert', scores:{ cinderella:5, aurora:3, belle:3, elsa:2, mulan:2, merida:-2 } },
      { text:'The wild gathering', scores:{ merida:5, anna:5, tiana:3, moana:3, rapunzel:2, jasmine:2, ariel:2, cinderella:-3 } }
    ]},
    { id:'music_q9_lives_in', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>Where does music live in thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'In my chest — it rises when I am moved', scores:{ ariel:4, anna:3, rapunzel:3, 'snow-white':2, aurora:2 } },
      { text:'In my hands — I cannot help moving when I hear it', scores:{ rapunzel:4, merida:3, anna:3, tiana:2, ariel:2 } },
      { text:'In my throat — it lives there waiting to come out', scores:{ ariel:3, jasmine:3, rapunzel:2, 'snow-white':2, elsa:1 } },
      { text:'In my memory — tied to people, places, moments', scores:{ belle:4, aurora:3, cinderella:2, mulan:3, meg:2, pocahontas:2 } }
    ]},
    { id:'music_q10_hurt', category:'music', type:'hurt', weight:1.3, prompt:'<em>If thou must lose one of these from thy life forever, which hurts least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Singing', scores:{ ariel:-5, rapunzel:-3, 'snow-white':-2, jasmine:-1, anna:-1, raya:1 } },
      { text:'Dancing', scores:{ rapunzel:-3, anna:-3, cinderella:-2, ariel:-1, merida:-1, elsa:1 } },
      { text:'Playing an instrument', scores:{ mulan:-3, belle:-2, pocahontas:-2, aurora:-2, jasmine:1, raya:1 } },
      { text:'Hearing music at all', scores:{ ariel:-5, belle:-4, rapunzel:-3, elsa:-3, jasmine:-3, aurora:-2 } }
    ]},
    { id:'music_q11_favorite_kind', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>What is thy favorite kind of song, <span class="name">{name}</span>?</em>', answers:[
      { text:'A song that makes me want to dance', scores:{ rapunzel:4, anna:4, ariel:3, merida:2, jasmine:2 } },
      { text:'A song that makes me feel less alone', scores:{ cinderella:4, 'snow-white':3, meg:4, elsa:3, aurora:2 } },
      { text:'A song that builds and builds and breaks the heart open', scores:{ ariel:4, mulan:3, elsa:3, jasmine:2, moana:2, belle:2 } },
      { text:'A song that calls me forward and gives me courage', scores:{ moana:5, mulan:4, merida:3, raya:3, tiana:2 } }
    ]},
    { id:'music_q12_while_working', category:'music', type:'multipleChoice', weight:1.1, prompt:'<em>What music dost thou love while working?</em>', answers:[
      { text:'Something soft — I do not want to be pulled out of the work', scores:{ belle:4, elsa:3, tiana:3, aurora:2, cinderella:2 } },
      { text:'Something that drives me forward — a rhythm to match', scores:{ tiana:4, mulan:5, raya:3, merida:2, moana:1 } },
      { text:'I sing my own song while I work', scores:{ cinderella:5, 'snow-white':4, rapunzel:2, anna:1 } },
      { text:'Silence — the work is the music', scores:{ elsa:4, raya:3, pocahontas:3, meg:2, mulan:1 } }
    ]},
    { id:'music_q13_performance', category:'music', type:'scenario', weight:1.3, prompt:'<em>Thou hast been asked to perform a song at a great gathering. What is thy first feeling?</em>', answers:[
      { text:'Joy — yes! I have been waiting', scores:{ ariel:5, rapunzel:4, anna:3, jasmine:2 } },
      { text:'Dread — anything but that', scores:{ elsa:5, meg:3, belle:2, raya:2, ariel:-3 } },
      { text:'Pride — I have practiced for this', scores:{ mulan:4, tiana:3, cinderella:3, aurora:2, jasmine:2 } },
      { text:'Quiet acceptance — if they ask, I will', scores:{ aurora:3, 'snow-white':3, pocahontas:3, belle:2, cinderella:1 } }
    ]},
    { id:'music_q14_tradeoff', category:'music', type:'tradeoff', weight:1.3, prompt:'<em>Choose — the kind of musician thou wouldst be.</em>', context:'A perfect master of one beloved old song — or someone who can write new songs but never plays anyone else perfectly.', answers:[
      { text:'Master one beloved song', scores:{ mulan:5, cinderella:3, belle:2, aurora:2, tiana:2, 'snow-white':2 } },
      { text:'Write my own', scores:{ rapunzel:4, ariel:3, jasmine:3, moana:3, merida:2, pocahontas:2, anna:1 } }
    ]},
    { id:'music_q15_hummed', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>Thou hummest a song to thyself when alone. What kind?</em>', answers:[
      { text:'A bright sweet song — the kind that lifts the day', scores:{ cinderella:5, 'snow-white':4, anna:3, rapunzel:2, aurora:2 } },
      { text:'A long aching song — the kind that asks nothing of me', scores:{ elsa:4, meg:5, belle:3, jasmine:2, aurora:1 } },
      { text:'A song from somewhere far away — a place I want to go', scores:{ ariel:4, jasmine:3, moana:3, rapunzel:2, belle:1 } },
      { text:'A song so old I do not know where I learned it', scores:{ pocahontas:5, mulan:4, aurora:2, meg:2, elsa:1 } }
    ]},
    { id:'music_q16_voice', category:'music', type:'multipleChoice', weight:1.1, prompt:'<em>What kind of singing voice moves thee most, <span class="name">{name}</span>?</em>', answers:[
      { text:'A clear soaring voice that climbs the air', scores:{ ariel:5, aurora:3, cinderella:2, rapunzel:2, anna:1 } },
      { text:'A husky low voice that holds the whole room', scores:{ jasmine:4, meg:5, elsa:2, mulan:1, belle:1 } },
      { text:'A voice that is rough but full of feeling', scores:{ merida:4, raya:3, tiana:3, moana:2, meg:2 } },
      { text:'Many voices together — a choir, a chorus, a chant', scores:{ mulan:4, pocahontas:4, moana:3, anna:3, 'snow-white':2 } }
    ]},
    { id:'music_q17_memory', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou hold the songs of thy childhood?</em>', answers:[
      { text:'I sing them still — they are part of me', scores:{ cinderella:4, 'snow-white':3, aurora:3, anna:3, rapunzel:2 } },
      { text:'I hum them only when I am alone — they are private', scores:{ elsa:5, meg:4, belle:3, jasmine:2, pocahontas:2 } },
      { text:'I have built on them — they are the seed of my own music', scores:{ rapunzel:4, ariel:3, tiana:2, mulan:2, moana:1 } },
      { text:'They live in me even when I do not sing them — the body remembers', scores:{ pocahontas:5, mulan:3, raya:2, merida:2, aurora:1 } }
    ]},
    { id:'music_q18_love', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>Has music ever made thee fall in love with someone, <span class="name">{name}</span>?</em>', answers:[
      { text:'Yes — yes utterly', scores:{ ariel:5, rapunzel:4, anna:3, jasmine:2, cinderella:2, aurora:1 } },
      { text:'Almost — the song made me feel something for them', scores:{ belle:3, tiana:2, 'snow-white':2, merida:2, pocahontas:1 } },
      { text:'No, but music has made me fall in love with myself again', scores:{ elsa:5, meg:4, jasmine:3, belle:2, moana:2, merida:1 } },
      { text:'Music makes me fall in love with the world — people are part of that', scores:{ rapunzel:3, moana:3, pocahontas:3, ariel:2, aurora:2, belle:2 } }
    ]},
    { id:'music_q19_for_one', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>Wouldst thou rather play music for one beloved person or for a great crowd?</em>', answers:[
      { text:'For one beloved person — quiet, direct', scores:{ belle:4, aurora:3, elsa:3, cinderella:2, mulan:2 } },
      { text:'For a crowd — the whole room moving together', scores:{ ariel:4, anna:3, rapunzel:3, tiana:2, moana:2, merida:2, jasmine:2 } },
      { text:'For myself — the audience is incidental', scores:{ elsa:4, jasmine:3, meg:4, merida:2, pocahontas:2 } },
      { text:'For the song itself — it does not need an audience', scores:{ pocahontas:4, mulan:3, belle:2, elsa:2, raya:2 } }
    ]},
    { id:'music_q20_freetext', category:'music', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"A song that always undoes me, no matter when I hear it, is..."', placeholder:'Write thy truth, {name}', freetextTag:'undoing_song', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'music_q21_grief', category:'music', type:'multipleChoice', weight:1.3, prompt:'<em>What music dost thou turn to when thou art sad, <span class="name">{name}</span>?</em>', answers:[
      { text:'A sad song — I want it to know what I feel', scores:{ elsa:5, meg:4, belle:3, jasmine:2, aurora:2 } },
      { text:'A song that makes me dance — I will not let sorrow win', scores:{ rapunzel:4, anna:3, ariel:2, tiana:2, merida:2 } },
      { text:'A song from my childhood — something safe', scores:{ cinderella:4, 'snow-white':3, anna:3, aurora:2, rapunzel:2 } },
      { text:'No music — sometimes silence is what I need', scores:{ elsa:3, raya:3, mulan:2, pocahontas:3, meg:2 } }
    ]},
    { id:'music_q22_drum_melody', category:'music', type:'multipleChoice', weight:1.1, prompt:'<em>What part of music speaks to thee deepest, <span class="name">{name}</span>?</em>', answers:[
      { text:'The melody — the line that rises and falls', scores:{ ariel:4, aurora:3, rapunzel:2, belle:2, cinderella:2 } },
      { text:'The rhythm — the drum, the pulse', scores:{ merida:5, moana:3, raya:3, jasmine:3, tiana:2 } },
      { text:'The harmony — voices fitting together', scores:{ anna:4, 'snow-white':3, mulan:3, pocahontas:2, aurora:1 } },
      { text:'The silence between the notes', scores:{ elsa:5, belle:3, meg:3, pocahontas:2, raya:1 } }
    ]},
    { id:'music_q23_by_heart', category:'music', type:'multipleChoice', weight:1.1, prompt:'<em>What songs dost thou know by heart, <span class="name">{name}</span>?</em>', answers:[
      { text:'The songs of my home — the ones everyone there sings', scores:{ anna:4, 'snow-white':3, cinderella:2, mulan:3, pocahontas:3 } },
      { text:'The songs of the wide world — I have collected them', scores:{ ariel:5, jasmine:3, moana:2, belle:2, merida:1 } },
      { text:'The songs that match my own feelings — sad ones mostly', scores:{ elsa:4, meg:5, belle:2, aurora:1 } },
      { text:'A few — the ones I have built my life around', scores:{ tiana:4, mulan:3, raya:3, cinderella:2, aurora:2 } }
    ]},
    { id:'music_q24_body', category:'music', type:'multipleChoice', weight:1.2, prompt:'<em>How does thy body respond to music, <span class="name">{name}</span>?</em>', answers:[
      { text:'I cannot stay still — my feet move, my hands tap', scores:{ anna:5, rapunzel:4, merida:3, ariel:3, tiana:2 } },
      { text:'I close my eyes — I go inward', scores:{ elsa:5, belle:3, meg:3, aurora:2, pocahontas:2 } },
      { text:'I want to sing along — always', scores:{ ariel:4, rapunzel:3, 'snow-white':3, jasmine:2, anna:2 } },
      { text:'I notice, I feel — but I do not always show it', scores:{ raya:4, mulan:3, jasmine:2, cinderella:3, meg:2 } }
    ]},
    { id:'music_q25_truest', category:'music', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is music to thee, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'A way of feeling more than I have words for', scores:{ ariel:5, rapunzel:3, jasmine:2, anna:2, belle:1 } },
      { text:'A way of being together with people who matter', scores:{ anna:5, 'snow-white':3, tiana:3, cinderella:2, mulan:2, pocahontas:2 } },
      { text:'A way of remembering who I am when the world tries to make me forget', scores:{ elsa:5, mulan:5, jasmine:3, raya:2, meg:2, merida:2 } },
      { text:'A way of speaking to what is older than me, and what comes after', scores:{ pocahontas:5, aurora:3, elsa:2, belle:2, moana:2, mulan:1 } }
    ]}
  ],

  books: [
    { id:'books_v1_shelf', category:'books', type:'visual', weight:1.5, prompt:'<em>Thou enterest a great library and walkest the shelves. One book leans toward thee. Which is it?</em>', answers:[
      { text:'A beautiful old leather book with an embossed castle and roses — fairy tales and old enchantments', emoji:'🌹', scores:{ aurora:5, 'snow-white':3, cinderella:3, anna:2, rapunzel:2 } },
      { text:'A heavy thick book bound in dark leather — histories and legends, a map folded inside', emoji:'📜', scores:{ belle:5, mulan:3, raya:3, pocahontas:2, elsa:2 } },
      { text:'A slim volume bound in soft green cloth with pressed flowers tucked in — poems and small truths', emoji:'🌿', scores:{ belle:3, elsa:4, meg:5, aurora:2, rapunzel:2, pocahontas:2 } },
      { text:'A worn travel-stained book with a compass on the cover — voyages and far-off places', emoji:'🧭', scores:{ ariel:5, jasmine:5, moana:3, merida:2, belle:2 } }
    ]},
    { id:'books_v2_place', category:'books', type:'visual', weight:1.4, prompt:'<em>Thou hast a book and a free hour. Where dost thou go to read?</em>', answers:[
      { text:'A deep cushioned window-seat with embroidered pillows, a teacup on the sill', emoji:'🪟', scores:{ belle:5, aurora:2, cinderella:2, elsa:2, anna:1 } },
      { text:'A massive ancient tree in a meadow — a wide low branch perfectly suited for sitting', emoji:'🌳', scores:{ aurora:4, merida:5, pocahontas:3, rapunzel:2, belle:2 } },
      { text:'A small private alcove deep in a great library — floor-to-ceiling shelves, a velvet armchair', emoji:'📚', scores:{ belle:4, elsa:5, meg:3, mulan:2, raya:1 } },
      { text:'A flat warm rock at the edge of a quiet sea cove', emoji:'🌊', scores:{ moana:5, ariel:3, jasmine:2, pocahontas:2, rapunzel:1 } }
    ]},
    { id:'books_v3_ending', category:'books', type:'visual', weight:1.4, prompt:'<em>A story can end many ways. Which ending stays with thee longest?</em>', answers:[
      { text:'A long road toward a magnificent sunrise — "now everything begins anew"', emoji:'🌅', scores:{ rapunzel:5, ariel:3, moana:3, anna:2, tiana:2 } },
      { text:'A simple ornate doorway in a meadow — "and then they walked through together"', emoji:'🚪', scores:{ cinderella:5, aurora:3, anna:3, belle:2, 'snow-white':1 } },
      { text:'A lamp burning in a window, an empty rocking chair — "the heart is at peace, the work is done"', emoji:'🕯️', scores:{ aurora:3, elsa:4, meg:5, belle:3, pocahontas:2 } },
      { text:'A fortress at dawn after a long siege — "she stood and she did not break"', emoji:'⚔️', scores:{ mulan:5, raya:5, merida:3, jasmine:2, moana:1 } }
    ]},
    { id:'books_v4_companion', category:'books', type:'visual', weight:1.3, prompt:'<em>Thou art reading. Something is beside thee. Which companion is most truly thine?</em>', answers:[
      { text:'A delicate teacup steaming nearby — the companion of warmth and care', emoji:'🍵', scores:{ belle:4, aurora:3, 'snow-white':3, cinderella:2, elsa:2 } },
      { text:'A sleepy small cat curled just on the corner of the page', emoji:'🐱', scores:{ belle:3, aurora:3, anna:2, cinderella:3, 'snow-white':2, meg:3 } },
      { text:'A beautiful fountain pen and leather journal — one who reads to write', emoji:'✒️', scores:{ belle:5, mulan:3, tiana:3, raya:2, jasmine:2, meg:2 } },
      { text:'A small wooden instrument resting beside — one who reads then plays', emoji:'🎵', scores:{ ariel:5, rapunzel:4, pocahontas:3, jasmine:1, moana:1 } }
    ]},
    { id:'books_q5_kind', category:'books', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of book pulls thee most often, <span class="name">{name}</span>?</em>', answers:[
      { text:'A great sweeping adventure across many lands', scores:{ ariel:4, jasmine:5, moana:3, merida:2, belle:2 } },
      { text:'A quiet story about a small life lived deeply', scores:{ aurora:4, 'snow-white':3, belle:3, cinderella:2, meg:2 } },
      { text:'A real history — a real life — the truth, not the made-up', scores:{ mulan:5, raya:4, belle:3, pocahontas:2, jasmine:2 } },
      { text:'A book of poems or short pieces I can carry in my pocket', scores:{ belle:3, elsa:4, meg:4, aurora:2, pocahontas:2, rapunzel:2 } }
    ]},
    { id:'books_q6_how_reads', category:'books', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou read a book, <span class="name">{name}</span>?</em>', answers:[
      { text:'Slowly — every page. I do not skip', scores:{ belle:5, mulan:3, tiana:2, aurora:2, raya:2 } },
      { text:'In great rushes — a whole night sometimes', scores:{ ariel:4, rapunzel:3, anna:3, jasmine:2, merida:2 } },
      { text:'In and out — a few pages here, a chapter there', scores:{ tiana:2, jasmine:3, meg:3, moana:2, raya:1 } },
      { text:'I mark passages — I reread the ones that change me', scores:{ belle:4, elsa:3, pocahontas:3, meg:3, aurora:2 } }
    ]},
    { id:'books_q7_changed', category:'books', type:'multipleChoice', weight:1.4, prompt:'<em>What kind of book has changed thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'One that showed me a life I did not know was possible', scores:{ belle:5, jasmine:3, ariel:3, moana:2, merida:2, rapunzel:2 } },
      { text:'One that made me feel less alone in a hard time', scores:{ cinderella:4, 'snow-white':3, meg:5, elsa:3, aurora:2 } },
      { text:'One that taught me how to do something I needed to do', scores:{ tiana:5, mulan:4, belle:2, raya:3, pocahontas:1 } },
      { text:'One that made me look at my own life differently', scores:{ belle:3, elsa:3, jasmine:3, merida:2, pocahontas:3, meg:2 } }
    ]},
    { id:'books_q8_tradeoff', category:'books', type:'tradeoff', weight:1.2, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A short book thou wilt finish today and remember always — or a long sprawling book thou wilt live inside for a month.', answers:[
      { text:'The short book', scores:{ tiana:3, mulan:3, raya:3, meg:3, jasmine:2, merida:2 } },
      { text:'The long sprawling book', scores:{ belle:5, rapunzel:3, ariel:3, aurora:2, elsa:2, anna:2 } }
    ]},
    { id:'books_q9_bedside', category:'books', type:'multipleChoice', weight:1.2, prompt:'<em>What is on thy bedside table right now, <span class="name">{name}</span>?</em>', answers:[
      { text:'A great fat novel I am halfway through', scores:{ belle:5, rapunzel:2, ariel:2, elsa:2, anna:1 } },
      { text:'A short collection of poems I read one at a time', scores:{ aurora:3, elsa:4, meg:4, belle:3, pocahontas:2 } },
      { text:'A book about something practical I am learning', scores:{ tiana:5, mulan:3, raya:3, belle:2, merida:1 } },
      { text:'Honestly, a stack — I do not read just one at a time', scores:{ belle:3, jasmine:4, ariel:3, rapunzel:2, merida:2 } }
    ]},
    { id:'books_q10_hurt', category:'books', type:'hurt', weight:1.3, prompt:'<em>If one of these were taken from thy life forever, which loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Fairy tales and old stories', scores:{ aurora:-3, 'snow-white':-3, cinderella:-2, anna:-1, raya:1 } },
      { text:'Histories and biographies', scores:{ mulan:-3, belle:-3, raya:-3, pocahontas:-2, jasmine:-1 } },
      { text:'Poetry', scores:{ belle:-3, elsa:-3, meg:-4, aurora:-2, pocahontas:-2, merida:1 } },
      { text:'Adventure stories', scores:{ ariel:-5, jasmine:-4, moana:-3, merida:-3, rapunzel:-1 } }
    ]},
    { id:'books_q11_character', category:'books', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of character in a book pulls thee in deepest?</em>', answers:[
      { text:'Someone fighting against odds with quiet courage', scores:{ cinderella:4, mulan:5, 'snow-white':3, raya:3, tiana:2 } },
      { text:'Someone clever and curious who outthinks everyone', scores:{ belle:5, jasmine:4, meg:3, elsa:2, merida:1 } },
      { text:'Someone bold and free who refuses to be small', scores:{ jasmine:5, merida:5, ariel:3, moana:3, raya:1 } },
      { text:'Someone gentle who holds the world together', scores:{ aurora:4, 'snow-white':4, anna:3, cinderella:2, pocahontas:2 } }
    ]},
    { id:'books_q12_when_reads', category:'books', type:'multipleChoice', weight:1.1, prompt:'<em>When dost thou read most, <span class="name">{name}</span>?</em>', answers:[
      { text:'Late at night when the world is quiet', scores:{ belle:4, elsa:3, meg:3, jasmine:2, rapunzel:2 } },
      { text:'In small stolen moments — between things, in waiting', scores:{ tiana:3, mulan:3, jasmine:3, cinderella:2, raya:2 } },
      { text:'On long lazy afternoons with nowhere to be', scores:{ aurora:5, belle:3, anna:2, 'snow-white':2, rapunzel:1 } },
      { text:'When traveling — books are how I find my way', scores:{ ariel:3, moana:5, jasmine:3, belle:2, merida:1 } }
    ]},
    { id:'books_q13_aloud', category:'books', type:'multipleChoice', weight:1.2, prompt:'<em>Wouldst thou rather read a book to a child than read it alone?</em>', answers:[
      { text:'Yes — the reading is half the gift', scores:{ anna:5, 'snow-white':4, aurora:3, cinderella:3, tiana:1 } },
      { text:'Sometimes — with the right book and the right child', scores:{ belle:4, rapunzel:2, pocahontas:3, 'snow-white':1, aurora:2 } },
      { text:'I prefer to read alone — the book is between me and the page', scores:{ elsa:5, meg:3, belle:2, raya:2, merida:1 } },
      { text:'I tell stories better than I read them — the book limits me', scores:{ moana:4, jasmine:3, merida:3, ariel:2, pocahontas:2 } }
    ]},
    { id:'books_q14_tradeoff', category:'books', type:'tradeoff', weight:1.2, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A book that is centuries old, that countless souls have read before thee — or a book just written, that almost no one has read yet.', answers:[
      { text:'The ancient book', scores:{ belle:4, mulan:4, pocahontas:5, aurora:3, elsa:2, raya:2 } },
      { text:'The brand-new book', scores:{ ariel:5, jasmine:3, rapunzel:3, merida:2, moana:2, anna:2 } }
    ]},
    { id:'books_q15_keep', category:'books', type:'multipleChoice', weight:1.2, prompt:'<em>What kind of book wouldst thou keep on thy shelf forever, <span class="name">{name}</span>?</em>', answers:[
      { text:'A book my mother or father loved', scores:{ cinderella:5, anna:3, aurora:2, 'snow-white':2, mulan:2 } },
      { text:'A book a true friend gave me, with their note inside', scores:{ anna:4, belle:3, rapunzel:2, 'snow-white':2, tiana:1 } },
      { text:'A book I built my life around — the one I quote without knowing', scores:{ tiana:4, belle:5, mulan:3, raya:2, elsa:2 } },
      { text:'A book I have not yet finished — I want to wait', scores:{ aurora:3, belle:2, meg:3, elsa:2, rapunzel:2, jasmine:1 } }
    ]},
    { id:'books_q16_dark_times', category:'books', type:'multipleChoice', weight:1.3, prompt:'<em>What book dost thou turn to in dark times, <span class="name">{name}</span>?</em>', answers:[
      { text:'A childhood favorite — something safe and known', scores:{ cinderella:4, 'snow-white':3, anna:3, aurora:3, rapunzel:2 } },
      { text:'Something honest about loss — something that knows', scores:{ elsa:4, meg:5, belle:3, raya:2, pocahontas:2 } },
      { text:'Something that takes me far away from where I am', scores:{ ariel:5, jasmine:3, rapunzel:3, moana:3, merida:1 } },
      { text:'Something that teaches me — I want to come back stronger', scores:{ tiana:4, mulan:5, raya:4, belle:2, merida:2 } }
    ]},
    { id:'books_q17_reading_to', category:'books', type:'multipleChoice', weight:1.1, prompt:'<em>Wouldst thou rather read a book or have it read to thee?</em>', answers:[
      { text:'Read it — the page is between me and the story', scores:{ belle:5, elsa:4, jasmine:2, raya:2, meg:2 } },
      { text:'Be read to — by the right voice it is a different magic', scores:{ aurora:4, 'snow-white':3, anna:3, cinderella:3, rapunzel:2 } },
      { text:'Either — the story is the same', scores:{ ariel:2, moana:2, merida:2, tiana:2, pocahontas:2 } },
      { text:'I prefer to read to others', scores:{ anna:5, 'snow-white':3, tiana:3, aurora:2, cinderella:1 } }
    ]},
    { id:'books_q18_worth_reading', category:'books', type:'multipleChoice', weight:1.3, prompt:'<em>What makes a book worth reading to thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'It teaches me something I did not know', scores:{ belle:4, mulan:3, tiana:3, raya:3, pocahontas:2 } },
      { text:'It moves me — I weep, I laugh, my heart is changed', scores:{ ariel:4, rapunzel:3, anna:3, aurora:2, meg:3 } },
      { text:'It shows me a life I want to remember when mine is hard', scores:{ cinderella:4, 'snow-white':3, jasmine:3, merida:2, moana:2 } },
      { text:'It says the thing I have always known but could not name', scores:{ elsa:5, belle:3, meg:4, jasmine:2, pocahontas:2 } }
    ]},
    { id:'books_q19_too_many', category:'books', type:'scenario', weight:1.1, prompt:'<em>Thou enterest a small bookshop. Thou couldst leave with five books or one. What dost thou choose?</em>', answers:[
      { text:'Five — always five. I will read them all eventually', scores:{ belle:5, jasmine:4, ariel:3, rapunzel:2, merida:1 } },
      { text:'One — the right one, found carefully', scores:{ cinderella:3, aurora:3, 'snow-white':3, elsa:3, meg:2, raya:2 } },
      { text:'I cannot leave without buying something for someone else', scores:{ anna:5, 'snow-white':3, belle:2, tiana:2, aurora:1 } },
      { text:'I do not buy — I remember what I want and find it later', scores:{ tiana:3, mulan:3, raya:3, jasmine:1, pocahontas:2 } }
    ]},
    { id:'books_q20_freetext', category:'books', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"A book I would put into the hands of every person I love is..."', placeholder:'Write thy truth, {name}', freetextTag:'book_for_loved', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'books_q21_afraid', category:'books', type:'multipleChoice', weight:1.2, prompt:'<em>Is there a book thou hast been almost afraid to read, <span class="name">{name}</span>?</em>', context:'A book that thou knowest will undo thee in some way.', answers:[
      { text:'Yes — I am building courage to open it', scores:{ belle:4, elsa:3, meg:5, raya:2, mulan:2 } },
      { text:'I do not let books frighten me — I read whatever calls', scores:{ ariel:4, jasmine:4, merida:3, moana:2, rapunzel:1 } },
      { text:'No — I read for joy. I do not need to be undone', scores:{ aurora:3, 'snow-white':4, cinderella:3, anna:2, rapunzel:2 } },
      { text:'I have read it already — some books need to find thee at the right time', scores:{ belle:3, pocahontas:4, elsa:2, meg:2, aurora:1 } }
    ]},
    { id:'books_q22_meaning', category:'books', type:'multipleChoice', weight:1.4, prompt:'<em>What does reading mean to thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'A way out of where I am — a door', scores:{ belle:5, rapunzel:4, ariel:3, jasmine:3, meg:1 } },
      { text:'A way of being in a wiser mind for an hour', scores:{ belle:3, elsa:3, mulan:3, pocahontas:3, raya:2 } },
      { text:'A way of being less alone in the world', scores:{ cinderella:4, 'snow-white':3, meg:5, aurora:2, anna:2 } },
      { text:'A way of preparing — books teach me how to live', scores:{ tiana:5, mulan:4, raya:3, belle:2, merida:1 } }
    ]},
    { id:'books_q23_or_movies', category:'books', type:'multipleChoice', weight:1.1, prompt:'<em>Books or stories told some other way — plays, films, songs?</em>', answers:[
      { text:'Books — the page is sacred, the voice in my own head matters', scores:{ belle:5, elsa:3, meg:3, jasmine:2, aurora:2 } },
      { text:'Whatever the story is best told as', scores:{ rapunzel:3, ariel:3, tiana:3, belle:2, moana:2, pocahontas:2 } },
      { text:'Stories told aloud — there is something old about being told', scores:{ pocahontas:5, anna:3, moana:3, mulan:3, aurora:2 } },
      { text:'Songs — stories set to music are the truest of all', scores:{ ariel:5, rapunzel:3, jasmine:2, 'snow-white':2, merida:1 } }
    ]},
    { id:'books_q24_shop_library', category:'books', type:'multipleChoice', weight:1.1, prompt:'<em>Wouldst thou rather wander a bookshop or wander a great library?</em>', answers:[
      { text:'A bookshop — I want to take some home', scores:{ belle:4, anna:3, jasmine:3, rapunzel:2, ariel:2, merida:2 } },
      { text:'A great library — the books staying on the shelves matters', scores:{ belle:3, elsa:5, mulan:3, raya:2, pocahontas:2, meg:2 } },
      { text:'A used bookshop — every book has been loved before', scores:{ belle:3, aurora:3, meg:5, cinderella:3, anna:1 } },
      { text:'A bookshop in a far country with books in languages I cannot read', scores:{ ariel:5, jasmine:4, moana:3, belle:2, merida:1 } }
    ]},
    { id:'books_q25_truest', category:'books', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is reading to thee, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'The deepest joy I know — there is no medicine like a good book', scores:{ belle:5, rapunzel:3, aurora:2, elsa:2, meg:2, jasmine:1 } },
      { text:'A way of becoming larger than my own one life', scores:{ belle:3, jasmine:5, ariel:4, moana:3, merida:2, rapunzel:2, pocahontas:2 } },
      { text:'A way of remembering what matters when life makes me forget', scores:{ mulan:5, elsa:3, raya:3, tiana:2, 'snow-white':2, aurora:1 } },
      { text:'A way of being kept company by people who came before', scores:{ pocahontas:4, aurora:3, meg:4, belle:2, cinderella:3, anna:1 } }
    ]}
  ],

  travel: [
    { id:'travel_v1_road', category:'travel', type:'visual', weight:1.5, prompt:'<em>Thou standest at a crossroads. Four roads stretch before thee. Which dost thou take?</em>', answers:[
      { text:'A winding stone path rising into towering snow-capped mountains', emoji:'🏔️', scores:{ merida:5, mulan:3, raya:3, jasmine:2, elsa:2, pocahontas:1 } },
      { text:'A long curving coastal road following the edge of a vast sea', emoji:'🌊', scores:{ moana:5, ariel:4, jasmine:2, raya:1, merida:1 } },
      { text:'A soft mossy path winding into an ancient forest', emoji:'🌲', scores:{ pocahontas:5, aurora:4, belle:3, merida:2, 'snow-white':2 } },
      { text:'A welcoming country lane leading toward a small village in a green valley', emoji:'🏡', scores:{ 'snow-white':5, anna:4, cinderella:3, tiana:2, aurora:1 } }
    ]},
    { id:'travel_v2_place', category:'travel', type:'visual', weight:1.4, prompt:'<em>In a great map before thee, four distant places call. Which dost thou choose?</em>', answers:[
      { text:'A magnificent desert city of sandstone domes and gold-tipped towers', emoji:'🏜️', scores:{ jasmine:5, raya:2, mulan:1, ariel:2, merida:1 } },
      { text:'Magnificent ancient ruins half-overgrown with vines on a misty mountainside', emoji:'🏛️', scores:{ belle:4, mulan:5, pocahontas:3, raya:3, elsa:2 } },
      { text:'A small green tropical island — turquoise water, warm fire on a beach', emoji:'🌴', scores:{ moana:5, ariel:3, merida:2, pocahontas:2, aurora:1 } },
      { text:'A vast lively city at twilight — bridges, markets, a great river winding through', emoji:'🏙️', scores:{ tiana:5, ariel:4, jasmine:3, anna:3, belle:2 } }
    ]},
    { id:'travel_v3_companion', category:'travel', type:'visual', weight:1.3, prompt:'<em>Thou must travel far. One companion may go with thee. Who dost thou choose?</em>', answers:[
      { text:'One steady beloved companion — two bedrolls, a kettle, a worn journal', emoji:'🌿', scores:{ anna:5, 'snow-white':3, cinderella:3, tiana:2, mulan:2, aurora:2 } },
      { text:'A loud merry band of friends — campfire, instruments, the warm chaos', emoji:'🎵', scores:{ rapunzel:4, anna:4, ariel:3, moana:2, merida:3, tiana:2 } },
      { text:'A stranger met along the way — tea on a bench, whoever happens by', emoji:'☕', scores:{ ariel:5, jasmine:3, belle:3, moana:2, pocahontas:2 } },
      { text:'Only myself — one bedroll, one fire, one journal', emoji:'🌙', scores:{ elsa:5, meg:4, raya:3, jasmine:2, merida:2, mulan:1 } }
    ]},
    { id:'travel_v4_way', category:'travel', type:'visual', weight:1.3, prompt:'<em>In a great window thou seest four ways to travel. Which is most truly thine?</em>', answers:[
      { text:'A beautiful tall sailing ship at dawn — sails raised, the ocean mirror-still', emoji:'⛵', scores:{ moana:5, ariel:4, jasmine:2, merida:1, pocahontas:1 } },
      { text:'A magnificent horse standing alert at the edge of a wide meadow at dawn', emoji:'🐎', scores:{ merida:5, mulan:4, raya:3, pocahontas:2, jasmine:2, anna:1 } },
      { text:'A simple walking-staff leaning against a stone marker, boots set neatly beside it', emoji:'🥾', scores:{ belle:3, pocahontas:5, mulan:2, aurora:2, 'snow-white':2, meg:1 } },
      { text:'An elegant horse-drawn coach with brass-trimmed lanterns and crimson velvet curtains', emoji:'🪙', scores:{ cinderella:5, aurora:3, anna:2, 'snow-white':2, ariel:1 } }
    ]},
    { id:'travel_q5_kind', category:'travel', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of journey is most truly thine, <span class="name">{name}</span>?</em>', answers:[
      { text:'A long unknown one — somewhere I have never been', scores:{ moana:5, ariel:4, jasmine:3, merida:2, rapunzel:2 } },
      { text:'A return — back to a place I love deeply, again and again', scores:{ aurora:4, 'snow-white':5, cinderella:3, anna:3, tiana:1 } },
      { text:'A slow careful one — one place, deeply seen', scores:{ belle:5, pocahontas:4, elsa:3, meg:3, raya:2 } },
      { text:'A purposeful one — I am going somewhere for a reason', scores:{ mulan:5, tiana:3, raya:4, jasmine:2, merida:1 } }
    ]},
    { id:'travel_q6_packing', category:'travel', type:'multipleChoice', weight:1.1, prompt:'<em>How dost thou pack for a journey, <span class="name">{name}</span>?</em>', answers:[
      { text:'Carefully and ahead — lists, plans, nothing forgotten', scores:{ tiana:5, mulan:4, cinderella:3, belle:2, raya:2 } },
      { text:'Light — the less I carry, the freer I am', scores:{ moana:4, merida:5, raya:3, jasmine:3, pocahontas:2 } },
      { text:'Last minute — whatever I grab is what I have', scores:{ anna:4, ariel:3, rapunzel:2, meg:2, merida:1 } },
      { text:'I bring books — always too many books', scores:{ belle:5, jasmine:2, rapunzel:3, elsa:2, aurora:1 } }
    ]},
    { id:'travel_q7_arrival', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>When thou arrivest somewhere new, what dost thou do first?</em>', answers:[
      { text:'Walk — I want to feel the place before anyone tells me about it', scores:{ pocahontas:5, jasmine:3, belle:3, moana:2, merida:2 } },
      { text:'Find food — sit down, watch how the locals live', scores:{ tiana:4, belle:3, jasmine:3, moana:2, ariel:2 } },
      { text:'Go to the highest place — see the whole layout', scores:{ merida:4, mulan:4, raya:3, jasmine:2, moana:2 } },
      { text:'Find a quiet corner first — settle myself', scores:{ elsa:5, aurora:3, 'snow-white':2, meg:3, cinderella:2 } }
    ]},
    { id:'travel_q8_tradeoff', category:'travel', type:'tradeoff', weight:1.5, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A single trip somewhere wholly new and far — or many trips back to one beloved place thou already knowest.', answers:[
      { text:'The single new far journey', scores:{ moana:5, ariel:4, jasmine:4, merida:3, rapunzel:2, belle:2, 'snow-white':-2 } },
      { text:'The many returns to a beloved place', scores:{ aurora:5, 'snow-white':5, cinderella:4, anna:3, tiana:3, jasmine:-2, moana:-2 } }
    ]},
    { id:'travel_q9_misses', category:'travel', type:'multipleChoice', weight:1.3, prompt:'<em>When thou art far from home, what dost thou miss most?</em>', answers:[
      { text:'The people — their voices, their faces', scores:{ anna:5, 'snow-white':3, cinderella:3, tiana:2, aurora:2 } },
      { text:'A particular place — a chair, a window, a corner of a room', scores:{ belle:4, aurora:3, elsa:3, meg:2, cinderella:2 } },
      { text:'The food — the taste of being home', scores:{ tiana:5, 'snow-white':3, anna:2, jasmine:1 } },
      { text:'Nothing — the road is its own home', scores:{ moana:5, ariel:3, jasmine:3, merida:3, rapunzel:1 } }
    ]},
    { id:'travel_q10_hurt', category:'travel', type:'hurt', weight:1.3, prompt:'<em>If thou must lose one of these forever, which loss is most bearable?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Far travel — never going somewhere very new again', scores:{ moana:-5, ariel:-4, jasmine:-3, merida:-2, 'snow-white':1, cinderella:1 } },
      { text:'Returning home — always being somewhere new', scores:{ 'snow-white':-5, cinderella:-4, aurora:-3, anna:-3, tiana:-2, moana:1 } },
      { text:'Familiar paths — always exploring', scores:{ aurora:-3, belle:-2, cinderella:-2, 'snow-white':-2, merida:1 } },
      { text:'Quiet at home — always needing to move', scores:{ elsa:-3, belle:-3, aurora:-3, meg:-2, moana:1, merida:1 } }
    ]},
    { id:'travel_q11_lost', category:'travel', type:'scenario', weight:1.2, prompt:'<em>Thou hast become lost in a strange place. What dost thou feel first?</em>', answers:[
      { text:'Excitement — this is the best part of being somewhere new', scores:{ rapunzel:4, ariel:4, jasmine:3, merida:3, moana:2 } },
      { text:'Calm — I will figure it out. I always do', scores:{ mulan:5, raya:4, tiana:3, belle:2, elsa:2, pocahontas:2 } },
      { text:'Frustration — I should have planned better', scores:{ tiana:3, cinderella:3, mulan:1, meg:2 } },
      { text:'A small panic, but I do not show it', scores:{ cinderella:3, 'snow-white':3, aurora:2, anna:2, elsa:1 } }
    ]},
    { id:'travel_q12_tradeoff', category:'travel', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A perfect journey alone — or a perfect journey with the people thou lovest.', answers:[
      { text:'The journey alone', scores:{ elsa:5, jasmine:3, meg:4, merida:3, pocahontas:2, raya:2, anna:-3 } },
      { text:'The journey with loved ones', scores:{ anna:5, 'snow-white':4, cinderella:3, tiana:2, aurora:2, rapunzel:2, elsa:-3 } }
    ]},
    { id:'travel_q13_traveler', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>What kind of traveler art thou, <span class="name">{name}</span>?</em>', answers:[
      { text:'The careful planner — I know everything before I leave', scores:{ tiana:5, mulan:4, belle:2, raya:2, cinderella:1 } },
      { text:'The bold improviser — I figure it out as I go', scores:{ moana:4, jasmine:3, merida:5, ariel:3, rapunzel:2 } },
      { text:'The deep observer — I see what others miss', scores:{ belle:5, pocahontas:4, elsa:3, meg:2, aurora:2 } },
      { text:'The cheerful companion — wherever we go, we make it good', scores:{ anna:5, 'snow-white':3, rapunzel:2, tiana:2, aurora:1 } }
    ]},
    { id:'travel_q14_brings_home', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>What dost thou bring home from a journey, <span class="name">{name}</span>?</em>', answers:[
      { text:'Small treasures — pebbles, leaves, things that mean nothing to anyone but me', scores:{ ariel:5, rapunzel:3, pocahontas:3, belle:2, aurora:1 } },
      { text:'Stories — I am full of stories I cannot wait to tell', scores:{ anna:4, moana:4, ariel:3, jasmine:2, rapunzel:2 } },
      { text:'New skills — things I learned how to do', scores:{ tiana:4, mulan:5, raya:3, belle:2, merida:1 } },
      { text:'Quiet — a different kind of self came home', scores:{ elsa:5, meg:3, pocahontas:3, belle:2, aurora:1 } }
    ]},
    { id:'travel_q15_homesick', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>Dost thou get homesick easily, <span class="name">{name}</span>?</em>', answers:[
      { text:'Almost immediately — I love home', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:1 } },
      { text:'After a long while — the new place can hold me a long time', scores:{ ariel:3, jasmine:3, belle:3, rapunzel:2, merida:2 } },
      { text:'Almost never — the road is also home', scores:{ moana:5, merida:4, jasmine:3, raya:2, pocahontas:2 } },
      { text:'It depends — for people, fast. For places, never', scores:{ belle:3, elsa:3, meg:3, mulan:2, pocahontas:1 } }
    ]},
    { id:'travel_q16_daily', category:'travel', type:'multipleChoice', weight:1.1, prompt:'<em>Even on an ordinary day, where dost thou love to go?</em>', answers:[
      { text:'A walk through the same beloved place — I notice something new every time', scores:{ pocahontas:5, aurora:3, belle:3, 'snow-white':2, elsa:2 } },
      { text:'A new neighborhood — just to see', scores:{ ariel:4, jasmine:3, anna:3, rapunzel:2, belle:1 } },
      { text:'Somewhere quiet — a garden, a river, a small bench', scores:{ aurora:4, elsa:3, 'snow-white':2, meg:3, cinderella:2 } },
      { text:'I rarely just go — I go places when there is something to do', scores:{ tiana:4, mulan:3, raya:3, cinderella:2, merida:1 } }
    ]},
    { id:'travel_q17_first_leaving', category:'travel', type:'multipleChoice', weight:1.3, prompt:'<em>The first time thou leftest home for somewhere unknown, what didst thou feel?</em>', answers:[
      { text:'Pure excitement — nothing but joy', scores:{ ariel:5, rapunzel:4, anna:3, merida:2, moana:2 } },
      { text:'Excitement and fear in equal measure', scores:{ belle:3, mulan:3, jasmine:3, tiana:3, moana:2 } },
      { text:'Mostly fear — I went anyway', scores:{ cinderella:5, 'snow-white':4, aurora:3, raya:2, meg:1 } },
      { text:'Calm purpose — I knew exactly why I was leaving', scores:{ mulan:5, raya:5, tiana:3, belle:2, jasmine:2 } }
    ]},
    { id:'travel_q18_return', category:'travel', type:'multipleChoice', weight:1.3, prompt:'<em>How dost thou feel coming home from a long journey, <span class="name">{name}</span>?</em>', answers:[
      { text:'Joy — everything is exactly where it should be', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:2 } },
      { text:'A strange ache — I am not the same person who left', scores:{ belle:4, elsa:4, jasmine:3, meg:3, mulan:3, merida:2 } },
      { text:'Already restless — already thinking about the next journey', scores:{ moana:5, ariel:4, jasmine:3, merida:2, rapunzel:1 } },
      { text:'Grateful but quiet — I need time to be still', scores:{ elsa:4, aurora:3, pocahontas:3, meg:2, belle:2 } }
    ]},
    { id:'travel_q19_pace', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou like to travel — fast or slow?</em>', answers:[
      { text:'Slow — days in each place. I want to live there a little', scores:{ belle:5, pocahontas:4, aurora:3, elsa:2, meg:2 } },
      { text:'Fast — as many places as I can fit', scores:{ ariel:5, jasmine:4, anna:3, rapunzel:2 } },
      { text:'A mix — some places quick, some I sink into', scores:{ moana:3, belle:2, tiana:3, jasmine:2, merida:2 } },
      { text:'The pace finds itself — it depends on what is calling', scores:{ moana:4, pocahontas:3, merida:3, rapunzel:2, aurora:1 } }
    ]},
    { id:'travel_q20_freetext', category:'travel', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"A place I have never been but feel I already know is..."', placeholder:'Write thy truth, {name}', freetextTag:'unknown_known', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'travel_q21_souvenir', category:'travel', type:'multipleChoice', weight:1.1, prompt:'<em>What is the best souvenir from a journey, <span class="name">{name}</span>?</em>', answers:[
      { text:'A photograph or sketch of a moment I do not want to forget', scores:{ rapunzel:5, belle:3, ariel:2, aurora:2, anna:2 } },
      { text:'Something handmade by someone I met there', scores:{ anna:4, 'snow-white':3, tiana:3, pocahontas:3, belle:2 } },
      { text:'A skill or recipe or song I did not know before', scores:{ tiana:5, mulan:3, belle:3, raya:2, moana:2 } },
      { text:'A change in me — the trip changed me, that is the souvenir', scores:{ elsa:5, meg:4, jasmine:3, mulan:3, merida:2 } }
    ]},
    { id:'travel_q22_chooses', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou choose where to go next, <span class="name">{name}</span>?</em>', answers:[
      { text:'Whatever calls me hardest — I follow the pull', scores:{ moana:5, ariel:4, merida:3, jasmine:2, pocahontas:2 } },
      { text:'Where someone I love is — people decide my map', scores:{ anna:5, 'snow-white':3, cinderella:2, tiana:2, aurora:2 } },
      { text:'Where I have something to learn or do', scores:{ tiana:4, mulan:5, belle:3, raya:3, jasmine:1 } },
      { text:'Where the story is — I want to see what I have read about', scores:{ belle:5, jasmine:3, rapunzel:3, ariel:2, elsa:1 } }
    ]},
    { id:'travel_q23_stranger', category:'travel', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou feel being a stranger in a new place?</em>', answers:[
      { text:'I love it — no one expects anything of me', scores:{ elsa:4, jasmine:4, meg:5, merida:2, raya:2 } },
      { text:'I love meeting people who do not know me yet', scores:{ ariel:5, anna:4, rapunzel:3, jasmine:2, moana:1 } },
      { text:'I am quiet at first — I watch and learn the rules', scores:{ belle:4, pocahontas:5, elsa:3, mulan:3, raya:2 } },
      { text:'I dislike it — I want to belong somewhere', scores:{ anna:3, 'snow-white':3, cinderella:3, aurora:2, tiana:1 } }
    ]},
    { id:'travel_q24_meaning', category:'travel', type:'multipleChoice', weight:1.3, prompt:'<em>What does a great journey teach thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'How small I am, and how full the world is', scores:{ moana:5, ariel:3, pocahontas:3, belle:3, elsa:2 } },
      { text:'Who I am when nothing familiar is holding me up', scores:{ elsa:5, jasmine:4, merida:3, meg:3, raya:2, mulan:2 } },
      { text:'How much my home has been holding me — how much I love it', scores:{ anna:4, 'snow-white':4, cinderella:3, aurora:2, tiana:2 } },
      { text:'What I am capable of when I have to be', scores:{ mulan:5, raya:4, tiana:3, merida:2, moana:1 } }
    ]},
    { id:'travel_q25_truest', category:'travel', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What does travel mean to thee, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'The way I become more than I have been', scores:{ moana:5, jasmine:4, ariel:3, mulan:3, merida:2, rapunzel:2 } },
      { text:'The way I learn to love home better', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:2 } },
      { text:'The way I find quiet that home cannot give me', scores:{ elsa:5, meg:4, belle:3, pocahontas:3, raya:2 } },
      { text:'The way I find people I would not have found otherwise', scores:{ rapunzel:4, ariel:3, anna:3, belle:2, tiana:2, moana:2 } }
    ]}
  ],

  home: [
    { id:'home_v1_door', category:'home', type:'visual', weight:1.5, prompt:'<em>Thou comest at last to the door of where thou belongest. Which door is it?</em>', answers:[
      { text:'A round wooden cottage door painted sage green with a vine climbing the doorframe', emoji:'🌿', scores:{ 'snow-white':5, tiana:3, anna:3, cinderella:2, aurora:2 } },
      { text:'A magnificent grand double-door of a small castle — carved stone, iron-banded', emoji:'🏰', scores:{ cinderella:5, aurora:3, anna:2, mulan:1, jasmine:1 } },
      { text:'A weathered wooden door set into the trunk of an enormous ancient tree — no path leading to it', emoji:'🌲', scores:{ pocahontas:5, merida:4, belle:3, aurora:2, ariel:1 } },
      { text:'A small arched door at the base of a stone tower at the edge of the sea', emoji:'🌊', scores:{ elsa:5, meg:4, belle:3, raya:2, jasmine:1 } }
    ]},
    { id:'home_v2_hearth', category:'home', type:'visual', weight:1.4, prompt:'<em>In thy true home, where dost thou sit when the day is done?</em>', answers:[
      { text:'A worn deep armchair by a crackling fire, a sleepy cat on the rug', emoji:'🔥', scores:{ belle:5, 'snow-white':3, aurora:3, anna:2, cinderella:2, meg:2 } },
      { text:'A warm farmhouse kitchen — a long table, a steaming pot, lanterns above', emoji:'🍲', scores:{ tiana:5, 'snow-white':4, anna:3, cinderella:2, aurora:1 } },
      { text:'A small private balcony facing the sunset, tea between the chairs', emoji:'🌅', scores:{ jasmine:5, ariel:3, rapunzel:3, moana:2, pocahontas:2 } },
      { text:'A simple beautiful bed piled with quilts, a lamp burning, a journal open', emoji:'📖', scores:{ aurora:4, elsa:5, meg:3, belle:3, anna:1 } }
    ]},
    { id:'home_v3_window', category:'home', type:'visual', weight:1.3, prompt:'<em>Thou lookest out the window of thy home. What is the view?</em>', answers:[
      { text:'A flourishing herb-and-vegetable garden, fruit trees beyond, chickens scratching', emoji:'🌱', scores:{ 'snow-white':5, tiana:3, aurora:2, pocahontas:3, anna:2 } },
      { text:'A vibrant city at evening — lanterns lit, distant spires, countless lives', emoji:'🏙️', scores:{ tiana:4, jasmine:5, anna:2, ariel:2, belle:2 } },
      { text:'Vast wild moorland — heather and stone, a soaring hawk, no other building in sight', emoji:'🦅', scores:{ merida:5, pocahontas:4, raya:3, mulan:2, elsa:2 } },
      { text:'A vast open sea at golden hour — a long stretch of beach, the horizon endless', emoji:'🌊', scores:{ moana:5, ariel:4, jasmine:2, elsa:2, meg:1 } }
    ]},
    { id:'home_v4_detail', category:'home', type:'visual', weight:1.3, prompt:'<em>In a room that is truly thine, what one thing must be there?</em>', answers:[
      { text:'A wide bookshelf packed with well-loved books — a small cup of tea on the shelf', emoji:'📚', scores:{ belle:5, rapunzel:2, elsa:3, meg:2, aurora:2 } },
      { text:'A shelf covered in small treasured objects — a worn locket, a pressed leaf, a carved figurine', emoji:'🪙', scores:{ cinderella:4, anna:5, 'snow-white':3, aurora:2, mulan:2 } },
      { text:'A workspace with neatly organized tools and crafts — a half-finished embroidery, brushes in a jar', emoji:'🎨', scores:{ tiana:5, mulan:3, rapunzel:3, belle:2, raya:2 } },
      { text:'A wide windowsill with wildflowers, a small candle, an open journal — the world let in', emoji:'🌸', scores:{ ariel:3, jasmine:3, pocahontas:5, moana:3, elsa:2, meg:2 } }
    ]},
    { id:'home_q5_makes_home', category:'home', type:'multipleChoice', weight:1.4, prompt:'<em>What makes a place feel like home to thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'The people in it — without them, no place is home', scores:{ anna:5, 'snow-white':4, cinderella:3, tiana:2, aurora:2 } },
      { text:'A feeling of being myself — some places make me small, home does not', scores:{ elsa:5, jasmine:4, merida:3, meg:3, belle:2 } },
      { text:'My things — the familiar shapes I have lived among', scores:{ belle:4, cinderella:3, aurora:2, 'snow-white':2, meg:2 } },
      { text:'Honestly, I am not sure I have found that place yet', scores:{ moana:4, jasmine:3, merida:2, meg:5, raya:2, ariel:1 } }
    ]},
    { id:'home_q6_person', category:'home', type:'multipleChoice', weight:1.3, prompt:'<em>Has a person ever been thy home, <span class="name">{name}</span>?</em>', answers:[
      { text:'Yes — more than once. People are the truest homes', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:1 } },
      { text:'Once — I am still becoming the person who can be that for someone', scores:{ tiana:3, belle:3, mulan:3, raya:2, meg:3 } },
      { text:'Almost — there has been someone close', scores:{ rapunzel:3, ariel:3, anna:2, elsa:2, jasmine:2 } },
      { text:'No — and I do not know if I want one. I can be home to myself', scores:{ elsa:5, jasmine:3, merida:3, meg:4, raya:2 } }
    ]},
    { id:'home_q7_must_have', category:'home', type:'multipleChoice', weight:1.2, prompt:'<em>What must thy home have, no matter what, <span class="name">{name}</span>?</em>', answers:[
      { text:'Light — tall windows, sun coming in', scores:{ rapunzel:5, ariel:3, aurora:3, jasmine:2, anna:2 } },
      { text:'Books — many books, more than I can read', scores:{ belle:5, rapunzel:2, elsa:2, jasmine:2, meg:1 } },
      { text:'A garden — living things growing', scores:{ aurora:4, 'snow-white':4, tiana:3, pocahontas:3, rapunzel:1 } },
      { text:'A view of something wild — so I do not forget', scores:{ merida:5, moana:4, pocahontas:3, raya:2, elsa:2 } }
    ]},
    { id:'home_q8_tradeoff', category:'home', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A magnificent grand house with many rooms — or a tiny perfect cottage just big enough for thee.', answers:[
      { text:'The grand house', scores:{ cinderella:5, aurora:3, jasmine:3, ariel:2, anna:2, merida:-2 } },
      { text:'The tiny cottage', scores:{ 'snow-white':5, tiana:3, belle:3, merida:3, pocahontas:3, meg:3, cinderella:-3 } }
    ]},
    { id:'home_q9_coming_home', category:'home', type:'scenario', weight:1.3, prompt:'<em>Thou hast had a hard day. Thou comest in the door of thy home. What is thy first move?</em>', answers:[
      { text:'I drop everything — sit in my chair, breathe', scores:{ elsa:5, belle:3, meg:3, aurora:2, raya:2 } },
      { text:'I find someone I love — tell them about it', scores:{ anna:5, 'snow-white':3, cinderella:2, tiana:1, jasmine:2 } },
      { text:'I make food — the work of feeding myself helps', scores:{ tiana:5, 'snow-white':3, merida:2, raya:2, mulan:2 } },
      { text:'I move — walk, ride, do something with my body', scores:{ merida:4, moana:3, raya:3, jasmine:2, pocahontas:3 } }
    ]},
    { id:'home_q10_hurt', category:'home', type:'hurt', weight:1.4, prompt:'<em>If thou had to lose one thing from thy home forever, what loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'My garden, my plants, anything I tend', scores:{ tiana:-3, 'snow-white':-3, aurora:-2, pocahontas:-3, jasmine:1 } },
      { text:'My books, my collections, my treasured objects', scores:{ belle:-5, ariel:-3, rapunzel:-2, jasmine:-1, meg:-1 } },
      { text:'The ones who live there with me', scores:{ anna:-5, 'snow-white':-4, cinderella:-3, aurora:-2, tiana:-2, meg:-1 } },
      { text:'The view from my window — the land beyond', scores:{ merida:-5, pocahontas:-4, moana:-3, elsa:-2, raya:-1 } }
    ]},
    { id:'home_q11_moving', category:'home', type:'multipleChoice', weight:1.3, prompt:'<em>Hast thou ever had to leave a home thou loved, <span class="name">{name}</span>?</em>', answers:[
      { text:'Yes — the new place became home, but the old one is still alive in me', scores:{ rapunzel:4, mulan:5, belle:3, anna:3, jasmine:2, moana:2 } },
      { text:'Yes, and the new place never really replaced it', scores:{ cinderella:5, 'snow-white':3, aurora:3, meg:3, elsa:2 } },
      { text:'No — I have been in one place and do not know what it would mean to leave', scores:{ aurora:3, 'snow-white':3, cinderella:1, tiana:2 } },
      { text:'Many times — home for me is not a place anyway', scores:{ moana:5, jasmine:3, merida:3, raya:3, meg:2, ariel:1 } }
    ]},
    { id:'home_q12_open_closed', category:'home', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou keep thy home — open to others, or quietly thine own?</em>', answers:[
      { text:'Always open — anyone I love can come anytime', scores:{ anna:5, 'snow-white':4, tiana:3, rapunzel:2, aurora:2 } },
      { text:'Open by invitation — carefully chosen company', scores:{ belle:4, cinderella:3, aurora:3, mulan:2, jasmine:2 } },
      { text:'Mostly mine — a few souls only', scores:{ elsa:5, raya:4, meg:4, belle:2, pocahontas:2 } },
      { text:'Open in the day, my own at night', scores:{ tiana:3, jasmine:3, ariel:2, moana:2, merida:2 } }
    ]},
    { id:'home_q13_best_part', category:'home', type:'multipleChoice', weight:1.2, prompt:'<em>What is the best part of being home, <span class="name">{name}</span>?</em>', answers:[
      { text:'Quiet — real quiet, after the noise of the world', scores:{ elsa:5, belle:3, meg:3, aurora:3, pocahontas:2 } },
      { text:'The ones I share it with', scores:{ anna:5, 'snow-white':4, cinderella:3, tiana:2, aurora:1 } },
      { text:'The familiar shapes — knowing where everything is', scores:{ cinderella:4, 'snow-white':3, belle:2, aurora:2, tiana:2 } },
      { text:'Honestly, leaving — home is best when I have just come back', scores:{ moana:5, ariel:3, jasmine:3, merida:3, rapunzel:1 } }
    ]},
    { id:'home_q14_tradeoff', category:'home', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A bustling busy household always full of people — or a quiet still household where peace is the air thou breathest.', answers:[
      { text:'The busy bustling household', scores:{ anna:5, 'snow-white':4, tiana:3, cinderella:2, merida:1, elsa:-3, meg:-2, belle:-2 } },
      { text:'The quiet still household', scores:{ elsa:5, belle:5, meg:4, aurora:3, pocahontas:3, raya:2, anna:-3, 'snow-white':-2 } }
    ]},
    { id:'home_q15_neighbors', category:'home', type:'multipleChoice', weight:1.1, prompt:'<em>How dost thou feel about thy neighbors?</em>', answers:[
      { text:'I love them — they are family I did not choose', scores:{ anna:5, 'snow-white':5, cinderella:3, tiana:2, aurora:2 } },
      { text:'I am friendly but not close — we respect each other', scores:{ belle:3, mulan:3, elsa:3, raya:3, jasmine:2, pocahontas:2 } },
      { text:'I prefer to keep to myself — the wall is the wall', scores:{ elsa:4, meg:5, raya:2, jasmine:1, merida:1 } },
      { text:'I do not have neighbors I see often — I live somewhere wild or remote', scores:{ merida:5, pocahontas:4, moana:3, elsa:2, raya:1 } }
    ]},
    { id:'home_q16_making_home', category:'home', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou make a new place feel like home, <span class="name">{name}</span>?</em>', answers:[
      { text:'I unpack carefully — everything in its right place', scores:{ cinderella:4, tiana:3, aurora:2, mulan:3, belle:2 } },
      { text:'I cook in it — the smells make it mine', scores:{ tiana:5, 'snow-white':3, anna:2, belle:1 } },
      { text:'I bring the same small things — they follow me everywhere', scores:{ belle:4, anna:3, rapunzel:3, cinderella:2, meg:3, mulan:2 } },
      { text:'I do not need to make it home — I can be at home anywhere I am', scores:{ moana:5, jasmine:3, merida:3, pocahontas:3, raya:2, elsa:2 } }
    ]},
    { id:'home_q17_dream_home', category:'home', type:'multipleChoice', weight:1.3, prompt:'<em>If thou couldst live anywhere, where wouldst thou put thy home, <span class="name">{name}</span>?</em>', answers:[
      { text:'On a quiet street with people I know, in a town with bakeries and bells', scores:{ 'snow-white':5, anna:4, cinderella:3, tiana:3, aurora:2 } },
      { text:'High in the mountains, far above the noise of the world', scores:{ elsa:5, merida:3, raya:2, pocahontas:2, meg:2 } },
      { text:'On the coast, where I can hear the sea every day', scores:{ moana:5, ariel:4, jasmine:1, merida:1 } },
      { text:'In a great city, where every street has something I have not yet seen', scores:{ jasmine:5, ariel:3, tiana:3, rapunzel:2, anna:1 } }
    ]},
    { id:'home_q18_wall', category:'home', type:'multipleChoice', weight:1.1, prompt:'<em>What hangs on the wall of thy room, <span class="name">{name}</span>?</em>', answers:[
      { text:'A painting or print I love — something beautiful', scores:{ rapunzel:5, belle:3, aurora:3, cinderella:2, ariel:2 } },
      { text:'A map of somewhere far away', scores:{ moana:5, jasmine:3, ariel:3, belle:2, merida:1 } },
      { text:'A photograph or portrait of those I love', scores:{ anna:5, 'snow-white':3, cinderella:3, aurora:2, tiana:1 } },
      { text:'Almost nothing — the walls are bare. The room is mine without decoration', scores:{ elsa:5, meg:4, raya:3, mulan:2, pocahontas:2 } }
    ]},
    { id:'home_q19_sound', category:'home', type:'multipleChoice', weight:1.2, prompt:'<em>What is the sound of thy home, <span class="name">{name}</span>?</em>', answers:[
      { text:'Voices, laughter, people moving around', scores:{ anna:5, 'snow-white':3, cinderella:3, tiana:2, rapunzel:2 } },
      { text:'Quiet — the kind of quiet that has its own sound', scores:{ elsa:5, aurora:3, belle:3, meg:3, pocahontas:3 } },
      { text:'The natural world — wind, water, birds, weather', scores:{ pocahontas:5, merida:4, moana:3, aurora:2, raya:1 } },
      { text:'Music — always music', scores:{ ariel:5, rapunzel:3, jasmine:2, tiana:2, anna:1 } }
    ]},
    { id:'home_q20_freetext', category:'home', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The place where I feel most at home in the whole world is..."', placeholder:'Write thy truth, {name}', freetextTag:'home_place', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'home_q21_guest', category:'home', type:'multipleChoice', weight:1.1, prompt:'<em>How dost thou welcome a guest into thy home, <span class="name">{name}</span>?</em>', answers:[
      { text:'Food on the table within minutes', scores:{ tiana:5, 'snow-white':5, anna:3, cinderella:2, aurora:1 } },
      { text:'A warm fire and a comfortable chair', scores:{ belle:4, aurora:4, elsa:3, cinderella:3, 'snow-white':2 } },
      { text:'A tour — I want them to see what I have made', scores:{ rapunzel:4, jasmine:3, tiana:3, ariel:2, anna:1 } },
      { text:'I let them settle — I do not crowd them', scores:{ elsa:5, meg:3, belle:3, aurora:2, raya:2, pocahontas:2 } }
    ]},
    { id:'home_q22_house_to_home', category:'home', type:'multipleChoice', weight:1.3, prompt:'<em>What turns a house into a home, <span class="name">{name}</span>?</em>', answers:[
      { text:'Time — the way I have lived in it, the dents and worn places', scores:{ belle:5, 'snow-white':5, cinderella:3, aurora:2, tiana:2 } },
      { text:'Love — real love between the people there', scores:{ anna:5, cinderella:5, 'snow-white':3, aurora:2, tiana:2 } },
      { text:'Choosing — the act of saying "this is mine"', scores:{ tiana:4, jasmine:3, mulan:3, merida:2, ariel:2 } },
      { text:'A feeling I cannot name — some places have it, most do not', scores:{ elsa:4, pocahontas:4, aurora:3, meg:3, belle:2, moana:2 } }
    ]},
    { id:'home_q23_wrong', category:'home', type:'multipleChoice', weight:1.4, prompt:'<em>Has there been a time when thy home did not feel like home, <span class="name">{name}</span>?</em>', context:'The mirror asks gently.', answers:[
      { text:'Yes — often. I have struggled to find a place that fit', scores:{ ariel:5, jasmine:4, meg:5, merida:3, rapunzel:3, moana:2, raya:2 } },
      { text:'Yes, but only sometimes — the feeling passes', scores:{ belle:3, elsa:4, aurora:2, anna:2, cinderella:2 } },
      { text:'A few times — usually when something else was wrong', scores:{ tiana:3, mulan:3, raya:2, cinderella:3, anna:2 } },
      { text:'No — home has always been where I belong', scores:{ 'snow-white':5, anna:3, aurora:3, cinderella:2, tiana:1 } }
    ]},
    { id:'home_q24_last_time', category:'home', type:'multipleChoice', weight:1.4, prompt:'<em>If thou had to leave a home behind forever, what would matter most, <span class="name">{name}</span>?</em>', answers:[
      { text:'Saying goodbye properly — walking through every room one last time', scores:{ aurora:4, belle:4, cinderella:3, 'snow-white':2, anna:2, elsa:2 } },
      { text:'Bringing the right small things — the keepsakes', scores:{ cinderella:5, anna:4, 'snow-white':3, aurora:2, meg:2 } },
      { text:'Knowing the people I love are with me — the rest is just walls', scores:{ anna:5, 'snow-white':3, tiana:2, aurora:2, cinderella:1 } },
      { text:'Trusting that home travels with me — the next place will be home too', scores:{ moana:5, jasmine:3, merida:3, pocahontas:3, raya:3, meg:3 } }
    ]},
    { id:'home_q25_truest', category:'home', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is home to thee, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'A place — a real place I can return to. Walls, light, a door', scores:{ 'snow-white':5, cinderella:3, tiana:3, aurora:3, anna:2, belle:2 } },
      { text:'A person — the one I come home to, wherever we are', scores:{ anna:5, cinderella:3, aurora:2, 'snow-white':2, tiana:2, rapunzel:1 } },
      { text:'A feeling I carry inside me — I am the home', scores:{ elsa:5, jasmine:3, meg:4, merida:3, pocahontas:3, raya:2, moana:2 } },
      { text:'Something I am still building — still finding — still becoming', scores:{ moana:5, ariel:3, rapunzel:3, mulan:3, tiana:2, jasmine:1 } }
    ]}
  ],

fairytales: [
    { id:'fairytales_v1_moment', category:'fairytales', type:'visual', weight:1.5, prompt:'<em>Every fairy tale has one perfect moment. Which is most truly thine?</em>', answers:[
      { text:'The carriage waiting — the gown, the night, the whole life about to change', emoji:'🪙', scores:{ cinderella:5, aurora:3, anna:2, 'snow-white':2 } },
      { text:'The moment the beast becomes kind — when fear turns into something else entirely', emoji:'🌹', scores:{ belle:5, rapunzel:3, elsa:2, meg:2 } },
      { text:'The first step off the shore — the moment the story becomes entirely thy own', emoji:'🌊', scores:{ moana:5, ariel:4, merida:3, pocahontas:3, jasmine:2 } },
      { text:'The candles all lit — the long table set — when what was lost is restored', emoji:'🕯️', scores:{ tiana:5, anna:4, 'snow-white':3, cinderella:2 } }
    ]},
    { id:'fairytales_v2_villain', category:'fairytales', type:'visual', weight:1.4, prompt:'<em>Every great story has a shadow. Which villain do you understand deepest?</em>', answers:[
      { text:'The one who was never loved and made cruelty of it', emoji:'🌑', scores:{ elsa:3, meg:3, belle:3, aurora:1, rapunzel:2 } },
      { text:'The one who had power and could not bear to lose it', emoji:'👑', scores:{ mulan:5, raya:4, jasmine:3, tiana:2, belle:2 } },
      { text:'The one who was afraid and dressed the fear as control', emoji:'🔒', scores:{ rapunzel:5, elsa:4, cinderella:3, aurora:2 } },
      { text:'The one who wanted what someone else had and could not let it go', emoji:'🪞', scores:{ 'snow-white':5, jasmine:3, ariel:3, merida:2, elsa:2 } }
    ]},
    { id:'fairytales_v3_gift', category:'fairytales', type:'visual', weight:1.4, prompt:'<em>The fairy grants one gift at birth. What dost thou receive?</em>', answers:[
      { text:'The gift of being loved by all who meet thee', emoji:'🌸', scores:{ 'snow-white':5, aurora:4, cinderella:3, anna:2 } },
      { text:'The gift of a voice that moves all who hear it', emoji:'🎵', scores:{ ariel:5, rapunzel:3, jasmine:3, 'snow-white':2, anna:1 } },
      { text:'The gift of courage that never fails when the moment demands it', emoji:'⚔️', scores:{ mulan:5, raya:4, merida:4, moana:3, jasmine:2 } },
      { text:'The gift of knowing — of understanding things others cannot see', emoji:'💡', scores:{ belle:5, elsa:4, pocahontas:3, meg:3, raya:2 } }
    ]},
    { id:'fairytales_v4_spell', category:'fairytales', type:'visual', weight:1.3, prompt:'<em>A spell is cast upon thee. Which is most truly thine?</em>', answers:[
      { text:'A sleeping curse — only true love shall wake thee', emoji:'💤', scores:{ aurora:5, cinderella:3, 'snow-white':3, anna:2, belle:1 } },
      { text:'A transformation — thou art changed into another form entirely', emoji:'✨', scores:{ ariel:5, belle:5, merida:4, tiana:3 } },
      { text:'An isolation — thou must live far from all those thou lovest', emoji:'❄️', scores:{ elsa:5, rapunzel:4, jasmine:3, meg:2 } },
      { text:'A forgetting — thou dost not know what thou art truly made of', emoji:'🌙', scores:{ rapunzel:5, moana:4, anna:3, elsa:3 } }
    ]},
    { id:'fairytales_q5_once', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of fairy tale dost thou love most, <span class="name">{name}</span>?</em>', answers:[
      { text:'One where the hero discovers what she is made of', scores:{ mulan:5, moana:4, merida:4, raya:3, tiana:3 } },
      { text:'One where love changes everything — for real', scores:{ aurora:5, cinderella:4, anna:3, 'snow-white':3 } },
      { text:'One where the world is dark and strange and beautiful', scores:{ belle:5, elsa:4, rapunzel:3, meg:4 } },
      { text:'One where someone unlikely becomes extraordinary', scores:{ tiana:5, cinderella:4, ariel:3, jasmine:3, rapunzel:2 } }
    ]},
    { id:'fairytales_q6_breaking', category:'fairytales', type:'multipleChoice', weight:1.4, prompt:'<em>In the fairy tales thou lovest, what breaks the spell, <span class="name">{name}</span>?</em>', answers:[
      { text:'A kiss — a moment of genuine love', scores:{ aurora:5, cinderella:4, 'snow-white':4, anna:2 } },
      { text:'A sacrifice — the willingness to give something real', scores:{ anna:5, mulan:4, ariel:3, tiana:3, moana:2 } },
      { text:'A true name spoken aloud — the self reclaimed', scores:{ elsa:5, rapunzel:4, belle:3, jasmine:3 } },
      { text:'An act of courage with no guarantee of survival', scores:{ merida:5, raya:5, mulan:3, moana:3 } }
    ]},
    { id:'fairytales_q7_part', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>Which part of a fairy tale dost thou love best, <span class="name">{name}</span>?</em>', answers:[
      { text:'The beginning — "Once upon a time"', scores:{ rapunzel:4, aurora:3, 'snow-white':3, cinderella:2, anna:2 } },
      { text:'The dark middle — when everything seems lost', scores:{ elsa:5, belle:4, tiana:3, raya:3, meg:3 } },
      { text:'The transformation — when the hero becomes who they truly are', scores:{ mulan:5, moana:5, ariel:3, merida:3, tiana:2 } },
      { text:'The ending — "and they lived"', scores:{ cinderella:5, aurora:4, anna:3, 'snow-white':3, jasmine:1 } }
    ]},
    { id:'fairytales_q8_tradeoff', category:'fairytales', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A fairy tale where everyone lives happily ever after — or one where the ending is true, even if it is hard.', answers:[
      { text:'Happy ever after', scores:{ aurora:5, 'snow-white':4, cinderella:4, anna:3, rapunzel:2, elsa:-2 } },
      { text:'True even if hard', scores:{ elsa:5, belle:4, raya:4, mulan:3, moana:3, meg:3, aurora:-2, 'snow-white':-2 } }
    ]},
    { id:'fairytales_q9_true', category:'fairytales', type:'multipleChoice', weight:1.4, prompt:'<em>What is a fairy tale, truly, <span class="name">{name}</span>?</em>', answers:[
      { text:'A map — it shows the way through hard things', scores:{ mulan:5, tiana:4, raya:4, moana:3, pocahontas:3 } },
      { text:'A promise — that the world can be more than it is', scores:{ cinderella:5, rapunzel:4, anna:3, 'snow-white':3 } },
      { text:'A truth wearing a costume — it says what real life cannot say directly', scores:{ belle:5, elsa:4, meg:5, pocahontas:3, raya:3 } },
      { text:'A way of being a child again, just for a while', scores:{ aurora:4, 'snow-white':4, cinderella:3, rapunzel:2, anna:3 } }
    ]},
    { id:'fairytales_q10_hurt', category:'fairytales', type:'hurt', weight:1.3, prompt:'<em>If one of these classic fairy tale elements were lost forever, which would hurt thee least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'The villain', scores:{ 'snow-white':-3, aurora:-2, mulan:-2, raya:-2, anna:1 } },
      { text:'The magic', scores:{ elsa:-5, aurora:-4, rapunzel:-3, 'snow-white':-2, tiana:1, raya:1 } },
      { text:'The love story', scores:{ merida:-3, mulan:-2, raya:-2, jasmine:-1, anna:-3, cinderella:-3, aurora:-4 } },
      { text:'The happy ending', scores:{ elsa:1, raya:1, meg:1, belle:1, aurora:-4, cinderella:-4, 'snow-white':-3, anna:-3 } }
    ]},
    { id:'fairytales_q11_recognize', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>Which fairy tale trope dost thou recognize most in thy own life, <span class="name">{name}</span>?</em>', answers:[
      { text:'The hidden princess — no one knows what I truly am', scores:{ cinderella:5, rapunzel:4, aurora:3, 'snow-white':2, ariel:2 } },
      { text:'The girl who had to prove herself where no girl had gone before', scores:{ mulan:5, jasmine:4, merida:4, tiana:3, raya:3 } },
      { text:'The one who left the safe place for the true self', scores:{ ariel:5, moana:4, elsa:4, jasmine:3, merida:2 } },
      { text:'The one who learned to trust after being hurt', scores:{ raya:5, tiana:4, anna:3, belle:3, meg:4 } }
    ]},
    { id:'fairytales_q12_never', category:'fairytales', type:'multipleChoice', weight:1.2, prompt:'<em>What does a fairy tale get wrong, <span class="name">{name}</span>?</em>', answers:[
      { text:'It makes love look easy', scores:{ tiana:5, raya:4, mulan:3, meg:4, belle:2 } },
      { text:'It pretends one act of courage is enough', scores:{ mulan:5, tiana:4, raya:4, moana:3, merida:2 } },
      { text:'It makes the ending final — real life is not final', scores:{ elsa:4, jasmine:4, ariel:3, moana:3, merida:2 } },
      { text:'It makes women wait for rescue', scores:{ jasmine:5, merida:5, mulan:4, raya:4, moana:3, ariel:2 } }
    ]},
    { id:'fairytales_q13_which_are_you', category:'fairytales', type:'multipleChoice', weight:1.4, prompt:'<em>In the fairy tales of thy life so far, what hast thou been, <span class="name">{name}</span>?</em>', context:'The mirror asks gently.', answers:[
      { text:'The one who kept going when everything said to stop', scores:{ tiana:5, mulan:4, cinderella:4, raya:3, merida:3 } },
      { text:'The one who saw something others missed', scores:{ belle:5, pocahontas:4, elsa:3, meg:3, rapunzel:2 } },
      { text:'The one who loved someone back to themselves', scores:{ anna:5, 'snow-white':3, aurora:2, belle:3, cinderella:2 } },
      { text:'The one who had to learn to trust herself', scores:{ elsa:5, jasmine:4, rapunzel:5, moana:3, merida:3 } }
    ]},
    { id:'fairytales_q14_tradeoff', category:'fairytales', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A fairy tale where the magic comes from inside the hero — or one where the magic is real and comes from somewhere beyond.', answers:[
      { text:'Magic from inside', scores:{ mulan:5, tiana:5, moana:4, merida:3, raya:3, rapunzel:2 } },
      { text:'Real magic from beyond', scores:{ aurora:5, 'snow-white':4, cinderella:4, ariel:3, rapunzel:3, anna:3 } }
    ]},
    { id:'fairytales_q15_child', category:'fairytales', type:'multipleChoice', weight:1.2, prompt:'<em>Which fairy tale did thou love most as a small child?</em>', answers:[
      { text:'A sleeping princess woken by love', scores:{ aurora:5, cinderella:3, 'snow-white':3, anna:2, rapunzel:1 } },
      { text:'A clever girl who outsmarts everyone', scores:{ belle:5, jasmine:4, merida:3, mulan:3, meg:2 } },
      { text:'A girl who went into the wild and came back changed', scores:{ ariel:4, moana:4, pocahontas:3, merida:3, elsa:2 } },
      { text:'A small ordinary person who turned out to be extraordinary', scores:{ tiana:5, cinderella:4, rapunzel:3, anna:3, 'snow-white':2 } }
    ]},
    { id:'fairytales_q16_new_tale', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>If thou couldst write a new fairy tale for a child today, what would it teach?</em>', answers:[
      { text:'That she is enough, exactly as she is', scores:{ elsa:5, rapunzel:4, jasmine:3, ariel:3, merida:2 } },
      { text:'That courage is not the absence of fear', scores:{ mulan:5, moana:4, merida:4, raya:3, tiana:2 } },
      { text:'That love is a practice, not just a feeling', scores:{ tiana:5, anna:4, belle:3, cinderella:2, aurora:1 } },
      { text:'That the world is stranger and more beautiful than adults admit', scores:{ pocahontas:5, rapunzel:3, aurora:3, 'snow-white':3, ariel:2 } }
    ]},
    { id:'fairytales_q17_darkness', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>How much darkness dost thou want in a fairy tale, <span class="name">{name}</span>?</em>', answers:[
      { text:'A lot — the light means nothing if there is no dark', scores:{ elsa:5, belle:4, raya:4, meg:4, moana:2 } },
      { text:'Enough — just enough to make the courage real', scores:{ mulan:5, tiana:4, merida:3, jasmine:3, anna:2 } },
      { text:'A little — I do not want children frightened', scores:{ 'snow-white':4, aurora:4, cinderella:3, anna:2, rapunzel:2 } },
      { text:'None at all — the world already has enough dark', scores:{ 'snow-white':3, aurora:3, cinderella:2, anna:1, ariel:1, tiana:1 } }
    ]},
    { id:'fairytales_q18_if_i_were', category:'fairytales', type:'scenario', weight:1.4, prompt:'<em>If thou art the hero of a fairy tale, what is thy magical task?</em>', answers:[
      { text:'Break a curse — on a person or a kingdom', scores:{ anna:5, belle:4, 'snow-white':3, cinderella:3, aurora:2 } },
      { text:'Find something lost — a person, a truth, a home', scores:{ ariel:4, moana:4, rapunzel:3, raya:3, pocahontas:3 } },
      { text:'Defeat something that should not exist', scores:{ mulan:5, raya:5, merida:3, jasmine:3, tiana:2 } },
      { text:'Become something thou did not know thou couldst be', scores:{ elsa:5, moana:4, rapunzel:4, ariel:3, tiana:3 } }
    ]},
    { id:'fairytales_q19_tell', category:'fairytales', type:'multipleChoice', weight:1.2, prompt:'<em>Wouldst thou rather be the one who lives the fairy tale or the one who tells it?</em>', answers:[
      { text:'Live it — completely', scores:{ ariel:5, anna:4, rapunzel:3, jasmine:3, merida:3 } },
      { text:'Tell it — there is power in being the one who shapes the story', scores:{ belle:5, pocahontas:4, elsa:3, meg:3, raya:2 } },
      { text:'Both — the living and the telling belong together', scores:{ moana:4, mulan:3, tiana:3, aurora:2, jasmine:2 } },
      { text:'Neither — I prefer real life to stories', scores:{ raya:3, tiana:2, merida:2, mulan:1, cinderella:1, ariel:-2 } }
    ]},
    { id:'fairytales_q20_freetext', category:'fairytales', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The part of me that belongs to a fairy tale is..."', placeholder:'Write thy truth, {name}', freetextTag:'fairytale_self', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'fairytales_q21_not_princess', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>In the old fairy tales, what role would NOT suit thee?</em>', answers:[
      { text:'The one who waits to be rescued', scores:{ jasmine:5, merida:5, mulan:4, raya:4, moana:3, ariel:2 } },
      { text:'The quiet gentle one who never argues', scores:{ jasmine:4, merida:5, raya:4, elsa:3, tiana:3, 'snow-white':-2 } },
      { text:'The one who trades everything for love at first sight', scores:{ tiana:4, mulan:3, raya:3, belle:3, elsa:3 } },
      { text:'The villain — I could not carry that story', scores:{ 'snow-white':3, anna:3, cinderella:3, aurora:2, rapunzel:2, elsa:-2 } }
    ]},
    { id:'fairytales_q22_believe', category:'fairytales', type:'multipleChoice', weight:1.3, prompt:'<em>Dost thou believe thy own life has a fairy tale shape, <span class="name">{name}</span>?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Yes — I can see the shape of it', scores:{ aurora:4, rapunzel:3, 'snow-white':3, cinderella:3, anna:2 } },
      { text:'Sometimes — in certain lights', scores:{ belle:3, ariel:3, moana:3, elsa:2, pocahontas:3 } },
      { text:'Not yet — it is still in the hard middle', scores:{ tiana:5, mulan:3, raya:3, elsa:3, cinderella:2, merida:2 } },
      { text:'No — I do not want a fairy tale. I want my own real story', scores:{ jasmine:5, merida:3, raya:3, meg:4, tiana:2, moana:1 } }
    ]},
    { id:'fairytales_q23_old_new', category:'fairytales', type:'multipleChoice', weight:1.2, prompt:'<em>Dost thou prefer old fairy tales or new ones, <span class="name">{name}</span>?</em>', answers:[
      { text:'Old — the old ones have something raw that gets polished away', scores:{ belle:5, pocahontas:3, elsa:3, aurora:2, mulan:2 } },
      { text:'New — where women are the heroes of their own stories', scores:{ jasmine:5, merida:4, moana:4, raya:3, tiana:3 } },
      { text:'The ones that know what they are — that make no apologies', scores:{ ariel:4, rapunzel:3, jasmine:3, elsa:3, meg:3 } },
      { text:'The ones told around real fires by real people — wherever those come from', scores:{ pocahontas:5, mulan:3, moana:3, merida:2, belle:2 } }
    ]},
    { id:'fairytales_q24_ending', category:'fairytales', type:'multipleChoice', weight:1.4, prompt:'<em>What kind of ending dost thou want for thy fairy tale, <span class="name">{name}</span>?</em>', answers:[
      { text:'Happily ever after — peace, love, all the pain worth it', scores:{ cinderella:5, aurora:4, anna:4, 'snow-white':3, rapunzel:2 } },
      { text:'Changed — not perfect but real. She is not who she was', scores:{ mulan:5, moana:4, elsa:4, tiana:3, merida:3 } },
      { text:'Open — the story keeps going. There is no final page', scores:{ ariel:4, jasmine:4, rapunzel:3, merida:3, moana:2 } },
      { text:'Honest — it cost something. But she did not break', scores:{ raya:5, tiana:4, mulan:3, elsa:3, belle:3, meg:3 } }
    ]},
    { id:'fairytales_q25_truest', category:'fairytales', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is a fairy tale to thee, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'A way of believing the world can be better than it is', scores:{ cinderella:5, rapunzel:4, anna:3, 'snow-white':3, aurora:2 } },
      { text:'A map through the dark — not around it', scores:{ mulan:5, tiana:4, raya:4, moana:3, merida:3 } },
      { text:'A mirror — it shows me what I already know but cannot yet say', scores:{ belle:5, elsa:4, pocahontas:3, meg:4, raya:2 } },
      { text:'A promise someone kept — the old stories are old because they are true', scores:{ aurora:4, 'snow-white':3, belle:2, pocahontas:4, mulan:2, moana:2 } }
    ]}
  ],

  wishes: [
    { id:'wishes_v1_candle', category:'wishes', type:'visual', weight:1.5, prompt:'<em>A single candle burns before thee. Thou hast one wish. What moves through thee first?</em>', answers:[
      { text:'I wish for the people I love to be safe and glad', emoji:'💛', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:2 } },
      { text:'I wish for the freedom to become who I truly am', emoji:'✨', scores:{ jasmine:5, ariel:5, elsa:4, merida:3, rapunzel:3 } },
      { text:'I wish for the courage to do what I have been afraid to do', emoji:'🔥', scores:{ mulan:5, raya:4, tiana:4, merida:3, moana:2 } },
      { text:'I wish for understanding — to know what I cannot yet see', emoji:'💡', scores:{ belle:5, pocahontas:4, elsa:3, raya:2 } }
    ]},
    { id:'wishes_v2_star', category:'wishes', type:'visual', weight:1.4, prompt:'<em>The first star appears. The wish rises before thou canst think. What is it?</em>', answers:[
      { text:'More time — just a little more time with the ones I love', emoji:'⏳', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:1 } },
      { text:'A second chance — one moment I would do differently', emoji:'🌙', scores:{ tiana:5, mulan:4, cinderella:3, raya:3, belle:2 } },
      { text:'The voice to say what I have never been able to say', emoji:'💬', scores:{ elsa:5, ariel:4, rapunzel:3, meg:3, jasmine:2 } },
      { text:'A horizon — something I have not yet seen calling me forward', emoji:'🌅', scores:{ moana:5, ariel:3, merida:3, jasmine:3, rapunzel:2 } }
    ]},
    { id:'wishes_v3_well', category:'wishes', type:'visual', weight:1.4, prompt:'<em>An ancient wishing well. The coin is in thy hand. What dost thou ask?</em>', answers:[
      { text:'To be seen — truly seen — by someone I love', emoji:'🤍', scores:{ elsa:5, rapunzel:4, meg:3, jasmine:3, ariel:2 } },
      { text:'To do great good before I am gone', emoji:'⚔️', scores:{ mulan:5, tiana:5, moana:4, raya:3, pocahontas:3 } },
      { text:'To find where I belong — truly belong', emoji:'🌿', scores:{ ariel:5, jasmine:4, moana:3, elsa:3, merida:2 } },
      { text:'For the world to be a little kinder — for everyone', emoji:'🌸', scores:{ 'snow-white':5, anna:4, cinderella:3, aurora:3, tiana:2 } }
    ]},
    { id:'wishes_v4_granted', category:'wishes', type:'visual', weight:1.3, prompt:'<em>The wish is granted. The door is open. What is on the other side?</em>', answers:[
      { text:'The open sea — everything possible, nothing decided', emoji:'🌊', scores:{ moana:5, ariel:4, jasmine:3, merida:2, rapunzel:2 } },
      { text:'A library that never ends — every question answered', emoji:'📚', scores:{ belle:5, elsa:3, rapunzel:3, pocahontas:2, jasmine:1 } },
      { text:'A warm table — the people I love sitting at it', emoji:'🕯️', scores:{ anna:5, 'snow-white':4, cinderella:3, tiana:3, aurora:2 } },
      { text:'A mirror — the version of myself I was meant to become', emoji:'✨', scores:{ elsa:5, rapunzel:4, jasmine:3, merida:3, ariel:2 } }
    ]},
    { id:'wishes_q5_most', category:'wishes', type:'multipleChoice', weight:1.4, prompt:'<em>What dost thou wish for most, <span class="name">{name}</span>?</em>', context:'The mirror asks without judgment.', answers:[
      { text:'Love that is steady and certain', scores:{ anna:5, cinderella:4, aurora:3, 'snow-white':3, tiana:2 } },
      { text:'Freedom to choose my own life', scores:{ jasmine:5, merida:5, ariel:4, elsa:4, rapunzel:3 } },
      { text:'The courage I need for the next hard thing', scores:{ mulan:5, tiana:4, raya:4, moana:3, merida:2 } },
      { text:'To be known — to be seen completely and loved anyway', scores:{ elsa:5, meg:4, belle:3, rapunzel:3, raya:2 } }
    ]},
    { id:'wishes_q6_small', category:'wishes', type:'multipleChoice', weight:1.2, prompt:'<em>What small everyday wish dost thou catch thyself making, <span class="name">{name}</span>?</em>', answers:[
      { text:'That this moment could last just a little longer', scores:{ aurora:5, anna:4, rapunzel:3, cinderella:2, 'snow-white':2 } },
      { text:'That someone understood exactly what I meant', scores:{ belle:4, elsa:3, meg:4, ariel:3, rapunzel:2 } },
      { text:'That I had more time — for everything', scores:{ tiana:5, mulan:4, raya:3, moana:2, jasmine:2 } },
      { text:'That things were a little simpler', scores:{ cinderella:4, aurora:3, 'snow-white':3, anna:2, elsa:2 } }
    ]},
    { id:'wishes_q7_three', category:'wishes', type:'multipleChoice', weight:1.4, prompt:'<em>Three wishes — one for thyself, one for someone thou lovest, one for the world. What is thine own?</em>', context:'Only thy own wish, <span class="name">{name}</span>.', answers:[
      { text:'Courage to become who I am meant to be', scores:{ elsa:5, mulan:4, moana:4, jasmine:3, merida:3 } },
      { text:'A life built on what I truly love, not what is expected', scores:{ jasmine:5, ariel:4, tiana:4, merida:3, belle:3 } },
      { text:'To love well — and to be loved in return', scores:{ anna:5, cinderella:4, aurora:3, 'snow-white':3, tiana:2 } },
      { text:'To understand — to see what I cannot yet see', scores:{ belle:5, pocahontas:4, elsa:3, raya:3 } }
    ]},
    { id:'wishes_q8_tradeoff', category:'wishes', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A wish that changes thy life completely — or a wish that makes something already good a little better.', answers:[
      { text:'Change my life completely', scores:{ ariel:5, jasmine:4, moana:3, merida:3, rapunzel:3, elsa:2 } },
      { text:'Make something good a little better', scores:{ tiana:5, anna:4, 'snow-white':3, cinderella:3, aurora:3, elsa:2 } }
    ]},
    { id:'wishes_q9_for_world', category:'wishes', type:'multipleChoice', weight:1.4, prompt:'<em>If thou couldst wish one thing for the world, <span class="name">{name}</span>?</em>', answers:[
      { text:'That the cruel become kind', scores:{ 'snow-white':5, anna:4, cinderella:3, aurora:3 } },
      { text:'That the afraid become brave', scores:{ mulan:5, moana:4, merida:4, raya:3, tiana:2 } },
      { text:'That the divided find their way back to each other', scores:{ raya:5, moana:4, pocahontas:4, anna:3, tiana:3 } },
      { text:'That the world were stranger and more beautiful — more wonder everywhere', scores:{ rapunzel:5, ariel:4, pocahontas:3, belle:3, aurora:2 } }
    ]},
    { id:'wishes_q10_hurt', category:'wishes', type:'hurt', weight:1.3, prompt:'<em>If one of these were taken from thee forever, which loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'The ability to wish at all', scores:{ raya:-3, tiana:-2, mulan:-2, merida:-1, anna:1 } },
      { text:'The belief that wishes come true', scores:{ 'snow-white':-5, aurora:-4, cinderella:-4, anna:-3, raya:1, tiana:1 } },
      { text:'The courage to say the wish aloud', scores:{ elsa:-4, ariel:-4, rapunzel:-3, jasmine:-3, anna:1 } },
      { text:'The patience to wait for a wish to work', scores:{ ariel:-3, anna:-2, rapunzel:-2, jasmine:-2, tiana:1, raya:1 } }
    ]},
    { id:'wishes_q11_dangerous', category:'wishes', type:'scenario', weight:1.4, prompt:'<em>A wish comes true — but the cost is real. What wouldst thou have traded?</em>', answers:[
      { text:'Safety — I would trade ease for what I truly need', scores:{ ariel:5, moana:4, merida:3, jasmine:3, tiana:2 } },
      { text:'Certainty — I would trade knowing for becoming', scores:{ elsa:4, rapunzel:3, moana:3, merida:2, anna:2 } },
      { text:'Nothing — if the cost is too high, I will wait', scores:{ tiana:5, mulan:4, belle:3, raya:3, cinderella:2 } },
      { text:'A piece of myself I had not needed yet', scores:{ ariel:4, elsa:3, jasmine:3, moana:3, rapunzel:2 } }
    ]},
    { id:'wishes_q12_made', category:'wishes', type:'multipleChoice', weight:1.3, prompt:'<em>What is a wish thou have worked to make real, <span class="name">{name}</span>?</em>', answers:[
      { text:'A life built on what I love — not what I was told to love', scores:{ jasmine:5, ariel:4, tiana:4, merida:3, belle:3 } },
      { text:'A real home — warmth, people, belonging', scores:{ anna:5, cinderella:4, 'snow-white':3, tiana:2, aurora:2 } },
      { text:'The courage to be who I am — not who I was told to be', scores:{ elsa:5, jasmine:4, rapunzel:4, ariel:3, merida:3 } },
      { text:'I am still making it. The wish is still underway', scores:{ moana:5, tiana:3, mulan:3, raya:3, merida:2 } }
    ]},
    { id:'wishes_q13_others', category:'wishes', type:'multipleChoice', weight:1.2, prompt:'<em>When someone thou lovest makes a wish, what dost thou wish for them?</em>', answers:[
      { text:'Exactly what they wished for', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, rapunzel:2 } },
      { text:'What they wished for — plus the courage to wait for it', scores:{ tiana:5, mulan:4, raya:3, belle:2, moana:2 } },
      { text:'What they truly need, even if it is not what they asked', scores:{ belle:4, pocahontas:4, elsa:3, aurora:2, mulan:2 } },
      { text:'Peace — just that. Their own kind of peace', scores:{ elsa:4, cinderella:3, aurora:3, meg:4, 'snow-white':2 } }
    ]},
    { id:'wishes_q14_tradeoff', category:'wishes', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A wish that comes true but costs something — or a wish that never comes true but never costs anything either.', answers:[
      { text:'The wish that costs something', scores:{ ariel:5, tiana:5, mulan:4, moana:4, merida:3, raya:3 } },
      { text:'The safe wish that stays a wish', scores:{ aurora:4, 'snow-white':3, cinderella:3, elsa:2, meg:2 } }
    ]},
    { id:'wishes_q15_star', category:'wishes', type:'multipleChoice', weight:1.3, prompt:'<em>Dost thou believe wishes come true, <span class="name">{name}</span>?</em>', answers:[
      { text:'Yes — when you work toward them hard enough', scores:{ tiana:5, mulan:4, raya:3, merida:3, moana:2 } },
      { text:'Sometimes — I have seen it happen', scores:{ anna:4, 'snow-white':3, cinderella:3, rapunzel:2, aurora:2 } },
      { text:'Not by magic — but the wish shapes the work', scores:{ belle:4, belle:3, elsa:3, pocahontas:3, jasmine:2 } },
      { text:'I am not sure. But I make the wish anyway', scores:{ cinderella:4, aurora:3, ariel:3, 'snow-white':2, moana:2, meg:3 } }
    ]},
    { id:'wishes_q16_give_up', category:'wishes', type:'scenario', weight:1.3, prompt:'<em>Thou hast held a wish for a long time. It has not yet come. What dost thou do?</em>', answers:[
      { text:'I keep working. The wish requires it', scores:{ tiana:5, mulan:5, moana:3, raya:3, merida:2 } },
      { text:'I hold it gently — I trust the timing is not mine to control', scores:{ aurora:4, pocahontas:4, cinderella:3, anna:2, 'snow-white':2 } },
      { text:'I ask whether the wish still fits who I am now', scores:{ elsa:4, jasmine:4, ariel:3, belle:3, merida:2 } },
      { text:'I let it go and see what comes into the space', scores:{ moana:4, pocahontas:3, elsa:3, meg:3, aurora:2 } }
    ]},
    { id:'wishes_q17_for_child', category:'wishes', type:'multipleChoice', weight:1.2, prompt:'<em>What wish wouldst thou make for a child thou love?</em>', answers:[
      { text:'That she knows she is enough exactly as she is', scores:{ elsa:5, rapunzel:4, anna:3, 'snow-white':3, cinderella:2 } },
      { text:'That she always knows she is loved', scores:{ anna:5, 'snow-white':4, cinderella:4, aurora:3, rapunzel:2 } },
      { text:'That she finds the courage to live as herself', scores:{ mulan:5, jasmine:4, merida:4, tiana:3, moana:3 } },
      { text:'That the world be kinder to her than it was to me', scores:{ cinderella:5, rapunzel:4, elsa:3, tiana:2, aurora:2 } }
    ]},
    { id:'wishes_q18_deepest', category:'wishes', type:'multipleChoice', weight:1.4, prompt:'<em>What is the wish thou hast never said aloud, <span class="name">{name}</span>?</em>', context:'The mirror does not judge. Only asks.', answers:[
      { text:'To be free — truly free — to choose without consequence', scores:{ jasmine:5, ariel:4, elsa:4, merida:4, rapunzel:3 } },
      { text:'To be seen — completely, truly, loved without conditions', scores:{ elsa:5, meg:4, rapunzel:4, ariel:3, cinderella:2 } },
      { text:'To have done more good before it is too late', scores:{ tiana:5, mulan:5, moana:3, pocahontas:3, raya:3 } },
      { text:'To be known — by myself above all', scores:{ moana:5, elsa:4, mulan:4, pocahontas:3, merida:3 } }
    ]},
    { id:'wishes_q19_cost', category:'wishes', type:'multipleChoice', weight:1.3, prompt:'<em>What price art thou willing to pay for a wish?</em>', answers:[
      { text:'Work — years of it. Anything worth having is worth earning', scores:{ tiana:5, mulan:5, raya:3, merida:3, moana:2 } },
      { text:'Risk — I would face what it asks even afraid', scores:{ ariel:4, moana:4, jasmine:3, merida:3, anna:3 } },
      { text:'Patience — I will wait', scores:{ aurora:5, pocahontas:4, cinderella:3, 'snow-white':3, elsa:2 } },
      { text:'I do not want a wish that demands too much — I have learned caution', scores:{ belle:4, elsa:3, tiana:2, meg:3, raya:2 } }
    ]},
    { id:'wishes_q20_freetext', category:'wishes', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"A wish I have carried for a long time without saying it aloud is..."', placeholder:'Write thy truth, {name}', freetextTag:'unspoken_wish', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'wishes_q21_regret', category:'wishes', type:'multipleChoice', weight:1.3, prompt:'<em>Is there a wish thou hast made that thou now regret?</em>', context:'The mirror asks gently.', answers:[
      { text:'Yes — but I would not undo the learning it brought', scores:{ tiana:4, elsa:3, ariel:3, mulan:3, anna:2 } },
      { text:'No — my wishes have been true even if they hurt', scores:{ jasmine:4, ariel:3, moana:3, rapunzel:2, merida:2 } },
      { text:'I have wished for the wrong thing and known it even as I wished', scores:{ elsa:5, meg:4, ariel:3, jasmine:3, cinderella:2 } },
      { text:'I try not to regret — but I hold my wishes more carefully now', scores:{ raya:5, tiana:3, mulan:3, belle:3, aurora:2 } }
    ]},
    { id:'wishes_q22_power', category:'wishes', type:'multipleChoice', weight:1.4, prompt:'<em>Where does the power of a wish come from, <span class="name">{name}</span>?</em>', answers:[
      { text:'From the strength of the wanting — the longing makes the path', scores:{ ariel:5, moana:4, jasmine:3, rapunzel:3, anna:2 } },
      { text:'From the work — the wish matters but the doing is the magic', scores:{ tiana:5, mulan:5, raya:4, merida:3, moana:2 } },
      { text:'From something beyond me — I do not understand it fully', scores:{ aurora:4, pocahontas:4, 'snow-white':3, cinderella:2, anna:2 } },
      { text:'From knowing what I truly want — that alone is rare', scores:{ belle:4, elsa:4, jasmine:3, moana:3, pocahontas:2 } }
    ]},
    { id:'wishes_q23_already', category:'wishes', type:'multipleChoice', weight:1.2, prompt:'<em>What wish has already come true for thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'I found someone who truly knows me', scores:{ anna:5, 'snow-white':4, cinderella:3, rapunzel:3, aurora:2 } },
      { text:'I became someone I did not know I could be', scores:{ mulan:5, tiana:4, elsa:4, rapunzel:3, ariel:2 } },
      { text:'I found the courage I thought I lacked', scores:{ mulan:5, cinderella:4, tiana:4, raya:3, merida:3 } },
      { text:'I found a version of freedom I did not know existed', scores:{ ariel:4, jasmine:4, merida:4, elsa:3, moana:3 } }
    ]},
    { id:'wishes_q24_last', category:'wishes', type:'multipleChoice', weight:1.4, prompt:'<em>If thou had one wish left for the rest of thy life, what wouldst thou save it for?</em>', answers:[
      { text:'Something for someone I love — when they need it most', scores:{ anna:5, 'snow-white':4, cinderella:3, mulan:3, tiana:2 } },
      { text:'Something for myself — the one thing I have not yet dared', scores:{ elsa:5, jasmine:4, ariel:4, merida:3, rapunzel:3 } },
      { text:'I would not save it. I would use it now', scores:{ ariel:3, anna:3, rapunzel:3, moana:3, merida:2 } },
      { text:'I would hold it a long time, then know', scores:{ aurora:4, pocahontas:4, elsa:3, cinderella:3, belle:3 } }
    ]},
    { id:'wishes_q25_truest', category:'wishes', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is a wish, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'The truest version of what I want — before fear edits it', scores:{ elsa:5, jasmine:4, ariel:4, moana:3, merida:3, rapunzel:3 } },
      { text:'A map — it tells me where to go even before I know the way', scores:{ tiana:5, mulan:4, moana:4, raya:3, anna:2 } },
      { text:'An act of trust — I believe something is possible', scores:{ anna:5, 'snow-white':4, cinderella:4, aurora:3, rapunzel:2 } },
      { text:'The thing that waits in me even when I have stopped hoping', scores:{ cinderella:4, aurora:3, meg:5, elsa:3, rapunzel:2, ariel:1 } }
    ]}
  ],

  dreams: [
    { id:'dreams_v1_sleep', category:'dreams', type:'visual', weight:1.5, prompt:'<em>Thou sleepest and dreamest. Which dream most often finds thee?</em>', answers:[
      { text:'Flying — not afraid, moving through sky like breathing', emoji:'✨', scores:{ ariel:5, moana:3, jasmine:3, merida:3, rapunzel:2 } },
      { text:'A door I have never opened — waiting at the threshold', emoji:'🚪', scores:{ belle:5, elsa:4, rapunzel:3, jasmine:3, ariel:2 } },
      { text:'Home, but changed — familiar and strange at once', emoji:'🏡', scores:{ rapunzel:4, anna:4, cinderella:3, 'snow-white':3, elsa:2 } },
      { text:'Running toward something — something that matters enormously', emoji:'🌅', scores:{ mulan:5, tiana:4, moana:3, raya:3, anna:2 } }
    ]},
    { id:'dreams_v2_daylight', category:'dreams', type:'visual', weight:1.4, prompt:'<em>Even awake, thou dreamest. Which daydream is most truly thine?</em>', answers:[
      { text:'A life I could be living if one thing had been different', emoji:'🌿', scores:{ ariel:5, jasmine:4, elsa:3, rapunzel:3, cinderella:2 } },
      { text:'The thing I am working toward — I can see it already', emoji:'⭐', scores:{ tiana:5, mulan:5, moana:3, raya:3, merida:2 } },
      { text:'A person I love, doing well — I dream for others', emoji:'💛', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:1 } },
      { text:'A future I do not fully believe is possible yet', emoji:'🌙', scores:{ elsa:5, moana:4, rapunzel:3, meg:4, raya:2 } }
    ]},
    { id:'dreams_v3_night', category:'dreams', type:'visual', weight:1.3, prompt:'<em>At night, just before sleep, where dost thy mind go?</em>', answers:[
      { text:'The good moments of the day — I hold them close', emoji:'🌸', scores:{ anna:5, 'snow-white':4, aurora:3, cinderella:2, rapunzel:2 } },
      { text:'Tomorrow — the things I will do, the things I must do', emoji:'📋', scores:{ tiana:5, mulan:4, raya:3, merida:2, cinderella:2 } },
      { text:'Somewhere else entirely — a story, a place, a life not mine', emoji:'🌌', scores:{ belle:5, ariel:4, rapunzel:3, jasmine:3, elsa:2 } },
      { text:'Inward — to something I am still working out', emoji:'💭', scores:{ elsa:5, pocahontas:4, meg:4, belle:3, raya:2 } }
    ]},
    { id:'dreams_v4_memory', category:'dreams', type:'visual', weight:1.3, prompt:'<em>Thou rememberest a dream that has stayed with thee. What kind?</em>', answers:[
      { text:'A dream of a place so real I grieved when I woke', emoji:'🌿', scores:{ pocahontas:5, aurora:3, belle:3, elsa:3, ariel:2 } },
      { text:'A dream where I did something I had been afraid to do', emoji:'⚔️', scores:{ mulan:5, raya:4, merida:4, moana:3, anna:2 } },
      { text:'A dream where someone I love was there — just there', emoji:'💛', scores:{ anna:5, 'snow-white':3, cinderella:3, tiana:2, aurora:2 } },
      { text:'A dream that warned me — I knew something before I knew', emoji:'🌙', scores:{ aurora:5, pocahontas:4, elsa:3, belle:3, meg:2 } }
    ]},
    { id:'dreams_q5_big', category:'dreams', type:'multipleChoice', weight:1.4, prompt:'<em>What is thy biggest dream, <span class="name">{name}</span>?</em>', context:'Not what thou thinksest thou shouldst want. What thou actually want.', answers:[
      { text:'A life I built myself — on my own terms', scores:{ jasmine:5, tiana:5, ariel:4, merida:4, elsa:3 } },
      { text:'A love that is real and lasting and chosen', scores:{ anna:5, cinderella:4, aurora:4, 'snow-white':3 } },
      { text:'To do something that matters beyond my own life', scores:{ mulan:5, moana:5, tiana:3, pocahontas:4, raya:4 } },
      { text:'To know myself — completely, clearly, without fear', scores:{ elsa:5, moana:4, rapunzel:4, pocahontas:3, merida:3 } }
    ]},
    { id:'dreams_q6_secret', category:'dreams', type:'multipleChoice', weight:1.4, prompt:'<em>What dream dost thou hide, even from those closest to thee, <span class="name">{name}</span>?</em>', context:'The mirror does not judge.', answers:[
      { text:'A life entirely different from this one', scores:{ ariel:5, elsa:4, jasmine:4, meg:4, cinderella:3 } },
      { text:'To be great — not just good. Truly extraordinary', scores:{ tiana:5, mulan:4, moana:4, raya:3, jasmine:3 } },
      { text:'To belong somewhere so completely that I stop looking', scores:{ ariel:5, rapunzel:4, elsa:4, moana:3, jasmine:3 } },
      { text:'To be loved in a way I have only ever imagined', scores:{ aurora:5, cinderella:5, 'snow-white':4, anna:3, rapunzel:3 } }
    ]},
    { id:'dreams_q7_waking', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>What dost thou hope for when thou first wakest each morning, <span class="name">{name}</span>?</em>', answers:[
      { text:'A good day — simple, real, mine', scores:{ tiana:4, anna:3, 'snow-white':3, cinderella:2, aurora:2 } },
      { text:'Progress — that today I move toward something that matters', scores:{ tiana:5, mulan:4, raya:3, moana:3, merida:2 } },
      { text:'Presence — that I notice what is here', scores:{ pocahontas:5, aurora:3, elsa:3, belle:3, anna:2 } },
      { text:'Nothing — I try not to want too much before I am awake', scores:{ elsa:4, raya:3, meg:3, merida:2, jasmine:2, anna:-2 } }
    ]},
    { id:'dreams_q8_tradeoff', category:'dreams', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A dream that comes true but changes thy life completely — or a dream that never comes true but is always beautiful.', answers:[
      { text:'The dream that comes true', scores:{ ariel:5, tiana:5, moana:4, mulan:4, anna:3, merida:3 } },
      { text:'The dream that is always beautiful', scores:{ aurora:5, cinderella:4, 'snow-white':3, elsa:3, rapunzel:2, meg:3 } }
    ]},
    { id:'dreams_q9_pursuit', category:'dreams', type:'multipleChoice', weight:1.4, prompt:'<em>How dost thou pursue a dream, <span class="name">{name}</span>?</em>', answers:[
      { text:'I plan carefully and work steadily', scores:{ tiana:5, mulan:5, raya:4, cinderella:2 } },
      { text:'I leap before I know it is possible', scores:{ ariel:5, anna:4, rapunzel:3, merida:3, jasmine:2 } },
      { text:'I wait for the right moment — then I go fast', scores:{ mulan:4, jasmine:3, raya:3, elsa:3, pocahontas:2 } },
      { text:'I hold it long and quietly, then decide what it truly asks', scores:{ aurora:4, belle:4, pocahontas:3, elsa:3, moana:2 } }
    ]},
    { id:'dreams_q10_hurt', category:'dreams', type:'hurt', weight:1.3, prompt:'<em>If one of these were taken forever, which loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'The dream that may never come true', scores:{ raya:1, tiana:1, mulan:1, aurora:-3, cinderella:-3, 'snow-white':-2 } },
      { text:'The ability to dream at night', scores:{ aurora:-3, pocahontas:-2, elsa:-2, meg:-1, tiana:1 } },
      { text:'The belief that dreams are worth chasing', scores:{ tiana:-5, mulan:-4, moana:-3, anna:-3, merida:-2, raya:1 } },
      { text:'The small daily dreams — the ones we barely notice', scores:{ cinderella:-3, anna:-2, 'snow-white':-2, aurora:-1, elsa:1 } }
    ]},
    { id:'dreams_q11_given_up', category:'dreams', type:'scenario', weight:1.4, prompt:'<em>Thou hast let a dream go. How dost thou hold that, <span class="name">{name}</span>?</em>', context:'The mirror does not judge.', answers:[
      { text:'Carefully — I do not let myself regret it too often', scores:{ tiana:4, mulan:3, cinderella:3, raya:3, aurora:2 } },
      { text:'With grief — I miss it', scores:{ ariel:5, rapunzel:3, jasmine:3, elsa:3, meg:3 } },
      { text:'With peace — it was the right thing at the right time', scores:{ pocahontas:5, aurora:4, moana:3, elsa:2, belle:2 } },
      { text:'I have not let any go yet — or I pretend I have not', scores:{ anna:3, merida:2, ariel:2, jasmine:2, meg:3 } }
    ]},
    { id:'dreams_q12_fear', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>What fear lives inside thy biggest dream, <span class="name">{name}</span>?</em>', context:'The mirror asks gently.', answers:[
      { text:'That I will work for it and still fail', scores:{ tiana:5, mulan:4, raya:3, cinderella:3, merida:2 } },
      { text:'That I will get it and it will not be what I imagined', scores:{ ariel:5, jasmine:4, rapunzel:3, elsa:3, moana:2 } },
      { text:'That I do not deserve it', scores:{ cinderella:5, rapunzel:4, 'snow-white':3, anna:2, elsa:2 } },
      { text:'That wanting it so much makes me somehow wrong', scores:{ elsa:5, jasmine:3, ariel:3, meg:4, rapunzel:2 } }
    ]},
    { id:'dreams_q13_others', category:'dreams', type:'multipleChoice', weight:1.2, prompt:'<em>Dost thou share thy dreams with others, <span class="name">{name}</span>?</em>', answers:[
      { text:'Yes — I need to say it to make it real', scores:{ anna:5, ariel:4, rapunzel:3, tiana:2, anna:2 } },
      { text:'Only with the people who will protect it, not diminish it', scores:{ elsa:4, belle:3, tiana:3, mulan:2, meg:3 } },
      { text:'Rarely — it feels safer to hold them quietly', scores:{ elsa:3, jasmine:3, merida:2, cinderella:2, aurora:2 } },
      { text:'No — the dream changes when I say it aloud before it is ready', scores:{ mulan:4, raya:3, moana:3, pocahontas:3, elsa:2 } }
    ]},
    { id:'dreams_q14_tradeoff', category:'dreams', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A small dream that is certain — or a huge dream that may never happen.', answers:[
      { text:'The small certain dream', scores:{ tiana:4, cinderella:3, 'snow-white':3, aurora:3, anna:2, raya:2 } },
      { text:'The huge dream that may never happen', scores:{ ariel:5, moana:5, jasmine:4, tiana:4, merida:3, mulan:3, rapunzel:2 } }
    ]},
    { id:'dreams_q15_made', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>What dream have thy efforts already made real, <span class="name">{name}</span>?</em>', answers:[
      { text:'A life built on something I chose', scores:{ jasmine:4, tiana:4, ariel:3, merida:3, elsa:2 } },
      { text:'A relationship that makes me better', scores:{ anna:5, 'snow-white':3, cinderella:3, aurora:2, belle:2 } },
      { text:'A version of myself I am still becoming but can already see', scores:{ mulan:4, moana:4, elsa:3, rapunzel:3, ariel:2 } },
      { text:'I am still working. The dream is still ahead', scores:{ tiana:5, mulan:3, raya:3, moana:3, merida:2 } }
    ]},
    { id:'dreams_q16_recurring', category:'dreams', type:'multipleChoice', weight:1.2, prompt:'<em>Thou hast a recurring dream. What kind?</em>', answers:[
      { text:'A place I return to — always the same place', scores:{ pocahontas:5, aurora:3, elsa:3, belle:3, ariel:2 } },
      { text:'Running — something behind me or toward me', scores:{ mulan:3, raya:3, cinderella:2, anna:2, merida:2 } },
      { text:'Being somewhere I belong but waking before I understand it', scores:{ elsa:5, ariel:4, rapunzel:3, moana:3, jasmine:2 } },
      { text:'I do not often remember my dreams', scores:{ tiana:3, mulan:2, raya:2, meg:3, jasmine:2 } }
    ]},
    { id:'dreams_q17_hold', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>How dost thou hold a dream that has not yet come, <span class="name">{name}</span>?</em>', answers:[
      { text:'With faith — I know it is coming even when I cannot see how', scores:{ anna:5, 'snow-white':4, cinderella:4, aurora:3, rapunzel:2 } },
      { text:'With work — I do the next thing and the next', scores:{ tiana:5, mulan:5, raya:4, moana:3, merida:2 } },
      { text:'With patience — quietly, in the back of everything', scores:{ aurora:4, pocahontas:4, elsa:3, belle:3, cinderella:2 } },
      { text:'With honesty — some days the dream seems impossible', scores:{ elsa:4, raya:3, meg:4, tiana:2, jasmine:2 } }
    ]},
    { id:'dreams_q18_tomorrow', category:'dreams', type:'multipleChoice', weight:1.2, prompt:'<em>What dost thou dream of for tomorrow, <span class="name">{name}</span>?</em>', answers:[
      { text:'A day where I do something that matters', scores:{ tiana:4, mulan:3, moana:3, raya:3, anna:2 } },
      { text:'A day where I am kind in at least one real way', scores:{ 'snow-white':5, anna:4, cinderella:3, aurora:2, tiana:2 } },
      { text:'A day where I am brave in at least one small way', scores:{ mulan:4, rapunzel:4, anna:3, elsa:3, cinderella:2 } },
      { text:'A day where I know what I want', scores:{ elsa:5, jasmine:4, moana:3, merida:3, meg:3 } }
    ]},
    { id:'dreams_q19_awake', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>Where dost thou go in thy daydreams, <span class="name">{name}</span>?</em>', answers:[
      { text:'Somewhere I have been and loved and want to return to', scores:{ aurora:4, 'snow-white':3, cinderella:3, anna:2, tiana:2 } },
      { text:'Somewhere I have never been but already know', scores:{ ariel:5, moana:4, belle:3, jasmine:3, rapunzel:2 } },
      { text:'Into a conversation I wish I had said differently', scores:{ elsa:4, meg:4, tiana:2, cinderella:2, raya:2 } },
      { text:'Into the life I am trying to build', scores:{ tiana:5, mulan:4, moana:3, rapunzel:3, anna:2 } }
    ]},
    { id:'dreams_q20_freetext', category:'dreams', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The dream I have kept the longest, that I still carry, is..."', placeholder:'Write thy truth, {name}', freetextTag:'oldest_dream', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'dreams_q21_wake', category:'dreams', type:'scenario', weight:1.2, prompt:'<em>Thou wakest from a dream that felt more real than real life. What dost thou do?</em>', answers:[
      { text:'Lie still and try to hold every detail before it fades', scores:{ belle:4, elsa:4, pocahontas:3, aurora:3, rapunzel:3 } },
      { text:'Write it down immediately', scores:{ belle:5, tiana:3, rapunzel:3, mulan:2, ariel:2 } },
      { text:'Carry the feeling with me all day', scores:{ aurora:5, pocahontas:3, cinderella:3, 'snow-white':2, anna:2 } },
      { text:'Let it go — dreams are dreams', scores:{ raya:4, mulan:3, merida:3, jasmine:2, tiana:2 } }
    ]},
    { id:'dreams_q22_already_has', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>Which dream dost thou already secretly live in, <span class="name">{name}</span>?</em>', context:'Not the future — the present.', answers:[
      { text:'A world where beauty is everywhere if I look', scores:{ rapunzel:5, ariel:4, aurora:3, pocahontas:3, 'snow-white':2 } },
      { text:'A life where my work means something', scores:{ tiana:5, mulan:4, moana:3, raya:3, merida:2 } },
      { text:'A circle of people who love me and whom I love', scores:{ anna:5, 'snow-white':4, cinderella:3, tiana:2, aurora:2 } },
      { text:'A self I am still becoming, but can already feel', scores:{ elsa:5, moana:4, rapunzel:3, ariel:3, merida:3 } }
    ]},
    { id:'dreams_q23_impossible', category:'dreams', type:'multipleChoice', weight:1.3, prompt:'<em>What impossible dream dost thou allow thyself, <span class="name">{name}</span>?</em>', answers:[
      { text:'That the world becomes kinder', scores:{ 'snow-white':5, anna:4, pocahontas:4, cinderella:3, aurora:2 } },
      { text:'That every person finds where they belong', scores:{ moana:5, ariel:4, elsa:4, rapunzel:3, pocahontas:2 } },
      { text:'That the people I love are always all right', scores:{ anna:5, mulan:4, 'snow-white':3, cinderella:3, tiana:2 } },
      { text:'That I become fully myself before the end', scores:{ elsa:5, jasmine:4, moana:4, merida:3, ariel:3 } }
    ]},
    { id:'dreams_q24_next', category:'dreams', type:'multipleChoice', weight:1.4, prompt:'<em>What is thy next dream, <span class="name">{name}</span>?</em>', context:'The one just ahead.', answers:[
      { text:'Something I am building right now, slowly and carefully', scores:{ tiana:5, mulan:4, raya:3, merida:2, moana:2 } },
      { text:'Something I have not said aloud yet', scores:{ elsa:5, jasmine:4, ariel:3, meg:4, rapunzel:2 } },
      { text:'Something I thought was too big for me and am beginning to reach toward', scores:{ moana:5, anna:4, rapunzel:3, tiana:3, mulan:2 } },
      { text:'Something small and certain that I have earned', scores:{ cinderella:5, aurora:3, 'snow-white':3, anna:2, tiana:2 } }
    ]},
    { id:'dreams_q25_truest', category:'dreams', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is a dream, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'A map of who I am becoming', scores:{ elsa:5, moana:5, mulan:4, rapunzel:3, tiana:3 } },
      { text:'A promise I make to myself', scores:{ tiana:5, mulan:4, raya:4, anna:3, merida:3 } },
      { text:'A hunger — the wanting itself is what keeps me going', scores:{ ariel:5, jasmine:4, moana:3, merida:3, rapunzel:2 } },
      { text:'The thing that is there even when everything else falls away', scores:{ aurora:4, cinderella:3, 'snow-white':3, anna:3, elsa:3, pocahontas:3 } }
    ]}
  ],

  voice: [
    { id:'voice_v1_speak', category:'voice', type:'visual', weight:1.5, prompt:'<em>In which moment dost thou most love using thy voice?</em>', answers:[
      { text:'Singing alone at the edge of the sea at night', emoji:'🌊', scores:{ ariel:5, moana:3, elsa:3, rapunzel:2, jasmine:2 } },
      { text:'Saying something true that silences a room', emoji:'💬', scores:{ jasmine:5, raya:5, mulan:4, merida:3, belle:3 } },
      { text:'Telling a story that makes someone lean in', emoji:'📖', scores:{ rapunzel:5, belle:4, ariel:3, anna:3, pocahontas:3 } },
      { text:'Saying I love thee — and having it received', emoji:'💛', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:2 } }
    ]},
    { id:'voice_v2_silent', category:'voice', type:'visual', weight:1.4, prompt:'<em>When art thou most silent, and what does thy silence say?</em>', answers:[
      { text:'When I am thinking — my silence is not absence, it is attention', emoji:'💭', scores:{ belle:5, elsa:4, pocahontas:3, aurora:3, raya:2 } },
      { text:'When I am angry — silence is the last door I close before action', emoji:'❄️', scores:{ elsa:5, raya:4, jasmine:3, meg:3, mulan:2 } },
      { text:'When I am full of wonder — words would diminish it', emoji:'🌿', scores:{ pocahontas:5, aurora:4, belle:3, moana:3, elsa:2 } },
      { text:'When I need someone to know I am listening', emoji:'🌸', scores:{ anna:4, 'snow-white':3, cinderella:3, aurora:2, tiana:2 } }
    ]},
    { id:'voice_v3_no', category:'voice', type:'visual', weight:1.4, prompt:'<em>When is the hardest no thou hast ever had to say?</em>', answers:[
      { text:'No to being small — refusing the life someone else chose for thee', emoji:'⚔️', scores:{ jasmine:5, merida:5, ariel:4, elsa:4, rapunzel:3 } },
      { text:'No to staying silent when something demanded to be said', emoji:'💬', scores:{ raya:5, belle:5, mulan:4, jasmine:3, pocahontas:3 } },
      { text:'No to a person who needed to hear it even though it cost thee something', emoji:'💔', scores:{ tiana:4, raya:4, anna:3, elsa:3, cinderella:2 } },
      { text:'No to myself — when I wanted something I knew I should not want', emoji:'🌙', scores:{ mulan:5, elsa:4, tiana:4, raya:3, cinderella:3 } }
    ]},
    { id:'voice_v4_yes', category:'voice', type:'visual', weight:1.3, prompt:'<em>When is the most important yes thou hast spoken?</em>', answers:[
      { text:'Yes to a dream that terrified thee', emoji:'✨', scores:{ ariel:5, moana:4, rapunzel:4, anna:3, tiana:3 } },
      { text:'Yes to a person who asked thee to trust them again', emoji:'🤝', scores:{ anna:5, raya:4, tiana:3, 'snow-white':3, cinderella:2 } },
      { text:'Yes to thyself — when the moment asked who thou art', emoji:'🌸', scores:{ elsa:5, mulan:4, merida:4, jasmine:3, moana:3 } },
      { text:'Yes to staying — when it would have been easier to leave', emoji:'🕯️', scores:{ anna:5, cinderella:4, 'snow-white':3, aurora:3, belle:2 } }
    ]},
    { id:'voice_q5_truth', category:'voice', type:'multipleChoice', weight:1.4, prompt:'<em>How dost thou feel about saying what thou truly think, <span class="name">{name}</span>?</em>', answers:[
      { text:'Natural — I say it. The world adjusts', scores:{ raya:5, jasmine:4, merida:4, mulan:3, belle:3 } },
      { text:'Careful — I say it, but I think about how', scores:{ belle:5, pocahontas:4, tiana:3, elsa:3, aurora:2 } },
      { text:'Hard — I feel it but I often swallow it', scores:{ elsa:5, cinderella:3, aurora:3, 'snow-white':3, meg:3 } },
      { text:'It depends who is listening', scores:{ anna:3, rapunzel:3, merida:2, jasmine:2, cinderella:2 } }
    ]},
    { id:'voice_q6_lost', category:'voice', type:'scenario', weight:1.4, prompt:'<em>Hast thou ever lost thy voice — not literally, but truly, <span class="name">{name}</span>?</em>', context:'A time when what thou needed to say could not come out.', answers:[
      { text:'Yes — and reclaiming it was the most important thing I have done', scores:{ elsa:5, ariel:5, rapunzel:4, jasmine:3, merida:2 } },
      { text:'Yes — I am still finding my way back', scores:{ elsa:4, cinderella:3, 'snow-white':2, rapunzel:3, meg:3 } },
      { text:'Many times — in different ways, for different reasons', scores:{ tiana:3, mulan:3, raya:3, anna:2, belle:2 } },
      { text:'Not yet — but I know the risk is real', scores:{ aurora:3, jasmine:3, merida:3, moana:2, anna:2 } }
    ]},
    { id:'voice_q7_speaking', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>When dost thou speak loudest, <span class="name">{name}</span>?</em>', answers:[
      { text:'When something is wrong and needs naming', scores:{ jasmine:5, raya:5, belle:4, mulan:3, merida:3 } },
      { text:'When someone I love needs to hear something difficult', scores:{ tiana:4, raya:3, mulan:3, anna:3, belle:3 } },
      { text:'When the moment finally gives me the space I have been waiting for', scores:{ elsa:5, ariel:4, rapunzel:3, cinderella:3, jasmine:2 } },
      { text:'When I am in a story — mine or someone else\'s', scores:{ ariel:4, rapunzel:5, belle:3, pocahontas:3, anna:2 } }
    ]},
    { id:'voice_q8_tradeoff', category:'voice', type:'tradeoff', weight:1.5, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'Always saying exactly what thou meanest, even when it costs thee — or always saying the kind thing, even when it is not quite the truth.', answers:[
      { text:'Always say what I mean', scores:{ raya:5, belle:5, jasmine:4, mulan:3, elsa:3, 'snow-white':-2 } },
      { text:'Always say the kind thing', scores:{ 'snow-white':5, anna:5, aurora:4, cinderella:4, raya:-2, belle:-2 } }
    ]},
    { id:'voice_q9_listening', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>Art thou a better speaker or listener, <span class="name">{name}</span>?</em>', answers:[
      { text:'Listener — I hold the space more than I fill it', scores:{ pocahontas:5, aurora:4, elsa:3, belle:3, cinderella:2 } },
      { text:'Speaker — I think through speaking. Words help me understand', scores:{ anna:4, rapunzel:4, ariel:3, jasmine:3, anna:2 } },
      { text:'Both in different moments — I shift to what is needed', scores:{ tiana:3, mulan:3, raya:3, moana:2, pocahontas:2 } },
      { text:'Neither — I am still learning both', scores:{ elsa:4, merida:3, cinderella:2, rapunzel:2, meg:2 } }
    ]},
    { id:'voice_q10_hurt', category:'voice', type:'hurt', weight:1.4, prompt:'<em>If one of these were taken from thy voice forever, which loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'The ability to sing', scores:{ ariel:-5, rapunzel:-3, 'snow-white':-2, mulan:-1, raya:1 } },
      { text:'The ability to say no', scores:{ jasmine:-5, merida:-4, elsa:-3, raya:-3, cinderella:1 } },
      { text:'The ability to speak truth in public', scores:{ belle:-4, raya:-4, mulan:-3, jasmine:-3, aurora:1, cinderella:1 } },
      { text:'The ability to whisper — the quiet voice, the private one', scores:{ elsa:-4, aurora:-3, pocahontas:-3, meg:-3, raya:1 } }
    ]},
    { id:'voice_q11_never_say', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>What thing hast thou never been able to say aloud, <span class="name">{name}</span>?</em>', context:'The mirror asks gently. There is no judgment here.', answers:[
      { text:'The full truth of something I feel that is too large for words', scores:{ elsa:5, rapunzel:3, ariel:3, aurora:3, pocahontas:3 } },
      { text:'What I truly want from the people I love', scores:{ elsa:4, cinderella:3, aurora:2, 'snow-white':2, rapunzel:2 } },
      { text:'Something I am ashamed of', scores:{ tiana:4, cinderella:3, elsa:3, rapunzel:2, meg:3 } },
      { text:'Something I love so much that saying it would make me vulnerable', scores:{ elsa:5, meg:4, raya:3, jasmine:3, belle:2 } }
    ]},
    { id:'voice_q12_heard', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>When dost thou feel most heard, <span class="name">{name}</span>?</em>', answers:[
      { text:'When someone repeats back exactly what I said and it sounds right', scores:{ belle:4, elsa:3, meg:3, raya:2, rapunzel:2 } },
      { text:'When someone acts on what I said without being asked again', scores:{ tiana:5, mulan:4, raya:3, jasmine:3, merida:2 } },
      { text:'When someone is quiet and still while I speak', scores:{ pocahontas:5, aurora:4, belle:3, elsa:2, cinderella:2 } },
      { text:'When the room changes because of what I said', scores:{ jasmine:5, mulan:4, raya:4, merida:3, ariel:2 } }
    ]},
    { id:'voice_q13_say_sorry', category:'voice', type:'multipleChoice', weight:1.2, prompt:'<em>How dost thou say sorry, <span class="name">{name}</span>?</em>', answers:[
      { text:'Directly, with words — I say exactly what I was wrong about', scores:{ mulan:5, tiana:4, raya:3, anna:3, jasmine:2 } },
      { text:'By doing something — I show it before I say it', scores:{ cinderella:4, 'snow-white':4, aurora:2, tiana:2, elsa:2 } },
      { text:'With difficulty — I know I should say it more easily than I do', scores:{ elsa:5, meg:4, raya:3, jasmine:3, mulan:1 } },
      { text:'Quickly and completely — I do not like carrying it', scores:{ anna:5, rapunzel:3, 'snow-white':2, cinderella:2, aurora:2 } }
    ]},
    { id:'voice_q14_tradeoff', category:'voice', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A voice that always commands a room — or a voice that always reaches one person exactly right.', answers:[
      { text:'A voice that commands a room', scores:{ jasmine:5, mulan:3, raya:3, ariel:3, moana:2, elsa:2 } },
      { text:'A voice that reaches one person exactly right', scores:{ belle:5, elsa:4, aurora:3, cinderella:3, pocahontas:3, anna:3, meg:3 } }
    ]},
    { id:'voice_q15_written', category:'voice', type:'multipleChoice', weight:1.2, prompt:'<em>Which comes more easily to thee — speaking or writing?</em>', answers:[
      { text:'Speaking — the voice carries what the page cannot', scores:{ ariel:4, anna:4, rapunzel:3, jasmine:3, merida:3 } },
      { text:'Writing — I need to choose each word', scores:{ belle:5, elsa:4, meg:4, raya:3, pocahontas:2 } },
      { text:'It depends on what I am saying', scores:{ tiana:3, mulan:3, aurora:2, moana:2, raya:2 } },
      { text:'Neither feels easy — I work at both', scores:{ elsa:3, cinderella:3, aurora:2, merida:2, 'snow-white':2 } }
    ]},
    { id:'voice_q16_name', category:'voice', type:'multipleChoice', weight:1.4, prompt:'<em>How dost thou feel about thy own name, <span class="name">{name}</span>?</em>', answers:[
      { text:'I love it — it sounds like who I am', scores:{ ariel:4, rapunzel:3, anna:3, jasmine:3, moana:2 } },
      { text:'I have grown into it', scores:{ mulan:5, tiana:4, elsa:3, moana:3, merida:2 } },
      { text:'It is only part of who I am — I am more than a name', scores:{ elsa:4, raya:3, merida:3, jasmine:3, meg:3 } },
      { text:'Someone else chose it — I make it mine', scores:{ mulan:5, rapunzel:4, moana:4, merida:3, ariel:2 } }
    ]},
    { id:'voice_q17_asking', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>How easy is it for thee to ask for what thou needest, <span class="name">{name}</span>?</em>', answers:[
      { text:'Easy — I ask clearly and trust the answer', scores:{ jasmine:4, anna:3, merida:3, ariel:2, tiana:2 } },
      { text:'Hard — I am better at giving than asking', scores:{ 'snow-white':4, cinderella:4, aurora:3, anna:2, tiana:2 } },
      { text:'Very hard — asking makes me feel exposed', scores:{ elsa:5, rapunzel:4, cinderella:3, meg:3, aurora:2 } },
      { text:'It depends what I am asking for', scores:{ belle:3, raya:3, pocahontas:3, mulan:2, jasmine:2 } }
    ]},
    { id:'voice_q18_power', category:'voice', type:'multipleChoice', weight:1.4, prompt:'<em>What do thou believe about the power of words, <span class="name">{name}</span>?</em>', answers:[
      { text:'They are the most powerful thing we have', scores:{ belle:5, pocahontas:4, ariel:3, rapunzel:3, jasmine:2 } },
      { text:'They matter only when they lead to action', scores:{ mulan:5, tiana:5, raya:4, merida:3, moana:2 } },
      { text:'They can heal or destroy — I am careful with mine', scores:{ elsa:5, belle:3, raya:3, mulan:3, tiana:2 } },
      { text:'The right words at the right time change everything', scores:{ jasmine:5, raya:4, belle:4, pocahontas:3, ariel:2 } }
    ]},
    { id:'voice_q19_silence', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of silence dost thou most respect?</em>', answers:[
      { text:'The silence of someone listening so fully they forget to respond', scores:{ pocahontas:5, aurora:4, belle:3, elsa:3, 'snow-white':2 } },
      { text:'The silence of someone who chose not to speak and had every right to', scores:{ elsa:5, raya:4, mulan:3, meg:3, jasmine:2 } },
      { text:'The silence of the natural world — water, wind, the deep forest', scores:{ pocahontas:5, merida:3, moana:3, aurora:3, belle:2 } },
      { text:'The silence between two people who have nothing left to prove to each other', scores:{ anna:4, aurora:3, cinderella:3, 'snow-white':2, elsa:2 } }
    ]},
    { id:'voice_q20_freetext', category:'voice', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The thing I most want to say — that I have not yet said — is..."', placeholder:'Write thy truth, {name}', freetextTag:'unspoken_voice', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'voice_q21_say', category:'voice', type:'multipleChoice', weight:1.3, prompt:'<em>What dost thou wish people heard in thy voice that they often miss?</em>', answers:[
      { text:'How much I mean it — every time', scores:{ elsa:4, mulan:3, tiana:3, raya:3, anna:2 } },
      { text:'The warmth underneath the quiet', scores:{ elsa:5, aurora:3, pocahontas:3, belle:2, meg:3 } },
      { text:'The humor — I am funnier than people expect', scores:{ jasmine:4, merida:4, rapunzel:3, anna:2, meg:3 } },
      { text:'The part that is afraid — even when the voice sounds sure', scores:{ mulan:5, raya:4, tiana:3, cinderella:3, elsa:2 } }
    ]},
    { id:'voice_q22_never_stay', category:'voice', type:'multipleChoice', weight:1.4, prompt:'<em>What word or truth can thou never hold inside thee, <span class="name">{name}</span>?</em>', answers:[
      { text:'When someone is wrong about something that matters', scores:{ raya:5, belle:5, jasmine:4, mulan:3, merida:3 } },
      { text:'When someone I love needs to hear something hard', scores:{ raya:4, tiana:4, anna:3, mulan:3, belle:3 } },
      { text:'"I love thee" — I say it too much or not enough, never quite right', scores:{ anna:5, 'snow-white':4, rapunzel:3, cinderella:2, aurora:2 } },
      { text:'"I need help" — I say it before the silence becomes a wall', scores:{ anna:5, rapunzel:4, cinderella:3, 'snow-white':3, aurora:2 } }
    ]},
    { id:'voice_q23_change', category:'voice', type:'multipleChoice', weight:1.2, prompt:'<em>How has thy voice changed, <span class="name">{name}</span>?</em>', answers:[
      { text:'It has gotten louder — I have less patience for being unheard', scores:{ jasmine:5, merida:4, ariel:3, mulan:3, tiana:2 } },
      { text:'It has gotten quieter — I have learned that silence holds more', scores:{ elsa:4, pocahontas:4, aurora:3, belle:3, raya:2 } },
      { text:'It has gotten truer — I say what I mean more often', scores:{ raya:5, tiana:4, mulan:3, anna:3, elsa:2 } },
      { text:'It is still finding itself — I am still becoming the speaker I want to be', scores:{ rapunzel:4, moana:4, cinderella:3, ariel:3, elsa:2 } }
    ]},
    { id:'voice_q24_last_word', category:'voice', type:'multipleChoice', weight:1.4, prompt:'<em>If thou could say one thing to thy younger self, what kind of thing would it be?</em>', answers:[
      { text:'You are not too much — you are enough', scores:{ elsa:5, ariel:4, rapunzel:4, jasmine:3, merida:3 } },
      { text:'You are braver than you know', scores:{ cinderella:5, mulan:4, tiana:4, anna:3, moana:3 } },
      { text:'The people who cannot see you are wrong', scores:{ jasmine:5, merida:4, tiana:4, ariel:3, elsa:3 } },
      { text:'What you want matters. Say it aloud', scores:{ ariel:5, jasmine:4, elsa:4, rapunzel:3, merida:3 } }
    ]},
    { id:'voice_q25_truest', category:'voice', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is thy truest voice, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'The one that says what I truly mean, even when afraid', scores:{ raya:5, belle:4, mulan:4, jasmine:3, elsa:3 } },
      { text:'The one that sings — before and after words', scores:{ ariel:5, rapunzel:3, moana:3, elsa:3, pocahontas:2 } },
      { text:'The one I use for the people I love — the private one', scores:{ elsa:4, aurora:3, cinderella:3, 'snow-white':3, meg:3, anna:3 } },
      { text:'The one I am still finding — still becoming', scores:{ moana:5, elsa:3, rapunzel:3, ariel:3, jasmine:3, merida:2 } }
    ]}
  ],

  stories: [
    { id:'stories_v1_told', category:'stories', type:'visual', weight:1.5, prompt:'<em>Which story do thou most wish had been told to thee as a child?</em>', answers:[
      { text:'A story where the girl rode into battle and no one questioned it', emoji:'⚔️', scores:{ mulan:5, merida:4, jasmine:3, raya:3, moana:2 } },
      { text:'A story where the girl discovered something no one had ever found before', emoji:'🌿', scores:{ belle:5, ariel:4, rapunzel:3, pocahontas:3, jasmine:2 } },
      { text:'A story where the girl saved herself — and also chose love', emoji:'✨', scores:{ tiana:5, jasmine:4, anna:3, merida:3, ariel:2 } },
      { text:'A story where the girl stayed exactly who she was and that was enough', emoji:'🌸', scores:{ elsa:5, aurora:3, 'snow-white':3, cinderella:3, rapunzel:2 } }
    ]},
    { id:'stories_v2_live', category:'stories', type:'visual', weight:1.4, prompt:'<em>Which kind of story dost thou live in, whether thou knowest it or not?</em>', answers:[
      { text:'A long journey with a great task at the end', emoji:'🌅', scores:{ moana:5, mulan:4, raya:4, tiana:3, merida:3 } },
      { text:'A small story about deep love and ordinary grace', emoji:'🌸', scores:{ 'snow-white':5, cinderella:4, aurora:3, anna:3, tiana:2 } },
      { text:'A story still being written — the shape is not yet clear', emoji:'📝', scores:{ elsa:5, jasmine:4, ariel:4, rapunzel:3, moana:2 } },
      { text:'A story about becoming — about finding the self that was always there', emoji:'🌀', scores:{ elsa:5, rapunzel:5, moana:4, ariel:3, merida:3 } }
    ]},
    { id:'stories_v3_tell', category:'stories', type:'visual', weight:1.4, prompt:'<em>If thou couldst tell one story to everyone, what kind would it be?</em>', answers:[
      { text:'A story that is true — a story that happened to a real person', emoji:'📖', scores:{ mulan:5, tiana:4, pocahontas:3, belle:3, raya:2 } },
      { text:'A story so beautiful it makes people stop and remember', emoji:'🌹', scores:{ aurora:5, rapunzel:4, belle:3, pocahontas:3, ariel:2 } },
      { text:'A story that makes the hard things feel possible', emoji:'⚔️', scores:{ mulan:5, moana:4, tiana:4, merida:3, raya:3 } },
      { text:'A story that makes people feel less alone', emoji:'💛', scores:{ anna:5, 'snow-white':4, cinderella:4, meg:4, belle:2 } }
    ]},
    { id:'stories_v4_become', category:'stories', type:'visual', weight:1.3, prompt:'<em>What story dost thou most want to become true in thy own life?</em>', answers:[
      { text:'The one where the love was real and worth everything', emoji:'💛', scores:{ anna:5, cinderella:4, aurora:4, 'snow-white':3 } },
      { text:'The one where she built something that mattered beyond her own life', emoji:'🏗️', scores:{ tiana:5, mulan:4, moana:3, raya:3, pocahontas:2 } },
      { text:'The one where she finally came home to herself', emoji:'🌸', scores:{ elsa:5, moana:4, rapunzel:4, merida:3, ariel:3 } },
      { text:'The one where she changed something that needed changing', emoji:'⚔️', scores:{ jasmine:5, mulan:4, raya:5, moana:3, tiana:3 } }
    ]},
    { id:'stories_q5_shape', category:'stories', type:'multipleChoice', weight:1.4, prompt:'<em>What shape is thy story, <span class="name">{name}</span>?</em>', context:'The mirror asks gently.', answers:[
      { text:'A spiral — I return to the same things but each time different', scores:{ elsa:5, rapunzel:4, moana:3, ariel:3, belle:2 } },
      { text:'A line with direction — I am going somewhere', scores:{ tiana:5, mulan:4, raya:3, moana:3, merida:2 } },
      { text:'A river — I do not know the course, but the current is real', scores:{ moana:5, pocahontas:4, ariel:3, belle:3, aurora:2 } },
      { text:'A circle — all roads come home eventually', scores:{ anna:4, 'snow-white':4, cinderella:3, aurora:3, tiana:2 } }
    ]},
    { id:'stories_q6_kind', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of story do thou love to tell about thyself, <span class="name">{name}</span>?</em>', answers:[
      { text:'The funny one — the disaster that became a story', scores:{ anna:5, merida:4, rapunzel:3, ariel:3, jasmine:2 } },
      { text:'The hard one — the thing that changed me and how', scores:{ tiana:5, mulan:4, elsa:3, moana:3, raya:3 } },
      { text:'The small one — the one no one else remembers but me', scores:{ belle:4, pocahontas:4, aurora:3, elsa:3, meg:3 } },
      { text:'I do not tell stories about myself — I listen to others\' stories', scores:{ pocahontas:5, aurora:3, elsa:3, 'snow-white':2, cinderella:2 } }
    ]},
    { id:'stories_q7_listen', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>What makes thee lean in to a story, <span class="name">{name}</span>?</em>', answers:[
      { text:'A voice that has been through something real', scores:{ belle:4, pocahontas:4, tiana:3, mulan:3, raya:3 } },
      { text:'Something I recognize — something I thought only I had felt', scores:{ elsa:5, meg:4, cinderella:3, rapunzel:3, anna:2 } },
      { text:'Surprise — when it goes somewhere I did not expect', scores:{ ariel:5, jasmine:4, rapunzel:3, belle:3, merida:2 } },
      { text:'Truth — when I sense the teller means every word', scores:{ raya:5, pocahontas:4, mulan:3, tiana:3, belle:2 } }
    ]},
    { id:'stories_q8_tradeoff', category:'stories', type:'tradeoff', weight:1.4, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A story with a perfect ending — or a story with a perfect truth, even if the ending is open.', answers:[
      { text:'The perfect ending', scores:{ cinderella:5, aurora:4, anna:4, 'snow-white':3, rapunzel:2, elsa:-2 } },
      { text:'The perfect truth', scores:{ belle:5, raya:5, elsa:4, mulan:4, moana:3, meg:3, cinderella:-2, aurora:-2 } }
    ]},
    { id:'stories_q9_change', category:'stories', type:'multipleChoice', weight:1.4, prompt:'<em>What story has changed thee most, <span class="name">{name}</span>?</em>', answers:[
      { text:'A story that showed me a life I did not know was possible', scores:{ belle:5, ariel:4, jasmine:4, rapunzel:3, moana:2 } },
      { text:'A story that made me feel less alone in a dark time', scores:{ cinderella:5, 'snow-white':3, meg:5, elsa:4, aurora:2 } },
      { text:'A story that gave me courage to do something hard', scores:{ mulan:5, tiana:4, merida:4, moana:3, raya:3 } },
      { text:'A story so honest it undid me and rebuilt me', scores:{ belle:4, elsa:4, raya:3, pocahontas:3, belle:3, meg:3 } }
    ]},
    { id:'stories_q10_hurt', category:'stories', type:'hurt', weight:1.3, prompt:'<em>If one of these were taken from thy life forever, which loss would hurt least?</em>', context:'The mirror asks honestly.', answers:[
      { text:'Stories told aloud', scores:{ pocahontas:-4, moana:-3, ariel:-2, anna:-2, mulan:-1, belle:1 } },
      { text:'Stories written down', scores:{ belle:-5, rapunzel:-2, meg:-2, elsa:-2, ariel:-1, pocahontas:1 } },
      { text:'Stories in music', scores:{ ariel:-5, rapunzel:-3, mulan:-2, anna:-2, raya:1 } },
      { text:'Stories told through art — paintings, images', scores:{ rapunzel:-5, ariel:-2, belle:-2, aurora:-1, raya:1 } }
    ]},
    { id:'stories_q11_of_yourself', category:'stories', type:'multipleChoice', weight:1.4, prompt:'<em>How dost thou feel about the story of thy own life, <span class="name">{name}</span>?</em>', answers:[
      { text:'I am glad to be in it — I would not trade it', scores:{ anna:5, 'snow-white':4, cinderella:3, tiana:3, aurora:2 } },
      { text:'I am still in the hard middle — the good part is coming', scores:{ tiana:5, cinderella:4, rapunzel:3, elsa:3, mulan:2 } },
      { text:'I am still figuring out what kind of story it is', scores:{ elsa:4, moana:4, merida:3, ariel:3, jasmine:2 } },
      { text:'I am the author — I am still writing it', scores:{ jasmine:5, tiana:4, mulan:4, moana:3, raya:3 } }
    ]},
    { id:'stories_q12_chapter', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>What chapter of thy story art thou in now, <span class="name">{name}</span>?</em>', context:'The mirror asks gently.', answers:[
      { text:'The chapter where everything is beginning', scores:{ anna:4, ariel:3, rapunzel:3, moana:3, anna:2 } },
      { text:'The hard chapter — the one that makes the rest make sense', scores:{ tiana:5, mulan:4, elsa:4, raya:3, cinderella:3 } },
      { text:'A quiet chapter — resting, growing, not yet moving', scores:{ aurora:4, 'snow-white':3, belle:3, elsa:3, cinderella:2 } },
      { text:'A chapter I am still naming — I do not know what to call it yet', scores:{ moana:5, jasmine:4, elsa:3, merida:3, ariel:2 } }
    ]},
    { id:'stories_q13_written', category:'stories', type:'multipleChoice', weight:1.2, prompt:'<em>Wouldst thou want thy life to become a story told to others?</em>', answers:[
      { text:'Yes — I want the hard parts to mean something for someone else', scores:{ tiana:5, mulan:5, moana:4, raya:4, cinderella:2 } },
      { text:'Yes — but told truthfully. The real story, not the polished one', scores:{ raya:5, belle:4, tiana:3, elsa:3, mulan:2 } },
      { text:'Maybe — I have not decided if it is others\' to tell', scores:{ elsa:4, pocahontas:3, meg:3, aurora:2, cinderella:2 } },
      { text:'No — some stories belong to the people who lived them', scores:{ pocahontas:5, aurora:4, 'snow-white':3, elsa:3, cinderella:2 } }
    ]},
    { id:'stories_q14_tradeoff', category:'stories', type:'tradeoff', weight:1.3, prompt:'<em>Choose, <span class="name">{name}</span>.</em>', context:'A story thou art certain of — one with a clear arc and an ending — or a story that surprises thee as it unfolds.', answers:[
      { text:'The certain story', scores:{ tiana:4, mulan:3, raya:3, aurora:2, cinderella:2 } },
      { text:'The story that surprises me', scores:{ ariel:5, anna:4, rapunzel:3, moana:3, jasmine:3, merida:3, belle:2, elsa:2 } }
    ]},
    { id:'stories_q15_for_child', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>If thou could tell one story to a small child tonight, what would it be about?</em>', answers:[
      { text:'A brave girl who was afraid and went anyway', scores:{ mulan:5, merida:4, anna:3, moana:3, tiana:2 } },
      { text:'A girl who found magic in an ordinary day', scores:{ rapunzel:5, aurora:4, 'snow-white':3, cinderella:3, ariel:2 } },
      { text:'A girl who was exactly enough, just as she was', scores:{ elsa:5, jasmine:4, merida:3, moana:3, rapunzel:2 } },
      { text:'A girl who built something, and it was good', scores:{ tiana:5, mulan:4, moana:3, raya:3, belle:2 } }
    ]},
    { id:'stories_q16_missing', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>What kind of story is missing from the world, <span class="name">{name}</span>?</em>', answers:[
      { text:'A story about a girl who fails and starts again and is not ashamed', scores:{ tiana:5, mulan:4, cinderella:4, raya:3, elsa:3 } },
      { text:'A story about a girl who loves her world and stays in it on purpose', scores:{ 'snow-white':4, tiana:3, pocahontas:3, aurora:3, anna:2 } },
      { text:'A story about a girl who asks for help and is stronger for it', scores:{ elsa:5, rapunzel:4, cinderella:3, anna:3, aurora:2 } },
      { text:'A story about a girl and her people — her community, her heritage, her belonging', scores:{ mulan:5, moana:5, pocahontas:4, raya:3, tiana:3 } }
    ]},
    { id:'stories_q17_hero', category:'stories', type:'multipleChoice', weight:1.4, prompt:'<em>What makes a hero, truly, <span class="name">{name}</span>?</em>', answers:[
      { text:'She keeps going when others would stop', scores:{ tiana:5, mulan:4, cinderella:4, raya:3, merida:2 } },
      { text:'She knows what she is fighting for', scores:{ mulan:5, moana:4, raya:5, tiana:3, pocahontas:3 } },
      { text:'She asks for help when she needs it', scores:{ anna:5, 'snow-white':3, moana:3, rapunzel:3, merida:2 } },
      { text:'She tells the truth when it costs something', scores:{ raya:5, belle:5, mulan:4, jasmine:3, elsa:3 } }
    ]},
    { id:'stories_q18_villain', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>What makes a villain worth understanding, <span class="name">{name}</span>?</em>', answers:[
      { text:'She wanted something real — we can see the wound beneath the wrong', scores:{ belle:5, elsa:4, meg:4, raya:3, rapunzel:3 } },
      { text:'She was lied to about what she was worth', scores:{ elsa:4, cinderella:3, rapunzel:3, meg:3, 'snow-white':2 } },
      { text:'She chose wrong but it was a real choice — not inevitable', scores:{ raya:5, belle:4, mulan:3, tiana:3, pocahontas:2 } },
      { text:'She is the version of the hero that did not find what she needed in time', scores:{ elsa:5, belle:3, meg:4, raya:3, rapunzel:2 } }
    ]},
    { id:'stories_q19_end', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>What ending for thy story would feel truest, <span class="name">{name}</span>?</em>', context:'Not the ending thou shouldst want. The one that feels like thee.', answers:[
      { text:'She built something that lasted', scores:{ tiana:5, mulan:4, moana:4, pocahontas:3, raya:3 } },
      { text:'She was loved — and she knew it before the end', scores:{ anna:5, cinderella:4, aurora:3, 'snow-white':3, tiana:2 } },
      { text:'She became who she was always meant to be', scores:{ elsa:5, moana:5, rapunzel:4, ariel:3, merida:3 } },
      { text:'She kept going, and going, and then she rested', scores:{ tiana:4, mulan:3, merida:3, raya:3, cinderella:2 } }
    ]},
    { id:'stories_q20_freetext', category:'stories', type:'freetext', weight:1.0, prompt:'<em>Finish this sentence:</em>', context:'"The story I most want to tell about my life, when it is all done, is..."', placeholder:'Write thy truth, {name}', freetextTag:'life_story', answers:[{ text:'[freetext]', scores:{} }] },
    { id:'stories_q21_middle', category:'stories', type:'scenario', weight:1.3, prompt:'<em>Thou art in the hard middle of a story. The path is not clear. What dost thou do?</em>', answers:[
      { text:'Keep moving — the path reveals itself to those who walk', scores:{ moana:5, mulan:4, raya:3, tiana:3, merida:2 } },
      { text:'Stop and listen — sometimes the story tells thee what comes next', scores:{ pocahontas:5, aurora:3, belle:3, elsa:3, moana:2 } },
      { text:'Find someone who has been in this chapter — ask how they found their way', scores:{ anna:4, rapunzel:3, tiana:3, 'snow-white':2, cinderella:2 } },
      { text:'Trust that I will know when I know — not before', scores:{ elsa:4, aurora:3, pocahontas:3, meg:3, belle:2 } }
    ]},
    { id:'stories_q22_belongs', category:'stories', type:'multipleChoice', weight:1.3, prompt:'<em>Who does thy story belong to, <span class="name">{name}</span>?</em>', answers:[
      { text:'Me — I am the author of it', scores:{ jasmine:5, elsa:4, tiana:4, merida:3, moana:3 } },
      { text:'Me and those I love — we are writing it together', scores:{ anna:5, 'snow-white':4, cinderella:3, aurora:2, tiana:2 } },
      { text:'To something larger — my people, my land, my ancestors', scores:{ moana:5, mulan:5, pocahontas:5, raya:3, merida:2 } },
      { text:'I am still deciding', scores:{ elsa:3, ariel:3, rapunzel:3, anna:2, meg:2 } }
    ]},
    { id:'stories_q23_tell_yourself', category:'stories', type:'multipleChoice', weight:1.4, prompt:'<em>What story dost thou tell thyself that is not quite true, <span class="name">{name}</span>?</em>', context:'The mirror asks gently. There is no judgment here.', answers:[
      { text:'That I am fine when I am not', scores:{ elsa:5, mulan:3, raya:3, meg:4, aurora:2 } },
      { text:'That I do not want it as much as I do', scores:{ ariel:4, jasmine:4, elsa:3, meg:3, rapunzel:2 } },
      { text:'That it does not hurt', scores:{ elsa:5, cinderella:3, 'snow-white':2, tiana:3, meg:3 } },
      { text:'That I have more time', scores:{ tiana:4, mulan:4, raya:3, moana:2, cinderella:2 } }
    ]},
    { id:'stories_q24_rewrite', category:'stories', type:'scenario', weight:1.4, prompt:'<em>If thou could rewrite one chapter of thy story, what kind would it be?</em>', context:'The mirror does not judge.', answers:[
      { text:'The chapter where I was smaller than I needed to be', scores:{ elsa:5, jasmine:4, ariel:4, rapunzel:4, merida:3 } },
      { text:'The chapter where I did not speak when I should have', scores:{ elsa:4, mulan:3, raya:3, tiana:3, cinderella:2 } },
      { text:'The chapter where I did not ask for help', scores:{ elsa:4, rapunzel:4, cinderella:3, 'snow-white':2, anna:2 } },
      { text:'None — every chapter made me who I am', scores:{ tiana:5, moana:4, mulan:3, anna:3, aurora:2 } }
    ]},
    { id:'stories_q25_truest', category:'stories', type:'multipleChoice', weight:2.0, prompt:'<em>The mirror asks one last thing. What is thy story, at its truest, <span class="name">{name}</span>?</em>', context:'There is no wrong answer. Only thine own.', answers:[
      { text:'A love story — it has always come back to love', scores:{ anna:5, cinderella:4, aurora:3, 'snow-white':3, ariel:2 } },
      { text:'A becoming story — I have always been on my way to myself', scores:{ elsa:5, moana:5, rapunzel:4, ariel:3, merida:3 } },
      { text:'A courage story — I have kept going when it was hard', scores:{ tiana:5, mulan:5, raya:4, cinderella:3, merida:3 } },
      { text:'A story still being written — I do not know the shape yet, and that is right', scores:{ moana:4, jasmine:4, ariel:3, elsa:3, rapunzel:3, anna:2, meg:3 } }
    ]}
  ]

}; // end of QUESTIONS — all 20 categories

if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
}
