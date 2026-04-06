/* ═══════════════════════════════════════════════════════
   DISNEY PRINCESS QUIZ — princesses.js
   12 Princess profiles with descriptions, traits, titles,
   story fragments, themed backgrounds & particle effects
   ═══════════════════════════════════════════════════════ */

const PRINCESSES = {

  cinderella: {
    name: "Cinderella",
    emoji: "🩰",
    color: "#87ceeb",
    particle: "⭐",
    particleColor: "#87ceeb",
    cardBg: "linear-gradient(145deg, rgba(135,206,235,0.12), rgba(26,10,46,0.97))",
    desc: `You are Cinderella! Kind, patient, and endlessly hopeful, you have a gentle heart that never hardens even when life is unfair. You find magic in the ordinary — a song, a friendship, a starlit night. You believe deeply that dreams come true if you keep believing and stay kind. Your grace and goodness shine in everything you do, and you have a rare gift for seeing the best in people. Like Cinderella, you know that true elegance isn't about wealth or status — it's about the warmth you carry within.`,
    traits: {
      "Kindness":  "💗 Legendary",
      "Patience":  "⏳ Endless",
      "Hope":      "⭐ Unwavering",
      "Grace":     "🩰 Natural",
      "Dreams":    "🔮 Vivid",
      "Heart":     "💛 Pure Gold"
    },
    titles: [
      "The Dream-Keeper of the Silver Kingdom",
      "The Graceful Heart of the Starlit Court",
      "The Gentle Flame Who Never Burns Out",
      "The Glass-Slippered Soul of the Evening Star",
      "The Hopeful Queen of the Midnight Garden"
    ],
    stories: [
      "Your heart is your greatest magic — it transforms every room you enter and every person you meet. Like Cinderella, you believe in the impossible, and that belief alone has a way of making it real.",
      "You carry warmth the way others carry armor. It protects you more than they know. The world has tested your hope, and your hope has won every single time.",
      "You don't wait for your moment — you create it, quietly and without fanfare. That is the truest kind of magic: the kind no fairy godmother can take away."
    ]
  },

  ariel: {
    name: "Ariel",
    emoji: "🐠",
    color: "#67e8f9",
    particle: "🫧",
    particleColor: "#67e8f9",
    cardBg: "linear-gradient(145deg, rgba(103,232,249,0.12), rgba(26,10,46,0.97))",
    desc: `You are Ariel! Curious, adventurous, and impossibly passionate, you are always drawn to what lies beyond the horizon. You collect experiences and wonders the way others collect treasure, and your enthusiasm for life is absolutely contagious. You've probably been told you dream too big — but you know that's just other people's fear talking. You follow your heart with fierce determination, and the world is richer for your fiery, curious spirit!`,
    traits: {
      "Curiosity":   "🔍 Insatiable",
      "Adventure":   "🌊 Wild & Free",
      "Passion":     "🔥 Blazing",
      "Creativity":  "🎨 Overflowing",
      "Courage":     "⚡ Fearless",
      "Wonder":      "✨ Boundless"
    },
    titles: [
      "The Curious Wanderer of the Deep Blue World",
      "The Passionate Collector of Beautiful Things",
      "The Fearless Explorer of the Unknown Horizon",
      "The Burning Heart of the Ocean's Edge",
      "The Dream-Chaser Who Never Looked Back"
    ],
    stories: [
      "You have always known there is more — more world, more wonder, more life waiting beyond what you can currently see. That longing isn't restlessness. It's vision.",
      "Your passion is contagious and your curiosity is endless. You don't just love life — you throw yourself into it with both arms open and no safety net.",
      "You follow your heart even when it leads you somewhere unexpected. That courage to leap is your greatest gift — and your greatest adventure is still ahead."
    ]
  },

  belle: {
    name: "Belle",
    emoji: "📚",
    color: "#f5c842",
    particle: "📖",
    particleColor: "#f5c842",
    cardBg: "linear-gradient(145deg, rgba(245,200,66,0.10), rgba(26,10,46,0.97))",
    desc: `You are Belle! Intellectual, imaginative, and beautifully independent, you've always marched to the beat of your own drum. Books are your portal to infinite worlds, and you see depth and beauty where others see only surface. You're brave enough to look past appearances and find the hidden heart within people and ideas. You dream of adventure in the great wide somewhere, and your open mind and loving heart make you one of the most extraordinary people in any room!`,
    traits: {
      "Intelligence":  "📖 Exceptional",
      "Independence":  "🦋 Free Spirit",
      "Empathy":       "💜 Profound",
      "Curiosity":     "🔭 Endless",
      "Bravery":       "🛡️ True",
      "Imagination":   "🌌 Boundless"
    },
    titles: [
      "The Learned Heart of the Enchanted Library",
      "The Independent Mind of the Golden Village",
      "The Brave Reader Who Saw Beyond the Surface",
      "The Dreamer of the Great Wide Somewhere",
      "The Scholar Queen of the Rose-Covered Castle"
    ],
    stories: [
      "You have always known that the best stories are the ones nobody else has read yet. You seek them out — in books, in people, in places most wouldn't think to look.",
      "Your independence is your crown. You have never needed the world's approval to know your own worth, and that quiet certainty is the most powerful thing about you.",
      "You see people for who they really are — past the walls they build and the faces they wear. That gift of true sight has changed lives. Including your own."
    ]
  },

  jasmine: {
    name: "Jasmine",
    emoji: "🌺",
    color: "#818cf8",
    particle: "✨",
    particleColor: "#818cf8",
    cardBg: "linear-gradient(145deg, rgba(129,140,248,0.12), rgba(26,10,46,0.97))",
    desc: `You are Jasmine! Bold, spirited, and fiercely authentic, you refuse to be told who to be or what to want. You have a strong sense of justice and an even stronger sense of self. You're drawn to genuine connection over status, and you can see through pretense instantly. You crave real freedom — not just open skies, but the freedom to choose your own path. Your confidence, compassion, and fire make you someone people are drawn to, even when you're rattling the cage!`,
    traits: {
      "Confidence":   "💎 Unshakeable",
      "Independence": "🔓 Hard-Won",
      "Justice":      "⚖️ Passionate",
      "Authenticity": "✅ Total",
      "Fierce":       "🐯 Through & Through",
      "Vision":       "👁️ Crystal Clear"
    },
    titles: [
      "The Fierce Queen of the Open Skies",
      "The Authentic Heart of the Desert Palace",
      "The Unbound Spirit of the Golden Sands",
      "The Justice-Seeker Who Would Not Be Caged",
      "The Bold Princess of the Thousand and One Truths"
    ],
    stories: [
      "You have always refused to be defined by others. Your authenticity is your power — it makes you magnetic, it makes you free, and it makes you someone truly worth knowing.",
      "You see through pretense instantly and you have no patience for it. That directness isn't rudeness — it's respect. You believe people deserve to be dealt with honestly.",
      "Freedom isn't just something you want — it's something you fight for, for yourself and for everyone around you. That fire has always been your most beautiful quality."
    ]
  },

  mulan: {
    name: "Mulan",
    emoji: "🏮",
    color: "#f87171",
    particle: "🌸",
    particleColor: "#f87171",
    cardBg: "linear-gradient(145deg, rgba(248,113,113,0.10), rgba(26,10,46,0.97))",
    desc: `You are Mulan! Determined, brave beyond measure, and quietly extraordinary, you don't wait to be rescued — you do the rescuing. You'll go to any length for the people you love, and you have a resilience that surprises even yourself. Where others see limitations, you see challenges to overcome. You're not always the loudest person in the room, but when you speak — or act — everyone pays attention. Your strength comes from the inside, and your honor shines brighter than any sword!`,
    traits: {
      "Bravery":    "⚔️ Legendary",
      "Loyalty":    "❤️ Unbreakable",
      "Resilience": "🪨 Diamond-Hard",
      "Honor":      "🏅 True North",
      "Cleverness": "🦊 Sharp as Steel",
      "Heart":      "🔥 Blazing"
    },
    titles: [
      "The Warrior Who Became Legend",
      "The Quiet Strength of the Middle Kingdom",
      "The Honorable Heart Who Changed Everything",
      "The Fierce Protector of Those She Loves",
      "The Extraordinary One Nobody Saw Coming"
    ],
    stories: [
      "You don't need to be the loudest in the room to be the most powerful. Your strength is quiet, steady, and completely unshakeable — and it always shows up exactly when it's needed.",
      "You fight for the people you love with everything you have. That loyalty is your greatest weapon and your deepest truth. Nothing stops you when love is on the line.",
      "You have surprised yourself more than once. You looked at an impossible situation and found a way through. That's not luck. That's who you are."
    ]
  },

  rapunzel: {
    name: "Rapunzel",
    emoji: "🌸",
    color: "#a78bfa",
    particle: "🏮",
    particleColor: "#a78bfa",
    cardBg: "linear-gradient(145deg, rgba(167,139,250,0.12), rgba(26,10,46,0.97))",
    desc: `You are Rapunzel! Endlessly creative, wildly enthusiastic, and shining with untapped potential, you approach life as one enormous adventure waiting to happen. You're an artist, a dreamer, and a planner all in one — with the energy and passion to actually make things happen. You have a rare gift for finding joy in everything, from painting to cooking to a simple sunset. Your curiosity is inexhaustible, your heart is huge, and when you finally step into your full power, you are absolutely unstoppable!`,
    traits: {
      "Creativity": "🎨 Explosive",
      "Joy":        "☀️ Infectious",
      "Energy":     "⚡ Unstoppable",
      "Curiosity":  "🔎 Insatiable",
      "Talent":     "🌟 Multi-Gifted",
      "Warmth":     "🌻 Radiant"
    },
    titles: [
      "The Radiant Creator of the Sun-Kissed Tower",
      "The Joyful Explorer of the World Beyond the Window",
      "The Multi-Gifted Dreamer of the Painted Sky",
      "The Unstoppable Spirit Who Lit Up Everything",
      "The Curious Heart Who Finally Found Her Kingdom"
    ],
    stories: [
      "You contain multitudes — artist, chef, reader, dreamer, fighter. You have always known there is more to you than anyone could see from the outside. You were right.",
      "Your joy is genuinely contagious. You find delight in things others walk past without noticing, and you have a way of making the people around you see them too.",
      "You stepped into the unknown and discovered that the world is even more beautiful than you imagined. That courage to finally go — that was the real magic. Not the hair."
    ]
  },

  moana: {
    name: "Moana",
    emoji: "🌊",
    color: "#34d399",
    particle: "🌊",
    particleColor: "#34d399",
    cardBg: "linear-gradient(145deg, rgba(52,211,153,0.10), rgba(26,10,46,0.97))",
    desc: `You are Moana! A born leader with the ocean in your veins and stars in your eyes, you feel the call of something greater than yourself and you have the courage to answer it. You're deeply rooted in who you are and where you come from, yet always drawn to the wider world. You don't need anyone to believe in you — you believe in yourself. Your connection to the living world, your bold heart, and your unshakeable sense of purpose make you someone destined to change things!`,
    traits: {
      "Leadership": "🧭 Natural-Born",
      "Courage":    "🌊 Tide-Deep",
      "Purpose":    "🌟 Crystal Clear",
      "Identity":   "🪨 Rock-Solid",
      "Connection": "🌿 Earth & Sea",
      "Destiny":    "⭐ Written in Stars"
    },
    titles: [
      "The Wayfinder of the Open Ocean",
      "The Chosen Daughter of Sea and Sky",
      "The Born Leader Who Answered the Call",
      "The Rooted Spirit Who Restored What Was Lost",
      "The Voyager Who Knew Who She Was"
    ],
    stories: [
      "The ocean chose you because it recognized something in you — a purpose bigger than yourself, and the courage to actually carry it. You answered the call. Most people don't.",
      "You are deeply rooted and wildly free at the same time. That balance — knowing who you are while still being brave enough to grow — is incredibly rare and incredibly powerful.",
      "You lead not by demanding to be followed, but by going first. Into the unknown, into the difficult, into the impossible. People follow because of what they see in you."
    ]
  },

  tiana: {
    name: "Tiana",
    emoji: "🐸",
    color: "#86efac",
    particle: "⭐",
    particleColor: "#86efac",
    cardBg: "linear-gradient(145deg, rgba(134,239,172,0.10), rgba(26,10,46,0.97))",
    desc: `You are Tiana! Hard-working, focused, and driven by dreams you've been building since childhood, you know that wishing alone isn't enough — you put in the work. You have a rare combination of ambition and warmth, vision and heart. You believe in yourself when no one else does, and you find a way when there seems to be none. You also know the value of the people around you — and you've learned that the best dreams are the ones we build together. You're not just a dreamer. You're a doer!`,
    traits: {
      "Ambition":    "🔥 Relentless",
      "Work Ethic":  "⚙️ Iron-Clad",
      "Resilience":  "💪 Unstoppable",
      "Warmth":      "🍀 Deep-Rooted",
      "Vision":      "🔭 Crystal Clear",
      "Heart":       "💚 All In"
    },
    titles: [
      "The Relentless Dreamer Who Made It Real",
      "The Working Queen of the Evening Star",
      "The Iron-Willed Creator Who Never Stopped",
      "The Warm-Hearted Builder of the Impossible",
      "The Doer Who Proved the Dreamers Right"
    ],
    stories: [
      "You have been building your dream since before anyone else believed in it. Every late night, every early morning, every moment of doubt you pushed through — it was all part of the work. And the work is everything.",
      "You know that love and ambition aren't opposites. The people you carry in your heart make you work harder, not less. That warmth is your secret weapon.",
      "You don't wait for luck or magic or the right moment. You create those things. That is the most powerful kind of person there is."
    ]
  },

  aurora: {
    name: "Aurora",
    emoji: "🌹",
    color: "#f9a8d4",
    particle: "🌸",
    particleColor: "#f9a8d4",
    cardBg: "linear-gradient(145deg, rgba(249,168,212,0.12), rgba(26,10,46,0.97))",
    desc: `You are Aurora! Graceful, romantic, and dreamy, you have a soul that's in tune with beauty and magic in a way most people can't quite fathom. You're gentle without being weak, and your inner life is rich and vivid. You have a calming presence that puts others at ease, and a quiet strength that reveals itself slowly. You believe in love, in fate, and in the magic that weaves through ordinary life. You may be soft-spoken, but your heart holds entire worlds of feeling!`,
    traits: {
      "Grace":      "🌹 Effortless",
      "Romance":    "💕 Deeply Felt",
      "Gentleness": "🕊️ Profound",
      "Beauty":     "🌸 Inside & Out",
      "Dreaming":   "🌙 Vivid",
      "Calm":       "🌿 Serene"
    },
    titles: [
      "The Dreaming Rose of the Enchanted Forest",
      "The Serene Heart of the Spinning Wheel Kingdom",
      "The Graceful Soul Who Felt Everything Deeply",
      "The Romantic Keeper of the Sleeping World",
      "The Gentle Queen of the Rose-Lit Dawn"
    ],
    stories: [
      "Your inner world is richer than most people ever see. You feel things deeply and beautifully, and that depth — that capacity for wonder and romance — is your greatest gift.",
      "You move through the world with a grace that feels effortless, even when it costs you something. Your calm doesn't mean you don't feel. It means you feel everything and still choose peace.",
      "You believe in magic and love and fate — not naively, but with a wisdom that comes from truly paying attention. The world you see is more beautiful than the one most people live in."
    ]
  },

  snow: {
    name: "Snow White",
    emoji: "🍎",
    color: "#fca5a5",
    particle: "🍎",
    particleColor: "#fca5a5",
    cardBg: "linear-gradient(145deg, rgba(252,165,165,0.10), rgba(26,10,46,0.97))",
    desc: `You are Snow White! Optimistic, nurturing, and full of genuine sweetness, you have a warmth that makes everyone feel welcome. You believe in the goodness of people even when they've given you reason not to, and that faith — while sometimes tested — ultimately transforms the world around you. You have a magical ability to form friendships wherever you go, and you bring out the best in people. Your joy is contagious, your heart is open, and your spirit is unbreakable!`,
    traits: {
      "Optimism":    "☀️ Radiant",
      "Nurturing":   "🤗 Deep",
      "Kindness":    "🍎 Pure",
      "Friendship":  "🌈 Wide Circle",
      "Resilience":  "💎 Hidden Strength",
      "Faith":       "🌸 Unwavering"
    },
    titles: [
      "The Radiant Heart of the Apple-Blossom Kingdom",
      "The Joyful Light Who Found Friends Everywhere",
      "The Optimistic Soul Who Kept Believing",
      "The Nurturing Queen of the Seven Hills",
      "The Warmth That Broke Every Winter"
    ],
    stories: [
      "You carry sunshine with you. Not the kind that blinds — the kind that warms. People are genuinely better for having been near you, and most of them know it.",
      "Your optimism isn't naivety. You have faced real darkness and chosen, again and again, to believe in something better. That choice is an act of extraordinary courage.",
      "You make friends the way others breathe — naturally, without trying, because your heart is genuinely open. That openness is rare, and it makes the world a different kind of place."
    ]
  },

  elsa: {
    name: "Elsa",
    emoji: "❄️",
    color: "#bfdbfe",
    particle: "❄️",
    particleColor: "#bfdbfe",
    cardBg: "linear-gradient(145deg, rgba(191,219,254,0.12), rgba(26,10,46,0.97))",
    desc: `You are Elsa! Extraordinary, complex, and breathtakingly powerful, you carry something rare inside you — a magic that can be overwhelming and beautiful all at once. You have spent time protecting others from what you carry, but your greatest journey is learning to embrace all of who you are. When you finally let go of fear and step into your full self, you create something the world has never seen. You are not too much. You are exactly enough — and then some.`,
    traits: {
      "Power":      "❄️ Extraordinary",
      "Composure":  "🌨️ Ice-Steady",
      "Creativity": "✨ One of a Kind",
      "Courage":    "🏔️ Mountain-Deep",
      "Loyalty":    "💙 Fierce & True",
      "Becoming":   "🌟 In Progress"
    },
    titles: [
      "The Snow Queen Who Finally Let It Go",
      "The Ice-Gifted Heart Who Learned to Love Herself",
      "The Extraordinary One Who Was Never Too Much",
      "The Breathtaking Force of Nature in a Crown",
      "The Ruler Who Made Peace With Her Own Magic"
    ],
    stories: [
      "You have spent so long being careful, being controlled, protecting everyone from what you carry. But your power was never the problem. The fear was. And you are letting go of the fear.",
      "There is nobody quite like you. Your gifts are rare, your depth is real, and the world you can create when you finally stop holding back is something no one has ever seen before.",
      "Your journey isn't about becoming something new — it's about finally being completely, unapologetically yourself. That journey takes real courage. You have always had it."
    ]
  },

  raya: {
    name: "Raya",
    emoji: "⚔️",
    color: "#fb923c",
    particle: "💎",
    particleColor: "#fb923c",
    cardBg: "linear-gradient(145deg, rgba(251,146,60,0.10), rgba(26,10,46,0.97))",
    desc: `You are Raya! Fierce, strategic, and driven by an unshakeable sense of justice, you are someone who acts when others hesitate. You've been hardened by real loss, but that hardness hasn't reached your heart — it's just protecting it. You're a natural warrior and a natural leader, and your greatest strength is your willingness to trust again even after you've been burned. The world needs people like you: brave enough to fight, and wise enough to know when to reach out a hand.`,
    traits: {
      "Bravery":   "⚔️ Warrior-Tested",
      "Strategy":  "🧠 Razor Sharp",
      "Justice":   "⚖️ Non-Negotiable",
      "Loyalty":   "💎 Hard-Earned",
      "Resilience":"🪨 Unbreakable",
      "Trust":     "🌱 Growing Again"
    },
    titles: [
      "The Last Dragon Warrior of the Divided Land",
      "The Fierce Heart Who Chose Trust Over Safety",
      "The Strategic Mind Who Fought for the World",
      "The Unbreakable Guardian of What She Loves",
      "The Warrior Queen Who Extended Her Hand"
    ],
    stories: [
      "You have been hurt, and you kept going. You lost trust, and you found your way back to it. That combination — fierceness and the willingness to be vulnerable again — is extraordinary.",
      "You don't wait for the right moment or the right help. You assess, you plan, and you move. That decisiveness has saved things and people that no one else could have saved.",
      "The hardest thing you ever did wasn't fight the enemy. It was choosing to trust again after everything fell apart. That took more courage than any weapon ever could."
    ]
  }

};
