import React from 'react';

const LandingContent = props => {
  return (
    <div className={props.className}>
      <img
        className={props.imgClassName}
        src={props.imgSrc}
        alt={props.imgAlt} />
      <div 
      className={props.divClassName}
       />
      <h2 
      className={props.h2ClassName}
      >{props.text}</h2>
    </div>
  );
};

export default LandingContent;
