// import { registerRoute } from "workbox-routing";
// import {
//   NetworkFirst,
//   StaleWhileRevalidate,
//   CacheFirst,
// } from "workbox-strategies";

// // Used for filtering matches based on status code, header, or both
// import { CacheableResponsePlugin } from "workbox-cacheable-response";
// // Used to limit entries in cache, remove entries after a certain period of time
// import { ExpirationPlugin } from "workbox-expiration";

// // Cache page navigations (html) with a Network First strategy
// registerRoute(
//   // Check to see if the request is a navigation to a new page
//   ({ request }) => request.mode === "navigate",
//   // Use a Network First caching strategy
//   new NetworkFirst({
//     // Put all cached files in a cache named 'pages'
//     cacheName: "pages",
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   })
// );

// // Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
// registerRoute(
//   // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
//   ({ request }) =>
//     request.destination === "style" ||
//     request.destination === "script" ||
//     request.destination === "worker",
//   // Use a Stale While Revalidate caching strategy
//   new StaleWhileRevalidate({
//     // Put all cached files in a cache named 'assets'
//     cacheName: "assets",
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   })
// );

// // Cache images with a Cache First strategy
// registerRoute(
//   // Check to see if the request's destination is style for an image
//   ({ request }) => request.destination === "image",
//   // Use a Cache First caching strategy
//   new CacheFirst({
//     // Put all cached files in a cache named 'images'
//     cacheName: "images",
//     plugins: [
//       // Ensure that only requests that result in a 200 status are cached
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//       // Don't cache more than 50 items, and expire them after 30 days
//       new ExpirationPlugin({
//         maxEntries: 50,
//         maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
//       }),
//     ],
//   })
// );

workbox.core.setCacheNameDetails({
  prefix: "service-worker-demo-pwa",
  suffix: "v1.0.1",
});

// workbox.routing.registerRoute(
//   new workbox.routing.NavigationRoute(
//     new workbox.strategies.NetworkFirst({
//       cacheName: "service-worker-demo-pwa",
//     })
//   )
// );

workbox.precaching.precacheAndRoute(self.__precacheManifest || [], {});

// self.addEventListener("install", function (event) {
//   console.log("install event");
//   self.skipWaiting();
// });

self.addEventListener("fetch", (event) => {
  // if (event.request.url.endsWith("css")) {
  //   return event.respondWith(fetch(enevt.request));
  // }

  event.respondWith(
    (async function () {
      try {
        console.log("event.request to network", event.request);
        console.log("result from network", await fetch(event.request));
        console.log("event request destination", event.request.destination);
        console.log("event request url", event.request.url);
        console.log(event.request.url.endsWith(".js"));
        return await fetch(event.request);
      } catch (err) {
        console.log("event.request to caches", event.request);
        console.log("result from caches", caches.match(event.request));
        return caches.match(event.request);
      }
    })()
  );
});

self.addEventListener("message", function (event) {
  console.log("event-------------------------------", event);
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

// self.addEventListener("script", (event) => {
//   event.respondWith(
//     (async function () {
//       try {
//         console.log("event.request to network", event.request);
//         console.log("result from network", await fetch(event.request));
//         return await fetch(event.request);
//       } catch (err) {
//         console.log("event.request to caches", event.request);
//         console.log("result from caches", caches.match(event.request));
//         return caches.match(event.request);
//       }
//     })()
//   );
// });

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
