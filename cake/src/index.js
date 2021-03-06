import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';

import 'mdbreact/dist/css/mdb.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import './assets/css/style.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Compra from './pages/Compra/Compra';
import NotFound from './pages/NotFound/NotFound';

//Realizar a criação das rotas
const Rotas = (
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
serviceWorker.unregister();
