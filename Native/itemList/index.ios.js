/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {
     AppRegistry,
     StyleSheet,
     Text,
     Image,
     View,
 } from 'react-native';

 import { StackNavigator } from 'react-navigation';
 import RxNetManager from './RxNetManager'

 var Dimensions = require('Dimensions');
 var ScreenWidth = Dimensions.get('window').width; //宽度
 var ScreenHeight = Dimensions.get('window').height; //高度
 var ScreenScale = Dimensions.get('window').scale; //分辨率

 var colus = 5;
 var itemWidth = 139 / 3.0;
 var imgHeight = 114 / 3.0;
 var textPadding = 35 / 3.0;
 var topMargin = 44 / 3.0;
 var leftMargin = (ScreenWidth - 5 * itemWidth)/(colus + 1);

 class HomeScreen extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             itemList : [],
         }
     }

     componentDidMount(){
         this.getItemList();
     }
     static navigationOptions = {
       'title':'首页',
     };
     render() {
         return (
             <View style={styles.container}>
                 {this.renderAllItem()}
             </View>
         );
     }

     renderAllItem() {
         console.log('重新渲染');
         var ViewArr = [];
         for (var i = 0;i < this.state.itemList.length;i++){
             var item = this.state.itemList[i];
             var imgPath = item.imageName;
             var iconTitle = item.categoryName;
             ViewArr.push(
                 <View key = {i} style = {styles.BgStyle}>
                     <Image
                         style={styles.imgStyle}
                         source={{uri: imgPath}}
                     />
                   <Text style = {styles.txStyle}>{iconTitle}</Text>
                 </View>
             )

         }
         return ViewArr;
     }

     getItemList() {
         var that = this;
         RxNetManager.get(
             'date/user/date/dateCategory',
             null,
             function (response) {
                 console.log(response);
                 that.setState({
                     itemList: response.dateCategory
                 })
                 that.renderAllItem();
             },

             function (error) {
                 console.log(error);
             }
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         flexDirection: 'row',
         flexWrap: 'wrap'
     },
     BgStyle: {
       marginLeft: leftMargin,
       marginTop: topMargin,
       alignItems: 'center'
     },
     imgStyle: {
         width: itemWidth,
         height: imgHeight
     },
     txStyle: {
       marginTop : textPadding,
       fontSize : 40 / 3.0,
     }


 });

 const RN = StackNavigator({
   Home:{screen : HomeScreen}
 })

 AppRegistry.registerComponent('itemList', () => RN);
