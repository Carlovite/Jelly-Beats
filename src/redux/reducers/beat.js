import { GET_DATA } from "../actions";

const initialState = {
  stock: [],
};

const beatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        stock: action.payload,
      };

    default:
      return state;
  }
};
export default beatReducer;
