import React from 'react';

const About = () => {
    return(
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about"></p>

            <div className="about-me__body">
                <p>This is where I should write my about me.</p>
                <p></p>
            </div>
            <img src="img/devrob-2" alt="Rob2"/>
        </section>
    );
}

export default About;