require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    holesky: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 17000,
    },
  },
};
