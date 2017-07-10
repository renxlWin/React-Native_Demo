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
  View,
  TouchableHighlight,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class Learn_Touch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.clickHightView}>
          <Text style={styles.hightTouch}>
            Welcome to React Native!
          </Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={this.clickTouchOpacity}>
        <Text style={styles.touchOpacity}>
          TouchableHighlight
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

  clickHightView() {
    Alert.alert('TouchableHighlight')
  }

  clickTouchOpacity() {
    Alert.alert("opacity")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  hightTouch: {

    backgroundColor: 'red'
  },
  touchOpacity: {
    marginTop: 30,
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('Learn_Touch', () => Learn_Touch);
