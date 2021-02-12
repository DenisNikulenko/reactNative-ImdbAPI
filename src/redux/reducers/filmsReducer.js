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

const filmsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FILMS_SUCCESS:
            return {
                ...state, isFetching: true
            }
        case FETCHING_FILMS_FAILURE:
            return {
                ...state, isFetching: false, errorMessage: action.playload
            }
        case FETCHING_FILMS_REQUEST: 
            return {
                ...state, isFetching: false, films: action.playload
            }

        default:
            return state
    }
}

export default filmsReducer