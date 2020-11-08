// Tutorial 8: JSX 

import React from 'react';

const Hello = () => {
    // using JSX
    /* return (
        <div>
            <h1>Hello Joy</h1>
        </div>
    ) */

    //Without using JSX
    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Joy')
    )
}

export default Hello;