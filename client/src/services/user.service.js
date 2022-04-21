import axios from 'axios';
import authHeader from './auth-header';
const APIURL = `http://localhost:${process.env.PORT}/api/users/`


class UserService {
  getPublicContent() {
    return axios.get(APIURL + 'all');
  }

  getPokedexPage() {
    return axios.get(APIURL + 'test', { headers: authHeader() });
  }
}

export default new UserService;
