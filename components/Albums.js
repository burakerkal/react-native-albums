import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

export default class Albums extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({data : response.data}))
  }
  renderData(){
    return this.state.data.map((responseData, Id) =>
      <View key={Id}>
        <TouchableOpacity onPress={() => Linking.openURL(responseData.url)}>
          <Image style={styles.AlbumImage} source={{uri: responseData.image}} />
          <Text style={styles.AlbumTitle}>{responseData.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  render() {
    return (
        <ScrollView>
            {this.renderData()}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AlbumTitle:{
    width: '100%',
    padding: 10,
    fontSize:20,
    position:'absolute',
    bottom: 0,
    left: 0,
    opacity: .8,
    color: '#3B3F42'
  },
  AlbumImage:{
    flex:1,
    height: 290,
    marginBottom:2,
  }
});
