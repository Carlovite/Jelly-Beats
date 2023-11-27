import { SIGN_IN } from "../actions";

const initialState = {
  authError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("Login utente avvenuta con successo");
      return {
        ...state,
        authError: null,
      };
    case "SIGN_IN_ERROR":
      console.error("Errore durante l'accesso:", action.payload);
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
