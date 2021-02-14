import {
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_FAILURE,
  FETCHING_DETAILS_REQUEST,
  FETCHING_DETAILS_SUCCESS,
  FETCHING_DETAILS_FAILURE,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
} from '../types';

import {BASE_URL, API_KEY, LANGUAGE, TOP_POPULAR} from '../../utilities/apiUrl';

export const fetchingMovieRequest = () => ({type: FETCHING_MOVIES_REQUEST});

export const fetchingMovieFailure = (data) => ({
  type: FETCHING_MOVIES_SUCCESS,
  payload: data,
});

export const fetchingMoviesFailure = (error) => ({
  type: FETCHING_MOVIES_FAILURE,
  payload: error,
});




export const fetchingDetailsRequest = () => ({type: FETCHING_DETAILS_REQUEST});

export const fetchingDetailsSuccess = (data) => ({
  type: FETCHING_DETAILS_SUCCESS,
  payload: data,
});

export const fetchingDetailsFailure = (error) => ({
  type: FETCHING_DETAILS_FAILURE,
  payload: error,
});




export const addToBookmarks = (movie) => ({
  type: ADD_TO_BOOKMARKS,
  payload: movie
})

export const removeFromBookmarks = (movie) => ({
  type: REMOVE_FROM_BOOKMARKS,
  payload: movie
})





export const fetchPopularMovies = () => {
  try { 
    return async (dispatch) => {
      dispatch(fetchingMovieRequest());

      let response = await fetch(`${BASE_URL}/${TOP_POPULAR}?${API_KEY}&page=1&${LANGUAGE}`);
      let json = await response.json();

      json.results ? dispatch(fetchingMovieFailure(json.results)) :  dispatch(fetchingMoviesFailure(error));
    }
  } catch (error) {
      dispatch(fetchingMoviesFailure(error));
    }
};

export const fetchDetailsMovie = (id) => {
  try { 
    return async (dispatch) => {
      dispatch(fetchingMovieRequest());   

      let response = await fetch(`${BASE_URL}/movie/${id}?${API_KEY}&${LANGUAGE}`);
      let json = await response.json();

      json ? dispatch(fetchingDetailsSuccess(json)) : fetchingMoviesFailure(error);
    }
    
  } catch (error) {
      dispatch(fetchingMoviesFailure(error));
    }
};