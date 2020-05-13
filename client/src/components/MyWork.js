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
    return (
        <section className="my-work">
            <h2 className="section__title section__title--work">My Work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">
                <Link to="/project" className="portfolio__item">
                    <img src={img1} alt="First portfolio project" className="portfolio__img"/>
                </Link>
            
                <a href="/tictactoe" className="portfolio__item">
                    <img src={img2} alt="First portfolio project" className="portfolio__img"/>
                </a>

           
                <a href="/datastructures" className="portfolio__item">
                    <img src={img3} alt="First portfolio project" className="portfolio__img"/>
                </a>

     
                 <a href="/colorgame" className="portfolio__item">
                    <img src={img4} alt="First portfolio project" className="portfolio__img"/>
                </a>

                <a href="/monty" className="portfolio__item">
                    <img src={img5} alt="First portfolio project" className="portfolio__img"/>
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