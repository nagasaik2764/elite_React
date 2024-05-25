import React from 'react';
import logo from '../assets/elitelogo.jpeg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Elite Logo" height="50px" className="d-inline-block align-top" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#carouselExampleSlidesOnly">Home</a>
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
