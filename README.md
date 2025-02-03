This project implements an ERC-20 token contract on the Ethereum blockchain. It allows you to deploy a token with the ability to transfer, approve, and manage balances, while also providing basic token functionality like name, symbol, and decimal precision.

Features
-Deploy a custom ERC-20 token.
-Transfer tokens between accounts.
-Approve and allow delegated transfers.
-Query balances and allowances.

Installation
Clone the repository:

git clone https://github.com/Marticat/B2

Install dependencies:

npm install

Configure network settings in hardhat.config.js (e.g., set your wallet and RPC URL).

Deployment

To deploy the contract to a network:

npx hardhat run scripts/deploy.js --network <network-name>

Testing

To run tests for the initial and modified versions of the smart contract:

npx hardhat test

License
This project is licensed under the MIT License.
