import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');
