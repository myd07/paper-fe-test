export default {
  CLOSE_GLOBAL_MODAL({ commit }: any) {
    try {
      commit("CLOSE_GLOBAL_MODAL");
      setTimeout(() => {
        commit("RESET_GLOBAL_MODAL");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  },
  CLOSE_GLOBAL_OVERLAY({ commit }: any) {
    try {
      commit("CLOSE_GLOBAL_OVERLAY");
      setTimeout(() => {
        commit("RESET_GLOBAL_OVERLAY");
      }, 700);
    } catch (error) {
      console.log(error);
    }
  }
};
