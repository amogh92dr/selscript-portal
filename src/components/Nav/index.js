import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from 'lib/style';

import './styles.css';

const Nav = ({ logoutUser, location: { pathname } }) => (
  <nav className="flex px2 pt2 mb2" styleName="wrapper">
    <div className="pb1" styleName="logo">
      <img alt="Catapult Health" src="/images/CatapultLogo.png" />
    </div>
    <div styleName="tabs">
      <Link
        className="p1"
        styleName={style({
          tab: true,
          active: pathname.startsWith('/dashboard') || pathname === '/',
        })}
        to="dashboard"
      >
        Dashboard
      </Link>
    </div>
    <div styleName="extras">
      <Link className="p2" to="/" onClick={logoutUser}>
        <i className="fa fa-sign-out" />
      </Link>
    </div>
  </nav>
);

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
};

export default Nav;
