import React, { Component } from 'react';
import QuizCard from './QuizCard';

class QuizWrapper extends Component {
    constructor(props){
        super(props);
        this.state = { currentSelection: null}
    }

    chooseAnswer = (a) => {
        this.setState( { currentSelection: a })
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <QuizCard parentMethod={this.chooseAnswer}/>
                <div>{this.state.currentSelection}</div>
            </div>
        );
    }
}

export default QuizWrapper;