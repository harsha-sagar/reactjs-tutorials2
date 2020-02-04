import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet4 from './components/Greet4';

function App() {
  return (
    <div className="App">

      <Greet4 name='Harsha'>
        <p>Child of component</p>
      </Greet4>
      <Greet4 name='Sagar'>
        <button>click</button>
      </Greet4>
      <Greet4 name='Mamatha' />
    </div>
  );
}

export default App;
