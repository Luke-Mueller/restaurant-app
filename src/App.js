import React from 'react';

import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

function App() {
  const text = 'Restaurant App';

  return (
    <div className="App">
      <LandingPage text={text} />
    </div>
  );
}

export default App;
