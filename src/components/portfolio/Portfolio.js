import React from 'react';

import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './Portfolio.css';


function Portfolio(){
return (
    <Router>
        <div>
            <Home />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    </Router>
);
}
export default Portfolio;