// ✦ Royal Cache — The Librarian
// Caches the reveal screen and all 12 princess portraits for offline use.
// First visit: caches everything in the background.
// Every visit after: serves instantly from cache, even with no internet.

const CACHE_NAME = 'royal-reveal-v1';

// Files to cache on install
const CORE_ASSETS = [
  './',
  './reveal.html',
  './manifest.json',
  // Princess portraits — full quality from GitHub
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
];

// On install: cache everything
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('✦ Royal Cache: Storing the portraits...');
      // Add all but don't fail the entire install if one missing
      return Promise.all(
        CORE_ASSETS.map(asset =>
          cache.add(asset).catch(err => console.warn('Could not cache', asset, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// On activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// On fetch: cache-first for portraits and core files, network-first for everything else
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin and our asset folder
  if (url.origin !== self.location.origin) return;

  // Cache-first strategy: serve from cache, update cache in background
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetched = fetch(req).then((response) => {
        // Only cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return response;
      }).catch(() => cached); // If network fails, return whatever we had
      return cached || fetched;
    })
  );
});
