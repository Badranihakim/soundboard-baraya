const CACHE_NAME = "site-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/output.css",
  "/src/media/A.mp3",
  "/src/media/B.mp3",
  "/src/media/C.mp3",
  "/src/media/D.mp3",
  "/src/media/E.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});