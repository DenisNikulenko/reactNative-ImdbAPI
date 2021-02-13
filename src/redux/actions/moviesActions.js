import {
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_FAILURE,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS
} from '../types';

import {BASE_URL, API_KEY} from '../../utilities/apiUrl';

// export const fetchingFilmsRequest = () => ({type: FETCHING_FILMS_REQUEST});

export const fetchingSuccessFailure = (data) => ({
  type: FETCHING_MOVIES_SUCCESS,
  payload: data,
});

export const fetchingMoviesFailure = (error) => ({
  type: FETCHING_MOVIES_FAILURE,
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
      let response = await fetch(`${BASE_URL}/movie/popular?${API_KEY}`);
      
      let json = await response.json();
      if (json.results) {
        dispatch(fetchingSuccessFailure(json.results));
        console.log("Успешно")

      } else {
        dispatch(fetchingMoviesFailure(error))
      }
    }
  } catch (error) {
      dispatch(fetchingMoviesFailure(error));
    }
};

//  const fetchFilmsPopular = () => {
//   try { 
//     return async (dispatch) => {   
//       let response = await fetch(`${BASE_URL}/movie/popular?${API_KEY}`);
      
//       let json = await response.json();
//       if (json.results) {
//         dispatch(fetchingFilmsSuccess(json.results));
//       } else {
//         dispatch(fetchingFilmsFailure(error))
//       }
//     }
//   } catch (error) {
//       dispatch(fetchingFilmsFailure(error));
//     }
// };
