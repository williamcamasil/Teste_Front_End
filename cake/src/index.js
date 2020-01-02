import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';

import 'mdbreact/dist/css/mdb.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Compra from './pages/Compra/Compra';
import NotFound from './pages/NotFound/NotFound';

//Realizar a criação das rotas
const Rotas = (
    //cria a URL
    <Router> 
        <div>
            <Switch>
                {/* Rendereniza a url */}
                <Route exact path = "/" component ={Home}/>
                <Route path="/Compra" component = {Compra}/>
                <Route component = {NotFound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));


// ReactDOM.render(<Inicial />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
