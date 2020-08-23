import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import "../styles/style.css";

import Introduction from './Introduction';
import MyWork from './MyWork';
import Footer from './Footer';
library.add(fab);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: "wrapper"
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Introduction />
                <MyWork />
                <Footer />
            </div>
        )
    }
}

export default App;
