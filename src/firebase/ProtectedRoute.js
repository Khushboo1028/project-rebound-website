import React from "react";

import { Navigate } from "react-router-dom";
import { auth } from "./firebase";

export default function ProtectedRoute(props) {
  //   if (auth.currentUser) {
  //     return props.children;
  //   } else {
  //     return <Navigate to="/login" replace />;
  //   }

  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log("signed in");
      console.log(props);

      return props.children;
    } else {
      console.log("signed out");
      return <Navigate to="/login" replace />;
    }
  });
}
