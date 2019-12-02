import React, { Component } from 'react';

class ColorGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }
    render() {
        return(
            <div>This is a div for the color game</div>
        );
    }
}

export default ColorGame;