import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/css/reset.css'
import 'assets/css/index.css'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
