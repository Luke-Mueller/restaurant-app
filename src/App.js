import React, { useState } from 'react';

import LandingPage from './components/LandingPage/LandingPage';
import PageChangeAnimation from './components/PageChangeAnimation/PageChangeAnimation';
import MainPage from './components/MainPage/MainPage';

import './App.css';

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="App">
      <LandingPage
        btnValue='ENTER'
        entered={entered}
        setEntered={setEntered}
        text='Your table is ready' />
      <MainPage entered={entered} />
      <PageChangeAnimation entered={entered} />
    </div>
  );
};

export default App;
