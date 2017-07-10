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
  Image,
  ScrollView
} from 'react-native';
var TimerMixin = require('react-timer-mixin');
var imageData = require('./imageData.json')

var Learn_Scroll = React.createClass({
  mixins: [TimerMixin],
  render() {
    return (
      <ScrollView
        scrollEnabled = {false}
        >
        {this.renderAllImage()}
      </ScrollView>
    );
  },
  renderAllImage() {
    var imageArr = [];
    for(var i = 0; i < imageData.data.length; i++) {
      var imageItem = imageData.data[i];
      console.log(imageItem);
      imageArr.push(
        <Image key = {i}
          style = {styles.imgStyle}
          source = {{uri : imageItem}}
        />
      )
    }
    return imageArr;
  },
  componentDidMount() {

  },

  startTimer() {
    this.setInterval(function () {
      console.log(imageArr.data);
    },1000)
  },

})



const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200
  },

});

AppRegistry.registerComponent('Learn_Scroll', () => Learn_Scroll);
