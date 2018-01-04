import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
  ActivityIndicator,
  TextInput,
  Linking
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import axios from 'axios'


class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'About App',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0097A7',
      }
    };
  };

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
      container: {
        flex: 1,
        minHeight: 100,
        justifyContent: 'flex-start',
        alignItems: 'center'
      },

      header: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15,
        marginTop: 10
      },

      subheader: {
        fontWeight: '500',
        fontSize: 15
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hacktiv8 Shimbun</Text>
        <Text style={{ color: 'blue', marginBottom: 5 }}
          onPress={() => Linking.openURL('https://github.com/fariswd/Hacktiv8Shimbun_Backend')}>https://github.com/fariswd/Hacktiv8Shimbun_Backend/</Text>
        <Text style={{ color: 'blue', marginBottom: 10 }}
          onPress={() => Linking.openURL('https://github.com/fujianto/Hacktiv8Shimbun_App')}> https://github.com/fujianto/Hacktiv8Shimbun_App</Text>

        <Text style={{ marginBottom: 5}}>Developed by:</Text>

        <Text style={styles.subheader}>Septian A. Fujianto (Mobile App)</Text>
        <Text style={{ color: 'blue', marginBottom: 10 }}
          onPress={() => Linking.openURL('https://github.com/fujianto')}>https://github.com/fujianto</Text>
        <Text style={styles.subheader}>Faris Widyantho (Backend)</Text>
        <Text style={{ color: 'blue', marginBottom: 10 }}
          onPress={() => Linking.openURL('https://github.com/fariswd')}>https://github.com/fariswd/</Text>
      </View>
    )
  }
}


export default AboutScreen