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
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { StackNavigator } from 'react-navigation';
import axios from 'axios'
import ArticleRow from '../components/ArticleRow'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/articleActions'

class HomeScreen extends Component {  
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    let headerRight = (
      <View style={{ marginRight: 10 }}>
        <Icon
          name='search'
          type='font-awesome'
          color='#fff'
          onPress={params.onSearchPress ? params.onSearchPress : () => null}
         />
      </View>
    );
 
    return {  
      headerTitle: 'H8Shimbun',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0097A7',  
      },
      headerRight: headerRight,
     };
  };

  constructor(props) {
    super(props)

    this.onSearchPress = this.onSearchPress.bind(this)
    this.doSearch = this.doSearch.bind(this)

    this.state = {
      articles: [],
      isLoading: false,
      isRefreshing: false,
      isSearching: false,
      page: 1,
      query: ''
    }
  }

  onSearchPress() {
    if (this.state.isSearching === false) {
      this.setState({
        isSearching: true
      })
    } else {
      this.setState({
        isSearching: false,
        query: ''
      })
    }
  }

  doSearch(query) {
    this.setState({
      query: query
    })
  }

  fetchNewsAPI() {
    this.setState({
      isLoading: true
    })

    this.props.loadNews(this.state.page)
  }

  reloadNewsAPI() {
    this.setState({
      isRefreshing: true,
      articles: []
    })

    this.props.loadNews(this.state.page)
  }

  refreshData() {
    this.setState({
      isRefreshing: true
    })

    this.reloadNewsAPI()
  }

  loadMoreData() {
    if (this.state.articles.length > 0) {
      

      this.setState({
        isLoading: true
      })

      let page = this.state.page += 1

      this.props.loadNews(page)
    }
  }

  componentWillMount() {
    this.fetchNewsAPI()
  }

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({ onSearchPress: this.onSearchPress });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      articles: nextProps.articles,
      isLoading: nextProps.isLoading,
      isRefreshing: nextProps.isRefreshing
    })
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

      searchBox: { 
        height: 40, 
        width: '100%', 
        backgroundColor: '#fff', 
        borderColor: 'gray', 
        borderWidth: 1 
      }
    }); 

    return (
      <View style={styles.container}>
        {
          this.state.isSearching && <View style={{ width: '100%'}}>
            <TextInput
              placeholder='Search here..'
              style={styles.searchBox}
              value={this.state.query}
              onChangeText={(text) => this.doSearch(text)}
              onSubmitEditing={() => navigate('Search', { searchBy: 'title', query: this.state.query })}
            />
          </View>
        }

        <FlatList
          onEndReached={() => this.loadMoreData()}
          onRefresh={() => this.refreshData()}
          refreshing={this.state.isRefreshing}
          data={this.state.articles}
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

        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
          // onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
        >
          <Tab
            barBackgroundColor="#5D4037"
            label="Home"
            icon={<Icon size={24} color="white" type='font-awesome' name="home" />}
          />
          <Tab
            barBackgroundColor="#37474F"
            label="Bookmark"
            onPress={() => navigate('Bookmark')}
            icon={<Icon size={24} color="white" type='font-awesome' name="star" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Category"
            onPress={() => navigate('Category')}
            icon={<Icon size={24} color="white" type='font-awesome' name="tags" />}
          />
          <Tab
            barBackgroundColor="#3E2723"
            label="About"
            onPress={() => navigate('About')}
            icon={<Icon size={24} color="white" type='font-awesome' name="cog" />}
          />
        </BottomNavigation>
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleReducer.articles,
    isLoading: state.articleReducer.isLoading,
    isRefreshing: state.articleReducer.isRefreshing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNews: (page) => dispatch(fetchArticles(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
// export default HomeScreen