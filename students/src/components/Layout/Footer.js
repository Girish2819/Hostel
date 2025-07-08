import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'; // ← correct relative path from Footer.js


const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center text-white'>
         All right reserved &copy; {new Date().getFullYear()}
        </h4>
        <p className="text-center mt-3">
          <Link to="/About">About
          </Link>  
          |
          <Link to="/contact">Contact</Link> 
          </p>
    </div>
  )
}

export default Footer