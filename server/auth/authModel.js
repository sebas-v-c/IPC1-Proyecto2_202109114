const database = require('../data/database');
const db = new database('users')


function login(username, password) {
  return db.findUserByUsername(username);
}


module.exports = { login };
