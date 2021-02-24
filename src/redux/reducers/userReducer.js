import {SET_USER_DATA, CLEAR_DATA} from '../actions/contants';

const initialState = {
  currentUser: null
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      console.log(action.payload)
      return {...state, currentUser: action.payload}

    case CLEAR_DATA:
      return initialState
    default: 
      return state;
  }
}

export default userReducer;