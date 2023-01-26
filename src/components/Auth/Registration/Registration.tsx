import React from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { CustomPaper, SubmitButton } from '../Auth.style';
import FormikTextField from '../FormikTextField/FormikTextField';
import { initialValuesRegistration, registrationSchema } from './Registration.validation';

function Registration(): JSX.Element {
  const [t] = useTranslation();

  return (
    <Formik
      initialValues={initialValuesRegistration}
      validationSchema={registrationSchema}
      onSubmit={() => {}}
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
  );
}

export default Registration;
