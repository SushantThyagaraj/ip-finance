var shapeshift = require('shapeshift.io')

/**shapeshift.coins(function (err,coinData) {
  console.dir(coinData)
})**/

var pair = 'btc_xrp'

shapeshift.recent(function(err, recent) {
  console.dir(recent)
})

var shapeshift = require('shapeshift.io')

var withdrawalAddress = 'YOUR_LTC_ADDRESS'
var pair = 'btc_ltc'

var options = {
  returnAddress: 'YOUR_BTC_RETURN_ADDRESS'
}

shapeshift.shift(withdrawalAddress, pair, options, function (err, returnData) {

  var depositAddress = returnData.deposit

  // you need to actually then send your BTC to ShapeShift
  // you could use module `spend`: https://www.npmjs.com/package/spend
  // spend(SS_BTC_WIF, depositAddress, shiftAmount, function (err, txId) { /.. ../ })

  // later, you can then check the deposit status
  shapeshift.status(depositAddress, function (err, status, data) {
    console.log(status) // => should be 'received' or 'complete'
  })
})
