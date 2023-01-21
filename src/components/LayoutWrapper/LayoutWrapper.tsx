import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavProvider from '../Navigation/Reducer/Nav';

type Props = {
  children: ReactNode;
};

function LayoutWrapper({ children }: Props) {
  return (
    <NavProvider>
      <Header />
      {children}
      <Footer />
    </NavProvider>
  );
}

export default LayoutWrapper;
