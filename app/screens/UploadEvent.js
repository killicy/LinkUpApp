// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const UploadEvent = () => {
  let listViewRef;
  const [dataSource, setDataSource] = useState([
    {id: 1, title: 'Friend 1 + events'},
    {id: 2, title: 'Friend 2 + events'},
    {id: 3, title: 'Friend 3 + events'},
    {id: 4, title: 'Friend 4 + events'},
    {id: 5, title: 'Friend 5 + events'},
    {id: 6, title: 'Friend 6 + events'},
    {id: 7, title: 'Friend 7 + events'},
    {id: 8, title: 'Friend 8 + events'},
    {id: 9, title: 'Friend 9 + events'},
    {id: 10, title: 'Friend 10 + events'},
    {id: 11, title: 'Friend 11 + events'},
    {id: 12, title: 'Friend 12 + events'},
    {id: 13, title: 'Friend 13 + events'},
    {id: 14, title: 'Friend 14 + events'},
    {id: 15, title: 'Friend 15 + events'},
    {id: 16, title: 'Friend 16 + events'},
    {id: 17, title: 'Friend 17 + events'},
  ]);

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  const upButtonHandler = () => {
    //OnCLick of Up button we scrolled the list to top
    listViewRef.scrollToOffset({
      offset: 0,
      animated: true
    });
  };

  const downButtonHandler = () => {
    //OnCLick of down button we scrolled the list to bottom
    listViewRef.scrollToEnd({animated: true});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ref={(ref) => {
          listViewRef = ref;
        }}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={downButtonHandler}
        style={styles.downButtonStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_down.png',
          }}
          style={styles.downButtonImageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={upButtonHandler}
        style={styles.upButtonStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_up.png',
          }}
          style={styles.upButtonImageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("LinkUp link")}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Profile opened")}>

          <Image style={styles.profilePic} source={require("../assets/profilepic.png")} />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Search users menu")}>

          <Image style={styles.search} source={require("../assets/Search.png")} />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("Home menu")}>

          <Image style={styles.homeIcon} source={require("../assets/homeicon.jpg")} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Menu")}>

          <Image style={styles.menu} source={require("../assets/menu.png")} />

          </TouchableOpacity>
          
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 25,
    fontSize: 20,
  },

  logo: {
    width: 60,
    height: 60,
    bottom: 610,
    left: 20,
  },
  profilePic: {
    width: 60,
    height: 60,
    bottom: 640,
    left: 320,
  },
  search: {
    width: 40,
    height: 40,
    bottom: -23,
    left: 190,
  },
  homeIcon: {
    width: 40,
    height: 40,
    bottom: 20,
    left: 60,
  },
  menu: {
    width: 40,
    height: 40,
    bottom: 60,
    left: 310,
  },
});

export default UploadEvent;