const Web3 = require('web3');

// Replace the provider URL with your Ethereum node URL
const providerUrl = 'http://localhost:8545'; // Example URL for a local Ethereum node

const web3 = new Web3(providerUrl);

// Example usage: Get the latest block number
web3.eth.getBlockNumber().then(blockNumber => {
  console.log('Latest block number:', blockNumber);
}).catch(error => {
  console.error('Error:', error);
});
