import React from 'react';

import DetailsBottom from '../Details-bottom/DetailsBottom';
import DetailsTop from '../Details-top/DetailsTop';
import GoogleMap from '../../GoogleMap/GoodMap';

import './Details.css';

const Details = props => {
  const lat = parseFloat(props.details.lat);
  const lng = parseFloat(props.details.long);

  let googleMap;
  if (props.details.lat) {
    googleMap = <GoogleMap lat={lat || 0} lng={lng || 0} />
  } else {
    googleMap = null
  }

  return (
    <div className={props.className}>
      <DetailsTop details={props.details} />
      {googleMap}
      <DetailsBottom 
        details={props.details}
        setShowDetails={props.setShowDetails} />
    </div>
  );
};

export default Details;
