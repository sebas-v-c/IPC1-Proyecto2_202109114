const express = require('express');
const router = express.Router();
const authMidwr = require('../../auth/middleware');
const database = require('../../data/database');
const db = new database('users');

router.get('/all', authMidwr.checkAuthenticated, (req, res) => {
  res.json(db.table);
})

module.exports = router;
