<template>
  <div class="hello">
    <template v-for="url in urls">
      <button @click="spend(url)">{{ url }}</button>
      <br>
    </template>
  </div>
</template>

<script>
import { Universal } from '@aeternity/aepp-sdk/es';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    urls: ['https://node.testnet.aeternal.io', 'https://testnet.aeternal.io', 'https://sdk-testnet.aepps.com'],
  }),
  methods: {
    async spend(url) {
      console.warn(url);
      const address = 'ak_23XqqJaRuURJAhkxFZYQkSk4MPCoyKMF2WKPqKdmyHCbYCwH66';
      const sdk = await Universal({
        url,
        internalUrl: url,
        keypair: {
          secretKey: '8e0385e2190848e98b04c5a611bb8b8b7c3060c7950be5b0e7ef24ee45b452348971dbd88292bbbfaf8e6d519f8cda4c5bb57f33003479a5f07e53cf6c92808e',
          publicKey: address,
        },
        address,
      });

      console.log('balance', await sdk.balance(address));
      try {
        console.log(await sdk.spend(1000, 'ak_2swhLkgBPeeADxVTAVCJnZLY5NZtCFiM93JxsEaMuC59euuFRQ'));
      } catch (e) {
        console.error('error', e);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
