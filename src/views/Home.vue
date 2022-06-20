<template>
  <div>
    <div>hello world</div>
    <label for="message">Message: </label>
    <input id="message" v-model="message" />
    <label for="messageChange">Message Change: </label>
    <input id="messageChange" @input="messageChangeHandler" />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  methods: {
    messageChangeHandler(event) {
      console.log(event);
      this.$store.commit("setMessage", event.target.value);
    },
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("setMessage", value);
      },
    },
  },
  mounted() {
    // console.log(this.message);
  },
};
</script>

<style></style>
