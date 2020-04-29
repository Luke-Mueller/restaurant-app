import React from 'react';

import './GenreSelect.css';

const GenreSelect = props => {
  let genres = props.genresArr.sort();
  genres = props.genresArr.map((genre, idx) => {
    return (
      <option key={idx} value={genre}>
        {genre}
      </option>
    );
  });

  return (
    <select name="genres" className="GenreSelect">
      <option key="default" value="default">
        Filter by genre
    </option>
    {genres}
    </select>
  );
};

export default GenreSelect;