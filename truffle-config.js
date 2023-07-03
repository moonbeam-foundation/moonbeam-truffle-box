const HDWalletProvider = require('@truffle/hdwallet-provider');

// Moonbeam Development Node Private Key
const privateKeyDev =
  '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';
// Moonbase Alpha Private Key --> Please change this to your own Private Key with funds
// NOTE: Do not store your private key in plaintext files
//       this is only for demonstration purposes only
const privateKeyMoonbase =
  'YOUR_PRIVATE_KEY_HERE_ONLY_FOR_DEMONSTRATION_PURPOSES';

// You can use dotenv for environment variables. Please reference .env.example to setup
// your private keys. **If choosing this method, make sure you add your .env file to 
// the .gitignore file so you do not commit it!**
// To use dotenv, you would need to take the following steps:
// 1. Configure it
// require('dotenv').config()
// 2. Use it
// process.env.PRIVATE_KEY

module.exports = {
  networks: {
    // Moonbeam Development Network
    dev: {
      provider: () => {
        if (!privateKeyDev.trim()) {
          throw new Error(
            'Please enter a private key with funds, you can use the default one'
          );
        }
        return new HDWalletProvider([privateKeyDev], 'http://localhost:9944/');
      },
      network_id: 1281,
    },
    // Moonbase Alpha TestNet
    moonbase: {
      provider: () => {
        if (!privateKeyMoonbase.trim()) {
          throw new Error(
            'Please enter a private key with funds to send transactions to TestNet'
          );
        }
        if (privateKeyDev == privateKeyMoonbase) {
          throw new Error(
            'Please change the private key used for Moonbase to your own with funds'
          );
        }
        return new HDWalletProvider(
          [privateKeyMoonbase],
          'https://rpc.api.moonbase.moonbeam.network'
        );
      },
      network_id: 1287,
    },
  },
  // Solidity 0.8.0 Compiler
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
  // Moonbeam Truffle Plugin & Truffle Plugin for Verifying Smart Contracts
  plugins: ['moonbeam-truffle-plugin', 'truffle-plugin-verify'],
};
