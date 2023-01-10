import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import RoutesList from '../../navigation/routes';
import { selectUser } from '../../store/auth/authSlice';

export default function DashboardPage() {
  const userInfo = useSelector(selectUser);

  // show unauthorized screen if no user is found in redux store
  if (!userInfo.isLoggedIn) {
    return (
      <div>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to={RoutesList.Login}>Login</NavLink>
          to gain access
        </span>
      </div>
    );
  }

  // returns child route elements
  return <Outlet />;
}
