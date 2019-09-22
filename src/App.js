import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WithCounterTwo from './components/WithCounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <WithCounterTwo>
          { (count, incrementCounter) => (
          <ClickCounterTwo count = { count } incrementCounter = { incrementCounter } />
          )}
        </WithCounterTwo>
        <WithCounterTwo>
          { (count, incrementCounter) => (
          <HoverCounterTwo count = { count } incrementCounter = { incrementCounter } />
          )}
        </WithCounterTwo>
      </div>
    );
  }
}

export default App;
