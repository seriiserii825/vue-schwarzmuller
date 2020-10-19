import Vue from 'vue'
import App from './App.vue'
import BadgeCard from './components/BadgeCard'

Vue.config.productionTip = false

Vue.component('badge-card', BadgeCard)

new Vue({
  render: h => h(App),
}).$mount('#app')

