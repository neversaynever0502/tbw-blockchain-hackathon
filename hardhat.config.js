require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// require("@nomiclabs/hardhat-waffle");

const path = require("path");
const privateKey = process.env.PRIVATE_KEY;



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    opBNB: {
      url: "https://opbnb-testnet-rpc.bnbchain.org", // BNB測試網RPC URL，根據需要更改
      accounts: [`0x${privateKey}`]
    },
    // 其他網絡配置...
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: path.join(__dirname, "src/smartContract/contracts"),
    tests: path.join(__dirname, "src/smartContract/test"),
    cache: path.join(__dirname, "src/smartContract/cache"),
    artifacts: path.join(__dirname, "src/smartContract/artifacts")
  },
};
