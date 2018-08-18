import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk, logger];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export {
  persistor,
  store,
};
