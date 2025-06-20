// LandingPage.jsx
import React from 'react';
import './sections.css';


const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h5 className="text-muted">PROJECT</h5>
          <h1 className="hero-title">Lorum</h1>
        </div>
        <img src="./src/assets/Rectangle 6.png" alt="Hero" />
      </section>

      {/* About Section */}
      <section className="about-section row">
        <div className="col-md-6 about-images">
          <img src="/images/about1.jpg" alt="" />
          <img src="/images/about2.jpg" alt="" />
          <img src="/images/logo-box.jpg" alt="" />
        </div>
        <div className="col-md-6 about-text">
          <h2>About</h2>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry...</p>
          <a className="btn btn-outline-dark">Read More</a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h3>Our Projects</h3>
        <div className="main-project-card">
          <img src="./src/assets/Rectangle 17.png" alt="Main" />
           <img src="./src/assets/image 15.png" alt="Proj1" />
          <div className="card-overlay">
            <h5>Sample Project</h5>
            <p>View More →</p>
          </div>
        </div>
        <div className="thumbnail-grid">
         
          <img src="./src/assets/image 16.png" alt="Proj2" className='img-1' />
          <img src="./src/assets/image 17.png" alt="Proj3" />
          <img src="./src/assets/image 18.png" alt="Proj4" className='img-3' />
        </div>
        <div className="projects-btn">
          <button className="btn btn-dark">All Projects →</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
