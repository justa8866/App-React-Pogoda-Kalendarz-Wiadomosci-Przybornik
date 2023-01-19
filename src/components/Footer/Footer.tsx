import React, { useMemo } from 'react';
import { Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Wrapper from './Footer.style';

const Copyright = (): JSX.Element => {
  const [t] = useTranslation();

  const currentYear: number = useMemo(() => new Date().getFullYear(), []);

  return (
    <Typography variant="body2" color="text.secondary">
      {t('footer:copyright', { year: currentYear })}
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
