import { 
  FETCH_ARTICLES, 
  ADD_BOOKMARK_ARTICLE,
  DELETE_BOOKMARK_ARTICLE,
  DELETE_ALL_BOOKMARK_ARTICLE
} from 'constants'

const initialState = {
  articles: [],
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      const newArticles = state.articles.concat(action.payload.articles)
      return { ...state, articles: newArticles }
    
    case ADD_BOOKMARK_ARTICLE:      
      return state

    default:
      return state
  }
}