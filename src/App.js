import React from 'react';

import Portfolio from './components/portfolio/Portfolio';
import Cryptotracker from './components/cryptotracker/Cryptotracker';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App(){ 
return (
    <Router>
        <div>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/cryptotracker" component={Cryptotracker} />
        </div>
    </Router>
);
};
export default App;