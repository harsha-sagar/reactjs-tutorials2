import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome1 from './components/Welcome1';

function App() {
  return (
    <div className="App">
      <Welcome1 name='Harsha'>
        <p>Child of Welcome component</p>
      </Welcome1>
      <Welcome1 name='Sagar'>
        <button>click</button>
      </Welcome1>
      <Welcome1 name='Mamatha' />
    </div>
  );
}

export default App;
