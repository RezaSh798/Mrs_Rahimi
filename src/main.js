import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;
window.router = router;

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app')
