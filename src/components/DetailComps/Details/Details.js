import React from 'react';

import DetailsBottom from '../Details-bottom/DetailsBottom';
import DetailsTop from '../Details-top/DetailsTop';

import './Details.css';

const Details = props => {
  return (
    <div className={props.className}>
      <DetailsTop details={props.details} />
      <DetailsBottom 
        details={props.details}
        setShowDetails={props.setShowDetails} />
    </div>
  );
};

export default Details;
