import { IAccountState } from "@/utils/types/account/account";

export default {
  // LOADING(state: IAuthState) {
  //   return state.loading;
  // },
  // TOKEN(state: IAuthState) {
  //   return state.token;
  // },
  SELECT_ACCOUNTS(state: IAccountState) {
    return state.accountIds.map(id => state.data[id]);
  },
  SELECT_LOADING(state: IAccountState) {
    return function(uri: string) {
      return state.loading[uri];
    };
  }
};
