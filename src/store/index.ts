import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth/state";
import account from "./account/state";
import app from "./app/state";

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
    },
    app: {
      ...app,
      namespaced: true
    }
  }
});
