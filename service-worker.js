// ✦ Royal Cache — The Librarian (v2: ceremony added)
// Caches all reveal + ceremony assets for offline use.

const CACHE_NAME = 'royal-reveal-v5';

const CORE_ASSETS = [
  './',
  './reveal.html',
  './ceremony.html',
  './manifest.json',

  // Princess portraits
  './assets/princesses/elsa.png',
  './assets/princesses/rapunzel.png',
  './assets/princesses/belle.png',
  './assets/princesses/moana.png',
  './assets/princesses/raya.png',
  './assets/princesses/aurora.png',
  './assets/princesses/ariel.png',
  './assets/princesses/tiana.png',
  './assets/princesses/snow-white.png',
  './assets/princesses/mulan.png',
  './assets/princesses/jasmine.png',
  './assets/princesses/cinderella.png',

  // Chambers
  './assets/chambers/lavender-garden.jpg',
  './assets/chambers/scholars-library.jpg',
  './assets/chambers/rose-gold-palace.jpg',
  './assets/chambers/ice-palace.jpg',
  './assets/chambers/twilight-chamber.jpg',
  './assets/chambers/coastal-chamber.jpg',
  './assets/chambers/ocean-palace.jpg',
  './assets/chambers/stargazer-chamber.jpg',

  // Emblems
  './assets/emblems/swan.png',
  './assets/emblems/dove.png',
  './assets/emblems/moon.png',
  './assets/emblems/key.png',
  './assets/emblems/harp.png',
  './assets/emblems/star.png',
  './assets/emblems/flame.png',
  './assets/emblems/leaf.png',
  './assets/emblems/crown.png',
  './assets/emblems/wave.png',
  './assets/emblems/rose.png',

  // Banner
  './assets/banner/banner-skeleton.png',
  './assets/banner/banner-grayscale.png',

  // Dresses (9)
  './assets/dresses/dress-01.png',
  './assets/dresses/dress-02.png',
  './assets/dresses/dress-03.png',
  './assets/dresses/dress-04.png',
  './assets/dresses/dress-05.png',
  './assets/dresses/dress-06.png',
  './assets/dresses/dress-07.png',
  './assets/dresses/dress-08.png',
  './assets/dresses/dress-09.png',

  // Tiaras (14)
  './assets/tiaras/tiara-01.png',
  './assets/tiaras/tiara-02.png',
  './assets/tiaras/tiara-03.png',
  './assets/tiaras/tiara-04.png',
  './assets/tiaras/tiara-05.png',
  './assets/tiaras/tiara-06.png',
  './assets/tiaras/tiara-07.png',
  './assets/tiaras/tiara-08.png',
  './assets/tiaras/tiara-09.png',
  './assets/tiaras/tiara-10.png',
  './assets/tiaras/tiara-11.png',
  './assets/tiaras/tiara-12.png',
  './assets/tiaras/tiara-13.png',
  './assets/tiaras/tiara-14.png',

  // Shoes (12)
  './assets/shoes/shoes-01.png',
  './assets/shoes/shoes-02.png',
  './assets/shoes/shoes-03.png',
  './assets/shoes/shoes-04.png',
  './assets/shoes/shoes-05.png',
  './assets/shoes/shoes-06.png',
  './assets/shoes/shoes-07.png',
  './assets/shoes/shoes-08.png',
  './assets/shoes/shoes-09.png',
  './assets/shoes/shoes-10.png',
  './assets/shoes/shoes-11.png',
  './assets/shoes/shoes-12.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('✦ Royal Cache: Storing the realm...');
      return Promise.all(
        CORE_ASSETS.map(asset =>
          cache.add(asset).catch(err => console.warn('Could not cache', asset, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
