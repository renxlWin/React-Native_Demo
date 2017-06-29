/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class  TestView extends Component {
  constructor() {
    super()
  }

  render(){
    let title = this.props.text;
    return (
      <View style = {styles.leftContainer}>
        <Text>{title}</Text>
      </View>
    )
  }
}

export default class Learn_Style extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer} />
        <View style={styles.midContainer} />
        <View style={styles.rightContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  leftContainer:{
    flex : 1,
    backgroundColor : 'red'
  },
  midContainer:{
    flex : 1,
    backgroundColor : 'yellow'
  },
  rightContainer:{
    flex : 1,
    backgroundColor : 'black'
  }
});

AppRegistry.registerComponent('Learn_Style', () => Learn_Style);
