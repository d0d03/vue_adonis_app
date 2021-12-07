import Vue from 'vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';

import App from './App.vue'
import store from './store/store';
import router from './router';
import Panel from './components/Panel.vue';

Vue.config.productionTip = false;

Vue.use(Vuetify);
sync(store, router);

Vue.component('Panel', Panel);

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
