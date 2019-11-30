import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/board.css";
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false,
            isAWinner: false,
            player1: true,
            squares: Array(9).fill(null),
        };
    }

    // Everytime the component re-renders, I want to ask if the game is currently over
    // When a user clicks on a square, they change the state of squares, and 
    componentDidUpdate() {
        if(!this.state.isOver) {
            this.isGameOver();
        }
    }

    // This checks if the game should end or continue to keep going.
    // There are eight comparisons that I check.
    isGameOver() {
        if(
            (this.state.squares[0] === this.state.squares[1] && this.state.squares[1] === this.state.squares[2] && null !== this.state.squares[2])
            ||
            (this.state.squares[3] === this.state.squares[4] && this.state.squares[4] === this.state.squares[5] && null !== this.state.squares[5])
            ||
            (this.state.squares[6] === this.state.squares[7] && this.state.squares[7] === this.state.squares[8] && null !== this.state.squares[8])
            ||
            (this.state.squares[0] === this.state.squares[3] && this.state.squares[3] === this.state.squares[6] && null !== this.state.squares[6])
            ||
            (this.state.squares[1] === this.state.squares[4] && this.state.squares[4] === this.state.squares[7] && null !== this.state.squares[7])
            ||
            (this.state.squares[2] === this.state.squares[5] && this.state.squares[5] === this.state.squares[8] && null !== this.state.squares[8])
            ||
            (this.state.squares[0] === this.state.squares[4] && this.state.squares[4] === this.state.squares[8] && null !== this.state.squares[8])
            ||
            (this.state.squares[6] === this.state.squares[4] && this.state.squares[4] === this.state.squares[2] && null !== this.state.squares[2])
            ) 
            {
                // If there are three in a row, then I want isOver to be true.
                this.setState({ isOver: true, isAWinner: true })
            } 
            // I should also check if the game is over, because there is a draw.
            // This occurs when there is not a winner, and there are no null spaces in the array.
            // If the array contains null, then this will return true. I will flip it.
            // If the array doesn't include null, then the game is over.
            else if (!this.state.squares.includes(null)) {
                this.setState( { isOver: true })
            }
    }

    // Event Handler for when a player clicks on a square.
    handleClick(i) {

        // Don't mutate the state! Create a new array.
        const squaresCopy = this.state.squares.slice();
        
        // I need to check if the square that they are selecting has been played yet.
        // If it is null, allow the move to happen.
        if(this.state.squares[i] === null) {

            // Check whos turn it is, and then use correct X or O
            squaresCopy[i] = (this.state.player1 ? "X" : "O");        

            // Set the state of the game to be the new state.
            this.setState({ squares: squaresCopy });

            // Change the whos turn it is to go
            (this.state.player1 ? this.setState({ player1: false }) : this.setState({ player1: true}));
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={ this.state.squares[i] } 
                onClick={ () => this.handleClick(i) }
            />
        );
    }

    renderBoard() {
        const currentPlayer = (this.state.player1 ? "Player 1" : "Player 2");
        return (
            <div className="boardContainer">
                <div className="status">It is {currentPlayer}'s turn</div>

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

    renderBackButton = () => {
        return(
            <Link to="/"><button>Go back to home page</button></Link>
        );
    }

    render() {
    // Game is not over, and there is no winner
    if(!this.state.isOver && !this.state.isAWinner) {
        return (
            <div className="notOver">
                {this.renderBackButton()}
                {this.renderBoard()}
            </div>
        );
    // Game is over, but there is not a winner
    } else if(this.state.isOver && !this.state.isAWinner){
        // render yellow
        return (
            <div className="overNoWinner">
                {this.renderBackButton()}
                {this.renderBoard()}
                <button onClick={() => this.setState({ squares: Array(9).fill(null), isOver: false, isAWinner: false, player1: true })}>Play Again</button>
            </div>
        );
    // The game is over, and there is a winner
    } else {
        return (
            <div className="over">
                {this.renderBackButton()}
                {this.renderBoard()}
                <button onClick={() => this.setState({ squares: Array(9).fill(null), isOver: false, player1: true, isAWinner: false })}>Play Again</button>
            </div>
        );
    }
        
    }
}

export default Board;

