import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function createStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });
}
