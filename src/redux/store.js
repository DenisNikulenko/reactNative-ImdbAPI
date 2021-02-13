import {createStore, combineReducers, applyMiddleware} from "redux";
import moviesReducer from "./reducers/moviesReducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movies: moviesReducer
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)

export default store;