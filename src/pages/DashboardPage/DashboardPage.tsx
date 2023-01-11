import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import RoutesList from '../../navigation/routes';
import { selectUser } from '../../store/auth/authSlice';

function DashboardPage() {
  const userInfo = useSelector(selectUser);
  return (
    <div>
      {userInfo.isLoggedIn ? <Navigate replace to={RoutesList.Dashboard} /> : <Outlet />}
    </div>
  );
}
export default DashboardPage;
