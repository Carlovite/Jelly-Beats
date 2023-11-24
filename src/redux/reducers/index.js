import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  cart: {
    content: [],
  },
  user: {
    username: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload],
        },
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((beat, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
