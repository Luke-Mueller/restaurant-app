import React from 'react';

import States from '../../utils/states';

import './StatesSelect.css';

const StatesSelect = () => {
  const states = States.map((state, idx) => {
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