import React from 'react';

import './GenreSelect.css';

const GenreSelect = props => {
  const genres = props.genresArr.map((genre, idx) => {
    return (
      <option
        key={idx}
        value={genre}
        className="StatesSelect__option">
        {genre}
      </option>
    );
  });

  return (
    <select name="genres" className="GenreSelect">
      <option
        key="default"
        value="default"
        className="GenreSelect__option">
        Filter by genre
    </option>
    {genres}
    </select>
  );
};

export default GenreSelect;