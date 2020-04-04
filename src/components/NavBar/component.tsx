import React from 'react';

const NavBar : React.FC = () => {
  return ( 
    <nav className="p-hor-1 purple darken-2">
      <div className="nav-wrapper ">
        <a href="/" className="brand-logo">React + TS</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">To Do</a></li>
          <li><a href="/">About us</a></li> 
        </ul>
      </div> 
    </nav>
  )
}

export default NavBar;