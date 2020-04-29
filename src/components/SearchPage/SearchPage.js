import React, { useState, useEffect } from 'react';

import KEY from '../../utils/key';

import './SearchPage.css';

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const SearchPage = props => {
  // const [list, setList] = useState([]);

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: KEY
      }
    })
    .then(resp => resp.json())
    .then(res => {
      console.log('res: ', res)
    })
    .catch()

  }, []);

  let classname = "SearchPage";

  props.entered ?
    classname = "SearchPage active" :
    classname = "SearchPage"
  return (
    <div className={classname}>

    </div>
  );
};

export default SearchPage;