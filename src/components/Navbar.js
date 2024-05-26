import React, { useState } from 'react';
import logo from '../assets/elitelogo.jpeg';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (    
    <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Elite Logo" height="50px" className="d-inline-block align-top" />
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-center ${isCollapsed ? '' : 'show'}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#courses">Programmes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
