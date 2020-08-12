import Vue from 'vue'
import App from './App.vue'

// import VeeValidate from 'vee-validate'
import router from './router'

import vuetify from './plugins/vuetify';

window.router = router;
// Vue.use(VeeValidate);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
