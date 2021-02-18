import {
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  SERCH_BY_NAME_BOOKMARKS,
} from '../types';

const initialState = {
  bookmarksList: [],
  filteredBookmarkList: [],
  isSearchActive: false
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    //BOOKMARKS
    case ADD_TO_BOOKMARKS:
      return {
        ...state,
        bookmarksList: [...state.bookmarksList, action.payload],
      };

    case REMOVE_FROM_BOOKMARKS:
      return {
        ...state,
        bookmarksList: state.bookmarksList.filter(
          (movie) => movie.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};

export default moviesReducer;
