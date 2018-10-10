import React, { Component } from 'react';

import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
   KeyboardAvoidingView, Alert, TextInput,
} from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator';
import AppNavigator from '../navigation/AppNavigator';

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register2',
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
                   placeholder = "username"
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
               <TextInput
                   placeholder = "re-type password"
                   placeholderTextColor = 'rgba(255, 255, 255, 0.2)'
                   secureTextEntry
                   style = {styles.input}
               />
               <Button
                  title = "Register"
                  color = "#659bf2"
                  onPress = {this.Register}
                  //onPress = {}
               />
           </View>
        </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
  Register = async () => {
      //////////////////////REGISTRATION API CALL////////////////////////////
     await AsyncStorage.setItem('userToken', 'xyz123');
     //this.props.navigation.navigate('Main');
     //"url": "https://networkinc.azurewebsites.net/api/user",
     //alert(this.state.username + this.state.password);

     var details = {
    'email': this.state.username,
    'password': this.state.password,
};

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

     var settings = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formBody
};

fetch('https://networkinc.azurewebsites.net/api/user', settings).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

   };
}

const styles = StyleSheet.create({
    containter: {
        padding: 30,
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 17,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 20
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
        flex: 0.2,
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
