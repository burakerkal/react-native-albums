import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      HeaderTitle : ''
    };
  }

  render() {
    return (
      <View key={'test'} style={styles.container}>
        <Text
          style={styles.HeaderText}
        >
          {this.props.HeaderTitle}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#56B9D0',
    paddingTop: 20,
  },
  HeaderText:{
    color: '#fff',
    fontSize:30,
    padding: 10,
    fontWeight: 'bold'
  }
});
