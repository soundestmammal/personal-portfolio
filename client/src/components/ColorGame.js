import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Square from './Square';
import "../css/board.css";

class ColorGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            isOver: false,
            isAWinner: false,
            player1: true,
            squares: Array(9).fill(null),
        }
    }

    generateRandomNumber = () => {
        const number = Math.floor(Math.random()*255);
        return number;
    }

    logToConsole = () => {
        let i = 0;
        while(i < 1000) {
            console.log(this.generateRandomNumber());
            i++;
        }
    }
    renderSquare = (i) => {
        return (
            <Square
                value={ this.state.squares[i] } 
                onClick={ () => this.handleClick(i) }
            />
        );
    }

    
    renderBoard() {
        // const currentPlayer = (this.state.player1 ? "Player 1" : "Player 2");
        return (
            <div className="boardContainer">
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                </div>
                
                <div className="board-row">
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
                </div>
            </div> 
        )
    }

    render() {
        return(
            <div className="notOver">
                <div className="status">Welcome to the color game</div>
                {this.renderBoard()}
                <button onClick={this.logToConsole}>Click to test random number thing</button>
                <Link to="/"><button>Click this button to go back to the home page</button></Link>
            </div>
        );
    }
}

export default ColorGame;