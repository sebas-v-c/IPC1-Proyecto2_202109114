const express = require('express');
const router = express.Router();
const database = require('../../data/database');
const db = new database('users');

router.get('/all', (req, res) => {
  res.json(db.table);
})

module.exports = router;
