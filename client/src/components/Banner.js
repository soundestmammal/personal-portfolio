import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Banner.css';
import dumbo from '../dumbo.jpg';

const Banner = () => {
    return (
        <div className="container">
            <div className="background-image" style={{backgroundImage: dumbo}}>
                <div className="frontPage">
                    <div className="name">Rob Checco</div>
                    <p className="aboutMeBanner">I am a New York City based software engineer and data science enthusiast.</p>
                </div>
            </div>
		</div>
    );
}

export default Banner;