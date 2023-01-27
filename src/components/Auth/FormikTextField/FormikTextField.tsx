/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import Input from '../../../common/Input/Input';
import validationSpecialRules from './validation.const';

interface INameProp {
  name: string;
}

const FormikTextField = ({ name, ...props }: TextFieldProps & INameProp) => {
  const [field, meta] = useField(name);
  const [t] = useTranslation();

  const validationSpecialRule = validationSpecialRules.find(
    (rule) => rule.name === name,
  );

  return (
    <Input
      {...field}
      {...props}
      error={!!meta.error?.length && meta.touched}
      helperText={
        meta.error
          ? t(`${meta.error}`, {
            field: props?.label,
            min: validationSpecialRule?.min,
            max: validationSpecialRule?.max,
            countable: t(`${validationSpecialRule?.countable}`),
          })
          : ''
      }
    />
  );
};

export default FormikTextField;
