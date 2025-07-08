import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/Auth'; // Adjust the import path based on your folder structure
// import logo from '../assets/logo.png'; // Update this path based on your folder structure

const Header = () => {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({ user: null, token: '' });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully');
  };

  return (
    <div className="bg-primary text-white rgipt-header d-flex justify-content-between align-items-center">
      {/* Left Side - Logo and Text */}
      <div className="logo-container">
        {/* Uncomment when you have the logo */}
        <img
          src="/images/logo.png" // Update this path based on your folder structure
          alt="RGIPT Logo"
          className="logo"
          style={{ width: '6%',
                 padding: 0,
                 margin: 0,
                 display: 'block', }}
        />
        <div>
          <h1 className="institute-name">
            Rajiv Gandhi Institute of Petroleum Technology
          </h1>
          <p className="institute-details">
            Jais, Amethi &nbsp; | &nbsp;
            <span className="highlight">
              An Institution of National Importance, Government of India
            </span>
          </p>
        </div>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="nav-buttons">
        <NavLink to="/" className="btn btn-light btn-sm me-2">
          About
        </NavLink>
        {!auth?.user ? (
          <NavLink to="/login" className="btn btn-light btn-sm">
            Login
          </NavLink>
        ) : (
          <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;