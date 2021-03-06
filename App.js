import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Router from './Router';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Router />
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
