import React, { useState, useEffect } from 'react';

import SearchControls from '../SearchControls/SearchControls';

import KEY from '../../utils/key';

import './MainPage.css';

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const SearchPage = props => {
  const [genresArr, setGenresArr] = useState([]);
  const [restaurantArr, setRestaurantArr] = useState([]);

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: KEY
      }
    })
      .then(resp => resp.json())
      .then(res => {
        // RETRIEVES ALL AVAILABLE GENRES
        const genres = [];
        const includesArr = [];

        res.forEach(element => {
          const elGenre = element.genre;
          const includes = elGenre.includes(',');
          if (includes) {
            const elGenreArr = elGenre.split(',');
            includesArr.push(elGenreArr);
          } else {
            const found = genres.includes(elGenre);
            if (!found) genres.push(elGenre);
          };
        });

        const flatIncludesArr = includesArr.flat();
        flatIncludesArr.forEach(gen => {
          const found = genres.includes(gen);
          if (!found) genres.push(gen);
        });
        
        // SAVES GENRES AND RESTAURANT INFO TO STATE
        setGenresArr(genres);
        setRestaurantArr(res);
      })
      .catch(err => console.log(err));
  }, []);

  let classname = "MainPage";
  props.entered ?
    classname = "MainPage active" :
    classname = "MainPage";

  return (
    <div className={classname}>
      <SearchControls genresArr={genresArr} />
    </div>
  );
};

export default SearchPage;