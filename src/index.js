import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import create from "./store";
import { Provider } from "react-redux";

const token = localStorage.getItem("token");
const store = create({ token });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
