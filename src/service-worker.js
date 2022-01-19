const cacheName = "demoCache";
const urlRoCache = ["/", "./main.js"];

self.addEventListener('install', event => {
  console.log("service worker installing...")

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(urlRoCache)
    })
  )
})

self.addEventListener('fetch', event => {
  console.log("event.request.url", event.request.url);

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})