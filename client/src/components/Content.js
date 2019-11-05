import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Content.css";

const Content = () => {
    return (
        <div className="contentContainer">
            <div className="leftPane">
                <div className="aboutMe">
                    <h4>About Me</h4>
                    <p>Hey my name is Rob Checco and this is where I am going to write something 
                        about myself. I really overthink summaries and spend a lot of time backspacing,
                        or deleting as it is called on the mac keyboard layout. Hmmmmm, something about 
                        Javascript, and probably something about data science. That should be cool. Nice.
                    </p>
                </div>

                <div className="latestProjects">
                    <h4>Latest Projects</h4>
                    <h5>Chat Application</h5>
                    <p>A cool chat room that nobody uses.</p>
                    <img src="https://source.unsplash.com/random/300x300" alt="This is where my chat application is"/>
                </div>
            </div>
            
            <div className="rightPane">
                <div className="location">
                    <p>New York, US</p>
                    <p>robert.checco@gmail.com</p>
                    <p>robertchecco.com</p>
                </div>

                <div className="skills">
                    <h4>Skills</h4>
                    <Link to="/monty"><h5>C++</h5></Link>
                    <h5>Javascript</h5>
                    <h5>Python</h5>
                    <h5>React/Redux</h5>
                </div>
            </div>
            
        </div>
    );
}

export default Content;