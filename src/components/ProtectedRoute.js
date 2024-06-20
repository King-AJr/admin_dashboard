import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { state } = useContext(AuthContext);

  return state.user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
