import * as Yup from 'yup';

interface ILogin {
  email: string;
  password: string;
}

export const initialValuesLogin: ILogin = {
  email: '',
  password: '',
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('validation.invalid')
    .required('validation.required'),
  password: Yup.string()
    .min(8, 'validation.tooShort')
    .max(30, 'validation.tooLong')
    .required('validation.required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'validation.passwordContent',
    ),
});
