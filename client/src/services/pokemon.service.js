import axios from 'axios';
const APIURL = "http://localhost:5000/api/pokemon/"


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
