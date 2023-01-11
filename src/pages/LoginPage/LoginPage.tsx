import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { signin } from '../../store/auth/authSlice';
import RoutesList from '../../navigation/routes';

function LoginPage() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(signin())}>
        login
      </button>
      <Link to={RoutesList.Dashboard}>dashboard</Link>
    </div>
  );
}

export default LoginPage;
