import axios from "axios";
const APIURL = "http://localhost:5000/api/auth/"


// Local storage save the data in an xml file
class AuthService {
  // Login function
  login(username, password) {
    // Return the respondse with data, if there is a token store it in localStorage
    return axios
      .post(APIURL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accesToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
  }

  // Logout functoin removing the item in the local storage
  logout() {
    localStorage.removeItem('user');
  }

  // Get the current user and converting to JSON from local storage
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

}


export default new AuthService();
