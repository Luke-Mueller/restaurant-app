import React, { useState } from 'react';

import LandingPage from './components/LandingPage/LandingPage';
import PageChangeAnimation from './components/PageChangeAnimation/PageChangeAnimation';

import './App.css';

const App = () => {
  const [pageChanging, setPageChanging] = useState(false);

  return (
    <div className="App">
      <LandingPage
        btnValue='ENTER'
        pageChanging={pageChanging}
        setPageChanging={setPageChanging}
        text='Your table is ready' />
      <PageChangeAnimation pageChanging={pageChanging} />
    </div>
  );
};

export default App;
