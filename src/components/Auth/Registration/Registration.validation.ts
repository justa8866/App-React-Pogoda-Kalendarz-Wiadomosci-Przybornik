import * as Yup from 'yup';
import { IRegistration } from './Registration.types';

export const initialValuesRegistration: IRegistration = {
  username: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  confirmEmail: '',
};

export const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .required('validation.required')
    .min(3, 'validation.minLength'),
  age: Yup.number()
    .required('validation.required')
    .min(3, 'validation.minLength')
    .max(130, 'validation.maxLength'),
  email: Yup.string()
    .email('validation.invalid')
    .required('validation.required'),
  confirmEmail: Yup.string()
    .required('validation.confirm')
    .oneOf([Yup.ref('email')], 'validation.match'),
  password: Yup.string()
    .min(8, 'validation.tooShort')
    .max(30, 'validation.tooLong')
    .required('validation.required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'validation.passwordContent',
    ),
  confirmPassword: Yup.string()
    .required('validation.confirm')
    .oneOf([Yup.ref('password')], 'validation.match'),
});
