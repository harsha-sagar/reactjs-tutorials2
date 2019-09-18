import React from 'react';

// const Hello = () => <div className='dummyClass'><h1>Hello Sagar</h1></div>


const Hello = () => {
  return React.createElement(
    'div',
    {className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Sagar')
  );
}

export default Hello;
