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
  Button
} from 'react-native';


export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'homeTown' : 'xxx'
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={this.onButtonPress}
        title="save Data"
      />
      </View>
    );
  }

  onButtonPress = () => {
    this.setState ({
      homeTown : 'xxx'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Learn_IOSUI', () => Test);
