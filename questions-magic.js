/* ═══════════════════════════════════════════════
   QUESTIONS — Magic & Wonder (25)
   ═══════════════════════════════════════════════ */
const Q_MAGIC = [
  { cat:"✨ Magic", emoji:"🔮", layout:"visual", q:"If you had one magical power?",
    opts:[
      { icon:"❄️", label:"Ice and Snow",    desc:"Create breathtaking things",     p:{elsa:3} },
      { icon:"🌊", label:"Ocean Control",   desc:"The power of the deep sea",      p:{ariel:3,moana:3} },
      { icon:"🌿", label:"Animal Speech",   desc:"Talk to every creature",         p:{snow:3,cinderella:3} },
      { icon:"🎨", label:"Art Magic",       desc:"Paintings come to life",         p:{rapunzel:3} },
      { icon:"🌙", label:"Future Sight",    desc:"See what is coming clearly",     p:{moana:2,aurora:2} },
      { icon:"⚔️", label:"Warrior Power",   desc:"Supernatural speed and strength",p:{raya:3,mulan:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"⭐", layout:"1col", q:"What does magic mean to you?",
    opts:[
      { icon:"💕", label:"It is love — the most powerful force that exists",    p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌿", label:"It is nature — already everywhere around us",         p:{moana:3,raya:2} },
      { icon:"❄️", label:"It is power — beautiful, dangerous and mine",        p:{elsa:3} },
      { icon:"✨", label:"It is creativity — making something from nothing",    p:{rapunzel:3,ariel:2,belle:2} },
      { icon:"🔥", label:"It is will — the power to actually change things",   p:{mulan:3,tiana:2,raya:2} },
      { icon:"🎭", label:"It is art — the only real magic that ever existed",  p:{rapunzel:3,belle:2,tiana:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌙", layout:"1col", q:"You discover a magic door. You...",
    opts:[
      { icon:"😍", label:"Go through it immediately — no hesitation at all",   p:{ariel:3,rapunzel:3,raya:2} },
      { icon:"🔍", label:"Study it very carefully first — what could it be?",  p:{belle:3,tiana:1,mulan:1} },
      { icon:"🌿", label:"Sense whether it is safe or dangerous first",        p:{moana:3,aurora:1} },
      { icon:"😰", label:"Go but absolutely bring someone with me first",      p:{cinderella:2,snow:1,rapunzel:1} },
      { icon:"💪", label:"Go in completely armed and completely ready",         p:{mulan:3,raya:3,jasmine:2} },
      { icon:"❄️", label:"Stand before it and feel whether it is calling me",  p:{elsa:3,moana:2,aurora:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌟", layout:"visual", q:"A magical object appears. It is...",
    opts:[
      { icon:"❄️", label:"Ice Crown",        desc:"Generates real living ice",        p:{elsa:3} },
      { icon:"🔮", label:"Crystal Ball",     desc:"Shows exactly what is coming",     p:{moana:2,aurora:2} },
      { icon:"📖", label:"All-Knowledge Book",desc:"Contains absolutely everything",  p:{belle:3,tiana:2} },
      { icon:"🌊", label:"Living Sea Shell", desc:"Holds the voice of the ocean",     p:{ariel:3,moana:3} },
      { icon:"🎨", label:"Living Paintbrush",desc:"Paintings come completely to life",p:{rapunzel:3} },
      { icon:"⭐", label:"Destiny Lantern",  desc:"Shows you your exact destiny",     p:{cinderella:3,rapunzel:2,moana:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🦋", layout:"1col", q:"A fairy godmother appears. Your first wish?",
    opts:[
      { icon:"💕", label:"To be loved and to love completely freely",             p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🌊", label:"To explore every world that has ever existed",          p:{ariel:3,jasmine:2,rapunzel:2} },
      { icon:"❄️", label:"To never be afraid of my own power again",             p:{elsa:3} },
      { icon:"📚", label:"To know absolutely everything instantly",               p:{belle:3,tiana:1} },
      { icon:"🔓", label:"Complete freedom — no walls anywhere ever",             p:{jasmine:3,ariel:2,raya:2} },
      { icon:"🌿", label:"For the natural world to be completely healed",         p:{moana:3,raya:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌈", layout:"1col", q:"What magical ability fits you best?",
    opts:[
      { icon:"❄️", label:"Cryokinesis — creating and controlling ice",           p:{elsa:3} },
      { icon:"🌿", label:"Healing — mending what is broken and hurt",            p:{cinderella:2,snow:2,aurora:2} },
      { icon:"🗣️", label:"Animal speech — talking to every creature alive",      p:{snow:3,cinderella:3} },
      { icon:"🌊", label:"Water control — shaping seas and rivers",              p:{ariel:3,moana:3} },
      { icon:"🌬️", label:"Wind — flying and traveling completely instantly",     p:{moana:2,raya:2} },
      { icon:"🎨", label:"Creation — everything I imagine becomes real",         p:{rapunzel:3,ariel:2,belle:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌙", layout:"1col", q:"A witch offers you a transformation. You become...",
    opts:[
      { icon:"❄️", label:"Pure winter itself — snow, ice and cold",              p:{elsa:3} },
      { icon:"🧜", label:"A mermaid — this is what I was born to be",            p:{ariel:3,moana:2} },
      { icon:"🦅", label:"An eagle — soaring completely free always",            p:{raya:2,moana:2} },
      { icon:"🌿", label:"A great ancient tree — still and deeply wise",         p:{moana:2,belle:2,aurora:1} },
      { icon:"✨", label:"Pure light — energy, wonder and transformation",       p:{cinderella:3,rapunzel:2,aurora:2} },
      { icon:"❌", label:"Nothing — I am absolutely perfect exactly as I am",    p:{jasmine:3,raya:2,moana:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🎭", layout:"1col", q:"Your magic spell would create...",
    opts:[
      { icon:"❄️", label:"A world of eternal beautiful winter and wonder",       p:{elsa:3} },
      { icon:"🌊", label:"An endless beautiful ocean for all to explore",        p:{ariel:3,moana:3} },
      { icon:"📚", label:"A library of completely infinite knowledge",           p:{belle:3,rapunzel:1} },
      { icon:"💕", label:"A world where everyone is genuinely kind always",     p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌿", label:"Forests that can never ever be cut down",              p:{moana:3,raya:2} },
      { icon:"🎨", label:"Art and music in absolutely every corner forever",    p:{rapunzel:3,ariel:2,belle:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"⭐", layout:"visual", q:"You can enter one magical world. You choose...",
    opts:[
      { icon:"❄️", label:"Arendelle",      desc:"A kingdom of ice and real magic",   p:{elsa:3} },
      { icon:"🌊", label:"Under the Sea",  desc:"Every ocean creature is here",      p:{ariel:3,moana:2} },
      { icon:"🏰", label:"Enchanted Castle",desc:"Full of living magic",             p:{belle:3,cinderella:2,aurora:2} },
      { icon:"🌌", label:"Starlit Realm",  desc:"Made entirely of stars and light",  p:{rapunzel:3,cinderella:2,moana:2} },
      { icon:"🌺", label:"City of Magic",  desc:"Vibrant and magical city",          p:{jasmine:3,rapunzel:2,ariel:1} },
      { icon:"⚔️", label:"Warrior Realm",  desc:"Ancient power and warrior magic",   p:{raya:3,mulan:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"💫", layout:"1col", q:"You see something magical. You...",
    opts:[
      { icon:"😍", label:"Rush toward it with absolutely zero hesitation",       p:{ariel:3,rapunzel:3,raya:2} },
      { icon:"🤔", label:"Study it extremely carefully and thoughtfully first",  p:{belle:3,tiana:1,mulan:1} },
      { icon:"🙏", label:"Feel deep reverence — this is something sacred",       p:{moana:3,aurora:2} },
      { icon:"📷", label:"Wish desperately that I could paint or capture it",   p:{rapunzel:3,belle:2,ariel:1} },
      { icon:"💕", label:"Feel pure wonder and overwhelming gratitude",          p:{cinderella:3,snow:2,aurora:2} },
      { icon:"❄️", label:"Stand perfectly still and let it come to me",         p:{elsa:3,moana:2,aurora:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"🔮", layout:"1col", q:"What kind of magic calls to you most?",
    opts:[
      { icon:"❄️", label:"Winter, ice and snow magic — cold and beautiful",      p:{elsa:3} },
      { icon:"🌊", label:"Water and deep ocean magic — ancient and free",        p:{ariel:3,moana:3} },
      { icon:"⭐", label:"Star and sky magic — destiny written above",            p:{cinderella:3,rapunzel:3,moana:2} },
      { icon:"🔥", label:"Fire and transformation — changing everything",        p:{mulan:2,raya:2,jasmine:2} },
      { icon:"💕", label:"Love and healing magic — the most powerful kind",     p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🎨", label:"Creation magic — bringing imagination to life",        p:{rapunzel:3,ariel:2,belle:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌙", layout:"1col", q:"A spell goes wrong. It happened because...",
    opts:[
      { icon:"😍", label:"I got too excited and completely rushed in",           p:{ariel:3,rapunzel:3,snow:1} },
      { icon:"💕", label:"I did it out of love — that is always the riskiest",  p:{ariel:2,cinderella:2,aurora:1} },
      { icon:"😤", label:"I refused to follow someone else's rules",             p:{jasmine:2,ariel:2} },
      { icon:"❄️", label:"I was afraid and the fear took over the magic",       p:{elsa:3} },
      { icon:"🌿", label:"I did not listen to the ancient warning sign",         p:{moana:2,raya:2} },
      { icon:"💪", label:"I pushed further than I was actually ready for",       p:{rapunzel:2,raya:2,mulan:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌟", layout:"1col", q:"You meet an enchanted talking mirror. You ask...",
    opts:[
      { icon:"💕", label:"Who is truly the kindest in all of the land?",         p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌊", label:"What lies beyond the very farthest horizon?",          p:{ariel:3,moana:3,jasmine:2} },
      { icon:"❄️", label:"Will people ever truly understand and accept me?",    p:{elsa:3} },
      { icon:"🔮", label:"What is my actual true destiny in this world?",        p:{moana:3,aurora:2} },
      { icon:"💪", label:"Am I as powerful as I know I could truly be?",         p:{mulan:3,raya:2,jasmine:2} },
      { icon:"📖", label:"What is the most important knowledge I am missing?",   p:{belle:3,tiana:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🦋", layout:"1col", q:"You drink a magical potion. You hope it...",
    opts:[
      { icon:"❄️", label:"Perfects and fully unlocks my ice powers",             p:{elsa:3} },
      { icon:"🌊", label:"Lets me breathe underwater completely forever",         p:{ariel:3,moana:2} },
      { icon:"📚", label:"Gives me instant mastery of every language",           p:{belle:3,tiana:1,mulan:2} },
      { icon:"🌿", label:"Connects me to every living natural thing",            p:{moana:3,raya:2} },
      { icon:"⚔️", label:"Makes me completely unbeatable in every challenge",    p:{mulan:3,raya:3,jasmine:2} },
      { icon:"💕", label:"Makes me radiate kindness and love to everyone",       p:{cinderella:3,snow:3,aurora:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"⭐", layout:"visual", q:"What magical place would you build?",
    opts:[
      { icon:"❄️", label:"Ice Palace",      desc:"Mine completely alone",             p:{elsa:3} },
      { icon:"📚", label:"Infinite Library",desc:"Every book ever written",           p:{belle:3,rapunzel:2} },
      { icon:"🌊", label:"Ocean Sanctuary", desc:"For every sea creature",            p:{ariel:3,moana:3} },
      { icon:"🌿", label:"Timeless Garden", desc:"Where time moves beautifully slowly",p:{aurora:2,belle:2} },
      { icon:"⭐", label:"Star Tower",      desc:"Reaching all the way to the stars",  p:{rapunzel:3,moana:2} },
      { icon:"🍳", label:"Magic Restaurant",desc:"Every single meal is pure magic",   p:{tiana:3,snow:2,rapunzel:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌈", layout:"1col", q:"Which kind of spell would you cast first?",
    opts:[
      { icon:"❄️", label:"Freeze something into absolute perfect stillness",     p:{elsa:3} },
      { icon:"💕", label:"Make everyone in this room feel completely loved",     p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"Fill this entire space with living ocean water",       p:{ariel:3,moana:2} },
      { icon:"🎨", label:"Make the walls come alive with my own paintings",     p:{rapunzel:3,ariel:1} },
      { icon:"🌿", label:"Make flowers and trees grow from the very floor",     p:{moana:2,raya:2} },
      { icon:"⚔️", label:"Summon a magnificent weapon for real protection",     p:{raya:3,mulan:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"💎", layout:"visual", q:"Your magical weapon would be...",
    opts:[
      { icon:"❄️", label:"Ice Sword",    desc:"Conjured from pure cold air",      p:{elsa:3} },
      { icon:"🌀", label:"Ancient Staff", desc:"Of natural ancient power",         p:{moana:3,raya:2} },
      { icon:"🏹", label:"Enchanted Bow", desc:"That never misses its mark",       p:{raya:3,mulan:2} },
      { icon:"🌹", label:"Thorned Rose",  desc:"Protects only the worthy",         p:{belle:3,aurora:2} },
      { icon:"⭐", label:"Truth Lantern", desc:"Reveals truth and guides all",     p:{cinderella:2,rapunzel:2} },
      { icon:"🌊", label:"Sea Trident",   desc:"The power of the ocean itself",    p:{ariel:3,moana:3} }
    ]
  },
  { cat:"✨ Magic", emoji:"✨", layout:"1col", q:"If your magic went completely wrong you would...",
    opts:[
      { icon:"❄️", label:"Accidentally freeze everyone and everything around",   p:{elsa:3} },
      { icon:"🌊", label:"Flood the entire kingdom with actual seawater",        p:{ariel:3,moana:2} },
      { icon:"🎨", label:"Have every painting suddenly come to complete life",   p:{rapunzel:3} },
      { icon:"🌿", label:"Cause plants to grow wildly through every wall",       p:{moana:2,raya:2} },
      { icon:"✨", label:"Create beautiful chaos that actually turns out fine",  p:{cinderella:2,rapunzel:2,snow:2} },
      { icon:"💕", label:"Make everyone fall completely in love with everyone",  p:{snow:3,cinderella:2,aurora:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🔮", layout:"1col", q:"The most magical moment of your life was...",
    opts:[
      { icon:"❄️", label:"The first time I truly embraced my real power",        p:{elsa:3} },
      { icon:"🌊", label:"When I first saw the whole open ocean ahead of me",    p:{ariel:3,moana:3} },
      { icon:"✨", label:"When something I dreamed became completely real",       p:{cinderella:3,rapunzel:3,tiana:2} },
      { icon:"💕", label:"When I realized I was genuinely truly loved",          p:{cinderella:3,snow:2,aurora:2} },
      { icon:"⚔️", label:"When I discovered what I was truly capable of inside", p:{mulan:3,raya:3} },
      { icon:"📚", label:"When a book changed absolutely everything for me",     p:{belle:3,aurora:2,rapunzel:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌟", layout:"1col", q:"Magic is most dangerous when...",
    opts:[
      { icon:"❄️", label:"You cannot control what you have already unleashed",   p:{elsa:3} },
      { icon:"💕", label:"You use it to avoid facing what is really there",      p:{cinderella:2,aurora:2,snow:2} },
      { icon:"🔥", label:"You let fear drive what your power actually does",     p:{elsa:3,mulan:1,raya:1} },
      { icon:"🌊", label:"You ignore the warnings of those who came before",     p:{moana:3,ariel:2} },
      { icon:"😍", label:"You are so excited you stop thinking carefully",       p:{ariel:3,rapunzel:3,snow:1} },
      { icon:"💎", label:"You use it to take instead of to truly give",         p:{jasmine:1,mulan:1,tiana:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"💫", layout:"visual", q:"Your magic would look like...",
    opts:[
      { icon:"❄️", label:"Ice Magic",     desc:"Swirling snowflakes everywhere",     p:{elsa:3} },
      { icon:"🌊", label:"Ocean Magic",   desc:"Rushing water and glowing creatures",p:{ariel:3,moana:3} },
      { icon:"🌟", label:"Dream Magic",   desc:"Golden sparkles raining down",       p:{cinderella:3,rapunzel:2} },
      { icon:"🎨", label:"Art Magic",     desc:"Colors exploding from a paintbrush", p:{rapunzel:3,belle:1} },
      { icon:"🌿", label:"Nature Magic",  desc:"Vines and flowers blooming instantly",p:{moana:2,raya:2} },
      { icon:"🔥", label:"Warrior Magic", desc:"A blazing trail of fierce light",    p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌟", layout:"1col", q:"If you could enchant one ordinary object it would be...",
    opts:[
      { icon:"❄️", label:"A mirror — so it shows what is truly beautiful inside",p:{elsa:3,snow:1} },
      { icon:"📚", label:"A book — so every story truly comes alive around you", p:{belle:3,rapunzel:2} },
      { icon:"🌹", label:"A rose — so it tells the story of true love",           p:{belle:3,aurora:2,cinderella:2} },
      { icon:"🍳", label:"A cooking pot — so whatever I make feeds any soul",    p:{tiana:3,snow:2} },
      { icon:"🌊", label:"A seashell — so it sings every song the ocean knows",  p:{ariel:3,moana:3} },
      { icon:"🕯️", label:"A candle — so it never goes out through any storm",   p:{cinderella:2,aurora:2,rapunzel:2} }
    ]
  },
  { cat:"✨ Magic", emoji:"🔮", layout:"1col", q:"Your magic at its most powerful would...",
    opts:[
      { icon:"❄️", label:"Transform the whole landscape into something stunning", p:{elsa:3} },
      { icon:"💕", label:"Make people truly feel love and be completely changed",  p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"Move oceans and call creatures from the deep",           p:{ariel:3,moana:3} },
      { icon:"🎨", label:"Create entire new worlds from pure imagination",         p:{rapunzel:3,belle:2} },
      { icon:"⚔️", label:"Make me unstoppable in any fight that truly matters",   p:{mulan:3,raya:3} },
      { icon:"🌿", label:"Restore and heal what has been broken and lost",         p:{moana:3,ariel:1} }
    ]
  },
  { cat:"✨ Magic", emoji:"💫", layout:"visual", q:"What would your magical transformation look like?",
    opts:[
      { icon:"❄️", label:"Ice Magic",     desc:"Snowflakes spiraling from my hands",  p:{elsa:3} },
      { icon:"🌊", label:"Ocean Magic",   desc:"Water rising and parting around me",  p:{ariel:3,moana:3} },
      { icon:"✨", label:"Dream Magic",   desc:"Golden sparkles from everywhere",     p:{cinderella:3,rapunzel:2} },
      { icon:"🎨", label:"Art Magic",     desc:"Colors exploding from my touch",      p:{rapunzel:3,ariel:1} },
      { icon:"🌿", label:"Earth Magic",   desc:"Flowers blooming from the ground",   p:{moana:2,raya:2} },
      { icon:"🔥", label:"Warrior Magic", desc:"Blazing unstoppable light",           p:{mulan:3,raya:3} }
    ]
  },
  { cat:"✨ Magic", emoji:"🌙", layout:"1col", q:"The most magical thing that ever happened to you?",
    opts:[
      { icon:"❄️", label:"The moment I finally embraced my true power fully",     p:{elsa:3} },
      { icon:"🌊", label:"When I first truly saw the whole open ocean ahead",      p:{ariel:3,moana:3} },
      { icon:"✨", label:"When something I dreamed actually became completely real",p:{cinderella:3,rapunzel:3,tiana:2} },
      { icon:"💕", label:"When I realized I was genuinely loved exactly as I am",  p:{cinderella:3,snow:2,aurora:2} },
      { icon:"⚔️", label:"When I discovered what I was truly capable of inside",  p:{mulan:3,raya:3} },
      { icon:"📚", label:"When a book opened my eyes to absolutely everything",   p:{belle:3,aurora:2,rapunzel:1} }
    ]
  }
];
