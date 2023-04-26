/*
 * @Author: xs
 * @Date: 2023-04-26 10:01:35
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
