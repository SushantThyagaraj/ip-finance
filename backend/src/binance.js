// Binance as an exchange, does not look viable as of right now so IGNORE
const binance = require('node-binance-api')().options({
APIKEY: 'Lhmyb5sLBqjJrpjRWSc1H2hQQ5vSuwINRGiOiadpMcU7858nnLKo9S0i9XboVHxp',
APISECRET: 'Acw4KZVfu4uZLuo3jgeobJfceFIs5zWMPWOcGAsExUfEWYMMop07ASKHZET8hQ5m',
useServerTime: true,
test: true
});

//const instance1 = new binance().options({

//});

//const instance2 = new binance().options({
//});

binance.prices((error, ticker) => {
  console.log("prices(): ", ticker);
  console.log('Price of BTC:', ticker.BTCUSDT);
});

binance.useServerTime(() =>
binance.balance((error, balances) => {
  if ( error ) return console.error(error.body);
  console.log("balances()", balances);
  if ( typeof balances.ETH !== "undefined" ) console.log("ETH balance: ", balances.ETH.available);
}));
