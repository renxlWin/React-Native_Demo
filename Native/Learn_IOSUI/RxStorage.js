import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    AsyncStorage
} from 'react-native';

class RxStorage extends React.Component{
  static saveData(objKey,objValue,callback?){
        try {
          AsyncStorage.setItem(
              objKey,
              objValue,
              (error)=>{
                var flag;
                if (error){
                  flag = false;
                }else{
                  flag = true;
                }
                if (callback) {
                  callback(flag);
                }
              }
          );
        } catch (error){
          if (callback) {
            callback(false);
          }
        }
    }

  static getData(objKey,callback?){
    try {
      AsyncStorage.getItem(
        objKey,
        (error,result)=>{
          var falg;
          if (error) {
            if (callback) {
              callback(null);
            }
          }else {
            if (callback) {
              callback(result);
            }
          }
        }
      )
    } catch (e) {
      if (callback) {
        callback(e);
      }
    }
  }

  static removeData(objKey,callback?){
    try {
      AsyncStorage.removeItem(
        objKey,
        (error){
          var flag;
          if (error){
            flag = false;
          }else{
            flag = true;
          }
          if (callback) {
            callback(flag);
          }
        }
      )
    } catch (e) {
      if (callback) {
        callback(false);
      }
    }
  }

}

module.exports = RxStorage;
