import React from 'react'

const PersonThree = ({person, key}) => {

  return (
    <div>
      <h1> I am {person.name} & I am {person.age} old</h1>
    </div>
  )
}

export default PersonThree