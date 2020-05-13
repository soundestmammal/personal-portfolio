import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
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
// import Header from './components/Header';
// import Footer from './components/Footer';

ReactDOM.render(
    <BrowserRouter>
        <div>
            {/* <Header /> */}
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
            {/* <Footer /> */}
        </div>
    </BrowserRouter>,
    document.querySelector('#root')
)