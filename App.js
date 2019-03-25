/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { get, post } from './src/APIRequest'
import { NativeModules } from 'react-native'

const ToastExamples = NativeModules.ToastExample

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Welcome to React Native at Airtel
        </Text>
        <Text style={styles.paragraph}>
        Explore more here.
        </Text>
      </View>
    );
  }

  componentDidMount () {
    ToastExamples.show('Awesome Airtel!!!! Welcome to React');
    this.fetchAPI()
  }

  fetchAPI() {
    console.log("kanhaiya API Start")
    var URL  = "http://dummy.restapiexample.com/api/v1/employees"
    get(URL)
      .then(data => {
        console.log("kanhaiya" + JSON.stringify(data))
        })
      .catch(error => console.log("kanhaiya" + error))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});