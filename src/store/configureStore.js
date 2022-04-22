import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

// reducers
import photo from './photo';
import token from './token';
import user from './user';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, token, user });
const store = configureStore({ reducer, middleware });

export default store;
