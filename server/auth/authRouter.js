const express = require('express');
const authModel = require('./authModel');

const router = express.Router();

const initializePassport = require('./passport-config');
initializePassport(
  passport
);

router.post('/login', checkNotAuthenticated);


module.exports = router;
