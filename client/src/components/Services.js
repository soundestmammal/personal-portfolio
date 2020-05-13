import React from 'react';
import '../styles/style.css';

const Services = () => {
    return (
        <section className="my-services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Client Side</h3>
                    <p>React and Redux are my favorites here. I love learning new things and things move so fast here I enjoy learning the latest features and keeping up with the latest.</p>
                </div>
                <div className="service">
                    <h3>Data Science</h3>
                    <p>My social science background gives me a strong foundation to separate the signal from the noise. </p>
                </div>
                <div className="service">
                    <h3>Server Side</h3>
                    <p>Nodejs and Express are my favorites here. I am interested in building scalable systems to meet the demand for today's business requirements.</p>
                </div>
            </div>
            <a href="/" className="btn">My Work</a>
        </section>
    );
}

export default Services;