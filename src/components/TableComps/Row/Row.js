import React from 'react';

import './Row.css';

const Row = props => {
  return (
    <div className="Row" onClick={props.onClick}>
      <div className="Row__div">
          <p className="Row__p-name">{props.restaurant.name}</p>
          <p className="Row__p">{props.restaurant.telephone}</p>
      </div>
      <div className="Row__div">
        <p className="Row__p-city">{props.restaurant.city}</p>
        <p className="Row__p">{props.restaurant.genre}</p>
      </div>
    </div>
  );
};

export default Row;
