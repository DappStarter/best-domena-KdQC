require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food eight repeat noble slow coral light army ghost'; 
let testAccounts = [
"0x23c1ae0273f1244872559db078d0c7d2bee42080d643360c1594ace0bfefe63b",
"0x3ed07275a053dcd3908faab9318301a88718b7b2f1d3d71c8bab54fb3555000e",
"0x8edce87156ba99edafb8be25cfeed4ef3bb2a674ac6a7e386fbb8ea4fcaa9b2d",
"0xde54139416bed6901dc2a62f997679cdb8051d3a00bc9fe40b2e07de74f8d9b2",
"0x997bc0e45a1fe57856a873d96fde2a7a9cda70222f78f2f5e269aa23cf11b94e",
"0xf4932ce48f25c28382659d8702b1a4764bb6a598af7ef7473d6c936d14c9a319",
"0xdca8ea445fb672d02312715f183af1868cfa23455241d4ddcc23e40c32bedbe7",
"0xba3ec49a651bf19518c9a6f85b99f6eab3b5c400decb211d3af7fbb3e7a00226",
"0xb00397f5ef905287db054f54aaf5c4619e9a2bc971097170abedede552d492fd",
"0x228a225ecfa337464ddf2a9212b27cd79eeb9494c4df693d6d958e08caa651c3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


