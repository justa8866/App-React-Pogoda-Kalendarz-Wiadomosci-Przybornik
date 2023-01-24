import React, { ReactNode } from 'react';

import { useTranslation } from 'react-i18next';
import {
  Container,
  Wrapper,
  AppName,
  LanguageWrapper,
} from './DefaultHeader.style';

import LanguageSelector from '../LanguageSelector/LanguageSelector';

type Props = {
  children: ReactNode;
};

function Header({ children }: Props): JSX.Element {
  const [t] = useTranslation();

  return (
    <Container>
      <Wrapper>
        <AppName>{t('header.name')}</AppName>
        <LanguageWrapper>
          <LanguageSelector />
        </LanguageWrapper>
      </Wrapper>
      {children}
    </Container>
  );
}

export default Header;
