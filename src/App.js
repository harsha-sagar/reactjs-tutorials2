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
        <WithCounterTwo render = { (count, incrementCounter) => (
          <ClickCounterTwo count = { count } incrementCounter = { incrementCounter } />
        )} />
        <WithCounterTwo render = { (count, incrementCounter) => (
          <HoverCounterTwo count = { count } incrementCounter = { incrementCounter } />
        )} />
      </div>
    );
  }
}

export default App;
