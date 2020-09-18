import Axios from "@/api/axios";
import { removeAuthCookie, setTokenCookie } from "@/utils/cookies";
import router, { financeAccount } from "@/router";

export default {
  async LOGIN({ commit }: any, payload: any) {
    try {
      commit("SET_LOADING", true);
      const response = await Axios({
        method: "POST",
        url: "login",
        data: payload
      });
      setTokenCookie(response.token);
      commit("USER_LOGIN", response.token);
      commit("SET_LOADING", false);
      router.replace({
        name: financeAccount
      });
    } catch (error) {
      console.log("login error", error);
      commit("SET_LOADING", false);
    }
  },
  async LOGOUT({ commit }: any) {
    try {
      removeAuthCookie();
      commit("USER_LOGIN");
      router.replace("/");
    } catch (error) {
      console.log("LOGOUT error", error);
    }
  }
};
