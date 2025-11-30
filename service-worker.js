self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('lempira-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'dashboard.html',
        'style.css',
        'login.js',
        'logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
