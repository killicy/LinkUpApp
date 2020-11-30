import React from 'react';
import { Component } from 'react';
import {Text, Alert, Button, Image, ImageBackground, SafeAreaView, StyleSheet, TouchableHighlight, View, TextInput } from 'react-native';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      msg: '',
      buttonDisabled: false,
      isLoggedin: false,
    }
  }
  async componentDidMount() {
    try {
      await fetch('https://localhost:5000/api/user/isLoggedIn', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:19006',
        }}).then(response => response.json()).then(data => this.setState({isLoggedin: data.success}));
         if (this.state.isLoggedin) {
         }
         else {
         }
    }
    catch(e) {
      console.log(e);
    }
  }
  setInputValue(property, val) {
    console.log(val);
    if (val.length > 50) {
      return;
    }
    this.setState({
      [property]: val
    })
  }


  doSignUp(){
    this.props.history.push('/Register');
  }
  async doLogin(){
    try{
      await fetch('https://linkup.rocksthe.net:5000/api/user/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:19006',
          },
          body: JSON.stringify({
            Username: this.state.username,
            Password: this.state.password
          })}).then(response => response.json()).then((data) => {
            if(data.success){
              console.log(this.state.username);
            }
            this.setState({message: data.msg});
          });

    }
    catch(e){
      console.log("kill me please");
    }
  }

  render() {
    return(
      <div className="loginStyling">
        <div className="loginForm">
          <form className="login">
             <h3 className="header">Sign In</h3>
             <div className="form-group">
                 <h6>Username</h6>
                 <input type="text" className="form-control" placeholder="Enter username" onChange = {e => this.setInputValue("username", e.target.value)}/>
             </div>
             <div className="form-group">
                 <h6>Password</h6>
                 <input type="password" className="form-control" placeholder="Enter password" onChange = {e => this.setInputValue("password", e.target.value)}/>
                 <Button variant="primary" block onPress = {() => this.doLogin()}>Sign In</Button>
             </div>
             {
               this.state.message ? <div className="alert alert-danger text-center">{this.state.message}</div> : ''
             }
         </form>
        </div>
      </div>
    );
  }
}

export default Login;
