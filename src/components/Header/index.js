import React from 'react';
import classes from './Header.module.css';
import APPLICATION_NAME from '../../constants';

const Header = () => {
  return (
    <>
      <div className="bg-white col-12 fixed top-0 left-0 z1">
        <div className="container my1 mx1 flex items-center">
          <div className={`flex-auto ${classes.logoContainer}`}>
            <a href=".">
              <img src="/images/CatapultLogo.png" alt="logo" className={classes.imageHeight} />
            </a>
          </div>
          <div className="flex-auto">
            <h2>{APPLICATION_NAME}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
