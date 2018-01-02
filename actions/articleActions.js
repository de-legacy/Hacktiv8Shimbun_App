import axios from 'axios'
import {
  FETCH_ARTICLES,
  ADD_BOOKMARK_ARTICLE,
  DELETE_BOOKMARK_ARTICLE,
  DELETE_ALL_BOOKMARK_ARTICLE
} from 'constants'

export const fetchArticles = () => {
  return (dispatch) => {
    axios.get(API_URL)
      .then(data => {
        console.log(`Result ${data}`)

        dispatch({
          type: FETCH_ARTICLES,
          payload: {
            articles: data,
          }
        })
      }).catch(err => {
        console.log({ message: 'Something wrong', error: err.message })
      });
  }
}
