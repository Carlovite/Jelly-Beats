import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { database } from "../../firebase";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USERNAME = "SET_USERNAME";
export const LOG_OUT = "LOG_OUT";
export const GET_DATA = "GET_DATA";
export const DELETE_DATA = "DELETE_DATA";

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

export const getBeats = () => {
  return async (dispatch) => {
    const ref = collection(database, "beats");
    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      if (results) {
        dispatch({
          type: GET_DATA,
          payload: results,
        });
      } else {
        console.log("errore");
      }
    });
  };
};

export const deleteElement = (id) => {
  return async (dispatch) => {
    const ref = doc(database, "beats", id);
    await deleteDoc(ref);
    dispatch({
      type: DELETE_DATA,
    });
  };
};
