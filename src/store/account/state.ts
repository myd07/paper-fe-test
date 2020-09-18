import { IStore } from "@/utils/types/store";
import actions from "@/store/auth/actions";
import mutations from "./mutations";
import getters from "./getters";
import { IAccountState } from "@/utils/types/account/account";

const auth: IStore<IAccountState> = {
  state: {
    loading: {
      list: false,
      action: false
    },
    data: {},
    accountIds: []
  },
  mutations,
  actions,
  getters
};

export default auth;
