import React, { Component } from 'react';
import Navigation from './Navigation';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>This is the App Component!!!</div>
            </div>
        );
    }
}

export default App;