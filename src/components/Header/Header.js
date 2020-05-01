import React from 'react';

import SearchForm from '../SearchForm/SearchForm';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <a href="http://www.spectrum.com">
        <img
          className="Header__img"
          src="/assets/images/logo.png"
          alt="Spectrum Logo" />
      </a>
      <SearchForm
        genresArr={props.genresArr}
        setGenre={props.setGenre}
        setQuery={props.setQuery}
        setState={props.setState} />
    </header>
  );
};

export default Header;
