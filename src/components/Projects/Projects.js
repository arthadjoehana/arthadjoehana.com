import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';
import AliceCarousel from 'react-alice-carousel';


export default function Projects() {
    return (
      <div className="Projects">
       <AliceCarousel disableButtonsControls mouseTracking>
        <div className="projects-slider">
          <div className="projects-slider-button img1">
            <button>
            <h2>Click here to view project</h2>
            </button>
          </div>
        </div>



        <div className="projects-slider">
          <div className="projects-slider-button img2">
            <button>
            <h2>Click here to view project</h2>
            </button>
          </div>
        </div>



        <div className="projects-slider">
          <div className="projects-slider-button img3">
            <button>
            <h2>Click here to view project</h2>
            </button>
          </div>
        </div>
      </AliceCarousel>
      </div>
    );
  }


