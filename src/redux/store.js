import {createStore, combineReducers, applyMiddleware} from "redux";
import filmReducer from "./reducers/filmsReducer";
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(filmReducer)

export default store;