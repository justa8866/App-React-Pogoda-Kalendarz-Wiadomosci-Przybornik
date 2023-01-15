import React from 'react';
import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import NavMenu from './NavMenu/NavMenu';

function Navigation(): JSX.Element {
  return (
    <>
      <NavMenu />
      <MobileNavMenu />
    </>
  );
}

export default Navigation;
