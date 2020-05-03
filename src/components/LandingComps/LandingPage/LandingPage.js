import React from 'react';

import Button from '../../ButtonComps/Button/Button';
import LandingContent from '../LandingContent/LandingContent';

import './LandingPage.css';

const LandingPage = props => {
  let imgClassName, divClassName, h2ClassName, buttonClassName;

  if (props.loaded) {
    buttonClassName = 'LandingPage__button active';
    imgClassName = 'LandingPage__img active';
    divClassName = 'LandingPage__div active';
    h2ClassName = 'LandingPage__h2 active';
  } else {
    buttonClassName = 'LandingPage__button';
    imgClassName = 'LandingPage__img';
    divClassName = 'LandingPage__div';
    h2ClassName = 'LandingPage__h2';
  };

  return (
    <div className="LandingPage">
      <LandingContent
        className="LandingContent"
        divClassName={divClassName}
        h2ClassName={h2ClassName}
        imgAlt="Spectrum Logo" 
        imgClassName={imgClassName}
        imgSrc="/assets/images/logo.png"
        text={props.text} />
      <Button
        className={buttonClassName}
        onMouseUp={() => props.setEntered(true)}
        type="button">
        <span>{props.btnValue}</span>
      </Button>
    </div>
  );
};

export default LandingPage;