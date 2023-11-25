import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart";
import userReducer from "../reducers/user";

const BigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
const store = configureStore({
  reducer: BigReducer,
});
export default store;
