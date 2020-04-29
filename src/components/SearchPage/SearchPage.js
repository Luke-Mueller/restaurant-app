import React from 'react';

import './SearchPage.css';

const SearchPage = props => {
  let classname = "SearchPage";

  props.entered ? 
    classname = "SearchPage active" :
    classname = "SearchPage"
  return (
    <div className={classname}>
      <h1>Hello World</h1>
    </div>
  );
};

export default SearchPage;