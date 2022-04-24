import axios from 'axios';
import authHeader from './auth-header';

const serverPort = process.env.REACT_APP_SERVPORT || 5000;
const APIURL = `http://localhost:${serverPort}/api/users/`


class UserService {
  getPublicContent() {
    return axios.get(APIURL + 'all');
  }

  getPage() {
    return axios.get(APIURL + 'test', { headers: authHeader() });
  }
}

export default new UserService();
