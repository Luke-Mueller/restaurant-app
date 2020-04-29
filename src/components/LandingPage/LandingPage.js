import React from 'react';

import './LandingPage.css';

const LandingPage = props => {
  return (
    <div className="LandingPage">
      <img
        className="LandingPage__img"
        src="/assets/images/logo.png"
        alt="Spectrum Logo" />
      <div className="LandingPage__div" />
      <h2 className="LandingPage__h2">{props.text}</h2>
      <button 
        className="LandingPage__button"
        onMouseUp={() => props.setEntered(true)}>
        <span className="LandingPage__span">{props.btnValue}</span>
      </button>
    </div>
  );
};

export default LandingPage;