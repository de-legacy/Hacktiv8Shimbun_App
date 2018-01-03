import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview'
import { Icon } from 'react-native-elements'

export default class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    let headerRight = (
      <View style={{ marginRight: 10 }}>
        <Icon
          name='star'
          type='font-awesome'
          color={params.setStarColor}
          onPress={params.onBookmarkPress ? params.onBookmarkPress : () => null}
        />
      </View>
    );

    return {
      headerTitle: navigation.state.params.article.title,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'gold',
      },
      headerRight: headerRight,
    };
  };

  constructor(props) {
    super(props)

    this.state = {
      news: [],
      isBookmarked: false
    }

    this.onBookmarkPress = this.onBookmarkPress.bind(this)
    this.setStarColor = this.setStarColor.bind(this)
  }

  onBookmarkPress() {
    alert("Bookmarked")

    if (this.state.isBookmarked === false) {
      this.setState({
        isBookmarked: true
      })

      console.log(`===============BOOKMARKED`)
      console.log(this.state.isBookmarked)
    }
  }

  setStarColor() {
    if (this.state.isBookmarked) {
      this.props.navigation.setParams({ setStarColor: 'crimson' });
    } else {
      this.props.navigation.setParams({ setStarColor: 'white' });
    }
  }

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({ onBookmarkPress: this.onBookmarkPress });

    this.setStarColor()
  }

  render() {
    const styles = StyleSheet.create({
      title: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
      },

      content: {
        padding: 10
      },

      featuredImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },

      featuredContainer: {
        position: 'relative',
        height: 150,
        flex: 1
      },
    });

    const { navigate, state } = this.props.navigation
    const article = state.params.article;
    const content = article.content;

    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Text style={styles.title}>{article.title}</Text>

        <View style={styles.featuredContainer}>
          <Image style={styles.featuredImage} resizeMode="cover" source={{ uri: article.imageHeader }} />
        </View>

        <HTMLView
          style={styles.content}
          value={content}
        />
      </ScrollView>
    )
  }
}