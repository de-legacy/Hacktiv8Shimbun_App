import { 
  FETCH_ARTICLES, 
  ADD_BOOKMARK_ARTICLE,
  DELETE_BOOKMARK_ARTICLE,
  DELETE_ALL_BOOKMARK_ARTICLE,
  SEARCH_ARTICLES,
  FILTER_BY_CATEGORY
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

    case FILTER_BY_CATEGORY:
      state.searchArticles = [];
      const filterArticles = state.searchArticles.concat(action.payload.filterArticles)
      return { ...state, searchArticles: filterArticles }

    default:
      return state
  }
}