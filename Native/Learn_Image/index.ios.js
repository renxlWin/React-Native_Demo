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
  Image
} from 'react-native';

export default class Learn_Image extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>加载本地图片</Text>
        <Image
          style={styles.ImgStyle}
          source={require('./img/locaImg.jpg')}
        />
        <Text>加载网络图片</Text>
        <Image
          style={styles.ImgStyle}
          source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'}}
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
  ImgStyle: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    resizeMode: Image.resizeMode.cover,
  }
});

AppRegistry.registerComponent('Learn_Image', () => Learn_Image);
