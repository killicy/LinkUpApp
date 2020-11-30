import React from 'react';
import {Text, Alert, Button, Image, TouchableOpacity, ImageBackground, SafeAreaView, StyleSheet, TouchableHighlight, View, TextInput } from 'react-native';
import App from '../../App';

    

function EmailType(props) {
    let listViewRef;
    return (
        
        
<View style={styles.container}>

       
            






<Image style={styles.WhiteScreen} source={require("../assets/WhiteScreen.png")} />


<Text style= {styles.Title1}> Name of the event:</Text>
<TextInput
style={styles.input1}
placeholder='...' 
/>

<Text style= {styles.Title2}> Description of the event:</Text>
<TextInput
multiline
style={styles.input2}
placeholder='...' 
/>

<Text style= {styles.Title3}> Day:</Text>
<TextInput
keyboardType='numeric'
style={styles.input3}
placeholder='...' 
/>

<Text style= {styles.Title4}> Month:</Text>
<TextInput
keyboardType='numeric'
style={styles.input4}
placeholder='...' 
/>

<Text style= {styles.Title5}> Year:</Text>
<TextInput
keyboardType='numeric'
style={styles.input5}
placeholder='...' 
/>

<Text style= {styles.Title6}> Create a new event!</Text>

<Text style= {styles.Title7}> Type:</Text>

<View style={styles.Submit}>

<Button
  color="#fff"
    title="Upload event"
    onPress={() => Alert.alert("Event created!")}
  />
</View>

<View style={styles.Submit}>

<Button
  color="#fff"
    title="Upload event"
    onPress={() => Alert.alert("Event created!")}
  />
</View>
    
<TouchableOpacity onPress={() => alert("Profile opened")}>

          <Image style={styles.Add} source={require("../assets/profilepic.png")} />

          </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Friends event selected")}>

          <Image style={styles.FriendsMeeting} source={require("../assets/FriendsMeeting.jpg")} />

          </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Sports event selected")}>

          <Image style={styles.SportsEvent} source={require("../assets/SportsEvent.jpg")} />

          </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Outdoor adventure selected")}>

          <Image style={styles.OutdoorAdventure} source={require("../assets/OutdoorAdventure.jpg")} />

          </TouchableOpacity>
          
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

    Submit: {
        width:200,
        height:50,
        position: 'absolute',
        top: 740,
        left: 100,
        backgroundColor: 'lightskyblue',

    },
    image1: {
        bottom: 100,
        position: 'absolute',
        width:240,
        height:50,
    },
    input1: {
        width:240,
        height:50,
        position: 'absolute',
        top: 130,
        left: 80,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input2: {
        width:240,
        height:80,
        position: 'absolute',
        top: 230,
        left: 80,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input3: {
        width:75,
        height:50,
        position: 'absolute',
        top: 380,
        left: 60,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input4: {
        width:75,
        height:50,
        position: 'absolute',
        top: 380,
        left: 160,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },
    input5: {
        width:75,
        height:50,
        position: 'absolute',
        top: 380,
        left: 260,
        borderWidth: 1,
        borderColor: 'lightskyblue',
        padding: 8,
        

    },

    WhiteScreen: {
        width: "100%",
        backgroundColor: "white",
        height: 1200,
        bottom: -30,
    },

    Title1: {
        height: 20,
        bottom: 670,
        left: 66,
        color: 'gray',
    },
    Title2: {
        height: 20,
        bottom: 590,
        left: 66,
        color: 'gray',
    },
    Title3: {
        height: 20,
        bottom: 460,
        left: 160,
        color: 'gray',
    },
    Title4: {
        height: 20,
        bottom: 480,
        left: 66,
        color: 'gray',
    },
    Title5: {
        height: 20,
        bottom: 500,
        left: 260,
        color: 'gray',
    },
    Title6: {
        height: 30,
        bottom: 820,
        left: 95,
        color: 'blue',
        fontSize: 25,
    },
    Title7: {
        height: 20,
        bottom: 390,
        left: 170,
        color: 'gray',
        
    },
    FriendsMeeting: {
        width: 110,
        height: 110,
        bottom: 420,
        left: 30,
      },
    SportsEvent: {
        width: 110,
        height: 110,
        bottom: 530,
        left: 155,
      },
    OutdoorAdventure: {
        width: 110,
        height: 110,
        bottom: 640,
        left: 280,
      },
    Add: {
        width: 60,
    height: 60,
    bottom: 870,
    left: 340,
      },

});
export default EmailType;