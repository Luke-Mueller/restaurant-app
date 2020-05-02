import React from 'react';

import SearchForm from '../../containers/SearchForm/SearchForm';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <img
        className="Header__img"
        src="/assets/images/logo.png"
        alt="Spectrum Logo" />
      <SearchForm
        genresArr={props.genresArr}
        query={props.query} />
    </header>
  );
};

export default Header;
