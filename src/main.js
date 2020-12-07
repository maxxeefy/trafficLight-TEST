import Vue from 'vue'
import App from './App.vue'
import router from './router'
import color from './components/color'
import timer from './components/timer'

Vue.config.productionTip = false
Vue.component('color', color)
Vue.component('timer', timer)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
