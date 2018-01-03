import axios from 'axios'
import {
  API_URL,
  FETCH_ARTICLES,
  ADD_BOOKMARK_ARTICLE,
  DELETE_BOOKMARK_ARTICLE,
  DELETE_ALL_BOOKMARK_ARTICLE,
  SEARCH_ARTICLES
} from '../constants'

export const fetchArticles = (page) => {
  return (dispatch) => {
    axios.get(API_URL + '/latest/' + page)
      .then(({ data }) => {

        dispatch({
          type: FETCH_ARTICLES,
          payload: {
            articles: data.articles
          }
        })
      }).catch(err => {
        console.log({ message: 'Something wrong', error: err.message })
      });
  }
}

export const searchArticles = (query) => {
  return (dispatch) => {
    axios.get(API_URL + '/search?keyword=/' + query)
      .then(({ data }) => {

        dispatch({
          type: SEARCH_ARTICLES,
          payload: {
            searchArticles: data.articles
          }
        })
      }).catch(err => {
        console.log({ message: 'Something wrong', error: err.message })
      });
  }
}