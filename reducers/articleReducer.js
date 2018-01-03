import { 
  FETCH_ARTICLES, 
  ADD_BOOKMARK_ARTICLE,
  DELETE_BOOKMARK_ARTICLE,
  DELETE_ALL_BOOKMARK_ARTICLE,
  SEARCH_ARTICLES
} from '../constants'

const initialState = {
  articles: [],
  searchArticles: [],
  isLoading: false,
  isRefreshing: false
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      const newArticles = state.articles.concat(action.payload.articles)
      return { ...state, articles: newArticles }
    
    case ADD_BOOKMARK_ARTICLE:      
      return state

    case SEARCH_ARTICLES:
      state.searchArticles = [];
      const newSearchArticles = state.searchArticles.concat(action.payload.searchArticles)
      return { ...state, searchArticles: newSearchArticles }

    default:
      return state
  }
}