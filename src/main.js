import Vue from 'vue'

// to enable chrome 39 (Android 5.1)
import 'core-js/features/symbol'
import 'core-js/features/set'

// to enable chrome 30 (Android 4.4)
import 'core-js/features/weak-map'
import 'core-js/features/map'
import 'core-js/features/number/is-safe-integer'

import { Universal, Node, MemoryAccount } from '@aeternity/aepp-sdk/es';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

(async () => {
  console.log('inside');
  const node = await Node({
    url: 'https://sdk-testnet.aepps.com',
  });
  console.log('node', node);

  const sdk = await Universal({
    nodes: [{
      name: 'test-net',
      instance: node,
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
