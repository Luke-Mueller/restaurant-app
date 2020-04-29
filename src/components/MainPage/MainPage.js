import React, { useState, useEffect } from 'react';

import SearchBar from '../SearchBar/SearchBar';

import KEY from '../../utils/key';

import './MainPage.css';

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const SearchPage = props => {
  const [restaurantArr, setRestaurantArr] = useState([]);

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: KEY
      }
    })
    .then(resp => resp.json())
    .then(res => {
      console.log(res);
      setRestaurantArr(res);
    })
    .catch(err => console.log(err));
  }, []);

  let classname = "SearchPage";
  props.entered ?
    classname = "SearchPage active" :
    classname = "SearchPage";
    
  return (
    <div className={classname}>
      <SearchBar />
    </div>
  );
};

export default SearchPage;