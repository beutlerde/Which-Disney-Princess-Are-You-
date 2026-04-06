/* ═══════════════════════════════════════════════
   QUESTIONS — Dream Kingdom (25)
   ═══════════════════════════════════════════════ */
const Q_KINGDOM = [
  { cat:"🏰 Kingdom", emoji:"🏰", layout:"visual", q:"Your dream home is...",
    opts:[
      { icon:"🏰", label:"Fairytale Castle",  desc:"Towers and grand ballrooms",    p:{cinderella:3,aurora:2,belle:1} },
      { icon:"❄️", label:"Ice Palace",        desc:"I built it all myself",         p:{elsa:3} },
      { icon:"🌊", label:"Underwater Palace", desc:"Coral halls and sea life",      p:{ariel:3} },
      { icon:"🌺", label:"Desert Palace",     desc:"Hanging gardens and fountains", p:{jasmine:3} },
      { icon:"🌿", label:"Natural Home",      desc:"Built into the landscape",      p:{moana:3,raya:2} },
      { icon:"📚", label:"Castle Library",    desc:"One entire wing for books",     p:{belle:3,rapunzel:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌅", layout:"2col", q:"The landscape that calls to your soul is...",
    opts:[
      { icon:"🌊", label:"The Ocean",          desc:"Open, endless and wild",        p:{ariel:3,moana:3} },
      { icon:"❄️", label:"Frozen Mountains",   desc:"Cold, stark and breathtaking",  p:{elsa:3,mulan:2} },
      { icon:"🌲", label:"Ancient Forests",    desc:"Mystical and deeply alive",     p:{raya:2,belle:2} },
      { icon:"🌺", label:"Tropical Islands",   desc:"Warm, lush and magical",        p:{moana:3,jasmine:1} },
      { icon:"🏙️", label:"Vibrant City",       desc:"Energy, possibility, life",     p:{tiana:3,jasmine:2,rapunzel:2} },
      { icon:"🌾", label:"Rolling Countryside",desc:"Peaceful and beautiful",        p:{cinderella:3,aurora:2,snow:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🕯️", layout:"1col", q:"Your ideal home vibe is...",
    opts:[
      { icon:"✨", label:"Grand and sparkling with massive chandeliers",      p:{cinderella:3,jasmine:2,aurora:1} },
      { icon:"❄️", label:"Cool, clean and perfectly minimal",                p:{elsa:3,mulan:1} },
      { icon:"📚", label:"Cozy and overflowing completely with books",       p:{belle:3,rapunzel:1} },
      { icon:"🌿", label:"Natural and earthy — plants absolutely everywhere",p:{moana:3,raya:2} },
      { icon:"🎨", label:"Colorful and creative — art on every surface",     p:{rapunzel:3,ariel:1} },
      { icon:"🍳", label:"Warm kitchen energy — something always cooking",   p:{tiana:3,snow:2,cinderella:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌍", layout:"1col", q:"If you ruled a kingdom you would focus on...",
    opts:[
      { icon:"🕊️", label:"Building lasting peace between all kingdoms",        p:{moana:2,cinderella:1,elsa:2} },
      { icon:"📚", label:"Education and knowledge free for absolutely everyone",p:{belle:3,tiana:2,mulan:1} },
      { icon:"🎉", label:"Joy, art and celebration throughout the land",        p:{rapunzel:3,snow:2,ariel:1} },
      { icon:"🌿", label:"Protecting nature and every wild living thing",       p:{moana:3,raya:2} },
      { icon:"⚔️", label:"A strong defended kingdom that nobody dares cross",  p:{mulan:3,jasmine:2,raya:2} },
      { icon:"❄️", label:"Using my power to keep every person safe",           p:{elsa:3,mulan:2,moana:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌿", layout:"visual", q:"Your royal garden has...",
    opts:[
      { icon:"🌹", label:"Roses",          desc:"Classic and deeply romantic",   p:{aurora:3,belle:3,cinderella:2} },
      { icon:"❄️", label:"Ice Sculptures", desc:"They never melt and always glitter",p:{elsa:3} },
      { icon:"🌺", label:"Exotic Flowers", desc:"From across every world",       p:{jasmine:3,ariel:1,moana:2} },
      { icon:"🌿", label:"Wild and Untamed",desc:"Nature decides everything",    p:{moana:3,raya:2} },
      { icon:"🍎", label:"Fruit and Herbs",desc:"Practical and bountiful",       p:{snow:3,tiana:2,rapunzel:2} },
      { icon:"🌻", label:"Sunflowers",     desc:"Cheerful wildflowers everywhere",p:{rapunzel:3,snow:2,ariel:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🏰", layout:"1col", q:"Your throne room would be...",
    opts:[
      { icon:"💎", label:"Grand with marble floors and crystal chandeliers",   p:{cinderella:3,jasmine:2,snow:2} },
      { icon:"❄️", label:"Entirely made of ice — breathtaking and mine alone",p:{elsa:3} },
      { icon:"🌿", label:"Open to nature with living walls and sky above",    p:{moana:3,raya:2} },
      { icon:"📚", label:"Lined completely with bookshelves and ancient maps", p:{belle:3,mulan:2,tiana:1} },
      { icon:"🌊", label:"Looking directly out over the endless ocean",        p:{ariel:3,moana:2} },
      { icon:"🎨", label:"Painted floor to ceiling with incredible murals",   p:{rapunzel:3,ariel:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🎡", layout:"1col", q:"Your ideal royal celebration?",
    opts:[
      { icon:"💃", label:"A grand ball with dancing until the sun rises",      p:{cinderella:3,jasmine:2,aurora:2} },
      { icon:"❄️", label:"A breathtaking ice show in a frozen courtyard",     p:{elsa:3} },
      { icon:"🎆", label:"A huge festival with every single person invited",  p:{rapunzel:3,snow:2,moana:2} },
      { icon:"🌿", label:"A bonfire feast under a sky full of stars",         p:{moana:3,raya:2} },
      { icon:"🍽️", label:"An incredible banquet featuring food I cooked myself",p:{tiana:3,snow:1} },
      { icon:"🌊", label:"A celebration on the water at golden hour",         p:{ariel:3,moana:3} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌙", layout:"1col", q:"Your castle would be located...",
    opts:[
      { icon:"❄️", label:"On a mountain where snow falls all year round",    p:{elsa:3,mulan:2} },
      { icon:"🌊", label:"Right on the shore where sea meets land",           p:{ariel:3,moana:3} },
      { icon:"🌿", label:"Deep inside an ancient enchanted forest",           p:{belle:2,raya:2} },
      { icon:"🌆", label:"In the heart of the most vibrant bustling kingdom", p:{jasmine:3,tiana:2,rapunzel:2} },
      { icon:"🌸", label:"In rolling meadows filled with flowers",            p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🌟", label:"Somewhere so high it touches the clouds",           p:{rapunzel:2,ariel:2,elsa:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"⭐", layout:"1col", q:"Your kingdom's magic comes from...",
    opts:[
      { icon:"❄️", label:"The ice and snow and cold eternal mountains",      p:{elsa:3} },
      { icon:"⭐", label:"The stars that have guided sailors for centuries",  p:{cinderella:3,moana:2} },
      { icon:"🌊", label:"The ancient power of the deep ocean",              p:{ariel:3,moana:3} },
      { icon:"🌿", label:"The living forest and every creature within it",   p:{raya:2,belle:1} },
      { icon:"💕", label:"Pure love and hope and unwavering kindness",       p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🔥", label:"The strength and will of its determined people",   p:{mulan:3,tiana:2,moana:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌟", layout:"1col", q:"The first thing you would build in your kingdom?",
    opts:[
      { icon:"📚", label:"The greatest library in the history of the world", p:{belle:3,tiana:2,mulan:1} },
      { icon:"❄️", label:"An ice skating rink open to absolutely everyone",  p:{elsa:3} },
      { icon:"🏥", label:"A free hospital for every person who needs it",    p:{snow:2,cinderella:2,tiana:2} },
      { icon:"🎨", label:"An art and music hall celebrating every soul",     p:{rapunzel:3,ariel:2,snow:2} },
      { icon:"🌿", label:"A nature reserve — no building, just protecting",  p:{moana:3,raya:2} },
      { icon:"🍳", label:"The finest restaurant anyone has ever experienced",p:{tiana:3,snow:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🎶", layout:"1col", q:"The music of your kingdom is...",
    opts:[
      { icon:"🎻", label:"Grand sweeping orchestral — romantic and emotional",   p:{cinderella:3,belle:2,aurora:2} },
      { icon:"❄️", label:"Crystalline and haunting — beautiful and alone",      p:{elsa:3} },
      { icon:"🥁", label:"Drums and chanting — powerful, ancient and alive",    p:{moana:3,raya:2,mulan:2} },
      { icon:"🎵", label:"Folk songs sung around fires at golden hour",         p:{snow:2,rapunzel:2} },
      { icon:"🪗", label:"Lively jazz and blues that fill every street corner", p:{tiana:3,ariel:1} },
      { icon:"🌊", label:"Flowing haunting melodies from the deep sea",         p:{ariel:3,moana:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌸", layout:"1col", q:"Your kingdom is known throughout all the land for...",
    opts:[
      { icon:"❄️", label:"Breathtaking magic that exists nowhere else on earth",  p:{elsa:3} },
      { icon:"💕", label:"Extraordinary kindness to every single visitor",        p:{cinderella:3,snow:3,aurora:2} },
      { icon:"⚔️", label:"Warriors so fierce no army has ever defeated them",   p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🎨", label:"World-class art and music and beauty everywhere",      p:{rapunzel:3,ariel:2,tiana:2} },
      { icon:"🌊", label:"The greatest navigators and explorers ever known",     p:{moana:3,ariel:2} },
      { icon:"📚", label:"Wisdom and innovation that changed everything",        p:{belle:3,tiana:2,mulan:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌙", layout:"visual", q:"Your kingdom night looks like...",
    opts:[
      { icon:"❄️", label:"Aurora Borealis",   desc:"Painting the entire sky above",  p:{elsa:3} },
      { icon:"✨", label:"Starlit Magic",      desc:"Stars close enough to touch",    p:{rapunzel:3,cinderella:2,moana:2} },
      { icon:"🌊", label:"Moonlit Seas",      desc:"The whole ocean glows at night", p:{ariel:3,moana:3} },
      { icon:"🔥", label:"Bonfire Night",     desc:"Songs, stories and celebration", p:{moana:3,raya:2} },
      { icon:"🕯️", label:"Candlelit Windows", desc:"Glowing warm and golden",        p:{cinderella:3,belle:2,tiana:2} },
      { icon:"🌿", label:"Silent Dark",       desc:"Only the natural sounds remain", p:{elsa:1,raya:2,belle:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🔮", layout:"visual", q:"Your palace's most magical room?",
    opts:[
      { icon:"❄️", label:"Ice Gallery",      desc:"Every memory frozen perfectly",  p:{elsa:3} },
      { icon:"🔮", label:"Magic Mirror",     desc:"Truth is always revealed here",  p:{snow:3,aurora:2,cinderella:2} },
      { icon:"📚", label:"Enchanted Library",desc:"Infinite knowledge awaits",      p:{belle:3,rapunzel:2} },
      { icon:"🌊", label:"Sea Grotto",       desc:"Glowing and alive underground",  p:{ariel:3,moana:2} },
      { icon:"🎨", label:"Painted Tower",    desc:"Every dream made real here",     p:{rapunzel:3,ariel:1} },
      { icon:"🍳", label:"Grand Kitchen",    desc:"Magic made edible daily",        p:{tiana:3,snow:2,rapunzel:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌟", layout:"2col", q:"Your kingdom in one word is...",
    opts:[
      { icon:"✨", label:"Enchanted", desc:"Magic lives here",      p:{cinderella:3,aurora:3,rapunzel:2} },
      { icon:"❄️", label:"Frozen",   desc:"Breathtaking and still",p:{elsa:3} },
      { icon:"🌊", label:"Boundless",desc:"Free and endless",       p:{ariel:3,moana:3} },
      { icon:"🔥", label:"Fierce",   desc:"Brave and undefeated",  p:{mulan:3,jasmine:3,raya:2} },
      { icon:"💕", label:"Warm",     desc:"Kind and full of love",  p:{snow:3,cinderella:3,tiana:2} },
      { icon:"📚", label:"Wise",     desc:"Knowledge and wonder",   p:{belle:3,tiana:2,mulan:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🎨", layout:"1col", q:"The art style of your kingdom is...",
    opts:[
      { icon:"❄️", label:"Crystal ice sculptures that catch the light perfectly",  p:{elsa:3} },
      { icon:"🌺", label:"Vibrant mosaics and bold beautiful patterns",            p:{jasmine:3,moana:2,rapunzel:2} },
      { icon:"🌿", label:"Nature carvings and living animal motifs",               p:{raya:2,moana:2} },
      { icon:"✨", label:"Delicate gold illumination on every wall",               p:{cinderella:3,aurora:3,belle:2} },
      { icon:"🎭", label:"Storytelling murals covering every single surface",     p:{rapunzel:3,ariel:2,moana:2} },
      { icon:"🖋️", label:"Fine calligraphy and precise elegant ink painting",     p:{mulan:3,belle:2,jasmine:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌅", layout:"1col", q:"Your perfect solo escape spot in the kingdom?",
    opts:[
      { icon:"❄️", label:"A perfectly still frozen lake in absolute silence",  p:{elsa:3} },
      { icon:"🌊", label:"The seashore completely alone at sunrise",            p:{ariel:3,moana:3} },
      { icon:"🌿", label:"A hidden forest clearing only I know about",          p:{belle:2,raya:2} },
      { icon:"🗼", label:"The highest tower looking out over everything",        p:{rapunzel:3,jasmine:2,moana:1} },
      { icon:"📚", label:"A secret corner of the library with tea",             p:{belle:3,aurora:2} },
      { icon:"🍳", label:"The kitchen — cooking in peace calms everything",     p:{tiana:3,snow:2,rapunzel:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌙", layout:"1col", q:"Your kingdom bedtime ritual?",
    opts:[
      { icon:"❄️", label:"I watch snow fall in perfect silence and peace",     p:{elsa:3} },
      { icon:"⭐", label:"Stargazing until the whole sky becomes familiar",    p:{moana:3,rapunzel:3} },
      { icon:"📖", label:"Reading until the words blur and sleep takes me",   p:{belle:3,aurora:2,rapunzel:2} },
      { icon:"🎵", label:"Singing softly to myself until I drift away",        p:{cinderella:3,ariel:3,snow:2} },
      { icon:"🕯️", label:"Candles and quiet reflection on the whole day",     p:{aurora:3,belle:2,mulan:1} },
      { icon:"🌊", label:"Listening to the sound of the ocean always",         p:{ariel:3,moana:3} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌿", layout:"1col", q:"What your kingdom protects above all else?",
    opts:[
      { icon:"❄️", label:"The fragile and beautiful magic that lives here",        p:{elsa:3} },
      { icon:"🌿", label:"The sacred forests and all wild living places",          p:{moana:3,raya:2} },
      { icon:"💕", label:"Every single one of its people without exception",       p:{mulan:3,cinderella:2,snow:2} },
      { icon:"📜", label:"Ancient stories and wisdom passed through generations",  p:{mulan:3,moana:3} },
      { icon:"🔓", label:"The freedom of every living creature here",             p:{jasmine:3,ariel:2} },
      { icon:"💎", label:"The honor and legacy of those who came before",         p:{mulan:3,jasmine:2,aurora:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🏰", layout:"visual", q:"Your royal throne is made of...",
    opts:[
      { icon:"❄️", label:"Pure Ice",       desc:"Conjured cold and glowing",     p:{elsa:3} },
      { icon:"💎", label:"Crystal",        desc:"Luminous and timeless",         p:{cinderella:3,aurora:3} },
      { icon:"🌿", label:"Living Tree",    desc:"Roots deep, branches reaching", p:{moana:3,raya:2} },
      { icon:"🌊", label:"Ocean Coral",    desc:"Shaped by waves over centuries",p:{ariel:3,moana:2} },
      { icon:"📚", label:"By Bookshelves",desc:"Twelve towering shelves around me",p:{belle:3,rapunzel:1} },
      { icon:"⭐", label:"Ancient Stone",  desc:"Carved with every star in the sky",p:{mulan:3,jasmine:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🎪", layout:"1col", q:"Kingdom entertainment of choice?",
    opts:[
      { icon:"🎭", label:"A theater troupe performing the great epics",         p:{belle:3,aurora:2,rapunzel:2} },
      { icon:"❄️", label:"An ice show that leaves everyone speechless",         p:{elsa:3} },
      { icon:"🏹", label:"Archery and combat tournaments — I often compete",    p:{raya:3,mulan:3,jasmine:1} },
      { icon:"💃", label:"Music and dance festivals that last three days",      p:{ariel:3,snow:3,cinderella:2} },
      { icon:"🍳", label:"Cooking competitions — may the best chef win",        p:{tiana:3,snow:2,rapunzel:1} },
      { icon:"📚", label:"Storytelling evenings by firelight — the best ones", p:{belle:3,aurora:2,moana:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌸", layout:"1col", q:"Your kingdom legend is about...",
    opts:[
      { icon:"❄️", label:"A queen who learned to love her own power",           p:{elsa:3} },
      { icon:"💕", label:"A princess who found love through pure kindness",     p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"A voyager who restored the heart of the world",       p:{moana:3,ariel:2} },
      { icon:"⚔️", label:"A warrior who saved everything fighting alone",      p:{mulan:3,raya:3,jasmine:1} },
      { icon:"📚", label:"A scholar who outsmarted the most ancient evil",     p:{belle:3,tiana:2,mulan:1} },
      { icon:"🎨", label:"An artist whose creations came gloriously to life",  p:{rapunzel:3,ariel:1} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"💕", layout:"1col", q:"Your kingdom's greatest law?",
    opts:[
      { icon:"💕", label:"Treat every living being with genuine kindness",     p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"No person shall be feared for being different",      p:{elsa:3} },
      { icon:"🔓", label:"No one shall ever be imprisoned unjustly here",      p:{jasmine:3,mulan:2,raya:2} },
      { icon:"📚", label:"Education and knowledge must be free for all",       p:{belle:3,tiana:2,mulan:2} },
      { icon:"⚖️", label:"Justice above absolutely everything else always",    p:{mulan:3,jasmine:2,raya:2} },
      { icon:"🌿", label:"The natural world must be protected and respected",  p:{moana:3,raya:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌙", layout:"visual", q:"Your mode of royal transport?",
    opts:[
      { icon:"❄️", label:"Reindeer Sleigh",  desc:"Across fresh white snow",        p:{elsa:3} },
      { icon:"🐴", label:"White Horse",      desc:"Noble and beautiful",            p:{cinderella:3,aurora:2} },
      { icon:"🌊", label:"Sailing Ship",     desc:"Wide open ocean voyage",         p:{moana:3,ariel:2} },
      { icon:"✨", label:"Magic Carpet",     desc:"Over the glittering city",       p:{jasmine:3,rapunzel:1} },
      { icon:"🐉", label:"A Dragon",         desc:"Absolutely nothing else compares",p:{mulan:3,raya:1} },
      { icon:"🦅", label:"On the Wind",      desc:"Completely free like a bird",    p:{raya:2,moana:2} }
    ]
  },
  { cat:"🏰 Kingdom", emoji:"🌿", layout:"1col", q:"Your kingdom weather is always...",
    opts:[
      { icon:"❄️", label:"Eternal winter — crisp, cold and breathtakingly beautiful",p:{elsa:3} },
      { icon:"☀️", label:"Sunny and warm — perfect every single day",                p:{ariel:2,moana:2,jasmine:2} },
      { icon:"🌸", label:"Soft spring with gentle breezes always",                   p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌨️", label:"Dramatic — storms and sunshine both constantly",            p:{moana:2,ariel:1} },
      { icon:"🌊", label:"Seaside — salty air and ocean light forever",              p:{ariel:3,moana:3} },
      { icon:"🎊", label:"Crisp and magical with four beautiful seasons",            p:{snow:3,aurora:2,cinderella:2} }
    ]
  }
];
