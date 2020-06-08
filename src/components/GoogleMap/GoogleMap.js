import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import GOOGLE_KEY from '../../utils/googleKey';

const GoogleMap = props => {
  const [center, setCenter] = useState(props.center);

  const markers = props.restaurantArr.map(restaurant => {
    return (
      <div lat={parseFloat(restaurant.lat)} lng={parseFloat(restaurant.long)} />

      // </div>{
      // position: {
      //   lat: parseFloat(restaurant.lat),
      //   lng: parseFloat(restaurant.long)
      // }
    );
  })
  // let marker = new maps.Marker({
  //   position: center,
  //   map
  // });
  // return marker;


  return (
    <div style={{ height: '10rem', width: '15rem' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_KEY }}
        center={center}
        defaultCenter={{ lat: 0, lng: 0 }}>
          {markers}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
