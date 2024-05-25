import React from 'react';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg';
import book5 from '../assets/book5.jpg';
import book6 from '../assets/book6.jpg';
import book7 from '../assets/book7.jpg';

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
          <img src={book1} alt="Book 1" className="animated-image" />
          <img src={book2} alt="Book 2" className="animated-image" />
          <img src={book3} alt="Book 3" className="animated-image" />
          <img src={book4} alt="Book 4" className="animated-image" />
          <img src={book5} alt="Book 5" className="animated-image" />
          <img src={book6} alt="Book 6" className="animated-image" />
          <img src={book7} alt="Book 7" className="animated-image" />
        </div>
      </div>
    </section>
  );
}

export default PopularBooks;
