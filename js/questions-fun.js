/* ═══════════════════════════════════════════════
   QUESTIONS — Friendship (25)
   ═══════════════════════════════════════════════ */
const Q_FRIENDSHIP = [
  { cat:"👯 Friendship", emoji:"👯", layout:"1col", q:"Your best friend is most likely...",
    opts:[
      { icon:"😄", label:"Someone who makes me genuinely laugh constantly",   p:{snow:3,rapunzel:3,ariel:2} },
      { icon:"🧠", label:"Someone who always challenges my thinking",         p:{belle:3,tiana:2,mulan:1} },
      { icon:"❄️", label:"Someone who truly understands what I carry inside",p:{elsa:3} },
      { icon:"💪", label:"Someone fierce, loyal and completely unafraid",     p:{mulan:3,raya:3,jasmine:2} },
      { icon:"💕", label:"Someone warm, endlessly kind and genuinely caring", p:{cinderella:3,snow:2,aurora:2} },
      { icon:"✨", label:"Someone as curious and adventurous as I am",        p:{ariel:3,rapunzel:2,moana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"💕", layout:"1col", q:"What do you do for a friend who is upset?",
    opts:[
      { icon:"🤗", label:"Hug them and sit with them in complete silence",     p:{snow:3,cinderella:3,aurora:2} },
      { icon:"🧠", label:"Help them actually solve the real problem",          p:{belle:3,tiana:2,mulan:2} },
      { icon:"😄", label:"Make them genuinely laugh until it feels better",   p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🌿", label:"Take them somewhere beautiful and just breathe",    p:{moana:3,elsa:1} },
      { icon:"🍳", label:"Cook something wonderful for them immediately",      p:{tiana:3,snow:2,cinderella:1} },
      { icon:"❄️", label:"Give them space and let them know I am here",       p:{elsa:3,aurora:2,belle:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌟", layout:"1col", q:"What makes you a genuinely good friend?",
    opts:[
      { icon:"💕", label:"I am endlessly loyal and deeply caring always",      p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🗣️", label:"I am honest even when it is genuinely hard",         p:{jasmine:3,mulan:2,belle:2} },
      { icon:"😄", label:"I bring real joy absolutely wherever I go",          p:{snow:3,rapunzel:3,ariel:2} },
      { icon:"🛡️", label:"I protect fiercely — no one messes with my people", p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🌿", label:"I give space and never judge anything",              p:{moana:2,elsa:2,belle:2} },
      { icon:"❄️", label:"I am steady and there when things get hard",        p:{elsa:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"😤", layout:"1col", q:"Friend betrayal — you...",
    opts:[
      { icon:"😤", label:"Confront them directly and completely immediately",  p:{jasmine:3,raya:3,ariel:2} },
      { icon:"😢", label:"Feel deeply hurt and take real time to process it", p:{cinderella:2,snow:2,aurora:2} },
      { icon:"🔍", label:"Try to truly understand their perspective first",   p:{belle:3,moana:2,tiana:1} },
      { icon:"🌊", label:"Forgive eventually — I believe in second chances",  p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🚪", label:"Walk away and genuinely protect myself",             p:{mulan:2,tiana:2,raya:2} },
      { icon:"❄️", label:"Go quiet and decide slowly and carefully",          p:{elsa:3,mulan:2,belle:1} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌺", layout:"1col", q:"Your friend group is...",
    opts:[
      { icon:"🌸", label:"Small and incredibly deeply close",                  p:{belle:3,mulan:2,tiana:2} },
      { icon:"🌈", label:"Big, diverse and always warmly growing",             p:{snow:3,rapunzel:3,ariel:2} },
      { icon:"❄️", label:"Very small — I keep only truly trusted people",     p:{elsa:3,mulan:2} },
      { icon:"💃", label:"The life of every single party everywhere",          p:{ariel:3,jasmine:3,snow:2} },
      { icon:"💕", label:"My chosen family — everything to each other",        p:{cinderella:3,tiana:2,snow:2} },
      { icon:"🤷", label:"I am honestly a bit of a lone wolf always",          p:{belle:2,raya:3} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🎉", layout:"1col", q:"Your ideal night out with friends?",
    opts:[
      { icon:"💃", label:"Dancing at a grand ball completely until sunrise",   p:{ariel:3,snow:3,cinderella:2} },
      { icon:"❄️", label:"A magical ice event that takes everyone's breath",   p:{elsa:3} },
      { icon:"🌊", label:"Swimming or an outdoor adventure somewhere new",     p:{ariel:2,moana:3,raya:2} },
      { icon:"🍳", label:"Cooking a magnificent meal all together at home",    p:{tiana:3,snow:2,rapunzel:2} },
      { icon:"📖", label:"Story night — everyone shares something real",       p:{belle:3,aurora:2} },
      { icon:"🌿", label:"A bonfire under stars with music and stories",       p:{moana:3,raya:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"💬", layout:"1col", q:"Your communication style with close friends?",
    opts:[
      { icon:"💕", label:"Openly warm and completely emotionally honest",      p:{snow:3,cinderella:2,rapunzel:2} },
      { icon:"😂", label:"Through jokes and laughter — it is how I show love",p:{rapunzel:3,ariel:2,snow:2} },
      { icon:"📚", label:"Through ideas we discover and explore together",     p:{belle:3,tiana:2} },
      { icon:"🔊", label:"Direct and honest even when it is hard to say",     p:{jasmine:3,raya:2,mulan:2} },
      { icon:"❄️", label:"Quietly present — I show up when it matters",       p:{elsa:3,mulan:2,aurora:2} },
      { icon:"🤝", label:"Through things we do together — actions not words", p:{moana:2,mulan:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🎁", layout:"1col", q:"The best gift you could give a friend?",
    opts:[
      { icon:"💕", label:"My complete and total undivided time and attention",  p:{cinderella:2,snow:2,aurora:2} },
      { icon:"❄️", label:"Something beautiful I created just for them",        p:{elsa:3,rapunzel:2} },
      { icon:"🌊", label:"An adventure they would never have taken alone",     p:{moana:3,ariel:3} },
      { icon:"📚", label:"The exact perfect book they did not know they needed",p:{belle:3,tiana:1} },
      { icon:"🍳", label:"A meal I cooked just for them with real love",       p:{tiana:3,snow:2,cinderella:2} },
      { icon:"✨", label:"Something that tells them I truly see who they are", p:{rapunzel:2,cinderella:2,aurora:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌙", layout:"1col", q:"A friend is going through something really hard. You...",
    opts:[
      { icon:"🤗", label:"Show up immediately without being asked",            p:{cinderella:3,snow:3,rapunzel:2} },
      { icon:"🧠", label:"Help them think through it step by careful step",   p:{belle:3,tiana:2,mulan:2} },
      { icon:"❄️", label:"Check in quietly and let them set the real pace",   p:{elsa:3,aurora:2,belle:2} },
      { icon:"🍳", label:"Bring food and stay as long as they need me there", p:{tiana:3,snow:2,cinderella:2} },
      { icon:"🌿", label:"Take them somewhere healing and just breathe together",p:{moana:3,elsa:1} },
      { icon:"⚔️", label:"Find out who caused this and handle it myself",     p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌟", layout:"1col", q:"The quality you most value in a friendship?",
    opts:[
      { icon:"💕", label:"Genuine warmth and unconditional acceptance",        p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"Steadiness — they are there when things get dark",  p:{elsa:3,mulan:2,tiana:2} },
      { icon:"🗣️", label:"Complete honesty even when it is uncomfortable",    p:{jasmine:3,raya:2,belle:2} },
      { icon:"😂", label:"Shared laughter — we find the same things funny",   p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🌊", label:"Shared adventure and exploring things together",     p:{ariel:3,moana:2} },
      { icon:"🛡️", label:"Fierce loyalty — they would do anything for me",   p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"💑", layout:"1col", q:"Your friendship love language?",
    opts:[
      { icon:"🗣️", label:"Words — telling you what you genuinely mean to me", p:{ariel:2,rapunzel:3,snow:2} },
      { icon:"🎁", label:"Thoughtful gestures — I notice what you really need",p:{cinderella:2,jasmine:2,snow:1} },
      { icon:"🤗", label:"Presence — I am simply here for you always",         p:{snow:3,cinderella:2,aurora:2} },
      { icon:"⏱️", label:"Quality time — completely undivided attention",      p:{mulan:2,moana:2,belle:2} },
      { icon:"🛠️", label:"Actions — I show love by doing things for you",     p:{tiana:3,cinderella:2,snow:1} },
      { icon:"❄️", label:"Reliability — you always know exactly where I stand",p:{elsa:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌺", layout:"1col", q:"An old friend comes back into your life. You...",
    opts:[
      { icon:"💕", label:"Pick right back up as if absolutely no time passed", p:{snow:3,cinderella:3,rapunzel:2} },
      { icon:"❄️", label:"Take it carefully and slowly rebuild the real trust",p:{elsa:3,mulan:2} },
      { icon:"🌊", label:"Go on an adventure to catch up completely",           p:{moana:2,ariel:2} },
      { icon:"📚", label:"Talk for hours about everything we have both missed", p:{belle:3,tiana:2} },
      { icon:"🤔", label:"Try to understand why they were gone so long first",  p:{jasmine:2,raya:2,mulan:1} },
      { icon:"😊", label:"Genuinely welcome them with completely open arms",   p:{cinderella:3,snow:2,aurora:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"⚡", layout:"1col", q:"A friend needs you at three in the morning. You...",
    opts:[
      { icon:"⚡", label:"Pick up immediately — no question at all",            p:{mulan:3,cinderella:3,snow:2} },
      { icon:"❄️", label:"Respond right away and ask what they need",          p:{elsa:3,tiana:2} },
      { icon:"💕", label:"Show up at their door with blankets and food",        p:{snow:3,rapunzel:2,cinderella:2} },
      { icon:"📚", label:"Help them think through whatever is happening",       p:{belle:3,tiana:2} },
      { icon:"🌊", label:"Take them outside to breathe and walk and talk",     p:{moana:2} },
      { icon:"🛡️", label:"Find whoever caused the problem and handle it",      p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌸", layout:"1col", q:"What do you absolutely love about your friends?",
    opts:[
      { icon:"😂", label:"They make me laugh until I genuinely cannot breathe", p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"💕", label:"They love me for exactly who I completely am",        p:{cinderella:3,snow:2,aurora:2} },
      { icon:"❄️", label:"They accept all of me — even the hard parts",        p:{elsa:3,belle:2,aurora:2} },
      { icon:"🌊", label:"They are up for anything at any time always",         p:{ariel:3,moana:3} },
      { icon:"📚", label:"They make me think differently about the world",      p:{belle:3,tiana:2} },
      { icon:"🛡️", label:"They have my back absolutely no matter what",        p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🎭", layout:"1col", q:"What role do you play in a group of friends?",
    opts:[
      { icon:"👑", label:"The leader — I naturally see what needs doing",       p:{jasmine:3,moana:3,mulan:2} },
      { icon:"💡", label:"The ideas person — creative spark for everything",    p:{belle:3,rapunzel:2,ariel:2} },
      { icon:"🤝", label:"The peacekeeper — I bring everyone together",         p:{cinderella:2,snow:2,moana:2} },
      { icon:"😂", label:"The comic relief — I keep everything joyful",         p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"⚙️", label:"The doer — I make every single thing actually happen",p:{tiana:3,mulan:2,raya:2} },
      { icon:"❄️", label:"The anchor — I keep everyone grounded and safe",     p:{elsa:3,mulan:2,tiana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌙", layout:"1col", q:"Your most important friendship rule is...",
    opts:[
      { icon:"💕", label:"Show up completely — especially when it is hard",     p:{cinderella:3,snow:3,mulan:2} },
      { icon:"❄️", label:"Be honest and never pretend everything is fine",     p:{elsa:3,jasmine:2,raya:2} },
      { icon:"🗣️", label:"Say what you mean — kindly but always truthfully",   p:{jasmine:3,raya:2,belle:2} },
      { icon:"😂", label:"Keep laughing — life is too short to be too serious", p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🛡️", label:"Protect each other absolutely no matter what",       p:{mulan:3,raya:3,jasmine:2} },
      { icon:"🌊", label:"Give each other real room to grow and change",        p:{moana:3,elsa:2,belle:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"⚡", layout:"1col", q:"The thing your best friend would say about you?",
    opts:[
      { icon:"💕", label:"She would do absolutely anything for the people she loves",p:{mulan:3,cinderella:3,snow:2} },
      { icon:"😂", label:"She makes every single situation better and funnier",   p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"❄️", label:"She is steady and there when everything gets dark",    p:{elsa:3,mulan:2,tiana:2} },
      { icon:"🔥", label:"She is the fiercest most loyal person I have ever known",p:{jasmine:3,raya:3,mulan:2} },
      { icon:"📚", label:"She opens my mind to things I never thought about",    p:{belle:3,tiana:2} },
      { icon:"✨", label:"She makes everything feel a little more magical",      p:{cinderella:3,rapunzel:2,snow:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌸", layout:"1col", q:"A friendship memory you will never ever forget?",
    opts:[
      { icon:"❄️", label:"When a friend saw me at my lowest and stayed anyway", p:{elsa:3} },
      { icon:"😂", label:"When we laughed so hard we literally could not breathe",p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"🌊", label:"When we went on an adventure neither of us planned",  p:{ariel:3,moana:3} },
      { icon:"💕", label:"When they showed up for me without being asked",       p:{cinderella:3,snow:2,aurora:2} },
      { icon:"⚔️", label:"When we fought for each other against real odds",     p:{mulan:3,raya:3} },
      { icon:"📚", label:"When a conversation changed how I see everything",    p:{belle:3,tiana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌺", layout:"1col", q:"Your friend's first thing they notice about you?",
    opts:[
      { icon:"❄️", label:"Something powerful and rare they cannot quite name",  p:{elsa:3} },
      { icon:"💕", label:"A warmth that makes them feel immediately safe",       p:{cinderella:3,snow:3,aurora:2} },
      { icon:"😂", label:"That I make them feel genuinely happy right away",    p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🌊", label:"An energy that makes them want to follow anywhere",   p:{moana:3,ariel:2} },
      { icon:"🧠", label:"Something sharp and curious they want to know more",  p:{belle:3,tiana:2} },
      { icon:"⚔️", label:"A fierce confidence that quietly commands respect",   p:{jasmine:3,raya:3,mulan:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌙", layout:"1col", q:"The hardest friendship lesson you learned?",
    opts:[
      { icon:"❄️", label:"That letting people in does not always destroy you",  p:{elsa:3} },
      { icon:"💕", label:"That I cannot love people into being good for me",    p:{cinderella:2,snow:2,aurora:2} },
      { icon:"🌊", label:"That some people are only meant for one chapter",     p:{moana:2,ariel:2} },
      { icon:"🛡️", label:"That protecting someone sometimes means hard truths", p:{mulan:3,raya:2,jasmine:2} },
      { icon:"📚", label:"That understanding someone is not the same as agreeing",p:{belle:3,tiana:2} },
      { icon:"🤝", label:"That real friendship requires real vulnerability always",p:{cinderella:2,rapunzel:2,belle:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"💎", layout:"1col", q:"If your friendship were a fairy tale it would be called...",
    opts:[
      { icon:"❄️", label:"The Queen Who Learned to Trust Again",               p:{elsa:3} },
      { icon:"💕", label:"The Two Hearts That Found Each Other Always",         p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"The Adventurers Who Crossed Every Ocean Together",   p:{ariel:3,moana:3} },
      { icon:"😂", label:"The Friends Who Laughed Through Absolutely Everything",p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"⚔️", label:"The Warriors Who Fought Every Battle Side by Side",  p:{mulan:3,raya:3} },
      { icon:"📚", label:"The Curious Ones Who Found Worlds in Each Other",    p:{belle:3,tiana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌟", layout:"1col", q:"When you are the best version of yourself with friends...",
    opts:[
      { icon:"❄️", label:"I open up completely and let them actually see me",   p:{elsa:3} },
      { icon:"😂", label:"I bring laughter and lightness to everything we do",  p:{rapunzel:3,snow:3,ariel:2} },
      { icon:"💕", label:"I make everyone feel genuinely completely loved",      p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌊", label:"I lead us somewhere none of us expected to go",        p:{moana:3,ariel:2} },
      { icon:"⚔️", label:"I stand up for us all when something goes wrong",     p:{mulan:3,raya:3,jasmine:2} },
      { icon:"📚", label:"I share ideas that change how all of us see things",  p:{belle:3,tiana:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌸", layout:"1col", q:"The truest thing a friend has ever said to you?",
    opts:[
      { icon:"❄️", label:"That my power is beautiful not something to fear",    p:{elsa:3} },
      { icon:"💕", label:"That I am worthy of love exactly as I really am",     p:{cinderella:3,snow:2,aurora:2} },
      { icon:"🌊", label:"That my longing for more is nothing to apologize for",p:{ariel:3,moana:2} },
      { icon:"⚔️", label:"That I am braver than I have any idea of being",     p:{mulan:3,raya:3} },
      { icon:"📚", label:"That my love of learning is my greatest actual gift", p:{belle:3,tiana:2} },
      { icon:"😄", label:"That my joy is contagious and the world needs it",   p:{rapunzel:3,snow:3,ariel:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"💕", layout:"1col", q:"What does a perfect friendship feel like to you?",
    opts:[
      { icon:"❄️", label:"Like being fully seen and not being afraid anymore",  p:{elsa:3} },
      { icon:"💕", label:"Like coming home to somewhere warm and completely safe",p:{cinderella:3,snow:3,aurora:2} },
      { icon:"🌊", label:"Like an adventure with someone who makes it better",  p:{ariel:3,moana:3} },
      { icon:"😂", label:"Like laughing so hard you forget whatever was wrong", p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"📚", label:"Like exploring a world neither could reach alone",    p:{belle:3,tiana:2} },
      { icon:"⚔️", label:"Like having someone who would fight alongside you always",p:{mulan:3,raya:3,jasmine:2} }
    ]
  },
  { cat:"👯 Friendship", emoji:"🌙", layout:"1col", q:"The friendship superpower you wish you had?",
    opts:[
      { icon:"❄️", label:"Knowing exactly when someone needs space and when they need me",p:{elsa:3,aurora:2,belle:2} },
      { icon:"💕", label:"Making everyone feel instantly loved and truly welcome",p:{cinderella:3,snow:3} },
      { icon:"😂", label:"Saying exactly the right funny thing at the right moment",p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🌊", label:"Knowing when to dive in and when to let someone find their way",p:{moana:3,ariel:2} },
      { icon:"🛡️", label:"Being able to protect everyone I love from everything",p:{mulan:3,raya:3} },
      { icon:"📚", label:"Knowing exactly what each person needs to hear always",p:{belle:3,tiana:2,aurora:2} }
    ]
  }
];
