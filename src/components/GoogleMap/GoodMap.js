import React from 'react';
import GoogleMapReact from 'google-map-react';

import GOOGLE_KEY from '../../utils/googleKey';

const GoogleMap = props => {
  const center = { lat: props.lat, lng: props.lng };
  const zoom = 11;

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: center,
    map
    });
    return marker;
   };

  return (
    <div style={{ height: '10rem', width: '15rem' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_KEY }}
        center={center} 
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={zoom}
        onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        yesIWantToUseGoogleMapApiInternals />
    </div>
  );
};

export default GoogleMap;
