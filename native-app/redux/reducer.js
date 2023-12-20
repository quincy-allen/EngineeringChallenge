import { combineReducers } from "@reduxjs/toolkit";
import machineSlice from "./features/machineSlice";

const rootReducer = combineReducers({
  machines: machineSlice,
});

export default rootReducer;
