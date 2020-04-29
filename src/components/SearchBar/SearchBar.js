import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar__input-text"
        name="search"
        type="text"
        placeholder="Enter name, city, or genre" />
      <button className="SearchBar__button">
        <img
          className="SearchBar__input-image"
          src="/assets/images/search.png"
          alt="Magnifying glass" />
      </button>
    </div>
  );
};

export default SearchBar;
