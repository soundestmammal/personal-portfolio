import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


import Header from './Header';
import Dashboard from './Dashboard';
import UrbanEcon from './UrbanEcon';
import ChapterOne from './ChapterOne';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header />
                    <Route exact path="/farmingdale" component={Dashboard}/>
                    <Route exact path="/farmingdale/urbanecon" component={UrbanEcon}/>
                    <Route exact path="/farmingdale/urbanecon/ch1" component={ChapterOne} />
                </div>
            </BrowserRouter>
            
        );
    }
}

export default App;
