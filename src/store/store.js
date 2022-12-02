import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({

  user: userReducer,

});

const store = configureStore({
  reducer: rootReducer,
},
applyMiddleware(thunk, logger));

export default store;
