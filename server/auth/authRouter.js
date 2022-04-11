const express = require('express');
const passport = require('passport');
const { checkAuthenticated, checkNotAuthenticated } = require('./middleware');

const router = express.Router();
const initPassport = require('./passport-config');
initPassport(passport);


router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/homepage',
  failureRedirect: '/api/auth/login',
  failureFlash: true
}));

router.post('/logout', checkAuthenticated, (req, res) => {
  req.logOut();
  res.redirect('/');
})


module.exports = router;
