const express = require('express');
const router = express.Router();
const db = require('./usersModel');



router.get('/', (req, res) => {
  res.send(db.getAll());
});




module.exports = router;
