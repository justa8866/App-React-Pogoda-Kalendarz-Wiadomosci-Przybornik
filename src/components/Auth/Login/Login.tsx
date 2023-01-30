import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

import {
  Checkbox, FormControlLabel,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { auth } from '../Firebase/Firebase';
import { CustomPaper, SubmitButton } from '../Auth.style';
import FormikTextField from '../FormikTextField/FormikTextField';
import { initialValuesLogin, loginSchema } from './Login.validation';
import { ILogin } from './Login.types';
import { useAppDispatch } from '../../../store/hooks';
import { signin } from '../../../store/auth/authSlice';
import RoutesList from '../../../navigation/routes';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';

function Login(): JSX.Element {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [showError, setShowError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const loginSubmit = async (values: ILogin) => {
    try {
      const res: UserCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      if (res.user) {
        dispatch(signin({ user: res.user }));
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(res.user));
        }
        navigate(RoutesList.Dashboard);

        return;
      }

      throw new Error('Auth error');
    } catch (err) {
      setShowError(true);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}
        onSubmit={loginSubmit}
      >
        <Form>
          <CustomPaper>
            <FormikTextField
              id="email"
              type="email"
              label={t('auth.email')}
              name="email"
              autoComplete="email"
            />
            <FormikTextField
              name="password"
              label={t('auth.password')}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              )}
              label={t('auth.rememberMe')}
            />
            <SubmitButton type="submit" fullWidth variant="contained">
              {t('common.login')}
            </SubmitButton>
          </CustomPaper>
        </Form>
      </Formik>
      <SnackbarAlert
        open={showError}
        onCloseSnackbar={() => setShowError(false)}
        onCloseAlert={() => setShowError(false)}
        severity="error"
      >
        {t('auth.loginError')}
      </SnackbarAlert>
    </>
  );
}

export default Login;
