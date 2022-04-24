import axios from "axios";

const serverPort = process.env.REACT_APP_SERVPORT || 5000;
const APIURL = `http://localhost:${serverPort}/api/auth/`


// Local storage save the data in an xml file
// Login function
function login(username, password) {
  // Return the respondse with data, if there is a token store it in localStorage
  return axios
    .post(APIURL + "login", {
      username,
      password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
}

// Logout functoin removing the item in the local storage
const logout = () => {
  localStorage.removeItem('user');
}

// Get the current user and converting to JSON from local storage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

const AuthService = {
  login,
  logout,
  getCurrentUser
}

export default AuthService;
