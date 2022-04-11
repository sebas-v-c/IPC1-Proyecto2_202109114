import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../services/auth.service';


const required = value => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert' >
        Este campo es requerido
      </div>
    );
  }
};


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    // State of this component
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };

    // Update view whent typing in the form and handle login logic
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin(event) {

  }

  render() {

  }

}
