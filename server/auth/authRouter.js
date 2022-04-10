const express = require('express');
const passport = require('passport');
const authMidwr = require('../auth/middleware');

const router = express.Router();
const initPassport = require('../passport-config');
initPassport(passport);


router.post('/login', authMidwr.checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/homepage',
  failureRedirect: '/api/auth/login',
  failureFlash: true
}));

router.post('/logout', authMidwr.checkAuthenticated, (req, res) => {
  req.logOut();
  res.redirect('/');
})


module.exports = router;
