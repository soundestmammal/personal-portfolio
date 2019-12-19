import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fabGithub } from '@fortawesome/free-solid-svg-icons';
import "../styles/App.css";
import Banner from './Banner';
import Content from './Content';
import Toolbox from './Toolbox';
// library.add(fabGithub);

//import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import Dashboard from './Dashboard';
// import UrbanEcon from './UrbanEcon';
// import ChapterOne from './ChapterOne';

// <Banner />
// <Content />

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Banner />
                <Toolbox />
                <Content />
                <p>Hey! My name is Rob and this is my portfolio! Stay tuned to check out the latest from me!</p>
                <Link to="/tictactoe"><button>Click this button to see my tic tac toe project</button></Link>
                <Link to="/colorgame"><button>Click this button to see my color game project</button></Link>
            </div>
        )
    }
}

export default App;
