import React from 'react';

import './DetailsTop.css';

const DetailsTop = props => {
  return (
    <div className='DetailsTop'>
      <h3>{props.details.name}</h3>
      <h5>{props.details.city}, {props.details.state}</h5>
    </div>
  );
};

export default DetailsTop;
