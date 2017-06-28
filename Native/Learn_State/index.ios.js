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

class BlingText extends Component {
  constructor(props) {
    super(props);
    this.state = {showText : true};
    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      })
    },1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : " ";
    return (
      <Text>{display}</Text>
    );
  }
}

 class Learn_State extends Component {
  render() {
    return (
      <View>
        <BlingText text = 'Rn'/>
      </View>
    );
  }
}


AppRegistry.registerComponent('Learn_State', () => Learn_State);
