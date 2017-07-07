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

import RxNetUntil from './RxNetManager'
import RxStorage from './RxStorage'

export default class Learn_IOSUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTown : '淮北',
      name : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={this.loadAppInitInfo}
        title="请求启动数据"
        color="red"
      />
      <Button
        onPress={this.saveData}
        title="save Data"
      />
      <Button
        onPress={this.getValueFromStore}
        title="取值"
      />
      <Text>{this.state.homeTown}</Text>
      <Text>{this.state.name}</Text>
      </View>
    );
  }

  saveData = () => {
    this.setState ({
      homeTown : 'xxx'
    })
    var userInfo = JSON.stringify({
      'name' : 'Jack',
      age : 18
    })
    RxStorage.saveData('userInfo',userInfo,function(result){
      if (result) {
        console.log('成功保存数据');
      }else {
        console.log('保存数据失败');
      }
    });
  }

  getValueFromStore = () => {
    var that = this;
    RxStorage.getData('userInfo',function(result){
      if (result) {
        var jsonResult = JSON.parse(result);
        that.setState({
          name : jsonResult.name
        })
      }else {
        console.log('空值');
      }
    })
  }

  loadAppInitInfo = () => {
    RxNetUntil.get(
      'userController/appInitInfo',
      {
        'type' : 'APPINIT'
      },
      function (response){
        console.log('成功了'+response);
      },
      function (error){
        console.log('失败了'+error);
      }
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Learn_IOSUI', () => Learn_IOSUI);
