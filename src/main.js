import Vue from 'vue';
import App from './App.vue';
import realVh from './plugin/real-vh';

Vue.config.productionTip = false;

Vue.use(realVh);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
