export interface ILogin {
  name: string;
  token: string;
}

export interface IAuthLoading {
  [key: string]: boolean;
}

export interface IAuthState {
  loading: IAuthLoading;
  token: string | undefined;
}
