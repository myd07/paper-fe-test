import { IStore } from '@/utils/types/store';
import { IAuthState } from '@/utils/types/auth/auth';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const auth: IStore<IAuthState> = {
  state: {
    loading: {},
    token: undefined,
  },
  mutations,
  actions,
  getters,
};

export default auth;
