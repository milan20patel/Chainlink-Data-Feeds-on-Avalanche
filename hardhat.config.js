require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.4",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: {
        mnemonic: ""
      }
    }
  },
  abiExporter: {
    path: 'abi/abi.json', 
    clear: true,
    flat: true
  }
};
