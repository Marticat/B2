## ERC-20 Token Contract Implementation on Ethereum
This project implements an ERC-20 token contract on the Ethereum blockchain. It allows you to deploy a custom token with the basic functionality to transfer, approve, and manage balances, while also providing key details such as name, symbol, and decimal precision.

# Features
Deploy a custom ERC-20 token.
Transfer tokens between accounts.
Approve and allow delegated transfers.
Query balances and allowances.


# Installation
Follow the steps below to set up the project locally:

1. Clone the Repository

git clone https://github.com/Marticat/B2

2. Install Dependencies
Make sure you have Node.js installed. Then, install the necessary dependencies by running:

npm install

3. Configure Network Settings
   
In hardhat.config.js, set up your wallet and RPC URL for the network you wish to deploy to (e.g., Rinkeby, Goerli, or Ethereum Mainnet).

Deployment
To deploy the contract to a network, use the following command:

npx hardhat run scripts/deploy.js --network <network-name>

Replace <network-name> with the desired network in your Hardhat configuration (e.g., rinkeby or goerli).

# Testing
1. Initial Version Testing
To test the initial version of the smart contract (from Assignment 3, Part 1), ensure your test cases cover all functions defined in the contract, including but not limited to:

Transfer tokens
Approve tokens for delegated transfers
Query balances and allowances
Run the tests with:

npx hardhat test

2. Modified Version Testing
   
For the modified version of the smart contract (as per Assignment 3, Part 2):

Modify the contract's constructor to accept an input parameter (e.g., initialValue or owner address).
Ensure this input is used meaningfully in your contract (e.g., for initializing a state variable).
Write test cases that validate the new functionality added with the modified constructor.

You can run the tests after making modifications:

npx hardhat test

# License

This project is licensed under the MIT License. See the LICENSE file for more information.

# Task Breakdown
Here’s a breakdown of the specific tasks you need to complete for the assignment:

1. Test Cases for Initial Version
Write test cases using Hardhat for the smart contract developed in Assignment 3, Part 1. The test cases should cover:

Token transfers (both successful and failure scenarios)
Approving tokens for delegated transfers
Checking balances and allowances
Any other functions defined in your ERC-20 contract

2. Test Cases for Modified Version
   
Modify the constructor of your smart contract to accept an input parameter (e.g., initialValue or owner address) and initialize the contract state accordingly. Then:

Write new test cases to verify the functionality of the modified version of the smart contract, ensuring that the input parameter is used properly and the state is initialized correctly.
Ensure that the new constructor and features are tested thoroughly.

You can also see screenshots, to see,that token deploying is working
