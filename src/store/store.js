import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import carReducer from './car';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({

  user: userReducer,
  cars: carReducer,

});

const store = configureStore({
  reducer: rootReducer,
},
applyMiddleware(thunk, logger));

export default store;
