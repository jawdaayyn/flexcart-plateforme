import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/shared/Navbar";
import "./index.css";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router />
  </React.StrictMode>
);
