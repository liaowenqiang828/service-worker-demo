if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(regis => {
    for(let reg of regis) {
      reg.unregister()
    }
  })
  console.log("unregister successful")
}

if ('serviceWorker' in navigator) {
  console.log("${process.env.BASE_URL}", `${process.env.BASE_URL}`);

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register("https://dreamy-hamilton-33d7dc.netlify.app/service-worker.js")
      .then(
        (registration) => {
          console.log("service worker register successful", registration.scope);
        },
        (error) => {
          console.log("service worker register failed", error);
        }
      );
  })
}

// if (process.env.NODE_ENV === "production") {
//   register(`${process.env.BASE_URL}service-worker.js`, {
//     ready() {
//       console.log(
//         "App is being served from cache by a service worker.\n" +
//           "For more details, visit https://goo.gl/AFskqB"
//       );
//     },
//     registered(reg) {
//       console.log("Service worker has been registered.");
//       setInterval(() => {
//         reg.update();
//       }, 1000 * 60 * 60); // e.g. hourly checks
//     },
//     cached() {
//       console.log("Content has been cached for offline use.");
//     },
//     updatefound() {
//       console.log("New content is downloading.");
//     },
//     updated(reg) {
//       console.log("New content is available; please refresh.");
//       document.dispatchEvent(
//         new CustomEvent("swUpdated", { detail: reg.waiting })
//       );
//     },
//     offline() {
//       console.log(
//         "No internet connection found. App is running in offline mode."
//       );
//     },
//     error(error) {
//       console.error("Error during service worker registration:", error);
//     },
//   });
// }
