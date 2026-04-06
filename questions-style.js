/* ═══════════════════════════════════════════════
   QUESTIONS — Romance & Love (25)
   ═══════════════════════════════════════════════ */
const Q_ROMANCE = [
  { cat:"💕 Romance", emoji:"💕", layout:"1col", q:"Most important quality in your future prince?",
    opts:[
      { icon:"😂", label:"He makes me genuinely laugh like nobody else can",     p:{rapunzel:3,ariel:2,snow:1} },
      { icon:"🧠", label:"He is brilliantly intelligent and loves learning",    p:{belle:3,tiana:2} },
      { icon:"❤️", label:"He truly sees and accepts the real me completely",    p:{cinderella:3,aurora:2,elsa:2} },
      { icon:"🛡️", label:"He is brave and always stands up for others",         p:{mulan:3,jasmine:2,raya:1} },
      { icon:"🤝", label:"He treats me as a completely equal partner",          p:{jasmine:3,mulan:2,raya:2} },
      { icon:"❄️", label:"He is patient and never pushes me beyond my limits", p:{elsa:3,aurora:2,cinderella:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"💖", layout:"1col", q:"Your ideal first date?",
    opts:[
      { icon:"✨", label:"A magic carpet ride over a glittering city at night",  p:{jasmine:3,rapunzel:2} },
      { icon:"📚", label:"Exploring the most beautiful library together",        p:{belle:3} },
      { icon:"🌊", label:"Swimming in the sea and watching the sunset together", p:{ariel:3,moana:2} },
      { icon:"🕯️", label:"A candlelit dinner under a sky full of stars",        p:{tiana:3,cinderella:2,aurora:1} },
      { icon:"🏹", label:"A wild adventure somewhere totally new",               p:{raya:3,moana:2} },
      { icon:"❄️", label:"Ice skating somewhere magical just for us",           p:{elsa:3,aurora:2,cinderella:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌹", layout:"1col", q:"How do you know it is true love?",
    opts:[
      { icon:"💫", label:"It feels like an actual magical spell",              p:{cinderella:3,aurora:3,snow:2} },
      { icon:"💬", label:"We can talk about absolutely everything for hours",  p:{belle:3,rapunzel:2} },
      { icon:"🤣", label:"He makes me laugh completely like nobody else",      p:{rapunzel:3,ariel:2,snow:1} },
      { icon:"🔥", label:"It is fierce and passionate — my whole body knows", p:{jasmine:3,ariel:2,raya:1} },
      { icon:"🌿", label:"A quiet deep understanding that needs no words",     p:{moana:2,mulan:2} },
      { icon:"❄️", label:"He sees the real me and is not afraid of it",       p:{elsa:3,aurora:1,cinderella:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"😤", layout:"2col", q:"Your biggest romance deal-breaker?",
    opts:[
      { icon:"🎭", label:"Dishonesty",                  p:{jasmine:3,raya:2,belle:1} },
      { icon:"🔒", label:"Controlling my freedom",      p:{jasmine:3,ariel:2,elsa:1} },
      { icon:"😴", label:"Being boring",                p:{ariel:3,rapunzel:2,moana:1} },
      { icon:"😤", label:"Arrogance and cruelty",       p:{belle:3,cinderella:2,tiana:1} },
      { icon:"🤥", label:"Dishonesty about who they are",p:{raya:3,moana:2,mulan:1} },
      { icon:"💔", label:"Not believing in my dreams",  p:{tiana:3,mulan:2,rapunzel:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"💌", layout:"1col", q:"Most romantic gesture your prince could make?",
    opts:[
      { icon:"🌅", label:"A surprise completely magical adventure just for me",  p:{ariel:3,jasmine:3,rapunzel:2} },
      { icon:"📖", label:"Writing me the most beautiful letter imaginable",      p:{belle:3,aurora:2} },
      { icon:"🎵", label:"Singing to me or dancing with me under the stars",    p:{cinderella:3,aurora:2,snow:1} },
      { icon:"🍽️", label:"Cooking with me and making something wonderful",       p:{tiana:3,rapunzel:1,snow:1} },
      { icon:"💬", label:"Just truly listening — really actually listening",     p:{tiana:2,moana:2,elsa:2} },
      { icon:"❄️", label:"Accepting all of me without fear or hesitation",      p:{elsa:3,aurora:1,cinderella:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💑", layout:"1col", q:"Your relationship style is...",
    opts:[
      { icon:"🔥", label:"Passionate and completely intense",                p:{jasmine:3,ariel:2,raya:1} },
      { icon:"🤝", label:"A true partnership of equals always",              p:{mulan:3,tiana:2,moana:2} },
      { icon:"🌸", label:"Gentle and deeply deeply romantic",                p:{aurora:3,cinderella:3,belle:2} },
      { icon:"😄", label:"Playful and absolutely full of laughter",          p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"🌿", label:"Quiet and deeply quietly understanding",           p:{moana:2,belle:2} },
      { icon:"❄️", label:"Built slowly and carefully on real trust",        p:{elsa:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💘", layout:"1col", q:"Love at first sight — do you believe in it?",
    opts:[
      { icon:"💯", label:"Absolutely — it happened or will happen to me",    p:{ariel:3,snow:3,aurora:2} },
      { icon:"🤔", label:"Attraction yes but real love takes real time",     p:{belle:3,tiana:2,mulan:1} },
      { icon:"💕", label:"The heart simply knows what it knows",             p:{cinderella:3,jasmine:2,aurora:2} },
      { icon:"❌", label:"No — real love must be built brick by brick",      p:{belle:2,tiana:3,mulan:2} },
      { icon:"❄️", label:"I believe in it but I guard my heart carefully",  p:{elsa:3,aurora:1,cinderella:1} },
      { icon:"🌊", label:"It is like a tide — it rises before you even notice",p:{moana:2,ariel:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌹", layout:"1col", q:"Your ideal couple activity?",
    opts:[
      { icon:"🏹", label:"An outdoor adventure — something challenging together", p:{raya:3,moana:2} },
      { icon:"🍳", label:"Cooking something wonderful together at home",         p:{tiana:3,snow:2,rapunzel:2} },
      { icon:"📖", label:"Reading quietly side by absolute side",               p:{belle:3,aurora:2} },
      { icon:"🎭", label:"Exploring somewhere completely new together",          p:{ariel:3,jasmine:2,rapunzel:2} },
      { icon:"💃", label:"Dancing together — we would always be dancing",        p:{cinderella:3,ariel:2,snow:2} },
      { icon:"❄️", label:"Ice skating or something magical and wintery",         p:{elsa:3,aurora:1,cinderella:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💎", layout:"1col", q:"Your dream proposal?",
    opts:[
      { icon:"✨", label:"Magical — involving an actual spell or wonder",       p:{cinderella:3,aurora:2,ariel:2} },
      { icon:"🌊", label:"On a boat in the open sea under the stars",          p:{ariel:3,moana:3} },
      { icon:"🌹", label:"A completely private deeply romantic moment",        p:{belle:3,aurora:3} },
      { icon:"🎉", label:"In front of everyone at a magnificent celebration",  p:{snow:2,rapunzel:2,jasmine:2} },
      { icon:"❄️", label:"In a snow-covered magical place just for us",       p:{elsa:3,aurora:1,cinderella:2} },
      { icon:"🏹", label:"A challenge — he would absolutely have to earn it",  p:{raya:3,jasmine:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌸", layout:"1col", q:"What do you need most in a partner?",
    opts:[
      { icon:"💕", label:"Deep genuine affection and real warmth",              p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🧠", label:"A deep intellectual connection that challenges me",   p:{belle:3,tiana:1} },
      { icon:"🌊", label:"A shared love of adventure and discovery",            p:{ariel:3,moana:2,jasmine:2} },
      { icon:"🤝", label:"True mutual respect and real equality always",        p:{mulan:3,jasmine:3,raya:2} },
      { icon:"😄", label:"The ability to genuinely make me laugh",              p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"❄️", label:"Patience and the willingness to truly understand me", p:{elsa:3,aurora:2,belle:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💔", layout:"1col", q:"How do you handle heartbreak?",
    opts:[
      { icon:"💪", label:"Get up and get moving — no time for stopping",      p:{mulan:3,tiana:2,raya:2} },
      { icon:"🎨", label:"Channel every feeling into creating something real", p:{rapunzel:3,ariel:2,belle:2} },
      { icon:"😢", label:"Feel every bit of it fully then slowly heal",       p:{cinderella:2,aurora:2,snow:2} },
      { icon:"🌿", label:"Nature and complete solitude help me reset",         p:{moana:2,elsa:2} },
      { icon:"📖", label:"Lose myself completely in books and other worlds",   p:{belle:3,aurora:1} },
      { icon:"❄️", label:"Go somewhere quiet and cold and be completely alone",p:{elsa:3,mulan:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌺", layout:"1col", q:"The most romantic setting imaginable?",
    opts:[
      { icon:"❄️", label:"A frozen palace glowing under the northern lights", p:{elsa:3} },
      { icon:"⭐", label:"Under a sky absolutely full of shooting stars",      p:{cinderella:3,rapunzel:3,aurora:2} },
      { icon:"🌊", label:"A moonlit beach where the waves glow",              p:{ariel:3,moana:3} },
      { icon:"🌹", label:"A candlelit garden overflowing with roses",         p:{belle:3,aurora:3,cinderella:2} },
      { icon:"🎶", label:"A dance floor with absolutely perfect music",       p:{cinderella:3,snow:2,jasmine:2} },
      { icon:"🍳", label:"A warm kitchen making food together after midnight", p:{tiana:3,rapunzel:2,snow:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"💑", layout:"1col", q:"In a relationship you give...",
    opts:[
      { icon:"💯", label:"Absolutely everything — I love with my whole heart",  p:{ariel:3,cinderella:3,snow:2} },
      { icon:"🤝", label:"Equal give and take — real balance always",           p:{mulan:3,tiana:2,jasmine:2} },
      { icon:"🌊", label:"Space — I need room to breathe and I give the same", p:{moana:2,raya:2} },
      { icon:"🛡️", label:"Protection — I would do anything to keep them safe", p:{mulan:3,raya:2,jasmine:2} },
      { icon:"😄", label:"Joy — making them happy is what I live for",          p:{rapunzel:3,snow:3,cinderella:2} },
      { icon:"❄️", label:"Slowly everything — once I trust I give it all",    p:{elsa:3,belle:2,mulan:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"💬", layout:"1col", q:"Your flirting style is...",
    opts:[
      { icon:"🌈", label:"Cheerful and obvious — I laugh a lot around them",    p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"🤔", label:"Intellectual — I ask questions that go very deep",    p:{belle:3,tiana:1} },
      { icon:"😏", label:"Bold and completely direct — I make my interest known",p:{jasmine:3,raya:2,ariel:2} },
      { icon:"😊", label:"Actually shy — I genuinely get quite nervous",        p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌿", label:"Through shared experiences and quiet moments",        p:{moana:2,mulan:2} },
      { icon:"❄️", label:"Barely at all — I wait for them to approach me",    p:{elsa:3,aurora:1,belle:1} }
    ]
  },
  { cat:"💕 Romance", emoji:"💞", layout:"1col", q:"Romance without this is not actually romance.",
    opts:[
      { icon:"💬", label:"Deep and completely honest conversation",          p:{belle:3,raya:2,tiana:2} },
      { icon:"😂", label:"Genuine laughter — lots and lots of it",          p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"🌊", label:"Shared adventure and real discovery together",    p:{ariel:3,jasmine:2,moana:2} },
      { icon:"🤝", label:"True mutual respect and complete equality",       p:{mulan:3,jasmine:3,raya:2} },
      { icon:"💕", label:"Genuine kindness and real tenderness always",     p:{cinderella:3,aurora:3,snow:2} },
      { icon:"❄️", label:"Patience and time to truly build something",     p:{elsa:3,aurora:2,belle:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌸", layout:"1col", q:"Your favorite love story type?",
    opts:[
      { icon:"🧠", label:"Enemies to lovers — all that delicious tension",   p:{belle:3,jasmine:2,raya:2} },
      { icon:"🤝", label:"Best friends who finally finally realize it",      p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"✨", label:"Fated and magical — written in the actual stars",  p:{cinderella:3,aurora:3,snow:2} },
      { icon:"🌊", label:"Two completely different worlds colliding",        p:{ariel:3,moana:2,jasmine:2} },
      { icon:"🔥", label:"Passionate and beautifully complicated",           p:{jasmine:3,ariel:2,raya:2} },
      { icon:"❄️", label:"Slow and careful — real trust built over time",   p:{elsa:3,mulan:2,belle:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💘", layout:"1col", q:"A love letter to you would say...",
    opts:[
      { icon:"💫", label:"You completely changed my entire world",           p:{cinderella:3,ariel:3,aurora:2} },
      { icon:"📖", label:"You showed me beauty I never could see before",   p:{belle:3,rapunzel:2,aurora:2} },
      { icon:"⚔️", label:"You are the bravest person I have ever known",    p:{mulan:3,raya:2,moana:2} },
      { icon:"🌊", label:"With you I found what I was always searching for", p:{ariel:3,moana:2,jasmine:2} },
      { icon:"😄", label:"Every single day with you is a real adventure",   p:{rapunzel:3,ariel:2,snow:2} },
      { icon:"❄️", label:"You were worth every patient moment of waiting",  p:{elsa:3,aurora:2,cinderella:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌙", layout:"1col", q:"Where would you most want your first kiss?",
    opts:[
      { icon:"❄️", label:"In a snow globe world of ice and magic",             p:{elsa:3} },
      { icon:"⭐", label:"Under a sky completely full of stars",               p:{cinderella:3,rapunzel:3,aurora:2} },
      { icon:"🌊", label:"On a beach as the waves glow in the dark",          p:{ariel:3,moana:2} },
      { icon:"🌹", label:"In a garden full of flowers at the perfect moment",  p:{belle:3,aurora:2,cinderella:2} },
      { icon:"🎶", label:"In the middle of a dance at a grand ball",           p:{cinderella:3,snow:2,jasmine:2} },
      { icon:"🏹", label:"At the top of something high after a real adventure",p:{raya:3,moana:2,rapunzel:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💕", layout:"1col", q:"What do you want your love story remembered for?",
    opts:[
      { icon:"❄️", label:"A love that helped someone become fully themselves", p:{elsa:3,belle:2,aurora:2} },
      { icon:"✨", label:"Pure absolute magic and wonder that moved people",   p:{cinderella:3,aurora:3,ariel:2} },
      { icon:"🔥", label:"A passion that never ever burned out or faded",     p:{jasmine:3,ariel:2,raya:2} },
      { icon:"🤝", label:"A true partnership through absolutely everything",   p:{mulan:3,tiana:3,moana:2} },
      { icon:"🌊", label:"A love as vast and deep as the endless ocean",      p:{ariel:3,moana:2} },
      { icon:"😄", label:"Joy — that we laughed together our whole entire lives",p:{rapunzel:3,snow:3,ariel:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌺", layout:"1col", q:"Your Prince Charming is actually...",
    opts:[
      { icon:"🌍", label:"A worldly traveler with a thousand incredible stories",p:{ariel:3,jasmine:2,rapunzel:2} },
      { icon:"📚", label:"A quiet bookish scholar who completely surprises me", p:{belle:3,aurora:1} },
      { icon:"🤝", label:"Someone who started from nothing and worked hard",    p:{tiana:3,cinderella:2,mulan:1} },
      { icon:"🌿", label:"Someone deeply connected to the natural world",       p:{moana:2,raya:2} },
      { icon:"😄", label:"Funny, warm and so completely himself",               p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"❄️", label:"Patient, gentle and never afraid of who I really am",p:{elsa:3,aurora:2,cinderella:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💑", layout:"1col", q:"When you have a crush you...",
    opts:[
      { icon:"😍", label:"Get completely dreamy and thoroughly distracted",    p:{ariel:3,aurora:2,cinderella:2} },
      { icon:"🤓", label:"Research absolutely everything about their interests",p:{belle:3,tiana:1} },
      { icon:"💪", label:"Suddenly become extremely impressive and capable",   p:{mulan:3,raya:2,jasmine:2} },
      { icon:"😄", label:"Laugh even more and become totally bubbly",         p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"😶", label:"Go very quiet and hope they eventually notice me",  p:{aurora:2,cinderella:2,elsa:1} },
      { icon:"😏", label:"Make bold completely direct moves immediately",      p:{jasmine:3,ariel:2,raya:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💕", layout:"1col", q:"What does love change in you?",
    opts:[
      { icon:"💫", label:"It makes me somehow even more magical",            p:{cinderella:3,aurora:2,ariel:2} },
      { icon:"💪", label:"It makes me stronger and braver than ever",        p:{mulan:3,moana:2,tiana:2} },
      { icon:"😄", label:"It brings out my absolute most joyful self",       p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"🌿", label:"It grounds me completely and brings real clarity", p:{moana:2,belle:2} },
      { icon:"🔥", label:"It makes me more passionate about everything",     p:{jasmine:3,ariel:2,raya:1} },
      { icon:"❄️", label:"It makes me brave enough to truly let someone in", p:{elsa:3,aurora:2,cinderella:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"🌸", layout:"1col", q:"Your royal signature romantic gesture?",
    opts:[
      { icon:"❄️", label:"Creating something breathtaking from nothing for them", p:{elsa:3} },
      { icon:"🎵", label:"Singing — I genuinely burst into song for people I love",p:{ariel:3,cinderella:3,snow:2} },
      { icon:"🍳", label:"Cooking something magnificent just for them alone",     p:{tiana:3,snow:2,rapunzel:2} },
      { icon:"🌊", label:"Taking them somewhere breathtaking they have never seen",p:{moana:3,ariel:2} },
      { icon:"💬", label:"Saying exactly and honestly what is in my heart",       p:{ariel:2,belle:2,aurora:2} },
      { icon:"🏹", label:"Showing off with something genuinely impressive",       p:{raya:3,mulan:2,moana:2} }
    ]
  },
  { cat:"💕 Romance", emoji:"💞", layout:"1col", q:"Love is most like...",
    opts:[
      { icon:"❄️", label:"A blizzard — overwhelming, beautiful and completely yours",p:{elsa:3} },
      { icon:"🌊", label:"The ocean — deep, vast and sometimes overwhelming",       p:{ariel:3,moana:3} },
      { icon:"⭐", label:"A shooting star — magical, rare and worth everything",    p:{cinderella:3,aurora:3,rapunzel:2} },
      { icon:"🌹", label:"A rose — beautiful and absolutely worth the thorns",      p:{belle:3,aurora:2,cinderella:2} },
      { icon:"🔥", label:"A fire — warm and fierce and completely alive",           p:{jasmine:3,ariel:2,raya:2} },
      { icon:"⚔️", label:"A battle — absolutely worth fighting for every day",     p:{mulan:3,tiana:2,raya:2} }
    ]
  }
];

Q_ROMANCE.push(
  { cat:"💕 Romance", emoji:"💌", layout:"1col", q:"Your most romantic evening looks like...",
    opts:[
      { icon:"❄️", label:"A private ice palace lit by a thousand candles",      p:{elsa:3} },
      { icon:"⭐", label:"Watching shooting stars from somewhere breathtaking", p:{cinderella:3,rapunzel:2,aurora:2} },
      { icon:"🌊", label:"Swimming in a moonlit sea that glows beneath us",     p:{ariel:3,moana:3} },
      { icon:"🌹", label:"A candlelit garden dinner with music floating in",    p:{belle:3,aurora:2,cinderella:2} },
      { icon:"🎶", label:"Dancing all night long at the most magical ball",    p:{cinderella:3,snow:2,jasmine:2} },
      { icon:"🍳", label:"Cooking a perfect meal together then watching stars", p:{tiana:3,rapunzel:2,snow:1} }
    ]
  }
);
