import React, { useState, useEffect } from 'react';

import Button from '../../components/ButtonComps/Button/Button';
import States from '../../utils/states';
import UserInput from '../../components/InputComps/UserInput/UserInput';
import UserOption from '../../components/InputComps/UserOption/UserOption';

import './SearchForm.css';

const SearchForm = props => {
  const [genreInput, setGenreInput] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [textInput, setTextInput] = useState('');

  // SENDS QUERIES WHEN USERINPUTS CHANGE
  useEffect(() => {
    props.query(genreInput, stateInput, textInput);
    // eslint-disable-next-line
  }, [genreInput, stateInput, textInput]);

  // CREATES DEFAULT OPTION ELEMENT FOR STATE SELECT
  const stateOptions = States.map((state, idx) => {
    return (
      <UserOption
        content={state.name}
        key={idx}
        value={state.abb} />
    );
  });

  // CREATES DEFAULT OPTION ELEMENT FOR GENRE SELECT
  let genresOptions = props.genresArr.sort();
  genresOptions = props.genresArr.map((genre, idx) => {
    return (
      <UserOption
        content={genre}
        key={idx}
        value={genre} />
    );
  });

  const submit = e => {
    props.query(genreInput, stateInput, textInput);
    e.preventDefault();
  };

  return (
    <form className="SearchForm" onSubmit={submit}>
      <div className="SearchForm__div-input">
        <UserInput
          className="SearchForm__input"
          type="input"
          name="text"
          onChange={e => setTextInput(e.target.value)}
          placeholder="Enter name, city, or genre"
          value={textInput} />
        <Button
          className="SearchForm__button"
          imgAlt="Magnifying glass"
          imgClassName="SearchForm__img"
          imgSrc="/assets/images/search.png"
          type="submit" />
      </div>
      <div className="SearchForm__div-select">
        <UserInput
          className="SearchForm__select-left"
          name="genre"
          onChange={e => setGenreInput(e.target.value)}
          type="select"
          value={genreInput}>
          <UserOption
            content="Filter by genre (All)"
            key="default"
            value="" />
          {genresOptions}
        </UserInput>
        <UserInput
          className="SearchForm__select-right"
          name="state"
          onChange={e => setStateInput(e.target.value)}
          type="select"
          value={stateInput} >
          <UserOption
            content="Filter by state (All)" 
            key="default"
            value="" />
          {stateOptions}
        </UserInput>
      </div>
    </form>
  );
};

export default SearchForm;
