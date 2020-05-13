import React, { Component } from 'react';

import '../styles/style.css';

class Header extends Component {

    // state = {
    //     toggle: "nav-toggle"
    // };

    // handleClick = (e) => {
    //     e.preventDefault();
    //     console.log("hello!!!")
    //     if(this.state.toggle === "nav-toggle") {
    //         this.setState({ toggle: "nav-open"});

    //     } else {
    //         this.setState({ toggle: "nav-toggle"});
    //     }
    // }

    render() {
        return (
            <header>
                <div class="logo">
                    <img src="img/devpic.png" alt="" />
                </div>
                <button className="nav-toggle" onClick={this.props.handle}>
                    <span className="hamburger"></span>
                </button>
                
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/" className="nav__link" onClick={this.props.handle}>Home</a></li>
                        <li className="nav__item"><a href="/" className="nav__link" onClick={this.props.handle}>My Services</a></li>
                        <li className="nav__item"><a href="/" className="nav__link" onClick={this.props.handle}>About Me</a></li>
                        <li className="nav__item"><a href="/" className="nav__link" onClick={this.props.handle}>My Work</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;