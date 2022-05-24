import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../customHooks/useFirebase";
import Loader from "../shared/Loader/Loader";



const PrivateRoute = ({ children }) => {
  const location=useLocation()
  const { user, isLoading } =useFirebase()
  if (isLoading) {
    return <Loader></Loader>
  }
  return <div>{user.email ? children : <Navigate state={{from:location}} to="/login"/>}</div>
};

export default PrivateRoute;
