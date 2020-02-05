import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor() {
    super();
  
    this.state = {
       name: 'Child'
    };
  }
  
  render() {
    return (
      <div>
          <button onClick={() => {this.props.greetHandler(this.state.name)}}>greet</button>
      </div>
    )
  }
}

export default ChildComponent
