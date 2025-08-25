const CACHE_NAME = 'elisa-portfolio-v1';
const urlsToCache = [
  '/',
  '/app/globals.css',
  '/images/loadingscreen.gif',
  '/images/sky.hdr',
  '/models/me.glb',
  '/models/computerwall.glb',
  '/models/blendermuseum.glb',
  '/models/controller.glb',
  '/models/paper.glb',
  '/models/computer2.glb',
  '/models/glass.glb',
  '/models/djokLogo360.glb',
  '/models/Speakers.glb',
  '/models/Speakers2.glb'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
