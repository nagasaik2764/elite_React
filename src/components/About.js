import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/BookAspire.png';

function About() {
  const paragraphs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.about-section');
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        paragraphs.current.forEach((p, index) => {
          setTimeout(() => {
            p.classList.add('typing-animation');
            p.classList.remove('hidden');
          }, index * 500); // Delay between each paragraph animation
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p ref={el => paragraphs.current[0] = el} className="hidden">
              <strong>Elite Academy</strong> is the premier destination for all your educational needs, offering a </p>
              <p ref={el => paragraphs.current[1] = el} className="hidden">comprehensive range of resources and services tailored to students of all ages and</p>
              <p ref={el => paragraphs.current[2] = el} className="hidden">academic pursuits.Whether you're seeking School Books, Competitive Books,</p>
              <p ref={el => paragraphs.current[3] = el} className="hidden"> General Books, or Stationery,Elite Academy is your one-stop shop for fulfilling your daily
            </p>
            <p ref={el => paragraphs.current[4] = el} className="hidden">
            academic requirements.At Elite Academy, our mission is to empower students by</p>
            <p ref={el => paragraphs.current[5] = el} className="hidden">providing them with the widest selection of educational products, all conveniently</p>
            <p ref={el => paragraphs.current[6] = el} className="hidden">accessible from the comfort of your home. With a legacy of over 50 years in the books </p>
            <p ref={el => paragraphs.current[7] = el} className="hidden">trade and publishing industry, we bring unparalleled expertise and dedication to every</p>
            <p ref={el => paragraphs.current[8] = el} className="hidden">aspect of our service.
            </p>
            <p ref={el => paragraphs.current[9] = el} className="hidden">
              We pride ourselves on offering a hassle-free experience, ensuring your utmost convenience </p>
              <p ref={el => paragraphs.current[10] = el} className="hidden">at every step. From our trusted and secure payment gateway to our prompt delivery system,</p>
              <p ref={el => paragraphs.current[11] = el} className="hidden">we prioritize your satisfaction above all else.
            </p>
            <p ref={el => paragraphs.current[12] = el} className="hidden">
              Our commitment to excellence is evident in our curated collection of educational materials, 
              carefully selected to help every student reach their full potential in their academic journey. 
              With Elite Academy, you can trust that you're receiving quality resources from leading 
              educational publishers, designed to support your success in your chosen career path.
            </p>
            <p ref={el => paragraphs.current[13] = el} className="hidden">
              Experience the difference with Elite Academy, where education meets excellence.
            </p>
          </div>
          <div className="col-md-6">
            <img src={aboutImage} alt="About" className="img-fluid animated-image" style={{ width: '500px', height: '500px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
