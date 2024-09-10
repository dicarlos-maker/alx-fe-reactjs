
import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './Login';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
