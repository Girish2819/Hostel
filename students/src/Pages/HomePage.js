import React from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/HomePage.css';
import { useAuth } from '../context/Auth';

const HomePage = () => {
  const { auth } = useAuth();
  const text = "Welcome to RGIPT Hostel";

  return (
    <Layout Title="Home">
      {/* Full screen hero section */}
      <section className="home-wrapper">
        <h1 className="welcome-text">
          {[...text].map((char, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </section>

      
    </Layout>
  );
};

export default HomePage;
