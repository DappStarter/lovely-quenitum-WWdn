require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name reward stereo punch harvest photo forget gather'; 
let testAccounts = [
"0x5ec53b1f3b536be1ad35657baafbd72304adc895195c6a088ef5d18136f61148",
"0x7896a8914d6fa69343647b0fa8dfdaf069ac90f003fb13186ff47b26644e4fc0",
"0x81edf5b0d514a8703a208867f58261d60050432cf6fb33bb42fd442ba85e9233",
"0x3c24c7c46cb2f328bb9b9b50a2dc3114a41ad573ec0f24c74d82827223c6a5c5",
"0x4833e21fde3d38a0ab0cdc97f6ea0093923ef2431fa612a13625f59f3fd368ca",
"0xcfa28c01945bd801dd708a58ee30b52d18af24b58d87041a92216dd9f113a425",
"0xbea292ab1823d91e9760ba8329cfdcf464536e3493cab05e9e7c71fccba84454",
"0x7d1e72c52d6073d4336d2a0e6ace09f1414c9bb8b0fc5ec519af1eca4aea5441",
"0xe626c93a2a10267c9d617b5a4ca467d822a47295a78abd56fcfef8ba3952f0be",
"0xcb6b07a257daff4dcbdb4dfd53ca06a8504cc64c683859a9838cd3087d734cf8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

