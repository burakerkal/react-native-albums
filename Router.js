import React, { Component } from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import Albums from './components/Albums';

const clickLogout = () => (
  firebase.auth().signOut(),
  Actions.root()
)
export default class RouterComponent extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEDymAHIujSAihrec6A8iJS5QbbW8u4Xc',
      authDomain: 'reactnative-d8c64.firebaseapp.com',
      databaseURL: 'https://reactnative-d8c64.firebaseio.com',
      projectId: 'reactnative-d8c64',
      storageBucket: 'reactnative-d8c64.appspot.com',
      messagingSenderId: '240260037356'
    });
  }
  render() {
    return (
      <Router>
        <Scene hideNavBar>

          <Scene key='root'>
            <Scene key='loginScreen' component={ Login } title='' />
          </Scene>

          <Scene key='main' >
            <Scene
              key='albumsScreen'
              component={ Albums }
              title='Albums'
              onRight={() => clickLogout()}
              rightTitle="[x]"
              />
          </Scene>

        </Scene>
      </Router>
    );
  }
}
