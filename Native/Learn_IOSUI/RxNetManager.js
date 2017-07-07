import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
var baseURL = "https://api.xiaochonglife.com/";
class RxNetUntil extends React.Component{
    /*
     *  get请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static get(url,params,successCallBack,failCallBack){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        fetch(baseURL+url,{
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            successCallBack(responseJSON);
        })
        .catch((error)=> {
            failCallBack(error);
        });
    }
    /*
     *  post请求
     *  url:请求地址
     *  data:参数
     *  callback:回调函数
     * */
    static post(url,params,headers,successCallBack,failCallBack){
        //fetch请求
        fetch(baseURL+url,{
            method: 'POST',
            headers:{
                'token': headers
            },
            body:JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                successCallBack(responseJSON);
            })
            .catch((error)=> {
              failCallBack(error);
            });;
    }


}

module.exports = RxNetUntil;
