import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth/state";
import account from "./account/state";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: {
      ...auth,
      namespaced: true
    },
    account: {
      ...account,
      namespaced: true
    }
  }
});
