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
import ArticleRow from '../components/ArticleRow'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'

class BookmarkScreen extends Component {
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
        <Text>Bookmark</Text>
       {/*  <FlatList
          onEndReached={() => this.loadMoreData()}
          onRefresh={() => this.refreshData()}
          refreshing={this.state.isRefreshing}
          data={this.state.newsList}
          keyExtractor={(item, index) => 'article-'+item.id}
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => navigate('Details', { article: item })}>
                <ArticleRow article={item}/>
              </TouchableOpacity>
            )
          }}
          ListFooterComponent={() => { return (
            this.state.isLoading && <ActivityIndicator size="large" color="#0000ff" />
          ) }}
        /> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.articleReducer.newsList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loadNews: (page) => dispatch(fetchArticles(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkScreen)