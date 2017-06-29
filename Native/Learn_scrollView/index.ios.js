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
  ScrollView,
  Image,
  FlatList
} from 'react-native';

class Learn_scrollView extends Component {
  render() {
    return (
      <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
          <Image source={require('./img/ic_tip.png')} />
        </ScrollView>
    );
  }
}

export default class RxFlatList extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    backgroundColor:'red',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('Learn_scrollView', () => RxFlatList);
