import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
// NORMALIZE CSS, RESET BROWSER DEFAULT CSS
import 'normalize.css';
// GLOBAL CSS NIT
import '@/assets/styles/index.scss';

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
