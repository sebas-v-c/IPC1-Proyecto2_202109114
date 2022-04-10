
module.exports = class {
  table = null;
  constructor(jsonFile) {
    switch (jsonFile) {
      case 'users':
        this.table = require('./users/users.js');
        break;
      case 'pokemon':
        this.table = require('./pokemon/pokemon.js');
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

  findPokemonById(id) {
    let pokemon;
    this.table.pokemon.forEach(poke => {
      if (poke.numero === id) {
        pokemon = poke;
      }
    });

    return pokemon;
  }


  get table() {
    return this.table;
  }

}
