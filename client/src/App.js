import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AuthService from "./services/auth.service"
import Login from "./pages/Login"
import Pokedex from "./pages/Pokedex"
import Home from "./pages/Home"
import UserInfo from "./pages/UserInfo"
import MainNavigation from './components/layout/MainNavigation';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined
    }
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }


  logOut() {
    AuthService.logout();
  }



  render() {
    const { currentUser } = this.state;
    return (
      <div>

        <MainNavigation user={currentUser} onClick={this.logOut} />

        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/user' element={<UserInfo />} />
          </Routes>
        </div>


      </div>
    );
  }
}








export default App;
