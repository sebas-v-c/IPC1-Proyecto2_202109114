const bcrypt = require('bcrypt');

const users = [
  {
    "username": "IPC1B",
    "password": bcrypt.hashSync("Prueba123", 10)
  },
  {
    "username": "IPC1F",
    "password": bcrypt.hashSync("Prueba456", 10)
  },
  {
    "username": "zibas",
    "password": bcrypt.hashSync("Itsme344", 10)
  }
];


module.exports = { users };
