import React, { Component } from 'react';


class Square extends Component {


    render() {
        return(
            <button className="square" style={{backgroundColor: this.props.styles}} onClick={() => this.props.onClick() }>
                {this.props.value}
            </button>
        );
    }
}

export default Square;

/*
Ok, just keep in mind that I changed some of this...

There was a props.onClick that would trigger a function... I need to keep that here.

Ok, I undoed a lot. It is still here. If you click on a square it will crash the program.
*/