import Vue from 'vue';
import Vuesax from 'vuesax';
import Axios from './common/axiosindex';
import App from './App.vue';
import router from './router';
import store from './store';
import ErrorHandle from './components/ErrorHandle.vue';
import 'vuesax/dist/vuesax.css';

Vue.config.productionTip = false;

// Vue protptype
Vue.prototype.$http = Axios;

// Use Compornent
Vue.use(Vuesax);

// Global Mixin
Vue.mixin(ErrorHandle);


Vue.config.errorHandler = (err) => {
  // console.log(err.message);
  store.dispatch('notification/setMessage', { message: err.message, messageState: false });
};

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
