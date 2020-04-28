import React from 'react';
import Rob from '../rob2.jpg';

const Introduction = () => {
    return (
        <div className="intro">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Robert Checco</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">software engineer</p>
            <img src={Rob} alt="rob smiling" className="intro__img"/>
        </div>);
}

export default Introduction;