import React, { Component } from 'react';

import '../styles/style.css';

class Header extends Component {

    // state = {
    //     toggle: false
    // };

    // handleClick = (e) => {
    //     e.preventDefault();
    //     alert("Hell0!");
    //     console.log("hello!!!")
    // }

    // showNavList = () => {

    // }

    render() {
        return (
            <header>
                <div class="logo">
                    <img src="img/devpic.png" alt="" />
                </div>
                <button className="nav-toggle" onClick={this.handleClick}>
                    <span className="hamburger"></span>
                </button>
                
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">My Services</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">About Me</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">My Work</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;