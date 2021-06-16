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
              <a className="nav-links" activeClassName="active" href="#about" onClick={handleClick}>
                ABOUT
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-links" activeClassName="active" href="#projects" onClick={handleClick}>
                PROJECTS
              </a>
            </li>     

            <li className="nav-item">
              <a className="nav-links" activeClassName="active" href="#contact" onClick={handleClick}>
                CONTACT
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-links" href="https://github.com/arthadjoehana" target="blank">
                GITHUB
              </a>
            </li>        

            <li className="nav-item">
              <a className="nav-links" href="https://www.linkedin.com/in/artha-djoehana-883253174/" target="blank">
                LINKEDIN
              </a>
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