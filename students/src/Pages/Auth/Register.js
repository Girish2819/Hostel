import React, { useState } from 'react';
import '../../styles/RegisterPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [hostelBlock, setHostelBlock] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [course, setCourse] = useState('');
  const [passingYear, setPassingYear] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'phone') setPhone(value);
    if (name === 'hostelBlock') setHostelBlock(value);
    if (name === 'roomNumber') setRoomNumber(value);
    if (name === 'course') setCourse(value);
    if (name === 'passingYear') setPassingYear(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug: Log submitted data
    console.log("Submitting:", {
      name,
      email,
      password,
      gender,
      phone,
      hostelBlock,
      roomNumber,
      course,
      passingYear,
    });

    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
        gender,
        phone,
        hostelBlock,
        roomNumber,
        course,
        passingYear,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error("Axios Error:", error);
      toast.error(error?.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <Layout title="Register">
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
                  <label>Gender</label>
                  <div className="gender-boxes">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === 'Male'}
                        required
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === 'Female'}
                        required
                      />
                      Female
                    </label>
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
