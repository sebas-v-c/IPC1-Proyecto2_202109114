// To retrive data from the server that is protected we need the authorization
// headers., So whit this function we create the header if there is a logged
// user in the current localstorage, else return an empty object

export default function () {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // This header is specific for node.js and express
    // return { Authorization: 'Bearer ' + user.accesToken };
    return { 'x-acces-token': user.accesToken };
  } else {
    return {};
  }
}
