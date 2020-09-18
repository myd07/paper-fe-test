import { IAppState } from "@/utils/types/app/app";

export default {
  SET_GLOBAL_MODAL(state: IAppState, config: any) {
    state.globalModal = {
      ...state.globalModal,
      ...config
    };
  },
  CLOSE_GLOBAL_MODAL(state: IAppState) {
    state.globalModal.visible = false;
  },
  RESET_GLOBAL_MODAL(state: IAppState) {
    state.globalModal = {
      visible: false,
      hasHead: true,
      deviceType: "all",
      contentStyle: {},
      customClass: "",
      component: "",
      title: "",
      data: undefined
    };
  }
  // SET_GLOBAL_OVERLAY(state: IAppState, config: any) {
  //   state.globalOverlay = {
  //     ...state.globalOverlay,
  //     ...config,
  //   };
  // },
  // CLOSE_GLOBAL_OVERLAY(state: IAppState) {
  //   state.globalOverlay.visible = false;
  // },
  // RESET_GLOBAL_OVERLAY(state: IAppState) {
  //   state.globalOverlay = {
  //     visible: false,
  //     hasHead: true,
  //     deviceType: 'all',
  //     contentStyle: {},
  //     customClass: '',
  //     component: '',
  //     title: '',
  //     data: undefined,
  //   };
  // },
};
