import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/board.css";

class ColorGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }
    render() {
        return(
            <div className="notOver">
                <div className="status">Welcome to the color game</div>
                <Link to="/"><button>Click this button to go back to the home page</button></Link>
            </div>
        );
    }
}

export default ColorGame;