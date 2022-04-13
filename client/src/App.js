import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AuthService from "./services/auth.service"
import Login from "./pages/Login"
import Pokedex from "./pages/Pokedex"
import Home from "./pages/Home"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined
    }
    this.navigate = useNavigate();
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
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <Link to={"/"} className="navbar-brand">
            PokeInfo
          </Link>

          {currentUser ? (
            <div className='navbar-nav ml-auto'>
              <li className='nav-item' >
                <Link to={"/pokedex"} className='nav-link'>
                  {currentUser.name}
                </Link>
              </li>
              <li className='nav-item'>
                <a href='/login' className='nav-link' onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link to={'/login'} className='nav-link'>
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pokedex' element={<Pokedex />} />
          </Routes>
        </div>


      </div>
    );
  }
}








export default App;
