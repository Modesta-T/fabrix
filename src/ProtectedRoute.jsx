import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebase";

const ProtectedRoute = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
