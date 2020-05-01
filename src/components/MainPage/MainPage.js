import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import PageBtns from '../PageBtns/PageBtns';
import Table from '../Table/Table';

import './MainPage.css';

import KEY from '../../utils/key';

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';

const SearchPage = props => {
  const [genre, setGenre] = useState('All');
  const [genresArr, setGenresArr] = useState([]);
  const [page, setPage] = useState(1);
  const [paginatedArr, setPaginatedArr] = useState([]);
  const [query, setQuery] = useState('');
  const [restaurantArr, setRestaurantArr] = useState([]);
  const [state, setState] = useState('All');

  const ITEMS_PER_PAGE = 10;
  const maxPages = Math.ceil((restaurantArr.length) / ITEMS_PER_PAGE);

  // RETRIEVES AND SAVES ALL AVAILABLE GENRES
  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: KEY
      }
    })
      .then(response => response.json())
      .then(res => {
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
      })
      .catch(err => console.log(err));
  }, []);

  // ANALYZES USER SEARCH AND RETURNS RESULT
  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: KEY
      }
    })
      .then(response => response.json())
      .then(res => {
        let error, genreArr, queryArr, stateArr;
        // FILTERS TEXT INPUT
        if (query !== '') {
          queryArr = res.filter(restaurant => {
            return (
              restaurant.name.toUpperCase() === query.toUpperCase() ||
              restaurant.city.toUpperCase() === query.toUpperCase() ||
              restaurant.genre.toUpperCase().includes(query.toUpperCase())
            )
          })
          if (!queryArr.length) {
            error = 'Your search found no results'
          }
        } else {
          queryArr = res;
        }
        // FILTERS GENRE
        if (genre !== 'All') {
          genreArr = queryArr.filter(restaurant => restaurant.genre.includes(genre));
          if (!genreArr.length && !error) {
            error = 'There are no results of that genre'
          }
        } else {
          genreArr = queryArr;
        }
        // FILTERS STATE
        if (state !== 'All') {
          stateArr = genreArr.filter(restaurant => restaurant.state === state);
          if (!stateArr.length && !error) {
            error = 'There are no results in your state'
          }
        } else {
          stateArr = genreArr;
        }
        // SORTS RESULT
        let sortedArr = stateArr.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA > nameB) return 1;
          if (nameB > nameA) return -1;
          return 0;
        });
        // CREATES ERROR RESULT
        if (!sortedArr.length) {
          sortedArr = [{
            name: error,
            city: '',
            telephone: '',
            genre: ''
          }]
        };
        setRestaurantArr(sortedArr);
        setPage(1)
      })
      .catch(err => console.log(err));
  }, [genre, query, state]);

  // PAGINATES RESULT
  useEffect(() => {
    const list = restaurantArr.filter(restaurant => {
      const idx = restaurantArr.indexOf(restaurant);
      const start = (page - 1) * ITEMS_PER_PAGE;
      if (
        idx >= start &&
        idx < start + ITEMS_PER_PAGE
      ) {
        return restaurant;
      } else {
        return null;
      }
    });
    setPaginatedArr(list);
  }, [page, restaurantArr]);

  let classname;
  props.entered ?
    classname = "MainPage active" :
    classname = "MainPage";

  return (
    <div className={classname}>
      <div className="MainPage__div" />
      <Header
        genresArr={genresArr}
        setGenre={setGenre}
        setQuery={setQuery}
        setState={setState} />
      <Table
        arr={paginatedArr}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        page={page} />
      <PageBtns
        maxPages={maxPages}
        page={page}
        setPage={setPage} />
    </div>
  );
};

export default SearchPage;