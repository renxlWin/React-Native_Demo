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
    Image,
    ScrollView
} from 'react-native';
var TimerMixin = require('react-timer-mixin');
var imageData = require('./imageData.json')
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

var Learn_Scroll = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
        return {
            currentPage: 0,
        }
    },
    getDefaultProps() {
        return {
            duration : 2000
        }
    },
    render() {
        return (
            <View style={styles.bgView}>
                <ScrollView style={styles.scrollStyle}
                            ref = "scrollView"
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={this.onAnimationEnd}
                            onScrollBeginDrag={this.onScrollBeginDrag}
                            onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.contolStyle}>
                    {this.renderPageContol()}
                </View>
            </View>
        );
    },
    renderAllImage() {
        var imageArr = [];
        for (var i = 0; i < imageData.data.length; i++) {
            var imageItem = imageData.data[i];
            console.log(imageItem);
            imageArr.push(
                <Image key={i}
                       style={styles.imgStyle}
                       source={{uri: imageItem}}
                />
            )
        }
        return imageArr;
    },
    renderPageContol() {

        var pageControlArr = [];
        for (var i = 0; i < imageData.data.length; i++) {
            var colorStyle = (this.state.currentPage == i) ? {'color':'orange'} : {'color':'green'};
            pageControlArr.push(
                <Text key={i} style={[styles.bullStyle,colorStyle]}>
                    &bull;
                </Text>
            )
        }
        return pageControlArr;
    },
    componentDidMount() {
        this.startTimer();
    },

    startTimer() {
        var scrollView = this.refs.scrollView;
        this.timer = this.setInterval(function () {
            var page = this.state.currentPage + 1;
            page = page % imageData.data.length;
            console.log(page);
            scrollView.scrollResponderScrollTo({x:ScreenWidth * page, y:0,animated : true});
            this.setState({
                currentPage : page
            })
        }, this.props.duration);
    },
    onAnimationEnd(event) {
        var offsetX = event.nativeEvent.contentOffset.x;
        var page = offsetX / ScreenWidth;
        this.setState({
            currentPage: page
        })
    },
    onScrollBeginDrag() {
        this.clearInterval(this.timer)
    },
    onScrollEndDrag() {
        this.startTimer();
    }
})

const styles = StyleSheet.create({
    bgView: {

        backgroundColor: 'gray',
    },
    scrollStyle: {},
    imgStyle: {
        width: ScreenWidth,
        height: 300
    },
    contolStyle: {
        backgroundColor: 'rgba(241,241,241,0.2)',
        height: 30,
        width: ScreenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0
    },
    bullStyle: {
        fontSize: 40,

    }

});

AppRegistry.registerComponent('Learn_Scroll', () => Learn_Scroll);
