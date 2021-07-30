# Charity_bazzar

A charity bazzar Dapp built with **Ethereum Solidity** and **ReactJS**.

## Requirements

[ganache-cli](https://www.npmjs.com/package/ganache-cli) for making copy of local blockchain.

[truffle](https://www.trufflesuite.com/) for Dapp related operations.

[node v12.13.0](https://nodejs.org/en/blog/release/v12.13.0/) for js and npm support and **note: version matters!**

## Run the project

`ganache-cli` to start local blockchain

`truffle migrate` to upload contracts to blockchain

`npm install` to install dependencies

`npm start` to run the project

## What is does

In our charity bazzar, people bid and sell product for chairity purpose. The income from the trading is intented to donate for charity.

### Auction flow

The buying and selling process in the bazaar is auction based. Each buyer needs to bid for their desired item, and admin will confirm the orders to finalized the orders. Only the buyer with highest bid can purchase the item. The transaction needs to be perform when making the bid, and the amount will be returned to the buyer if his proposal is not selected.

### Credit system

Buyers need to have at least 1 credit to place a bid. Each successful purchase (i.e. accepted bid) will reward the buyer one credit. Buyer can also make donation to the chairity to earn extra credit.

When a buyer places a bid, and cancel the transaction before the auction result is finalized, 1 credit will be deducted from the user. 

Each new uesr will be given 3 credits when they join the bazaar first time. 

### Admin

Bazaar admin is the people who deployed the contract. Only admin can upload items for auction, as well as confirming the orders to finalize the auction results. 
