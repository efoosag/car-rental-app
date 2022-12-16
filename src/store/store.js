import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReducer } from "./userSlice";
import rentsReducer from "./rentsSlice";
import carReducer from './car';
import detailReducer from "./detail";

const rootReducer = combineReducers({
  user: userReducer,
  rents: rentsReducer,
  cars: carReducer,
  detail: detailReducer,

});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk, logger),
);

export default store;
