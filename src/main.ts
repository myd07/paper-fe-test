import Vue from "vue";
import VueMeta from "vue-meta";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// NORMALIZE CSS, RESET BROWSER DEFAULT CSS
import "normalize.css";
// GLOBAL CSS NIT
import "@/assets/styles/index.scss";
import { setUpAxios } from "@/api/axios";
import { getToken } from "./utils/cookies";

Vue.use(VueMeta);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

const token = getToken();

if (token !== undefined) {
  store.commit("auth/USER_LOGIN", token);
}

setUpAxios();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
