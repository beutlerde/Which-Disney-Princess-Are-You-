/* ═══════════════════════════════════════════════
   QUESTIONS — Food & Feasting (25)
   ═══════════════════════════════════════════════ */
const Q_FOOD = [
  { cat:"🍽️ Food", emoji:"🍽️", layout:"visual", q:"Your ideal royal feast?",
    opts:[
      { icon:"🌺", label:"Exotic Spices",    desc:"Dishes from distant lands",       p:{jasmine:3,ariel:2,moana:2} },
      { icon:"❄️", label:"Ice Buffet",       desc:"Everything beautifully frozen",   p:{elsa:3} },
      { icon:"🎂", label:"Pastries and Sweets",desc:"Towers of delicate desserts",   p:{belle:3,tiana:2,cinderella:2} },
      { icon:"🌊", label:"Fresh Seafood",    desc:"Straight from the ocean today",   p:{ariel:3,moana:3} },
      { icon:"🍳", label:"Gourmet Spread",   desc:"I cooked it all with love",       p:{tiana:3,snow:2,rapunzel:2} },
      { icon:"🍖", label:"Hearty Feast",     desc:"Meats, pies and warming stews",   p:{mulan:2,snow:1} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍰", layout:"visual", q:"Your favorite sweet?",
    opts:[
      { icon:"🎂", label:"Elaborate Cake",   desc:"The bigger the better always",    p:{tiana:3,rapunzel:2,snow:2} },
      { icon:"❄️", label:"Shaved Ice",       desc:"Every magical flavor imaginable", p:{elsa:3} },
      { icon:"🍎", label:"Apple Tart",       desc:"Warm, perfect from the oven",     p:{snow:3,cinderella:2,belle:1} },
      { icon:"🍫", label:"Chocolate Mousse", desc:"Rich and deeply satisfying",      p:{belle:3,jasmine:2,aurora:2} },
      { icon:"🫐", label:"Berry Crumble",    desc:"Made with wild foraged berries",  p:{moana:2,snow:2} },
      { icon:"🌺", label:"Rose Macarons",    desc:"Delicate and achingly beautiful", p:{belle:2,aurora:3,cinderella:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍳", layout:"1col", q:"Your relationship with cooking?",
    opts:[
      { icon:"👩‍🍳", label:"I am a serious chef — I study the craft properly",  p:{tiana:3,belle:2,mulan:1} },
      { icon:"😄", label:"I love it — messy, joyful and completely wonderful", p:{rapunzel:3,snow:2,ariel:1} },
      { icon:"❄️", label:"I create food that has an element of magic somehow", p:{elsa:3} },
      { icon:"🌿", label:"I make simple beautiful things from nature's gifts", p:{moana:3,raya:2} },
      { icon:"✨", label:"I would honestly rather have a spell cook for me",   p:{cinderella:3,aurora:2,snow:2} },
      { icon:"❌", label:"I am a genuine disaster in any kitchen",              p:{ariel:3,jasmine:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌺", layout:"visual", q:"Your drink of choice?",
    opts:[
      { icon:"❄️", label:"Sparkling Ice Water",desc:"Pure, cool and crystalline",   p:{elsa:3} },
      { icon:"🌹", label:"Rose Tea and Honey", desc:"Warm, romantic and perfect",   p:{belle:3,aurora:2,cinderella:2} },
      { icon:"🌊", label:"Fresh Coconut Water",desc:"Straight from the shell",      p:{moana:3,ariel:2} },
      { icon:"🍎", label:"Spiced Apple Cider", desc:"Warm by a cozy fire",          p:{snow:3,cinderella:1} },
      { icon:"☕", label:"Strong Coffee",      desc:"I have far too much to do",    p:{tiana:3,mulan:2} },
      { icon:"✨", label:"Magical Potion",     desc:"Something extraordinary always",p:{ariel:3,rapunzel:2,cinderella:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌿", layout:"1col", q:"Trying new foods — your approach?",
    opts:[
      { icon:"😍", label:"I will try literally anything — the stranger the better",p:{ariel:3,jasmine:3,rapunzel:2} },
      { icon:"🤔", label:"I research it carefully and then try it thoughtfully",   p:{belle:3,tiana:1,mulan:1} },
      { icon:"❄️", label:"I prefer familiar flavors — I have very refined tastes",p:{elsa:3,aurora:2} },
      { icon:"😊", label:"Happily — new food is one of life's great adventures",  p:{moana:2,snow:2,cinderella:2} },
      { icon:"🌿", label:"Only if it is natural and locally made with care",       p:{moana:3,raya:2} },
      { icon:"🏃", label:"Whatever is fastest — food is fuel to me",              p:{mulan:3,raya:2,tiana:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍖", layout:"2col", q:"Your breakfast food personality?",
    opts:[
      { icon:"🥐", label:"Croissant and Jam",    desc:"A refined morning",             p:{belle:3,aurora:2,cinderella:2} },
      { icon:"❄️", label:"Nothing at all",        desc:"Cold efficiency at its finest", p:{elsa:3,mulan:2} },
      { icon:"🍳", label:"Full Cooked Breakfast", desc:"Fuel for real adventure",       p:{mulan:2,tiana:2} },
      { icon:"🌊", label:"Tropical Fruit Bowl",   desc:"Light, fresh and beautiful",    p:{ariel:2,moana:3,jasmine:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🎂", layout:"1col", q:"You bake for someone you love. You make...",
    opts:[
      { icon:"🎂", label:"An elaborate three-layer cake that takes all day",     p:{tiana:3,rapunzel:2,snow:2} },
      { icon:"❄️", label:"Something with ice cream and crystalline sugar work", p:{elsa:3} },
      { icon:"🍎", label:"A perfect apple pie — warm, classic and comforting",  p:{snow:3,cinderella:2} },
      { icon:"🌺", label:"Exotic lavender and rose shortbread cookies",          p:{aurora:3,belle:2,jasmine:1} },
      { icon:"🍩", label:"My special beignet recipe — they are simply perfect", p:{tiana:3} },
      { icon:"🫐", label:"Wild berry scones made completely from scratch",       p:{moana:2,snow:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌊", layout:"2col", q:"Best seaside food?",
    opts:[
      { icon:"🦞", label:"Grilled Lobster",    desc:"Oceanic luxury",          p:{ariel:3,moana:3,jasmine:1} },
      { icon:"❄️", label:"Ice Cream by the Sea",desc:"Cool and always perfect",p:{elsa:3,snow:2} },
      { icon:"🐚", label:"Fresh Clam Chowder", desc:"Coastal warmth always",   p:{ariel:2,moana:2,cinderella:1} },
      { icon:"🐠", label:"Fish I Caught Myself",desc:"Simple perfection",      p:{moana:3,raya:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌿", layout:"1col", q:"Your philosophy on food?",
    opts:[
      { icon:"💕", label:"Food is love — sharing it is the entire point",       p:{tiana:3,snow:2,cinderella:2} },
      { icon:"🌿", label:"Food should come from the earth completely naturally", p:{moana:3,raya:2} },
      { icon:"❄️", label:"Food should be beautiful, architectural and perfect", p:{elsa:3,belle:2,aurora:2} },
      { icon:"✨", label:"Food should be both beautiful and deeply delicious",  p:{belle:2,rapunzel:2,jasmine:2} },
      { icon:"🏃", label:"Food is energy — eat well and keep moving",           p:{mulan:3,raya:2,tiana:1} },
      { icon:"🎭", label:"Food is an art form and a complete adventure",        p:{tiana:3,ariel:2,jasmine:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🎉", layout:"1col", q:"Best dish for a royal party?",
    opts:[
      { icon:"🍳", label:"My world-famous dish I have perfected over years",   p:{tiana:3} },
      { icon:"🌺", label:"Moroccan-inspired lamb with aromatic spices",        p:{jasmine:3,ariel:1} },
      { icon:"❄️", label:"An ice sculpture centerpiece with frozen delights",  p:{elsa:3} },
      { icon:"🎂", label:"A five-tier centerpiece cake that stuns everyone",   p:{snow:2,rapunzel:3,cinderella:2} },
      { icon:"🌊", label:"Fresh seafood platter from this morning's sea",      p:{ariel:3,moana:3} },
      { icon:"🍖", label:"A whole roasted feast for every single person",      p:{mulan:2,snow:1} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌙", layout:"2col", q:"Your midnight snack?",
    opts:[
      { icon:"🍎", label:"Apple Slices",       desc:"Classic and crisp",       p:{snow:3,cinderella:2} },
      { icon:"❄️", label:"Ice Water or Nothing",desc:"Cool and minimal",       p:{elsa:3,mulan:1} },
      { icon:"🧀", label:"Cheese and Bread",   desc:"Simple satisfaction",     p:{belle:3,tiana:1} },
      { icon:"🍩", label:"A Leftover Treat",   desc:"Always absolutely perfect",p:{tiana:3,rapunzel:1} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌺", layout:"2col", q:"Spice level?",
    opts:[
      { icon:"❄️", label:"Mild",      desc:"I appreciate subtle flavors",  p:{cinderella:2,snow:2,elsa:2} },
      { icon:"🌶️", label:"Medium",    desc:"A pleasant kick is just right",p:{belle:2,tiana:2,ariel:2} },
      { icon:"🔥", label:"Hot",       desc:"I genuinely love the burn",    p:{jasmine:3,mulan:2,raya:2} },
      { icon:"💥", label:"Extra Hot", desc:"This is a personal challenge", p:{jasmine:3,moana:2,raya:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍳", layout:"1col", q:"Cooking style?",
    opts:[
      { icon:"📋", label:"Recipe followed precisely — cooking is a real science",p:{tiana:3,belle:2,mulan:1} },
      { icon:"✨", label:"Completely freeform — I improvise and invent always",  p:{rapunzel:3,ariel:2,snow:2} },
      { icon:"❄️", label:"I create dishes that have never existed before",      p:{elsa:3} },
      { icon:"🌿", label:"Simple ingredients used with real skill",             p:{moana:3,raya:2} },
      { icon:"🎨", label:"Food as pure art — I plate like a real painter",     p:{tiana:3,jasmine:2,aurora:1} },
      { icon:"🏃", label:"Fast and efficient — no time for complicated",        p:{mulan:3,raya:2,moana:1} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍰", layout:"2col", q:"Birthday cake flavor?",
    opts:[
      { icon:"🍫", label:"Rich Dark Chocolate",   p:{belle:3,jasmine:2,ariel:2} },
      { icon:"🍓", label:"Strawberry and Cream",  p:{cinderella:3,snow:3,aurora:2} },
      { icon:"❄️", label:"Vanilla Ice Cream Cake",p:{elsa:3,snow:2} },
      { icon:"🥜", label:"Pecan and Caramel",     p:{tiana:3} },
      { icon:"🌊", label:"Coconut and Lime",      p:{moana:3,ariel:2} },
      { icon:"🌸", label:"Rosewater and Pistachio",p:{jasmine:3,aurora:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌿", layout:"1col", q:"Dining solo?",
    opts:[
      { icon:"😍", label:"A real treat — I eat exactly everything I want",      p:{jasmine:3,belle:2,elsa:2} },
      { icon:"📖", label:"I read while I eat — maximum perfect efficiency",     p:{belle:3,aurora:2,rapunzel:2} },
      { icon:"😕", label:"Honestly sad — food is so much better together",     p:{snow:3,cinderella:2,rapunzel:2} },
      { icon:"😊", label:"Perfectly fine — I actually enjoy the quiet",        p:{mulan:2,belle:2,elsa:2} },
      { icon:"🌿", label:"I eat in nature — the absolute best company",        p:{moana:3,raya:2} },
      { icon:"🎵", label:"I cook and sing to myself the entire whole time",    p:{tiana:3,ariel:3,snow:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌙", layout:"1col", q:"Your ultimate comfort food?",
    opts:[
      { icon:"❄️", label:"Something cold and sweet — ice cream always",        p:{elsa:3,snow:2} },
      { icon:"🍎", label:"A warm apple dish — it tastes exactly like home",    p:{snow:3,cinderella:2} },
      { icon:"🍳", label:"Something I cooked from scratch with my own hands",  p:{tiana:3,snow:2,rapunzel:2} },
      { icon:"🌺", label:"Rich aromatic food with complex beautiful spices",   p:{jasmine:3,ariel:1} },
      { icon:"🌊", label:"Seafood — the very taste of the ocean itself",       p:{ariel:3,moana:3} },
      { icon:"📚", label:"Anything warm eaten curled up reading a book",       p:{belle:3,aurora:2,rapunzel:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌿", layout:"1col", q:"Food you could eat every single day?",
    opts:[
      { icon:"❄️", label:"Something fresh and cold — I love simple things",    p:{elsa:3} },
      { icon:"🍎", label:"Apples in every possible form imaginable",           p:{snow:3,cinderella:2} },
      { icon:"🍳", label:"My signature dish — I never ever tire of it",        p:{tiana:3} },
      { icon:"🌺", label:"Something full of exotic wonderful spices",          p:{jasmine:3,ariel:1} },
      { icon:"🌊", label:"Fresh fish and coconut every single morning",        p:{moana:3,ariel:2} },
      { icon:"🎂", label:"Something sweet — life is too short to skip dessert",p:{rapunzel:3,snow:2,cinderella:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🎉", layout:"1col", q:"Cooking for others feels like...",
    opts:[
      { icon:"💕", label:"The most genuine expression of love I know",          p:{tiana:3,snow:2,cinderella:2} },
      { icon:"❄️", label:"Creating something beautiful for people to enjoy",   p:{elsa:3,belle:2} },
      { icon:"🌿", label:"Sharing what the earth has generously given me",     p:{moana:3,raya:2} },
      { icon:"😄", label:"An adventure — what will we discover together",      p:{rapunzel:3,ariel:2} },
      { icon:"🏆", label:"A chance to show what I am genuinely capable of",   p:{tiana:3,mulan:2} },
      { icon:"🎭", label:"Pure art — a chance to create something memorable",  p:{tiana:3,jasmine:2,aurora:1} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🌸", layout:"visual", q:"A food that absolutely represents your spirit?",
    opts:[
      { icon:"❄️", label:"Ice Cream",      desc:"Beautiful, cold and unique",    p:{elsa:3} },
      { icon:"🍎", label:"Apple Pie",      desc:"Classic, comforting and true",  p:{snow:3,cinderella:2} },
      { icon:"🌊", label:"Fresh Sashimi",  desc:"Clean, pure from the deep sea", p:{ariel:3,moana:3} },
      { icon:"🌺", label:"Rich Curry",     desc:"Layered, bold and surprising",  p:{jasmine:3,tiana:2} },
      { icon:"🎂", label:"Layered Cake",   desc:"Complex, joyful and so sweet",  p:{rapunzel:3,tiana:2} },
      { icon:"🌿", label:"Wild Herbs",     desc:"Simple, connected and alive",   p:{moana:2,raya:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍳", layout:"1col", q:"If you were a dish what would you be?",
    opts:[
      { icon:"❄️", label:"A stunning frozen dessert that looks impossible",     p:{elsa:3} },
      { icon:"🌊", label:"Fresh fish with coconut — simple and absolutely perfect",p:{moana:3,ariel:3} },
      { icon:"🎂", label:"A multi-layer masterpiece that took all day to build",p:{tiana:3,rapunzel:2} },
      { icon:"🌹", label:"A delicate rose pastry — beautiful and surprisingly complex",p:{belle:3,aurora:2,cinderella:2} },
      { icon:"🌺", label:"A bold spiced dish that surprises every single time", p:{jasmine:3,ariel:1} },
      { icon:"🍎", label:"A classic perfect dish that comforts everyone always",p:{snow:3,cinderella:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"💎", layout:"1col", q:"Your signature hosting skill?",
    opts:[
      { icon:"❄️", label:"The presentation — everything looks breathtakingly perfect",p:{elsa:3,aurora:2} },
      { icon:"💕", label:"Making every single person feel genuinely welcome",    p:{cinderella:3,snow:3,tiana:2} },
      { icon:"🍳", label:"The actual food — I cook better than anyone here",    p:{tiana:3,snow:1} },
      { icon:"😂", label:"The atmosphere — everyone always has the best time",  p:{rapunzel:3,snow:2,ariel:2} },
      { icon:"🌊", label:"The adventure — every gathering becomes an experience",p:{moana:3,ariel:2} },
      { icon:"📚", label:"The stories — I always have something wonderful to share",p:{belle:3,aurora:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍽️", layout:"1col", q:"What does a perfect meal absolutely need?",
    opts:[
      { icon:"💕", label:"The right people sitting right there with you",        p:{tiana:3,snow:2,cinderella:2} },
      { icon:"❄️", label:"Beauty — it must look as stunning as it tastes",     p:{elsa:3,belle:2,aurora:2} },
      { icon:"🌿", label:"Ingredients that come directly from the living earth",p:{moana:3,raya:2} },
      { icon:"✨", label:"A little magic — something you cannot quite explain", p:{tiana:2,rapunzel:2,cinderella:2} },
      { icon:"🔥", label:"Boldness — food should make you feel something real", p:{jasmine:3,tiana:2,ariel:2} },
      { icon:"🌊", label:"The freshest possible ingredients from their source", p:{ariel:3,moana:3} }
    ]
  },
  { cat:"🍽️ Food", emoji:"🍽️", layout:"1col", q:"Your most controversial food opinion?",
    opts:[
      { icon:"❄️", label:"Cold food is almost always better than hot food",    p:{elsa:3} },
      { icon:"🍎", label:"Fruit is the only sweet thing that truly matters",   p:{snow:3,moana:2,raya:1} },
      { icon:"🍳", label:"Breakfast food is secretly the best food always",    p:{tiana:3,rapunzel:2,snow:2} },
      { icon:"🌺", label:"The spicier the better — always without exception",  p:{jasmine:3,raya:2,mulan:2} },
      { icon:"🌊", label:"Seafood beats land food every single time",           p:{ariel:3,moana:3} },
      { icon:"🎂", label:"Dessert should always come first — life is short",   p:{rapunzel:3,snow:2,cinderella:2} }
    ]
  }
];

Q_FOOD.push(
  { cat:"🍽️ Food", emoji:"🌙", layout:"1col", q:"A food memory that always makes you smile?",
    opts:[
      { icon:"❄️", label:"Making something magical just for myself alone",      p:{elsa:3} },
      { icon:"🍎", label:"The smell of apple pie coming from someone's kitchen",p:{snow:3,cinderella:3,aurora:2} },
      { icon:"🌊", label:"The first time I tasted something from the deep sea", p:{ariel:3,moana:3} },
      { icon:"🍳", label:"My grandmother's recipe that nobody else gets right", p:{tiana:3} },
      { icon:"🌺", label:"A spiced feast that felt like a true adventure",      p:{jasmine:3,ariel:1} },
      { icon:"🎂", label:"A birthday cake someone made just entirely for me",   p:{rapunzel:3,snow:2,cinderella:2} }
    ]
  },
  { cat:"🍽️ Food", emoji:"💫", layout:"1col", q:"Your food spirit animal is...",
    opts:[
      { icon:"❄️", label:"Ice cream — cool, unique and always a little magical",p:{elsa:3} },
      { icon:"🍎", label:"An apple — classic, comforting and endlessly reliable",p:{snow:3,cinderella:2} },
      { icon:"🌊", label:"Sushi — fresh, precise and deeply respectful of its source",p:{ariel:3,moana:3} },
      { icon:"🌺", label:"Curry — complex, layered and full of beautiful surprises",p:{jasmine:3,tiana:2} },
      { icon:"🎂", label:"Cake — joyful, celebratory and always worth sharing",  p:{rapunzel:3,snow:2,aurora:2} },
      { icon:"🍳", label:"Eggs — dependable, versatile and there when you need them",p:{tiana:2,mulan:2,raya:2} }
    ]
  }
);
