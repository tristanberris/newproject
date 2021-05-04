import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import leftside from "./components/LeftSide.vue"
import navbar from "./components/Navbar.vue"

// Globally register your component
Vue.component('leftside', leftside);
Vue.component('navbar', navbar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
