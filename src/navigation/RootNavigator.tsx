import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesList from './routes';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<HomePage />} />
        <Route path={RoutesList.Login} element={<LoginPage />} />
        <Route path={RoutesList.Register} element={<RegistrationPage />} />
        <Route path={RoutesList.Dashboard} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigator;
