import React from 'react';

import image from '../../../assets/logo.png'

const LandingContent = props => {
  return (
    <div className={props.className}>
      <img
        className={props.imgClassName}
        src={image}
        alt={props.imgAlt} />
      <div className={props.divClassName} />
      <h2 className={props.h2ClassName}>{props.text}</h2>
    </div>
  );
};

export default LandingContent;
