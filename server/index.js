const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const client = require('./db');

app.post('/', async (req, res) => {
    try {
        //const results = await client.query('SELECT * FROM your_table');
        res.json("yehas");
    } catch (err) {
        console.log(err);
    }
}); 

app.listen(5000, ()=>{
    console.log("server has started on port 5000")
});