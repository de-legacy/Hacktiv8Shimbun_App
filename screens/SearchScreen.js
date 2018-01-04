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
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import ArticleRow from '../components/ArticleRow'
import { connect } from 'react-redux'
import { fetchArticles, searchArticles, filterArticles } from '../actions/articleActions'

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Searching News",
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0097A7',
      },
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      searchArticles: [],
      isLoading: false,
      isRefreshing: false,
      isSearching: false,
      query : ''
    }
    
    this.doSearch = this.doSearch.bind(this)
  }

  doSearch(query) {
    this.setState({
      query: query
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View>
        <TextInput
          placeholder='Search here..'
          style={styles.searchBox}
          value={this.state.query}
          onChangeText={(text) => this.doSearch(text)}
          onSubmitEditing={() => this.props.searchNews(this.state.query)}
        />
        <FlatList
          data={this.state.searchArticles}
          keyExtractor={(item, index) => 'article-' + index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigate('Details', { article: item })}>
                <ArticleRow article={item} />
              </TouchableOpacity>
            )
          }}
          ListFooterComponent={() => {
            return (
              this.state.isLoading && <ActivityIndicator size="large" color="#0000ff" />
            )
          }}
        />
      </View>
    )
  }

  componentDidMount() {
    const { navigate, state } = this.props.navigation
    const query = state.params.query;
    const category = state.params.category;
    const searchBy = state.params.searchBy;
    
    this.setState({
      query: query,
      isLoading: true
    })

    if (searchBy === 'title') {
      this.props.searchNews(query)
    }
    
    if (searchBy === 'category') {
      this.props.filterNews(category)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      searchArticles: nextProps.searchArticles,
      isLoading: nextProps.isLoading,
      isRefreshing: nextProps.isRefreshing
    })
  }
}

const styles = {
  searchBox: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1
  }
}

const mapStateToProps = (state) => {
  return {
    searchArticles: state.articleReducer.searchArticles,
    isLoading: state.articleReducer.isLoading,
    isRefreshing: state.articleReducer.isRefreshing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchNews: (query) => dispatch(searchArticles(query)),
    filterNews: (category) => dispatch(filterArticles(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)