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
import realm from '../realm'

import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import ArticleRow from '../components/ArticleRow'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'
import { Icon } from 'react-native-elements'

class BookmarkScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    let headerRight = (
      <View style={{ marginRight: 10 }}>
        <Icon
          name='trash'
          type='font-awesome'
          color='#fff'
          onPress={params.onRemoveAllBookmark ? params.onRemoveAllBookmark : () => null}
        />
      </View>
    );

    return {
      headerTitle: 'Bookmarks',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0097A7',
      },
      headerRight: headerRight,
    };
  }

  constructor(props) {
    super(props)

    this.state = {
      bookmarkList: []
    }

    this.onRemoveAllBookmark = this.onRemoveAllBookmark.bind(this)
  }

  onRemoveAllBookmark() {
    alert("All bookmarks Removed")
    
    this.setState({
      bookmarkList: []
    })

    realm.write(() => {
      let allBookmarks = realm.objects('Bookmark');
      realm.delete(allBookmarks);
    });
  }

  componentDidMount() {
    this.props.navigation.setParams({ onRemoveAllBookmark: this.onRemoveAllBookmark });

    let bookmark = realm.objects('Bookmark')
    this.setState({
      bookmarkList: Array.from(bookmark)
    })
  }

  componentWillReceiveProps(nextProps) {}

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
      
        <FlatList
          data={this.state.bookmarkList}
          keyExtractor={(item, index) => 'article-'+item.title+index}
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => navigate('Details', { article: item })}>
                <ArticleRow article={item}/>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

export default BookmarkScreen