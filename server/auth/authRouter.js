const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const database = require('../data/database');
const db = new database('users');


const router = express.Router();


router.post('/logout', (req, res) => {

});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).json({ message: "No username and password fields" });
    }

    const user = db.findUserByUsername(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        user,
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "6h"
        }
      );

      res.status(200).json({ name: username, token: token, avatar: user.avatar });
      return;
    }

    res.status(404).json({ message: "Usuario y/o contraseña incorrectos" })
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;
