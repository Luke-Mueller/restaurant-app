import React from 'react';

import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <LandingPage 
        btnValue='ENTER'
        text='Your table is ready' /> 
    </div>
  );
};

export default App;
