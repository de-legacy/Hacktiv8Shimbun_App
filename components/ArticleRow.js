import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HTMLView from 'react-native-htmlview'

export default class ArticleRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const styles = StyleSheet.create({
      newsItem: {
        backgroundColor: '#fff',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10
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

      title: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold'
      }
    });

    const article = this.props.article;
    const excerpt = article.content.substring(0, 100);
    // const featuredImageUrl = article._embedded['wp:featuredmedia'][0].source_url;

    return (
      <View style={styles.newsItem}>
        <View style={styles.featuredContainer}>
          <Image style={styles.featuredImage} resizeMode="cover" source={{ uri: article.imageHeader }} />
        </View>

        <Text style={styles.title}>{article.title}</Text>

        <HTMLView
          value={`<i>${excerpt}</i>`}
        />
      </View>
    )
  }
}