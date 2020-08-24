import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import AnimateCSS from 'animate.css'

Vue.config.productionTip = false

Vue.use(AnimateCSS)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
