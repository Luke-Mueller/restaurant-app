import React from 'react';

import './LandingPage.css';

const LandingPage = props => {
  return (
    <div className="LandingPage">
      <img
        className="Landing__img"
        src="/images/logo.png"
        alt="Spectrum Logo" />
      <div className="Landing__div" />
      <p className="Landing__p">{props.text}</p>
    </div>
  );
};

export default LandingPage;