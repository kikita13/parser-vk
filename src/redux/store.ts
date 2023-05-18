
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user";

const rootReducer = combineReducers({
  users: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch