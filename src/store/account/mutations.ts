import { IAccount, IAccountState, IAccountData } from "@/utils/types/account/account";

function mapAccountData(data: IAccountData, accounts: IAccount[]) {
  const newData = { ...data };
  for (let index = 0; index < accounts.length; index++) {
    const account = accounts[index];
    if (newData[account.id]) {
      newData[account.id] = account;
    } else {
      Object.assign(newData, {
        [account.id]: account
      });
    }
  }
  return newData;
}

export default {
  SET_LOADING(state: IAccountState, { uri, payload }: any) {
    state.loading[uri] = payload;
  },
  SET_ACCOUNT_DATA(state: IAccountState, accounts: IAccount[]) {
    const data = mapAccountData(state.data, accounts);
    state.data = data;
  },
  SET_ACCOUNT_IDS(state: IAccountState, accounts: IAccount[]) {
    const ids = accounts.map(account => account.id);
    state.accountIds = Array.from(new Set([...state.accountIds, ...ids]));
  }
};
