import { IAppState } from "@/utils/types/app/app";

export default {
  SELECT_GLOBAL_MODAL: ({ globalModal }: IAppState) => {
    return globalModal;
  }
};
