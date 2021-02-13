import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from 'redux-persist';

import moviesReducer from "./reducers/moviesReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage 
}

const rootReducer = combineReducers({
    movies: persistReducer(persistConfig, moviesReducer)
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)
const appPersist = persistStore(store)

export default {store, appPersist};