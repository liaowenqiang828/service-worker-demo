<template>
  <div id="app">
    <div id="notification" class="hide-notice">
      A new version of this app is available. Click
      <button id="reload">here</button> to update.
    </div>
    <header>
      <nav>
        <button><router-link to="/">Home</router-link></button>
        <button><router-link to="/button-list">List</router-link></button>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  created() {
    this.$root.$on("event_install", () => console.log("event install receive"));
    this.$root.$on("event_activate", () =>
      console.log("event avtivate receive by on window-------")
    );

    const serviceWorkerMessgeChannel = new BroadcastChannel(
      "serviceWorkerMessge"
    );
    serviceWorkerMessgeChannel.addEventListener("message", (e) => {
      console.log(
        "event receive by channel**************************************",
        e,
        e.data
      );
      // window.location.reload();
    });
  },
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

.hide-notice {
  visibility: hidden;
}

.show-notice {
  visibility: visible;
}
</style>
