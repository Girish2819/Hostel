import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const text = "Welcome to RGIPT Hostel";

  return (
    <div className="home-wrapper">
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
    </div>
  );
};

export default HomePage;
