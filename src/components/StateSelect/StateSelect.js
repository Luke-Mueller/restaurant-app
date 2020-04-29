import React from 'react';

import './StateSelect.css';

const StatesSelect = props => {
  const states = props.states.map((state, idx) => {
    return (
      <option
        key={idx}
        value={state}
        className="StatesSelect__option">
        {state}
      </option>
    );
  });

  return (
    <select name="states" className="StatesSelect">
      <option
        key="default"
        value="default"
        className="StatesSelect__option">
        Filter by state
      </option>
      {states}
    </select>
  );
};

export default StatesSelect;
