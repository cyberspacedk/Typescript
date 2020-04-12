import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar : React.FC = () => {
  return ( 
    <nav className="p-hor-1 purple darken-2">
      <div className="nav-wrapper ">
        <NavLink to="/" className="brand-logo">React + TS</NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">To Do</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li> 
        </ul>
      </div> 
    </nav>
  )
}

export default NavBar;