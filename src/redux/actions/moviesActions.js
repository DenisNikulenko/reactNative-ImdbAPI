import {
  FETCHING_MOVIES_REQUEST,
  FETCHING_MOVIES_SUCCESS,
  FETCHING_MOVIES_FAILURE,
  FETCHING_DETAILS_REQUEST,
  FETCHING_DETAILS_SUCCESS,
  FETCHING_DETAILS_FAILURE,
  FETCHING_SERCH_REQUEST,
  FETCHING_SERCH_SUCCESS,
  FETCHING_SEARCH_FAILURE,
  FETCHING_ACTORS_SUCCESS,
  TOUCHE_ON_REFRESH,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  SERCH_BY_NAME_BOOKMARKS,
} from '../types';

import {BASE_URL, API_KEY, LANGUAGE, TOP_POPULAR} from '../../utilities/apiUrl';

//TOP MOVIES
export const fetchingMovieRequest = () => ({type: FETCHING_MOVIES_REQUEST});

export const fetchingMovieSuccess = (data) => ({
  type: FETCHING_MOVIES_SUCCESS,
  payload: data,
});

export const fetchingMoviesFailure = (error) => ({
  type: FETCHING_MOVIES_FAILURE,
  payload: error,
});


//DETAILS
export const fetchingDetailsRequest = () => ({type: FETCHING_DETAILS_REQUEST});

export const fetchingDetailsSuccess = (data) => ({
  type: FETCHING_DETAILS_SUCCESS,
  payload: data,
});

export const fetchingDetailsFailure = (error) => ({
  type: FETCHING_DETAILS_FAILURE,
  payload: error,
});


//SEARCH
export const fetchingSearchRequest = () => ({type: FETCHING_SERCH_REQUEST});

export const fetchingSearchSuccess = (data) => ({
  type: FETCHING_SERCH_SUCCESS,
  payload: data,
});

export const fetchingSearchFailure = (error) => ({
  type: FETCHING_SEARCH_FAILURE,
  payload: error,
})

//Actors
export const fetchingActorsSuccess = (data) => ({
  type: FETCHING_ACTORS_SUCCESS,
  payload: data
})


//BOOKMARS
export const addToBookmarks = (movie) => (dispatch) => {
  dispatch({  
    type: ADD_TO_BOOKMARKS,
    payload: movie
  })
}

export const removeFromBookmarks = (movie) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BOOKMARKS,
    payload: movie
  })
}

export const searchByName = (searchText) => (dispatch) => {
  dispatch({
    type: SERCH_BY_NAME_BOOKMARKS,
    payload: searchText
  })
}

//Не успел
export const touchOnRefresh = () => ({type: TOUCHE_ON_REFRESH});


//PROMISES
export const fetchPopularMovies = (page) => {
  try { 
    return async (dispatch) => {
      dispatch(fetchingMovieRequest());

      let response = await fetch(`${BASE_URL}/${TOP_POPULAR}?${API_KEY}&page=${page}&${LANGUAGE}`);
      let json = await response.json();

      json.results ? dispatch(fetchingMovieSuccess(json.results)) :  dispatch(fetchingMoviesFailure(error));
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

export const fetchSearchMovies = (search) => {
  try { 
    return async (dispatch) => {
      dispatch(fetchingSearchRequest());

      let response = await fetch(`${BASE_URL}/search/multi?${API_KEY}&${LANGUAGE}&query=${search}&page=1`);
      let json = await response.json();
      
      let result = json.results.filter(i => !i.name && !i.backdrop_path)
      console.log(result)
      json ? dispatch(fetchingSearchSuccess(result)) : fetchingSearchFailure(error);
    }
  } catch (error) {
      dispatch(fetchingSearchFailure(error));
    }
};

export const fetchActors = (id) => {
  try { 
    return async (dispatch) => {
      dispatch(fetchingMovieRequest());   

      let response = await fetch(`${BASE_URL}/movie/${id}/credits?${API_KEY}&${LANGUAGE}`);
      let json = await response.json();
      console.log(json)


      json ? dispatch(fetchingActorsSuccess(json)) : fetchingMoviesFailure(error);
    }  
  } catch (error) {
      dispatch(fetchingMoviesFailure(error));
    }
};

