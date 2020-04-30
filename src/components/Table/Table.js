import React from 'react';

import Row from '../Row/Row';

import './Table.css';

const Table = props => {
  const restaurants = props.restaurantArr.map(restaurant => {
    return <Row restaurant={restaurant} />
  });

  return (
    <div className='Table'>
      {restaurants}
    </div>
  );
};

export default Table;
