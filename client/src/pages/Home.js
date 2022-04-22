import React from 'react';
import logo from '../images/pokeinfoLogo.png'



class HomePage extends React.Component {

  render() {
    return (
      <div>
        <img alt='logo' src={logo} />
        <h2>Tu mejor opción en cuanto a información pokemon se trata</h2>
      </div >
    );
  }
}



export default HomePage;
