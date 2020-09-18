import { IAuthState } from "@/utils/types/auth/auth";

export default {
  LOADING(state: IAuthState) {
    return state.loading;
  },
  TOKEN(state: IAuthState) {
    return state.token;
  }
};
