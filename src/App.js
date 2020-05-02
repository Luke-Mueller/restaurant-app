import React, { useState, useEffect } from 'react';

import EnterAnimation from './components/EnterAnimation/EnterAnimation';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './containers/MainPage/MainPage';

import { KEY } from './utils/globalVars';
import { URL } from './utils/globalVars';

const App = () => {    
  const [entered, setEntered] = useState(false);
  const [genresArr, setGenresArr] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [queryResult, setQueryResult] = useState([]);
  const [restaurantArr, setRestaurantArr] = useState([]);

  // SAVES ALL AVAILABLE ATTIRES, GENRES & RESTAURANTS FROM API
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
        setRestaurantArr(res);
        query('', '', '', res);
        setLoaded(true);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, []);

  const query = (genre, state, text, arr) => {
    let array, error, genreRes, stateRes, textRes;
    if (arr) array = arr;
    else array = restaurantArr;
    // FILTERS BY TEXT
    if (text !== '') {
      textRes = array.filter(restaurant => {
        return (
          restaurant.name.toUpperCase().includes(text.toUpperCase()) ||
          restaurant.city.toUpperCase().includes(text.toUpperCase()) ||
          restaurant.genre.toUpperCase().includes(text.toUpperCase())
        );
      });
      if (!textRes.length) error = 'Your search found no results';
    } else textRes = array;
    // FILTERS BY GENRE
    if (genre !== '') {
      genreRes = textRes.filter(restaurant => restaurant.genre.includes(genre));
      if (!genreRes.length && !error) error = 'There are no results of that genre';
    } else genreRes = textRes;
    // FILTERS BY STATE
    if (state !== '') {
      stateRes = genreRes.filter(restaurant => restaurant.state === state);
      if (!stateRes.length && !error) error = 'There are no results in your state';
    } else stateRes = genreRes;
    // SORTS RESULT
    let sortedRes = stateRes.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) return 1;
      if (nameB > nameA) return -1;
      return 0;
    });
    // CREATES ERROR RESULT
    if (!sortedRes.length) {
      sortedRes = [{
        name: error,
        city: '',
        telephone: '',
        genre: ''
      }];
    };
    setQueryResult(sortedRes);
    setPage(1);
  };

  return (
    <div className="App">
      <LandingPage
        btnValue='ENTER'
        entered={entered}
        loaded={loaded}
        setEntered={setEntered}
        text='Your table is ready' />
      <MainPage 
        entered={entered} 
        genresArr={genresArr}
        page={page}
        query={query}
        queryResult={queryResult}
        restaurantArr={restaurantArr}
        setPage={setPage} />
      <EnterAnimation entered={entered} />
    </div>
  );
};

export default App;
