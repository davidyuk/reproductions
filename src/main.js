import Vue from 'vue'
import { Wallet } from '@aeternity/aepp-sdk/es';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

(async () => {
  const client = await Wallet({
    url: 'https://sdk-testnet.aepps.com',
    internalUrl: 'https://sdk-testnet.aepps.com',
    compilerUrl: 'https://compiler.aepps.com',
  });

  alert('ready');
  console.log('client', client);
})();
