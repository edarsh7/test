const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const client  = require('./db');

app.get('/', async (req, res) => {
    try {
        const results = await client.query('SELECT * FROM your_table');
        res.json(results);
    } catch (err) {
        console.log(err);
    }
});