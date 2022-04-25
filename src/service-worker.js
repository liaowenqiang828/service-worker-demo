workbox.core.setCacheNameDetails({
  prefix: "service-worker-demo-pwa",
  suffix: "v1.0.3",
});

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
        // console.log("event.request to network", event.request);
        // console.log("result from network", await fetch(event.request));
        // console.log("event request destination", event.request.destination);
        // console.log("event request url", event.request.url);
        // console.log(event.request.url.endsWith(".js"));
        return await fetch(event.request);
      } catch (err) {
        // console.log("event.request to caches", event.request);
        // console.log("result from caches", caches.match(event.request));
        return caches.match(event.request);
      }
    })()
  );
});

self.addEventListener("message", function (event) {
  console.log("event skipWaiting", event);
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
