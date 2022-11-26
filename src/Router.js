import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./container/Dashboard";
import Login from "./container/Login";
import Register from "./container/Register";
import Settings from "./container/Settings";
function Router() {
  const { userInfo } = useSelector((state) => state.user);
  if (userInfo) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
