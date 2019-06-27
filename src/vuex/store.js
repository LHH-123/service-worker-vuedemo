//store.js
import Vue from "vue";
import Vuex from "vuex";
import sw from "./modules/serviceWorker";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sw
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});
