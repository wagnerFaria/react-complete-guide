import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}! And i'm {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;