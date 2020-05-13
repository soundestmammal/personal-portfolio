import React from 'react';
import '../styles/style.css';

const Services = () => {
    return (
        <section className="my-services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Client Side</h3>
                    <p>React and Redux for clean user interfaces. Front end scene is always evolving and I love to keep up with the latest javascript.</p>
                </div>
                <div className="service">
                    <h3>Data Science</h3>
                    <p>Check out my economics research where I used a Neural Network to predict transportation mode choice. I've also worked on a few problems on Kaggle, check it out.</p>
                </div>
                <div className="service">
                    <h3>Server Side</h3>
                    <p>I am interested in building scalable systems to meet the demand for today's evergrowing business requirements.</p>
                </div>
            </div>
            <a href="http://github.com/soundestmammal" className="btn">My Work</a>
        </section>
    );
}

export default Services;