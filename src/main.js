import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import router from './routes.js'
import store from './store.js'
import App from './App'

Vue.use(VueAxios, axios)
Vue.component('icon', Icon)
Vue.component('doughnut-chart', DoughtnutChart)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  data: {
    sharedState: store.state
  },
  created () {
    store.getCryptoData()
    store.getMarketCap()
  }
});
