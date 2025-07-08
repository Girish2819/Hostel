import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Side */}
      <div className="footer-left">
        <h2 className="college-name">Rajiv Gandhi Institute of Petroleum Technology</h2>
        <div className="contact-info">
          <p>
            📍 <a href="https://maps.app.goo.gl/J27kb3HTvERsMa3G8" target="_blank" rel="noopener noreferrer">
              RGIPT Hostel Location
            </a>
          </p>
          <p>📞 +91-9876543210</p>
          <p>📧 hosteladmin@rgipt.ac.in</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="footer-right">
        <p className="developer-name">
          Designed & Developed by <span>Girish Ranjan</span>
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/girishranjan71" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/girishranjan71" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
