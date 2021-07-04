import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Cryptotracker.css';

import Navbar from './components/Navbar/Navbar'
import Crypto from './Crypto'

function Cryptotracker() {
  
  return (

    <div className="cryptotracker">
      <Router>
        <div className="searchbar">
          <Navbar />
        </div>
        
        <Route path="/crypto" component={Crypto} />
        <Route path="/github" component={() => window.location = 'https://github.com/arthadjoehana/Cryptoapp'}/>
      </Router>
    </div>

    
  );
};

export default Cryptotracker;