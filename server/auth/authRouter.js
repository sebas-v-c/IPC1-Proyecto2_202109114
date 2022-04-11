const express = require('express');

const router = express.Router();


router.post('/login', (req, res) => { });

router.post('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
})


module.exports = router;
