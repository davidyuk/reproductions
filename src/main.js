import Vue from 'vue'
import { Encoder } from '@aeternity/aepp-calldata'
import App from './App.vue'
import ContractAci from './assets/ContractAci.json'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const encoder = new Encoder(ContractAci)
console.log('Encode', encoder.encode('Test', 'init', [])) // expected 'cb_KxFE1kQfP4oEp9E='
