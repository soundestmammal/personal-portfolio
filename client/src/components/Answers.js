import React from 'react';

const Answers = (props) => {
    return (
        <div onClick={() => props.parentMethod(props.answer)}style={{border: '2px solid white', padding: '2em 8em', color: 'white', marginBottom: '2em'}}>{props.answer}</div>
    );
}

export default Answers;