import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./container/Dashboard";
import Login from "./container/Login";
import Register from "./container/Register";
import Settings from "./container/Settings";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
