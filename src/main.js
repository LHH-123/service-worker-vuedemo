import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router";
import store from "@/vuex/store.js"; //vuex
import less from "less";
import Mint from "mint-ui"; //移动端UI
import "mint-ui/lib/style.css";
Vue.use(Mint);
Vue.config.productionTip = false;

window.setTimeout(function() {
  console.log(store);
  store.dispatch("init");
}, 1000);

new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
