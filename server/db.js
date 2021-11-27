const { Client } = require('pg');
require('dotenv').config();

// replace "process.env.DB_KEY" with your own database to connect
const client = new Client({
  user: 'ndhwtyac',
  password: process.env.DB_PASS,
  host: 'kashin.db.elephantsql.com',
  database: 'ndhwtyac',
  connectionString: process.env.DB_KEY
})

module.exports = client; 