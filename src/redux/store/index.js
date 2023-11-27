import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";
import beatReducer from "../reducers/beat";

const BigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  beats: beatReducer,
});
const store = configureStore({
  reducer: BigReducer,
});
export default store;
