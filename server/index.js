const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
    try {
        console.log(req.body);
        res.json("good job dick head");
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, ()=>{
    console.log("server has started on port 5000")
});