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

class BookmarkScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookmarkList: []
    }
  }

  componentWillMount() {
    let bookmark = realm.objects('Bookmark')
    this.setState({
      bookmarkList: Array.from(bookmark)
    })
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
      
        <FlatList
          data={this.state.bookmarkList}
          keyExtractor={(item, index) => 'article-'+item.title}
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
// export default connect(mapStateToProps, mapDispatchToProps)(BookmarkScreen)