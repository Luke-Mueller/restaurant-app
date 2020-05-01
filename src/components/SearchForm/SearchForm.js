import React, { useState, useEffect } from 'react';

import States from '../../utils/states';
import UserInput from '../UserInput/UserInput';

import './SearchForm.css';

const SearchForm = props => {
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    if (textInput === '') {
      props.setQuery('');
    };
  }, [textInput]);

  // CREATES OPTION ELEMENTS FOR STATE SELECT
  const stateOptions = States.map((state, idx) => {
    return (
      <option
        key={idx}
        value={state.abb}
        className="StatesSelect__option">
        {state.name}
      </option>
    );
  });

  // CREATES OPTION ELEMENTS FOR GENRE SELECT
  let genresOptions = props.genresArr.sort();
  genresOptions = props.genresArr.map((genre, idx) => {
    return (
      <option key={idx} value={genre}>
        {genre}
      </option>
    );
  });

  const submit = e => {
    props.setQuery(e.target.query.value);
    e.preventDefault();
  }

  return (
    <form className="SearchForm" onSubmit={submit}>
      <div className="SearchForm__div-input">
        <UserInput
          className="SearchForm__input"
          type="input"
          name="query"
          type="text"
          onChange={e => setTextInput(e.target.value)}
          placeholder="Enter name, city, or genre" 
          value={textInput} />
        <button
          className="SearchForm__button"
          type="submit">
          <img
            className="SearchForm__img"
            src="/assets/images/search.png"
            alt="Magnifying glass" />
        </button>
      </div>
      <div className="SearchForm__div-select">
        <UserInput
          name="genres"
          type="select"
          className="SearchForm__select-left"
          onChange={(e) => props.setGenre(e.target.value)}>
          <option key="default" value="All">
            Filter by genre (All)
          </option>
          {genresOptions}
        </UserInput>
        <UserInput
          name="states"
          type="select"
          className="SearchForm__select-right"
          onChange={e => props.setState(e.target.value)}>
          <option key="default" value="All">
            Filter by state (All)
          </option>
          {stateOptions}
        </UserInput>
      </div>
    </form>
  );
};

export default SearchForm;
