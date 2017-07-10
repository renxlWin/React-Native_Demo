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
  TextInput,
} from 'react-native';

export default class Learn_TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : '我是占位符'
    };
  }
  render() {
    console.log(this.state.text);
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40,borderColor: 'red', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder={this.state.text}
          keyboardType={'number-pad'}
          multiline={true}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('Learn_TextInput', () => Learn_TextInput);
