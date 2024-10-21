import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";

import deviceDetailsReducer from "./deviceDetails/deviceDetailsSlice";
import houseDetailsReducer from "./houseDetails/houseDetailsSlice";
import userInputSlice from "./userInput/userInputSlice";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userSlice from "./user/userSlice";
import devicesSlice from "./device/deviceSlice";

const persistConfig = {
  key: "admin",
  storage,
};

const rootReducer = combineReducers({
  deviceDetails: deviceDetailsReducer,
  houseDetails: houseDetailsReducer,
  userInput: userInputSlice,
  user: userSlice,
  devices: devicesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
