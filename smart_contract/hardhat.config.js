require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/0Y3PM5Jh_vAe7Lwck7UIh7MevVksAnG3",
      accounts: [
        "d0edae8dad2af9a5f37e7edeefa9f8b874399c7b026d7759f0708b6aef07a6e4",
      ],
    },
  },
};
