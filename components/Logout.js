import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';

export default class Logout extends Component {
  clickLogout(){
    firebase.auth().signOut();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={this.clickLogout.bind(this)}
        >
          <Text style={styles.TouchableOpacityText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TouchableOpacityText:{
    //backgroundColor: 'transparent',
    position: 'absolute',
    top: 40,
    right: 10,
    padding: 8,
    color: '#000',
    fontSize:11,
    borderRadius: 5,
    flexWrap: 'wrap',
    flex: 1
  }
});
