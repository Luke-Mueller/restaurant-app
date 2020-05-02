import React from 'react';

import Row from '../Row/Row';

const Table = props => {
  const restaurants = props.paginatedResult.map((restaurant, idx) => {
    return <Row restaurant={restaurant} key={idx} />
  });

  return (
    <div className={props.className}>
      {restaurants}
    </div>
  );
};

export default Table;
