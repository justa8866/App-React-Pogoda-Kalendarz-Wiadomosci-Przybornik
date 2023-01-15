import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import RoutesList from './routes';
import { selectUser } from '../store/auth/authSlice';
import { IUser } from '../types/user/IUser.type';

function AuthWrapper(): JSX.Element {
  const { isLoggedIn }: IUser = useSelector(selectUser);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={RoutesList.Login} replace state={{ from: location }} />
  );
}

export default AuthWrapper;
