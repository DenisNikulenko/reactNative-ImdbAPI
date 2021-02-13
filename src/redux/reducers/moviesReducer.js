import {
  FETCHING_MOVIES_FAILURE,
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
} from '../types';

const initialState = {
  movies: [],
  bookmarksList: [],
  isFetching: false,
  errorMessage: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
      };

    case ADD_TO_BOOKMARKS: 
      return {
          ...state,
          bookmarksList:[...state.bookmarksList, action.payload]
      }
      
      case REMOVE_FROM_BOOKMARKS: 
      return {
          ...state,
          bookmarksList: state.bookmarksList.filter(movie => movies.id !== action.payload.id) 

      }

    case FETCHING_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
