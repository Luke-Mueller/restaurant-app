import React from 'react';

import './EnterAnimation.css';

const EnterAnimation = props => {
  let classname;
  props.entered ?
    classname = "EnterAnimation active" :
    classname = "EnterAnimation";

  return (
    <div className={classname}>
        <div className="EnterAnimation__div-top" />
        <div className="EnterAnimation__div-right" />
        <div className="EnterAnimation__div-bottom" />
        <div className="EnterAnimation__div-left" />
    </div>
  );
};

export default EnterAnimation;
