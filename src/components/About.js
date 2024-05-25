import React from 'react';
import aboutImage from '../assets/BookAspire.png';


function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <p>
                        <strong>Elite Academy</strong> is the premier destination for all your educational needs, offering a comprehensive range of resources and services tailored to students of all ages and academic pursuits. Whether you're seeking School Books, Competitive Books, General Books, or Stationery, Elite Academy is your one-stop shop for fulfilling your daily academic requirements.
                    </p>
                    <p>
                        At Elite Academy, our mission is to empower students by providing them with the widest selection of educational products, all conveniently accessible from the comfort of your home. With a legacy of over 50 years in the books trade and publishing industry, we bring unparalleled expertise and dedication to every aspect of our service.
                    </p>
                    <p>
                        We pride ourselves on offering a hassle-free experience, ensuring your utmost convenience at every step. From our trusted and secure payment gateway to our prompt delivery system, we prioritize your satisfaction above all else.
                    </p>
                    <p>
                        Our commitment to excellence is evident in our curated collection of educational materials, carefully selected to help every student reach their full potential in their academic journey. With Elite Academy, you can trust that you're receiving quality resources from leading educational publishers, designed to support your success in your chosen career path.
                    </p>
                    <p>
                        Experience the difference with Elite Academy, where education meets excellence.
                    </p>

          </div>
          <div className="col-md-6">
            <img src={aboutImage} alt="About" className="img-fluid" style={{ width: '500px', height: '500px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
