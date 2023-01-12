import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import RoutesList from './routes';
import { selectUser } from '../store/auth/authSlice';

function AuthWrapper() {
  const { isLoggedIn } = useSelector(selectUser);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={RoutesList.Login} replace state={{ from: location }} />
  );
}

export default AuthWrapper;
