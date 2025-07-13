import React, { useState, useEffect } from 'react';
import './UserDash.css'; 

const UserDashboard = () => {
  const [selectedBlock, setSelectedBlock] = useState('');
  const [animatedTitle, setAnimatedTitle] = useState('');
  
  const hostelBlocks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'URJA'];
  const titleText = "Choose Your Hostel Block";

  // Animate title text letter by letter
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setAnimatedTitle(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleBlockSelect = (block) => {
    setSelectedBlock(block);
    // Add your navigation logic here
    console.log(`Selected block: ${block}`);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <div className="dashboard-title">
          {animatedTitle.split('').map((letter, index) => (
            <span 
              key={index} 
              className="letter"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                color: letter === ' ' ? 'transparent' : '#0a0ab0'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        
        <div className="dashboard-subtitle">
          Select your hostel block to continue
        </div>

        <div className="blocks-grid">
          {hostelBlocks.map((block) => (
            <div
              key={block}
              className={`block-card ${selectedBlock === block ? 'selected' : ''}`}
              onClick={() => handleBlockSelect(block)}
            >
              <div className="block-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <div className="block-name">Block {block}</div>
              <div className="block-description">
                {block === 'URJA' ? 'Energy Block' : `Hostel Block ${block}`}
              </div>
            </div>
          ))}
        </div>

        {selectedBlock && (
          <div className="selected-info">
            <p>You have selected: <strong>Block {selectedBlock}</strong></p>
            <button className="continue-btn">
              Continue to {selectedBlock}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;