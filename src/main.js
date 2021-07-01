import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = true;
Vue.prototype.$AddImage = 0;

new Vue({
  render: h => h(App),
}).$mount('#app')

