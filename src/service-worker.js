workbox.core.setCacheNameDetails({
  prefix: "service-worker-demo-pwa",
  suffix: "v1.0.0",
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);


self.addEventListener('install', function(event) {
    self.skipWaiting()
})

self.addEventListener('fetch', function (event) {
    event.respondWith( async function() {
        try {
            return await fetch(event.request);
        } catch {
            return caches.match(event.request)
        }
    }())
})