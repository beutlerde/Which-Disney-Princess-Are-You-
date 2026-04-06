/* ═══════════════════════════════════════════════
   QUESTIONS — Style & Fashion (25)
   ═══════════════════════════════════════════════ */
const Q_STYLE = [
  { cat:"👗 Style", emoji:"👗", layout:"visual", q:"Your dream wardrobe could be described as...",
    opts:[
      { icon:"🩵", label:"Ice and Silver",    desc:"Elegant and ethereal",     p:{elsa:3,cinderella:2,aurora:1} },
      { icon:"💜", label:"Jewel Tones",       desc:"Bold and regal",           p:{jasmine:3,rapunzel:1,aurora:1} },
      { icon:"💛", label:"Golden Yellow",     desc:"Sunny and warm",           p:{belle:3,snow:1,rapunzel:1} },
      { icon:"🌊", label:"Ocean Inspired",    desc:"Free and flowing",         p:{ariel:3,moana:2} },
      { icon:"🌿", label:"Earthy Warrior",    desc:"Strong and real",          p:{raya:3,moana:2} },
      { icon:"🌸", label:"Soft Romance",      desc:"Gentle and lovely",        p:{aurora:3,cinderella:2} }
    ]
  },
  { cat:"👗 Style", emoji:"👑", layout:"flip", q:"Pick your perfect tiara!",
    opts:[
      { icon:"💎", label:"Diamond and Silver",  desc:"Classic timeless perfection",  p:{cinderella:3,aurora:2,snow:1} },
      { icon:"❄️", label:"Ice Crystal",         desc:"Sharp, delicate and magical",  p:{elsa:3,aurora:1} },
      { icon:"🌹", label:"Rose Gold Floral",    desc:"Romantic and alive",           p:{aurora:3,belle:2,rapunzel:2} },
      { icon:"🌊", label:"Shells and Sea Glass",desc:"Treasure from the deep",       p:{ariel:3,moana:3} },
      { icon:"🔮", label:"Sapphire and Gold",   desc:"Powerful and mysterious",      p:{jasmine:3,mulan:1} },
      { icon:"⭐", label:"No Tiara Needed",     desc:"My spirit is crown enough",    p:{mulan:3,tiana:2,raya:2} }
    ]
  },
  { cat:"👗 Style", emoji:"✂️", layout:"visual", q:"Your dream hairstyle?",
    opts:[
      { icon:"💛", label:"Incredibly Long Waves", desc:"Free and golden",           p:{rapunzel:3,aurora:1,cinderella:1} },
      { icon:"❄️", label:"Perfect Ice Braid",     desc:"Elsa's signature",          p:{elsa:3,mulan:1} },
      { icon:"🌊", label:"Flowing Auburn Waves",  desc:"Wild and oceanic",           p:{ariel:3,belle:1} },
      { icon:"⬆️", label:"Elegant Updo",          desc:"Polished and poised",        p:{cinderella:3,aurora:2,jasmine:1} },
      { icon:"🌑", label:"Sleek Black Braid",     desc:"Strong and elegant",         p:{mulan:3,raya:2} },
      { icon:"🌸", label:"Hair with Flowers",     desc:"Natural beauty",             p:{snow:2,jasmine:2,moana:2} }
    ]
  },
  { cat:"👗 Style", emoji:"👠", layout:"flip", q:"Your go-to shoes?",
    opts:[
      { icon:"🩰", label:"Glass Slippers",  desc:"Magical and unforgettable",   p:{cinderella:3,aurora:2} },
      { icon:"❄️", label:"Ice Heels",       desc:"Conjured just for me",        p:{elsa:3} },
      { icon:"👣", label:"Barefoot",        desc:"I feel the earth below me",   p:{moana:3,raya:2} },
      { icon:"🥾", label:"Sturdy Boots",    desc:"Made for real adventure",     p:{raya:3,mulan:2,rapunzel:2} },
      { icon:"✨", label:"Jeweled Sandals", desc:"Glittering and gorgeous",     p:{jasmine:3,ariel:1} },
      { icon:"👟", label:"Practical Shoes", desc:"I have got things to do",     p:{tiana:2,mulan:1,moana:1} }
    ]
  },
  { cat:"👗 Style", emoji:"🎨", layout:"swatch", q:"Your personal color palette is...",
    opts:[
      { icon:"#bfdbfe|#93c5fd|#e0f2fe", label:"Ice Blue and Silver",   desc:"Cool, elegant, magical",  p:{elsa:3,cinderella:2,aurora:1} },
      { icon:"#fecdd3|#fbcfe8|#f9a8d4", label:"Rose Gold and Blush",   desc:"Soft, romantic, dreamy",  p:{aurora:3,cinderella:2,snow:2} },
      { icon:"#fde68a|#fef08a|#fef9c3", label:"Gold and Sunshine",     desc:"Warm, bright, joyful",    p:{belle:3,rapunzel:2,snow:1} },
      { icon:"#67e8f9|#22d3ee|#0891b2", label:"Ocean Teal and Blue",   desc:"Wild, free, boundless",   p:{ariel:3,moana:3} },
      { icon:"#d8b4fe|#a855f7|#7c3aed", label:"Royal Purple",          desc:"Bold, mysterious, powerful",p:{jasmine:3,rapunzel:2,elsa:1} },
      { icon:"#86efac|#4ade80|#f59e0b", label:"Forest Green and Gold", desc:"Earthy, fierce, natural",  p:{raya:3,moana:2,tiana:1} }
    ]
  },
  { cat:"👗 Style", emoji:"💄", layout:"1col", q:"Your makeup on a regular day?",
    opts:[
      { icon:"🌸", label:"Barely there — I love my completely natural face",    p:{moana:3,raya:2,snow:1} },
      { icon:"💋", label:"A perfect bold lip and otherwise clean skin",         p:{snow:3,tiana:2,jasmine:1} },
      { icon:"✨", label:"Sparkling eyes and a dewy magical glow",              p:{rapunzel:3,ariel:2,elsa:2} },
      { icon:"❄️", label:"Flawless pale skin and frosty shimmery eyes",        p:{elsa:3,aurora:2} },
      { icon:"💜", label:"Dramatic liner winged out and completely fierce",     p:{jasmine:3,raya:1,ariel:2} },
      { icon:"😄", label:"Whatever feels fun and expressive that day",          p:{rapunzel:2,snow:2,ariel:2} }
    ]
  },
  { cat:"👗 Style", emoji:"✨", layout:"1col", q:"If you could wear any fabric it would be...",
    opts:[
      { icon:"❄️", label:"Enchanted ice that flows and shimmers and glows",     p:{elsa:3} },
      { icon:"🌊", label:"Flowing silk that moves exactly like water",          p:{cinderella:3,aurora:3,jasmine:2} },
      { icon:"🌿", label:"Natural linen and cotton — breathable and real",      p:{moana:3,raya:2} },
      { icon:"💎", label:"Rich deep velvet — luxurious and powerful",           p:{jasmine:3,belle:2,aurora:1} },
      { icon:"🌸", label:"Soft chiffon and tulle like a cloud",                p:{aurora:3,cinderella:2,belle:1} },
      { icon:"✨", label:"Something magical that shifts and shimmers always",   p:{ariel:2,rapunzel:3,elsa:2} }
    ]
  },
  { cat:"👗 Style", emoji:"💍", layout:"flip", q:"Your signature jewelry?",
    opts:[
      { icon:"📿", label:"Pearl Necklace",    desc:"Timeless and graceful",        p:{cinderella:3,aurora:2} },
      { icon:"❄️", label:"Ice Snowflake",     desc:"Sparkles with real cold",      p:{elsa:3} },
      { icon:"🌀", label:"Magical Pendant",   desc:"Ancient heirloom and glowing", p:{moana:3,ariel:2,rapunzel:1} },
      { icon:"🌸", label:"Flower Crown",      desc:"Nature is the only jewel",     p:{rapunzel:3,snow:2} },
      { icon:"⚔️", label:"Nothing",           desc:"I need to move freely always", p:{mulan:3,raya:3} },
      { icon:"🌊", label:"Shell Bracelet",    desc:"The sea always in my skin",    p:{ariel:3,moana:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌙", layout:"swatch", q:"Your bedroom color scheme?",
    opts:[
      { icon:"#1e3a8a|#1d4ed8|#93c5fd", label:"Midnight Blue and Stars", desc:"Magical and dreamy",   p:{elsa:2,aurora:2,cinderella:2} },
      { icon:"#fce7f3|#fbcfe8|#f9a8d4", label:"Blush Pink and Rose",     desc:"Soft and romantic",    p:{aurora:3,snow:2,rapunzel:2} },
      { icon:"#d1fae5|#a7f3d0|#6ee7b7", label:"Sage Green and Cream",    desc:"Natural and peaceful", p:{moana:2,raya:2,belle:1} },
      { icon:"#fef9c3|#fef08a|#fde68a", label:"Sunshine Yellow",         desc:"Bright and joyful",    p:{rapunzel:3,belle:2,snow:1} },
      { icon:"#e0f2fe|#bae6fd|#7dd3fc", label:"Ice Blue and Crystal",    desc:"Cool and serene",      p:{elsa:3,cinderella:2} },
      { icon:"#ede9fe|#ddd6fe|#c4b5fd", label:"Lavender and Gold",       desc:"Dreamy and elegant",   p:{jasmine:2,aurora:2,rapunzel:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🎀", layout:"1col", q:"Your hair on a casual day is...",
    opts:[
      { icon:"🐌", label:"Braided or neatly twisted — I like it contained",    p:{mulan:3,moana:2,raya:2} },
      { icon:"🌊", label:"Loose and whatever happened — naturally wild",        p:{ariel:2,moana:1,raya:2} },
      { icon:"🔆", label:"Carefully styled even casually — I have standards",  p:{jasmine:3,snow:2,tiana:2} },
      { icon:"🌸", label:"Half up with something cute and pretty",              p:{cinderella:3,rapunzel:2,aurora:2} },
      { icon:"🏹", label:"Pulled back so it is out of my way always",          p:{mulan:3,raya:2,tiana:2} },
      { icon:"❄️", label:"One perfect braid — always the same perfect one",    p:{elsa:3,aurora:1,cinderella:1} }
    ]
  },
  { cat:"👗 Style", emoji:"💎", layout:"1col", q:"What do you splurge on most?",
    opts:[
      { icon:"📚", label:"Books, art supplies and anything to learn with",    p:{belle:3,tiana:2,mulan:1} },
      { icon:"🌿", label:"Experiences in nature and real adventures",         p:{moana:3,raya:3} },
      { icon:"✨", label:"Beautiful clothes and accessories always",           p:{jasmine:3,rapunzel:2,cinderella:2} },
      { icon:"🍳", label:"The finest food ingredients and cooking tools",     p:{tiana:3,snow:2,rapunzel:1} },
      { icon:"🎨", label:"Art supplies and every creative material imaginable",p:{rapunzel:3,belle:1} },
      { icon:"❄️", label:"Nothing — I create what I need with my own hands", p:{elsa:3,raya:2,mulan:1} }
    ]
  },
  { cat:"👗 Style", emoji:"🎭", layout:"visual", q:"Your look for the royal ball?",
    opts:[
      { icon:"🩵", label:"Ice Blue and Silver", desc:"Like a winter dream",   p:{elsa:3,cinderella:2,aurora:1} },
      { icon:"💛", label:"Radiant Gold",        desc:"I want to shine",       p:{belle:3,tiana:2} },
      { icon:"🌺", label:"Jewel Purple",        desc:"Royal splendor",        p:{jasmine:3,rapunzel:2} },
      { icon:"🌊", label:"Sea Green",           desc:"Ocean royalty",         p:{ariel:3,moana:2} },
      { icon:"🌹", label:"Rose Pink and Ivory", desc:"Timeless romance",      p:{aurora:3,snow:2,cinderella:1} },
      { icon:"⚔️", label:"Bold and Unexpected", desc:"I make statements",     p:{raya:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌺", layout:"1col", q:"Your nails are usually...",
    opts:[
      { icon:"💎", label:"Perfectly manicured at all times without exception",  p:{jasmine:3,snow:2,cinderella:2} },
      { icon:"🌸", label:"Short and clean and completely natural",              p:{mulan:2,tiana:2,moana:2} },
      { icon:"✨", label:"Decorated with tiny intricate little works of art",   p:{rapunzel:3,ariel:2} },
      { icon:"❄️", label:"Pale blue or silver — always frosty and cool",       p:{elsa:3,aurora:1} },
      { icon:"🌊", label:"Shell pink or sea glass green always",               p:{ariel:3,moana:2,aurora:1} },
      { icon:"❌", label:"I genuinely never notice my nails",                   p:{raya:3,mulan:2,belle:1} }
    ]
  },
  { cat:"👗 Style", emoji:"🌙", layout:"1col", q:"Sleepwear style?",
    opts:[
      { icon:"👑", label:"A gorgeous silk robe — even at home I deserve luxury",p:{aurora:3,cinderella:2,jasmine:2} },
      { icon:"🐻", label:"The most oversized cozy everything I own",            p:{rapunzel:3,snow:2} },
      { icon:"❄️", label:"Something silky and cool — I run warm",              p:{elsa:3,aurora:2} },
      { icon:"🌿", label:"Natural cotton and bare feet always",                 p:{moana:3,raya:2} },
      { icon:"✨", label:"Something pretty that still feels a little magical",  p:{cinderella:3,belle:2,aurora:2} },
      { icon:"❌", label:"Literally whatever I fell asleep in",                 p:{mulan:2,raya:2,ariel:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌸", layout:"visual", q:"Your wedding dress would be...",
    opts:[
      { icon:"❄️", label:"Ice Creation",    desc:"Conjured by me alone",         p:{elsa:3} },
      { icon:"🌊", label:"Flowing Seafoam", desc:"Ethereal like seafoam",        p:{ariel:3,cinderella:2,aurora:2} },
      { icon:"🌿", label:"Botanical",       desc:"Flowers and vines woven in",  p:{moana:2,rapunzel:3} },
      { icon:"💎", label:"Grand Ballgown",  desc:"The full complete fairytale",  p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🏹", label:"Unconventional",  desc:"Completely unexpected",        p:{raya:3,jasmine:2} },
      { icon:"💛", label:"Sunny and Warm",  desc:"Not necessarily white",        p:{belle:2,rapunzel:2,tiana:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🎀", layout:"1col", q:"How do you feel about fashion trends?",
    opts:[
      { icon:"😍", label:"I love them — I enjoy staying current and fresh",     p:{ariel:2,rapunzel:2,jasmine:2} },
      { icon:"🤔", label:"I only adopt what genuinely suits me personally",     p:{belle:3,tiana:2,mulan:1} },
      { icon:"😤", label:"I set trends — I do not follow them",                 p:{jasmine:3,raya:2,moana:1} },
      { icon:"❌", label:"Completely indifferent — I do exactly my own thing",  p:{elsa:3,belle:2,raya:2} },
      { icon:"🌸", label:"I love timeless classic styles that never fade",      p:{aurora:3,cinderella:3,snow:2} },
      { icon:"❄️", label:"I have a signature look and never deviate from it",  p:{elsa:3,mulan:2,jasmine:1} }
    ]
  },
  { cat:"👗 Style", emoji:"✨", layout:"flip", q:"One magic accessory added to your look?",
    opts:[
      { icon:"❄️", label:"Ice Crown",       desc:"Generates actual living snowflakes", p:{elsa:3} },
      { icon:"🌟", label:"Enchanted Clip",  desc:"A glowing star in my hair",         p:{cinderella:3,rapunzel:2,aurora:2} },
      { icon:"🌊", label:"Tide Necklace",   desc:"Pulses with the ocean itself",      p:{ariel:3,moana:3} },
      { icon:"📚", label:"Book Charm",      desc:"Opens to real magical worlds",      p:{belle:3,rapunzel:1} },
      { icon:"🔮", label:"Truth Ring",      desc:"Always shows me the truth",         p:{jasmine:2,mulan:2,belle:2} },
      { icon:"⚔️", label:"Warrior Bracelet",desc:"Transforms into a weapon",          p:{raya:3,mulan:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌟", layout:"2col", q:"Your style in one word is...",
    opts:[
      { icon:"🌹", label:"Romantic",  desc:"Soft and dreamlike",        p:{aurora:3,cinderella:3,belle:2} },
      { icon:"❄️", label:"Ethereal",  desc:"Cool and otherworldly",     p:{elsa:3,aurora:2} },
      { icon:"🔥", label:"Fierce",    desc:"Bold and powerful",         p:{jasmine:3,raya:3,ariel:2} },
      { icon:"🌿", label:"Natural",   desc:"Earthy and real",           p:{moana:3,raya:2} },
      { icon:"✨", label:"Whimsical", desc:"Playful and magical",       p:{rapunzel:3,ariel:2,snow:2} },
      { icon:"💎", label:"Elegant",   desc:"Refined and polished",      p:{cinderella:3,tiana:2,snow:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🎨", layout:"flip", q:"Which gemstone is most you?",
    opts:[
      { icon:"❄️", label:"Ice Crystal", desc:"Rare, cool, one of a kind",     p:{elsa:3} },
      { icon:"💙", label:"Sapphire",    desc:"Deep, wise and true",           p:{belle:3,mulan:2,jasmine:2} },
      { icon:"🤍", label:"Diamond",     desc:"Pure, resilient, luminous",     p:{cinderella:3,aurora:3,snow:2} },
      { icon:"💜", label:"Amethyst",    desc:"Mysterious and magical",        p:{jasmine:3,rapunzel:2,aurora:2} },
      { icon:"💚", label:"Emerald",     desc:"Vibrant, natural, fierce",      p:{raya:3,moana:2,tiana:1} },
      { icon:"💛", label:"Topaz",       desc:"Warm, bright, optimistic",      p:{belle:2,rapunzel:3,snow:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌙", layout:"visual", q:"Your ideal winter outfit?",
    opts:[
      { icon:"❄️", label:"Ice Gown",         desc:"Conjured from magic itself",   p:{elsa:3} },
      { icon:"🌸", label:"Layered Pastels",   desc:"Cozy and pretty together",    p:{cinderella:2,aurora:2,snow:2} },
      { icon:"⚔️", label:"Practical Layers",  desc:"I need to be able to move",  p:{raya:3,mulan:2} },
      { icon:"💎", label:"Velvet Cloak",      desc:"Winter elegance always",      p:{aurora:3,cinderella:2,jasmine:2} },
      { icon:"✨", label:"Cozy and Sparkly",  desc:"Both somehow",               p:{rapunzel:3,ariel:1,snow:2} },
      { icon:"🔥", label:"I avoid winter",    desc:"Warm weather princess only",  p:{ariel:3,jasmine:3,moana:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌺", layout:"1col", q:"Your hair accessory collection has...",
    opts:[
      { icon:"🌸", label:"Fresh or dried flowers woven into everything",       p:{snow:2,rapunzel:2,moana:2} },
      { icon:"💎", label:"Jeweled pins, tiaras and sparkling things",          p:{cinderella:3,jasmine:3,aurora:2} },
      { icon:"❄️", label:"One single perfect accessory — always the same",    p:{elsa:3,mulan:2} },
      { icon:"🌊", label:"Shell clips and sea-inspired pieces only",           p:{ariel:3,moana:2} },
      { icon:"🏹", label:"Functional hair ties — just what I need to move",   p:{mulan:3,raya:2,tiana:2} },
      { icon:"❌", label:"I have no idea where my accessories go",             p:{rapunzel:1,ariel:2,snow:1} }
    ]
  },
  { cat:"👗 Style", emoji:"💫", layout:"visual", q:"Your royal portrait outfit would be...",
    opts:[
      { icon:"❄️", label:"My Ice Gown",      desc:"This is who I truly am",    p:{elsa:3} },
      { icon:"🩵", label:"Classic Ballgown", desc:"Timeless queen forever",    p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🌊", label:"At the Sea",       desc:"Windswept and alive",       p:{ariel:3,moana:3} },
      { icon:"⚔️", label:"In My Armor",      desc:"Powerful and ready",        p:{mulan:3,raya:3,jasmine:1} },
      { icon:"📚", label:"With My Book",     desc:"Casual and completely real",p:{belle:3,rapunzel:2} },
      { icon:"✨", label:"Full Crown and Jewels",desc:"Every single thing on", p:{jasmine:3,tiana:2,snow:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌸", layout:"visual", q:"Which princess costume could you live in forever?",
    opts:[
      { icon:"❄️", label:"Elsa's Ice Gown",      desc:"Conjured from magic",   p:{elsa:3} },
      { icon:"🩰", label:"Cinderella's Ball Gown",desc:"Timeless fairytale",   p:{cinderella:3,aurora:2,snow:2} },
      { icon:"🌊", label:"Ariel's Ocean Look",    desc:"Under the sea",        p:{ariel:3,moana:2} },
      { icon:"💛", label:"Belle's Gold Gown",     desc:"Bookworm beauty",      p:{belle:3,rapunzel:1,aurora:1} },
      { icon:"🌺", label:"Jasmine's Ensemble",    desc:"Desert royalty",       p:{jasmine:3,ariel:1} },
      { icon:"⚔️", label:"Raya's Warrior Look",   desc:"Fierce forever",       p:{raya:3,mulan:2} }
    ]
  },
  { cat:"👗 Style", emoji:"🌸", layout:"1col", q:"Your signature item that makes you unmistakably you?",
    opts:[
      { icon:"❄️", label:"My ice braid — nobody else has anything like it",    p:{elsa:3} },
      { icon:"🩰", label:"My glass slippers — unforgettable and magical",      p:{cinderella:3,aurora:2} },
      { icon:"📿", label:"My glowing magical pendant from home",               p:{moana:3,ariel:2} },
      { icon:"🌸", label:"70 feet of magical hair full of color",              p:{rapunzel:3} },
      { icon:"⚔️", label:"My warrior bracelet and combat-ready everything",    p:{raya:3,mulan:2} },
      { icon:"🌺", label:"A jeweled headpiece that announces my arrival",      p:{jasmine:3,snow:2} }
    ]
  }
];

// Question 25 — added to complete the set
Q_STYLE.push(
  { cat:"👗 Style", emoji:"🌙", layout:"1col", q:"Your most prized fashion possession is...",
    opts:[
      { icon:"❄️", label:"Something I created entirely myself from scratch",     p:{elsa:3,rapunzel:2} },
      { icon:"💕", label:"A beloved piece with deep sentimental meaning",        p:{cinderella:3,aurora:2,snow:2} },
      { icon:"🌊", label:"Something from the sea — natural and rare",            p:{ariel:3,moana:2} },
      { icon:"👑", label:"The most extravagant expensive thing I own",           p:{jasmine:3,aurora:1,cinderella:1} },
      { icon:"🎨", label:"Something I painted or decorated myself",              p:{rapunzel:3,belle:1} },
      { icon:"⚔️", label:"My gear — worn in, tested, and completely reliable",  p:{raya:3,mulan:3} }
    ]
  }
);
