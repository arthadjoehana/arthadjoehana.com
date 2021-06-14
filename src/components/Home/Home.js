import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home(){
return (
<div>
    <div className="home-header">
        <div className="home-text">
            <h1><span>I'm</span> <span className="name">ARTHA</span></h1>
            <h2><span>I</span> <span>design</span> <span>and</span> <span>build</span> <span>websites</span></h2>
        </div>
        <div className="home-button">
            <button >
                <Link className="home-button-link" exact to="/projects">
                View my projects
                </Link>
            </button>
        </div>
        
    </div>
</div>
);
}

export default Home