import React from 'react';

function Programmes() {
  return (
    <section className="page-section portfolio" id="courses">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Our Programmes</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="d-flex align-items-center justify-content-evenly">
              <a className="btn btn-primary" href="#popup-box">Prime Programme III - V</a>
              <a className="btn btn-primary" href="#popup-box1">Techno-Unique Programme VI-X</a>
              <a className="btn btn-primary" href="#popup-box2">Olympiad-Spectra VI-IX</a>
              <div id="popup-box" className="modal">
                <div className="content">
                  <h1 style={{ color: 'green' }}>Prime Programme III - V</h1>
                  <p>We offer foundation courses Mathematics, Science and Reasoning.</p>
                  <a href="#" style={{ position: 'absolute', top: '10px', right: '10px', color: 'black', fontSize: '30px', textDecoration: 'none' }}>&times;</a>
                </div>
              </div>
              <div id="popup-box1" className="modal">
                <div className="content">
                  <h1 style={{ color: 'green' }}>Techno-Unique Programme VI-X</h1>
                  <p>We offer foundation courses for Biology, Physics, Chemistry and Mathematics...</p>
                  <a href="#" style={{ position: 'absolute', top: '10px', right: '10px', color: 'black', fontSize: '30px', textDecoration: 'none' }}>&times;</a>
                </div>
              </div>
              <div id="popup-box2" className="modal">
                <div className="content">
                  <h1 style={{ color: 'green' }}>Olympiad-Spectra VI-IX</h1>
                  <p>We offer foundation courses for HBCSE Olympiad.</p>
                  <a href="#" style={{ position: 'absolute', top: '10px', right: '10px', color: 'black', fontSize: '30px', textDecoration: 'none' }}>&times;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programmes;
