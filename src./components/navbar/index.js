/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './mobile-navbar';
export const Navbar = () => {
  return (
    <>
      <div className="block lg:hidden sticky inset-x-0 top-0 z-50">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block sticky inset-x-0 top-0 z-50">
       <DesktopNavbar />
      </div>
    </>
  );
};

export default Navbar;
