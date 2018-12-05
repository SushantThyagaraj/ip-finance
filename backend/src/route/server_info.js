const server_info = {
  api_key: process.env.COINBASE_API_KEY,
  api_secret: process.env.COINBASE_API_SECRET,
  bitcoin_address: process.env.SERVER_BITCOIN,
  eth_address: process.env.SERVER_ETH,
  prv_key: process.env.PRIVATE_KEY,
  app_secret: process.env.APP_SECRET
};

module.exports = server_info;
