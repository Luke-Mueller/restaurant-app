import React from 'react';

import LandingPage from './components/LandingPage/LandingPage';

import './App.css';

function App() {
  const title = 'Restaurant App';
  const text = 'Your table is ready'

  return (
    <div className="App">
      <LandingPage title={title} text={text} />
    </div>
  );
}

export default App;
