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
    onPress={() => Alert.prompt("Let's create your account", "Please create a username", text=> console.log(text))}
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
<Image style={styles.WhiteScreen} source={require("../assets/WhiteScreen.png")} />
<Text style= {styles.enterNewPassword}> Enter new password (min. 6 characters):</Text>
<TextInput
style={styles.input}
placeholder='...' 
secureTextEntry={true}/>



<Text style= {styles.ReenterNewPassword}> Verify new password:</Text>
<TextInput
style={styles.input2}
placeholder='...' 
secureTextEntry={true}/>

<View style={styles.Submit}>

<Button
  color="blue"
    title="Submit"
    onPress={() => alert("Password succesfully reseted")}
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

    Submit: {
        width:100,
        height:50,
        position: 'absolute',
        top: 520,
        left: 150,
        backgroundColor: 'lightskyblue',

    },
    input: {
        width:240,
        height:50,
        position: 'absolute',
        top: 320,
        left: 80,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input2: {
        width:240,
        height:50,
        position: 'absolute',
        top: 430,
        left: 80,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

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
    WhiteScreen: {
        width: "100%",
        backgroundColor: "white",
        height: 400,
        bottom: 250,
    },
    enterNewPassword: {
        height: 20,
        bottom: 580,
        left: 66,
        color: 'gray',
    },
    ReenterNewPassword: {
        height: 20,
        bottom: 480,
        left: 66,
        color: 'gray',
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