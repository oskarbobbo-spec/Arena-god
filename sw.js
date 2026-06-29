const CACHE = 'arena-god-v1';
const FILES = [
  '/Arena-god/',
  '/Arena-god/index.html',
  '/Arena-god/manifest.json',
  '/Arena-god/icon-192.png',
  '/Arena-god/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});