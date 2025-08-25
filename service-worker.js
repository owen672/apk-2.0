self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("patinaje-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/icons/icon-192.png",
        "/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
