import {
    FETCHING_FILMS_FAILURE,
    FETCHING_FILMS_REQUEST,
    FETCHING_FILMS_SUCCESS,
  } from '../types';

const initialState = {
    isFetching: false,
    errorMessage: "",
    films: []
}

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FILMS_REQUEST:
            return {
                ...state, isFetching: true
            }
        case FETCHING_FILMS_FAILURE:
            return {
                ...state, isFetching: false, errorMessage: action.payload
            }
        case FETCHING_FILMS_SUCCESS: 
            return {
                ...state, isFetching: false, films: action.payload
            }

        default:
            return state
    }
}

export default movieReducer;