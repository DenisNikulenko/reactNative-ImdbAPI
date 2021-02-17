import {
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  SERCH_BY_NAME_BOOKMARKS,
} from '../types';

//BOOKMARS
export const addToBookmarks = (movie) =>  {
  return {  
    type: ADD_TO_BOOKMARKS,
    payload: movie
  }
}

export const removeFromBookmarks = (movie) => {
  return {
    type: REMOVE_FROM_BOOKMARKS,
    payload: movie
  }
  }

export const searchByName = (searchText) => (dispatch) => {
  dispatch({
    type: SERCH_BY_NAME_BOOKMARKS,
    payload: searchText
  })
}


