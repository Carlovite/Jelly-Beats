export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USERNAME = "SET_USERNAME";
export const LOG_OUT = "LOG_OUT";

export const addToCart = (r) => {
  return {
    type: ADD_TO_CART,
    payload: r,
  };
};

export const removeFromCart = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  };
};
export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};
export const setLogOut = () => {
  return {
    type: LOG_OUT,
  };
};
