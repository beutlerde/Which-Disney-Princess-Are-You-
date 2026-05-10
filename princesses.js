/**
 * princesses.js
 * Metadata for all 16 Disney princesses in the quiz.
 * 
 * Each princess has:
 *  - id: matches scoring keys in questions.js
 *  - name: display name
 *  - title: poetic title shown on reveal
 *  - voice: signature line shown on reveal
 *  - primary, accent, deep: theme colors for reveal screen
 *  - particle: particle effect type for reveal screen
 *  - portraitUrl: GitHub-hosted reveal portrait
 *  - chatPortraitUrl: GitHub-hosted speaking portrait for chat
 */

const PRINCESSES = {
  'belle': {
    id: 'belle',
    name: 'Belle',
    title: 'The One Whose Mind Could Not Be Caged',
    voice: '"There must be more than this provincial life — and I will read until I find it."',
    primary: '#f4d488',
    accent: '#a87c3c',
    deep: '#2a1a0a',
    particle: 'pages',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/belle-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/belle-chat.jpg'
  },
  'cinderella': {
    id: 'cinderella',
    name: 'Cinderella',
    title: 'The One Whose Kindness Outlasted the Cruelty',
    voice: '"Have courage and be kind — they tried to break me, and instead they made me unbreakable."',
    primary: '#b8d4e8',
    accent: '#6a8aa8',
    deep: '#1a2438',
    particle: 'sparkles-blue',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/cinderella-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/cinderella-chat.jpg'
  },
  'aurora': {
    id: 'aurora',
    name: 'Aurora',
    title: 'The One Who Dreamed Her Way Awake',
    voice: '"I have walked with thee in dreams a thousand times — and the world we made there was real."',
    primary: '#f4b8d4',
    accent: '#a85c8a',
    deep: '#2a0f1f',
    particle: 'petals-rose',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/aurora-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/aurora-chat.jpg'
  },
  'snow-white': {
    id: 'snow-white',
    name: 'Snow White',
    title: 'The Heart That Held the Forest Together',
    voice: '"I will sing to the dark places until they bloom — that is how I have always survived."',
    primary: '#f4e4c8',
    accent: '#c84848',
    deep: '#1a0a0a',
    particle: 'birds',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/snow-white-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/snow-white-chat.jpg'
  },
  'ariel': {
    id: 'ariel',
    name: 'Ariel',
    title: 'The One Who Reached for a World She Had Only Imagined',
    voice: '"I want more than what I was given — and I will trade my voice for the chance to find it."',
    primary: '#48b8d4',
    accent: '#1a6a8a',
    deep: '#0a1f2a',
    particle: 'bubbles',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/ariel-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/ariel-chat.jpg'
  },
  'jasmine': {
    id: 'jasmine',
    name: 'Jasmine',
    title: 'The One Who Refused to Be a Prize',
    voice: '"I am not a treasure to be won — I am the storyteller of my own life."',
    primary: '#48d4b8',
    accent: '#1a7a6a',
    deep: '#0a2a1f',
    particle: 'stars-gold',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/jasmine-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/jasmine-chat.jpg'
  },
  'mulan': {
    id: 'mulan',
    name: 'Mulan',
    title: 'The One Who Carried Her Family\'s Honor in Her Own Hands',
    voice: '"I did not become a warrior to bring honor — I became one because someone I loved needed me to."',
    primary: '#f4a848',
    accent: '#a8541a',
    deep: '#2a1408',
    particle: 'blossoms',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/mulan-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/mulan-chat.jpg'
  },
  'tiana': {
    id: 'tiana',
    name: 'Tiana',
    title: 'The One Who Built Her Dream With Her Own Two Hands',
    voice: '"My dream is not a wish on a star — it is the bread I have baked, the work I have done, the life I have made."',
    primary: '#9ad48a',
    accent: '#4a8a3a',
    deep: '#0f2a08',
    particle: 'fireflies',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/tiana-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/tiana-chat.jpg'
  },
  'rapunzel': {
    id: 'rapunzel',
    name: 'Rapunzel',
    title: 'The One Whose Light Could Not Be Hidden',
    voice: '"The world is so big and I am so small — and yet I am here, finally, and the lights are everywhere."',
    primary: '#f4d4b8',
    accent: '#a86a8a',
    deep: '#2a1424',
    particle: 'lanterns',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/rapunzel-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/rapunzel-chat.jpg'
  },
  'elsa': {
    id: 'elsa',
    name: 'Elsa',
    title: 'The One Who Stopped Apologizing for Her Power',
    voice: '"I will not be afraid of myself anymore — what I was told to hide is the truest thing about me."',
    primary: '#c8e8f4',
    accent: '#5a8aa8',
    deep: '#0f1f2a',
    particle: 'snowflakes',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/elsa-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/elsa-chat.jpg'
  },
  'moana': {
    id: 'moana',
    name: 'Moana',
    title: 'The One Who Sailed Beyond the Reef Her People Forgot',
    voice: '"The voice inside is mine — the call of the sea is mine — and I will follow it past every line they drew."',
    primary: '#48b8a8',
    accent: '#1a6a5a',
    deep: '#0a2a24',
    particle: 'waves',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/moana-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/moana-chat.jpg'
  },
  'raya': {
    id: 'raya',
    name: 'Raya',
    title: 'The Warrior Who Learned to Trust Again',
    voice: '"My world taught me that trust is dangerous — and I will rebuild it anyway, because the world deserves it."',
    primary: '#d4a878',
    accent: '#8a4a2a',
    deep: '#2a0f08',
    particle: 'embers',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/raya-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/raya-chat.jpg'
  },
  'anna': {
    id: 'anna',
    name: 'Anna',
    title: 'The Warm Heart That No Winter Could Freeze',
    voice: '"Some people are worth melting for — and I will keep knocking until thou opens the door."',
    primary: '#a8d4e8',
    accent: '#5a8fa8',
    deep: '#1a2a3a',
    particle: 'snowflakes-warm',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/anna-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/anna-chat.jpg'
  },
  'merida': {
    id: 'merida',
    name: 'Merida',
    title: 'The Archer Who Aimed for Her Own Fate',
    voice: '"My fate is mine — and so is thine. No one else gets to draw thy bow."',
    primary: '#7ab87a',
    accent: '#3a6b3a',
    deep: '#0a1f0a',
    particle: 'wisps',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/merida-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/merida-chat.jpg'
  },
  'pocahontas': {
    id: 'pocahontas',
    name: 'Pocahontas',
    title: 'The One Who Listened Before She Spoke',
    voice: '"The wind has many voices. Be still long enough to hear thine own."',
    primary: '#d4a878',
    accent: '#8a5a2a',
    deep: '#1a0f00',
    particle: 'leaves',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/pocahontas-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/pocahontas-chat.jpg'
  },
  'meg': {
    id: 'meg',
    name: 'Megara',
    title: 'The Heart That Learned to Trust Again',
    voice: '"I won\'t say I\'m in love. But I will show up. Every time."',
    primary: '#c8a8d4',
    accent: '#7a4a8a',
    deep: '#1f0f2a',
    particle: 'petals-pink',
    portraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/meg-reveal.jpg',
    chatPortraitUrl: 'https://raw.githubusercontent.com/beutlerde/Which-Disney-Princess-Are-You-/main/images/meg-chat.jpg'
  }
};

// Ordered list for display purposes
const PRINCESS_IDS = [
  'belle', 'cinderella', 'aurora', 'snow-white', 'ariel', 'jasmine',
  'mulan', 'tiana', 'rapunzel', 'elsa', 'moana', 'raya',
  'anna', 'merida', 'pocahontas', 'meg'
];

// Make available to other scripts loaded in the same page
if (typeof window !== 'undefined') {
  window.PRINCESSES = PRINCESSES;
  window.PRINCESS_IDS = PRINCESS_IDS;
}
