import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

class Dashboard extends Component {
    render() {
        return (
            <div className="ui container" style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{fontSize: '5em', marginBottom: '4em'}}>This is the dashboard</div>
                <div>Welcome to the Farmingdale State Supplementary Guide.</div>
                <p>This guide is open source, and I welcome others to help me add content. I encourage contributions to the notes, quiz questions, or video examples. Also, any 
                    other online materials that are beneficial for learning can be forwarded to me and I will make them available on this course page. If any one would like to
                    contribute to the software side of things, I look forward to working together. Until then, Enjoy!
                </p>
                <Link to="/farmingdale/urbanecon"><Button name="Click Here to continue to the Urban Economics Course Page" dest="farmingdale/urbanecon"/></Link>
            </div>
            

        );
    }
}

export default Dashboard;