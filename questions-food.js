/* ═══════════════════════════════════════════════
   QUESTIONS — Animal Companions (25)
   ═══════════════════════════════════════════════ */
const Q_ANIMALS = [
  { cat:"🐾 Animals", emoji:"🐾", layout:"flip", q:"Your ideal animal companion?",
    opts:[
      { icon:"🐭", label:"Mice and Birds",   desc:"Small, sweet, magical helpers", p:{cinderella:3,snow:2} },
      { icon:"🐙", label:"Sea Creatures",    desc:"Fish, crabs and dolphins",      p:{ariel:3,moana:2} },
      { icon:"🐴", label:"Noble Horse",      desc:"Strong, loyal, magnificent",    p:{mulan:2,cinderella:1,raya:1} },
      { icon:"❄️", label:"Reindeer",         desc:"Gentle, loyal and warm",        p:{elsa:3} },
      { icon:"🦅", label:"A Great Bird",     desc:"Eagle, falcon or hawk",         p:{raya:3,mulan:2,moana:1} },
      { icon:"🦎", label:"A Chameleon",      desc:"Colorful, quirky and unique",   p:{rapunzel:3} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌿", layout:"1col", q:"Your relationship with animals in one sentence?",
    opts:[
      { icon:"🗣️", label:"We basically communicate — they understand me perfectly",p:{snow:3,cinderella:3} },
      { icon:"🐾", label:"Deep love — I would protect any animal fiercely",       p:{raya:2,mulan:2,moana:1} },
      { icon:"🌿", label:"Deep respect — I honor every living creature",           p:{moana:3,raya:2} },
      { icon:"🎯", label:"I have one special legendary animal bond",               p:{mulan:3,rapunzel:2,elsa:1} },
      { icon:"✨", label:"Animals are simply and magically drawn to me",           p:{snow:3,cinderella:2,aurora:2} },
      { icon:"🤷", label:"I like them but I am honestly more of a people person",  p:{tiana:2,jasmine:1,belle:1} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🐠", layout:"flip", q:"If you could have one magical pet?",
    opts:[
      { icon:"🦄", label:"A Unicorn",      desc:"Pure magic made gloriously real", p:{aurora:3,rapunzel:2,cinderella:2} },
      { icon:"🐉", label:"A Dragon",       desc:"Fire, power and fierce loyalty",  p:{mulan:3,raya:2} },
      { icon:"❄️", label:"A Snow Fox",     desc:"Magical, white and ethereal",     p:{elsa:3} },
      { icon:"🦜", label:"Talking Parrot", desc:"Witty, clever and entertaining",  p:{ariel:2,moana:2,jasmine:1} },
      { icon:"🐬", label:"A Dolphin",      desc:"Brilliant, free and joyful",      p:{ariel:3,moana:3} },
      { icon:"🦊", label:"A Fox",          desc:"Clever, wild, magnificently smart",p:{raya:2,belle:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🦋", layout:"1col", q:"You find an injured animal. You...",
    opts:[
      { icon:"🏠", label:"Bring it home and nurse it back to full health",     p:{snow:3,cinderella:3,belle:2,rapunzel:2} },
      { icon:"🏥", label:"Get expert help for it immediately",                 p:{tiana:2,mulan:1,jasmine:1} },
      { icon:"🌿", label:"Help it but respect that it belongs in nature",      p:{moana:3,raya:2} },
      { icon:"💬", label:"Sit with it quietly until it fully trusts you",      p:{aurora:2,cinderella:2,belle:2} },
      { icon:"❄️", label:"Use whatever power I have to heal it",              p:{elsa:3,rapunzel:2,snow:2} },
      { icon:"🔮", label:"Call on nature itself to help restore it",           p:{moana:2,ariel:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌊", layout:"1col", q:"You are most connected to which kind of creature?",
    opts:[
      { icon:"🌊", label:"Creatures of the deep sea",                           p:{ariel:3,moana:3} },
      { icon:"❄️", label:"Arctic animals — reindeer, wolves, snow foxes",      p:{elsa:3} },
      { icon:"🌲", label:"Woodland and deep forest animals",                    p:{belle:2,raya:2} },
      { icon:"🌾", label:"Farmyard animals and gentle creatures",               p:{cinderella:3,snow:2,aurora:1} },
      { icon:"🌺", label:"Exotic and colorful birds and tropical creatures",    p:{jasmine:3,rapunzel:2,ariel:1} },
      { icon:"🌙", label:"Nocturnal creatures — owls, foxes and wolves",       p:{belle:3,mulan:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🦅", layout:"1col", q:"Your animal spirit would be...",
    opts:[
      { icon:"🕊️", label:"A dove — gentle, pure and completely peaceful",    p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"A snow leopard — rare, silent and breathtaking",   p:{elsa:3} },
      { icon:"🦅", label:"An eagle — free, powerful and sees everything",     p:{moana:3,raya:2,jasmine:2} },
      { icon:"🦁", label:"A lioness — brave, fierce and fiercely loyal",      p:{mulan:3,jasmine:2} },
      { icon:"🐬", label:"A dolphin — joyful, playful, brilliantly smart",    p:{ariel:3,rapunzel:3,snow:2} },
      { icon:"🦊", label:"A fox — clever, quick and magnificently resourceful",p:{tiana:2,mulan:2,belle:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌺", layout:"1col", q:"Your pet would sleep...",
    opts:[
      { icon:"🛏️", label:"In my bed — obviously where else would they go",     p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"❄️", label:"In a magical ice bed I made just for them",          p:{elsa:3} },
      { icon:"🌿", label:"Wherever they want — wild and completely free",      p:{moana:3,raya:2} },
      { icon:"🛡️", label:"Outside my door guarding me all through the night",  p:{mulan:3,raya:2,jasmine:2} },
      { icon:"🐾", label:"In their own special perfect spot I made for them",  p:{belle:2,aurora:2,tiana:1} },
      { icon:"🌊", label:"In their natural habitat — I respect their nature",  p:{moana:3,ariel:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🦋", layout:"1col", q:"What animal would you be reincarnated as?",
    opts:[
      { icon:"❄️", label:"A snow leopard — solitary, majestic and breathtaking",p:{elsa:3} },
      { icon:"🧜", label:"A mermaid — does that absolutely count?",              p:{ariel:3} },
      { icon:"🦁", label:"A lioness — powerful, free and magnificent",           p:{jasmine:3,mulan:2,raya:2} },
      { icon:"🦅", label:"An eagle soaring completely free over everything",     p:{moana:2,raya:2} },
      { icon:"🦋", label:"A butterfly — transformation and complete beauty",     p:{rapunzel:3,cinderella:2,aurora:2} },
      { icon:"🐬", label:"A dolphin — brilliant, joyful and deeply free",        p:{ariel:3,rapunzel:2,snow:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌊", layout:"1col", q:"Which ocean creature is most like you?",
    opts:[
      { icon:"🐬", label:"Dolphin — joyful, playful and brilliantly social",   p:{ariel:3,snow:3,rapunzel:2} },
      { icon:"🦈", label:"Shark — powerful, misunderstood and free",            p:{jasmine:3,raya:2,ariel:1} },
      { icon:"🐙", label:"Octopus — clever, curious and extraordinarily gifted",p:{belle:3,tiana:2,ariel:2} },
      { icon:"🐢", label:"Sea turtle — ancient wisdom on a long steady journey",p:{moana:3,aurora:2} },
      { icon:"🌊", label:"A wave itself — pure untameable energy and motion",   p:{moana:3,ariel:2} },
      { icon:"❄️", label:"An iceberg — most of what I am is deep below",       p:{elsa:3,mulan:1} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🎵", layout:"1col", q:"Animals and music — the connection for you?",
    opts:[
      { icon:"🎶", label:"I sing and they literally gather around me always",   p:{snow:3,cinderella:3,ariel:2} },
      { icon:"🥁", label:"My energy and theirs are just completely matched",    p:{moana:2,raya:2} },
      { icon:"🎵", label:"We both feel rhythms and vibrations deeply",          p:{ariel:3,rapunzel:2,moana:2} },
      { icon:"🌿", label:"Silence is the real music and animals know it",      p:{belle:2,aurora:2} },
      { icon:"❄️", label:"Ice and cold sounds are my music and theirs too",   p:{elsa:3} },
      { icon:"🤷", label:"No connection really — I simply love both of them",  p:{tiana:1,jasmine:1,belle:1} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🎨", layout:"1col", q:"If animals could talk what would they say about you?",
    opts:[
      { icon:"💕", label:"She is the kindest human any of us have ever known",  p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"She is breathtaking and we respect her completely",  p:{elsa:3} },
      { icon:"🔥", label:"She is fierce — we would never ever cross her",       p:{raya:3,mulan:3,jasmine:2} },
      { icon:"😍", label:"She talks to us and actually understands us",         p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"🌿", label:"She understands us better than other humans do",     p:{moana:3,ariel:2} },
      { icon:"🎭", label:"She is the most interesting human we have ever met", p:{ariel:3,belle:2,rapunzel:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌸", layout:"1col", q:"What wild animal would you want as a best friend?",
    opts:[
      { icon:"❄️", label:"A snow wolf — loyal, wild and deeply bonded",        p:{elsa:3} },
      { icon:"🦊", label:"A fox — clever, mischievous and brilliantly witty",  p:{belle:2,tiana:2,rapunzel:2} },
      { icon:"🦋", label:"A rare magical butterfly — ethereal and beautiful",  p:{rapunzel:3,cinderella:2,aurora:2} },
      { icon:"🐘", label:"An elephant — wise and never forgets",               p:{moana:2,belle:2} },
      { icon:"🦁", label:"A lion — regal, impossibly brave and magnificent",   p:{jasmine:3,mulan:2,raya:2} },
      { icon:"🐦", label:"A songbird — music and absolute freedom",            p:{cinderella:3,ariel:3,snow:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌿", layout:"1col", q:"How do you feel about wild animals?",
    opts:[
      { icon:"😍", label:"They are magnificent and I want to be near all of them",p:{moana:3,ariel:3,snow:2} },
      { icon:"❄️", label:"Wild things belong free — I deeply respect that",    p:{elsa:3,raya:2,moana:2} },
      { icon:"🤔", label:"I love them but understand some from a distance",    p:{belle:2,tiana:1,mulan:1} },
      { icon:"🌿", label:"They are nature itself — part of everything sacred", p:{moana:3,raya:2} },
      { icon:"✨", label:"They seem drawn to me even when they should not be", p:{snow:3,cinderella:3,aurora:2} },
      { icon:"💕", label:"I just want every single one of them to be happy",  p:{snow:3,cinderella:3,rapunzel:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌙", layout:"1col", q:"What does your animal companion know about you that others don't?",
    opts:[
      { icon:"❄️", label:"How much I am carrying completely alone inside",      p:{elsa:3} },
      { icon:"💕", label:"How desperately I want to be truly loved",            p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌊", label:"How wild and free I actually am deep down",           p:{ariel:3,moana:3} },
      { icon:"🔥", label:"How fierce and determined I truly am inside",         p:{mulan:3,raya:3} },
      { icon:"😄", label:"How much pure joy lives in me waiting to come out",  p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🌿", label:"How deeply connected to the living world I am",      p:{moana:3,raya:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🎶", layout:"visual", q:"An animal would compose a song about you called...",
    opts:[
      { icon:"❄️", label:"She Was Cold Until She Was Not",             desc:"Ice thaw",          p:{elsa:3} },
      { icon:"💕", label:"The One Who Always Came Back For Us",        desc:"Loyal heart",       p:{cinderella:3,snow:3} },
      { icon:"🌊", label:"She Swam Where No One Had Gone Before",     desc:"Ocean brave",       p:{ariel:3,moana:3} },
      { icon:"😄", label:"She Made Every Day Feel Like Play",          desc:"Pure joy",          p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🔥", label:"She Fought And We Were Never Afraid Again",  desc:"Fierce protector",  p:{mulan:3,raya:3} },
      { icon:"🌿", label:"She Listened When The World Had Gone Quiet", desc:"Nature soul",       p:{moana:3,raya:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🦁", layout:"1col", q:"Your favorite thing about having an animal companion?",
    opts:[
      { icon:"❤️", label:"They love you completely without any conditions ever",  p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"They never judge any part of who you really are",      p:{elsa:3} },
      { icon:"🌊", label:"They connect you to something wild and truly alive",   p:{ariel:3,moana:3} },
      { icon:"😂", label:"They make absolutely everything funnier",              p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🛡️", label:"You are never completely alone when they are near",   p:{mulan:3,cinderella:2} },
      { icon:"🌿", label:"They remind you what really matters in the world",    p:{moana:3,raya:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌟", layout:"1col", q:"When you look at an animal you see...",
    opts:[
      { icon:"💕", label:"A soul worthy of complete love and real protection",   p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"A kind of freedom I am still learning to have",       p:{elsa:3} },
      { icon:"🌊", label:"The wild heart of something ancient and magnificent",  p:{ariel:3,moana:3} },
      { icon:"🔥", label:"A mirror of my own fierce untameable nature",         p:{jasmine:3,raya:2} },
      { icon:"🌿", label:"Part of the living world I belong to completely",     p:{moana:3,raya:2} },
      { icon:"✨", label:"Pure magic that needs no explanation whatsoever",      p:{rapunzel:3,snow:2,cinderella:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌸", layout:"1col", q:"When you see a stray animal you...",
    opts:[
      { icon:"🏠", label:"Immediately try to bring it somewhere warm and safe",  p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"❄️", label:"Make sure it is okay then let it go free again",      p:{elsa:3,moana:2} },
      { icon:"🍖", label:"Give it food and try to find where it belongs",       p:{tiana:2,belle:2,aurora:1} },
      { icon:"💕", label:"Sit with it and comfort it until help arrives",       p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌿", label:"Assess if it actually needs help or just space",      p:{moana:3,raya:2} },
      { icon:"📱", label:"Call a rescue organization right away for it",        p:{mulan:2,jasmine:1,tiana:1} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌿", layout:"1col", q:"If you could speak to one specific animal it would be...",
    opts:[
      { icon:"❄️", label:"A reindeer — loyal, warm and full of real heart",     p:{elsa:3} },
      { icon:"🐬", label:"A dolphin — brilliant, free and completely joyful",   p:{ariel:3,moana:2} },
      { icon:"🐉", label:"A dragon — we would understand each other perfectly",  p:{mulan:3,raya:2} },
      { icon:"🐭", label:"A mouse — small but brave and completely loyal",       p:{cinderella:3,snow:2} },
      { icon:"🦊", label:"A fox — clever, quick and magnificently smart",        p:{raya:2,belle:2,tiana:2} },
      { icon:"🦅", label:"An eagle — I want to know what freedom looks like",   p:{moana:3,raya:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🦁", layout:"1col", q:"The animal most people would NOT expect you to love?",
    opts:[
      { icon:"🐸", label:"A frog — unexpected but honestly magnificent",        p:{tiana:3} },
      { icon:"❄️", label:"An arctic wolf — wild, cold and completely free",    p:{elsa:3} },
      { icon:"🦈", label:"A shark — powerful, misunderstood and beautiful",     p:{ariel:3,raya:2} },
      { icon:"🐛", label:"A caterpillar — it is becoming something amazing",    p:{rapunzel:2,cinderella:2,aurora:2} },
      { icon:"🦎", label:"A lizard — smart, quirky and completely underrated",  p:{rapunzel:3} },
      { icon:"🦑", label:"A giant squid — deep, mysterious and underestimated", p:{ariel:2,belle:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🐾", layout:"1col", q:"How do you say goodbye to an animal companion?",
    opts:[
      { icon:"❄️", label:"I do not — they are mine and I am theirs always",     p:{elsa:3} },
      { icon:"💕", label:"With pure gratitude — they changed everything for me", p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌿", label:"I let them go free — that is the most loving thing",  p:{moana:3,raya:2} },
      { icon:"😢", label:"It is genuinely the hardest thing I have ever done",  p:{ariel:2,rapunzel:2} },
      { icon:"⭐", label:"I carry them always — they live in who I have become", p:{mulan:3,moana:2} },
      { icon:"🌊", label:"The ocean brought us together and holds us still",    p:{ariel:3,moana:3} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌟", layout:"1col", q:"What would your animal companion see in you first?",
    opts:[
      { icon:"💕", label:"Kindness — they would simply feel safe immediately",   p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"Power — they would sense something rare and real",    p:{elsa:3} },
      { icon:"🔥", label:"Passion — my energy matches their wild heart",        p:{ariel:3,jasmine:2,raya:2} },
      { icon:"🌿", label:"Respect — they would know I see and honor them",      p:{moana:3,raya:2} },
      { icon:"😄", label:"Joy — they would want to be near what I carry",      p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🛡️", label:"Safety — they would know I would fight for them",    p:{mulan:3,tiana:1} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌺", layout:"visual", q:"The animal world throws you a party. The theme is...",
    opts:[
      { icon:"❄️", label:"Arctic Celebration", desc:"Every cold creature dances",      p:{elsa:3} },
      { icon:"🌊", label:"Under the Sea",      desc:"Every sea creature attends",      p:{ariel:3,moana:2} },
      { icon:"🐾", label:"Forest Gathering",   desc:"Every woodland creature comes",   p:{belle:2,raya:2} },
      { icon:"🌸", label:"Song Garden",        desc:"Every bird sings just for you",   p:{cinderella:3,snow:3,ariel:2} },
      { icon:"🌺", label:"Jungle Party",       desc:"An explosion of tropical color",  p:{jasmine:3,rapunzel:2} },
      { icon:"🐉", label:"Dragon Sky",         desc:"Wild and completely free",         p:{mulan:3,raya:2} }
    ]
  },
  { cat:"🐾 Animals", emoji:"🌙", layout:"1col", q:"An animal could teach you most about...",
    opts:[
      { icon:"❄️", label:"Solitude — how to be alone and truly whole",          p:{elsa:3} },
      { icon:"🦅", label:"Freedom — needing nothing and flying anyway",          p:{jasmine:3,raya:2,ariel:2} },
      { icon:"🐢", label:"Patience — slow, steady and absolutely sure",          p:{moana:2,aurora:2} },
      { icon:"🐝", label:"Purpose — every single moment has real meaning",       p:{tiana:3,mulan:2,moana:2} },
      { icon:"🦁", label:"Courage — the lion does not ask permission",           p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🐬", label:"Joy — play is just as essential as work",              p:{rapunzel:3,ariel:3,snow:2} }
    ]
  }
];

Q_ANIMALS.push(
  { cat:"🐾 Animals", emoji:"🎭", layout:"1col", q:"In a fairy tale your animal companion would...",
    opts:[
      { icon:"🗣️", label:"Secretly talk and give me the most incredible advice",  p:{cinderella:3,snow:2,belle:2} },
      { icon:"🛡️", label:"Protect me from danger absolutely always",              p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🌊", label:"Lead me to exactly where I need to go",                  p:{moana:3,ariel:2} },
      { icon:"💕", label:"Be my dearest friend in the entire world",              p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"❄️", label:"Keep my secrets and never judge a single one",         p:{elsa:3,aurora:1} },
      { icon:"😄", label:"Be absolutely hilarious and lighten everything",        p:{rapunzel:2,snow:2,ariel:2} }
    ]
  }
);
