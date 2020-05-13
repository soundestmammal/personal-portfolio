import React from 'react';
import img1 from '../img/portfolio-01.jpg';

const PortfolioItem = () => {
    return (
        <div>
            <div className="intro">
                <h1 className="section__title section__title--intro">
                    The title <strong>of my project</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">A short subtitle</p>
                <img src={img1} alt="rob smiling" className="intro__img"/>
            </div>
            <div className="portfolio-item-individual">
                <p>I built a web application with web sockets. The backend is built using node and express.</p>
                <img src={img1} alt=""/>
                <p>Why are using databases as a messaging queue an antipattern. This is just some lorem that I have come up with on the fly. It stretches my fingers after long periods of thinging.</p>
                <p>What are some examples of messaging queues that are popular today. I have heard great things about rabbit mq. That sounds good.</p>
            </div>
        </div>
    );
}

export default PortfolioItem;