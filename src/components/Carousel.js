import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/a-sheet-of-yellowed-paper-from-a-book-is-flying-in.png';
import img2 from '../assets/on-the-table-in-front-of-the-window-lies-an-open-b.png';

function CustomCarousel() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Carousel ref={carouselRef}>
      <Carousel.Item>
        <img src={img1} className="d-block w-100 animated-image" alt="Image 1" />
        <Carousel.Caption style={{ left: '20%', transform: 'translateX(-50%)' }}>       
            <h1>Welcome to Elite Academy</h1>
            <p>We offer a wide range of courses to help you succeed.</p>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="d-block w-100 animated-image" alt="Image 2" />
        <Carousel.Caption>
          <h3>Join Us Today</h3>
          <p>Discover a world of opportunities.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
