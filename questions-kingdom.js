/* ═══════════════════════════════════════════════
   QUESTIONS — Royal Fun & Quirks (25)
   ═══════════════════════════════════════════════ */
const Q_FUN = [
  { cat:"🎉 Royal Fun", emoji:"🎶", layout:"visual", q:"Your personal anthem plays as you enter a room...",
    opts:[
      { icon:"❄️", label:"Let It Go",        desc:"Soaring, dramatic and completely mine",  p:{elsa:3} },
      { icon:"🌟", label:"Epic Orchestral",  desc:"Grand and impossibly cinematic",         p:{mulan:3,moana:3,raya:2} },
      { icon:"🌊", label:"Wild and Oceanic", desc:"Completely free and boundless",          p:{ariel:3,moana:2} },
      { icon:"🎻", label:"Sweeping Romance", desc:"Deep and deeply romantic",               p:{cinderella:3,aurora:2,belle:2} },
      { icon:"🎸", label:"Fun and Upbeat",   desc:"Absolutely unstoppable joy",             p:{rapunzel:3,ariel:2,tiana:2} },
      { icon:"🥁", label:"Fierce and Driving",desc:"Pure, intense power",                  p:{mulan:3,raya:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🧪", layout:"1col", q:"A villain offers you a deal. You...",
    opts:[
      { icon:"💔", label:"Fall for it honestly — at least for a moment",          p:{ariel:2,snow:2,rapunzel:2,cinderella:1} },
      { icon:"🤝", label:"Consider it carefully — maybe something useful here",   p:{belle:2,tiana:1,jasmine:1} },
      { icon:"🚫", label:"Refuse immediately and with absolute drama",            p:{jasmine:3,raya:3,mulan:2} },
      { icon:"🧠", label:"Play along just to outsmart them completely",           p:{mulan:3,belle:2,tiana:2} },
      { icon:"❄️", label:"Freeze them before they finish the sentence",           p:{elsa:3} },
      { icon:"🌿", label:"Try to understand them — there may be good inside",    p:{moana:2,belle:2,cinderella:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🍽️", layout:"visual", q:"At the royal banquet you make for...",
    opts:[
      { icon:"❄️", label:"Frozen Desserts",  desc:"The ice station amazes everyone",   p:{elsa:3} },
      { icon:"🫐", label:"Magical Berry Tarts",desc:"Delicate and enchanting",         p:{cinderella:2,aurora:2,snow:2} },
      { icon:"🦞", label:"Seafood Extravaganza",desc:"Full, spectacular and spicy",    p:{ariel:3,moana:2} },
      { icon:"🥘", label:"Exotic Spiced Dishes",desc:"From distant lands",             p:{jasmine:3} },
      { icon:"🍰", label:"Elaborate Pastries", desc:"The most beautiful imaginable",   p:{belle:3,tiana:3} },
      { icon:"🎂", label:"Giant Celebration Cake",desc:"Five tiers that stun all",     p:{rapunzel:3,snow:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🏆", layout:"2col", q:"In any group project you naturally become...",
    opts:[
      { icon:"👑", label:"The Leader",      desc:"I see the whole vision",         p:{jasmine:3,moana:3,mulan:2} },
      { icon:"💡", label:"The Ideas Person",desc:"Creative spark always",          p:{belle:3,rapunzel:2,ariel:2} },
      { icon:"🤝", label:"The Peacekeeper", desc:"I unite everyone",               p:{cinderella:2,snow:2} },
      { icon:"⚙️", label:"The Doer",        desc:"I make it actually happen",      p:{tiana:3,mulan:2,raya:2} },
      { icon:"❄️", label:"The Strategist",  desc:"I think three steps ahead",      p:{elsa:3,mulan:2} },
      { icon:"⚔️", label:"The Protector",   desc:"I keep everyone safe",           p:{mulan:3,raya:3} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌙", layout:"1col", q:"Your most magical evening would be...",
    opts:[
      { icon:"❄️", label:"Creating something breathtaking in ice and silence",    p:{elsa:3} },
      { icon:"🌌", label:"Stargazing and telling stories by the fire",            p:{moana:3,aurora:2} },
      { icon:"💃", label:"Dancing until midnight at the grandest ball",           p:{cinderella:3,jasmine:2,snow:2} },
      { icon:"🧗", label:"Climbing somewhere high to see the entire kingdom",     p:{raya:3,rapunzel:2} },
      { icon:"📚", label:"Reading the most wonderful book by candlelight",        p:{belle:3,aurora:2} },
      { icon:"🌊", label:"Swimming in the moonlit sea completely free",           p:{ariel:3,moana:3} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌺", layout:"2col", q:"Finish this sentence. My magic is in my...",
    opts:[
      { icon:"💕", label:"Heart",   desc:"Love is my true power",              p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🧠", label:"Mind",    desc:"I think my way through all things",  p:{belle:3,mulan:2,tiana:2} },
      { icon:"❄️", label:"Power",   desc:"What I was born to have and use",    p:{elsa:3} },
      { icon:"🔥", label:"Spirit",  desc:"Unbreakable and untameable",         p:{jasmine:2,moana:2,raya:2} },
      { icon:"✋", label:"Hands",   desc:"I make and do and build everything", p:{tiana:3,rapunzel:2,mulan:1} },
      { icon:"👣", label:"Journey", desc:"Every single step has made me",      p:{ariel:3,moana:3} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🎭", layout:"1col", q:"If you were in a Disney movie you would be...",
    opts:[
      { icon:"👑", label:"The princess who saves herself and everyone else",    p:{elsa:3,raya:3,mulan:2} },
      { icon:"💕", label:"The one whose pure love breaks every single curse",   p:{cinderella:3,aurora:3,snow:2} },
      { icon:"📚", label:"The curious one who figures out the whole mystery",   p:{belle:3,tiana:2} },
      { icon:"🌊", label:"The one called by the sea to a great adventure",      p:{ariel:3,moana:3} },
      { icon:"😂", label:"The comic heart who brings joy to every dark scene",  p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"⚔️", label:"The warrior who fights when no one else will",        p:{mulan:3,raya:3} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🔮", layout:"1col", q:"If you could change ONE thing about your story...",
    opts:[
      { icon:"❄️", label:"I would not be afraid of my power so early",          p:{elsa:3} },
      { icon:"💕", label:"I would trust love to save me sooner always",         p:{cinderella:2,aurora:2,snow:2} },
      { icon:"🌊", label:"I would find my adventure without losing anything",   p:{ariel:3,moana:2} },
      { icon:"📚", label:"I would have more time in the library always",        p:{belle:3,rapunzel:1} },
      { icon:"⚔️", label:"I would fight back even earlier and harder",          p:{mulan:3,raya:3} },
      { icon:"✨", label:"Nothing — my story is exactly what made me",          p:{rapunzel:2,moana:2,tiana:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌟", layout:"1col", q:"Your perfect lazy Sunday has...",
    opts:[
      { icon:"❄️", label:"Ice, perfect silence and complete creative solitude",  p:{elsa:3} },
      { icon:"📚", label:"A mountain of books and nowhere to be ever",          p:{belle:3,aurora:2,rapunzel:2} },
      { icon:"🍳", label:"Cooking elaborate food just because I feel like it",  p:{tiana:3,snow:2,rapunzel:2} },
      { icon:"🌊", label:"The ocean, the sun and nothing complicated",           p:{ariel:3,moana:3} },
      { icon:"💃", label:"Impromptu dancing whenever a good song appears",       p:{cinderella:3,rapunzel:3,snow:2} },
      { icon:"🌿", label:"A long hike somewhere wild and then total silence",   p:{moana:3,raya:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"💎", layout:"visual", q:"The one thing you would rescue from a burning palace?",
    opts:[
      { icon:"❄️", label:"My Powers",       desc:"They are who I truly am",          p:{elsa:3} },
      { icon:"📚", label:"My Beloved Book", desc:"Knowledge treasure",               p:{belle:3,rapunzel:1} },
      { icon:"🎨", label:"My Paintings",    desc:"Pieces of my actual soul",          p:{rapunzel:3} },
      { icon:"💕", label:"The People I Love",desc:"Nothing else even matters",       p:{cinderella:3,snow:3,mulan:2} },
      { icon:"🍳", label:"Grandmother's Recipe",desc:"Irreplaceable forever",         p:{tiana:3} },
      { icon:"⚔️", label:"My Weapon",       desc:"I will need it for what comes next",p:{raya:3,mulan:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌙", layout:"1col", q:"Your villain origin story would begin with...",
    opts:[
      { icon:"❄️", label:"Being feared for something I could not help",          p:{elsa:3} },
      { icon:"🔒", label:"Being locked away and never truly listened to",        p:{jasmine:3,ariel:2} },
      { icon:"💔", label:"Losing the one person who understood me completely",   p:{elsa:2,cinderella:2,moana:2} },
      { icon:"⚖️", label:"Watching injustice go completely unpunished forever",  p:{raya:3,mulan:2,jasmine:2} },
      { icon:"😶", label:"Being told my whole life that I was simply not enough",p:{tiana:2,ariel:2,rapunzel:2} },
      { icon:"🌊", label:"Having everything I loved taken without any reason",   p:{moana:3,ariel:2,raya:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🎉", layout:"visual", q:"If you threw an epic party the theme would be...",
    opts:[
      { icon:"❄️", label:"Winter Wonderland", desc:"Real living ice everywhere",       p:{elsa:3} },
      { icon:"🌊", label:"Under the Sea",     desc:"A spectacular full of wonder",    p:{ariel:3,moana:2} },
      { icon:"✨", label:"Lanterns and Stars", desc:"A night sky you can touch",       p:{rapunzel:3,cinderella:2} },
      { icon:"🌺", label:"Exotic Palace Garden",desc:"Every color and spice",         p:{jasmine:3,ariel:1} },
      { icon:"🌿", label:"Forest Feast",       desc:"Bonfires and ancient music",     p:{moana:3,raya:2} },
      { icon:"🍳", label:"Grand Banquet",      desc:"The finest food anyone has tasted",p:{tiana:3,snow:1} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌸", layout:"1col", q:"Your superpower in real life is probably...",
    opts:[
      { icon:"❄️", label:"Staying completely calm when everyone else panics",    p:{elsa:3,mulan:2} },
      { icon:"💕", label:"Making people feel genuinely welcome always",          p:{cinderella:3,snow:3,aurora:2} },
      { icon:"😂", label:"Making everyone laugh no matter how bad it gets",     p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🧠", label:"Understanding complex things that others completely miss",p:{belle:3,tiana:2} },
      { icon:"🛡️", label:"Knowing exactly what people need before they ask",   p:{mulan:2,snow:2,tiana:2} },
      { icon:"⚔️", label:"Turning any situation completely to your advantage",  p:{raya:3,jasmine:3,mulan:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🏹", layout:"visual", q:"Your most likely Disney sidekick is...",
    opts:[
      { icon:"❄️", label:"Loyal Reindeer",   desc:"Warm and always there",            p:{elsa:3} },
      { icon:"🤝", label:"Wise Creature",    desc:"Ancient wisdom guides me",         p:{moana:3,ariel:1} },
      { icon:"🐸", label:"Surprise Companion",desc:"Who becomes true family",         p:{tiana:3} },
      { icon:"🦅", label:"Fierce Creature",  desc:"Matches my fierce energy",         p:{mulan:3,raya:2} },
      { icon:"🌈", label:"Colorful Chameleon",desc:"Reflects all my wild colors",     p:{rapunzel:3} },
      { icon:"🐦", label:"Small Magic Bird", desc:"Brings me pure joy",               p:{cinderella:3,snow:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"💫", layout:"1col", q:"If your life were a Disney song it would be about...",
    opts:[
      { icon:"❄️", label:"Finally letting go of everything holding me back",     p:{elsa:3} },
      { icon:"🌊", label:"A whole new world waiting just beyond the horizon",    p:{ariel:3,jasmine:3} },
      { icon:"💕", label:"A dream that I believed in when nobody else did",      p:{cinderella:3,tiana:3} },
      { icon:"🌿", label:"The call of something greater than I am alone",        p:{moana:3,raya:2} },
      { icon:"✨", label:"The moment I finally stepped into my full power",      p:{rapunzel:3,mulan:3} },
      { icon:"😄", label:"How beautiful and wild and good this life really is",  p:{snow:3,rapunzel:2,ariel:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌟", layout:"1col", q:"If you were a weather phenomenon you would be...",
    opts:[
      { icon:"❄️", label:"A blizzard — breathtaking, overwhelming and powerful", p:{elsa:3} },
      { icon:"🌊", label:"A warm tropical storm — wild, free and alive",         p:{ariel:3,moana:3} },
      { icon:"☀️", label:"Persistent sunshine — cheerful and warming everything",p:{snow:3,rapunzel:3,cinderella:2} },
      { icon:"⭐", label:"A meteor shower — rare, magical and breathtaking",     p:{cinderella:3,aurora:2} },
      { icon:"🌸", label:"The first warm day of spring — everything changing",   p:{aurora:3,cinderella:2,belle:2} },
      { icon:"⚡", label:"A lightning storm — fierce, intense and commanding",   p:{jasmine:3,mulan:2,raya:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🎉", layout:"1col", q:"The three words that absolutely describe you best are...",
    opts:[
      { icon:"❄️", label:"Powerful, Lonely, Becoming",    p:{elsa:3} },
      { icon:"🌊", label:"Curious, Passionate, Free",     p:{ariel:3,moana:2} },
      { icon:"💕", label:"Kind, Hopeful, Warm",           p:{cinderella:3,snow:3,aurora:2} },
      { icon:"📚", label:"Curious, Brave, Imagining",     p:{belle:3,rapunzel:2,tiana:1} },
      { icon:"⚔️", label:"Fierce, Loyal, Ready",          p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🌿", label:"Free, Wild, Rooted",            p:{moana:3,raya:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"💫", layout:"1col", q:"Your Disney era would be...",
    opts:[
      { icon:"❄️", label:"Modern — I am a new kind of princess entirely",       p:{elsa:3,raya:3} },
      { icon:"✨", label:"Classic — timeless magic runs through everything",      p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🌊", label:"Renaissance — big dreams, big adventure, big heart",   p:{ariel:3,belle:3,jasmine:3} },
      { icon:"🌿", label:"New Age — culture, roots and something ancient calling",p:{moana:3,raya:2} },
      { icon:"🏙️", label:"Contemporary — real problems, real heart, real girl",  p:{tiana:3,rapunzel:2} },
      { icon:"💫", label:"All eras — I contain multitudes of every one",         p:{rapunzel:3,ariel:2,cinderella:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌙", layout:"visual", q:"If you could live in any Disney location?",
    opts:[
      { icon:"❄️", label:"Arendelle",       desc:"Ice mountains, magic and my true home",p:{elsa:3} },
      { icon:"🌊", label:"Under the Sea",   desc:"Every ocean creature my neighbor",     p:{ariel:3,moana:2} },
      { icon:"🏰", label:"Enchanted Castle",desc:"Library, ballroom and wonder",          p:{belle:3,cinderella:2} },
      { icon:"🌺", label:"Agrabah",         desc:"Magic carpets and the marketplace",    p:{jasmine:3,ariel:1} },
      { icon:"🌿", label:"Motunui",         desc:"Ocean, stars, family and purpose",     p:{moana:3} },
      { icon:"🏙️", label:"New Orleans",     desc:"Jazz, food, art and real life magic",  p:{tiana:3,ariel:1} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌸", layout:"visual", q:"The royal title you would most want is...",
    opts:[
      { icon:"❄️", label:"The Snow Queen",    desc:"Power, beauty and eternal magic",    p:{elsa:3} },
      { icon:"🌊", label:"Explorer of the Deep",desc:"Brave, free and discovering",      p:{ariel:3,moana:3} },
      { icon:"📚", label:"The Learned One",   desc:"Wise, curious and always growing",   p:{belle:3,tiana:2} },
      { icon:"💕", label:"The Beloved",       desc:"Kind, warm and genuinely adored",    p:{cinderella:3,snow:3,aurora:2} },
      { icon:"⚔️", label:"The Warrior Queen", desc:"Fierce, brave and protecting all",   p:{mulan:3,raya:3} },
      { icon:"✨", label:"The Dreamer",        desc:"Visionary, creative, making magic",  p:{rapunzel:3,ariel:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"💎", layout:"1col", q:"If your life were a Disney title it would be...",
    opts:[
      { icon:"❄️", label:"Frozen — learning to truly love who I am",              p:{elsa:3} },
      { icon:"🌊", label:"The Little Mermaid — longing for a different world",    p:{ariel:3} },
      { icon:"💕", label:"Cinderella — believing in dreams through everything",   p:{cinderella:3} },
      { icon:"⚔️", label:"Mulan — becoming exactly who I was meant to be",       p:{mulan:3,raya:2} },
      { icon:"🌿", label:"Moana — answering the call of something greater",       p:{moana:3} },
      { icon:"📚", label:"Beauty and the Beast — finding good where others cannot",p:{belle:3} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌺", layout:"1col", q:"Your final battle would be against...",
    opts:[
      { icon:"❄️", label:"Your own fear of your power and what it could do",      p:{elsa:3} },
      { icon:"🔒", label:"A world that keeps trying to cage who you truly are",   p:{jasmine:3,ariel:2,raya:2} },
      { icon:"💔", label:"The darkness that wants to take what you love most",    p:{mulan:3,moana:2,cinderella:2} },
      { icon:"🌊", label:"Forgetting where you came from and who you really are", p:{moana:3} },
      { icon:"💕", label:"Your own doubt that you are worthy of love",             p:{cinderella:3,snow:2,aurora:2} },
      { icon:"📚", label:"The forces that want to keep people from knowing truth", p:{belle:3,tiana:2,mulan:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"🌟", layout:"visual", q:"When the credits roll on your story you are remembered as...",
    opts:[
      { icon:"❄️", label:"The Snow Queen",    desc:"Who changed what power could mean",   p:{elsa:3} },
      { icon:"💕", label:"The Beloved Princess",desc:"Whose kindness broke every curse",  p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"The Wayfinder",     desc:"Who heard the ocean and answered",    p:{ariel:3,moana:3} },
      { icon:"⚔️", label:"The Warrior",       desc:"Who fought when no one else would",   p:{mulan:3,raya:3} },
      { icon:"📚", label:"The Dreamer",       desc:"Who never stopped believing and building",p:{tiana:3,belle:2,rapunzel:2} },
      { icon:"✨", label:"The Wonder",        desc:"Who made everything more beautiful",  p:{rapunzel:3,ariel:2,snow:2} }
    ]
  }
];

Q_FUN.push(
  { cat:"🎉 Royal Fun", emoji:"🌺", layout:"1col", q:"Your hidden talent that would surprise everyone is...",
    opts:[
      { icon:"❄️", label:"Creating breathtaking ice sculptures instantly",        p:{elsa:3} },
      { icon:"🍳", label:"I am a genuinely brilliant professional-level chef",    p:{tiana:3} },
      { icon:"🎵", label:"Singing — I could stop a whole room completely cold",   p:{ariel:3,cinderella:2,snow:2} },
      { icon:"🎨", label:"Painting — I have covered entire rooms without stopping",p:{rapunzel:3} },
      { icon:"⚔️", label:"Combat — I have been training when nobody was watching",p:{mulan:3,raya:3} },
      { icon:"📚", label:"I have memorized more things than anyone would believe", p:{belle:3,tiana:2} }
    ]
  },
  { cat:"🎉 Royal Fun", emoji:"💕", layout:"1col", q:"The Disney princess quote that lives in your heart is...",
    opts:[
      { icon:"❄️", label:"Let it go — the cold never bothered me anyway",         p:{elsa:3} },
      { icon:"💕", label:"A dream is a wish your heart makes",                    p:{cinderella:3,aurora:2,snow:2} },
      { icon:"🌊", label:"I want to be where the people are",                     p:{ariel:3,moana:2} },
      { icon:"📚", label:"I want adventure in the great wide somewhere",           p:{belle:3,rapunzel:2} },
      { icon:"🌿", label:"The ocean is calling and I must go",                    p:{moana:3} },
      { icon:"⚔️", label:"My duty is to my heart",                               p:{mulan:3,jasmine:3,raya:2} }
    ]
  }
);
