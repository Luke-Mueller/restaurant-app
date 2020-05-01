import React from 'react';

import Row from '../Row/Row';

import './Table.css';

const Table = props => {
  const restaurants = props.arr.map((restaurant, idx) => {
    return <Row restaurant={restaurant} key={idx} />
  });

  return (
    <div className='Table'>
      {restaurants}
    </div>
  );
};

export default Table;
