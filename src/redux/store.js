import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {searchReducer} from './searchReducer';
import {favoriteReducer} from './favoriteReducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['searchReducer']
};
const rootReducer = combineReducers({searchReducer, favoriteReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
