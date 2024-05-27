import React from 'react';
import mobileImg from '../assets/Phone.jpg';

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
            Road No.3, KPHB Colony, Kukatpally,
              <br />
              Hyderabad, Telangana - 500072, INDIA.
              <br />
              <img src={mobileImg} alt='MobileImage' style={{ width: '40px', height: '30px' }}/>  : +91 7330643345
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-google"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                  <i className="fab fa-fw fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Elite Academy</h4>
            <p className="lead mb-0">
            Elite Academy is a place where you can find all the material for all classes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
