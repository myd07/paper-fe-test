import { IStore } from "@/utils/types/store";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { IAppState } from "@/utils/types/app/app";

const app: IStore<IAppState> = {
  state: {
    globalModal: {
      visible: false,
      hasHead: true,
      deviceType: "all",
      contentStyle: {},
      customClass: "",
      component: "",
      title: "",
      data: undefined
    }
  },
  mutations,
  actions,
  getters
};

export default app;
