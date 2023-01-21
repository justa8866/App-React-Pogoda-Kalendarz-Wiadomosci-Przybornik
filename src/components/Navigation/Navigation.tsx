import React from 'react';
import Mobile from './Mobile/Mobile';
import Profile from './Profile/Profile';

function Navigation(): JSX.Element {
  return (
    <>
      <Profile />
      <Mobile />
    </>
  );
}

export default Navigation;
