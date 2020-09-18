import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index";

Vue.use(Router);

export const login = "login";
export const financeAccount = "finance-account";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },

    // {
    //   path: '*',
    //   name: ROUTE_CONSTANT.NOT_FOUND,
    //   under: [],
    //   text: '',
    //   icon: '',
    //   component: () => import('@/views/not-found.vue'),
    //   to: {
    //     name: ROUTE_CONSTANT.NOT_FOUND,
    //   },
    //   meta: {
    //     layout: 'defaultLayout',
    //     onSidebar: 'false',
    //     pageTitle: 'Halaman Tidak Ditemukan',
    //     roles: ['all']
    //   }
    // },

    {
      path: "/",
      name: login,
      component: () => import("@/components/page-login/page-login.vue"),
      meta: {
        layout: "DefaultLayout",
        roles: ["all"],
        title: "Halaman Login",
        icon: ""
      },
      beforeEnter: (to, from, next) => {
        if (
          (store as any).state.auth.token !== "" &&
          (store as any).state.auth.token !== undefined
        ) {
          next({ name: financeAccount });
        } else {
          next();
        }
      }
    },

    {
      path: "/finance-account",
      name: financeAccount,
      component: () => import("@/components/page-finance-account/page-finance-account.vue"),
      meta: {
        layout: "DashboardLayout",
        roles: ["all"],
        title: "Halaman Finance Account",
        icon: ""
      },
      beforeEnter: (to, from, next) => {
        if (
          (store as any).state.auth.token !== "" &&
          (store as any).state.auth.token !== undefined
        ) {
          next();
        } else {
          next({ name: login });
        }
      }
    }

    // {
    //   path: '/dashboard',
    //   name: ROUTE_CONSTANT.DASHBOARD_PAGE,
    //   under: [],
    //   text: 'Dashboard',
    //   icon: 'dashboard',
    //   component: () => import('@/views/DashboardPage/index.vue'),
    //   to: {
    //     name: ROUTE_CONSTANT.DASHBOARD_PAGE,
    //   },
    //   meta: {
    //     layout: 'dashboard',
    //     onSidebar: 'true',
    //     pageTitle: 'Halaman Dashboard',
    //     roles: ['broker_user', 'broker_management', 'client', 'insurance_user']
    //   },
    //   beforeEnter(to, from, next) {
    //     if (store.state.auth.userData.role !== "" && store.state.auth.userData.role !== undefined) {
    //       if (['broker_user', 'broker_management', 'client', 'insurance_user'].includes(store.state.auth.userData.role)) {
    //         next();
    //       } else if (store.state.auth.userData.role === 'broker_admin') {
    //         next({
    //           name: ROUTE_CONSTANT.ADMIN_PAGE,
    //           query: {
    //             page: 1,
    //             limit: 10,
    //           }
    //         });
    //       } else {
    //         next({
    //           name: ROUTE_CONSTANT.NOT_FOUND
    //         });
    //       }
    //     } else {
    //       next({
    //         name: ROUTE_CONSTANT.NOT_FOUND
    //       });
    //     }
    //   }
    // },
  ]
});
