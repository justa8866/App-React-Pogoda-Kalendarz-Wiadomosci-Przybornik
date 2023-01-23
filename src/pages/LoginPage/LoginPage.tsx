import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { signin } from '../../store/auth/authSlice';
import RoutesList from '../../navigation/routes';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(signin())}>
        login
      </button>
      <Link to={RoutesList.Dashboard}>dashboard</Link>
    </>
  );
}

export default LoginPage;
