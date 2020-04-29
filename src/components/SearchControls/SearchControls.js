import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import StatesSelect from '../StatesSelect/StatesSelect';

import './SearchControls.css';

const SearchControls = () => {
  return(
    <div className="SearchControls">
      <SearchBar />
      <StatesSelect />
    </div>
  );
};

export default SearchControls;
