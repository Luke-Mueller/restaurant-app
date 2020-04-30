import React from 'react';

import './Row.css';

const Row = props => {
  return (
    <div className="Row">
      <p>{props.restaurant.name}</p>
      <p>{props.restaurant.city}</p>
      <p>{props.restaurant.telephone}</p>
      <p>{props.restaurant.genre}</p>
      <p>{props.restaurant.name}</p>
    </div>
  )
};

export default Row;

// address1: "4401 Floridian Way"
// attire: "smart casual"
// city: "Orlando"
// genre: "American,French,Contemporary,British,Irish"
// hours: "Open Daily 5:30 PM-7:30 PM"
// id: "0210a90c-9e58-400d-afd3-f333ac8996d4"
// lat: "28.411401"
// long: "-81.58752"
// name: "Victoria & Albert's"
// state: "FL"
// tags: "Social,Food and Dining,Restaurants"
// telephone: "(407) 939-3862"
// website: "https://disneyworld.disney.go.com/dining/grand-floridian-resort-and-spa/victoria-and-alberts/?CMP=OKC-wdw_dining_pl_187"
// zip: "32830"