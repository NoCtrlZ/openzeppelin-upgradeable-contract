const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 7545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*',
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          "funny concert mad display erase art spell stairs train village such essay",
          "https://rinkeby.infura.io/v3/df995414148e47f4807318c48283f51b",
          1, /* address_index: default is 0 */
          1 /* num_addresses */
        )
      },
      network_id: 4,
      gas: 5933458
      //websockets: true,
      //gasPrice: web3.utils.toWei("20", "gwei")
      //gasPrice: 70000000000
    }
  }
}
