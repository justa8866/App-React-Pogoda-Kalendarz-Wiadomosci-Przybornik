import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { signin } from '../../../store/auth/authSlice';
import RoutesList from '../../../navigation/routes';
import Input from '../../../common/Input/Input';
import { SubmitLink, SubmitButton } from '../Auth.style';

function Registration(): JSX.Element {
  const [t] = useTranslation();

  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Input
        id="email"
        label={t('auth.email')}
        name="email"
        autoComplete="email"
      />
      <Input
        id="reemail"
        label={t('auth.reemail')}
        name="reemail"
        autoComplete="reemail"
      />
      <Input
        name="password"
        label={t('auth.password')}
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Input
        name="repassword"
        label={t('auth.repassword')}
        type="password"
        id="repassword"
        autoComplete="current-password"
      />
      <SubmitLink to={RoutesList.Dashboard}>
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => dispatch(signin())}
        >

          {t('common.registration')}
        </SubmitButton>
      </SubmitLink>
    </Box>
  );
}

export default Registration;
