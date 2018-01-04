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


class CategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Categories',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0097A7',
      }
    };
  };
  
  constructor(props) {
    super(props)

    this.state = {
      categories : [
        'react',
        'redux',
        'css',
        'start',
        'javascript',
        'git',
        'html',
        'intro',
        'start',
        'd3',
        'beginner',
        'firebase',
        'phase 0',
        'phase 1',
        'phase 2',
        'phase 3',
      ]
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

      catItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
      }
    });

    return (
      <View style={styles.container}>
         <FlatList
          style={{ width: '100%',}}
          data={this.state.categories}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return(
              <TouchableOpacity style={styles.catItem} onPress={() => navigate('Search', { searchBy: 'category', category: item })}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

export default CategoryScreen