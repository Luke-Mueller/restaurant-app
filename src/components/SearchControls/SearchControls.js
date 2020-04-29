import React from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import SearchBar from '../SearchBar/SearchBar';
import States from '../../utils/states';
import StateSelect from '../StateSelect/StateSelect';

import './SearchControls.css';

const SearchControls = props => {
  return(
    <div className="SearchControls">
      <SearchBar />
      <StateSelect states={States} />
      <GenreSelect genresArr={props.genresArr}/>
    </div>
  );
};

export default SearchControls;
