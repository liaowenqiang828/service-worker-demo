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
      <div class="button-row">
        <MyButton color="danger" name="version three" />
      </div>
      <div class="button-row">
        <MyButton color="danger" name="version three" />
      </div>
      <div class="button-row">
        <MyButton
          v-if="showUpdatedButton"
          color="danger"
          name="----updated----"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import { defineComponent, onMounted, ref } from "@vue/composition-api";

export default defineComponent({
  name: "app",
  components: {
    MyButton,
  },
  setup() {
    const refreshing = ref(false);
    const worker = ref(null);
    const updateExists = ref(false);
    const showUpdateButton = ref(false);

    const showUpdateButtonHandler = () => {
      console.log("service-worker-updated event receive");
      showUpdateButton.value = true;
    };

    onMounted(() => {
      document.addEventListener("service-worker-updated", () =>
        showUpdateButtonHandler()
      );
    });

    return {
      refreshing,
      worker,
      updateExists,
      showUpdateButton,
    };
  },
});
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
