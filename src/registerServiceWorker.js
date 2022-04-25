/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registered() {
      console.log("Service worker has been registered.");
    },
    updatefound() {
      console.log("New content is downloading.-----------------------------");
      document.dispatchEvent(new CustomEvent("new-version"));
      console.log("service-worker-updated dispatched");
    },
    updated(registration) {
      console.log("New content is available; please refresh.");
      document.dispatchEvent(
        new CustomEvent("serviceWorkerUpdateEvent", { detail: registration })
      );
    },
  });
}
