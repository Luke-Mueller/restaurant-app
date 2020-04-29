import React from 'react';

import './PageChangeAnimation.css';

const PageChangeAnimation = props => {
  let classname;
  props.entered ?
    classname = "PCA active" :
    classname = "PCA";

  return (
    <div className={classname}>
        <div className="PCA__div-top" />
        <div className="PCA__div-right" />
        <div className="PCA__div-bottom" />
        <div className="PCA__div-left" />
    </div>
  );
};

export default PageChangeAnimation;