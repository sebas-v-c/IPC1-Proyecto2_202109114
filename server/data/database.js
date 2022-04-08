


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


  // TODO
  findUserByUsername(username) {
    return {
      "user": "no",
      "password": "$2b$10$fEF0C06py3Cg7CIMyHsiFuB3jcPTX8O7pb4pJNAR77bQ8JnK6Lhr6"
    };

  }



  get table() {
    return this.table;
  }

}
