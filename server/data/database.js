
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

    for (let poke in this.table.pokemon) {
      if (this.table.pokemon[poke].numero === id) {
        pokemon = this.table.pokemon[poke];
        break;
      }
    }

    return pokemon;
  }

  findPokemonByName(name) {
    let pokemon;

    for (let poke in this.table.pokemon) {
      if (this.table.pokemon[poke].nombre === name) {
        pokemon = this.table.pokemon[poke];
        break;
      }
    }
    return pokemon;
  }

  findPokemonByType(type) {
    let pokemon = [];
    for (let poke in this.table.pokemon) {
      const current = this.table.pokemon[poke]
      for (let pokeType in current.tipo) {
        if (current.tipo[pokeType] === type) {
          pokemon.push(current);
          break;
        }
      }
    }

    return pokemon;
  }

  findPokemonByParam(param) {
    let pokemon = [];
    let pokeMatch = false;
    for (let poke in this.table.pokemon) {
      const current = this.table.pokemon[poke];
      // Loop through properties in the pokemon object
      for (const prop of Object.keys(current)) {
        // If is an array loop through the elements of the array
        if (Array.isArray(current[prop])) {
          for (let item in current[prop]) {
            if (current[prop][item] === param) {
              pokeMatch = true;
              break;
            }
          }
          continue;
        }
        if (prop === "imagen") {
          continue;
        }

        if (current[prop] === param) {
          pokeMatch = true;
          break;
        }
      }

      if (pokeMatch) {
        pokemon.push(current);
        pokeMatch = false;
      }
    }

    return pokemon;
  }


  get table() {
    return this.table;
  }
}
