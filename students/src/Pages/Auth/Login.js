import React from 'react';
import '../../styles/LoginPage.css';
import Layout from '../../components/Layout/Layout';


const Login = () => {
  return (
    <Layout Title="Login">
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to continue</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" />
              <span> Remember Me</span>
            </label>
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>

          {/* 👇 Register link */}
          <div className="register-link">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
