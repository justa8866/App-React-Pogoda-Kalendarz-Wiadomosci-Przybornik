import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesList from './routes';
import HomePage from '../pages/HomePage/HomePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import AuthWrapper from './AuthWrapper';
import AuthPage from '../pages/AuthPage/AuthPage';

function RootNavigator(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route
            path={RoutesList.Dashboard}
            element={<DashboardPage />}
          />
        </Route>
        <Route path={RoutesList.Home} element={<HomePage />} />
        <Route path={RoutesList.Auth} element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigator;
