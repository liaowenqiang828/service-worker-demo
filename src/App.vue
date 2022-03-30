<template>
  <div id="app">
    <div class="content">
      <h3>Button Components</h3>
      <div class="button-row">
        <MyButton />
        <MyButton />
      </div>
      <div class="button-row">
        <MyButton variant="outline" />
        <MyButton variant="outline" />
      </div>
      <div class="button-row">
        <MyButton variant="text" />
        <MyButton variant="text" />
      </div>
      <div class="button-row">
        <MyButton disableShadow />
      </div>
      <div class="button-row">
        <MyButton disabled />
        <MyButton variant="text" disabled />
      </div>
      <div class="button-row">
        <MyButton size="sm" />
        <MyButton size="md" />
        <MyButton size="lg" />
      </div>
      <div class="button-row">
        <MyButton color="default" />
      </div>
      <div class="button-row">
        <MyButton color="primary" />
      </div>
      <div class="button-row">
        <MyButton color="secondary" />
      </div>
      <div class="button-row">
        <MyButton color="danger" name="version three" />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";

export default {
  name: "app",
  components: {
    MyButton,
  },
  data() {
    return {
      refreshing: false,
      worker: null,
      updateExists: false,
    };
  },

  created() {},
  methods: {},
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
