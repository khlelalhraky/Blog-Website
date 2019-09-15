import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import { LOGIN_USER } from "./Actions/Types";

if (localStorage.jsonWebToken) {
  store.dispatch({
    type: LOGIN_USER,
    payload: { token: localStorage.jsonWebToken }
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
