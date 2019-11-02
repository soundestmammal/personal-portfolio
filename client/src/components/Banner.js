import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="container">
            {/*I need to create a few things 
            Photo
            Text column with three rows
            Flush to the right a button
            
            */}
            <div className="bannerPhoto">
                <img src="https://source.unsplash.com/random/100x100" alt="something here"></img>
            </div>

            <div className="bannerDescription">
                <h2>Rob Checco</h2>
                <p>Software Engineer</p>
                <div>
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                    <span>E</span>
                </div>
            </div>

            <div className="bannerContactMe">
                <button>This is a button!</button>
            </div>
		</div>
    );
}

export default Banner;