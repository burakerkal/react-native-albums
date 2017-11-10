import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import Header from './components/Header';
import Login from './components/Login';
import Albums from './components/Albums';
import Logout from './components/Logout';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      loggedIn : null
    }
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEDymAHIujSAihrec6A8iJS5QbbW8u4Xc',
      authDomain: 'reactnative-d8c64.firebaseapp.com',
      databaseURL: 'https://reactnative-d8c64.firebaseio.com',
      projectId: 'reactnative-d8c64',
      storageBucket: 'reactnative-d8c64.appspot.com',
      messagingSenderId: '240260037356'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn:true});
      }else {
        this.setState({loggedIn:false});
      }
    })
  }

  content(){
    switch (this.state.loggedIn) {
      case true:
        return(
          <View style={styles.container}>
            <Logout />
            <Albums />
          </View>
        )
      case false:
        return <Login />
      default:
        return <Login />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
         />
        <Header
          HeaderTitle={'Login'}
        />
        {this.content()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
