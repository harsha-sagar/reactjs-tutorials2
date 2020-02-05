import React, { Component } from 'react'

import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor() {
    super();
  
    this.state = {
       name: 'Parent'
    };
  }
  
  greetParent = () => {
    alert(`hello ${this.state.name}`);
  }

  render() {
    return (
      <div>
          <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
