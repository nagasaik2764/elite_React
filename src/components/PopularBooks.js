import React from 'react';
import IIT from '../assets/IIT.jpeg';
import Biology from '../assets/Biology.jpeg';
import Physics from '../assets/Physics.jpeg';
import Chemistry from '../assets/Chemistry.jpeg';
import Maths from '../assets/Maths.jpeg';


function PopularBooks() {
  return (
    <section className="popular-books">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 animated">Popular Books</h2>
      <div className="divider-custom animated fade-up">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          <img src={IIT} alt="IIT" className="animated-image" />
          <img src={Biology} alt="Biology" className="animated-image" />
          <img src={Physics} alt="Physics" className="animated-image" />
          <img src={Chemistry} alt="Chemistry" className="animated-image" />
          <img src={Maths} alt="Maths" className="animated-image" />
        </div>
      </div>
    </section>
  );
}

export default PopularBooks;
