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
 import { StackNavigator } from 'react-navigation'

 class HomeScreen extends React.Component {
   static navigationOptions = {
     title : '附近',
   };
   render() {
     const { navigate } = this.props.navigation;
     var testPra = {'testKey' : '我是谁','user' : 'React'}
     return (
       <View>
         <Text>Hello,React</Text>
         <Button
           onPress={() =>
             navigate('Detail',testPra)
           }
           title = '详情'
         />
       </View>
     );
   }
 }

 class DetailSereen extends React.Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
   });

   render() {
     const { params } = this.props.navigation.state;
     return (
       <Text>Hello {params.testKey}</Text>
     );
   }
 }

 const Learn_NavigationBox = StackNavigator({
   Home : { screen : HomeScreen },
   Detail : { screen : DetailSereen},
 });

AppRegistry.registerComponent('Learn_NavigationBox', () => Learn_NavigationBox);
