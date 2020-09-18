import Axios from "@/api/axios";
import router from "@/router";

export default {
  async FETCH_ACCOUNT({ commit }: any, { params, payload }: any) {
    try {
      commit("SET_LOADING", true);
      const response = await Axios({
        method: "GET",
        url: "finance-accounts",
        params,
        data: payload
      });
      commit("SET_ACCOUNT_DATA", response.data);
      commit("SET_LOADING", false);
      router.replace("/finance");
    } catch (error) {
      console.log("login error", error);
      commit("SET_LOADING", false);
    }
  }
};
