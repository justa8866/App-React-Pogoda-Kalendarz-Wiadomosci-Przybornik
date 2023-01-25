import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('validation.requiredName')
    .min(3, 'validation.nameMinLength'),
  age: Yup.number()
    .required('validation.requiredAge')
    .min(3, 'validation.ageMinLength')
    .max(130, 'validation.ageMaxLength'),
  email: Yup.string()
    .email('validation.invalidEmail')
    .required('validation.requiredEmail'),
  confirmEmail: Yup.string()
    .required('validation.confirmEmail')
    .oneOf([Yup.ref('password')], 'validation.match'),
  password: Yup.string()
    .min(8, 'validation.passwordTooShort')
    .max(30, 'validation.passwordTooLong')
    .required('validation.enterPassword')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'validation.passwordContent',
    ),
  confirmPassword: Yup.string()
    .required('validation.confirmPassword')
    .oneOf([Yup.ref('password')], 'validation.match'),
});

export default validationSchema;
