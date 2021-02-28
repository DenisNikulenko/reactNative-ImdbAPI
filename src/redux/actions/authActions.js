import {SET_USER_DATA, CLEAR_DATA} from './contants';

export const clearData = () => ({ type: CLEAR_DATA });

export const setUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
};

