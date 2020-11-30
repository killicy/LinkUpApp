import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Alert, SafeAreaView, Button, Platform, Dimensions } from 'react-native';
import MainPage from './app/screens/MainPage';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ResetPassword from './app/screens/ResetPassword';
import SearchFriends from './app/screens/SearchFriends';
import Login from './app/screens/Login';
import EmailType from './app/screens/EmailType';
import UploadEvent from './app/screens/UploadEvent';
import Register from './app/screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      msg: '',
      buttonDisabled: false,
      isSignedIn: false,
      User: ''
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
        }}).then(response => response.json()).then(data => this.setState({isSignedIn: data.success, User: data.msg}));
    }
    catch(e) {
      console.log(e);
    }
  }


  render(){
    return(
      <NavigationContainer>
        {this.state.isSignedIn ? (
          <MainPage data={this.state}/>
        ) : (
          <Login data={this.state}/>
        )}
      </NavigationContainer>);
  }

}
export default App;
