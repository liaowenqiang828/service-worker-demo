import vuex from "vuex";
import Vue from "vue";

Vue.use(vuex);

const store = new vuex.Store({
  state: {
    message: "",
  },
  mutations: {
    setMessage(state, value) {
      state.message = value;
    },
  },
  getters: {
    message(state) {
      return state.message;
    },
  },
});

export default store;
