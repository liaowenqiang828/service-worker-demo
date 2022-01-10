<template>
  <div id="app">
  <div class="content">
    <h3>Button Components</h3>
    <div class="button-row">
      <MyButton /> 
      <MyButton /> 
    </div>
    <div class="button-row">
      <MyButton variant="outline"/>
      <MyButton variant="outline"/>
    </div>
    <div class="button-row">
      <MyButton variant="text"/>
      <MyButton variant="text"/>
    </div>
    <div class="button-row">
      <MyButton disableShadow/>
    </div>
    <div class="button-row">
      <MyButton disabled/>
      <MyButton variant="text" disabled/>
    </div>
    <div class="button-row">
      <MyButton size="sm"/>
      <MyButton size="md"/>
      <MyButton size="lg"/>
    </div>
    <div class="button-row">
      <MyButton color="default"/>
    </div>
    <div class="button-row">
      <MyButton color="primary"/>
    </div>
    <div class="button-row">
      <MyButton color="secondary"/>
    </div>
    <div class="button-row">
      <MyButton color="danger"/>
    </div>
  </div>
    <button
      v-if="updateExists"
      @click="refreshApp"
      class="btn"
    >New version available! Click to update</button>
    <div v-else>There's no update yet.</div>
  </div>
</template>

<script>
import MyButton from './components/MyButton.vue'

export default {
  name: "app",
  components: {
    MyButton,
  },
  data() {
    return {
      refreshing: false,
      worker: null,
      updateExists: false
    };
  },

  created() {
    // Listen for swUpdated event and display refresh snackbar as required.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Refresh all open app tabs when a new service worker is installed.
    navigator.serviceWorker &&
      navigator.serviceWorker.addEventListener(
        //triggered by registration.claim
        "controllerchange",
        () => {
          if (this.refreshing) return;
          this.refreshing = true;
          console.log("controllerchange triggered, -> auto refresh!!");
          window.location.reload();
        }
      );
  },

  methods: {
    showRefreshUI(e) {
      // Display a button inviting the user to refresh/reload the app due
      // to an app update being available.
      // The new service worker is installed, but not yet active.
      // Store the ServiceWorkerRegistration instance for later use.
      if (e.detail) {
        this.worker = e.detail;
        this.updateExists = true;
        console.log("Showing refresh button.");
        console.log(this.worker);
      } else {
        console.warn("No worker data found!");
      }
    },
    refreshApp() {
      console.log("skipWaiting started");
      console.log(this.worker);
      // Handle a user tap on the update app button.
      this.updateExists = false;
      // Protect against missing registration.waiting.
      if (!this.worker) {
        console.warn("No worker data found when trying to refresh!");
        return;
      }
      this.worker.postMessage({ type: "SKIP_WAITING" });
      console.log("skipWaiting finished");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
