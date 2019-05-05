import Vue from 'vue'
import 'es6-shim'
import 'weakmap-polyfill'
import { Universal, Node, MemoryAccount } from '@aeternity/aepp-sdk/es';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

(async () => {
  const sdk = await Universal({
    nodes: [{
      name: 'test-net',
      instance: await Node({
        url: 'https://sdk-testnet.aepps.com',
      }),
    }],
    compilerUrl: 'https://compiler.aepps.com',
    accounts: [MemoryAccount({ keypair: {
        publicKey: 'ak_2dATVcZ9KJU5a8hdsVtTv21pYiGWiPbmVcU1Pz72FFqpk9pSRR',
        secretKey: 'bf66e1c256931870908a649572ed0257876bb84e3cdf71efb12f56c7335fad54d5cf08400e988222f26eb4b02c8f89077457467211a6e6d955edb70749c6a33b',
    }})],
  })
  const height = await sdk.height()
  console.log('sdk', sdk, height);
})();
