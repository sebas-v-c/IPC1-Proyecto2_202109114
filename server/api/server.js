const express = require('express');
// const Joi = require('joi');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>API trabajando al 100%</h1>');
})

// Set here all the routers





module.exports = app;
