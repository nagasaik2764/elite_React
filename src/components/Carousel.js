import React from 'react';
import img1 from '../assets/a-sheet-of-yellowed-paper-from-a-book-is-flying-in.png';
import img2 from '../assets/children-read-books-and-back-to-school--on-white-b.png';

function Carousel() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block img-fluid animated-image" alt="Image 1" style={{ width: '100%', height: '1000px' }} />
          <div className="carousel-caption d-none d-md-block">
            <h1 style={{ paddingLeft: '290px' }}>Welcome to Elite Academy</h1>
            <p style={{ paddingLeft: '290px' }}>We offer a wide range of courses to help you succeed.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block img-fluid" alt="Image 2" style={{ width: '100%', height: '1000px' }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
