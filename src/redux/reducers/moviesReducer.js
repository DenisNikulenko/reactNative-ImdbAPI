import {
  FETCHING_MOVIES_FAILURE,
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_SCROLL,
  FETCHING_DETAILS_REQUEST,
  FETCHING_DETAILS_SUCCESS,
  FETCHING_DETAILS_FAILURE,
  FETCHING_SERCH_REQUEST,
  FETCHING_SERCH_SUCCESS,
  FETCHING_SEARCH_FAILURE,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  TOUCHE_ON_REFRESH,
  SEARCG_BY_NAME,
} from '../types';

const initialState = {
  movies: [],
  detailsMovie: [],

  searchData: [],
  isFetching: true,
  errorMessage: '',
  
  bookmarksList: [],
  filteredBookmarkList: [],
  isSearchActive: false
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {

    //TOP MOVIES
    case FETCHING_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: [...state.movies, ...action.payload], //[state.movies, ...action.payload]
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
        isFetching: true,
      };

    case FETCHING_SERCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchData: action.payload,
      };

    case FETCHING_SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };


    //BOOKMARKS
    case ADD_TO_BOOKMARKS:
      return {
        ...state,
        bookmarksList: [...state.bookmarksList, action.payload],
      };

    case REMOVE_FROM_BOOKMARKS:
      return {
        ...state,
        bookmarksList: state.bookmarksList.filter(
          (movie) => movie.id !== action.payload.id,
        ),
      };

    case SEARCG_BY_NAME:
      return {
        ...state,
        isSearchActive: !!action.payload.length > 0 || false,
        filteredBookmarkList: state.bookmarksList.filter(movie => {
          return movie.title.toLowerCase().search(action.payload.toLowerCase()) !== -1

        })
      }

      //
    case TOUCHE_ON_REFRESH: 
      return {
        ...state,
        movies: []
      }

    default:
      return state;
  }
};

export default moviesReducer;
