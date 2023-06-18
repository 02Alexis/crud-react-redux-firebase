import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import { PrivateRoute } from "../components/PrivateRoutes";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute>
          <Login/>
        </PrivateRoute>
      } />
      <Route path="/notfound" element={<NotFound/>} />
    </Routes>
  );
};

export default AppRoutes;