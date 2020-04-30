import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import PageBtns from '../PageBtns/PageBtns';
import Table from '../Table/Table';

import './MainPage.css';

import KEY from '../../utils/key';

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const SearchPage = props => {
  const [genresArr, setGenresArr] = useState([]);
  const [page, setPage] = useState(1);
  const [restaurantArr, setRestaurantArr] = useState([]);
  const ITEMS_PER_PAGE = 10;
  const maxPages = Math.ceil((restaurantArr.length + 1) / ITEMS_PER_PAGE);

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: KEY
      }
    })
      .then(response => response.json())
      .then(res => {
        // RETRIEVES AND SAVES ALL AVAILABLE GENRES
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
        setGenresArr(genres);

        // SORTS AND SAVES ALL RESTAURANT OBJECTS
        const sortedRes = res.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA > nameB) return 1;
          if (nameB > nameA) return -1;
          return 0;
        })
        console.log(sortedRes);
        setRestaurantArr(sortedRes);
      })
      .catch(err => console.log(err));
  }, []);

  let classname;
  props.entered ?
    classname = "MainPage active" :
    classname = "MainPage";

  return (
    <div className={classname}>
      <Header genresArr={genresArr} />
      <Table 
        page={page}
        restaurantArr={restaurantArr} />
      <PageBtns 
        maxPages={maxPages}
        page={page}
        setPage={setPage} />
    </div>
  );
};

export default SearchPage;