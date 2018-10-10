import React, { Component } from 'react';

import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
   KeyboardAvoidingView, Alert, TextInput,
} from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator';
import AppNavigator from '../navigation/AppNavigator';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  state = {
      username: '',
      password: ''
   };

   handleUsername = (text) => {
      this.setState({ username: text })
   }

   handlePassword = (text) => {
      this.setState({ password: text })
   }

  render() {

    return (
      <View style = {styles1.contaier}>
        <View style = {styles1.logoContainer}>
            <Image
            style = {styles1.logoImage}
            source ={require('../images/Nexus.png')} />
        </View>
        <View style = {styles1.formContainer}>
        <KeyboardAvoidingView behavior = "padding" style = {styles.containter}>
           <View style = {styles.containter}>
               <TextInput
                   placeholder = "username or email"
                   placeholderTextColor = 'rgba(255, 255, 255, 0.2)'
                   style = {styles.input}
                   onChangeText = {this.handleUsername}
               />
               <TextInput
                   placeholder = "password"
                   placeholderTextColor = 'rgba(255, 255, 255, 0.2)'
                   secureTextEntry
                   style = {styles.input}
                   onChangeText = {this.handlePassword}
               />
               <Button
                  title = "Login"
                  color = "#659bf2"
                  onPress = {this.signIn}
               />

               <Text style={styles.input1}>Dont have an account?
               </Text>
               <Button
                  title = "Register"
                  color = "#659bf2"
                  onPress = {this.Register}
               />
           </View>
        </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
  signIn = async () => {

     await AsyncStorage.setItem('userToken', 'abc');
     //this.props.navigation.navigate('Main');

     var settings = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/JSON'
  },
  body: JSON.stringify({
    'email' : this.state.username,
    'password' : this.state.password
    })
  };

fetch('https://networkinc.azurewebsites.net/api/user/login', settings)
.then(response => console.log('Success:', JSON.stringify(response)))
.then( 

  function(response){

  if (response.success == 'true') {
    this.props.navigation.navigate('Main', {token: response.token});
  } else {

    switch (response.error) 
    {
    case 'Not registered': 
      alert("This Username is not registered\nGo to \"Register\" to make an account");
      break;
    case 'invalid password':
      alert("Incorrect password");
      break;
    case 'Please enter a password to login':
      alert("Please enter your password");
      break;
    case 'Please enter an email to login':
      alert("Please enter your email");
      break;
    }
  }
}
  )
.catch(error => console.error('Error:', error));


     

   };

   Register = async () => {

      await AsyncStorage.setItem('userToken', 'xyz123');
      this.props.navigation.navigate('Register');

    };
}

const styles = StyleSheet.create({
    containter: {
        padding: 30,
        marginBottom:50,
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 17,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 20
    },
    input1: {
        marginTop:100,
        marginBottom:30,
        height: 20,
        backgroundColor: 'transparent',
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 20,
        marginLeft:40,
    }
});

const loginAlert = () => {
    Alert.alert(
        'Logged In',
        'Thanks',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: true }
    )};

const styles1 = StyleSheet.create({
    contaier: {
        flex: 1,
        backgroundColor: '#001b43'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logoImage: {
        width: 330,
        height: 100,
        flex: 0.3,
        flexDirection: "row",
    },
    header: {
        marginTop: 20,
        color: '#FFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        opacity: 0.6
    },
    formContainter: {

    }
});
