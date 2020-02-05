import React, { Component } from 'react'

import PersonTwo from './PersonTwo'

class PersonListTwo extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: 'harsha',
          age: '28'
        },
        {
          id: 2,
          name: 'sagar',
          age: '29'
        },
        {
          id: 3,
          name: 'hs',
          age: '26'
        },
        {
          id: 4,
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
              return <PersonTwo key={person.id} person={person}/>
            })
          }
      </div>
    )
  }
}

export default PersonListTwo
