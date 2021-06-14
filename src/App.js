import React from 'react';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import About from './components/About/About';

import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App(){
   
return (
<Router>
<div className="app">
<Navbar />
<div>



<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/projects" component={Projects} />
<Route path="/github" component={() => window.location = 'https://github.com/arthadjoehana'}/>
<Route path="/linkedin" component={() => window.location = 'https://www.linkedin.com/in/artha-djoehana-883253174/'}/>


</div>
</div>
</Router>
);
}




export default App;