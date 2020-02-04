import React from 'react';

const Greet4 = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )

    // return (
        // <h1>Hello {props.name}</h1>
        // {props.children}
    // )
    // this use-case would raise error since currently it is limited to return only 1 tag.
};

export default Greet4;
