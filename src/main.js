import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = true;
Vue.prototype.$BASE_IMAGE_URL = 'http://192.144.37.95/images/';
Vue.prototype.$BASE_API = 'http://192.144.37.95:8080/api/';

new Vue({
  render: h => h(App),
}).$mount('#app')

