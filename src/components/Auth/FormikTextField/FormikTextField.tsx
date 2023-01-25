/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import Input from '../../../common/Input/Input';

interface INameProp {
  name: string;
}

const FormikTextField = ({ name, ...props }: TextFieldProps & INameProp) => {
  const [field, meta] = useField(name);
  const [t] = useTranslation();

  return (
    <Input
      {...field}
      {...props}
      error={!!meta.error?.length && meta.touched}
      helperText={meta.error ? t(`${meta.error}`) : ''}
    />
  );
};

export default FormikTextField;
