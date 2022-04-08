const bcrypt = require('bcrypt');

let users = [
  {
    "user": "IPC1B",
    "Password": bcrypt.hashSync("Prueba123", 10)
  },
  {
    "user": "IPC1F",
    "password": bcrypt.hashSync("Prueba456", 10)
  },
  {
    "user": "zibas",
    "password": bcrypt.hashSync("Itsme344", 10)
  }
];


module.exports = { users };
