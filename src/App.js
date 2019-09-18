import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Bruce'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark'/>
      <Greet name='Diana'/>
      <Welcome name='Bruce'>
        <p>This is children props</p>
      </Welcome>
      <Welcome name='Clark'/>
      <Welcome name='Diana'/>
    </div>
  );
}

export default App;
