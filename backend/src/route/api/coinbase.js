var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': 'HqS5inUQS2uyk9eB',
  'apiSecret': 'GCL6r6gKuIIXHtFZuDgYFlJdT72mYrQD',
  'version':'2018-12-04'
});

client.getPaymentMethods(function(err, paymentMethods) {
  console.log(paymentMethods);
});
