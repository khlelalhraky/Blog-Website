import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./Types";
import axios from "axios";

export const registerUser = user => dispatch =>
  axios
    .post("/auth/register", user)
    .then(res => dispatch({ type: REGISTER_USER, payload: res.data.success }));

export const loginUser = user => dispatch =>
  axios.post("/auth/login", user).then(res => {
    localStorage.jsonWebToken = res.data.user.token;
    dispatch({ type: LOGIN_USER, payload: res.data.user });
  });

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jsonWebToken");
  dispatch({ type: LOGOUT_USER });
};
