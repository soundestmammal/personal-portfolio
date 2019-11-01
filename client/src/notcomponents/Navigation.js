import React from 'react';
import '../css/styles.css';

const Navigation = () => {
    return(
        <nav class="navbar">
            <ul class="navbar-links">
                <li class="navbar-item"><a href="/">rob</a></li>
                <li class="navbar-item"><a href="/">Hello</a></li>
                <li class="navbar-item"><a href="/">Projects</a></li>
                <li class="navbar-item"><a href="/">Thoughts</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;