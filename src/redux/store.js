import {createStore, combineReducers, applyMiddleware} from "redux";
import movieReducer from "./reducers/movieReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movieReducer: movieReducer
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)

export default store;