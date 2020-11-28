import React from 'react';
import {Text, Alert, Button, Image, ImageBackground, SafeAreaView, StyleSheet, TouchableHighlight, View, TextInput } from 'react-native';



function Register(props) {
    async doRegister => {
        await fetch(process.env.REACT_APP_API_URL + '/api/user/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': process.env.REACT_APP_CLIENT_URL,
          },
          body: JSON.stringify({
            Username: this.state.username,
            Email: this.state.email,
            Password: this.state.password
          })}).then(response => response.json()).then(data => this.setState({ username: data.username, message: data.msg, success: data.success}));
      
          if(this.state.success){
            this.props.history.push('/');
          }
          else {
          }
        }  
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
            




<Image style={styles.WhiteScreen} source={require("../assets/WhiteScreen.png")} />
<Text style= {styles.enterNewPassword}> Create a username:</Text>
<TextInput
style={styles.input}
placeholder='...' 
/>



<Text style= {styles.ReenterNewPassword}> Create a new password:</Text>
<TextInput
style={styles.input2}
placeholder='...' 
secureTextEntry={true}/>

<Text style= {styles.ReenterNewPassword2}> Verify new password:</Text>
<TextInput
style={styles.input3}
placeholder='...' 
secureTextEntry={true}/>

<View style={styles.Submit}>

<Button
  color="blue"
    title="Create account"

    onPress={() => alert("Account created")}
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
        width:200,
        height:50,
        position: 'absolute',
        top: 650,
        left: 100,
        backgroundColor: 'lightskyblue',

    },
    input: {
        width:240,
        height:50,
        position: 'absolute',
        top: 350,
        left: 80,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input2: {
        width:240,
        height:50,
        position: 'absolute',
        top: 460,
        left: 80,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input3: {
        width:240,
        height:50,
        position: 'absolute',
        top: 570,
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
        height: 550,
        bottom: 50,
        width: '100%',
    },
    enterNewPassword: {
        height: 20,
        bottom: 520,
        left: 66,
        color: 'gray',
    },
    ReenterNewPassword: {
        height: 20,
        bottom: 430,
        left: 66,
        color: 'gray',
    },
    ReenterNewPassword2: {
        height: 20,
        bottom: 340,
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

export default Register;