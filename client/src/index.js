import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Monty from './components/Monty';
import Chat from './components/Chat';
import Board from './components/Board';
import ColorGame from './components/ColorGame';
import DataStructures from './components/DataStructures';
import Heapsort from './components/Heapsort';
import BST from './components/BST';
import App from './components/App';
import PortfolioItem from './components/PortfolioItem';

const trackingId = "";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/project" component={PortfolioItem} />
                <Route exact path="/tictactoe" component={Board} />
                <Route exact path="/colorgame" component={ColorGame} />
                <Route exact path="/monty" component={Monty} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/datastructures" component={DataStructures} />
                <Route exact path="/datastructures/bst" component={BST} />
                <Route exact path="/datastructures/heapsort" component={Heapsort} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.querySelector('#root')
)