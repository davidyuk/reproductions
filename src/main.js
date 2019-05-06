import Vue from 'vue'
import { salt } from '@aeternity/aepp-sdk/es/utils/crypto';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(salt());
