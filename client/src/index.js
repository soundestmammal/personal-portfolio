import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Monty from './components/Monty';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/monty" component={Monty} />
        </div>
    </BrowserRouter>,
    document.querySelector('#root')
)