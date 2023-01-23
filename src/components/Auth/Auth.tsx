import {
  Container, CssBaseline, Stack, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DefaultHeader from '../../common/DefaultHeader/DefaultHeader';
import { CustomBox, MainLockIcon, Wrapper } from './Auth.style';
import AuthSwitchElement from './AuthSwitchElement/AuthSwitchElement';
import Login from './Login/Login';
import Registration from './Registration/Registration';

const Auth = () => {
  const [auth, setAuth] = useState<boolean>(true);
  const [t] = useTranslation();

  const changeAuthorisation = () => {
    setAuth(!auth);
  };

  return (
    <DefaultHeader>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <CustomBox>
          <Wrapper>
            <MainLockIcon />
          </Wrapper>
          <Typography component="h1" variant="h5">
            {auth ? t('common.login') : t('common.registration')}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>{t('common.registration')}</Typography>
            <AuthSwitchElement
              onChange={() => changeAuthorisation()}
              inputProps={{ ariaLabel: t('auth.authType') }}
            />
            <Typography>{t('common.login')}</Typography>
          </Stack>
          {auth ? <Login /> : <Registration />}
        </CustomBox>
      </Container>
    </DefaultHeader>
  );
};

export default Auth;
