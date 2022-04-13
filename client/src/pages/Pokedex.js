import React from 'react';
import UserService from '../services/user.service';



class PokedexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    };
  }


  componentDidMount() {
    UserService.getPokedexPage()
      .then(
        response => {
          this.setState({
            content: response.data
          });
        },
        error => {
          this.setState({
            content:
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
          });
        }
      );
  }


  render() {
    return (
      <div className='container'>
        <header className='jumbotron'>
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}



export default PokedexPage;
