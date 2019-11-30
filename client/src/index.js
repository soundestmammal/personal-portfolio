import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Monty from './components/Monty';
import Chat from './components/Chat';
import Board from './components/Board';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/tictactoe" component={Board} />
            <Route exact path="/monty" component={Monty} />
            <Route exact path="/chat" component={Chat} />
        </div>
    </BrowserRouter>,
    document.querySelector('#root')
)