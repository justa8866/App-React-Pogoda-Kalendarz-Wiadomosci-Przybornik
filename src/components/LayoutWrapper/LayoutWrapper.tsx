import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
  children: ReactNode;
};

function LayoutWrapper({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;
