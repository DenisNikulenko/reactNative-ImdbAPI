import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import moviesReducer from './reducers/moviesReducer';
import userReducer from './reducers/userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmarksList'],
};

const rootReducer = combineReducers({
  moviesReducer: persistReducer(persistConfig, moviesReducer),
  userReducer: userReducer
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const appPersist = persistStore(store);

export {store, appPersist};
