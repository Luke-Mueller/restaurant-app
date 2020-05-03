import React from 'react';

import Button from '../ButtonComps/Button/Button';

import './Details.css';

const Details = props => {
  return (
    <div className={props.className}>
      <h3>{props.details.name}</h3>
      <h5>{props.details.city}, {props.details.state}</h5>
      <div className={props.divClassName}>
        <h5>{props.details.attire}</h5>
        <h5>{props.details.genre}</h5>
        <h5>{props.details.hours}</h5>
        <h5>{props.details.telephone}</h5>
        <h5>{props.details.website}</h5>
      </div>
      <Button
        className="Details__button"
        onClick={() => props.setShowDetails(false)}
        type="button">
        close
      </Button>
    </div>
  );
};

export default Details;
