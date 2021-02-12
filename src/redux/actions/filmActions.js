import React from 'react';
import {
  FETCHING_FILMS_FAILURE,
  FETCHING_FILMS_REQUEST,
  FETCHING_FILMS_SUCCESS,
} from '../types';

export const fetchingFilmsRequest = () => ({type: FETCHING_FILMS_REQUEST});

export const fetchingFilmsSuccess = (json) => ({
  type: FETCHING_FILMS_SUCCESS,
  playload: json,
});

export const fetchingFilmsFailure = (error) => ({
  type: FETCHING_FILMS_FAILURE,
  playload: error,
});

export const fetchFilms = () => {
  return async dispatch => {
    dispatch(fetchingFilmsRequest());
    try {
      let response = await fetch((
        'https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=25', {
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              'adb453eb86msha69cd81f60ea734p10ef3bjsn283e60ec857f',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
          }
        }
      ))
      let json = await response.json();
      dispatch(fetchingFilmsSuccess(json.results));
    } catch (error) {
      dispatch(fetchingFilmsFailure(error))
    }
  }
}