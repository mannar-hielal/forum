import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppDate from '@/components/AppDate.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/styles.scss'

Vue.config.productionTip = false
Vue.component('AppDate', AppDate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
