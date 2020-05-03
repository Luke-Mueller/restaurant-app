import React from 'react';

import Row from '../Row/Row';

const Table = props => {
  const restaurants = props.paginatedResult.map((restaurant, idx) => {
    return (
      <Row 
        key={idx} 
        onClick={() => props.setDetails(restaurant)}
        restaurant={restaurant} 
        setDetails={props.setDetails}
        setShowDetails={props.setShowDetails} />
    )
  });

  return (
    <div className={props.className}>
      {restaurants}
    </div>
  );
};

export default Table;
