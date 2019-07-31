import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel';

function App() {
  return (
    <>
    <Travel
      destination="Paris"
      country="France"
      photo="https://via.placeholder.com/150"
      distance="200 Km"
    />
    <Travel
      destination="Marseille"
      country="France"
      photo="https://via.placeholder.com/150"
      distance="800 Km"
    />
    </>
  );
}

export default App;
