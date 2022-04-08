const dbCursor = require('../../data/database');

const db = new dbCursor('users');


function getAll() {
  const results = db.table;
  return results;
}

function getByUsername(username) {
}



module.exports = {
  getAll,
  getByUsername,
}
