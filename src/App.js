import React from 'react';

import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <LandingPage 
        btnValue='ENTER'
        text='Your table is ready'
        title='Restaurant App' /> 
    </div>
  );
}

export default App;
