// ✦ Royal Realm Service Worker — v16
const CACHE_NAME = 'royal-reveal-v16';

const CORE_ASSETS = [
  './', './index.html', './ceremony.html', './quiz.html',
  './reveal.html', './chat.html', './hall.html',
  './manifest.json', './engine.js', './questions.js', './princesses.js',
  './assets/icons/icon-192.png', './assets/icons/icon-512.png',
  './assets/princesses/belle.png', './assets/princesses/cinderella.png',
  './assets/princesses/aurora.png', './assets/princesses/snow-white.png',
  './assets/princesses/ariel.png', './assets/princesses/jasmine.png',
  './assets/princesses/mulan.png', './assets/princesses/tiana.png',
  './assets/princesses/rapunzel.png', './assets/princesses/elsa.png',
  './assets/princesses/moana.png', './assets/princesses/raya.png',
  './assets/princesses/anna.png', './assets/princesses/merida.png',
  './assets/princesses/pocahontas.png', './assets/princesses/meg.png',
  './assets/chat/speaking-belle.jpg', './assets/chat/speaking-cinderella.jpg',
  './assets/chat/speaking-aurora.jpg', './assets/chat/speaking-snow-white.jpg',
  './assets/chat/speaking-ariel.jpg', './assets/chat/speaking-jasmine.jpg',
  './assets/chat/speaking-mulan.jpg', './assets/chat/speaking-tiana.jpg',
  './assets/chat/speaking-rapunzel.jpg', './assets/chat/speaking-elsa.jpg',
  './assets/chat/speaking-moana.jpg', './assets/chat/speaking-raya.jpg',
  './assets/chat/speaking-anna.jpg', './assets/chat/speaking-merida.jpg',
  './assets/chat/speaking-pocahontas.jpg', './assets/chat/speaking-meg.jpg',
  './assets/landing/door-reflection.jpg', './assets/landing/door-chest.jpg',
  './assets/landing/door-hall.png', './assets/landing/door-kingdom.jpg',
  './assets/chambers/lavender-garden.jpg', './assets/chambers/scholars-library.jpg',
  './assets/chambers/rose-gold-palace.jpg', './assets/chambers/ice-palace.jpg',
  './assets/chambers/twilight-chamber.jpg', './assets/chambers/coastal-chamber.jpg',
  './assets/chambers/ocean-palace.jpg', './assets/chambers/stargazer-chamber.jpg',
  './assets/emblems/swan.png', './assets/emblems/dove.png',
  './assets/emblems/moon.png', './assets/emblems/key.png',
  './assets/emblems/harp.png', './assets/emblems/star.png',
  './assets/emblems/flame.png', './assets/emblems/leaf.png',
  './assets/emblems/crown.png', './assets/emblems/wave.png',
  './assets/emblems/rose.png',
  './assets/dresses/snow-white.png', './assets/dresses/raya.png',
  './assets/dresses/mulan.png', './assets/dresses/belle.png',
  './assets/dresses/cinderella.png', './assets/dresses/elsa.png',
  './assets/dresses/tiana.png', './assets/dresses/ariel.png',
  './assets/dresses/moana.png', './assets/dresses/aurora.png',
  './assets/dresses/jasmine.png', './assets/dresses/Anna.png',
  './assets/dresses/Merida.png', './assets/dresses/Pocahontas.png',
  './assets/dresses/Meg.png', './assets/dresses/Rapunzel.png',
  './assets/tiaras/elsa.png', './assets/tiaras/mulan.png',
  './assets/tiaras/raya.png', './assets/tiaras/aurora.png',
  './assets/tiaras/snow-white.png', './assets/tiaras/rapunzel.png',
  './assets/tiaras/jasmine.png', './assets/tiaras/belle.png',
  './assets/tiaras/cinderella.png', './assets/tiaras/tiana.png',
  './assets/tiaras/moana.png', './assets/tiaras/ariel.png',
  './assets/tiaras/Anna.png', './assets/tiaras/Merida.png',
  './assets/tiaras/Pocahontas.png', './assets/tiaras/Meg.png',
  './assets/shoes/Brown Boots.png', './assets/shoes/Dark Blue Heels.png',
  './assets/shoes/Deep Green and Gold Heels.png', './assets/shoes/Glass Slippers.png',
  './assets/shoes/Light Pink Slippers.png', './assets/shoes/Peach Gold Heels.png',
  './assets/shoes/Purple High Heels.png', './assets/shoes/Teal Slippers.png',
  './assets/shoes/White and Gold Shoes.png', './assets/shoes/White Snow High Heels.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(
        CORE_ASSETS.map(function(asset) {
          return cache.add(asset).catch(function(err) {
            console.warn('Could not cache:', asset, err);
          });
        })
      );
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req).then(function(cached) {
      var fetched = fetch(req).then(function(response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(req, clone); });
        }
        return response;
      }).catch(function() { return cached; });
      return cached || fetched;
    })
  );
});
