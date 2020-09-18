export interface IGlobalModalState {
  visible: boolean;
  hasHead: boolean;
  deviceType: "all" | "mobile" | "desktop";
  contentStyle: any;
  customClass: string;
  component: string;
  title: string;
  data: any;
}

export interface IAppState {
  globalModal: IGlobalModalState;
}
