import React from 'react';

const Button = props => {
  return (
    <button
      {...props}>
      <img
        className={props.imgClassName}
        src={props.imgSrc}
        alt={props.imgAlt} />
      {props.children}
    </button>
  );
};

export default Button;
