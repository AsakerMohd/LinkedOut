import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LoginForm from './../../components/Login/LoginForm'

export default class componentName extends Component {
  render() {
    return (
      <View style = {styles.contaier}>
        <View style = {styles.logoContainer}>
            <Image 
            style = {styles.logoImage}
            source ={require('../../images/ubc.png')} />
        </View>
        <View style = {styles.formContainer}>
            <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
        width: 100,
        height: 100
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
