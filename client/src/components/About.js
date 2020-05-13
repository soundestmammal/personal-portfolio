import React from 'react';
import SantaCruz from '../rob-santacruz.jpg';

const About = () => {
    return(
        <section className="about-me">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Full Stack Engineer based out of NYC</p>

            <div className="about-me__body">
                <p>Hey, I am Robert Checco, a new graduate from SUNY Farmingdale. I am looking for my first software engineering role after college. I am really interested in building scalable systems, data science projects, and building responsive user interfaces.</p>
                <p>During my time in college, I worked at Able Safety Consulting as a Software Developer. At this role, I was able to work on both the client and server side to build a learning management system. The subsequent summer, I won an on-campus start up competition and built a mobile application using react native and firebase.</p>
            </div>

            <img src={SantaCruz} alt="Rob2" class="about-me__img" />
        </section>
    );
}

export default About;