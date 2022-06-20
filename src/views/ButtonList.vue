<template>
  <div class="content">
    <h3>Button Components</h3>
    <div class="button-row">
      <MyButton />
    </div>
    <!-- <div class="button-row">
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
    </div> -->
    <!-- <div class="button-row">
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
      <MyButton color="danger" name="----updated----" />
    </div> -->
  </div>
</template>

<script>
import MyButton from "../components/MyButton";
export default {
  name: "ButtonList",
  components: {
    MyButton,
  },
  props: {},
  methods: {},
  beforeCreate() {
    console.log("before create callback in parent");
  },
  created() {
    console.log("created callback in parent");
  },

  beforeMount() {
    console.log("before mounted callback in parent");
  },
  mounted() {
    console.log("mounted callback in parent");
  },
};
</script>

<style></style>
