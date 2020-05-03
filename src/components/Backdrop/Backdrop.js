import React from 'react';

import './Backdrop.css';

const Backdrop = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default Backdrop;
