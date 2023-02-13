import React from "react";

import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

export default function ProtectedRoute(props) {
  if (auth.currentUser) {
    return props.children;
  } else {
    return <Navigate to="/login" replace />;
  }
}
