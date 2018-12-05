const civicSip = require('civic-sip-api');

// Step 4: Initialize instance passing your appId and secret.
const civicClient = civicSip.newClient({
  appId: 'CO-ABCDEFG1230934545',
  prvKey: PRIVATE_KEY,
  appSecret: APP_SECRET,
});
