import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import SearchScreen from './screens/SearchScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import CategoryScreen from './screens/CategoryScreen'
import AboutScreen from './screens/AboutScreen'

import store from './store'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const MyStackNavApp = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Bookmark: {
    screen: BookmarkScreen,
  },
  Category: {
    screen: CategoryScreen,
  },
  About: {
    screen: AboutScreen,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyStackNavApp/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
