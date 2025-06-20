
import React from 'react';
import './components/'

const AboutSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-start">
        <div className="col-md-6 d-flex flex-column gap-3">
          <img src="/images/about1.jpg" className="img-fluid" alt="About 1" />
          <img src="/images/about2.jpg" className="img-fluid" alt="About 2" />
          <img src="/images/logo-box.jpg" className="img-fluid" alt="Logo Box" />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h2>About</h2>
          <p className="text-muted">
            Lorem ipsum is simply dummy text of the printing and typesetting industry...
          </p>
          <a href="#" className="btn btn-outline-dark mt-3">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
