import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Square from './Square';
import "../css/board.css";

class ColorGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false,
            isAWinner: false,
            player1: true,
        }
        this.state.squares = new Array(9);
        for(let i = 0; i < 9; i++) {
            this.state.squares[i] = new Array(3);
            for(let j = 0; j < this.state.squares[i].length; j++) {
                this.state.squares[i][j] = this.generateRandomNumber();
            }
        }
    }

    // createDataStructure = () => {
    //     const copySquares = this.state.squares.slice();
    //     for(let i = 0; i < 9; i++) {
    //         copySquares[i] = new Array(3);
    //         for(let j = 0; j < copySquares[i].length; j++) {
    //             copySquares[i][j] = this.generateRandomNumber();
    //         }
    //     }
    //     this.setState( { squares: copySquares });
    //     // console.log(copySquares);
    //     console.log(this.state.squares);
    // }

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

    // populateSquaresWithColors = () => {
    //     const copy = this.state.squares.splice();
    //     for(let i = 0; i < 9; i++) {
    //         for(let j = 0; j < 3; j++) {
    //             let num = this.generateRandomNumber();
    //             copy[i][j] = num;
    //         };
    //     };

    //     this.setState( { squares: copy });
        
    // }

    renderSquare = (i) => {
        return (
            <Square
                styles={`rgb(${this.state.squares[i][0]}, ${this.state.squares[i][1]}, ${this.state.squares[i][2]})`}
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
                <Link to="/"><button>Click this button to go back to the home page</button></Link>
            </div>
        );
    }
}

export default ColorGame;