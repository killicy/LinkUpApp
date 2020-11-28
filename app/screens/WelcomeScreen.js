import React from 'react';
import {Text, Alert, Button, Image, ImageBackground, SafeAreaView, StyleSheet, TouchableHighlight, View, TextInput } from 'react-native';

    

function WelcomeScreen(props) {

  
    return (
        



<View style={styles.container}>

       
         <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View 
            style={styles.loginButton}
            Button></View>
            
            <View style={styles.signinButton}>

  <Button
  color="white"
    title="Sign in"
    onPress={() => Alert.prompt("Welcome back!", "Please enter your username", text=> console.log(text))}
  />
</View>

<View style={styles.registerButton}>

<Button
  color="white"
    title="Register"
    onPress={() => Alert.prompt("Let's create your account", "Please enter your email", text=> console.log(text))}
  />
</View>

<View style={styles.forgotPasswordButton}>

<Button
  color="white"
    title="Forgot your password?"
    onPress={() => Alert.prompt("No problem", 
    "Please type your email associated with your account", text=> console.log(text))}
  />
</View>
        </ImageBackground>


</View>
);
}

const containerStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
    },
   
    container: {
        flex:1,
        justifyContent: 'center',
        marginHorizontal: 0,
      },
      title: {
    textAlign: 'center',
    marginVertical: 8,
  },
    logo: {
        width:300,
        height:250,
        position: 'absolute',
        top: 30,
        left: 55,

    },
    registerButton: {
        width: "100%",
        backgroundColor: "lightskyblue",
        height: 50,
        bottom: 75,
    },
    signinButton: {
        width: "100%",
        backgroundColor: "navy",
        height: 50,
        bottom: 80,
    },
    forgotPasswordButton: {
        width: "50%",
        backgroundColor: "transparent",
        height: 50,
        bottom: 60,
        left: 210,
    

    },
});

export default WelcomeScreen;