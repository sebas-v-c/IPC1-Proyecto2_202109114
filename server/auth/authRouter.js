const express = require('express');
const passport = require('passport');

const router = express.Router();
const initPassport = require('../passport-config');
initPassport(passport);


router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/api/auth/login',
  failureFlash: true
}));


module.exports = router;
