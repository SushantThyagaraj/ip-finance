const civicSip = require('civic-sip-api');
const server_info = require('./server_info');

// Step 4: Initialize instance passing your appId and secret.
Civic.setClient = function(appId, prvKey, appSecret) {
    civicClient = civicSip.newClient({
    appId: 'mPFggvxtj',
    prvKey: server_info.prv_key,
    appSecret: server_info.app_secret,
    })
};
let jwt = token;
Civic.getUser = function(jwt) {
    return civicClient.exchangeCode(jwt).then(function(userData) {

        let result = {};
        userData.data.reduce((previous,item) => {

            if(!item.isValid || !item.isOwner) {
                // TODO: Throw Exception
                return false;
            }

            let label = item.label.split('.');
            label = label[label.length-1];

            result[label] = item.value
        }, null);

        return {id: userData.userId, email: result.email, phonenumber: result.phoneNumber}
    });
};
