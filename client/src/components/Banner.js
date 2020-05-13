import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Banner.css';

// const Banner = () => {
//     return (
//         <div className="container">
//             <div className="background-image" style={{backgroundImage: dumbo}}>
//                 <div className="frontPage">
//                     <div className="name">Rob Checco</div>
//                     <p className="aboutMeBanner">I am a New York City based software engineer and data science enthusiast.</p>
//                 </div>
//             </div>
// 		</div>
//     );
// }

const Banner = () => {
    return(
            <div className="picWrapper">
                <div className="background-image">
                    <div className="innerContent">
                        <div className="theText">Robert Checco</div>
                        <div className="theText">Software Engineer - NYC</div>
                        <p className="thePara">I'm a Full Stack Engineer looking to join a team that is working on meaningful software. Bonus points to teams where I can utilize my data science skillset!!! </p>
                    </div>
                </div>
            </div>
    );
}

export default Banner;