export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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
