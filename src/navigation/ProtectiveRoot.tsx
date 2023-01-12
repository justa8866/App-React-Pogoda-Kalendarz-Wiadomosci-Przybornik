import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import RoutesList from './routes';
import { selectUser } from '../store/auth/authSlice';

type ProtectedRouteProps = {
  outlet: JSX.Element;
};

function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const { isLoggedIn } = useSelector(selectUser);

  return isLoggedIn ? outlet : <Navigate to={RoutesList.Login} />;
}

export default ProtectedRoute;
