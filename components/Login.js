import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import Router from '../Router';

export default class Login extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      email : '',
      password : '',
      disabled : false,
    };
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn:true});
      }else {
        this.setState({loggedIn:false});
      }
    })
  }
  clickLogin(){
    const {email, password} = this.state;
    if (email === '' || password === '') {
      Alert.alert(
        'Oops!',
        'Lütfen boş alan bırakmayınız!',
        [
          {text: 'Tamam', onPress: () => null}
        ]
      )
    }else {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.loginSuccess.bind(this))
        .catch(this.loginFail.bind(this))
      });
    }
  }
  loginSuccess(){
    this.setState({disabled : false});
    Actions.main();
  }
  loginFail(){
    Alert.alert(
      'Oops!',
      'Kullanıcı adı veya şifre hatalı!',
      [
        { text : 'Tamam', onPress: () => null}
      ]
    )
  }

  ActivityIndicator(){
    if (this.state.disabled) {
      return this.setState({disabled : true});
    }
  }
  render() {
    return (

      <View style={styles.container}>

          <TextInput
            style={styles.TextInput}
            autoFocus={true}
            returnKeyType='next'
            placeholder='E-mail'
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
          <TextInput
            style={styles.TextInput}
            secureTextEntry
            returnKeyType='go'
            placeholder='Password'
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
          <TouchableOpacity
            disabled={this.state.disabled}
            style={[styles.TouchableOpacity, this.state.disabled === true && styles.disabled ]}
            onPress={this.clickLogin.bind(this)}
            >
            <Text style={styles.TouchableOpacityText}>Giriş</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  TextInput:{
    fontSize:18,
    marginBottom: 15,
    padding: 15,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: .2,
    borderRadius: 10,
  },
  TouchableOpacity:{
    marginBottom: 15,
    padding: 15,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: .2,
    borderRadius: 10,
    backgroundColor: '#56B9D0',
    alignItems: 'center'
  },
  TouchableOpacityText:{
    color: '#fff',
    fontSize:18,
    fontWeight: 'bold'
  },
  disabled:{
    opacity: .5
  }
});
