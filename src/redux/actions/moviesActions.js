import {
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
} from './contants';

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

