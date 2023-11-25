import { LOG_OUT, SET_USERNAME } from "../actions";

const initialState = {
  username: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,

        username: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,

        username: "",
      };

    default:
      return state;
  }
};
export default userReducer;
