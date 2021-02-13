import {
    FETCHING_MOVIES_FAILURE,
    FETCHING_MOVIES_REQUEST,
    FETCHING_MOVIES_SUCCESS,
  } from '../types';

const initialState = {
    movies: [],
    bookmarks: [],
    isFetching: false,
    errorMessage: "",
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_MOVIES_REQUEST:
            return {
                ...state, isFetching: true
            }
        case FETCHING_MOVIES_FAILURE:
            return {
                ...state, isFetching: false, errorMessage: action.payload
            }
        case FETCHING_MOVIES_SUCCESS: 
            return {
                ...state, isFetching: false, movies: action.payload
            }

        default:
            return state
    }
}

export default moviesReducer;