// LandingPage.jsx
import React from 'react';
import './Sections.css';
import { FiArrowRight } from 'react-icons/fi';


const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
        {/* Text Content with Arrows */}
        <div className="hero-content">
          <h1>
              <span className="faded">Project</span><br />
              <span className="black">Lorum</span>
          </h1>

          <div className="arrow-container">
            <button className="arrow-button">
              <span className="arrow">←</span>
            </button>
            <button className="arrow-button">
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Image */}
        < div className="hero-image">
          <img 
            src="/assets/Rectangle 6.png" 
            alt="Project visual" 
          />
          <button className="view-project-btn">
                View Project
          </button>
        </div>
      </div>
      </section>

      {/* About Section */}
      <section className="about-section"> 
       <div className="about-grid-container">
       <h1 className="mobile-heading">About</h1> {/* Mobile-only heading */}
    
    {/* Left Column - Images */}
    <div className="images-column">
      <div className="small-image top">
        <img src="/assets/Rectangle 9.png" alt="Architecture detail 1" />
      </div>
      <div className="small-image bottom">
        <img src="/assets/Rectangle 10.png" alt="Architecture detail 2" />
      </div>
      <div className="large-image">
        <img src="/assets/Rectangle 8.png" alt="Architecture overview" />
      </div>
    </div>

    {/* Right Column - Text Content */}
    <div className="text-column">
      <h1 className="desktop-heading">About</h1> {/* Desktop-only heading */}
      <div className="text-content-wrapper">
        <div className="about-text-block">
          <p>Lorem Ipsum was originally dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum was originally dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <a href="#" className="read-more-link">
            <strong>READ MORE</strong> <FiArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
        </section>


      <section className="Mission-section">
          <div className="mission-container">
      <div className="mission-header">
        <h2>Main Focus/Mission Statement</h2>
      </div>

      <div className="mission-grid">
        {/* First row - two columns */}
        <div className="mission-column">
          <div className="mission-item">
            <div className="mission-number">1</div>
            <p className="mission-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
        </div>
        
        <div className="mission-column">
          <div className="mission-item">
            <div className="mission-number">2</div>
            <p className="mission-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor.
            </p>
          </div>
        </div>
      </div>

    </div>

      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
        <h2 className="section-title">Our Projects</h2>
        
        <div className="projects-grid">
          {/* Top row - 2 projects */}
          <div className="project-card top-row">
            <img src="/assets/Rectangle 17.png" alt="Project 1" />
            <div className="project-overlay">
              <h3>Sample Project</h3>
                <button className="project-view-btn">
                  View More <FiArrowRight className="arrow-icon" />
                </button>
            </div>
          </div>
          
          <div className="project-card top-row">
            <img src="/assets/image 15.png" alt="Project 2" />
          </div>
          
          {/* Bottom row - 3 projects */}
          <div className="project-card">
            <img src="/assets/image 16.png" alt="Project 3" />
          </div>
          
          <div className="project-card">
            <img src="/assets/image 17.png" alt="Project 4" />
          </div>
          
          <div className="project-card">
            <img src="/assets/image 18.png" alt="Project 5" />
          </div>
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">
            All Projects <FiArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
      </section>

      <section className="contact-us-section">
         <div className="contact-form-container">
      <div className="form-section">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Your phone number" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email address" />
          </div>
          
          <div className="form-group">
            <label htmlFor="interest">Interested In</label>
            <select id="interest">
              <option value="">Select an option</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="service">Service</option>
              <option value="support">Support</option>
            </select>
          </div>
          
           <button type="submit" className="submit-btn">Send Email
             <FiArrowRight className="arrow-icon" />
           </button>
        </form>
      </div>
      
      <div className="image-section">
        <img 
          src="/assets/hassan.jpg" 
          alt="Contact illustration" 
          className="contact-image"
        />
      </div>
    </div>

      </section>
    </div>



  );
 
};

export default LandingPage;
