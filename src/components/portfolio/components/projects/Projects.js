import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';

function Projects(){
 
    return (
        <div>
            <div className="projects" id="projects">
                
                <div className="project img img-1">
                    <h1>Projects</h1>
                    <div className="previous-next-button">
                        <button>
                            <i class="fas fa-angle-left"></i>
                        </button>
                        <button>
                            <i class="fas fa-angle-right"></i>
                        </button>
                    </div>
                    <div className="project-button">
                        <Link exact to="/cryptotracker" target="_blank">
                            <button>
                                <span className="link">Cryptocurrency tracker API</span>
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
);
}

export default Projects