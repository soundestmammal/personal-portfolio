import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UrbanEcon extends Component {
    render(){
        return(
            <div className="ui container">
                <h1>Welcome to Urban Economics</h1>
                <p>Urban Economics is the intersection of Economics and Geography. Economics in that it is the study
                    of scarce resources and adds a spatial element of geography. Roughly four-fifths of the United States 
                    population lives in urban areas, and has been steadily increasing over the years. 
                </p>
                <h3>Please Select a Chapter to review!</h3>
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <div className="ui button primary" style={{marginBottom: '2em'}}><Link to="/farmingdale/urbanecon/ch1" style={{color: 'white'}}>Chapter 1</Link></div>
                    <div className="ui button primary" style={{marginBottom: '2em'}}><Link to="/farmingdale/urbanecon/ch2">Chapter 2</Link></div>
                    <div className="ui button primary" style={{marginBottom: '2em'}}><Link to="/farmingdale/urbanecon/ch3">Chapter 3</Link></div>
                    <div className="ui button primary" style={{marginBottom: '2em'}}><Link to="/farmingdale/urbanecon/ch4">Chapter 4</Link></div>
                </div>
            </div>
        );
    }
}

export default UrbanEcon;