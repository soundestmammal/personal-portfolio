import React from 'react';
import Answers from './Answers';
import Button from './Button';

const QuizCard = (props) => {
    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: 'salmon', height: '500px', width: '1000px', marginBottom: '10px'}}>
            <h1 style={{color: 'white'}}>Which of the following is true?</h1>
            <Answers answer="First Answer" parentMethod={props.parentMethod}/>
            <Answers answer="Second Answer" parentMethod={props.parentMethod}/>
            <Answers answer="Third Answer" parentMethod={props.parentMethod}/>
            <Answers answer="Fourth Answer" parentMethod={props.parentMethod}/>
            <Button name="Submit"/> 
        </div>
    );
}

export default QuizCard;