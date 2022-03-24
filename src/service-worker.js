workbox.core.setCacheNameDetails({
  prefix: "service-worker-demo-pwa",
  suffix: "v1.0.0",
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);


self.addEventListener('install', function(event) {
     console.log("install event");
    self.skipWaiting()
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async function () {
      try {
        console.log("event.request to network", event.request);
        console.log("result from network", await fetch(event.request));
        return await fetch(event.request.url);
      } catch (err) {
        console.log("event.request to caches", event.request);
        console.log("result from caches", caches.match(event.request));
        return caches.match(event.request);
      }
    })()
  );
});

// self.addEventListener('fetch', function (e) {
//     e.respondWith(
//         caches.match(e.request).then(function (response) {
//             if (response != null) {
//                 console.log(`fetch:${e.request.url} from cache`);
//                 return response
//             } else {
//                 console.log(`fetch:${e.request.url} from http`);
//                 return fetch(e.request.url)
//             }
//         })
//     )
// })