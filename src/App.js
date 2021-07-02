import React from 'react';
import Navbar from './components/navbar/Navbar';

import Home from './components/home/Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App(){
   
return (
    <Router>
        <div>
            <Home />
            
        </div>
    </Router>
);
}




export default App;