import {
  ADD_TO_CART,
  LOG_OUT,
  REMOVE_FROM_CART,
  SET_USERNAME,
} from "../actions";

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
    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          username: "",
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
