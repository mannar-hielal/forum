import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppDate from '@/components/AppDate.vue'
import 'bootstrap/dist/js/bootstrap.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFaceSmile, faGlobe)

Vue.config.productionTip = false
Vue.component('AppDate', AppDate)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
