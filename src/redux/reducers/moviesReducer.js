import {
  FETCHING_MOVIES_FAILURE,
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_DETAILS_REQUEST,
  FETCHING_DETAILS_SUCCESS,
  FETCHING_DETAILS_FAILURE,
  FETCHING_SERCH_REQUEST,
  FETCHING_SERCH_SUCCESS,
  FETCHING_SEARCH_FAILURE,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
} from '../types';

const initialState = {
  movies: [],
  detailsMovie: [],
  searchData: [],
  bookmarksList: [],
  isFetching: true,
  errorMessage: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
//TOP 30
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

      case FETCHING_MOVIES_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };
//DETAILS
      case FETCHING_DETAILS_REQUEST:
        return {
          ...state,
          isFetching: true,
        };
  
      case FETCHING_DETAILS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          detailsMovie: action.payload,
        };

      case FETCHING_DETAILS_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };

//SEARCH
      case FETCHING_SERCH_REQUEST:
        return {
          ...state,
          isFetching: true
        }

      case FETCHING_SERCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          searchData: action.payload,
        }
        
      case FETCHING_SEARCH_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        }
//BOOKMARKS
    case ADD_TO_BOOKMARKS: 
      return {
          ...state,
          bookmarksList:[...state.bookmarksList, action.payload],
      }
      
      case REMOVE_FROM_BOOKMARKS: 
        return {
            ...state,
            bookmarksList: state.bookmarksList.filter(movie => movie.id !== action.payload.id) 
        }

    default:
      return state;
  }
};

export default moviesReducer;
