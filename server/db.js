var pg = require('pg');
require('dotenv').config();

// replace "process.env.DB_KEY" with your own database to connect
var conString = process.env.DB_KEY
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  console.log("it works!!!");
  client.end();
});

module.exports = client;