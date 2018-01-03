import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  ActivityIndicator,
  TextInput
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import axios from 'axios'


class AboutScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { navigate } = this.props.navigation
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        fontWeight: 'bold'
      },

      container: {
        flex: 1,
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
    });

    return (
      <View style={styles.container}>
        <Text>Hacktiv8 Shimbun</Text>
        <Text>Developed by Septian A. F (Mobile App) & Faris (Backend)</Text>
      </View>
    )
  }
}


export default AboutScreen