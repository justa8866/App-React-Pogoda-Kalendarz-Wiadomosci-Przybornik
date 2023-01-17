import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Wrapper from './Footer.style';

const Copyright = () => {
  const [t] = useTranslation();

  return (
    <Typography variant="body2" color="text.secondary">
      {t('footer:copyright')}
      2023
    </Typography>
  );
};

function Footer(): JSX.Element {
  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Wrapper>
  );
}

export default Footer;
