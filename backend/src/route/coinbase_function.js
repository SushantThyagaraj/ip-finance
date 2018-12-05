var Client = require('coinbase').Client;
const server_info = require('./server_info');

var client = new Client({
  'apiKey': server_info.api_key,
  'apiSecret': server_info.api_secret,
  'version':'2018-11-20'
});
client.getCurrentUser(function(err, user) {
  console.log(user);
});
