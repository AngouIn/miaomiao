import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'

//prototype
Vue.prototype.axios = axios
Vue.config.productionTip = false

//components
Vue.component('Scroller', Scroller)
Vue.component('Loading', Loading)

//filter
Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/, arg)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
