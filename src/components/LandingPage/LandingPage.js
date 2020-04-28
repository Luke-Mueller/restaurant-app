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
      <h1 className="LandingPage__h1">{props.title}</h1>
      <p className="LandingPage__p">{props.text}</p>
      <button className="LandingPage__button">
        <span className="LandingPage__span">{props.btnValue}</span>
      </button>
    </div>
  );
};

export default LandingPage;