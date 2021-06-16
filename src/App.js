import React from 'react';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App(){
   
return (
<Router>
<div className="app">
<Navbar />
<div>



<Route path="/" exact component={Home} />



</div>
</div>
</Router>
);
}




export default App;