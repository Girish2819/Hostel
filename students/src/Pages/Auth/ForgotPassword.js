import React, { useState, useEffect } from 'react';
import '../../styles/ForgotPassword.css'; 
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();
  // Timer for resend OTP
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Check if OTP is complete
  useEffect(() => {
    const isComplete = otp.every(digit => digit !== '');
    setIsOtpValid(isComplete);
  }, [otp]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would make actual API call
      // const response = await fetch('/api/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      setSuccess('OTP sent successfully to your email!');
      setStep(2);
      setResendTimer(60);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const otpValue = otp.join('');
      
      // Here you would make actual API call to verify OTP
      // const response = await fetch('/api/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, otp: otpValue })
      // });

      // For demo, accept any 6-digit OTP
      if (otpValue.length === 6) {
        setSuccess('OTP verified successfully!');
        setStep(3);
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError('');

    try {
      // Simulate API call to resend OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('OTP resent successfully!');
      setResendTimer(60);
      setOtp(['', '', '', '', '', '']);
    } catch (err) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long!');
      setLoading(false);
      return;
    }

    try {
      // Simulate API call to reset password
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would make actual API call to reset password
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, newPassword })
      // });

      setSuccess('Password reset successfully! You can now login with your new password.');
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}></div>
      <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}></div>
      <div className={`step ${step >= 3 ? 'active' : ''}`}></div>
    </div>
  );

  const renderEmailStep = () => (
    <form onSubmit={handleEmailSubmit} className="forgot-form">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>
      <button type="submit" className="forgot-button" disabled={loading}>
        {loading ? 'Sending...' : 'Send OTP'}
      </button>
    </form>
  );

  const renderOtpStep = () => (
    <form onSubmit={handleOtpSubmit} className="forgot-form">
      <div className="form-group">
        <label>Enter OTP</label>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              className="otp-input"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              maxLength="1"
              required
            />
          ))}
        </div>
      </div>
      <button type="submit" className="forgot-button" disabled={loading || !isOtpValid}>
        {loading ? 'Verifying...' : 'Verify OTP'}
      </button>
      <div className="resend-link">
        {resendTimer > 0 ? (
          <span>Resend OTP in <span className="timer">{resendTimer}s</span></span>
        ) : (
          <button type="button" onClick={handleResendOtp} disabled={loading}>
            Resend OTP
          </button>
        )}
      </div>
    </form>
  );

  const renderPasswordStep = () => (
    <form onSubmit={handlePasswordReset} className="forgot-form">
      <div className="form-group">
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />
      </div>
      <button type="submit" className="forgot-button" disabled={loading}>
        {loading ? 'Resetting...' : 'Reset Password'}
      </button>
    </form>
  );

  const getTitle = () => {
    switch (step) {
      case 1: return 'Forgot Password';
      case 2: return 'Verify OTP';
      case 3: return 'Reset Password';
      default: return 'Forgot Password';
    }
  };

  const getSubtitle = () => {
    switch (step) {
      case 1: return 'Enter your email address to receive an OTP';
      case 2: return `Enter the 6-digit code sent to ${email}`;
      case 3: return 'Create a new password for your account';
      default: return 'Enter your email address to receive an OTP';
    }
  };

  return (
    <Layout Title="Forgot Password">
    <div className="forgot-container">
      <div className="forgot-card">
        {renderStepIndicator()}
        
        <h1 className="forgot-title">{getTitle()}</h1>
        <p className="forgot-subtitle">{getSubtitle()}</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        {step === 1 && renderEmailStep()}
        {step === 2 && renderOtpStep()}
        {step === 3 && renderPasswordStep()}

        <div className="back-to-login">
          Remember your password?
          <a href="/login">Sign in here</a>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ForgotPassword;