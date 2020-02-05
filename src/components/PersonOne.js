import React from 'react'

const PersonOne = ({person}) => {

  return (
    <div>
      <h1> I am {person.name} & I am {person.age} old</h1>
    </div>
  )
}

export default PersonOne