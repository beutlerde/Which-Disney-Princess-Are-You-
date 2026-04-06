/* ═══════════════════════════════════════════════
   QUESTIONS — Personality (25)
   ═══════════════════════════════════════════════ */
const Q_PERSONALITY = [
  { cat:"✨ Personality", emoji:"💫", layout:"1col", q:"When you face a big problem, your first instinct is to...",
    opts:[
      { icon:"💪", label:"Fight through it myself",               p:{mulan:3,raya:2,jasmine:1} },
      { icon:"📖", label:"Research and make a careful plan",       p:{belle:3,tiana:2,mulan:1} },
      { icon:"🤝", label:"Ask the people I trust for help",        p:{snow:2,cinderella:1,rapunzel:2} },
      { icon:"✨", label:"Trust that the universe has a plan",     p:{aurora:2,cinderella:2,elsa:1} },
      { icon:"🌊", label:"Follow my heart and instincts",          p:{ariel:3,moana:3,rapunzel:1} },
      { icon:"❄️", label:"Work it out quietly alone",             p:{elsa:3,belle:2,mulan:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌟", layout:"2col", q:"Your friends would most describe you as...",
    opts:[
      { icon:"😄", label:"The Fun One",      desc:"Always brings the energy",      p:{rapunzel:3,ariel:2,snow:1} },
      { icon:"📚", label:"The Smart One",    desc:"Always has the answers",        p:{belle:3,mulan:2,tiana:1} },
      { icon:"💪", label:"The Brave One",    desc:"First to take a stand",         p:{mulan:3,raya:3,jasmine:2} },
      { icon:"💕", label:"The Kind One",     desc:"Warmest heart around",          p:{cinderella:3,snow:2,aurora:2} },
      { icon:"❄️", label:"The Cool One",     desc:"Calm and quietly powerful",     p:{elsa:3,aurora:1,mulan:1} },
      { icon:"🎨", label:"The Creative One", desc:"Always making something",       p:{rapunzel:3,ariel:2,belle:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"🎭", layout:"1col", q:"What makes you feel most alive?",
    opts:[
      { icon:"🌊", label:"Exploring somewhere totally new",          p:{ariel:3,moana:3,rapunzel:2} },
      { icon:"📖", label:"Getting lost in a great story",            p:{belle:3,aurora:1,rapunzel:1} },
      { icon:"🎨", label:"Creating something beautiful",             p:{rapunzel:3,belle:1,tiana:1} },
      { icon:"🤝", label:"Helping someone who really needs me",      p:{cinderella:2,snow:2,tiana:2} },
      { icon:"🏆", label:"Achieving a hard-earned goal",             p:{tiana:3,mulan:3,raya:2} },
      { icon:"❄️", label:"Mastering something once impossible",      p:{elsa:3,mulan:2,raya:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"😤", layout:"1col", q:"Your biggest pet peeve is...",
    opts:[
      { icon:"🔒", label:"Being told what I can or cannot do",       p:{jasmine:3,ariel:2,elsa:1} },
      { icon:"😶", label:"When people are not honest",               p:{belle:2,mulan:1,raya:2} },
      { icon:"💔", label:"Unkindness toward others",                 p:{cinderella:2,snow:2,tiana:1} },
      { icon:"😴", label:"Wasted potential in people",               p:{tiana:3,mulan:2,belle:1} },
      { icon:"🌍", label:"Destroying beautiful things",              p:{moana:3,ariel:2,elsa:1} },
      { icon:"🤥", label:"People pretending to be something else",   p:{raya:3,jasmine:2,belle:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌙", layout:"1col", q:"On a rainy Sunday you are probably...",
    opts:[
      { icon:"📚", label:"Reading something completely absorbing",    p:{belle:3,aurora:1,rapunzel:1} },
      { icon:"🎨", label:"Painting or crafting something",           p:{rapunzel:3,belle:1,elsa:1} },
      { icon:"🍳", label:"Cooking something delicious",              p:{tiana:3,snow:2,rapunzel:1} },
      { icon:"🎶", label:"Singing and dancing around the house",     p:{ariel:2,cinderella:2,snow:2} },
      { icon:"❄️", label:"Creating in perfect peaceful solitude",    p:{elsa:3,belle:2,aurora:2} },
      { icon:"⚔️", label:"Training or practicing a skill",           p:{raya:3,mulan:2,moana:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🦁", layout:"1col", q:"The type of courage you most admire is...",
    opts:[
      { icon:"⚔️", label:"Physical bravery — fighting for what is right",         p:{mulan:3,raya:3,jasmine:1} },
      { icon:"💜", label:"Emotional bravery — opening your heart fully",           p:{belle:3,ariel:2,rapunzel:1} },
      { icon:"🔊", label:"Speaking truth to power when everyone else is silent",   p:{jasmine:3,moana:2,raya:2} },
      { icon:"🐣", label:"Starting over completely after everything falls apart",  p:{tiana:3,cinderella:2,elsa:2} },
      { icon:"🌍", label:"Sacrificing everything for the people you love",         p:{mulan:3,moana:2,snow:1} },
      { icon:"❄️", label:"Facing your deepest fear completely alone",              p:{elsa:3,raya:2,mulan:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌈", layout:"1col", q:"Free afternoon in a new city — you...",
    opts:[
      { icon:"🗺️", label:"Wander with absolutely zero plan",             p:{ariel:3,rapunzel:2,moana:1} },
      { icon:"📍", label:"Hit the spots I carefully researched",          p:{belle:2,tiana:2,mulan:1} },
      { icon:"🌿", label:"Find a park, lake, or waterfront to sit by",   p:{moana:2,aurora:2,elsa:2} },
      { icon:"🛍️", label:"Shop and soak in every bit of local culture",  p:{jasmine:2,ariel:2,rapunzel:2} },
      { icon:"☕", label:"Find a cozy café and watch the world go by",   p:{belle:2,aurora:2,cinderella:1} },
      { icon:"⚔️", label:"Find something challenging or adventurous",    p:{raya:3,moana:2,mulan:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌅", layout:"1col", q:"How do you recharge after a really tough day?",
    opts:[
      { icon:"🛁", label:"A long bath with candles and quiet",           p:{aurora:3,cinderella:2,belle:1} },
      { icon:"🌿", label:"A long walk somewhere peaceful and alone",     p:{elsa:3,aurora:2,moana:2} },
      { icon:"👯", label:"Time with the people who make me laugh",       p:{snow:3,rapunzel:3,ariel:2} },
      { icon:"📚", label:"Reading until the world disappears",           p:{belle:3,aurora:2} },
      { icon:"🍳", label:"Cooking something really good from scratch",   p:{tiana:3,snow:2} },
      { icon:"🎵", label:"Losing myself completely in music",            p:{ariel:3,cinderella:2,rapunzel:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🔥", layout:"1col", q:"When you want something badly, you...",
    opts:[
      { icon:"⚡", label:"Go for it immediately — no hesitation",           p:{ariel:3,jasmine:3,raya:2} },
      { icon:"📋", label:"Make a detailed plan and execute it perfectly",   p:{tiana:3,belle:2,mulan:2} },
      { icon:"🙏", label:"Wish for it with everything and trust fate",      p:{cinderella:3,aurora:2,snow:2} },
      { icon:"🌊", label:"Let the current carry me toward it naturally",    p:{moana:3,ariel:2,aurora:1} },
      { icon:"🤝", label:"Build the right alliances to make it happen",     p:{moana:2,tiana:1,jasmine:2} },
      { icon:"❄️", label:"Work in secret until it is undeniably real",     p:{elsa:3,mulan:2,raya:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🎯", layout:"1col", q:"Your relationship with rules?",
    opts:[
      { icon:"✅", label:"Rules usually exist for good reasons",             p:{cinderella:2,snow:2,aurora:1} },
      { icon:"🤨", label:"I follow rules that actually make sense to me",   p:{belle:3,mulan:2,tiana:2} },
      { icon:"🚫", label:"Rules that limit freedom deserve to be broken",   p:{jasmine:3,ariel:3,raya:2} },
      { icon:"📜", label:"I will rewrite any rule that is clearly unjust",  p:{mulan:3,moana:2,jasmine:2} },
      { icon:"😅", label:"I really try but adventure has a way of calling", p:{rapunzel:3,ariel:2} },
      { icon:"❄️", label:"I make my own rules and live by them strictly",   p:{elsa:3,raya:2,mulan:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"🧊", layout:"1col", q:"How do you handle anger?",
    opts:[
      { icon:"❄️", label:"Go very still and cold and choose words carefully",    p:{elsa:3,mulan:2,aurora:1} },
      { icon:"🔥", label:"Speak my mind directly and honestly",                 p:{jasmine:3,raya:2,ariel:2} },
      { icon:"💭", label:"Internalize it and process it completely alone",       p:{mulan:2,belle:2,elsa:2} },
      { icon:"🏃", label:"Move my body — run, swim, ride until it passes",      p:{moana:2,ariel:2,raya:2} },
      { icon:"🎨", label:"Channel it into making something powerful",           p:{rapunzel:2,tiana:2,belle:1} },
      { icon:"💕", label:"Talk to someone I trust about how I feel",            p:{snow:2,cinderella:2,rapunzel:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"👁️", layout:"2col", q:"Your single biggest strength?",
    opts:[
      { icon:"💕", label:"Empathy",     desc:"I feel deeply for others",         p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🧠", label:"Intelligence",desc:"Sharp and analytical",             p:{belle:3,tiana:2,mulan:2} },
      { icon:"🔥", label:"Drive",       desc:"Unstoppable once I start",         p:{tiana:3,mulan:3,raya:2} },
      { icon:"✨", label:"Imagination", desc:"I see what others cannot",         p:{rapunzel:3,ariel:2,belle:1} },
      { icon:"🌿", label:"Intuition",   desc:"I just know things somehow",      p:{moana:3,aurora:1,elsa:1} },
      { icon:"❄️", label:"Composure",  desc:"I stay clear when others panic",   p:{elsa:3,mulan:2,aurora:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌊", layout:"1col", q:"In unfamiliar territory you feel...",
    opts:[
      { icon:"😍", label:"Thrilled — this is literally what I live for",    p:{ariel:3,rapunzel:3,moana:2} },
      { icon:"🧭", label:"Cautious but genuinely curious",                  p:{belle:2,tiana:1,mulan:2} },
      { icon:"😰", label:"Nervous but I push through anyway",               p:{cinderella:2,snow:1,aurora:1} },
      { icon:"🌬️", label:"Like something greater is guiding me",            p:{moana:3,elsa:1,aurora:1} },
      { icon:"💪", label:"Ready — I have trained for exactly this",         p:{mulan:3,raya:3,jasmine:1} },
      { icon:"❄️", label:"Quietly alert and assessing everything",          p:{elsa:3,raya:2,mulan:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🎓", layout:"1col", q:"Your approach to learning something new?",
    opts:[
      { icon:"📖", label:"Read absolutely everything about it first",        p:{belle:3,tiana:2,mulan:1} },
      { icon:"🎯", label:"Dive in and learn entirely by doing",              p:{raya:3,ariel:2,rapunzel:2} },
      { icon:"👀", label:"Observe others carefully before trying",           p:{cinderella:1,aurora:1,snow:1} },
      { icon:"🗣️", label:"Find an expert mentor to guide me",               p:{mulan:2,tiana:1,moana:2} },
      { icon:"🎨", label:"Experiment wildly and invent my own way",         p:{rapunzel:3,ariel:2,belle:1} },
      { icon:"❄️", label:"Practice alone in private until I am perfect",    p:{elsa:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"😊", layout:"2col", q:"Your default emotional setting is...",
    opts:[
      { icon:"☀️", label:"Cheerful",   desc:"Bright and bubbling",           p:{snow:3,rapunzel:3,cinderella:2} },
      { icon:"🌊", label:"Calm",       desc:"Steady and grounded",           p:{aurora:2,cinderella:2,moana:2} },
      { icon:"🔥", label:"Passionate", desc:"Intense and alive",             p:{jasmine:3,raya:2,ariel:2} },
      { icon:"🌙", label:"Dreamy",     desc:"Thoughtful and quiet",          p:{belle:3,aurora:2,elsa:1} },
      { icon:"❄️", label:"Composed",  desc:"Cool and in control",           p:{elsa:3,mulan:2,aurora:1} },
      { icon:"💪", label:"Determined", desc:"Focused and always ready",      p:{tiana:3,mulan:2,raya:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"💪", layout:"1col", q:"What motivates you through hard days?",
    opts:[
      { icon:"💕", label:"The faces of the people I love",               p:{mulan:3,snow:2,cinderella:2} },
      { icon:"🏆", label:"My goal — I absolutely refuse to quit",        p:{tiana:3,mulan:2,raya:2} },
      { icon:"✨", label:"A feeling that something great is coming",     p:{cinderella:3,ariel:2,rapunzel:2} },
      { icon:"🌿", label:"The natural world around me",                  p:{moana:3,elsa:1,aurora:1} },
      { icon:"📖", label:"A story or idea that burns inside me",         p:{belle:3,rapunzel:2,aurora:1} },
      { icon:"❄️", label:"Proving to myself I am stronger than this",   p:{elsa:3,raya:3,mulan:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"⚡", layout:"1col", q:"When someone doubts you, you...",
    opts:[
      { icon:"🔥", label:"Feel a fire ignite and prove them wrong",          p:{mulan:3,tiana:3,raya:2} },
      { icon:"😌", label:"Stay completely calm — you know your worth",       p:{jasmine:3,moana:3,elsa:2} },
      { icon:"🥺", label:"Feel it sting a little but shake it off",          p:{cinderella:2,snow:2,rapunzel:2} },
      { icon:"🤔", label:"Genuinely consider if there is any truth in it",  p:{belle:2,aurora:1,tiana:1} },
      { icon:"✨", label:"Use it as fuel to create something undeniable",   p:{ariel:2,rapunzel:3,tiana:2} },
      { icon:"❄️", label:"Go quiet and let your actions eventually speak",  p:{elsa:3,mulan:2,raya:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌙", layout:"1col", q:"Your deepest fear is...",
    opts:[
      { icon:"🔒", label:"Losing my freedom and being trapped forever",         p:{jasmine:3,ariel:3,elsa:2} },
      { icon:"💔", label:"Never being truly loved for who I really am",         p:{cinderella:3,snow:2,elsa:2} },
      { icon:"🌑", label:"Failing the people who are counting on me",           p:{mulan:3,tiana:2,moana:2} },
      { icon:"😶", label:"Being forced to live someone else's life",            p:{jasmine:2,raya:2,elsa:2} },
      { icon:"🌊", label:"Never discovering what I am truly meant to do",       p:{moana:3,ariel:2,rapunzel:2} },
      { icon:"❄️", label:"Hurting the people I love with my own power",        p:{elsa:3,mulan:1,moana:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"🔮", layout:"1col", q:"How do you feel about your destiny?",
    opts:[
      { icon:"⭐", label:"I believe in it completely and follow it",          p:{moana:3,aurora:2,cinderella:2} },
      { icon:"✍️", label:"I write my own destiny — nobody else does",        p:{raya:3,jasmine:3,tiana:3} },
      { icon:"🌊", label:"Destiny guides but I still make the choices",      p:{moana:2,mulan:2,belle:1} },
      { icon:"🌸", label:"Something beautiful is simply meant for me",       p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🤷", label:"I don't think about it — I just live fully",       p:{ariel:2,rapunzel:2,snow:1} },
      { icon:"❄️", label:"I forge my own path even when it is lonely",      p:{elsa:3,raya:2,mulan:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌟", layout:"1col", q:"You are happiest when...",
    opts:[
      { icon:"🌊", label:"In nature doing something active and alive",        p:{moana:3,raya:2,ariel:2} },
      { icon:"📚", label:"Absorbed completely in learning or creating",       p:{belle:3,rapunzel:2,tiana:2} },
      { icon:"💕", label:"Surrounded by people who truly love me",           p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"🏆", label:"Having just accomplished something really hard",   p:{tiana:3,mulan:3,raya:2} },
      { icon:"✨", label:"On an exciting adventure into the unknown",         p:{ariel:3,moana:2,jasmine:2} },
      { icon:"❄️", label:"Alone doing something I love perfectly",           p:{elsa:3,belle:2,aurora:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌺", layout:"1col", q:"How do you feel about change?",
    opts:[
      { icon:"😍", label:"I crave it — change is always exciting",           p:{ariel:3,jasmine:2,rapunzel:2} },
      { icon:"🤝", label:"I embrace it when it leads somewhere better",      p:{moana:3,tiana:2,mulan:2} },
      { icon:"😰", label:"It is hard but I always adapt eventually",         p:{cinderella:2,snow:2,aurora:2} },
      { icon:"🌊", label:"Change is as natural as the tide",                 p:{moana:3,ariel:2,raya:1} },
      { icon:"🏰", label:"I prefer stability and beloved routine",           p:{aurora:2,cinderella:2,snow:2} },
      { icon:"❄️", label:"Change is something I decide, not what happens to me", p:{elsa:3,raya:2,mulan:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"💭", layout:"1col", q:"What do you think about most?",
    opts:[
      { icon:"🌍", label:"Big questions — the meaning of it all",             p:{belle:3,moana:2,elsa:1} },
      { icon:"🔮", label:"My dreams and how to make them real",              p:{tiana:3,ariel:3,rapunzel:2} },
      { icon:"💕", label:"The people I love and how they are doing",         p:{snow:3,cinderella:2,aurora:2} },
      { icon:"⚔️", label:"Problems to solve and battles to fight",           p:{mulan:3,jasmine:2,raya:2} },
      { icon:"🌸", label:"Beauty in people, art, and the world",             p:{belle:2,aurora:3,cinderella:2} },
      { icon:"❄️", label:"How to be fully and freely myself",               p:{elsa:3,jasmine:1,raya:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌻", layout:"1col", q:"Your energy level is typically...",
    opts:[
      { icon:"⚡", label:"Very high — I practically bounce off walls",       p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"🌊", label:"Steady and consistent like a deep current",        p:{moana:2,tiana:2,mulan:2} },
      { icon:"🌸", label:"Gentle and soft — I move quietly through life",   p:{aurora:3,cinderella:2,snow:1} },
      { icon:"🔥", label:"Intense passionate bursts of everything",          p:{jasmine:3,raya:2,ariel:2} },
      { icon:"🌙", label:"Low and selective — I save it for what matters",  p:{belle:2,elsa:2,mulan:1} },
      { icon:"❄️", label:"Cool and precise — steady controlled power",      p:{elsa:3,raya:2,mulan:2} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌟", layout:"1col", q:"Which princess power would feel most natural to you?",
    opts:[
      { icon:"❄️", label:"Ice and snow — cool, calm and breathtaking",        p:{elsa:3} },
      { icon:"🌊", label:"Water — free flowing and ancient power",            p:{ariel:3,moana:2} },
      { icon:"🎨", label:"Art magic — everything I imagine comes to life",    p:{rapunzel:3} },
      { icon:"💕", label:"Healing — mending hearts and broken things",        p:{cinderella:3,snow:2,aurora:2} },
      { icon:"⚔️", label:"Warrior strength — fast, precise, unstoppable",    p:{raya:3,mulan:3} },
      { icon:"✨", label:"Wishing — making others' dreams actually real",     p:{cinderella:2,rapunzel:2,tiana:1} }
    ]
  },
  { cat:"✨ Personality", emoji:"🌙", layout:"1col", q:"People say you are too...",
    opts:[
      { icon:"😤", label:"Headstrong and stubborn about everything",         p:{jasmine:3,raya:3,ariel:2} },
      { icon:"🌙", label:"Dreamy and lost in your own world",                p:{aurora:2,ariel:2,cinderella:2} },
      { icon:"🔥", label:"Intense and serious about everything",             p:{jasmine:2,tiana:2,mulan:2} },
      { icon:"🤓", label:"Bookish and always researching something",         p:{belle:3,tiana:1,mulan:1} },
      { icon:"🌈", label:"Cheerful — like nothing can bring you down",       p:{snow:3,rapunzel:3,cinderella:1} },
      { icon:"❄️", label:"Closed off and hard to really know",              p:{elsa:3,aurora:1,mulan:1} }
    ]
  }
];
