import { combineReducers } from "@reduxjs/toolkit";
import api from "../api";
import { formsSlice } from "../store/slice";

const rootReducer = () =>
  combineReducers({
    [api.reducerPath]: api.reducer,
    formsSlice,
  });

export default rootReducer;
