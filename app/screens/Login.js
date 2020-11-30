import React from 'react';
import { Component } from 'react';
import {Text, Alert, Button, Image, ImageBackground, SafeAreaView, StyleSheet, TouchableHighlight, View, TextInput } from 'react-native';
import MainPage from './MainPage';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      msg: '',
      buttonDisabled: false,
      isLoggedin: false,
      username: '',
      User: ''

    }
  }
  async componentDidMount() {
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

  async doLogin(){
    try{
      await fetch('https://localhost:5000/api/user/login', {
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
              this.state.User = data.Username;
              console.log(data.Username);

              this.state.isLoggedin = true;
            }
            this.setState({message: data.msg});
          });

    }
    catch(e){
      console.log(e);
    }
  }


  render() {
    const styles = StyleSheet.create({
      background: {
          justifyContent: "flex-start",
      },
      logo: {
        width:300,
        height:250,
        position: 'absolute',
        top: 30,
        left: 55,

    },
    });

    if(this.state.isLoggedin){
      return(
        <MainPage data={this.state}/>
      )
    }

    return(
        <div className="loginForm">
          <form className="login">
             <h3 className="header">Sign In</h3>
             <div className="form-group">
                 <Text>Username</Text>
                 <input type="text" className="form-control" placeholder="Enter username" onChange = {e => this.setInputValue("username", e.target.value)}/>
             </div>
             <div className="form-group">
                 <Text>Password</Text>
                 <input type="password" className="form-control" placeholder="Enter password" onChange = {e => this.setInputValue("password", e.target.value)}/>
                 <Button variant="primary" block onPress = {() => this.doLogin()}><Text>Sign In</Text></Button>
             </div>
             {
               this.state.message ? <div className="alert alert-danger text-center"><Text>{this.state.message}</Text></div> : <Text>''</Text>
             }
         </form>
        </div>
    );
  }
}


export default Login;
