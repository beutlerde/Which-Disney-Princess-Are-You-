/* ═══════════════════════════════════════════════
   QUESTIONS — Values & Dreams (25)
   ═══════════════════════════════════════════════ */
const Q_VALUES = [
  { cat:"🌟 Values", emoji:"🌟", layout:"1col", q:"Your greatest dream in life?",
    opts:[
      { icon:"💕", label:"True lasting love that actually stands every test",   p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🌊", label:"To explore and discover absolutely everything",        p:{ariel:3,moana:3,rapunzel:2} },
      { icon:"📚", label:"To learn and grow without any limit at all",           p:{belle:3,tiana:1} },
      { icon:"🔥", label:"To build something lasting completely from nothing",   p:{tiana:3,mulan:2,moana:1} },
      { icon:"🏆", label:"To protect and lead the people I love most",          p:{mulan:3,jasmine:2,moana:2} },
      { icon:"❄️", label:"To be completely free and entirely myself always",    p:{elsa:3,jasmine:2,raya:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"⚡", layout:"1col", q:"What would make you stand up and fight?",
    opts:[
      { icon:"💔", label:"Someone hurting the people I love most",               p:{mulan:3,raya:3,tiana:2} },
      { icon:"⚖️", label:"An injustice that everyone else ignores",              p:{jasmine:3,moana:2,raya:2} },
      { icon:"🌿", label:"The destruction of something precious and irreplaceable",p:{moana:3,ariel:2} },
      { icon:"🔓", label:"Having my freedom completely taken away",              p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"🌟", label:"Someone dismissing my dreams and my worth",            p:{tiana:3,rapunzel:2,moana:2} },
      { icon:"❄️", label:"Anyone being punished for being different",            p:{elsa:3,cinderella:2,snow:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"💎", layout:"2col", q:"What quality do you most want to be known for?",
    opts:[
      { icon:"💕", label:"Kindness",     desc:"Warm and genuinely caring",   p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🧠", label:"Wisdom",       desc:"Sharp and always learning",   p:{belle:3,tiana:2,mulan:2} },
      { icon:"⚔️", label:"Bravery",      desc:"Courageous when it counts",   p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🌟", label:"Creativity",   desc:"Visionary and expressive",    p:{rapunzel:3,ariel:2,belle:1} },
      { icon:"🔥", label:"Determination",desc:"Unstoppable always",          p:{tiana:3,mulan:2,moana:2} },
      { icon:"❄️", label:"Power",        desc:"Used with wisdom and care",   p:{elsa:3,mulan:2,jasmine:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🔮", layout:"1col", q:"A magical wish. You wish for...",
    opts:[
      { icon:"🌊", label:"To be part of a completely different world",            p:{ariel:3,jasmine:2,rapunzel:2} },
      { icon:"📚", label:"To know absolutely everything there is to know",        p:{belle:3,tiana:1,mulan:1} },
      { icon:"🕊️", label:"Peace — no more suffering or war anywhere",             p:{moana:2,cinderella:2,elsa:1} },
      { icon:"💕", label:"True love that lasts through absolutely everything",    p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🏆", label:"To achieve my one great goal completely",               p:{tiana:3,mulan:2} },
      { icon:"❄️", label:"To never be afraid of my own power again",             p:{elsa:3,raya:2,mulan:1} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌈", layout:"2col", q:"Facing an impossible choice you follow...",
    opts:[
      { icon:"❤️", label:"Your heart",  desc:"Feelings never truly lie",      p:{ariel:3,cinderella:2,aurora:2} },
      { icon:"🧠", label:"Your head",   desc:"Logic is the clearest guide",   p:{belle:3,tiana:2,mulan:2} },
      { icon:"🌬️", label:"The wind",   desc:"Something beyond knows the way", p:{moana:3,ariel:1} },
      { icon:"🔥", label:"Your gut",    desc:"Instinct is ancient wisdom",    p:{jasmine:2,ariel:1,raya:2} },
      { icon:"❄️", label:"Your code",  desc:"What I stand for guides me",    p:{elsa:3,mulan:3,raya:2} },
      { icon:"💕", label:"Your love",   desc:"Who I am protecting guides me", p:{mulan:3,cinderella:2,snow:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"💪", layout:"1col", q:"Your greatest source of strength?",
    opts:[
      { icon:"💕", label:"The faces of the people I love most",              p:{mulan:3,snow:2,cinderella:2} },
      { icon:"🏆", label:"My goal — I absolutely refuse to ever quit",       p:{tiana:3,mulan:2,raya:2} },
      { icon:"✨", label:"A deep feeling that something great is coming",    p:{cinderella:3,ariel:2,rapunzel:2} },
      { icon:"🌿", label:"The living world around me — nature never stops",  p:{moana:3,ariel:1} },
      { icon:"📖", label:"A story or idea that burns inside me",             p:{belle:3,rapunzel:2,aurora:1} },
      { icon:"❄️", label:"Proving to myself I am stronger than my fear",    p:{elsa:3,raya:3,mulan:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌙", layout:"1col", q:"What does true freedom mean to you?",
    opts:[
      { icon:"🌊", label:"The ability to go anywhere and do absolutely anything", p:{ariel:3,jasmine:3} },
      { icon:"🌿", label:"Living in complete harmony with the natural world",     p:{moana:3,raya:2} },
      { icon:"💕", label:"Loving and being loved without conditions",            p:{cinderella:2,aurora:2,ariel:2} },
      { icon:"🔓", label:"Not being caged by what others expect of me",          p:{jasmine:3,ariel:2,raya:2} },
      { icon:"📚", label:"Access to knowledge and real opportunity",             p:{belle:3,tiana:2,mulan:1} },
      { icon:"❄️", label:"Not being afraid of my own extraordinary self",       p:{elsa:3,raya:2,mulan:1} }
    ]
  },
  { cat:"🌟 Values", emoji:"⭐", layout:"1col", q:"What legacy do you want to leave?",
    opts:[
      { icon:"💕", label:"That I was truly kind to absolutely everyone",      p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"That I changed what people thought was possible",  p:{elsa:3,rapunzel:2} },
      { icon:"📚", label:"That I helped people learn and genuinely grow",    p:{belle:3,tiana:2,mulan:1} },
      { icon:"🔥", label:"That I built something that outlasted everything", p:{tiana:3,moana:2,mulan:2} },
      { icon:"⚔️", label:"That I was brave precisely when it mattered most", p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🌊", label:"That I restored something that was almost lost",   p:{moana:3,ariel:1,elsa:1} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌸", layout:"1col", q:"What do you believe about human nature?",
    opts:[
      { icon:"💕", label:"People are fundamentally and deeply good",          p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌱", label:"People can always grow and truly change",           p:{belle:3,tiana:2} },
      { icon:"⚖️", label:"People need real justice and clear accountability", p:{jasmine:3,mulan:2,raya:2} },
      { icon:"🌊", label:"People are shaped entirely by their world",         p:{moana:3,belle:2} },
      { icon:"🔥", label:"People rise magnificently when given the chance",   p:{tiana:3,mulan:2,moana:2} },
      { icon:"❄️", label:"People fear what they do not understand — always", p:{elsa:3,belle:2,mulan:1} }
    ]
  },
  { cat:"🌟 Values", emoji:"💡", layout:"1col", q:"What is wisdom to you?",
    opts:[
      { icon:"📖", label:"Knowledge accumulated through real careful learning",    p:{belle:3,tiana:2,mulan:1} },
      { icon:"🌿", label:"Understanding and deeply respecting the natural world",  p:{moana:3,raya:2} },
      { icon:"💕", label:"Deep genuine empathy for others always",                p:{cinderella:3,snow:2,aurora:2} },
      { icon:"⭐", label:"Knowing when to follow and when to lead",               p:{moana:3,mulan:2,tiana:2} },
      { icon:"🌊", label:"Understanding that absolutely everything is connected",  p:{moana:3,ariel:1} },
      { icon:"❄️", label:"Knowing your own power and choosing when to use it",    p:{elsa:3,mulan:2,raya:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌟", layout:"1col", q:"What would you stand for even completely alone?",
    opts:[
      { icon:"💕", label:"Kindness — even when it is genuinely hard",            p:{cinderella:3,snow:3,belle:2} },
      { icon:"⚖️", label:"Justice — absolutely no matter what the cost",         p:{mulan:3,jasmine:3,raya:2} },
      { icon:"🌿", label:"Every living thing that cannot speak for itself",      p:{moana:3,ariel:2} },
      { icon:"🔓", label:"The personal freedom of every living person",          p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"📚", label:"Truth and real knowledge always",                      p:{belle:3,mulan:2,tiana:1} },
      { icon:"❄️", label:"Being exactly who I am no matter what",               p:{elsa:3,raya:2,jasmine:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"💫", layout:"1col", q:"You measure success by...",
    opts:[
      { icon:"💕", label:"The love I give and the love I receive",              p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🏆", label:"Goals I set and then completely smash",               p:{tiana:3,mulan:3,raya:2} },
      { icon:"🌍", label:"The real difference I make in the world",             p:{moana:3,mulan:2} },
      { icon:"✨", label:"Living entirely on my own terms",                     p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"📖", label:"How much I have genuinely grown and learned",         p:{belle:3,tiana:1,rapunzel:2} },
      { icon:"❄️", label:"Mastering the things I once thought impossible",     p:{elsa:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌿", layout:"1col", q:"What are you most grateful for?",
    opts:[
      { icon:"💕", label:"The people in this world who truly love me",          p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌿", label:"The living natural world all around me",              p:{moana:3,raya:2} },
      { icon:"✨", label:"My dreams and my extraordinary imagination",          p:{ariel:3,rapunzel:3,tiana:2} },
      { icon:"📚", label:"The chance to keep learning and growing",             p:{belle:3,tiana:2,mulan:2} },
      { icon:"⚔️", label:"My strength and everything I have survived",         p:{mulan:3,raya:2,tiana:2} },
      { icon:"❄️", label:"That I finally learned to love who I am",            p:{elsa:3,rapunzel:1,aurora:1} }
    ]
  },
  { cat:"🌟 Values", emoji:"🔥", layout:"1col", q:"What makes you genuinely angry at the world?",
    opts:[
      { icon:"⚖️", label:"Injustice and unfairness going completely unchallenged",p:{jasmine:3,raya:3,mulan:2} },
      { icon:"💔", label:"Cruelty to the innocent and the vulnerable",           p:{cinderella:3,snow:2,belle:2} },
      { icon:"🌿", label:"The destruction of nature and wild places",            p:{moana:3,ariel:2} },
      { icon:"🔒", label:"Oppression and the complete lack of freedom",          p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"😴", label:"Wasted potential and completely missed opportunity",   p:{tiana:3,mulan:2,belle:2} },
      { icon:"❄️", label:"People being punished for being different",            p:{elsa:3,cinderella:2,snow:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"⭐", layout:"1col", q:"One day of unlimited power. You...",
    opts:[
      { icon:"🕊️", label:"End every single conflict in the world",             p:{moana:2,cinderella:2,elsa:1} },
      { icon:"🌿", label:"Restore every wild natural habitat completely",       p:{moana:3,raya:2} },
      { icon:"📚", label:"Give every person equal access to education",         p:{belle:3,tiana:2,mulan:1} },
      { icon:"💕", label:"Heal every person who is suffering and hurting",     p:{cinderella:2,snow:3,aurora:2} },
      { icon:"🔓", label:"Free every person imprisoned unjustly",               p:{jasmine:3,mulan:2,raya:2} },
      { icon:"❄️", label:"Make the world safe for everyone who is different",   p:{elsa:3,cinderella:2,snow:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"💎", layout:"1col", q:"Your definition of a good life?",
    opts:[
      { icon:"💕", label:"Rich in love and meaningful relationships",           p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"Full of adventure and discovery",                    p:{ariel:3,moana:3,rapunzel:2} },
      { icon:"🏆", label:"Achieving something I am genuinely proud of",        p:{tiana:3,mulan:3,moana:2} },
      { icon:"🌿", label:"Simple and deeply connected to nature",              p:{moana:3,raya:2} },
      { icon:"📖", label:"Always learning and growing",                        p:{belle:3,tiana:1,rapunzel:2} },
      { icon:"❄️", label:"Free to be exactly who I am always",                p:{elsa:3,jasmine:2,raya:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌟", layout:"1col", q:"What would you tell your younger self?",
    opts:[
      { icon:"✨", label:"Your dreams are completely real — chase every one",   p:{ariel:3,tiana:3,rapunzel:2} },
      { icon:"💕", label:"You are worthy of love exactly as you really are",   p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🦁", label:"You are so much braver than you could ever know",    p:{mulan:3,raya:2,moana:2} },
      { icon:"🌿", label:"Trust — the world has a real plan for you",          p:{moana:3,aurora:2} },
      { icon:"🔓", label:"Never ever let anyone tell you who to be",           p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"❄️", label:"Your power is not something to be afraid of",       p:{elsa:3,raya:2,mulan:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌺", layout:"1col", q:"If you could change one thing about the world...",
    opts:[
      { icon:"💕", label:"Make everyone feel seen and genuinely loved",         p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌿", label:"Restore the natural world fully and completely",     p:{moana:3,raya:2} },
      { icon:"🔓", label:"End all forms of oppression everywhere",             p:{jasmine:3,mulan:2,ariel:2} },
      { icon:"📚", label:"Give everyone equal access to real education",       p:{belle:3,tiana:2,mulan:1} },
      { icon:"🎨", label:"Fill every corner with art and beauty",              p:{rapunzel:3,ariel:2,belle:2} },
      { icon:"❄️", label:"Make it safe to be different everywhere",            p:{elsa:3,cinderella:2,snow:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🔮", layout:"1col", q:"Your personal philosophy?",
    opts:[
      { icon:"💕", label:"Love is genuinely the answer to everything",          p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"Go with the flow and trust the journey completely",   p:{moana:3,ariel:2} },
      { icon:"🔥", label:"Make your own destiny through pure will and work",    p:{tiana:3,mulan:3,raya:2} },
      { icon:"📚", label:"Knowledge is always and truly the greatest power",    p:{belle:3,tiana:1,mulan:1} },
      { icon:"🔓", label:"True freedom is the single highest goal",             p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"❄️", label:"Be exactly who you are — unapologetically always",   p:{elsa:3,raya:2,jasmine:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"⚡", layout:"1col", q:"What kind of hero are you?",
    opts:[
      { icon:"⚔️", label:"The warrior — I fight right on the front lines",    p:{mulan:3,raya:3,jasmine:2} },
      { icon:"💕", label:"The healer — I restore and nurture and care",        p:{cinderella:3,snow:3,aurora:2} },
      { icon:"📚", label:"The sage — I solve things with knowledge always",    p:{belle:3,tiana:2,mulan:1} },
      { icon:"🌿", label:"The guardian — I protect what is truly precious",    p:{moana:3,raya:2} },
      { icon:"🎨", label:"The creator — I inspire and transform things",       p:{rapunzel:3,ariel:2,belle:2} },
      { icon:"❄️", label:"The queen — I protect everyone with real power",    p:{elsa:3,mulan:2,jasmine:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌸", layout:"1col", q:"You feel most like yourself when...",
    opts:[
      { icon:"🌊", label:"In or near the water — it always calls to me",       p:{ariel:3,moana:3} },
      { icon:"📚", label:"Learning or reading something completely new",        p:{belle:3,tiana:1,rapunzel:2} },
      { icon:"❄️", label:"Alone creating something perfect and beautiful",     p:{elsa:3,belle:2,aurora:2} },
      { icon:"🎨", label:"Making something that did not exist before me",      p:{rapunzel:3,ariel:2,tiana:2} },
      { icon:"💕", label:"With the people who know and love me completely",    p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"⚔️", label:"Doing something that genuinely challenges me",       p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌙", layout:"1col", q:"What makes you feel truly seen?",
    opts:[
      { icon:"💬", label:"When someone truly listens to my deepest dreams",     p:{ariel:3,tiana:2,rapunzel:2} },
      { icon:"🌿", label:"When someone shares my deep love of the world",      p:{moana:3,raya:2} },
      { icon:"😂", label:"When someone finds the same things genuinely funny", p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"❄️", label:"When someone is not afraid of my real full power",   p:{elsa:3,jasmine:2,mulan:2} },
      { icon:"💕", label:"When someone accepts me with absolutely no questions",p:{cinderella:3,snow:2,aurora:2} },
      { icon:"📚", label:"When someone loves learning right alongside me",     p:{belle:3,tiana:2,mulan:1} }
    ]
  },
  { cat:"🌟 Values", emoji:"💡", layout:"1col", q:"Your greatest act of bravery would be...",
    opts:[
      { icon:"❄️", label:"Revealing my true power to the whole world",                    p:{elsa:3} },
      { icon:"⚔️", label:"Fighting for others when the odds are completely against me",  p:{mulan:3,raya:3,jasmine:1} },
      { icon:"💕", label:"Opening my heart fully when I am afraid",                       p:{ariel:2,cinderella:3,aurora:2} },
      { icon:"🔊", label:"Speaking up when every single person is silent",               p:{jasmine:3,moana:2,raya:2} },
      { icon:"🌊", label:"Answering a call that could change absolutely everything",      p:{moana:3,ariel:2} },
      { icon:"🎨", label:"Showing my truest most vulnerable creative self",              p:{rapunzel:3,belle:2,tiana:2} }
    ]
  },
  { cat:"🌟 Values", emoji:"🌟", layout:"1col", q:"The world would be better with more...",
    opts:[
      { icon:"💕", label:"Genuine kindness and real compassion everywhere",      p:{cinderella:3,snow:3,aurora:2} },
      { icon:"📚", label:"Real education and true understanding between people", p:{belle:3,tiana:2,mulan:1} },
      { icon:"🌿", label:"Respect for every living natural thing",               p:{moana:3,raya:2} },
      { icon:"🔓", label:"Real freedom and complete equality for all",           p:{jasmine:3,ariel:2,elsa:2} },
      { icon:"🎨", label:"Art, music and genuine beautiful creativity",          p:{rapunzel:3,ariel:2,belle:2} },
      { icon:"❄️", label:"Courage to be different and fully embrace it",        p:{elsa:3,raya:2,rapunzel:2} }
    ]
  }
];

Q_VALUES.push(
  { cat:"🌟 Values", emoji:"🔮", layout:"1col", q:"What do you owe the world?",
    opts:[
      { icon:"💕", label:"My kindness and my genuine care for others",          p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌿", label:"Protection of its beauty and all living things",      p:{moana:3,raya:2} },
      { icon:"📚", label:"My knowledge and every skill I have built",           p:{tiana:3,belle:2,mulan:2} },
      { icon:"⚔️", label:"My courage in the face of real darkness",            p:{mulan:3,raya:3,moana:2} },
      { icon:"🎨", label:"My creativity and the light I can bring",             p:{rapunzel:3,ariel:2,belle:2} },
      { icon:"❄️", label:"To use my power only for good and never for harm",   p:{elsa:3,mulan:2,moana:2} }
    ]
  }
);
