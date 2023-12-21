import { combineReducers } from "@reduxjs/toolkit";
import machineSlice from "./features/machineSlice";
// import authSlice from "./features/authSlice";

const rootReducer = combineReducers({
  machines: machineSlice,
  // auth: authSlice
});

export default rootReducer;
