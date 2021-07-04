import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';


function Navbar() {
        const [click, setClick] = useState(false);
      
        const handleClick = () => setClick(!click);
        return (
          
            <nav>
              <div className={click ? "nav-container active" : "nav-container"}>
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                      <NavLink
                        exact
                        to="/crypto"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        CRYPTOCURRENCY LIST
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/" target="_blank"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        ARTHADJOEHANA.COM
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/github" target="_blank"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                      GITHUB
                      </NavLink>
                    </li>
                </ul>
                
                <div className={click ? "nav-icon active" : "nav-icon"} onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
              </div>
            </nav>
          
        );
      };
export default Navbar;