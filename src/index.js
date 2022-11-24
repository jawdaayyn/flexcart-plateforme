import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Navbar from "./components/shared/Navbar";
import "./index.css";
import Router from "./Router";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navbar />
    <Router />
  </Provider>
);
