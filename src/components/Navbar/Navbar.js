import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false); 
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav>
        <div className={click ? "nav-container active" : "nav-container"}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              >
              HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              >
              ABOUT
              </NavLink>
            </li>
                  
            <li className="nav-item">
              <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              >
              CONTACT
              </NavLink>
            </li>
                  
            <li className="nav-item">
              <NavLink
              exact
              to="/projects"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              >
              PROJECTS
              </NavLink>
            </li>              
                  
            <li className="nav-item">
              <NavLink
              exact
              to="/github"
              target="_blank"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              >
              GITHUB
              </NavLink>
            </li>        

            <li className="nav-item">
              <NavLink
              exact
              to="/linkedin"
              target="_blank"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
              >
              LINKEDIN
              </NavLink>
            </li>        

          </ul>
          <div className={click ? "nav-icon active" : "nav-icon"} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;