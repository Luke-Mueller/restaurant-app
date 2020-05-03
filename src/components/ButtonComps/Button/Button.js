import React from 'react';

const Button = props => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      onMouseUp={props.onMouseUp}
      type={props.type}
      value={props.value}>
      <img
        className={props.imgClassName}
        src={props.imgSrc}
        alt={props.imgAlt} />
      {props.children}
    </button>
  );
};

export default Button;
