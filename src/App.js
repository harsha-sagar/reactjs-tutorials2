import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet3 from './components/Greet3';

function App() {
  return (
    <div className="App">
      <Greet3 name='Harsha' />
      <Greet3 name='Sagar' />
      <Greet3 name='Mamatha' />
    </div>
  );
}

export default App;
