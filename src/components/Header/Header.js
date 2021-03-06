import React from 'react';

import SearchForm from '../../containers/SearchForm/SearchForm';
import image from '../../assets/logo.png';

import './Header.css';

const Header = props => {
  return (
    <header className="Header">
      <img
        className="Header__img"
        src={image}
        alt="Spectrum Logo" />
      <SearchForm
        attireArr={props.attireArr}
        genreArr={props.genreArr}
        query={props.query} />
    </header>
  );
};

export default Header;
