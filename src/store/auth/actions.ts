
export default {
  // async login(context, payload) {
  //   context.commit('POST_LOGIN');
  //   try {
  //     const response = await LoginApi.LOGIN(payload);
  //     context.commit('LOGIN_DONE');
  //     context.commit('LOGIN_SUCCESS', response.content);
  //     router.replace({
  //       name: ROUTE_CONSTANT.DASHBOARD_PAGE
  //     })
  //   } catch (error) {
  //     context.commit('LOGIN_DONE');
  //     message.error(error.response.data.name);
  //   }
  // },
  // appendUserToStore(context, userData) {
  //   context.commit('MAP_USER_TO_STATE', userData);
  // },
  // forceLogout(context) {
  //   context.dispatch('appendUserToStore', {});
  //   router.replace({
  //     name: ROUTE_CONSTANT.HOME_LOGIN
  //   });
  //   const startToken = jwt.sign({ app_id: process.env.VUE_APP_APP_ID }, process.env.VUE_APP_APP_SECRET);
  //   setTokenCookie(startToken);
  // }
};
