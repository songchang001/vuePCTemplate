import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import $ from 'jquery'
Vue.prototype.$ = $

Vue.use(ElementUI);
import {
  Notification, Message
} from 'element-ui';

Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

function getQueryString(key) {
  var url = window.location.search;
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  var result = url.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : "";
}


Vue.prototype.userCode = getQueryString('usercode') || 'A001'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
