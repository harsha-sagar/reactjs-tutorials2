import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor() {
    super();
  
    this.state = {
       name: 'Parent'
    };
  }
  
  render() {
    return (
      <div>
          <button onClick={this.props.greetHandler}>greet</button>
      </div>
    )
  }
}

export default ChildComponent
