import React from 'react';

import {
  Box, Checkbox, FormControlLabel, TextField,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { signin } from '../../../store/auth/authSlice';
import RoutesList from '../../../navigation/routes';
import { SubmitButton, SubmitLink } from '../Auth.style';

function Login(): JSX.Element {
  const [t] = useTranslation();

  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        type="email"
        label={t('auth.email')}
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label={t('auth.password')}
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={t('auth.rememberMe')}
      />
      <SubmitLink to={RoutesList.Dashboard}>
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => dispatch(signin())}
        >

          {t('common.login')}
        </SubmitButton>
      </SubmitLink>
    </Box>
  );
}

export default Login;
