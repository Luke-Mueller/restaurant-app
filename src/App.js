import React, { useState, useEffect } from 'react';

import EnterAnimation from './components/EnterAnimation/EnterAnimation';
import LandingPage from './components/LandingComps/LandingPage/LandingPage';
import MainPage from './containers/MainPage/MainPage';

import { Filter } from './utils/globalFuncs';
import { Save } from './utils/globalFuncs';
import { KEY } from './utils/globalVars';
import { URL } from './utils/globalVars';

const App = () => {    
  const [attireArr, setAttireArr] = useState([]);
  const [entered, setEntered] = useState(false);
  const [genreArr, setGenreArr] = useState([]);
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
        const genres = Save('genre', res);
        const attires = Save('attire', res);
        setGenreArr(genres);
        setAttireArr(attires);
        setRestaurantArr(res);
        query(['', '', '', ''], res);
        setLoaded(true);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, []);

  const query = (queries, arr) => {
    let array, error, attireArr, attireErr, genreArr, genreErr, stateArr, stateErr, textArr, textErr;
    if (arr) array = arr;
    else array = restaurantArr;
    // FILTERS QUERIES
    [textArr, textErr] = Filter(array, 'text', queries[3], error);
    [attireArr, attireErr] = Filter(textArr, 'attire', queries[0], textErr);
    [genreArr, genreErr] = Filter(attireArr, 'genre', queries[1], attireErr);
    [stateArr, stateErr] = Filter(genreArr, 'state', queries[2], genreErr);
    error = stateErr;
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
      }];
    };
    setQueryResult(sortedArr);
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
        attireArr={attireArr}
        entered={entered} 
        genreArr={genreArr}
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
