
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP , FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'; 


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src="/assets/Group 11 1.png" alt="Logo" srcset="" />
        </div>
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>
       <div className="footer-column">
          <h3>Contacts</h3>
          <p><FaMapMarkerAlt /> 1234 Sample Street<br />Austin Texas 78681</p>
          <p><FaPhoneAlt /> 512.333.2222</p>
          <p><FaEnvelope /> sampleemail@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Social Media</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterestP />
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2021 All Rights Reserved</div>
    </footer>
  );
}

export default Footer;