import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


import Header from './Header';
import Banner from './Banner';
import About from './About';
import Main from './Main';
// import Dashboard from './Dashboard';
// import UrbanEcon from './UrbanEcon';
// import ChapterOne from './ChapterOne';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='homepage is-preload'>
                    <div id="page-wrapper">
                        <div id="header">
                            <Header />
                            <Banner />
                            <About />
                            <Main />
                        </div>
                    </div>
                    
                </div>
            </BrowserRouter>
            
        );
    }
}

export default App;
