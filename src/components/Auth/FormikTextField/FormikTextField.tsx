/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { useTranslation } from 'react-i18next';
import Input from '../../../common/Input/Input';

interface INameProp {
  name: string;
}

interface IValidationSpecialRules {
  name: string;
  min: number;
  max: number;
  countable: string;
}

const validationSpecialRules: IValidationSpecialRules[] = [
  {
    name: 'age',
    min: 3,
    max: 130,
    countable: 'years',
  },
  {
    name: 'password',
    min: 8,
    max: 30,
    countable: 'characters',
  },
  {
    name: 'username',
    min: 3,
    max: 0,
    countable: 'characters',
  },
];

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
            field: name,
            min: validationSpecialRule?.min,
            max: validationSpecialRule?.max,
            countable: validationSpecialRule?.countable,
          })
          : ''
      }
    />
  );
};

export default FormikTextField;
