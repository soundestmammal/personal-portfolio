import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css';

const Header = () => {
    return (
        <header>
            <div class="logo">
                <img src="img/devpic.png" alt="" />
            </div>
            <button className="nav-toggle">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">My Services</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">About me</Link></li>
                    <li className="nav__item"><Link to="/" className="nav__link">My Work</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;