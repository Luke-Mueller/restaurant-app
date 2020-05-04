import React from 'react';

import Button from '../../ButtonComps/Button/Button';

import './DetailsBottom.css';

const DetailsBottom = props => {
  return (
    <div className="DetailsBottom">
      <h5>{props.details.attire}</h5>
      <h5>{props.details.genre}</h5>
      <h5>{props.details.hours}</h5>
      <h5>{props.details.telephone}</h5>
      <a href={props.details.website}>{props.details.website}</a>
      <br/>
      <Button
        className="Details__button"
        onClick={() => props.setShowDetails(false)}
        type="button">
        close
      </Button>
    </div>
  );
};

export default DetailsBottom;
