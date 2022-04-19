import axios from 'axios';
import authHeader from './auth-header';
const APIURL = "http://localhost:5000/api/users/"


class UserService {
  getPublicContent() {
    return axios.get(APIURL + 'all');
  }

  getPokedexPage() {
    return axios.get(APIURL + 'test', { headers: authHeader() });
  }
}

export default new UserService;
