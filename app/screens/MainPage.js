import React from 'react';
//import ReactDOM from 'react-dom'
import MainContent from './MainContent';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types';
import NavBar from './NavBar';


class LinkUp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          message: '',
          isLoggedin: false,
          id: 'a',
          url: this.props.data.User,
          events: [],
          friends: [],
          friendEvents: [],
          friendEvents1: [],
          show: false,
          startDate: new Date(),
          startDate1: new Date(),
          description: '',
          title: '',
          success: false,
          friend: false,
          Profile_pic: '',
          user: {Username: 'placeholder'},
          showy: [],
          event_id: null,
          participants: [],
          error: ''
      }
  }

  setInputValue(property, val) {

      this.setState({
          [property]: val
      })
  }

  async participate(event, index, string){
    try {
      await fetch('https://localhost:5000/api/event/participants', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:19002',
        },
        body: JSON.stringify({
          Title: event.Title
        })}).then(response => response.json()).then(data => {
          if(data.success === true){
            this.state[string][index] = data.participants;
          }
        });
        this.setState({
          success: false
        });
     }
     catch(e) {
     }
  }

  sort_by(field, reverse, primer){

  const key = primer ?
    function(x) {
      return primer(x[field])
    } :
    function(x) {
      return x[field]
    };

  reverse = !reverse ? 1 : -1;

  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  }
}



  async resendConfirmation(){
    try {
      await fetch('https://localhost:5000/api/user/confirmationEmail', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:19002',
        }}).then(response => response.json()).then(data => this.setState({success: data.success, username: data.username}));
         if (this.state.success) {
           this.state.success = false;
         }
         else {
         }
    }
    catch(e) {
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
          'Access-Control-Allow-Origin': process.env.REACT_APP_CLIENT_URL,
        }}).then(response => response.json()).then(data => this.setState({isLoggedin: data.success,error: data.msg}));
         if (this.state.isLoggedin) {
           console.log('help');
           console.log(this.state.url);
         }
         else {
           console.log(this.state.error);
         }
    }
    catch(e) {
      console.log(e);
    }
    try {
      await fetch('https://localhost:5000/api/user/usernameInfo', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:19006',
        },
        body: JSON.stringify({
          Username: this.state.url
        })}).then(response => response.json()).then(data => {
          if(data.success === false)
          {
            this.props.history.push('/TheVoid');
          }
          this.setState({events: data.UserEvents, friends: data.Friends, friendEvents: data.FriendEvents, success: data.success, addFriend: data.addFriend, friend: data.friend, Profile_pic: data.Profile_pic, user: data.user});
        });
        if(this.state.success === true){
          this.state.events.map((event, index) => {
              this.enrolled(event, index, "showy");
              this.participate(event, index, "participants");
          });
          this.setState({
            success: true,
            friend: this.state.friend
          })
        }
        else{
        }
    }
    catch(e) {
    }
    this.setState({
      success: false,
      friend: this.state.friend
    })
  }

  setShow(){
    if(this.state.show === false){
      this.setState({
        show: true
      });
    }
    else{
      this.setState({
        show: false,
        message: ''
      });
    }
  }

  setDater(date){
    this.setState({startDate: new Date(date), startDate1: new Date(date)});
  }

  async enrolled(event, index, string){
    try {
      await fetch('https://localhost:5000/api/event/attendingEvent', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:19006',
        },
        body: JSON.stringify({
          Title: event.Title,
        })}).then(response => response.json()).then(data => {
          if(data.success === true){
            this.state[string][index] = true;
          }
          else{
            this.state[string][index] = false;
          }
      });
        this.setState({
          success: false
        });
    }
    catch(e) {
    }
  }

  render() {

    return (
      <div className="MainPage">
        <NavBar data={this.state}/>
        <div className="middleContainer">
            <MainContent data = {this.state}/>
        </div>
      </div>
    );
  }
}
export default LinkUp;
