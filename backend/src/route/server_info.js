const server_info = {
  api_key: process.env.COINBASE_API_KEY,
  api_secret: process.env.COINBASE_API_SECRET,
  bitcoint_address: process.env.SERVER_BITCOIN,
  eth_address: process.env.SERVER_ETH,  
};

module.exports = server_info;