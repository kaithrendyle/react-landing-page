import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase";

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAUHp5KuLiHDj7CmoC2EUAQNUpUWmF3yLE",
    authDomain: "chat-bot-demo-e9223.firebaseapp.com",
    databaseURL: "https://chat-bot-demo-e9223.firebaseio.com",
    projectId: "chat-bot-demo-e9223",
    storageBucket: "chat-bot-demo-e9223.appspot.com",
    messagingSenderId: "362215084713"
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const user = database.ref('user');

class UserMessage extends React.Component {
  constructor() {
    super()
    this.state = {avater: "",
                  username: "",
                  message: "",
                  showComponent: false}
  }
  componentDidMount() {
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;

    let promise1 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseAvatar = snapshot.val().avater;
        resolve(firebaseAvatar);
      });
    });
    let promise2 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseUsername = snapshot.val().username;
        resolve(firebaseUsername);
      });
    });
    let promise3 = new Promise((resolve, reject) => {
      user.on('value', function(snapshot) {
        firebaseMessage = snapshot.val().message;
        resolve(firebaseMessage);
      });
    });
    Promise.all([promise1, promise2, promise3]).then(values => {
      this.setState({
        avater: values[0],
        username: values[1],
        message: values[2]
      })
    });
    setTimeout(() => {
      this.setState({showComponent: true});
    }, 3000)
  }
  render() {
    const showComponent = this.state.showComponent;
    return (
      <div>
        {showComponent ? (
          <div className="user-message">
            <div style={{background: this.state.avater}} className="user-avatar"></div>
            <div className="username">{this.state.username}</div>
            <div className="message">{this.state.message}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

module.exports = UserMessage;
