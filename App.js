import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import store from './store'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
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
