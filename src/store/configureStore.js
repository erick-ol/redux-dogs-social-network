import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// simple reducer so I can create the combine reducers
const simpleReducer = () => 0;

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ simpleReducer });
const store = configureStore({ reducer, middleware });

export default store;
