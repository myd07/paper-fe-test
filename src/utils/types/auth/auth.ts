export interface ILogin {
  name: string;
  token: string;
}

export interface IAuthState {
  loading: boolean;
  token: string | undefined;
}
