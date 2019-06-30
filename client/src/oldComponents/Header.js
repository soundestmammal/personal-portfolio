import React from 'react';
import { Link } from 'react-router-dom';
import '../portfolio-design-assets/assets/css/main.css';

const Header = () => {
    return (
            <nav id="nav">
                <ul>
                    <li className="current"><a href="index.html">Home</a></li>
                    <li><a href="left-sidebar.html">About</a></li>
                    <li><a href="right-sidebar.html">Portfolio</a></li>
                    <li><a href="no-sidebar.html">Blog</a></li>
                </ul>
            </nav>
    )
}

export default Header;