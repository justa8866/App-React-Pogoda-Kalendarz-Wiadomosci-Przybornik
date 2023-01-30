import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { CustomPaper, SubmitButton } from '../Auth.style';
import FormikTextField from '../FormikTextField/FormikTextField';
import {
  initialValuesRegistration,
  registrationSchema,
} from './Registration.validation';
import { IRegistration } from './Registration.types';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';

function Registration(): JSX.Element {
  const [t] = useTranslation();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const registrationSubmit = async (values: IRegistration) => {
    try {
      const res: UserCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );

      if (res.user) {
        setShowSuccess(true);

        return;
      }

      throw new Error('Auth error');
    } catch (error) {
      setShowError(true);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValuesRegistration}
        validationSchema={registrationSchema}
        onSubmit={registrationSubmit}
      >
        <Form>
          <CustomPaper>
            <FormikTextField
              id="username"
              label={t('auth.username')}
              name="username"
              autoComplete="username"
            />
            <FormikTextField
              id="age"
              label={t('auth.age')}
              type="number"
              name="age"
              autoComplete="age"
            />
            <FormikTextField
              id="email"
              label={t('auth.email')}
              name="email"
              autoComplete="email"
            />
            <FormikTextField
              id="confirmEmail"
              label={t('auth.reemail')}
              name="confirmEmail"
              autoComplete="confirmEmail"
            />
            <FormikTextField
              name="password"
              label={t('auth.password')}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormikTextField
              name="confirmPassword"
              label={t('auth.repassword')}
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <SubmitButton type="submit" fullWidth variant="contained">
              {t('common.registration')}
            </SubmitButton>
          </CustomPaper>
        </Form>
      </Formik>
      <SnackbarAlert
        open={showSuccess}
        onCloseSnackbar={() => setShowSuccess(false)}
        onCloseAlert={() => setShowSuccess(false)}
        severity="success"
      >
        {t('auth.registerSuccess')}
      </SnackbarAlert>
      <SnackbarAlert
        open={showError}
        onCloseSnackbar={() => setShowError(false)}
        onCloseAlert={() => setShowError(false)}
        severity="error"
      >
        {t('auth.registerError')}
      </SnackbarAlert>
    </>
  );
}

export default Registration;
