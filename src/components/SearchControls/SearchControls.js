import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import States from '../../utils/states';
import StatesSelect from '../StatesSelect/StatesSelect';

import './SearchControls.css';

const SearchControls = () => {
  return(
    <div className="SearchControls">
      <SearchBar />
      <StatesSelect states={States} />
    </div>
  );
};

export default SearchControls;
