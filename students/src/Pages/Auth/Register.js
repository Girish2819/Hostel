import React, { useState } from 'react';
import '../../styles/RegisterPage.css';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'; // Adjust the import path as needed

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    hostelBlock: '',
    roomNumber: '',
    course: '',
    passingYear: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add axios or fetch call to send data to backend
  };

  return (
    <Layout Title="Register">
   
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Student Registration</h2>
        <p className="register-subtitle">Create your hostel account</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" required onChange={handleChange} />
          </div>
          <div className="form-group">
      <div className="form-group">
              <label>Gender</label>
              <div className="gender-boxes">
                <label className={`gender-box ${formData.gender === 'Male' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    hidden
                  />
                  Male
                </label>
                <label className={`gender-box ${formData.gender === 'Female' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    hidden
                  />
                  Female
                </label>
           </div>
           </div>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Hostel Block</label>
            <input type="text" name="hostelBlock" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Room Number</label>
            <input type="text" name="roomNumber" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Course</label>
            <input type="text" name="course" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Passing Year</label>
            <input type="text" name="passingYear" required onChange={handleChange} />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
     </Layout>
  );
};

export default Register;
