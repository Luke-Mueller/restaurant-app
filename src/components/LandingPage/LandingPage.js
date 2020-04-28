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
      <h1 className="LandingPage__h1">{props.text}</h1>
    </div>
  );
};

export default LandingPage;