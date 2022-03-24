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
            console.log("event.request to network", event.request);
            console.log("result from network", await fetch(event.request));
            return await fetch(event.request);
        } catch {
            console.log("event.request to caches", event.request);
            console.log("result from caches", caches.match(event.request));
            
            return caches.match(event.request)
        }
    }())
})