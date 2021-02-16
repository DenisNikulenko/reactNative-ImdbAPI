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
  FETCHING_ACTORS_SUCCESS,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  TOUCHE_ON_REFRESH,
  SERCH_BY_NAME_BOOKMARKS,
} from '../types';

const initialState = {
  movies: [],
  detailsMovie: [],
  actors: [],

  searchData: [],
  isFetching: false,
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
        searchData: [...state.searchData, ...action.payload],
        isFetching: false,
      };

    case FETCHING_SEARCH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };

    //Actors
    case FETCHING_ACTORS_SUCCESS:
      return {
        ...state,
        actors: action.payload,
        isFetching: false,
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

    case SERCH_BY_NAME_BOOKMARKS:
      return {
        ...state,
        isSearchActive: !!action.payload.length > 0 || false,
        filteredBookmarkList: state.bookmarksList.filter(movie => {
          return movie.title.toLowerCase().search(action.payload.toLowerCase()) !== -1

        })
      }

    // Не успел
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
