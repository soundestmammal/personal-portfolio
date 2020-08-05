import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import img1 from '../img/portfolio-01.jpg';
import img2 from '../img/portfolio-02.jpg';
import img3 from '../img/portfolio-03.jpg';
import img4 from '../img/portfolio-04.jpg';
import img5 from '../img/portfolio-05.jpg';
// import img6 from '../img/portfolio-06.jpg';
// import img7 from '../img/portfolio-07.jpg';
// import img8 from '../img/portfolio-08.jpg';
// import img9 from '../img/portfolio-09.jpg';
// import img10 from '../img/portfolio-10.jpg';

const MyWork = () => {
    function openTabInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    return (
        <section className="my-work">
            <h2 className="section__title section__title--work">My Projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">
                <a style={{cursor: 'pointer'}} onClick={() => openTabInNewTab("https://www.c19insights.io")} className="portfolio__item">
                    <img src={img5} alt="First portfolio project" className="portfolio__img"/>
                    <p className="portfolio__item-s">COVID-19 Insights</p>
                    <p>An interactive dashboard that displays COVID-19 trends for the United States.</p>
                </a>
            
                <a style={{cursor: 'pointer'}} onClick={() => openTabInNewTab("https://www.oasisglutenfree.com")} className="portfolio__item">
                    <img src={img5} alt="First portfolio project" className="portfolio__img"/>
                    <p className="portfolio__item-s">Oasis</p>
                    <p>Oasis is a data-driven platform to locate gluten free restaurants in your community.</p>
                </a>

           
                <a href="/tictactoe" className="portfolio__item">
                    <img src={img5} alt="First portfolio project" className="portfolio__img"/>
                    <p className="portfolio__item-s">Tic Tac Toe</p>
                    <p>Take turns playing tic tac toe with a friend.</p>
                </a>

     
                 <a style={{cursor: 'pointer'}} onClick={() => openTabInNewTab("https://www.github.com/soundestmammal/senior_thesis")} className="portfolio__item">
                    <img src={img5} alt="First portfolio project" className="portfolio__img"/>
                    <p className="portfolio__item-s">Car Ownership</p>
                    <p>A discrete choice model for car ownership NY Metro area.</p>
                </a>

                <a style={{cursor: 'pointer'}} onClick={() => openTabInNewTab("https://www.github.com/soundestmammal/mode_choice")} className="portfolio__item">
                    <img src={img5} alt="First portfolio project" className="portfolio__img"/>
                    <p className="portfolio__item-s">Mode Choice</p>
                    <p>A comparison of machine learning algorithms to predict how people get to work.</p>
                </a>

                {/*
                <a href="/" className="portfolio__item">
                    <img src={img6} alt="First portfolio project" className="portfolio__img"/>
                </a>

                <a href="/" className="portfolio__item">
                    <img src={img7} alt="First portfolio project" className="portfolio__img"/>
                </a>
                <a href="/" className="portfolio__item">
                    <img src={img8} alt="First portfolio project" className="portfolio__img"/>
                </a>
                <a href="/" className="portfolio__item">
                    <img src={img9} alt="First portfolio project" className="portfolio__img"/>
                </a>
                <a href="/" className="portfolio__item">
                    <img src={img10} alt="First portfolio project" className="portfolio__img"/> 
                </a>
                */}
            </div>
        </section>
    );
}

export default MyWork;