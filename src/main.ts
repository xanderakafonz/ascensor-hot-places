
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import '@/styles/main.scss';

Vue.config.productionTip = false;

const SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app');
