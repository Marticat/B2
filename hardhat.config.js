
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
      url: "", // RPC URL
      accounts: [``] // Приватный ключ
    }
  }
};
