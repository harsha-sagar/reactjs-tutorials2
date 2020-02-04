import React from 'react';

const Greet1 = () => {
    return (
        React.createElement(
            'div',
            {id: 'someId', className: 'blahClass'},
            React.createElement('h1', null, 'Hello world 2')
        )
    );
};

export default Greet1;
