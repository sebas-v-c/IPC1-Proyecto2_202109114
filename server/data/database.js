
module.exports = class {
  table = null;
  constructor(jsonFile) {
    switch (jsonFile) {
      case 'users':
        this.table = require('./users/users.js');
        break;
      case 'pokemon':
        this.table = require('./pokemon/pokemon.json');
    }
  }


  findUserByUsername(username) {
    let user;
    this.table.users.forEach(item => {
      if (item.username === username) {
        user = item;
      }
    });

    return user;
  }


  get table() {
    return this.table;
  }

}
