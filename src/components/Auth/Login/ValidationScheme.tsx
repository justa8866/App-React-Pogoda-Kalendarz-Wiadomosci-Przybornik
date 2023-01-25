import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('validation.invalidEmail').required('validation.requiredEmail'),
  password: Yup.string()
    .min(8, 'validation.passwordTooShort')
    .max(30, 'validation.passwordTooLong')
    .required('validation.enterPassword')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'validation.passwordContent',
    ),
});

export default validationSchema;
