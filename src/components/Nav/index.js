import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavItem (props) {
  return (
    <div>
      <Navbar>
        <ul>
          <li>
            <NavLink className="link" to="/about">
              <div className="nav-item" >About Me</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link"  to="/projects">
              <div  className="nav-item">Projects</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/resume">
              <div  className="nav-item">Resume</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">
              <div className="nav-item">Contact Me</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default NavItem;