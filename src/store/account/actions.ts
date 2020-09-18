import Axios from "@/api/axios";
import router from "@/router";
import { IAccountHttpResponse } from "@/utils/types/account/account-http";
import { parseAccount } from "./dto";

export default {
  async FETCH_ACCOUNT({ commit }: any, params: any) {
    try {
      commit("SET_LOADING", { uri: "list", payload: true });
      const response = await Axios({
        method: "GET",
        url: "finance-accounts",
        params
      });
      const parsedAccounts = response.data.map((dto: IAccountHttpResponse) => parseAccount(dto));
      console.log(parsedAccounts);
      commit("SET_ACCOUNT_DATA", parsedAccounts);
      commit("SET_ACCOUNT_IDS", parsedAccounts);
      commit("SET_LOADING", { uri: "list", payload: false });
    } catch (error) {
      console.log("fetch account finances", error);
      commit("SET_LOADING", { uri: "list", payload: false });
    }
  }
};
