import React , {useState} from 'react';
import '../../styles/LoginPage.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import axios from 'axios';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  console.log('Login auth:', auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login', { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify({
          user: res.data.user,
          token: res.data.token,
        }));

        axios.defaults.headers.common['Authorization'] = res.data.token;

        if (res.data.user.role === "1") {
          navigate('/admin');
        }
        else {
          navigate('/profile');
        }
      } 
    }
    catch (error) {
      console.error(error);
      toast.error('wrong email or password');
    }
  };

  return (
    <Layout Title="Login">
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please login to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" />
              <span> Remember Me</span>
            </label>
             <Link to="/forgot-password" className="btn btn-link text-decoration-none">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-button">Login</button>

         <div className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
            </div>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
