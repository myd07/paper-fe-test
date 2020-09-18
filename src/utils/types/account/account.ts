export interface IAccount {
  id: number;
  createdAt: string;
  name: string;
  description: string;
  type: string;
}

export interface IAccountLoading {
  [key: string]: boolean;
}

export interface IAccountData {
  [key: string]: IAccount;
}

export interface IAccountState {
  loading: IAccountLoading;
  data: IAccountData;
  accountIds: number[];
}
