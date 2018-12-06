const civicSip = require('civic-sip-api');
const server_info = require('./server_info');

// Step 4: Initialize instance passing your appId and secret.
const civicClient = civicSip.newClient({
  appId: 'mPFggvxtj',
  prvKey: server_info.prv_key,
  appSecret: server_info.app_secret,
});
