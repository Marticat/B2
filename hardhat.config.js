
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: {
    version: "0.8.20",  // Укажите нужную версию
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com", // RPC URL
      accounts: [`353a1bc00315b4b6b7191514644d9de4256eaed462602767c87543f19c1cf3f8`] // Приватный ключ
    }
  }
};
