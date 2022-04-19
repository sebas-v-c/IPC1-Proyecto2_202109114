const express = require('express');
const router = express.Router();
const database = require('../../data/database');
const db = new database('users');
const auth = require('../../auth/middleware');
// const controller = require('./userController');

router.use(function (req, res, next) {
  res.header(
    "Acces-Control-Allow-Headers",
    "x-acces-token, Origin, Content-Type, Accept"
  );
  next();
});


router.get('/test', auth, (req, res) => {
  res.status(200).send("User Logged In")
})



router.get('/all', auth, (req, res) => {
  res.json(db.table);
})


module.exports = router;
