const civicSip = require('civic-sip-api');
const server_info = require('./server_info');

// Step 4: Initialize instance passing your appId and secret.
const civicClient = civicSip.newClient({
  appId: 'mPFggvxtj',
  prvKey: server_info.prv_key,
  appSecret: server_info.app_secret,
});

civicClient.exchangeCode(jwtToken)
    .then((userData) => {
        // store user data and userId as appropriate
        console.log('userData = ', JSON.stringify(userData, null, 4));
    }).catch((error) => {
        console.log(error);
    });

var button = document.querySelector('#signupButton');
button.addEventListener('click', function () {
  civicSip.signup({
    style: 'popup',
    scopeRequest: civicSip.ScopeRequests.BASIC_SIGNUP
  });
});
