import axios from 'axios';

const serverPort = process.env.REACT_APP_SERVPORT || 5000;
const APIURL = `http://localhost:${serverPort}/api/pokemon/`


class PokemonService {
  // Get any pokemon sended
  getPokemonContent(param, searchText) {
    return axios.get(`${APIURL}${param}/${searchText}`);
  }

  getAllPokemonContent() {
    return axios.get(`${APIURL}`)
  }
}

export default new PokemonService();
