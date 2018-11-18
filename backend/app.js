const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://ipfa-user:interoperability-2018@ds163013.mlab.com:63013/ipfa_finance_db';

// Database Name
const dbName = 'ipfa_finance_db';

// Use connect method to connect to the server
MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  //const db = client.db(dbName);

  client.close();
});
