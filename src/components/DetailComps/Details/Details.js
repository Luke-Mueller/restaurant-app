import React from 'react';

import DetailsBottom from '../Details-bottom/DetailsBottom';
import DetailsTop from '../Details-top/DetailsTop';
import GoogleMap from '../../GoogleMap/GoogleMap';

import './Details.css';

const Details = props => {
  const lat = parseFloat(props.details.lat) || 0;
  const lng = parseFloat(props.details.long) || 0;
  const center = { lat: lat, lng: lng };

  console.log(props.restaurantArr)

  let googleMap;
  if (props.details.lat) {
    googleMap = (
      <GoogleMap 
        center={center}
        restaurantArr={props.restaurantArr} />
    )
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
