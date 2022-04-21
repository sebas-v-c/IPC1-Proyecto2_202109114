import axios from 'axios';
const APIURL = `http://localhost:${process.env.PORT}/api/pokemon/`


class PokemonService {
  // Get any pokemon sended
  getPokemonContent(param, searchText) {
    return axios.get(`${APIURL}${param}/${searchText}`);
  }

  getAllPokemonContent() {
    return axios.get(`${APIURL}`)
  }
}

export default new PokemonService;
