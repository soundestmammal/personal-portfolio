import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import Banner from './Banner';
// import Content from './Content';
// import Toolbox from './Toolbox';

import "../styles/style.css";

import Header from './Header';
import Introduction from './Introduction';
import Services from './Services';
import About from './About';
import MyWork from './MyWork';
import Footer from './Footer';
library.add(fab);
// import Main from './Main';
// import Footer from './Footer';
// import Dashboard from './Dashboard';
// import UrbanEcon from './UrbanEcon';
// import ChapterOne from './ChapterOne';

// <Banner />
// <Content />



class App extends Component {
    state = {
        toggle: "wrapper"
    }

    handleHamburger = () => {
        if(this.state.toggle === "wrapper") {
            this.setState({ toggle: "nav-open" });
        } else {
            this.setState({ toggle: "wrapper" });
        }
    }

    render() {
        return (
            <div className={this.state.toggle}>
                <Header handle={this.handleHamburger}/>
                <Introduction />
                <Services />
                <About />
                <MyWork />
                <Footer />
                {/* <Banner /> */}
                {/* <Toolbox /> */}
                {/* <Content /> */}
                {/* <p>Hey! My name is Rob and this is my portfolio! Stay tuned to check out the latest from me!</p> */}
                {/* <Link to="/tictactoe"><button>Click this button to see my tic tac toe project</button></Link> */}
                {/* <Link to="/colorgame"><button>Click this button to see my color game project</button></Link> */}
            </div>
        )
    }
}

export default App;
