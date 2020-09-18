import { IAuthState } from "@/utils/types/auth/auth";

export default {
  SET_LOADING(state: IAuthState, payload: boolean) {
    state.loading = payload;
  },
  USER_LOGIN(state: IAuthState, payload: string) {
    state.token = payload;
  }
};
