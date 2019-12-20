import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=aeternity&vs_currencies=usd';

(async () => {
  console.log((await axios.get(URL)).data)
})()
