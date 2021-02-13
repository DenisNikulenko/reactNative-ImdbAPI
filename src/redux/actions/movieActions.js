import {
  FETCHING_FILMS_FAILURE,
  FETCHING_FILMS_REQUEST,
  FETCHING_FILMS_SUCCESS,
} from '../types';

export const fetchingFilmsRequest = () => ({type: FETCHING_FILMS_REQUEST});

export const fetchingFilmsSuccess = (json) => ({
  type: FETCHING_FILMS_SUCCESS,
  payload: json
});

export const fetchingFilmsFailure = (error) => ({
  type: FETCHING_FILMS_FAILURE,
  payload: error,
});

export const fetchFilms = () => {
  return async dispatch => {
    dispatch(fetchingFilmsRequest());
    try {
      let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a0365c3dfe181648feb572b2dbf405c8")
      let json = await response.json();
      console.log(json)
      dispatch(fetchingFilmsSuccess(json));
    } catch (error) {
      dispatch(fetchingFilmsFailure(error))
    }
  }
}