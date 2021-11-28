const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const client = require('./db');

app.post("/", async (req, res) => {
    try {
      const { description } = req.body;
      await client.connect();
      const resulting = await client.query(
        'INSERT INTO todo (description) VALUES ($1) RETURNING *',
        [description]);
      res.json(resulting.rows[0]);
      await client.end()
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen(5000, ()=>{
    console.log("server has started on port 5000")
});