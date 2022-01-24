self.addEventListener('install', event => {
  console.log("service worker installing...")

  event.waitUntil(
    caches.open("cacheName").then(cache => {
      return cache.addAll()
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