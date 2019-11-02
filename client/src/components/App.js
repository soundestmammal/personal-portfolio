import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import "../styles/App.css";
import Banner from './Banner';

//import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import Dashboard from './Dashboard';
// import UrbanEcon from './UrbanEcon';
// import ChapterOne from './ChapterOne';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Banner/>
                    <p>Hey! My name is Rob and this is my portfolio! Stay tuned to check out the latest from me! This should trigger a change...</p>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
