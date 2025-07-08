import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';
// import logo from '../../assets/rgipt_logo.png'; // Adjust if needed

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

      {/* Center Logo */}
      {/* <div className="footer-center">
        <img src={logo} alt="RGIPT Logo" className="footer-logo" />
        <p>© {new Date().getFullYear()} RGIPT Hostel</p>
      </div> */}

      {/* Right Side */}
      <div className="footer-right">
        <p className="developer-name">Designed & Developed by <p><span>Girish Ranjan</span>
          </p></p>
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
