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
    View,
    ScrollView,
    Image
} from 'react-native';

var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var imageData = require('./imageData.json');

var Excise_Scroll = React.createClass( {
    mixins: [TimerMixin],
    getInitialState() {
        return {
            currentPage: 0,
        }
    },
    getDefaultProps() {
        return {
            duration : 2000,
        }
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={this.onAnimationEnd}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllItem()}
                </ScrollView>
                <View style ={styles.pageControlStyle}>{this.renderPageControl()}</View>
            </View>
        );
    },
    componentDidMount() {
      this.startTimer();
    },
    startTimer() {
      this.timer = this.setInterval(function () {
          var page = this.state.currentPage + 1;
          page = page % imageData.data.length;
          this.refs.scrollView.scrollResponderScrollTo({x: page * ScreenWidth,y: 0,animated: true})
          this.setState({
              currentPage: page
          })
      },this.props.duration);
    },
    renderAllItem() {
        var imageArr = [];
        for (var i = 0; i < imageData.data.length; i++) {
            var imageItem = imageData.data[i];

            imageArr.push(
                <Image key={i}
                       style={styles.imageStyle}
                       source={{uri: imageItem}}
                />
            )
        }
        return imageArr;
    },

    renderPageControl() {
        var pageArr = [];
        for (var i = 0; i <imageData.data.length; i++ ){
            var selColor = (this.state.currentPage == i) ? {'color' : 'orange'} : {'color' : 'gray'};
            console.log(imageData.data.length);
            pageArr.push(
                <Text key={i} style={[styles.bullStyle,selColor]}>&bull;</Text>
            )
        }
        return pageArr;
    },

    onAnimationEnd(event) {

        var offsetX = event.nativeEvent.contentOffset.x;
        var page = offsetX / ScreenWidth;
        this.setState({
            currentPage: page
        })

    },

    onScrollBeginDrag() {
        this.clearInterval(this.timer);
    },

    onScrollEndDrag() {
        this.startTimer();
    }

})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    imageStyle: {
        width: ScreenWidth,
        height: 200
    },
    pageControlStyle: {
        height: 30,
        width: ScreenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(224,224,224,0.2)',
        position: 'absolute',
        bottom: 0
    },
    bullStyle: {
        fontSize: 40,

    }

});

AppRegistry.registerComponent('Excise_Scroll', () => Excise_Scroll);
