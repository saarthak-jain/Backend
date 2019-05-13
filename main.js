const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4adcf12f4ef0c7a8d1083464a19bf13915d6d8d9db431b2a350393d13fd2f43f');
const myWalletAddress = myKey.getPublic('hex');

let BlockchainBois = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
BlockchainBois.addTransaction(tx1);

console.log('\nStarting the miner...');
BlockchainBois.minePendingTransactions(myWalletAddress);

console.log('Balance of xavier is', BlockchainBois.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid?', BlockchainBois.isChainValid());