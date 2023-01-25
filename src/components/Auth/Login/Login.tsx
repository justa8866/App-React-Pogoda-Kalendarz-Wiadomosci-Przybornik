import React from 'react';

import { Formik, Form } from 'formik';

import { Checkbox, FormControlLabel } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { CustomPaper, SubmitButton } from '../Auth.style';
import validationSchema from './ValidationScheme';
import FormikTextField from '../FormikTextField/FormikTextField';

function Login(): JSX.Element {
  const [t] = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
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
            control={<Checkbox value="remember" color="primary" />}
            label={t('auth.rememberMe')}
          />
          <SubmitButton type="submit" fullWidth variant="contained">

            {t('common.login')}
          </SubmitButton>
        </CustomPaper>
      </Form>
    </Formik>
  );
}

export default Login;
