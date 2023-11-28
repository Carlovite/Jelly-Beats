import { LOG_OUT, SIGN_IN } from "../actions";

const initialState = {
  authError: null,
  userEmail: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log("Login utente avvenuta con successo");
      return {
        ...state,
        authError: null,
        userEmail: action.payload,
      };
    case LOG_OUT:
      console.log("Logout utente avvenuta con successo");
      return {
        ...state,
        authError: null,
        userEmail: "",
      };
    case "SIGN_IN_ERROR":
      console.error("Errore durante l'accesso:", action.payload);
      return {
        ...state,
        authError: action.payload,
      };
    case "LOG_OUT_ERROR":
      console.error("Errore durante il logout:", action.payload);
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
