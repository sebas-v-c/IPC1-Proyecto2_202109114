const express = require('express');
// const Joi = require('joi');
const app = express();
const cors = require('cors');

app.use(cors());











const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
