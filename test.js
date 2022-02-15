const { Node, Universal, MemoryAccount } = require('@aeternity/aepp-sdk');

const contractSource = `
@compiler >= 6

include "String.aes"
include "List.aes"

payable contract VegasMarketContact =


    record state = {
        markets                     : map(address, map(hash, market)),
        user_markets_record         : map(address, map(hash, map(address,int))),
        user_markets_receive_record : map(address, map(hash, map(address,int))),
        oracle_market               : map(hash, list(int)),
        oracle_market_count         : map(hash, int),
        oracle_market_record        : map(hash, map(address, int)),
        owner                       : address,
        aggregator_user             : map(address, string),
        config                      : config}

    record config = {
        oracle_trigger_count : int,
        market_min_time      : int,
        market_max_time      : int}


    record market = {
        market_id     : hash,
        owner         : address,
        content       : string,
        source_url    : string,
        answers       : list(answer),
        create_height : int,
        create_time   : int,
        over_time     : int,
        min_amount    : int,
        total_amount  : int,
        result        : int,
        progress      : int,
        market_type   : int}

    record answer = {
        content  : string,
        count    : int}


    stateful entrypoint
        init : (config) => state
        init (config) =
            let owner                     = Call.caller
            { markets                     = {},
              user_markets_record         = {},
              user_markets_receive_record = {},
              oracle_market               = {},
              oracle_market_count         = {},
              oracle_market_record        = {},
              owner                       = Call.caller,
              aggregator_user             = {},
              config                      = config}




    entrypoint
        get_state:()=>state
        get_state () =
            state
`;

(async () => {
    const node = await Node({ url: 'https://testnet.aeternity.io' })
    const sdk = await Universal({
        nodes: [{ name: 'testnet', instance: node }],
        compilerUrl: 'https://compiler.aepps.com',
        accounts: [MemoryAccount({
            keypair: {
                publicKey: 'ak_2dATVcZ9KJU5a8hdsVtTv21pYiGWiPbmVcU1Pz72FFqpk9pSRR',
                secretKey: 'bf66e1c256931870908a649572ed0257876bb84e3cdf71efb12f56c7335fad54d5cf08400e988222f26eb4b02c8f89077457467211a6e6d955edb70749c6a33b'
            }
        })]
    })

    const contract = await sdk.getContractInstance({
        source: contractSource,
        contractAddress: 'ct_2fbHUPvtWktTfWAd9oDCYCSefEKKy62VBf7L9auzxvS6UVD1my',
    })
    /*const deployInfo = await contract.deploy([{
      oracle_trigger_count: 0,
      market_min_time: -1,
      market_max_time: 86400000 * 30,
    }])
    console.log('Contract deployed at', deployInfo.address)*/
    const result = await contract.methods.get_state();
    console.log(result.decodedResult);
})()
