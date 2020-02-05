import React, { Component } from 'react'

import PersonOne from './PersonOne'

class PersonListOne extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: 'harsha',
          age: '28'
        },
        {
          name: 'sagar',
          age: '29'
        },
        {
          name: 'hs',
          age: '26'
        },
        {
          name: 'mamatha',
          age: '27'
        }
      ]
    };
  }
  
  render() {
    return (
      <div>
          {
            this.state.people.map(person => {
              return <PersonOne person={person}/>
            })
          }
      </div>
    )
  }
}

export default PersonListOne
