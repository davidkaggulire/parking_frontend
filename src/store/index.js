import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


import loginSlice from "./loginSlice";
import vehicleSlice from "./vehicleSlice";

const reducers = combineReducers({
  login: loginSlice.reducer,
  vehicle: vehicleSlice.reducer
});

const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  if(action.type === "DESTROY_SESSION"){
    localStorage.removeItem('persist:root');
    state = undefined;
  }
     
  
  return reducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ui"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;