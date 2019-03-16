import React from 'react';

const Button = (props) => {
    return (
        <div className="ui button primary">
            {props.name}
        </div>
    );
}
export default Button;