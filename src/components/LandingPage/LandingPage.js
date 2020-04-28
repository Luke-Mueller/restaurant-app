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
      <a className="LandingPage__a">
        <span className="LandingPage__span" type="button">{props.btnValue}</span>
      </a>
    </div>
  );
};

export default LandingPage;