import React, { useState, useEffect } from 'react';

import Button from '../../components/ButtonComps/Button/Button';
import image from '../../assets/search.png';
import UserInput from '../../components/UserInputComps/UserInput/UserInput';
import UserOption from '../../components/UserInputComps/UserOption/UserOption';

import { CreateOptions } from '../../utils/globalFuncs';

import './SearchForm.css';

const SearchForm = props => {
  const [attireInput, setAttireInput] = useState('');
  const [genreInput, setGenreInput] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    props.query([attireInput, genreInput, stateInput, textInput]);
    // eslint-disable-next-line
  }, [attireInput, genreInput, stateInput, textInput]);

  const attireOptions = CreateOptions('attire', props.attireArr);
  const genreOptions = CreateOptions('genre', props.genreArr);
  const stateOptions = CreateOptions('state');

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
          imgSrc={image}
          type="submit" />
      </div>
      <div className="SearchForm__div-select">
        <UserInput
          className="SearchForm__select"
          name="attire"
          onChange={e => setAttireInput(e.target.value)}
          type="select"
          value={attireInput}>
          <UserOption
            content="Filter by attire (All)"
            myKey="default"
            value="" />
          {attireOptions}
        </UserInput>
        <UserInput
          className="SearchForm__select"
          name="genre"
          onChange={e => setGenreInput(e.target.value)}
          type="select"
          value={genreInput}>
          <UserOption
            content="Filter by genre (All)"
            myKey="default"
            value="" />
          {genreOptions}
        </UserInput>
        <UserInput
          className="SearchForm__select"
          name="state"
          onChange={e => setStateInput(e.target.value)}
          type="select"
          value={stateInput} >
          <UserOption
            content="Filter by state (All)" 
            myKey="default"
            value="" />
          {stateOptions}
        </UserInput>
      </div>
    </form>
  );
};

export default SearchForm;
