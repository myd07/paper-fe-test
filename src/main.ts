import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// NORMALIZE CSS, RESET BROWSER DEFAULT CSS
import 'normalize.css';
// GLOBAL CSS NIT
import '@/assets/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
