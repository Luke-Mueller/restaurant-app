import React from 'react';

import SearchControls from '../SearchControls/SearchControls';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <img
        className="Header__img"
        src="/assets/images/logo.png"
        alt="Spectrum Logo" />
      <SearchControls genresArr={props.genresArr} />
    </header>
  );
};

export default Header;
