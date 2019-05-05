import { Wallet } from '@aeternity/aepp-sdk/es';

(async () => {
    const client = await Wallet({
        url: 'https://sdk-testnet.aepps.com',
        internalUrl: 'https://sdk-testnet.aepps.com',
        compilerUrl: 'https://compiler.aepps.com',
    });

    console.log('client', client);
})();

export default undefined;
