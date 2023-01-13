import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
  children: JSX.Element,
};

export default function LayoutComponent({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
