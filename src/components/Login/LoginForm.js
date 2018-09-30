import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView, Alert } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
     <KeyboardAvoidingView behavior = "padding" style = {styles.containter}>
        <View style = {styles.containter}>
            <TextInput 
                placeholder = "username or email"
                placeholderTextColor = 'rgba(255, 255, 255, 0.2)'
                style = {styles.input}
            />
            <TextInput
                placeholder = "password" 
                placeholderTextColor = 'rgba(255, 255, 255, 0.2)'
                secureTextEntry
                style = {styles.input}
            />
            <Button
               title = "Login"
               color = "#841584"
               onPress = {loginAlert}
            />
        </View>
     </KeyboardAvoidingView>
    );
  } 
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
    )} 
