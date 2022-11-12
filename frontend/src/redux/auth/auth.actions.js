import axios from "axios";
import {
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
} from "./auth.types";

//https://evening-taiga-24056.herokuapp.com/
//https://evening-taiga-24056.herokuapp.com/user/
//https://evening-taiga-24056.herokuapp.com/user/signup
// https://evening-taiga-24056.herokuapp.com/user/login

// login
export const login = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let response = await axios.post(
      "https://evening-taiga-24056.herokuapp.com/user/login",
      creds
    );

    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data });

    return response.data; // not imp
  } catch {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

//sign up
export const signup = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let response = await axios.post(
      "https://evening-taiga-24056.herokuapp.com/user/signup",
      creds
    );

    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data });

    return response.data; // not imp
  } catch {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

// logout
export const logout = () => async (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
};

// action me nexted function hote hai thunk ki wajah se 1 for promise and second for dispatch and asyncronas things.
